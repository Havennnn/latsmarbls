import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroContent from "./ui/HeroContent";
import Hero from "./ui/Hero";
import SocialLinks from "./ui/SocialLinks";
import ContactModal from "../layouts/forms/ContactModal";
import useContactForm from "./hooks/useContactForm";
import useResume from "./hooks/useResume";

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

export default Home;
