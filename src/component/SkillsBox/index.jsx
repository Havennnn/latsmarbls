import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillItem from "./ui/SkillItem";
import useSkillsBoxAnimation from "./hooks/useSkillsBoxAnimation";
import { skillsData } from "./data/skillsData";

const SkillsBox = () => {
  const sectionRef = useRef(null);
  const { scrollTriggerReached, scrollProgress } =
    useSkillsBoxAnimation(sectionRef);

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

  return (
    <motion.div
      ref={sectionRef}
      className="flex mt-10 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: scrollTriggerReached ? 1 : 0,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="grid grid-cols-2 md:flex md:flex-row gap-5 w-full items-stretch justify-stretch"
        variants={containerVariants}
        initial="hidden"
        animate={scrollTriggerReached ? "visible" : "hidden"}
        style={{
          opacity: Math.min(1, scrollProgress * 3),
          transform: `translateY(${Math.max(0, (1 - scrollProgress) * 15)}px) 
                     scale(${0.95 + scrollProgress * 0.05})`,
        }}
      >
        {skillsData.map((skill, index) => (
          <SkillItem
            key={`skill-${index}`}
            title={skill.title}
            description={skill.description}
            animationData={skill.animationData}
            delay={index * 0.08}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsBox;
