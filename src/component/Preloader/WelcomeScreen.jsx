import React from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({
  logoSrc = "/LogoFilled.svg",
  primaryText = "Lats",
  secondaryText = "Marbls",
  className = "text-dgray font-bold flex justify-center items-center gap-2",
}) => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="absolute h-screen w-screen bg-white overflow-hidden z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex justify-center items-center h-full w-full">
        <motion.h1 variants={contentVariants} className={className}>
          <motion.img
            variants={logoVariants}
            src={logoSrc}
            className="w-6 h-6 md:h-8 md:w-8 2xl:h-10 2xl:w-10"
          />
          <motion.p
            variants={textVariants}
            className="text-xl md:text-3xl 2xl:text-4xl"
          >
            {primaryText}
            <span className="text-2xl md:text-4xl 2xl:text-5xl text-gray">
              {secondaryText}
            </span>
          </motion.p>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
