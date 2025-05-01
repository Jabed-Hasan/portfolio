import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-12 sm:py-20 text-white relative">
      {/* Spotlights background - return to previous style */}
      <div className="hidden sm:block">
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
        className="h-full w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left profile section - fully transparent */}
          <motion.div
            className="border border-zinc-800 rounded-lg p-4 sm:p-6 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <motion.div
                className="w-16 h-16 mb-3 sm:mb-0 sm:mr-4 bg-indigo-600 rounded-full flex items-center justify-center text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                JH
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Md Jabed Hasan</h3>
                <p className="text-gray-400">jabed8441@gmail.com</p>
              </div>
            </div>

            <div className="mt-4">
              <motion.p
                className="text-gray-300 mb-4 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                After more than a year of learning, I have developed a solid
                foundation in the MERN stack and have experience in building
                dynamic and scalable applications. In the coming year, my goal
                is to master modern technologies such as PostgreSQL, Prisma,
                GraphQL, Docker, and AWS to create secure, efficient, and
                future-proof solutions that address real-world challenges. I aim
                to build a strong foundation and increase my versatility by
                exploring these technologies.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-4 sm:mb-8 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Furthermore, I'll be learning new technologies to stay aligned
                with the industry trends and demand. Ultimately, I aspire to
                become a senior software developer with a comprehensive skill
                set and the confidence to lead projects effectively after 2-4
                years.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://linkedin.com"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <FaLinkedinIn />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://github.com"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://facebook.com"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <FaFacebookF />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://x.com"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-md border border-zinc-800 flex items-center justify-center hover:bg-black border-zinc-700 transition-colors"
                  >
                    <FaXTwitter />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 sm:mt-0 sm:ml-auto"
                >
                  <Link
                    href="/resume.pdf"
                    className="border border-white rounded px-3 py-1.5 sm:px-4 sm:py-2 text-sm hover:bg-white hover:text-black transition-colors flex items-center"
                  >
                    View Resume
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right skills grid - fully transparent */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 h-full">
              <motion.div
                className="border border-zinc-800 rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div
                    className="text-2xl sm:text-3xl mr-3 sm:mr-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    🔤
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    English Proficiency
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  I have strong English communication skills, both written and
                  verbal.
                </p>
              </motion.div>

              <motion.div
                className="border border-zinc-800 rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div
                    className="text-2xl sm:text-3xl mr-3 sm:mr-4"
                    animate={{
                      rotate: [0, 360],
                      transition: {
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                      },
                    }}
                  >
                    🔄
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Continuous Learner
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Moving forward, I aim to master modern technologies like
                  PostgreSQL, Prisma, GraphQL, and Docker
                </p>
              </motion.div>

              <motion.div
                className="border border-zinc-800 rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div
                    className="text-2xl sm:text-3xl mr-3 sm:mr-4"
                    whileHover={{ scale: 1.2 }}
                  >
                    🧩
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Problem Solver
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  I enjoy tackling complex challenges and developing effective
                  solutions that address real-world problems with creativity and
                  precision.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
