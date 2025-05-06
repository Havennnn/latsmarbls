import React from "react";
import heroBg from "../../../assets/Herobg-new.json";
import Lottie from "lottie-react";

const HeroAnimation = () => {
  return (
    <div className="relative flex w-full md:w-4/6 xl:w-[52rem] 2xl:w-[74rem] h-full m-auto justify-center items-center">
      <div className="w-5/6 hidden md:block animate-fadeIn">
        <Lottie animationData={heroBg} loop={true} />
      </div>
    </div>
  );
};

export default HeroAnimation;
