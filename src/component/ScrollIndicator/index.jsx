import React from "react";
import { useScrollPosition } from "./hooks";
import ScrollIndicatorText from "./ScrollIndicatorText";
import ProgressIndicator from "./ProgressIndicator";

const ScrollIndicator = ({ showProgress = true }) => {
  const { isBottom, scrollPercentage, hasStartedScrolling, isInitialized } =
    useScrollPosition();

  // Only render the component once initialization is complete
  if (!isInitialized) return null;

  return (
    <>
      {!isBottom && (
        <>
          {!hasStartedScrolling && <ScrollIndicatorText />}
          {showProgress && hasStartedScrolling && (
            <ProgressIndicator percentage={scrollPercentage} />
          )}
        </>
      )}
    </>
  );
};

export default ScrollIndicator;
