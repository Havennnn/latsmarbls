import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ showModal, closeModal, status, onSubmit }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 bg-dgray bg-opacity-50 flex justify-center items-center shadow"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white p-6 rounded-[1.5rem] w-[42rem] shadow-xl"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex justify-between items-baseline mb-6">
              <motion.h2
                variants={itemVariants}
                className="text-3xl 2xl:text-5xl font-semibold text-gray-800"
              >
                Contact Me
              </motion.h2>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.1, backgroundColor: "#4d7aff" }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute right-0 mt-1 text-gray-600 text-white rounded-full bg-dgray w-7 h-7 2xl:w-10 2xl:h-10 2xl:text-xl flex justify-center items-center transition duration-300 ease-in-out"
              >
                X
              </motion.button>
            </div>

            <form onSubmit={onSubmit}>
              <motion.input
                variants={itemVariants}
                type="text"
                name="name"
                placeholder="Enter name"
                className="w-full p-2 2xl:p-3 2xl:text-xl border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-dgray focus:border-transparent"
                required
              />
              <motion.input
                variants={itemVariants}
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full p-2 2xl:p-3 2xl:text-xl border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-dgray focus:border-transparent"
                required
              />
              <motion.textarea
                variants={itemVariants}
                name="message"
                placeholder="Your message"
                className="w-full p-2 2xl:p-3 2xl:text-xl border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-dgray focus:border-transparent"
                rows="4"
                required
              ></motion.textarea>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#4d7aff" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full p-2 2xl:p-3 2xl:text-xl bg-dgray text-white rounded-xl transition duration-300 ease-in-out"
              >
                Submit Form
              </motion.button>
            </form>
            <motion.p
              variants={itemVariants}
              className="text-center italic text-sm mt-2"
            >
              *It might take a while to send please wait*
            </motion.p>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-xl font-semibold text-green-600"
              >
                {status}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
