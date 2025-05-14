import type { Metadata, ResolvingMetadata } from "next";
import { projects } from "@/data";
import Footer from "@/components/Footer";

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

  const metaDescription =
    project.fullDescription.substring(0, 155) +
    (project.fullDescription.length > 155 ? "..." : "");

  return {
    title: `${project.title} | Project Details`,
    description: metaDescription,
    openGraph: {
      title: project.title,
      description: metaDescription,
      images: [project.img],
    },
  };
}

export default function ProjectDetailsLayout({ children }: Props) {
  return (
    <main className="relative bg-black-100 flex flex-col w-full overflow-hidden">
      {children}
      <Footer />
    </main>
  );
}
