import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsPage from "./SkillsPage";
import PaginationControls from "./PaginationControls";

const SkillsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  // Variants for page transitions
  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="flex flex-col h-full w-full md:w-2/4">
      <motion.h2
        className="text-white text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My Technology Stack
      </motion.h2>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <SkillsPage pageNumber={currentPage} />
          </motion.div>
        </AnimatePresence>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default SkillsList;
