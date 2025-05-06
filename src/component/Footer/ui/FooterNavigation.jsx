import React from "react";

const FooterNavigation = ({ scrollToSection }) => {
  return (
    <ul className="flex items-center justify-center gap-5 text-white transition-all">
      <li
        onClick={() => scrollToSection("home")}
        className="px-3 flex items-center cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-105 hover:text-highlight transition duration-300 ease-in-out"
      >
        Home
      </li>
      <li
        onClick={() => scrollToSection("skills")}
        className="px-3 flex items-center cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-105 hover:text-highlight transition duration-300 ease-in-out"
      >
        Skills
      </li>
      <li
        onClick={() => scrollToSection("contact")}
        className="px-3 flex items-center cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-105 hover:text-highlight transition duration-300 ease-in-out"
      >
        Contact
      </li>
      <li
        onClick={() => scrollToSection("projects")}
        className="px-3 flex items-center cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-105 hover:text-highlight transition duration-300 ease-in-out"
      >
        Projects
      </li>
    </ul>
  );
};

export default FooterNavigation;
