import { useState, useEffect } from "react";

const useScrollPosition = (placeholderRef) => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setLastScrollY(window.scrollY);

    const handleScroll = () => {
      if (!placeholderRef.current) return;

      const navbarTop = placeholderRef.current.getBoundingClientRect().top;
      const currentScrollY = window.scrollY;

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [placeholderRef, lastScrollY]);

  return { isSticky, scrollDirection, scrollProgress };
};

export default useScrollPosition; 