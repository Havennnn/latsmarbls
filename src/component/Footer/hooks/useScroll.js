import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbarRef = document.getElementById("navbar");
      const placeholderRef = document.getElementById("navbar-placeholder");
      
      if (!navbarRef || !placeholderRef) return;

      const navbarTop = placeholderRef.getBoundingClientRect().top;

      if (navbarTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isSticky };
}; 