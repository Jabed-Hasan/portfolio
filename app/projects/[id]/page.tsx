"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FaLocationArrow,
  FaExpand,
  FaCompress,
  FaChevronUp,
  FaChevronDown,
  FaPlay,
  FaPause,
} from "react-icons/fa6";
import {
  FaSearch,
  FaSearchMinus,
  FaSearchPlus,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Define Project type
type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  detailsImage: string;
  iconLists: string[];
  link: string;
  github: string;
  githubBackend?: string;
  fullDescription: string;
  features: string[];
  challenges: string;
};

// Client component for the actual page content
const ProjectDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [iconErrors, setIconErrors] = useState<Record<string, boolean>>({});
  const [projectImageError, setProjectImageError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [scrollMode, setScrollMode] = useState<"manual" | "auto" | "loop">(
    "manual"
  );
  const [autoStartScroll, setAutoStartScroll] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (id) {
          const projectId = parseInt(id);

          // Fetch projects from API endpoint
          const response = await fetch("/api/projects");

          if (!response.ok) {
            throw new Error("Failed to fetch projects");
          }

          const projects = await response.json();
          const projectData = projects.find((p: Project) => p.id === projectId);

          if (projectData) {
            setProject(projectData);
          }
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Add effect to auto start scrolling on load
  useEffect(() => {
    if (project && autoStartScroll) {
      // Set a timeout to start automatic scrolling after the component loads
      const timer = setTimeout(() => {
        setIsScrolling(true);
        setScrollMode("auto");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [project, autoStartScroll]);

  // Handle fullscreen state animations
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isFullscreen) {
      timeout = setTimeout(() => {
        setIsFullscreenActive(true);
      }, 50);
    } else {
      setIsFullscreenActive(false);
      // Don't reset scrolling state when closing fullscreen
      // Just reset position but keep the mode
      if (scrollPosition !== 0) {
        setScrollPosition(0);
        // Update the image transform if it exists
        if (imageRef.current?.querySelector("img")) {
          const image = imageRef.current.querySelector("img") as HTMLElement;
          if (image) {
            image.style.transform = `scale(${zoomLevel})`;
          }
        }
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isFullscreen, zoomLevel, scrollPosition]);

  // Handle icon loading errors
  const handleIconError = (icon: string, index: number) => {
    setIconErrors((prev) => ({
      ...prev,
      [`${icon}-${index}`]: true,
    }));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleScrolling = () => {
    if (isScrolling) {
      // Reset scrolling
      setScrollPosition(0);
      setIsAutoScrolling(false);
      setScrollMode("manual");

      // Reset any applied transforms
      if (imageRef.current?.querySelector("img")) {
        const image = imageRef.current.querySelector("img") as HTMLElement;
        if (image) {
          image.style.transform = "";
        }
      }
    } else {
      setScrollMode("auto");
    }
    setIsScrolling(!isScrolling);
  };

  const handleManualScroll = (direction: "up" | "down") => {
    if (!imageRef.current) return;

    const scrollAmount = direction === "up" ? -100 : 100;
    const newPosition = scrollPosition + scrollAmount;

    setScrollPosition(newPosition);

    const image = imageRef.current.querySelector("img");
    if (image) {
      // Apply both translation and scale to maintain zoom level while scrolling
      image.style.transform = `translateY(${newPosition}px) scale(${zoomLevel})`;
    }
  };

  const changeZoom = (amount: number) => {
    const newZoom = Math.max(1, Math.min(3, zoomLevel + amount));
    setZoomLevel(newZoom);

    if (imageRef.current) {
      const image = imageRef.current.querySelector("img");
      if (image) {
        // Update the style directly on the image
        image.style.transform = `scale(${newZoom})`;
        // Maintain the transformOrigin
        image.style.transformOrigin = "center top";
      }
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
    if (!isAutoScrolling) {
      setScrollMode("auto");
    } else {
      setScrollMode("manual");
    }
  };

  const toggleLoopScroll = () => {
    if (scrollMode === "loop") {
      setScrollMode("manual");
    } else {
      setScrollMode("loop");
    }
  };

  // Handle scroll event for the image reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [project]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/" className="text-purple hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-100 py-12 px-0 sm:px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-purple mb-4 sm:mb-8 hover:underline mx-4 sm:mx-0"
        >
          <span className="transform rotate-180 mr-2">
            <FaLocationArrow />
          </span>
          Back to Projects
        </Link>

        <div className="bg-[#13162D] sm:rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 project-card-hover">
          <div className="w-full relative overflow-hidden flex justify-center py-6">
            {/* Desktop mockup container */}
            <div className="desktop-mockup reveal-element full-page-browser">
              {/* Browser bar */}
              <div className="browser-bar">
                <div className="browser-buttons">
                  <div className="browser-button browser-button-red"></div>
                  <div className="browser-button browser-button-yellow"></div>
                  <div className="browser-button browser-button-green"></div>
                </div>
                <div className="browser-address">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple mr-2 rounded-sm flex-shrink-0"></div>
                    <span>
                      https://www.
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.com
                    </span>
                  </div>
                </div>

                {/* Expand button */}
                <button
                  onClick={toggleFullscreen}
                  className="bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-all control-button ml-2"
                  aria-label="View fullscreen"
                >
                  <FaExpand />
                </button>
              </div>

              {/* Desktop screen */}
              <div className="desktop-screen">
                {/* Website content that scrolls */}
                <div className="w-full h-full relative">
                  <Image
                    src={project.detailsImage || project.img}
                    alt={project.title}
                    className="w-full continuous-scroll scroll-ultrafast"
                    style={{
                      objectFit: "contain",
                      objectPosition: "top",
                      minHeight: "600%", // Significantly increased to ensure all content is shown
                      transformOrigin: "top center",
                    }}
                    fill
                    priority
                    unoptimized={
                      !(project.detailsImage || project.img).startsWith("/")
                    }
                    onError={() => {
                      setProjectImageError(true);
                    }}
                  />

                  {/* Updated scroll indicator */}
                  <div className="scroll-indicator">
                    Continuous scrolling preview
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 reveal-element mt-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 reveal-element">
            {project.fullDescription || project.des}
          </p>

          {project.features && (
            <div className="mb-6 sm:mb-10 reveal-element">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm sm:text-base"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div className="mb-6 sm:mb-10 reveal-element">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                {project.challenges}
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center mb-6 sm:mb-10 reveal-element">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 w-full">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.iconLists.map((icon: string, index: number) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black w-16 h-16 flex justify-center items-center mr-4 mb-4"
                >
                  {!iconErrors[`${icon}-${index}`] ? (
                    <Image
                      src={icon}
                      alt={`technology-${index}`}
                      className="p-1.5"
                      width={42}
                      height={42}
                      onError={() => handleIconError(icon, index)}
                      unoptimized={!icon.startsWith("/")}
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center text-white text-sm">
                      Tech
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 reveal-element">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple bg-opacity-20 text-purple hover:bg-opacity-30 transition-all px-6 py-3 rounded-lg"
            >
              Visit Live Site
              <FaLocationArrow className="ml-2" />
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white hover:bg-gray-700 transition-all px-6 py-3 rounded-lg"
              >
                Frontend Repo
                <FaGithub className="ml-2" />
              </a>
            )}

            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white hover:bg-gray-700 transition-all px-6 py-3 rounded-lg"
              >
                Backend Repo
                <FaGithub className="ml-2" />
              </a>
            )}

            <Link
              href="/#projects"
              className="inline-flex items-center border border-gray-600 text-white hover:border-gray-400 transition-all px-6 py-3 rounded-lg"
            >
              View Other Projects
            </Link>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-40 fullscreen-backdrop"
            onClick={toggleFullscreen}
          ></div>
          <div
            ref={imageRef}
            className={`fixed inset-10 z-50 bg-transparent flex items-center justify-center fullscreen-image-wrapper ${
              isFullscreenActive ? "active" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-20 flex gap-2 image-controls">
              <button
                onClick={toggleFullscreen}
                className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all control-button"
                aria-label="Exit fullscreen"
              >
                <FaCompress />
              </button>
            </div>

            {isScrolling && (
              <>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-3 image-controls">
                  <button
                    onClick={() => handleManualScroll("up")}
                    className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all control-button"
                    aria-label="Scroll up"
                    disabled={isAutoScrolling}
                  >
                    <FaChevronUp />
                  </button>
                  <button
                    onClick={() => handleManualScroll("down")}
                    className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all control-button"
                    aria-label="Scroll down"
                    disabled={isAutoScrolling}
                  >
                    <FaChevronDown />
                  </button>
                </div>

                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-3 image-controls">
                  <button
                    onClick={toggleAutoScroll}
                    className={`p-3 rounded-full transition-all control-button ${
                      isAutoScrolling
                        ? "bg-purple/90 text-white"
                        : "bg-black/70 text-white"
                    }`}
                    aria-label={
                      isAutoScrolling ? "Pause auto-scroll" : "Play auto-scroll"
                    }
                  >
                    {isAutoScrolling ? <FaPause /> : <FaPlay />}
                  </button>
                  <button
                    onClick={toggleLoopScroll}
                    className={`p-3 rounded-full transition-all control-button ${
                      scrollMode === "loop"
                        ? "bg-purple/90 text-white"
                        : "bg-black/70 text-white"
                    }`}
                    aria-label="Toggle loop scrolling"
                  >
                    <FaLocationArrow
                      className="animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 image-controls">
                  <button
                    onClick={() => changeZoom(-0.25)}
                    className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all control-button"
                    aria-label="Zoom out"
                  >
                    <FaSearchMinus />
                  </button>
                  <button
                    onClick={() => changeZoom(0.25)}
                    className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all control-button"
                    aria-label="Zoom in"
                  >
                    <FaSearchPlus />
                  </button>
                </div>
              </>
            )}

            {!isScrolling && (
              <div className="absolute left-4 bottom-4 z-20 flex gap-2 image-controls">
                <button
                  onClick={toggleScrolling}
                  className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-all flex items-center gap-2 control-button"
                  aria-label="Enable scrolling"
                >
                  <FaLocationArrow />
                  <span>Enable image scrolling</span>
                </button>
              </div>
            )}

            <div className="relative w-full h-full max-h-[90vh] overflow-hidden">
              <Image
                src={project.detailsImage || project.img}
                alt={project.title}
                className={`w-full h-full object-contain ${
                  scrollMode === "auto" ? "auto-scroll" : ""
                } ${scrollMode === "loop" ? "auto-scroll-loop" : ""} ${
                  !isScrolling ? "continuous-scroll" : ""
                }`}
                style={{
                  transform: isScrolling
                    ? `translateY(${scrollPosition}px) scale(${zoomLevel})`
                    : "",
                  transformOrigin: "center top",
                  objectFit: "contain",
                  minHeight: isScrolling ? "600%" : "200%",
                  transition: "transform 0.1s ease-out",
                }}
                fill
                priority
                unoptimized={
                  !(project.detailsImage || project.img).startsWith("/")
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
