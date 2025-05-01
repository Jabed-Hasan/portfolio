import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div id="home" className="pb-20 pt-36 min-h-screen relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
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

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center items-center relative z-10 h-[70vh]">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="text-center text-[40px] md:text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm Md Jabed Hasan
          </h1>

          <p className="text-center mb-6 text-sm md:text-lg lg:text-xl">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
