import type { Metadata, ResolvingMetadata } from "next";
import { projects } from "@/data";

type Props = {
  params: { id: string };
  children: React.ReactNode;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Find the project by ID
  const projectId = parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  // Fallback metadata if project not found
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Project Details`,
    description: project.des,
    openGraph: {
      title: project.title,
      description: project.des,
      images: [project.img],
    },
  };
}

export default function ProjectDetailsLayout({ children }: Props) {
  return children;
}
