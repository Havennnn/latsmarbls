import React from "react";
import { motion } from "framer-motion";
import TechItem from "./TechItem";

const techData = {
  page1: [
    {
      category: "Web Technologies",
      techs: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Python", "PHP"],
    },
    {
      category: "Frontend Frameworks",
      techs: ["React", "Next.js", "Blade"],
    },
  ],
  page2: [
    {
      category: "Backend Technologies",
      techs: ["PHP", "Node.js", "Express.js", "Laravel"],
    },
    {
      category: "Databases",
      techs: ["MySQL", "MongoDB"],
    },
  ],
};

const SkillsPage = ({ pageNumber }) => {
  const pageData = pageNumber === 1 ? techData.page1 : techData.page2;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
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
    <motion.div className="flex flex-col h-full" variants={containerVariants}>
      {pageData.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="mb-3">
          <motion.h1
            variants={headerVariants}
            className={`text-white font-medium text-xl 2xl:text-3xl mb-1 ${
              sectionIndex > 0 ? "pt-3" : ""
            }`}
          >
            {section.category}
          </motion.h1>
          <div className="grid grid-cols-2 gap-y-1 gap-x-2">
            {section.techs.map((tech, techIndex) => (
              <TechItem key={`tech-${sectionIndex}-${techIndex}`} name={tech} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillsPage;
