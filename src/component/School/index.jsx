import React, { useRef } from "react";
import { motion } from "framer-motion";
import EducationList from "./ui/EducationList";
import useSkillsAnimation from "../Skills/hooks/useSkillsAnimation";
import EducationHeader from "./ui/EducationHeader";
const School = () => {
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
        className="relative flex flex-col w-full h-full px-6 sm:px-14 pt-10 pb-8 bg-white rounded-[1.5rem] 2xl:rounded-[2rem] justify-center items-center"
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
        <EducationHeader />
        <motion.div className="w-full mt-12" variants={itemVariants}>
          <EducationList />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default School;
