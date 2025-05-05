import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StickyNavbarLogo from "./StickyNavbarLogo";
import NavLinks from "./NavLinks";
import useScrollPosition from "./useScrollPosition";
import scrollToSection from "./ScrollHelper";

const StickyNavbar = () => {
  const placeholderRef = useRef(null);
  const navbarRef = useRef(null);
  const {
    isSticky,
    scrollDirection,
    scrollProgress,
    isVisible,
    scrollTriggerReached,
  } = useScrollPosition(placeholderRef);

  // Variants for sticky navbar animations
  const stickyVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Animation for the normal navbar
  const normalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Scroll-triggered animation
  const initialEntryVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="relative flex justify-center items-center mt-10"
      initial="hidden"
      animate={scrollTriggerReached ? "visible" : "hidden"}
      variants={initialEntryVariants}
    >
      <div ref={placeholderRef} className="h-12"></div>

      <AnimatePresence mode="wait">
        {isSticky ? (
          <motion.div
            key="sticky-nav"
            id="sticky-navbar"
            ref={navbarRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stickyVariants}
            className="fixed flex justify-between items-center top-2 inset-x-0 mx-auto z-10 bg-opacity-90 backdrop-blur-sm
                      h-8 2xl:h-12 px-8 2xl:px-12 bg-white rounded-[1.5rem] shadow-2xl
                      w-[89.7%] md:w-[93%] 2xl:w-[93.3%]"
            style={{
              boxShadow: `0 10px 25px rgba(0, 0, 0, ${scrollProgress * 0.15})`,
              transform: `translateY(${scrollDirection === "up" ? 0 : 0}px)`,
            }}
          >
            <StickyNavbarLogo isSticky={true} />
            <NavLinks scrollToSection={scrollToSection} isMobile={false} />
            <NavLinks scrollToSection={scrollToSection} isMobile={true} />
          </motion.div>
        ) : (
          <motion.div
            key="normal-nav"
            ref={navbarRef}
            initial="hidden"
            animate="visible"
            variants={normalVariants}
            className="relative w-full flex justify-center items-center h-8 2xl:h-12 px-8 2xl:px-12 bg-white 
                    rounded-[1.5rem] shadow-lg border"
          >
            <StickyNavbarLogo isSticky={false} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StickyNavbar;
