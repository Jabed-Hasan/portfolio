import { FaLocationArrow } from "react-icons/fa6";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { ParticlesBackground } from "./ui/ParticlesBackground";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CodeLineProps {
  width: string | number;
  delay: number;
  color: string;
}

const CodeLine = ({ width, delay, color }: CodeLineProps) => (
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width, opacity: 1 }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    }}
    className="h-2 rounded-md my-3"
    style={{ backgroundColor: color }}
  />
);

const CodeBlock = () => {
  const colors = [
    "#61dafb", // React blue
    "#41e879", // Green
    "#f766b3", // Pink
    "#ffe45e", // Yellow
    "#9580ff", // Purple
  ];

  return (
    <div className="w-full h-full p-6 bg-[#1e1e3f] rounded-lg">
      <div className="flex gap-2 mb-4">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: ["#ff5f57", "#febc2e", "#28c840"][i] }}
          />
        ))}
      </div>

      <div className="space-y-2">
        {[...Array(8)].map((_, i) => (
          <CodeLine
            key={i}
            width={`${Math.floor(Math.random() * 30) + 70}%`}
            delay={i * 0.2}
            color={colors[i % colors.length]}
          />
        ))}
      </div>

      <motion.div
        className="w-2 h-4 bg-white mt-2"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id="home"
      className="pb-20 pt-36 min-h-screen w-full relative overflow-hidden"
    >
      {/* Particles Animation Background */}
      <ParticlesBackground />

      {/* Spotlight effects */}
      <div className="z-10 relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-[70vh] pl-0 pr-4 relative z-20">
        {/* First Section - Personal Details */}
        <div className="flex flex-col items-start justify-center pl-8 md:pl-16">
          <h1 className="text-left text-[32px] md:text-4xl lg:text-6xl font-bold mb-6">
            Hi, I&apos;m Md Jabed Hasan
          </h1>

          <p className="text-left mb-6 text-sm md:text-lg lg:text-xl max-w-xl">
            A Full Stack Developer with expertise in{" "}
            <span className="bg-purple-600/80 px-2 py-1 rounded">
              Typescript, Express.js, Mongoose & Next.js
            </span>
            , building secure and impactful web applications. My work spans from
            front-end designs to robust back-end systems.
          </p>

          <div className="flex gap-4 mt-2">
            <a href="#about">
              <MagicButton
                title="Learn More"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#projects">
              <MagicButton
                title="View projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          {/* Contact Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="mailto:jabed8441@gmail.com"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="Email"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://wa.me/+8801743770253"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://bd.linkedin.com/in/developer-jabed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Jabed-Hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Second Section - Coding Animation */}
        <div className="hidden md:flex justify-center items-center">
          <motion.div
            className="w-full max-w-md backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-10 rounded-xl border border-white/10 p-2 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated code block */}
            <motion.div
              className="relative overflow-hidden rounded-lg"
              style={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transform: "perspective(1000px) rotateY(-10deg) rotateX(10deg)",
              }}
            >
              <CodeBlock />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
