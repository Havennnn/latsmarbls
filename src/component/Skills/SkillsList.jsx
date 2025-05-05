import React, { useState } from "react";
import SkillsPage from "./SkillsPage";
import PaginationControls from "./PaginationControls";

const SkillsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="flex flex-col h-full w-full md:w-2/4">
      <h2 className="text-white text-2xl font-bold mb-4">
        My Technology Stack
      </h2>
      <SkillsPage pageNumber={currentPage} />
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
