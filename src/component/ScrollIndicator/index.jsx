import React from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import ScrollIndicatorText from "./ui/ScrollIndicatorText";

const ScrollIndicator = ({ showProgress = true }) => {
  const { isBottom, hasStartedScrolling, isInitialized } = useScrollPosition();

  // Only render the component once initialization is complete
  if (!isInitialized) return null;

  return (
    <>{!isBottom && <>{!hasStartedScrolling && <ScrollIndicatorText />}</>}</>
  );
};

export default ScrollIndicator;
