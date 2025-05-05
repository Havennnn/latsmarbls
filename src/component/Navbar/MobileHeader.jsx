import React from "react";
import { motion } from "framer-motion";

const MobileHeader = ({ toggleMenu, isMenuOpen }) => {
  const slideIn = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
  };

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 flex lg:hidden">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={slideIn}
        className="font-semibold py-2 text-gray px-6 sm:px-14 text-shadow flex justify-center items-center gap-2"
      >
        <img src="/LogoFilled.svg" alt="logoFilled" className="h-8 w-8" />
        <p className="text-xl text-dgray font-semibold">
          Lats
          <span className="font-semibold text-2xl text-gray">Marbls</span>
        </p>
      </motion.h1>
      <div className="flex justify-center items-center p-3 w-16 rounded-bl-[1.5rem] bg-dgray element5 menu">
        <button onClick={toggleMenu} className="text-white2 element6">
          {isMenuOpen ? (
            <i className="fa-solid fa-close text-white text-4xl hover:transform hover:scale-105 transition ease-in-out animate-fadeIn duration-500"></i>
          ) : (
            <i className="fa-solid fa-bars text-white text-4xl [40px] hover:transform hover:scale-105 transition ease-in-out animate-fadeIn duration-500"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
