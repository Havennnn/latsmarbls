import { useCallback } from "react";
import cv from "../../../assets/LatrellMarable_Resume.pdf";

const useResume = () => {
  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "LatrellMarable_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return handleDownloadCV;
};

export default useResume; 