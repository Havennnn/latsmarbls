import React from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({
  logoSrc = "/LogoFilled.svg",
  primaryText = "Lats",
  secondaryText = "Marbls",
  className = "text-dgray font-bold flex justify-center items-center gap-2",
}) => {
  return (
    <div className="absolute h-screen w-screen bg-white overflow-hidden z-50">
      <div className="flex justify-center items-center h-full w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={className}
        >
          <img
            src={logoSrc}
            className="w-6 h-6 md:h-8 md:w-8 2xl:h-10 2xl:w-10"
          />
          <p className="text-xl md:text-3xl 2xl:text-4xl">
            {primaryText}
            <span className="text-2xl md:text-4xl 2xl:text-5xl text-gray">
              {secondaryText}
            </span>
          </p>
        </motion.h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;
