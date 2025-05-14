import { FaLocationArrow } from "react-icons/fa6";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { ParticlesBackground } from "./ui/ParticlesBackground";
import { motion } from "framer-motion";
import Image from "next/image";
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
      className="pb-12 sm:pb-16 md:pb-20 pt-24 sm:pt-28 md:pt-36 min-h-screen w-full relative overflow-hidden"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full px-4 sm:px-6 md:px-8 relative z-20">
        {/* First Section - Personal Details */}
        <div className="flex flex-col items-start justify-center pl-0 sm:pl-4 md:pl-8 lg:pl-16 order-2 md:order-1 mt-6 md:mt-0">
          <h1 className="text-left text-[28px] sm:text-[32px] md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Hi, I&apos;m Md Jabed Hasan
          </h1>

          <p className="text-left mb-4 sm:mb-6 text-sm md:text-lg lg:text-xl max-w-full md:max-w-xl">
            A Full Stack Developer with expertise in{" "}
            <span className="bg-purple-600/80 px-2 py-1 rounded inline-block mt-1 mb-1">
              Typescript, Express.js, Mongoose & Next.js
            </span>
            , building secure and impactful web applications. My work spans from
            front-end designs to robust back-end systems.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
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
          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="mailto:jabed8441@gmail.com"
              className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="Email"
            >
              <FaEnvelope size={16} className="sm:text-lg" />
            </a>
            <a
              href="https://wa.me/+8801743770253"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="WhatsApp"
            >
              <FaWhatsapp size={16} className="sm:text-lg" />
            </a>
            <a
              href="https://bd.linkedin.com/in/developer-jabed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={16} className="sm:text-lg" />
            </a>
            <a
              href="https://github.com/Jabed-Hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-30 rounded-full border border-white/10 transition-all hover:bg-purple hover:text-white hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={16} className="sm:text-lg" />
            </a>
          </div>
        </div>

        {/* Image Section with Purple Effects */}
        <div className="flex justify-center items-center relative order-1 md:order-2 mb-6 md:mb-0 mt-4 md:mt-0">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Purple glowing effect */}
            <div className="absolute inset-0 rounded-full bg-purple-600/40 blur-xl animate-pulse scale-110"></div>

            {/* Purple animated border/outline effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-500 scale-110"
              animate={{
                boxShadow: [
                  "0 0 25px 5px rgba(168, 85, 247, 0.4)",
                  "0 0 40px 10px rgba(168, 85, 247, 0.6)",
                  "0 0 25px 5px rgba(168, 85, 247, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Elegant abstract background effects */}
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 200 200"
              style={{
                top: "-20%",
                left: "-20%",
                width: "140%",
                height: "140%",
                zIndex: 0,
              }}
            >
              {/* Outer ring with gradient */}
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="url(#purpleGradient)"
                strokeWidth="0.5"
                strokeDasharray="1,3"
                className="animate-spin-slow"
              />

              {/* Subtle inner ring */}
              <circle
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke="rgba(168, 85, 247, 0.15)"
                strokeWidth="0.3"
                className="animate-spin-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "30s",
                }}
              />

              {/* Define gradient */}
              <defs>
                <linearGradient
                  id="purpleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                  <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
                </linearGradient>

                <linearGradient
                  id="glowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                  <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                </linearGradient>
              </defs>

              {/* Abstract curved path */}
              <path
                d="M60,100 C60,60 140,60 140,100 C140,140 60,140 60,100 Z"
                fill="none"
                stroke="rgba(168, 85, 247, 0.2)"
                strokeWidth="0.5"
                className="animate-spin-slow"
                style={{ animationDuration: "35s" }}
              />

              {/* Glow effect */}
              <path
                d="M40,100 C40,40 160,40 160,100 C160,160 40,160 40,100 Z"
                fill="url(#glowGradient)"
                opacity="0.15"
                className="animate-pulse"
              />

              {/* Subtle stars/sparkles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 80;
                const x = 100 + radius * Math.cos(angle);
                const y = 100 + radius * Math.sin(angle);

                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="0.7"
                    fill="rgba(255, 255, 255, 0.6)"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "3s",
                    }}
                  />
                );
              })}
            </svg>

            {/* Profile image */}
            <div className="relative z-10 w-60 h-60 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-purple-500/30 bg-[rgba(17,25,40,0.7)] flex items-center justify-center shadow-lg shadow-purple-500/20">
              <img
                src="/j1-removebg-preview.png"
                alt="Profile Image"
                className="w-[93%] h-[93%] object-contain"
                style={{ transform: "scale(1.15)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
