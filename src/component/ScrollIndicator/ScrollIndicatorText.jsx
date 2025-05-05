import React, { useEffect, useState } from "react";
import { scrollIndicatorStyles } from "./styles";

const ScrollIndicatorText = ({ text = "Welcome | Scroll Down →" }) => {
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.9);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
      setOpacity(1);
      setScale(1);
    }, 800);

    const intervalId = setInterval(() => {
      if (isVisible) {
        setOpacity((prev) => (prev >= 0.9 ? 0.7 : 1));
        setScale((prev) => (prev >= 1 ? 1.05 : 1));
      }
    }, 800);

    return () => {
      clearInterval(intervalId);
      clearTimeout(entranceTimer);
    };
  }, [isVisible]);

  const style = {
    opacity: opacity,
    transform: `rotate(90deg) scale(${scale})`,
    transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  return (
    <div className={scrollIndicatorStyles.base} style={style}>
      {text}
    </div>
  );
};

export default ScrollIndicatorText;
