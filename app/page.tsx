"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
// Import AboutMe component instead of Grid
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col w-full overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <AboutMe />
      <Skills />
      <RecentProjects />
      <Education />
      <Experience />
      <Blog />
      <Approach />
      <Footer />
    </main>
  );
};

export default Home;
