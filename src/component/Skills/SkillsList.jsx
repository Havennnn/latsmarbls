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
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.15 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.15 },
      },
    }),
  };

  const listVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.05,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col h-full w-full md:w-2/4"
      variants={listVariants}
    >
      <div className="relative h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full"
          >
            <SkillsPage pageNumber={currentPage} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-auto">
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </motion.div>
  );
};

export default SkillsList;
