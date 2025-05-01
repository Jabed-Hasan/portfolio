import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { ParticlesBackground } from "./ui/ParticlesBackground";

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

      <div className="flex justify-center items-center h-[70vh] w-full px-4 relative z-20">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-center text-[40px] md:text-5xl lg:text-7xl font-bold mb-6">
            Hi, I&apos;m Md Jabed Hasan
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
