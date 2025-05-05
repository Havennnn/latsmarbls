import React from "react";
import { motion } from "framer-motion";

const PaginationControls = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}) => {
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#FFFFFF",
      color: "#1E1E1E",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
    disabled: {
      scale: 0.95,
      opacity: 0.3,
      transition: { duration: 0.15 },
    },
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      className="flex gap-4 justify-end items-center pb-3 mt-4"
      variants={controlsVariants}
    >
      <motion.button
        onClick={onPrevious}
        variants={buttonVariants}
        whileHover={currentPage === 1 ? "" : "hover"}
        whileTap={currentPage === 1 ? "" : "tap"}
        animate={currentPage === 1 ? "disabled" : undefined}
        className={`flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full shadow-lg border border-white border-opacity-30 ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-chevron-left text-xl"></i>
      </motion.button>

      <motion.button
        onClick={onNext}
        variants={buttonVariants}
        whileHover={currentPage === totalPages ? "" : "hover"}
        whileTap={currentPage === totalPages ? "" : "tap"}
        animate={currentPage === totalPages ? "disabled" : undefined}
        className={`flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full shadow-lg border border-white border-opacity-30 ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-chevron-right text-xl"></i>
      </motion.button>
    </motion.div>
  );
};

export default PaginationControls;
