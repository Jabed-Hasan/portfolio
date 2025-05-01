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
    <div id="projects" className="py-20 w-full overflow-hidden">
      <div className="w-full text-center">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-6 sm:px-10 md:px-16">
        {displayProjects.map((item) => (
          <div className="w-full" key={item.id}>
            <PinContainer
              title={item.title}
              containerClassName="cursor-pointer w-full m-0 p-0"
            >
              <Link href={`/projects/${item.id}`} className="block">
                <div className="relative flex items-center justify-center overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/bg.png"
                      alt="bgimg"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    width={300}
                    height={200}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={`icon-${index}`}
                          width={28}
                          height={28}
                          className="p-1"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center border border-purple/20 rounded-md px-3 py-1 bg-black/20">
                    <span className="text-sm text-purple whitespace-nowrap">
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
