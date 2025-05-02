"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Define Project type
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

// Client component for the actual page content
const ProjectDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [iconErrors, setIconErrors] = useState<Record<string, boolean>>({});
  const [projectImageError, setProjectImageError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (id) {
          const projectId = parseInt(id as string);

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

            const projects = await fallbackResponse.json();
            const projectData = projects.find(
              (p: Project) => p.id === projectId
            );

            if (projectData) {
              setProject(projectData);
            }
            setLoading(false);
            return;
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

  // Handle icon loading errors
  const handleIconError = (icon: string, index: number) => {
    setIconErrors((prev) => ({
      ...prev,
      [`${icon}-${index}`]: true,
    }));
  };

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

        <div className="bg-[#13162D] sm:rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10">
          <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] mb-6 sm:mb-10 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center">
            <Image
              src="/bg.png"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
              fill
              priority
            />
            {!projectImageError ? (
              <Image
                src={`/projects/${project.id}.jpg`}
                alt={project.title}
                className="z-10 relative max-h-[80%] max-w-full px-4"
                width={600}
                height={400}
                priority
                onError={() => {
                  setProjectImageError(true);
                }}
              />
            ) : (
              <Image
                src={project.img}
                alt={project.title}
                className="z-10 relative max-h-[80%] max-w-full px-4"
                width={500}
                height={300}
                priority
                onError={() => console.warn("Failed to load project image")}
                unoptimized={!project.img.startsWith("/")}
              />
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10">
            {project.fullDescription || project.des}
          </p>

          {project.features && (
            <div className="mb-6 sm:mb-10">
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
            <div className="mb-6 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                {project.challenges}
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center mb-6 sm:mb-10">
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

          <div className="flex flex-wrap gap-3 sm:gap-4">
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
                GitHub Repo
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
    </div>
  );
};

export default ProjectDetailsPage;
