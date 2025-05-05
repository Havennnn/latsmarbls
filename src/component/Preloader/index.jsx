import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PreloaderCircle from "./PreloaderCircle";
import WelcomeScreen from "./WelcomeScreen";
import usePreloader from "./usePreloader";

/**
 * Main Preloader component that handles loading animations and transitions
 */
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

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // If loading is complete, render the main content with animation
  if (complete) {
    return (
      <motion.div initial="hidden" animate="visible" variants={contentVariants}>
        {children}
      </motion.div>
    );
  }

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        {/* Loading spinner animation */}
        {loading && <PreloaderCircle key="preloader" logoSrc={logoSrc} />}

        {/* Welcome screen animation */}
        {showWelcome && (
          <WelcomeScreen
            key="welcome"
            logoSrc={welcomeLogoSrc}
            primaryText={primaryText}
            secondaryText={secondaryText}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export { PreloaderCircle, WelcomeScreen, usePreloader };

export default Preloader;
