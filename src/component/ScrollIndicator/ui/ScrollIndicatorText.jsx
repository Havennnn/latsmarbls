import React, { useEffect, useState } from "react";

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
    <div
      className="fixed left-[-88px] md:left-[-88px] lg:left-[-127px] 2xl:left-[-190px] top-1/2 -translate-y-1/2 text-gray-600 text-sm lg:text-xl 2xl:text-3xl font-bold text-gray tracking-widest"
      style={style}
    >
      {text}
    </div>
  );
};

export default ScrollIndicatorText;
