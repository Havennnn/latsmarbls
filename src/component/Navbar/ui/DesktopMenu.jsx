import React from "react";
import { motion } from "framer-motion";

const DesktopMenu = ({ scrollToSection }) => {
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
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden lg:flex 2xl:hidden">
      <div className="flex">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="px-14 2xl:px-24 text-shadow flex justify-center items-center gap-2"
        >
          <motion.img
            src="/LogoFilled.svg"
            alt="logoFilled"
            className="h-8 w-8 2xl:h-12 2xl:w-12"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
          <p className="font-semibold text-2xl text-dgray">
            Lats
            <span className="font-semibold text-3xl text-gray">Marbls</span>
          </p>
        </motion.h1>
      </div>
      <div className="flex pl-3 pt-3 pb-5 rounded-bl-[1.5rem] bg-dgray element">
        <div className="element2">
          <ul className="flex gap-1 lg:gap-6 duration-500">
            <motion.li
              custom={0}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              className="flex text-white bg-white py-2 px-6 rounded-xl justify-center items-center gap-2 text-sm"
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
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 text-sm transition ease-in-out duration-500 group"
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
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 text-sm transition ease-in-out duration-500 group"
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
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 text-sm transition ease-in-out duration-500 group"
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

export default DesktopMenu;
