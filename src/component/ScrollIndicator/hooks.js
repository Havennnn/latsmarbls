import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      const atBottom = scrollPosition >= pageHeight - 5;

      const percentage = Math.min(
        100,
        Math.round((window.scrollY / (pageHeight - window.innerHeight)) * 100)
      );
      
      setScrollPercentage(percentage);
      setIsBottom(atBottom);

      if (window.scrollY > 100 && !hasStartedScrolling) {
        setHasStartedScrolling(true);
      } else if (window.scrollY <= 20) {
        setHasStartedScrolling(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStartedScrolling]);

  return { isBottom, scrollPercentage, hasStartedScrolling };
}; 