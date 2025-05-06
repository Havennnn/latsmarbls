import React from "react";
import { motion } from "framer-motion";

const EducationItem = ({ education }) => {
  return (
    <motion.div
      className="relative bg-white shadow-md rounded-[1rem] p-6 hover:shadow-lg transition-all mb-8 overflow-hidden w-full"
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.98 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-dgray opacity-10 rounded-full -mr-8 -mt-8"></div>

      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
        <div className="flex items-start md:items-center gap-3">
          <div className="bg-dgray rounded-full p-3 hidden md:flex">
            <i className="fa-solid fa-graduation-cap text-white text-2xl"></i>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-dgray">
              {education.institution}
            </h3>
            <p className="text-lg md:text-xl 2xl:text-2xl text-gray">
              {education.degree}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-lg 2xl:text-xl font-medium text-white mt-3 md:mt-0 bg-dgray rounded-full px-3 py-1 inline-block">
          {education.period}
        </p>
      </div>

      <div className="pl-0 md:pl-12">
        <h4 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-dgray mb-3">
          What I Learned
        </h4>
        <ul className="list-disc pl-5 space-y-2">
          {education.whatILearned.map((item, index) => (
            <motion.li
              key={index}
              className="text-gray md:text-lg 2xl:text-xl"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.2 + index * 0.1,
                  },
                },
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {education.courses && (
          <div className="mt-4">
            <h4 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-dgray mb-2">
              Key Courses
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-50 text-gray px-3 py-1 rounded-full text-sm border border-gray-200 md:text-md 2xl:text-lg"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.3 + index * 0.1,
                      },
                    },
                  }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EducationItem;
