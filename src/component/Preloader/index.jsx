import React from "react";
import { AnimatePresence } from "framer-motion";
import PreloaderCircle from "./PreloaderCircle";
import WelcomeScreen from "./WelcomeScreen";
import usePreloader from "./usePreloader";

const Preloader = ({
  children,
  logoSrc = "/Logo.svg",
  welcomeLogoSrc = "/LogoFilled.svg",
  primaryText = "Lats",
  secondaryText = "Marbls",
  loadingDuration = 1000,
  welcomeDuration = 2000,
}) => {
  const { loading, showWelcome, complete } = usePreloader(
    loadingDuration,
    welcomeDuration
  );

  if (complete) {
    return children;
  }

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <PreloaderCircle key="preloader" logoSrc={logoSrc} />
        ) : showWelcome ? (
          <WelcomeScreen
            key="welcome"
            logoSrc={welcomeLogoSrc}
            primaryText={primaryText}
            secondaryText={secondaryText}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export { PreloaderCircle, WelcomeScreen, usePreloader };

export default Preloader;
