import React from "react";
import { motion } from "framer-motion";

const PaginationControls = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
}) => {
  // Button animation variants
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
    disabled: {
      scale: 0.95,
      opacity: 0.5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex gap-4 mt-4 justify-end md:pb-0">
      <motion.button
        onClick={onPrevious}
        variants={buttonVariants}
        initial="initial"
        animate={currentPage === 1 ? "disabled" : "animate"}
        whileHover={currentPage === 1 ? "" : "hover"}
        whileTap={currentPage === 1 ? "" : "tap"}
        className={`flex items-center justify-center p-3 2xl:p-5 bg-dgray text-white rounded-full shadow transition-all duration-500 ease-in-out ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
      >
        <img
          src="/leftIcon.svg"
          className="w-3 h-3 2xl:w-5 2xl:h-5"
          alt="Previous"
        />
      </motion.button>

      <motion.button
        onClick={onNext}
        variants={buttonVariants}
        initial="initial"
        animate={currentPage === totalPages ? "disabled" : "animate"}
        whileHover={currentPage === totalPages ? "" : "hover"}
        whileTap={currentPage === totalPages ? "" : "tap"}
        className={`flex items-center justify-center p-3 2xl:p-5 bg-dgray text-white rounded-full shadow transition-all duration-500 ease-in-out ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        <img
          src="/rightIcon.svg"
          className="w-3 h-3 2xl:w-5 2xl:h-5"
          alt="Next"
        />
      </motion.button>
    </div>
  );
};

export default PaginationControls;
