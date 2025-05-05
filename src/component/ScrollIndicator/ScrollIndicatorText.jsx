import React, { useEffect, useState } from "react";
import { scrollIndicatorStyles } from "./styles";

const ScrollIndicatorText = ({ text = "Welcome | Scroll Down →" }) => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Create a more noticeable pulsing effect with opacity and scale
    const intervalId = setInterval(() => {
      setOpacity((prev) => (prev === 1 ? 0.7 : 1));
      setScale((prev) => (prev === 1 ? 1.05 : 1));
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  const style = {
    opacity: opacity,
    transform: `rotate(90deg) scale(${scale})`,
    transition: "all 0.5s ease-in-out",
  };

  return (
    <div className={scrollIndicatorStyles.base} style={style}>
      {text}
    </div>
  );
};

export default ScrollIndicatorText;
