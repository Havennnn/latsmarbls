import React from "react";

const StickyNavbarLogo = ({ isSticky = false }) => (
  <div
    className={`flex gap-1 items-center justify-center ${isSticky ? "" : ""}`}
  >
    <img src="/LogoFilled.svg" alt="logo" className="w-6 h-6 2xl:w-9 2xl:h-9" />
    <h1
      className={`font-bold ${
        isSticky
          ? "2xl:text-2xl text-dgray hidden md:block"
          : "text-dgray 2xl:text-2xl"
      }`}
    >
      Lats
      <span className="text-gray text-xl 2xl:text-3xl">Marbls</span>
    </h1>
  </div>
);

export default StickyNavbarLogo;
