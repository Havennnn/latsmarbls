import { useState, useEffect } from "react";

const useScrollPosition = (placeholderRef) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current) return;

      const navbarTop = placeholderRef.current.getBoundingClientRect().top;

      if (navbarTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [placeholderRef]);

  return isSticky;
};

export default useScrollPosition; 