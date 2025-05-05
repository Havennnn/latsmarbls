import React from "react";
import { motion } from "framer-motion";

const DesktopMenu = ({ scrollToSection }) => {
  const slideIn = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
  };

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden lg:flex 2xl:hidden">
      <div className="flex">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="px-14 2xl:px-24 text-shadow flex justify-center items-center gap-2"
        >
          <img
            src="/LogoFilled.svg"
            alt="logoFilled"
            className="h-8 w-8 2xl:h-12 2xl:w-12"
          />
          <p className="font-semibold text-2xl text-dgray">
            Lats
            <span className="font-semibold text-3xl text-gray">Marbls</span>
          </p>
        </motion.h1>
      </div>
      <div className="flex pl-3 pt-3 pb-5 rounded-bl-[1.5rem] bg-dgray element">
        <div className="element2">
          <ul className="flex gap-1 lg:gap-6 animate-fadeIn duration-500">
            <li className="flex text-white bg-white py-2 px-6 rounded-xl justify-center items-center gap-2 text-sm">
              <i className="fa-solid fa-house text-dgray cursor-default"></i>
              <p className="font-semibold text-dgray cursor-default">Home</p>
            </li>
            <li
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 text-sm hover:transform hover:scale-105 hover:bg-white transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("skills")}
            >
              <i className="fa-solid fa-code group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Skills</p>
            </li>
            <li
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 text-sm hover:transform hover:scale-105 hover:bg-white transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fa-solid fa-id-badge group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Contact</p>
            </li>
            <li
              className="flex border-2 text-white border-white hover:cursor-pointer py-1 px-6 rounded-xl justify-center items-center gap-2 text-sm hover:transform hover:scale-105 hover:bg-white transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("projects")}
            >
              <i className="fa-solid fa-folder group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Project</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
