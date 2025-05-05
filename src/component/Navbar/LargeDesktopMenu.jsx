import React from "react";
import { motion } from "framer-motion";

const LargeDesktopMenu = ({ scrollToSection }) => {
  const slideIn = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
  };

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden 2xl:flex">
      <div className="flex">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="px-24 text-shadow flex justify-center items-center gap-3"
        >
          <img src="/LogoFilled.svg" alt="logoFilled" className="h-12 w-12" />
          <p className="font-semibold text-4xl text-dgray">
            Lats
            <span className="font-semibold text-5xl text-gray">Marbls</span>
          </p>
        </motion.h1>
      </div>
      <div className="flex pl-5 pt-5 pb-6 rounded-bl-[2rem] bg-dgray elementxl">
        <div className="element2xl">
          <ul className="flex gap-8 animate-fadeIn duration-500">
            <li className="flex text-white bg-white justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3">
              <i className="fa-solid fa-house text-dgray cursor-default"></i>
              <p className="font-semibold text-dgray cursor-default">Home</p>
            </li>
            <li
              className="flex text-white border-white hover:cursor-pointer justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3 border-4 hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-white transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("skills")}
            >
              <i className="fa-solid fa-code group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Skills</p>
            </li>
            <li
              className="flex text-white border-white hover:cursor-pointer justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3 border-4 hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-white transition ease-in-out duration-500 group"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fa-solid fa-id-badge group-hover:text-dgray"></i>
              <p className="font-semibold group-hover:text-dgray">Contact</p>
            </li>
            <li
              className="flex text-white border-white hover:cursor-pointer justify-center items-center text-2xl py-2 px-8 rounded-2xl gap-3 border-4 hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-white transition ease-in-out duration-500 group"
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

export default LargeDesktopMenu;
