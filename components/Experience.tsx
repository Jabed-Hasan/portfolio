import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workExperience } from "@/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  // Get the single work experience entry
  const experience = workExperience[0];

  return (
    <div id="journey" className="py-20 w-full">
      <h1 className="heading text-center mb-16">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full px-4 sm:px-6 flex justify-center relative">
        {/* Timeline decoration */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600/10 via-purple-600/60 to-purple-600/10 rounded-full" />

        {/* Experience point */}
        <motion.div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-5 h-5 rounded-full bg-purple-600 glow-purple" />
        </motion.div>

        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#0d1026] to-[#151b3b] p-1 rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-[#080c24] rounded-xl p-6 md:p-8 border border-[#252a5c]/30 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full mb-3">
                      Nov 2024 - Present
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {experience.title}
                    </h2>

                    <div className="mt-1 text-blue-400 font-medium">
                      {experience.company}
                    </div>

                    <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                      {experience.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                      <div className="px-3 py-1 bg-[#1a2042] text-blue-300 text-sm rounded-full">
                        MongoDB
                      </div>
                      <div className="px-3 py-1 bg-[#1a2042] text-green-300 text-sm rounded-full">
                        Express.js
                      </div>
                      <div className="px-3 py-1 bg-[#1a2042] text-cyan-300 text-sm rounded-full">
                        React.js
                      </div>
                      <div className="px-3 py-1 bg-[#1a2042] text-yellow-300 text-sm rounded-full">
                        Node.js
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
