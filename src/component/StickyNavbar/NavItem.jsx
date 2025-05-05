import React from "react";
import { motion } from "framer-motion";

const NavItem = ({
  icon,
  text,
  sectionId,
  scrollToSection,
  isMobile = false,
}) => {
  const baseClasses =
    "border rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300";

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

  const mobileTextVariants = {
    hidden: { opacity: 0, width: 0, x: -10 },
    visible: {
      opacity: 1,
      width: "auto",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
  };

  return isMobile ? (
    <motion.li
      onClick={() => scrollToSection(sectionId)}
      className={`group ${baseClasses} px-3`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={itemVariants}
    >
      <i className={`fa-solid ${icon} transition-all duration-300 py-1`}></i>
      <motion.span
        className="overflow-hidden"
        initial="hidden"
        variants={mobileTextVariants}
        animate="hidden"
        whileHover="visible"
      >
        {text}
      </motion.span>
    </motion.li>
  ) : (
    <motion.li
      onClick={() => scrollToSection(sectionId)}
      className={`${baseClasses} px-3 2xl:px-5 2xl:text-2xl`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={itemVariants}
    >
      <i className={`fa-solid ${icon}`}></i>
      <p>{text}</p>
    </motion.li>
  );
};

export default NavItem;
