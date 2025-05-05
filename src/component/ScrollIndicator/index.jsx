import React from "react";
import { useScrollPosition } from "./hooks";
import ScrollIndicatorText from "./ScrollIndicatorText";
import ProgressIndicator from "./ProgressIndicator";

const ScrollIndicator = ({ showProgress = true }) => {
  const { isBottom, scrollPercentage, hasStartedScrolling } =
    useScrollPosition();

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
