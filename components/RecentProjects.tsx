"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { PinContainer } from "./ui/Pin";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
  fullDescription: string;
  features: string[];
  challenges: string;
};

const RecentProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch projects from API endpoint
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="py-20 text-center">Loading projects...</div>;
  }

  // Limit to only the first 4 projects
  const displayProjects = projects.slice(0, 4);

  return (
    <div
      id="projects"
      className="py-16 sm:py-20 md:py-28 w-full overflow-hidden"
    >
      <div className="w-full text-center px-0 mb-12 sm:mb-16">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4 md:px-6 lg:px-8 mb-12 sm:mb-16">
        {displayProjects.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#232347] bg-[#181926] shadow-lg hover:shadow-purple-900/20 transition-all duration-300 overflow-hidden flex flex-col h-full group"
          >
            <Link
              href={`/projects/${item.id}`}
              className="flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative w-full h-40 md:h-44 lg:h-48 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover object-top w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/fallback-image.png";
                  }}
                />
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181926]/80 to-transparent z-10" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 pb-4">
                <h1 className="font-bold text-white text-lg sm:text-xl lg:text-2xl mb-2 line-clamp-1">
                  {item.title}
                </h1>
                <p className="text-[#BEC1DD] text-sm sm:text-base lg:text-lg font-light mb-4 line-clamp-2">
                  {item.des}
                </p>

                {/* Tech Stack Icons */}
                {item.iconLists.length > 4 ? (
                  <div className="relative w-full overflow-x-hidden mb-4 group/icon-marquee">
                    <div
                      className="flex gap-2 animate-marquee group-hover/icon-marquee:[animation-play-state:paused]"
                      style={{ minWidth: "max-content" }}
                    >
                      {item.iconLists
                        .concat(item.iconLists)
                        .map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/20 rounded-full bg-black w-9 h-9 flex justify-center items-center"
                          >
                            <Image
                              src={icon}
                              alt={`icon-${index}`}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        ))}
                    </div>
                    <style jsx>{`
                      @keyframes marquee {
                        0% {
                          transform: translateX(0);
                        }
                        100% {
                          transform: translateX(-50%);
                        }
                      }
                      .animate-marquee {
                        animation: marquee 12s linear infinite;
                      }
                    `}</style>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mb-4">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/20 rounded-full bg-black w-9 h-9 flex justify-center items-center"
                      >
                        <Image
                          src={icon}
                          alt={`icon-${index}`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* View Details Button */}
                <div className="mt-auto flex justify-end">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-700 text-white text-sm font-medium shadow-md hover:bg-purple-800 transition-all duration-300 cursor-pointer">
                    View Details
                    <FaLocationArrow size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
