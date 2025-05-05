import React from "react";
import { motion } from "framer-motion";

const HeroContent = ({ handleDownloadCV }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.7,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#4d7aff",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative flex w-full flex-col gap-1 2xl:gap-2 px-6 sm:px-14 2xl:px-24 md:w-[55%] md:py-24 lg:w-[58%] my-auto"
    >
      <motion.p variants={item} className="font-bold text-gray 2xl:text-2xl">
        GOOD DAY!
      </motion.p>

      <motion.h1
        variants={item}
        className="font-bold text-5xl 2xl:text-7xl text-dgray text-shadow"
      >
        I'm Latrell
      </motion.h1>

      <motion.p
        variants={item}
        className="font-bold text-2xl 2xl:text-4xl text-gray"
      >
        WEB and APP DEVELOPER
      </motion.p>

      <motion.p
        variants={item}
        className="text-dgray 2xl:text-2xl tracking-tight"
      >
        I am applying for an internship to receive hands-on training and learn
        from experienced professionals. I am eager to improve my skills in web
        and app development and gain practical knowledge that will help me grow
        in the field
      </motion.p>

      <div className="py-4 flex items-center gap-3">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-center w-32 2xl:w-40 gap-2 p-2 2xl:p-3 text-white text-sm 2xl:text-xl bg-dgray rounded-xl 2xl:rounded-2xl shadow-xl transition duration-300 ease-in-out"
          onClick={handleDownloadCV}
        >
          <i className="fa-solid fa-file-arrow-down text-white"></i>
          Resume
        </motion.button>

        <motion.a
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          href="#projects"
          className="flex items-center justify-center w-32 2xl:w-40 gap-2 p-2 2xl:p-3 text-white text-sm 2xl:text-xl bg-dgray rounded-xl 2xl:rounded-2xl shadow-xl transition duration-300 ease-in-out"
        >
          <i className="fa-solid fa-folder text-white"></i>
          Projects
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
