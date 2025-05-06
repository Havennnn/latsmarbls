import { useState, useEffect } from "react";

const useSkillsBoxAnimation = (sectionRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTriggerReached, setScrollTriggerReached] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation even earlier - at 85% of viewport height
      const visibilityThreshold = windowHeight * 0.85;
      
      if (sectionRect.top < visibilityThreshold) {
        if (!isVisible) setIsVisible(true);
        
        // Calculate scroll progress (0 to 1)
        const progress = Math.min(
          1, 
          1 - (sectionRect.top / visibilityThreshold)
        );
        setScrollProgress(progress);

        // Trigger animation as soon as visible and save that it's been played
        if (progress > 0.01 && !scrollTriggerReached) {
          setScrollTriggerReached(true);
          setAnimationPlayed(true);
        }
      } else {
        if (scrollProgress === 0) {
          setIsVisible(false);
        }
        setScrollProgress(0);
        
        // Only reset trigger if we haven't played the animation yet
        // This prevents the animation from playing again when scrolling back up
        if (scrollTriggerReached && !animationPlayed && sectionRect.top > windowHeight) {
          setScrollTriggerReached(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef, scrollTriggerReached, scrollProgress, isVisible, animationPlayed]);

  return { isVisible, scrollTriggerReached, scrollProgress, animationPlayed };
};

export default useSkillsBoxAnimation; 