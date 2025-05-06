import React from "react";
import { motion } from "framer-motion";

const StickyNavbarLogo = ({ isSticky = false }) => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      className={`flex ${
        isSticky ? "gap-1" : "gap-2"
      } items-center justify-center`}
    >
      <motion.img
        src="/LogoFilled.svg"
        alt="logo"
        className="w-6 h-6 2xl:w-9 2xl:h-9"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      />
      <motion.h1
        className={`font-bold ${
          isSticky
            ? "2xl:text-2xl text-dgray hidden md:block"
            : "text-dgray 2xl:text-2xl"
        }`}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Lats
        <span className="text-gray text-xl 2xl:text-3xl">Marbls</span>
      </motion.h1>
    </div>
  );
};

export default StickyNavbarLogo;
