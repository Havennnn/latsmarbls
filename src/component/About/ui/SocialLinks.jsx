import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex absolute bg-dgray right-0 top-1/2 transform -translate-y-1/2 rounded-tl-[1rem] rounded-bl-[1rem] element14">
      <ul className="flex flex-col gap-2 pt-2 pb-2 pl-2 sm:pt-3 sm:pb-3 sm:pl-3 element15">
        <li className="flex animate-fadeIn">
          <a
            href="https://github.com/Havennnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-github text-4xl sm:text-5xl 2xl:text-7xl text-white hover:transform hover:scale-105 hover:text-[#d6d6d6] transition duration-300 ease-in-out"></i>
          </a>
        </li>
        <li className="flex animate-fadeIn">
          <a
            href="https://www.linkedin.com/in/latrell-marable-b43a37256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-4xl sm:text-5xl 2xl:text-7xl text-white hover:transform hover:scale-105 hover:text-[#d6d6d6] transition duration-300 ease-in-out"></i>
          </a>
        </li>
        <li className="flex animate-fadeIn">
          <a
            href="https://www.facebook.com/latrell.r.marable"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-facebook text-4xl sm:text-5xl 2xl:text-7xl text-white hover:transform hover:scale-105 hover:text-[#d6d6d6] transition duration-300 ease-in-outs"></i>
          </a>
        </li>
        <li className="flex animate-fadeIn">
          <a
            href="https://www.instagram.com/lancrms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-instagram text-4xl sm:text-5xl 2xl:text-7xl text-white hover:transform hover:scale-105 hover:text-[#d6d6d6] transition duration-300 ease-in-out"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
