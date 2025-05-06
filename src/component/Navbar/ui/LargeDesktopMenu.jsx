import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LargeDesktopMenu = ({ scrollToSection }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

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

  const navItems = [
    { id: "home", icon: "fa-house", label: "Home", active: true },
    { id: "skills", icon: "fa-code", label: "Skills" },
    { id: "education", icon: "fa-graduation-cap", label: "Education" },
    { id: "experience", icon: "fa-briefcase", label: "Experience" },
    { id: "contact", icon: "fa-id-badge", label: "Contact" },
    { id: "projects", icon: "fa-folder", label: "Projects" },
  ];

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
          <ul className="flex gap-5 duration-500">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`flex ${
                  item.active
                    ? "text-white bg-white"
                    : "border-4 text-white border-white"
                } hover:cursor-pointer py-2 px-8 rounded-2xl justify-center items-center text-2xl transition ease-in-out duration-500 group overflow-hidden h-14`}
                onClick={() => item.id !== "home" && scrollToSection(item.id)}
              >
                <div className="flex items-center h-full">
                  <i
                    className={`fa-solid ${item.icon} ${
                      item.active
                        ? "text-dgray cursor-default"
                        : "group-hover:text-dgray"
                    }`}
                  ></i>
                  <AnimatePresence>
                    {(hoveredItem === item.id || item.active) && (
                      <motion.p
                        variants={textSlideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`font-semibold ${
                          item.active
                            ? "text-dgray cursor-default"
                            : "group-hover:text-dgray"
                        } whitespace-nowrap ml-3 my-0`}
                      >
                        {item.label}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeDesktopMenu;
