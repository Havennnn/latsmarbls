import { useState, useEffect } from "react";

const useProjectAnimation = (sectionRef) => {
  const [scrollTriggerReached, setScrollTriggerReached] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(
        Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0),
        1
      );
      setScrollProgress(progress);

      // Set scroll trigger when section is in view
      if (sectionTop < triggerPoint && !scrollTriggerReached) {
        setScrollTriggerReached(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef, scrollTriggerReached]);

  return {
    scrollTriggerReached,
    scrollProgress,
  };
};

export default useProjectAnimation; 