import { useState, useEffect, useCallback } from "react";

export const useScrollPosition = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleScroll = useCallback(() => {
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
  }, [hasStartedScrolling]);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setIsInitialized(true);
      handleScroll();
    }, 100);

    const scrollListener = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return { isBottom, scrollPercentage, hasStartedScrolling, isInitialized };
}; 