import React from "react";
import { scrollIndicatorStyles } from "./styles";

const ProgressIndicator = ({ percentage }) => {
  return (
    <div className={scrollIndicatorStyles.indicatorContainer}>
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
