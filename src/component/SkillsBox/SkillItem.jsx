import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const SkillItem = ({ title, description, animationData, delay = 0, index }) => {
  // Different entrance animations based on item position
  const isLeftSide = index % 2 === 0;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: isLeftSide ? -15 : 15,
      scale: 0.95,
      rotate: isLeftSide ? -2 : 2,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: { scale: 0.98, rotate: isLeftSide ? -1 : 1 },
  };

  // Animation for the icon container
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay + 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  };

  // Text animations
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="text-dgray bg-white font-bold p-4 w-full 2xl:pb-6 lg:w-1/3 flex flex-col items-center justify-center rounded-[1rem] border-[1.5px] transition-all ease-in-out shadow"
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className={`w-24 2xl:w-32 ${
          title !== "Web Development" ? "pt-2 pb-3" : ""
        }`}
        variants={iconVariants}
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>
      <motion.h1
        className="font-bold text-center 2xl:text-2xl"
        variants={textVariants}
      >
        {title}
      </motion.h1>
      <motion.p
        className="pt-1 font-normal text-center pb-3 text-[10px] md:text-[12px] 2xl:text-xl"
        variants={textVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SkillItem;
