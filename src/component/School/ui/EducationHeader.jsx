import React from "react";
import { motion } from "framer-motion";

const EducationHeader = () => {
  return (
    <div className="absolute top-0 left-0 flex element13">
      <div className="flex pr-3 py-3 2xl:py-2 gap-2 bg-dgray justify-center items-center rounded-br-[1.5rem] element12">
        <i className="fa-solid fa-graduation-cap text-3xl text-white"></i>
        <h1 className="text-4xl 2xl:text-5xl text-white font-bold">
          Education
        </h1>
      </div>
    </div>
  );
};

export default EducationHeader;
