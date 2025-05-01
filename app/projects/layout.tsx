import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
  description: "Detailed information about my projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 