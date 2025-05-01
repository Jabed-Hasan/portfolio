import React from "react";
import { motion } from "framer-motion";

import { education } from "@/data";
import { Button } from "./ui/MovingBorders";

const Education = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div id="education" className="py-20 w-full flex flex-col items-center">
      <h1 className="heading text-center">
        My <span className="text-purple">education</span>
      </h1>

      <div className="w-full max-w-5xl mx-auto mt-12 grid grid-cols-1 gap-5">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            className="w-full"
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              containerClassName="w-full"
              className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-6 lg:p-8 gap-4 w-full">
                <div className="flex justify-center lg:justify-start">
                  <motion.img
                    src={edu.thumbnail}
                    alt={edu.institution}
                    className="lg:w-32 md:w-24 w-20 object-contain"
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  />
                </div>
                <div className="lg:ms-6 flex-1">
                  <h1 className="text-center lg:text-start text-xl md:text-2xl font-bold">
                    {edu.institution}
                  </h1>
                  <h2 className="text-center lg:text-start lg:text-xl text-purple font-semibold mt-2">
                    {edu.degree}
                  </h2>
                  <p className="text-center lg:text-start text-white-100 mt-1 text-sm font-medium">
                    {edu.duration}
                  </p>
                  <p className="text-center lg:text-start text-white-100 mt-3 font-semibold">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
