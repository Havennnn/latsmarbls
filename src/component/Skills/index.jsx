import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillsHeader from "./ui/SkillsHeader";
import SkillsJourney from "./ui/SkillsJourney";
import SkillsList from "./ui/SkillsList";
import useSkillsAnimation from "./hooks/useSkillsAnimation";

const Skills = () => {
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
        className="relative flex flex-col w-full h-full px-6 sm:px-14 py-10 bg-white rounded-[1.5rem] 2xl:rounded-[2rem] justify-center items-center"
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
        <SkillsHeader />
        <motion.div className="w-full" variants={itemVariants}>
          <SkillsJourney />
          <SkillsList />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
