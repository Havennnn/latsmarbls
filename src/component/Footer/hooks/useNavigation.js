import { useCallback } from "react";

export const useNavigation = () => {
  const scrollToSection = useCallback((sectionId, offset = 20) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
}; 