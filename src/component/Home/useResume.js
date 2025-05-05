import { useCallback } from "react";
import cv from "../../assets/MarableLatrell_Intern_Resume.pdf";

/**
 * Custom hook for handling resume download functionality
 * @returns {Function} Function to handle CV download
 */
const useResume = () => {
  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "MarableLatrell_OJT_Resume.pdf";
    link.click();
  }, []);

  return handleDownloadCV;
};

export default useResume; 