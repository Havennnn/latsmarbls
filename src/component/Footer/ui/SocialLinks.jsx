import React from "react";

const SocialLinks = () => {
  return (
    <div className="mt-4">
      <ul className="flex gap-5 text-2xl 2xl:text-3xl">
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
  );
};

export default SocialLinks;
