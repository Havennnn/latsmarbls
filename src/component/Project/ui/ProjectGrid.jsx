import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const ProjectGrid = () => {
  const gridVariants = {
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
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
