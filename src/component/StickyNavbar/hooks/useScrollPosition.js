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

      const scrollTriggerPoint = 100;
      
      if (currentScrollY > scrollTriggerPoint) {
        if (!scrollTriggerReached) {
          setScrollTriggerReached(true);
          setAnimationPlayed(true);
        }
        setIsVisible(true);
      } else if (currentScrollY <= scrollTriggerPoint) {
        if (!animationPlayed) {
          setScrollTriggerReached(false);
        }
      }

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [placeholderRef, lastScrollY, scrollTriggerReached, animationPlayed]);

  return { isSticky, scrollDirection, scrollProgress, isVisible, scrollTriggerReached };
};

export default useScrollPosition; 