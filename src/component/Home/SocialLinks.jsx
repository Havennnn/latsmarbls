import React from "react";
import { motion } from "framer-motion";

const SocialLinks = ({ openModal }) => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const contactButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f0f0f0",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="absolute left-0 bottom-0 flex pr-3 py-3 2xl:pr-6 2xl:py-5 bg-dgray rounded-tr-[1.5rem] element3">
      <div className="element4">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex items-center justify-center gap-2 sm:gap-3 2xl:gap-4"
        >
          <motion.li variants={item} className="flex mt-1">
            <motion.a
              href="https://github.com/Havennnn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#d6d6d6" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-square-github text-white text-3xl sm:text-5xl 2xl:text-7xl hover:cursor-pointer transition duration-300 ease-in-out"></i>
            </motion.a>
          </motion.li>

          <motion.li variants={item} className="flex mt-1">
            <motion.a
              href="https://www.linkedin.com/in/latrell-marable-b43a37256/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#d6d6d6" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-linkedin text-white text-3xl sm:text-5xl 2xl:text-7xl hover:cursor-pointer transition duration-300 ease-in-out"></i>
            </motion.a>
          </motion.li>

          <motion.li
            variants={contactButtonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={openModal}
            className="border-black flex items-center justify-around text-xl 2xl:text-3xl h-[27px] sm:h-[43px] 2xl:h-[62px] sm:mt-1 gap-2 px-3 sm:px-6 2xl:px-12 text-dgray bg-white rounded hover:cursor-pointer transition duration-300 ease-in-out"
          >
            <i className="fas fa-envelope"></i>
            <p className="font-semibold text-dgray">Contact</p>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default SocialLinks;
