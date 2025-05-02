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
        // Try API endpoint first
        const response = await fetch("/api/projects");

        if (!response.ok) {
          // Fall back to direct JSON access if API fails
          const fallbackResponse = await fetch("/data/projects.json", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });

          if (!fallbackResponse.ok) {
            throw new Error("Failed to fetch projects");
          }

          const fallbackData = await fallbackResponse.json();
          setProjects(fallbackData);
          return;
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

  // Limit to only the first 3 projects
  const displayProjects = projects.slice(0, 3);

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

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-4 md:gap-6 px-0 sm:px-4 md:px-6 lg:px-8 mb-12 sm:mb-16">
        {displayProjects.map((item) => (
          <div
            className="w-full border-b border-gray-800 md:border-0 pb-8 mb-8 md:pb-0 md:mb-0"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              containerClassName="cursor-pointer w-full m-0 p-0"
            >
              <Link
                href={`/projects/${item.id}`}
                className="block px-4 md:px-2"
              >
                <div className="relative overflow-hidden h-[18vh] sm:h-[20vh] lg:h-[30vh] mb-6 sm:mb-8 md:mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/bg.png"
                      alt="bgimg"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={`/projects/${item.id}.jpg`}
                        alt={item.title}
                        fill
                        className="z-10 object-contain p-1"
                        priority
                        onError={(e) => {
                          // Fallback to original image if project-specific image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = item.img;
                        }}
                      />
                    </div>
                  </div>
                </div>

                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="text-sm sm:text-base lg:text-xl font-light sm:font-normal line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "0.75rem 0 1rem",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-4 sm:mt-6 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.slice(0, 3).map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${4 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={`icon-${index}`}
                          width={24}
                          height={24}
                          className="p-1"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center border border-purple/20 rounded-md px-3 py-1 bg-black/20">
                    <span className="text-xs sm:text-sm text-purple whitespace-nowrap">
                      View Details
                    </span>
                    <FaLocationArrow
                      className="ms-2"
                      color="#CBACF9"
                      size={10}
                    />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
