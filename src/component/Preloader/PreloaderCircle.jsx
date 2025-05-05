import React from "react";
import { motion } from "framer-motion";

const PreloaderCircle = ({ logoSrc, logoAlt = "Loading" }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-dgray z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="animate-spin rounded-full border-b-4 2xl:border-b-8 border-white border-solid h-[90px] w-[90px] lg:h-32 lg:w-32 2xl:h-40 2xl:w-40 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="animate-spin rounded-full border-t-2 2xl:border-t-4 border-white border-solid h-[72px] w-[72px] lg:h-24 lg:w-24 2xl:h-32 2xl:w-32"
        ></motion.div>
      </motion.div>
      <motion.img
        src={logoSrc || "/Logo.svg"}
        alt={logoAlt}
        className="absolute h-8 w-8 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default PreloaderCircle;
