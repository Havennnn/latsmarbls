import React from "react";
import { motion } from "framer-motion";

const SkillsJourney = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const journeyVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.05,
      },
    },
  };

  return (
    <motion.div
      className="relative bg-white w-full h-full rounded-tl-[1.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] md:w-2/4 p-4"
      variants={journeyVariants}
    >
      <div className="absolute right-0 top-0 pl-3 py-3 2xl:py-2 flex gap-2 bg-dgray justify-center items-center rounded-bl-[1.5rem] element11">
        <i className="fa-solid fa-code text-3xl text-white"></i>
        <h1 className="text-4xl 2xl:text-5xl text-white font-bold element10">
          Skills
        </h1>
      </div>

      <motion.div className="flex flex-col" variants={containerVariants}>
        <motion.h1
          className="text-xl pt-5 md:px-2 2xl:px-5 md:pt-5 lg:pt-2 md:text-[24px] lg:text-3xl 2xl:text-4xl px-1 text-dgray font-bold"
          variants={itemVariants}
        >
          My Journey
        </motion.h1>

        <motion.div
          className="mt-4 md:mt-5 2xl:mt-8 px-1 md:px-2 2xl:px-5 flex flex-col tracking-tight text-sm md:text-base 2xl:text-xl text-gray"
          variants={itemVariants}
        >
          <p>
            I started learning web development through YouTube tutorials and
            online searches, which helped me grasp the basics of HTML, CSS, and
            JavaScript. However, I struggled with the lack of structure and felt
            stuck. Everything changed when I found Angela Yu's online course.
          </p>

          <p className="mt-2">
            Her structured lessons and hands-on projects helped me build a solid
            foundation and gain confidence in my skills. This marked a turning
            point, allowing me to create more complex projects and grow as a
            developer.
          </p>

          <p className="mt-2">
            Now, I feel equipped to continue learning and building projects that
            truly reflect my creativity and passion.
          </p>

          <motion.span
            className="mt-6 pb-6 lg:pb-0 text-dgray text-xl 2xl:text-3xl font-semibold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2,
                },
              },
            }}
          >
            😀 Let's work together!
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsJourney;
