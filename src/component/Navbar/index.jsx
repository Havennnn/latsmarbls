import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "./ui/MobileHeader";
import MobileMenu from "./ui/MobileMenu";
import DesktopMenu from "./ui/DesktopMenu";
import LargeDesktopMenu from "./ui/LargeDesktopMenu";
import useNavigation from "./hooks/useNavigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
        <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
        <DesktopMenu scrollToSection={scrollToSection} />
        <LargeDesktopMenu scrollToSection={scrollToSection} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
