import React from "react";
import { motion } from "framer-motion";

const MobileHeader = ({ toggleMenu, isMenuOpen }) => {
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

  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        duration: 0.3,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 flex lg:hidden">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="font-semibold py-2 text-gray px-6 sm:px-14 text-shadow flex justify-center items-center gap-2"
      >
        <motion.img
          src="/LogoFilled.svg"
          alt="logoFilled"
          className="h-8 w-8"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        />
        <p className="text-xl text-dgray font-semibold">
          Lats
          <span className="font-semibold text-2xl text-gray">Marbls</span>
        </p>
      </motion.h1>
      <div className="flex justify-center items-center p-3 w-16 rounded-bl-[1.5rem] bg-dgray element5 menu">
        <motion.button
          whileTap="tap"
          onClick={toggleMenu}
          className="text-white2 element6 w-full h-full flex justify-center items-center"
        >
          {isMenuOpen ? (
            <motion.i
              key="close"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              className="fa-solid fa-close text-white text-4xl transition ease-in-out"
            />
          ) : (
            <motion.i
              key="menu"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              className="fa-solid fa-bars text-white text-4xl [40px] transition ease-in-out"
            />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default MobileHeader;
