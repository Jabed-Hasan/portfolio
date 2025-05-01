import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 text-white relative min-h-screen">
      {/* Spotlights background - return to previous style */}
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

      {/* Grid background with same styling as hero */}
      <div
        className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-center">ABOUT ME</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left profile section - fully transparent */}
          <div className="lg:col-span-2 border border-zinc-800 rounded-lg p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-4 bg-indigo-600 rounded-full flex items-center justify-center text-xl font-bold">
                JN
              </div>
              <div>
                <h3 className="text-xl font-bold">Md Jabed Hasan</h3>
                <p className="text-gray-400">jabed8441@gmail.com</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-300 mb-4">
                After more than a year of learning, I have developed a solid
                foundation in the MERN stack and have experience in building
                dynamic and scalable applications. In the coming year, my goal
                is to master modern technologies such as PostgreSQL, Prisma,
                GraphQL, Docker, and AWS to create secure, efficient, and
                future-proof solutions that address real-world challenges. I aim
                to build a strong foundation and increase my versatility by
                exploring these technologies.
              </p>

              <p className="text-gray-300 mb-8">
                Furthermore, I'll be learning new technologies to stay aligned
                with the industry trends and demand. Ultimately, I aspire to
                become a senior software developer with a comprehensive skill
                set and the confidence to lead projects effectively after 2-4
                years.
              </p>

              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com"
                  className="w-10 h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com"
                  className="w-10 h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="w-10 h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://x.com"
                  className="w-10 h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-black border-zinc-700 transition-colors"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="/resume.pdf"
                  className="border border-white rounded px-4 py-2 ml-auto hover:bg-white hover:text-black transition-colors flex items-center"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>

          {/* Right skills grid - fully transparent */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">📦</div>
                <h3 className="text-xl font-bold">Full-Stack Expertise</h3>
              </div>
              <p className="text-gray-300">
                Proficient in building end-to-end applications TypeScript,
                MongoDB, Express.JS, React.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🔤</div>
                <h3 className="text-xl font-bold">English Proficiency</h3>
              </div>
              <p className="text-gray-300">
                I have strong English communication skills, both written and
                verbal.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">💻</div>
                <h3 className="text-xl font-bold">Modern Front-End Skills</h3>
              </div>
              <p className="text-gray-300">
                Focused on modern front-end development with React, Tailwind
                CSS, Redux and Next.js.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🔄</div>
                <h3 className="text-xl font-bold">Continuous Learner</h3>
              </div>
              <p className="text-gray-300">
                Moving forward, I aim to master modern technologies like
                PostgreSQL, Prisma, GraphQL, and Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
