import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechItem from "./TechItem";
import PaginationControls from "./PaginationControls";
import { skillsData } from "../data/skillsData";

const SkillsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(skillsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentSkills = skillsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const listVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {currentSkills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TechItem skill={skill} />
          </motion.div>
        ))}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillsList;
