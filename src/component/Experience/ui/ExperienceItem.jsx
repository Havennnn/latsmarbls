import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ experience }) => {
  return (
    <motion.div
      className="w-full px-4 sm:px-0"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <motion.div
        className="text-center mb-6 mt-14 lg:mt-0 lg:mb-8"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
        }}
      >
        <h2 className="text-xl sm:text-2xl 2xl:text-3xl text-dgray font-bold mb-2 sm:mb-3">
          My Professional Journey
        </h2>
        <p className="text-gray text-base sm:text-lg 2xl:text-2xl max-w-3xl mx-auto">
          Here's a highlight of my professional experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mt-6 sm:mt-10">
        <div className="md:col-span-4 relative">
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="bg-dgray rounded-full p-2 sm:p-3 flex items-center justify-center">
                  <i className="fa-solid fa-briefcase text-white text-lg sm:text-xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-dgray">
                  {experience.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <i className="fa-solid fa-building text-dgray text-base sm:text-lg"></i>
                <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray">
                  {experience.company}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-dgray rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mt-1 sm:mt-2">
                <i className="fa-regular fa-calendar text-white"></i>
                <p className="text-white font-medium text-xs sm:text-sm">
                  {experience.period}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <div className="grid grid-cols-4 gap-1 sm:gap-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="h-1 sm:h-2 rounded-full bg-dgray opacity-10"
                  ></div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="h-0.5 sm:h-1 rounded-full bg-dgray opacity-5"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col mt-4 md:mt-0">
          <div>
            <div className="mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-xl md:text-2xl 2xl:text-3xl font-semibold text-dgray mb-2 sm:mb-3 flex items-center gap-2">
                Responsibilities
              </h1>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    className="text-gray text-sm sm:text-base md:text-lg 2xl:text-xl"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.3 + index * 0.1,
                        },
                      },
                    }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
