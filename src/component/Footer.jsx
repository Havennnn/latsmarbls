import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current || !placeholderRef.current) return;

      const navbarTop = placeholderRef.current.getBoundingClientRect().top;

      if (navbarTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, offset = 20) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-dgray text-white mt-10 flex flex-col items-center justify-center">
      <img src="/Logo.svg" alt="logo" className="w-8 h-8 2xl:w-12 2xl:h-12" />
      <div className="flex justify-center items-center flex-col mt-10 text-sm 2xl:text-xl">
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
            className="px-3 flex items-center cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"
          >
            Projects
          </li>
        </ul>

        <div className="mt-4">
          <ul className="flex gap-5 text-2xl 2xl:text-4xl">
            <li className="flex animate-fadeIn">
              <a
                href="https://github.com/Havennnn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github text-white hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-highlight transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a
                href="https://www.linkedin.com/in/latrell-marable-b43a37256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-white hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-highlight transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a
                href="https://www.facebook.com/latrell.r.marable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-facebook text-white hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-highlight transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li className="flex animate-fadeIn">
              <a
                href="https://www.instagram.com/lancrms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-instagram text-white hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-highlight transition duration-300 ease-in-out"></i>
              </a>
            </li>
          </ul>
        </div>

        <h2 className="mt-4 pb-10 text-[12px] 2xl:text-lg">
          <span className="font-semibold">©LatsMarbls</span> Portfolio, All
          rights and reserve.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
