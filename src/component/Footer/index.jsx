import React from "react";
import { useNavigation } from "./hooks/useNavigation";
import { useScroll } from "./hooks/useScroll";
import FooterNavigation from "./ui/FooterNavigation";
import SocialLinks from "./ui/SocialLinks";
import Copyright from "./ui/Copyright";

const Footer = () => {
  const { scrollToSection } = useNavigation();
  const { isSticky } = useScroll();

  return (
    <footer className="bg-dgray text-white mt-10 flex flex-col items-center justify-center">
      <img src="/LM.svg" alt="logo" className="w-8 h-8 2xl:w-12 2xl:h-12" />
      <div className="flex justify-center items-center flex-col mt-10 text-sm 2xl:text-xl">
        <FooterNavigation scrollToSection={scrollToSection} />
        <SocialLinks />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
