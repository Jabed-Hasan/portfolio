"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

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
    <div className="min-h-screen bg-black-100 py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-purple mb-8 hover:underline"
        >
          <span className="transform rotate-180 mr-2">
            <FaLocationArrow />
          </span>
          Back to Projects
        </Link>

        <div className="bg-[#13162D] rounded-3xl p-6 sm:p-10">
          <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] mb-10 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/bg.png"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={project.img}
              alt={project.title}
              className="z-10 relative max-h-[80%] max-w-full px-4"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            {project.fullDescription || project.des}
          </p>

          {project.features && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-gray-300">{project.challenges}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center mb-10">
            <h2 className="text-2xl font-bold mb-4 w-full">
              Technologies Used
            </h2>
            <div className="flex flex-wrap">
              {project.iconLists.map((icon: string, index: number) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black w-12 h-12 flex justify-center items-center mr-4 mb-4"
                >
                  <img src={icon} alt={`technology-${index}`} className="p-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
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
