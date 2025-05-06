import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceList from "./ui/ExperienceList";
import ExperienceHeader from "./ui/ExperienceHeader";
import useSkillsAnimation from "../Skills/hooks/useSkillsAnimation";

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollTriggerReached, scrollProgress } =
    useSkillsAnimation(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section ref={sectionRef} className="pt-10">
      <motion.div
        className="relative bg-white rounded-[1.5rem] 2xl:rounded-[2rem] w-full"
        variants={containerVariants}
        initial="hidden"
        animate={scrollTriggerReached ? "visible" : "hidden"}
        style={{
          opacity: scrollTriggerReached ? 1 : scrollProgress,
          transform: `scale(${
            scrollTriggerReached ? 1 : 0.95 + scrollProgress * 0.05
          })`,
        }}
      >
        <ExperienceHeader />
        <ExperienceList />
      </motion.div>
    </section>
  );
};

export default Experience;
