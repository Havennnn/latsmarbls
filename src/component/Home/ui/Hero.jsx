import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroBg from "../../../assets/Herobg-new2.json";

const Hero = () => {
  const heroVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.8,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="right-14 bottom-1/2 transform translate-y-1/2 md:w-[20rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[48rem] my-auto hidden md:block"
    >
      <Lottie animationData={heroBg} loop={true} />
    </motion.div>
  );
};

export default Hero;
