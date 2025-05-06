import React from "react";
import { motion } from "framer-motion";

const PreloaderCircle = ({ logoSrc, logoAlt = "Loading" }) => {
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
        duration: 0.4,
        ease: "easeIn",
        when: "afterChildren",
      },
    },
  };

  const spinnerVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        scale: {
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 flex justify-center items-center bg-dgray z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={spinnerVariants}
        className="rounded-full border-b-4 2xl:border-b-8 border-white border-solid h-[90px] w-[90px] lg:h-32 lg:w-32 2xl:h-40 2xl:w-40 flex justify-center items-center animate-spin"
        style={{ animationDuration: "2s" }}
      >
        <motion.div
          variants={spinnerVariants}
          className="rounded-full border-t-2 2xl:border-t-4 border-white border-solid h-[72px] w-[72px] lg:h-24 lg:w-24 2xl:h-32 2xl:w-32 animate-spin"
          style={{ animationDuration: "1s", animationDirection: "reverse" }}
        ></motion.div>
      </motion.div>
      <motion.img
        src={logoSrc || "/Logo.svg"}
        alt={logoAlt}
        className="absolute h-8 w-8 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"
        variants={logoVariants}
      />
    </motion.div>
  );
};

export default PreloaderCircle;
