import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
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
    <motion.div
      className="relative pt-12 px-6 sm:px-14 pb-8"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {experienceData.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </motion.div>
  );
};

export default ExperienceList;
