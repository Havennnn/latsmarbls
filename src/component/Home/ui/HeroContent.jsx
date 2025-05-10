import React from "react";
import { motion } from "framer-motion";
import Button from "../../layouts/buttons/Button";

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

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 1.2,
        duration: 0.3,
      },
    },
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
        WEB DEVELOPER
      </motion.p>

      <motion.p
        variants={item}
        className="text-dgray 2xl:text-2xl tracking-tight"
      >
        Motivated and detail-oriented web developer, seeking a full-time
        position where I can contribute to real-world projects, grow
        professionally, and apply my skills in web and app development using
        modern technologies.
      </motion.p>

      <motion.div
        className="py-4 flex items-center gap-3"
        variants={buttonContainerVariants}
      >
        <Button
          onClick={handleDownloadCV}
          icon="fa-solid fa-file-arrow-down"
          text="Resume"
        />
        <Button href="#projects" icon="fa-solid fa-folder" text="Projects" />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
