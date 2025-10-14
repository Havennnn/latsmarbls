import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const cardVariants = {
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
      className="shadow-xl rounded-[1.5rem] p-6 2xl:p-10"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-[1.5rem] shadow-sm 2xl:shadow-md"
      />
      <div className="flex justify-between items-baseline mt-2 2xl:mt-4">
        <h3 className="text-md md:text-xl 2xl:text-3xl font-semibold text-dgray">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-md md:text-2xl 2xl:text-4xl">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dgray flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-github hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
          </a>
          {project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <i className="fa-solid fa-globe text-dgray hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-500 text-sm 2xl:text-xl mt-2 2xl:mt-4 tracking-tight">
        {project.description}
      </p>
      <p className="mt-5 text-sm 2xl:text-xl font-medium">Technology Used:</p>
      <div className="mt-3 flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray text-sm 2xl:text-xl">
        {project.technologies.map((tech, index) => (
          <span key={index} className="flex gap-1 justify-center items-center">
            <i className={tech.icon}></i>
            {tech.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
