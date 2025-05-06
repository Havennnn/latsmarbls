import React from "react";
import { motion } from "framer-motion";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const controlsVariants = {
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
    <motion.div
      className="col-span-full flex justify-center gap-2 mt-6"
      variants={controlsVariants}
    >
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            currentPage === page
              ? "bg-highlight text-white"
              : "bg-gray-200 text-dgray hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </motion.div>
  );
};

export default PaginationControls;
