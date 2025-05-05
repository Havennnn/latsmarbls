import { useState, useEffect } from "react";

const usePreloader = (loadingDuration = 1000, welcomeDuration = 2000) => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setShowWelcome(true);
    }, loadingDuration);

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setComplete(true);
    }, loadingDuration + welcomeDuration);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(welcomeTimer);
    };
  }, [loadingDuration, welcomeDuration]);

  return {
    loading,
    showWelcome,
    complete
  };
};

export default usePreloader; 