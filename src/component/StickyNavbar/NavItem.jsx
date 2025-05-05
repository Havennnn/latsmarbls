import React from "react";

const NavItem = ({
  icon,
  text,
  sectionId,
  scrollToSection,
  isMobile = false,
}) => {
  const baseClasses =
    "border rounded-[1.5rem] flex gap-1 items-center cursor-pointer hover:bg-dgray hover:border-dgray hover:text-white transition ease-in-out duration-300";

  return isMobile ? (
    <li
      onClick={() => scrollToSection(sectionId)}
      className={`group ${baseClasses} px-3`}
    >
      <i className={`fa-solid ${icon} transition-all duration-300 py-1`}></i>
      <span className="hidden group-hover:inline transition-all duration-300">
        {text}
      </span>
    </li>
  ) : (
    <li
      onClick={() => scrollToSection(sectionId)}
      className={`${baseClasses} px-3 2xl:px-5 2xl:text-2xl`}
    >
      <i className={`fa-solid ${icon}`}></i>
      <p>{text}</p>
    </li>
  );
};

export default NavItem;
