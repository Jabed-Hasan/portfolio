"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";
import { FaHome, FaUser, FaCode, FaBriefcase, FaNewspaper, FaRocket } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Check which section is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -20% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all section elements
    const sections = document.querySelectorAll("div[id], section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();

    // Extract the ID from the hash link
    const sectionId = link.replace("#", "");

    // Set active section
    setActiveSection(link);

    // Use our utility to scroll smoothly
    scrollToSection(sectionId);
  };

  // Map section names to icons
  const getIconForNavItem = (name: string) => {
    switch(name.toLowerCase()) {
      case 'home': return <FaHome className="text-lg" />;
      case 'about': return <FaUser className="text-lg" />;
      case 'skills': return <FaCode className="text-lg" />;
      case 'journey': return <FaRocket className="text-lg" />;
      case 'projects': return <FaBriefcase className="text-lg" />;
      case 'blogs': return <FaNewspaper className="text-lg" />;
      default: return <FaHome className="text-lg" />;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 sm:px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                activeSection === navItem.link
                  ? "text-blue-500 dark:text-blue-400 font-medium"
                  : ""
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-[5000] flex justify-center">
        <div 
          className="flex items-center justify-between px-3 py-2 rounded-full gap-1 bg-black border border-gray-800"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.95)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`mobile-link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className={cn(
                "p-2 rounded-full flex items-center justify-center transition-colors",
                activeSection === navItem.link
                  ? "text-blue-400 bg-[rgba(59,130,246,0.1)]"
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              {getIconForNavItem(navItem.name)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
