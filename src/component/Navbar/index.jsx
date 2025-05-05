import React from "react";
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import LargeDesktopMenu from "./LargeDesktopMenu";
import useNavigation from "./useNavigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, scrollToSection } = useNavigation();

  return (
    <div className="relative sticky-navbar">
      <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />

      <DesktopMenu scrollToSection={scrollToSection} />

      <LargeDesktopMenu scrollToSection={scrollToSection} />
    </div>
  );
};

export {
  MobileHeader,
  MobileMenu,
  DesktopMenu,
  LargeDesktopMenu,
  useNavigation,
};

export default Navbar;
