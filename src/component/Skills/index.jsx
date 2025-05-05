import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillsList from "./SkillsList";
import SkillsJourney from "./SkillsJourney";
import useSkillsScroll from "./useSkillsScroll";

const Skills = () => {
  const sectionRef = useRef(null);
  const { isVisible, scrollTriggerReached, scrollProgress } =
    useSkillsScroll(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section ref={sectionRef} className="flex pt-10">
      <motion.div
        className="flex flex-col md:flex-row items-center w-full gap-10 sm:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={scrollTriggerReached ? "visible" : "hidden"}
        style={{
          opacity: Math.min(1, scrollProgress * 4),
          transform: `translateY(${Math.max(0, (1 - scrollProgress) * 10)}px)`,
        }}
      >
        <SkillsList />
        <SkillsJourney />
      </motion.div>
    </section>
  );
};

export default Skills;
