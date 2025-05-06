import React from "react";
import { motion } from "framer-motion";

const Button = ({
  onClick,
  href,
  icon,
  text,
  className = "",
  iconClassName = "",
  buttonClassName = "",
  iconAnimation = true,
}) => {
  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.7,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#4d7aff",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#3d6ae0",
      transition: { duration: 0.1 },
    },
  };

  const iconAnimationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.1,
      },
    },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const buttonContent = (
    <>
      {icon && (
        <motion.i
          variants={iconAnimation ? iconAnimationVariants : {}}
          whileHover={iconAnimation ? "hover" : {}}
          className={`${iconClassName} text-white`}
        ></motion.i>
      )}
      {text}
    </>
  );

  const commonProps = {
    variants: buttonVariants,
    whileHover: "hover",
    whileTap: "tap",
    className: `flex items-center justify-center w-32 2xl:w-40 gap-2 p-2 2xl:p-3 text-white text-sm 2xl:text-xl bg-dgray rounded-xl 2xl:rounded-2xl shadow-xl transition duration-300 ease-in-out ${buttonClassName}`,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        {...commonProps}
        className={`${commonProps.className} ${className}`}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      {...commonProps}
      className={`${commonProps.className} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
