import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import LargeDesktopMenu from "./LargeDesktopMenu";
import useNavigation from "./useNavigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

/**
 * Responsive Navbar component with enhanced animations
 */
const Navbar = () => {
  const { isMenuOpen, toggleMenu, scrollToSection } = useNavigation();

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative sticky-navbar"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={navbarVariants}
      >
        {/* Mobile Components */}
        <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />

        {/* Desktop Components */}
        <DesktopMenu scrollToSection={scrollToSection} />

        {/* Large Desktop Components */}
        <LargeDesktopMenu scrollToSection={scrollToSection} />
      </motion.div>
    </AnimatePresence>
  );
};

// Export individual components for more flexibility
export {
  MobileHeader,
  MobileMenu,
  DesktopMenu,
  LargeDesktopMenu,
  useNavigation,
};

// Export the main component as default
export default Navbar;
