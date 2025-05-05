import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MobileMenu = ({ isMenuOpen, scrollToSection }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "160%",
        duration: 0.1,
        ease: "power4.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      style={{ transform: "translateX(100%)" }}
      className="bg-dgray text-white px-2 absolute rounded-bl-[1rem] right-0 top-[60px] z-20 transition-all duration-500 ease-in-out block lg:hidden element8"
    >
      <ul className="flex flex-col pt-2 pb-5 gap-5">
        <li
          className="flex text-white justify-around items-center hover:transform hover:scale-105 transition ease-in-out duration-300"
          onClick={() => scrollToSection("home")}
        >
          <i className="fa-solid fa-house text-xl text-white"></i>
        </li>
        <li
          className="flex text-white justify-around items-center hover:transform hover:scale-105 transition ease-in-out duration-300"
          onClick={() => scrollToSection("skills")}
        >
          <i className="fa-solid fa-code text-xl text-white"></i>
        </li>
        <li
          className="flex gap-2 text-white justify-around items-center hover:transform hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
          onClick={() => scrollToSection("contact")}
        >
          <i className="fa-solid fa-phone text-xl text-white"></i>
        </li>
        <li
          className="flex gap-2 text-white justify-around items-center hover:transform hover:scale-105 transition ease-in-out duration-300"
          onClick={() => scrollToSection("projects")}
        >
          <i className="fa-solid fa-folder text-xl text-white"></i>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
