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
import { cn } from "@/lib/utils";

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
      <div
        className="min-h-screen w-full py-16 sm:py-20 md:py-28"
        style={{ backgroundColor: "#13162D" }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: "#13162D" }}
        >
          <Image
            src="/bg.png"
            alt="background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className="min-h-screen w-full py-16 sm:py-20 md:py-28"
        style={{ backgroundColor: "#13162D" }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: "#13162D" }}
        >
          <Image
            src="/bg.png"
            alt="background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10">
          <div className="text-center py-20">Project not found</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full py-16 sm:py-20 md:py-28"
      style={{ backgroundColor: "#13162D" }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: "#13162D" }}
      >
        <Image
          src="/bg.png"
          alt="background"
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              {project.des}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple hover:bg-purple/90 transition-colors"
              >
                <span className="mr-2">Live Demo</span>
                <FaLocationArrow size={14} />
              </Link>
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="mr-2" size={18} />
                <span>Frontend Code</span>
              </Link>
              {project.githubBackend && (
                <Link
                  href={project.githubBackend}
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="mr-2" size={18} />
                  <span>Backend Code</span>
                </Link>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative mb-12 max-w-[1200px] mx-auto">
            {isFullscreen && (
              <>
                <div
                  className="fixed inset-0 bg-black/70 z-40 fullscreen-backdrop"
                  onClick={toggleFullscreen}
                ></div>
                <div
                  ref={imageRef}
                  className={`fixed inset-5 z-50 bg-transparent flex items-center justify-center fullscreen-image-wrapper ${
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
                            isAutoScrolling
                              ? "Pause auto-scroll"
                              : "Play auto-scroll"
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

            {/* Browser bar and desktop screen as a separate section */}
            <section className="browser-bar-section mb-12">
              <div className="desktop-mockup reveal-element full-page-browser w-full max-w-[1200px] mx-auto relative overflow-hidden">
                {/* Browser bar - always visible at the top */}
                <div
                  className="browser-bar absolute top-0 left-0 w-full z-20"
                  style={{ height: "60px" }}
                >
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

                {/* Desktop screen - scrolling area below the bar */}
                <div
                  className="desktop-screen h-[50vh] relative"
                  style={{ backgroundColor: "#13162D", paddingTop: "60px" }}
                >
                  <div className="w-full h-full relative">
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <Image
                        src="/bg.png"
                        alt="background"
                        fill
                        className="object-cover opacity-50"
                      />
                    </div>
                    <div className="relative z-10 w-full h-full">
                      <Image
                        src={project.detailsImage || project.img}
                        alt={project.title}
                        className="w-full continuous-scroll scroll-ultrafast"
                        style={{
                          objectFit: "contain",
                          objectPosition: "top",
                          minHeight: "600%",
                          transformOrigin: "top center",
                          maxWidth: "100%",
                          margin: "0 auto",
                          padding: "1rem",
                        }}
                        fill
                        priority
                        unoptimized={
                          !(project.detailsImage || project.img).startsWith("/")
                        }
                        onError={() => setProjectImageError(true)}
                      />
                    </div>
                    {/* Updated scroll indicator */}
                    <div className="scroll-indicator">
                      Continuous scrolling preview
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-gray-800/50 border border-gray-700"
                  >
                    <Image
                      src={
                        iconErrors[`${icon}-${index}`]
                          ? "/fallback-icon.png"
                          : icon
                      }
                      alt={`Technology ${index + 1}`}
                      width={24}
                      height={24}
                      className="mr-2"
                      onError={() => handleIconError(icon, index)}
                    />
                    <span className="text-sm text-gray-300">
                      {icon.split("/").pop()?.split(".")[0]}
                    </span>
                  </div>
                ))}
              </div>

              {project.challenges && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Challenges & Solutions
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
