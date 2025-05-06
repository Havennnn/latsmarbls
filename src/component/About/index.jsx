import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ui/ContactInfo";
import HeroAnimation from "./ui/HeroAnimation";
import SocialLinks from "./ui/SocialLinks";
import ContactModal from "../layouts/forms/ContactModal";
import useAboutAnimation from "./hooks/useAboutAnimation";

const About = () => {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const { scrollTriggerReached, scrollProgress } =
    useAboutAnimation(sectionRef);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setStatus("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "772012b3-85ef-4d30-b354-b9c9c07587ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message has been sent successfully!");
        setTimeout(() => {
          closeModal();
        }, 1000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [showModal]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: scrollTriggerReached ? 1 : 0,
        transition: { duration: 0.3 },
      }}
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={scrollTriggerReached ? "visible" : "hidden"}
        className="flex flex-col md:flex-row pt-10 w-full h-full gap-5"
        style={{
          opacity: Math.min(1, scrollProgress * 3),
          transform: `translateY(${Math.max(0, (1 - scrollProgress) * 15)}px) 
                     scale(${0.95 + scrollProgress * 0.05})`,
        }}
      >
        <motion.div
          variants={itemVariants}
          className="relative flex w-full md:w-3/6 h-full bg-white rounded-bl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[1.5rem] flex-grow"
        >
          <ContactInfo openModal={openModal} />
          <SocialLinks />
        </motion.div>

        <motion.div variants={itemVariants}>
          <HeroAnimation />
        </motion.div>
        <ContactModal
          showModal={showModal}
          closeModal={closeModal}
          status={status}
          onSubmit={onSubmit}
        />
      </motion.section>
    </motion.div>
  );
};

export default About;
