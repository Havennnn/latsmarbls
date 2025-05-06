import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({
  icon,
  text,
  sectionId,
  scrollToSection,
  isMobile = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses =
    "border rounded-[1.5rem] flex items-center justify-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300";

  const itemVariants = {
    initial: { opacity: 0, y: -5 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const textSlideVariants = {
    initial: { width: 0, opacity: 0, x: -10 },
    animate: {
      width: "auto",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.li
      onClick={() => scrollToSection(sectionId)}
      className={`${baseClasses} ${
        isMobile
          ? "px-2 w-[45px] h-[45px] text-sm"
          : "px-3 2xl:px-5 2xl:text-2xl h-8 2xl:h-12"
      }`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={itemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center h-full ${
          isMobile ? "justify-center" : ""
        }`}
      >
        <i className={`fa-solid ${icon}`}></i>
        <AnimatePresence>
          {isHovered && !isMobile && (
            <motion.span
              variants={textSlideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="whitespace-nowrap ml-2 my-0"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default NavItem;
