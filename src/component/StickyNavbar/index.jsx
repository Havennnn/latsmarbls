import React, { useRef } from "react";
import StickyNavbarLogo from "./StickyNavbarLogo";
import NavLinks from "./NavLinks";
import useScrollPosition from "./useScrollPosition";
import scrollToSection from "./ScrollHelper";

const StickyNavbar = () => {
  const placeholderRef = useRef(null);
  const navbarRef = useRef(null);
  const isSticky = useScrollPosition(placeholderRef);

  return (
    <div className="relative flex justify-center items-center mt-10">
      <div ref={placeholderRef} className="h-12"></div>

      <div
        id="sticky-navbar"
        ref={navbarRef}
        className={`h-8 2xl:h-12 px-8 2xl:px-12 bg-white transition-all duration-700 ease-linear rounded-[1.5rem] shadow-lg 
        ${
          isSticky
            ? "fixed flex justify-between items-center top-2 inset-x-0 mx-auto z-10 scale-100 bg-opacity-90 backdrop-blur-sm w-[89.7%] md:w-[93%] 2xl:w-[93.3%] shadow-2xl"
            : "relative w-full scale-full flex justify-center items-center border"
        }`}
        style={{
          transition: "top 0.4s ease, transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {isSticky ? (
          <>
            <StickyNavbarLogo isSticky={true} />
            <NavLinks scrollToSection={scrollToSection} isMobile={false} />
            <NavLinks scrollToSection={scrollToSection} isMobile={true} />
          </>
        ) : (
          <StickyNavbarLogo isSticky={false} />
        )}
      </div>
    </div>
  );
};

export default StickyNavbar;
