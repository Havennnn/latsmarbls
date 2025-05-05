import { useState, useEffect } from "react";

const usePreloader = (loadingDuration = 1000, welcomeDuration = 2000) => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    console.log("Preloader initialized with:", { loadingDuration, welcomeDuration });

    const loadingTimer = setTimeout(() => {
      console.log("Loading complete, showing welcome screen");
      setLoading(false);
      setShowWelcome(true);
    }, loadingDuration);

    // Second transition: welcome screen to content
    const welcomeTimer = setTimeout(() => {
      console.log("Welcome screen complete, showing main content");
      setShowWelcome(false);
      setComplete(true);
    }, loadingDuration + welcomeDuration);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(welcomeTimer);
      console.log("Preloader timers cleared");
    };
  }, [loadingDuration, welcomeDuration]);

  useEffect(() => {
    console.log("Preloader state:", { loading, showWelcome, complete });
  }, [loading, showWelcome, complete]);

  return {
    loading,
    showWelcome,
    complete
  };
};

export default usePreloader; 