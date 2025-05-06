import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";

const navItems = [
  { id: "home", icon: "fa-house", text: "Home" },
  { id: "skills", icon: "fa-code", text: "Skills" },
  { id: "education", icon: "fa-graduation-cap", text: "Education" },
  { id: "experience", icon: "fa-briefcase", text: "Experience" },
  { id: "contact", icon: "fa-phone", text: "Contact" },
  { id: "projects", icon: "fa-folder", text: "Projects" },
];

const NavLinks = ({ isMobile, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const menuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className={`justify-between items-center ${
        isMobile ? "flex md:hidden" : "hidden md:flex"
      }`}
    >
      {isMobile ? (
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dgray hover:bg-dgray hover:text-white transition-colors duration-300"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </motion.button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-12 right-0 bg-white rounded-xl shadow-lg p-2 z-20"
                style={{ minWidth: "180px" }}
              >
                <motion.ul
                  variants={containerVariants}
                  className="grid grid-cols-1 gap-2"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer text-dgray"
                      onClick={() => {
                        scrollToSection(item.id);
                        setMenuOpen(false);
                      }}
                    >
                      <i className={`fa-solid ${item.icon} w-6`}></i>
                      <span className="ml-2">{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-2 text-dgray transition-all"
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
      )}
    </div>
  );
};

export default NavLinks;
