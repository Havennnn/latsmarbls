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
        stiffness: 400,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      x: 5,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        type: "spring",
        stiffness: 500,
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
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-2 py-1 px-2 rounded-lg backdrop-blur-sm"
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div variants={iconVariants} className="bg-dgray p-1.5 rounded-md">
        <i
          className={`${getDeviconClass(
            name
          )} text-white text-sm md:text-base 2xl:text-xl`}
        ></i>
      </motion.div>
      <p className="text-white text-sm md:text-base 2xl:text-xl font-medium">
        {name}
      </p>
    </motion.div>
  );
};

export default TechItem;
