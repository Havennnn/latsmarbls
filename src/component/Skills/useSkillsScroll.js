import { useState, useEffect } from "react";

const useSkillsScroll = (sectionRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTriggerReached, setScrollTriggerReached] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visibilityThreshold = windowHeight * 0.9;
      
      if (sectionRect.top < visibilityThreshold) {
        setIsVisible(true);
        
        const progress = Math.min(
          1, 
          1 - (sectionRect.top / visibilityThreshold)
        );
        setScrollProgress(progress);

        if (progress > 0.01 && !scrollTriggerReached) {
          setScrollTriggerReached(true);
        }
      } else {
        if (scrollProgress === 0) {
          setIsVisible(false);
        }
        setScrollProgress(0);
        if (scrollTriggerReached && sectionRect.top > windowHeight) {
          setScrollTriggerReached(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef, scrollTriggerReached, scrollProgress]);

  return { isVisible, scrollTriggerReached, scrollProgress };
};

export default useSkillsScroll; 