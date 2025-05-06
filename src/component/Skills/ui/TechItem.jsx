import React from "react";
import { motion } from "framer-motion";

const TechItem = ({ skill }) => {
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
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div className="flex items-center gap-4">
        <i className={`${skill.icon} text-4xl text-dgray`}></i>
        <div>
          <h3 className="text-xl font-semibold text-dgray">{skill.name}</h3>
          <p className="text-gray-600">{skill.category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TechItem;
