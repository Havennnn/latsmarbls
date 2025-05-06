import React, { useState } from "react";
import { motion } from "framer-motion";
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {currentSkills.map((skill, index) => (
        <TechItem key={index} skill={skill} />
      ))}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </motion.div>
  );
};

export default SkillsList;
