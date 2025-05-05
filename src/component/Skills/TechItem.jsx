import React from "react";
import { motion } from "framer-motion";

const TechItem = ({ name }) => {
  const getDeviconClass = (name) => {
    const iconMap = {
      HTML: "devicon-html5-plain",
      CSS: "devicon-css3-plain",
      "Tailwind CSS": "devicon-tailwindcss-plain",
      JavaScript: "devicon-javascript-plain",
      React: "devicon-react-original",
      "Next.js": "devicon-nextjs-plain",
      "Node.js": "devicon-nodejs-plain",
      "Express.js": "devicon-express-original",
      MongoDB: "devicon-mongodb-plain",
      PostgreSQL: "devicon-postgresql-plain",
      PHP: "devicon-php-plain",
      Laravel: "devicon-laravel-original",
      "React Native": "devicon-react-original",
      MySQL: "devicon-mysql-original",
      "C#": "devicon-csharp-plain",
      Python: "devicon-python-plain",
      Blade: "devicon-laravel-plain",
    };
    return iconMap[name] || "devicon-devicon-plain";
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      scale: 1.05,
      x: 10,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.98 },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-3 my-2 px-3 py-2 rounded-lg backdrop-blur-sm"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div variants={iconVariants} className="bg-dgray p-2 rounded-md">
        <i
          className={`${getDeviconClass(name)} text-white text-lg 2xl:text-2xl`}
        ></i>
      </motion.div>
      <p className="text-white 2xl:text-2xl font-medium">{name}</p>
    </motion.div>
  );
};

export default TechItem;
