import React from "react";
import { motion } from "framer-motion";

const LargeDesktopMenu = ({ scrollToSection }) => {
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

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.4 + custom * 0.1,
      },
    }),
    hover: {
      backgroundColor: "#ffffff",
      color: "#1E1E1E",
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden 2xl:flex">
      <div className="flex">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="px-24 text-shadow flex justify-center items-center gap-3"
        >
          <motion.img
            src="/LogoFilled.svg"
            alt="logoFilled"
            className="h-12 w-12"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
          <p className="font-semibold text-4xl text-dgray">
            Lats
            <span className="font-semibold text-5xl text-gray">Marbls</span>
          </p>
        </motion.h1>
      </div>
      <div className="flex pl-5 pt-5 pb-6 rounded-bl-[2rem] bg-dgray elementxl">
        <div className="element2xl">
          <ul className="flex gap-8 duration-500">
            <motion.li
              custom={0}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              className="flex text-white bg-white justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3"
            >
              <i className="fa-solid fa-house text-dgray cursor-default"></i>
              <p className="font-semibold text-dgray cursor-default">Home</p>
            </motion.li>
            <motion.li
              custom={1}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex text-white border-white hover:cursor-pointer justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3 border-4 transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("skills")}
            >
              <i className="fa-solid fa-code group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Skills</p>
            </motion.li>
            <motion.li
              custom={2}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex text-white border-white hover:cursor-pointer justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3 border-4 transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fa-solid fa-id-badge group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Contact</p>
            </motion.li>
            <motion.li
              custom={3}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex text-white border-white hover:cursor-pointer justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3 border-4 transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("projects")}
            >
              <i className="fa-solid fa-folder group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Project</p>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeDesktopMenu;
