import React from "react";
import NavItem from "./NavItem";

const navItems = [
  { id: "home", icon: "fa-house", text: "Home" },
  { id: "skills", icon: "fa-code", text: "Skills" },
  { id: "contact", icon: "fa-phone", text: "Contact" },
  { id: "projects", icon: "fa-folder", text: "Projects" },
];

const NavLinks = ({ isMobile, scrollToSection }) => {
  return (
    <div
      className={`justify-between items-center ${
        isMobile ? "flex md:hidden" : "hidden md:flex"
      }`}
    >
      <ul
        className={`flex ${
          isMobile ? "gap-1" : "gap-2"
        } text-dgray transition-all`}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            sectionId={item.id}
            scrollToSection={scrollToSection}
            isMobile={isMobile}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
