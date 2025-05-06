import React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const MobileMenu = ({ isMenuOpen, scrollToSection }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power4.out",
        });
      } else {
        gsap.to(menuRef.current, {
          x: "160%",
          duration: 0.2,
          ease: "power4.in",
        });
      }
    }
  }, [isMenuOpen]);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.3 + custom * 0.1,
      },
    }),
    tap: { scale: 0.95 },
  };

  return (
    <div
      ref={menuRef}
      style={{ transform: "translateX(100%)" }}
      className="bg-dgray text-white px-2 absolute rounded-bl-[1rem] right-0 top-[60px] z-20 transition-all duration-500 ease-in-out block lg:hidden element8"
    >
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="flex flex-col pt-2 pb-5 gap-5"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.li
              custom={0}
              variants={itemVariants}
              whileTap="tap"
              className="flex text-white justify-around items-center transition ease-in-out duration-300"
              onClick={() => scrollToSection("home")}
            >
              <motion.i
                whileHover={{ scale: 1.2 }}
                className="fa-solid fa-house text-xl text-white"
              />
            </motion.li>

            <motion.li
              custom={1}
              variants={itemVariants}
              whileTap="tap"
              className="flex text-white justify-around items-center transition ease-in-out duration-300"
              onClick={() => scrollToSection("skills")}
            >
              <motion.i
                whileHover={{ scale: 1.2 }}
                className="fa-solid fa-code text-xl text-white"
              />
            </motion.li>

            <motion.li
              custom={3}
              variants={itemVariants}
              whileTap="tap"
              className="flex text-white justify-around items-center transition ease-in-out duration-300"
              onClick={() => scrollToSection("education")}
            >
              <motion.i
                whileHover={{ scale: 1.2 }}
                className="fa-solid fa-graduation-cap text-xl text-white"
              />
            </motion.li>

            <motion.li
              custom={2}
              variants={itemVariants}
              whileTap="tap"
              className="flex text-white justify-around items-center transition ease-in-out duration-300"
              onClick={() => scrollToSection("experience")}
            >
              <motion.i
                whileHover={{ scale: 1.2 }}
                className="fa-solid fa-briefcase text-xl text-white"
              />
            </motion.li>

            <motion.li
              custom={4}
              variants={itemVariants}
              whileTap="tap"
              className="flex gap-2 text-white justify-around items-center hover:cursor-pointer transition ease-in-out duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <motion.i
                whileHover={{ scale: 1.2 }}
                className="fa-solid fa-phone text-xl text-white"
              />
            </motion.li>

            <motion.li
              custom={5}
              variants={itemVariants}
              whileTap="tap"
              className="flex gap-2 text-white justify-around items-center transition ease-in-out duration-300"
              onClick={() => scrollToSection("projects")}
            >
              <motion.i
                whileHover={{ scale: 1.2 }}
                className="fa-solid fa-folder text-xl text-white"
              />
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
