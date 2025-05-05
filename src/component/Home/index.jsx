import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroContent from "./HeroContent";
import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import ContactModal from "./ContactModal";
import useContactForm from "./useContactForm";
import useResume from "./useResume";

/**
 * Main Home component that combines all sections of the home page
 */
const Home = () => {
  const { showModal, status, openModal, closeModal, onSubmit } =
    useContactForm();
  const handleDownloadCV = useResume();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="home-section"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="h-[700px] xl:h-[93vh] bg-white transition-all duration-500 ease-in-out rounded-tl-[1.5rem] rounded-br-[1.5rem]"
      >
        <div className="relative flex h-full">
          <HeroContent handleDownloadCV={handleDownloadCV} />

          <SocialLinks openModal={openModal} />

          <ContactModal
            showModal={showModal}
            closeModal={closeModal}
            status={status}
            onSubmit={onSubmit}
          />

          <Hero />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

// Export individual components for more flexibility
export {
  HeroContent,
  Hero,
  SocialLinks,
  ContactModal,
  useContactForm,
  useResume,
};

// Export the main component as default
export default Home;
