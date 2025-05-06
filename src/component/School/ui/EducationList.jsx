import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../data/educationData";
import EducationItem from "./EducationItem";

const EducationList = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        className="relative"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full mx-auto">
          {educationData.map((education, index) => (
            <EducationItem key={index} education={education} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationList;
