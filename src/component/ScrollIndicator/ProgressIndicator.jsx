import React, { useState, useEffect } from "react";
import { scrollIndicatorStyles } from "./styles";

const ProgressIndicator = ({ percentage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={scrollIndicatorStyles.indicatorContainer}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 10}px)`,
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <div className={scrollIndicatorStyles.progressBar}>
        <div
          className={scrollIndicatorStyles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-600 font-medium">{percentage}%</span>
    </div>
  );
};

export default ProgressIndicator;
