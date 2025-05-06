import { useState, useEffect } from "react";

const useScrollPosition = (placeholderRef) => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTriggerReached, setScrollTriggerReached] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    setLastScrollY(window.scrollY);

    const handleScroll = () => {
      if (!placeholderRef.current) return;

      const navbarTop = placeholderRef.current.getBoundingClientRect().top;
      const currentScrollY = window.scrollY;

      // Determine if we've scrolled enough to trigger the animation
      const scrollTriggerPoint = 100; // pixels scrolled before animation triggers
      
      if (currentScrollY > scrollTriggerPoint) {
        if (!scrollTriggerReached) {
          setScrollTriggerReached(true);
          setAnimationPlayed(true);
        }
        setIsVisible(true);
      } else if (currentScrollY <= scrollTriggerPoint) {
        // Only reset if animation hasn't played yet
        if (!animationPlayed) {
          setScrollTriggerReached(false);
        }
      }

      // Update scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Calculate sticky state and progress
      const threshold = 20;
      if (navbarTop <= 0) {
        const progress = Math.min(1, Math.abs(navbarTop) / threshold);
        setScrollProgress(progress);
        setIsSticky(true);
      } else {
        const progress = Math.max(0, 1 - (navbarTop / threshold));
        setScrollProgress(progress);
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [placeholderRef, lastScrollY, scrollTriggerReached, animationPlayed]);

  return { isSticky, scrollDirection, scrollProgress, isVisible, scrollTriggerReached };
};

export default useScrollPosition; 