import React from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

const navItems = [
  { id: "home", icon: "fa-house", text: "Home" },
  { id: "skills", icon: "fa-code", text: "Skills" },
  { id: "contact", icon: "fa-phone", text: "Contact" },
  { id: "projects", icon: "fa-folder", text: "Projects" },
];

const NavLinks = ({ isMobile, scrollToSection }) => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div
      className={`justify-between items-center ${
        isMobile ? "flex md:hidden" : "hidden md:flex"
      }`}
    >
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`flex ${
          isMobile ? "gap-1" : "gap-2"
        } text-dgray transition-all`}
      >
        {navItems.map((item, index) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            sectionId={item.id}
            scrollToSection={scrollToSection}
            isMobile={isMobile}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default NavLinks;
