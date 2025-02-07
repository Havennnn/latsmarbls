import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < 2 ? prevPage + 1 : prevPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <section className="flex pt-10">
      <div className="flex flex-col md:flex-row items-center w-full gap-10 sm:gap-5">
        {/* Skill Section */}
        <div className="flex flex-col h-full w-full md:w-2/4">
          {currentPage === 1 && (
            <div className="flex flex-col h-[280px] lg:h-full animate-fadeIn">
              <h1 className="text-white font-medium text-xl 2xl:text-3xl">
                Web Technologies
              </h1>
              <Skill name="HTML" level="87%" />
              <Skill name="CSS" level="80%" />
              <Skill name="Tailwind CSS" level="75%" />
              <Skill name="JavaScript" level="80%" />
              <h1 className="text-white font-medium text-xl 2xl:text-3xl pt-6">
                Frontend Frameworks
              </h1>
              <Skill name="React.js" level="70%" />
            </div>
          )}

          {currentPage === 2 && (
            <div className="flex flex-col h-[280px] lg:h-full animate-fadeIn">
              <Skill name="Next.js" level="65%" />
              <h1 className="text-white font-medium text-xl 2xl:text-3xl pt-3">
                Backend Framework
              </h1>
              <Skill name="Node.js" level="75%" />
              <Skill name="Express.js" level="75%" />
              <h1 className="text-white font-medium text-xl 2xl:text-3xl pt-3">
                Database
              </h1>
              <Skill name="MongoDB" level="70%" />
              <Skill name="PostgreSQL" level="60%" />
            </div>
          )}

          <div className="flex gap-4 mt-4 justify-end md:pb-0">
            <button
              onClick={handlePrevious}
              className={`flex items-center justify-center p-3 2xl:p-5 bg-[#d9d9d9] text-white rounded-full shadow transition-all duration-500 ease-in-out ${
                currentPage === 1
                  ? "opacity-20"
                  : "hover:scale-105 hover:bg-[#acacac]"
              }`}
              disabled={currentPage === 1}
            >
              <img src="/leftIcon.svg" className="w-3 h-3 2xl:w-5 2xl:h-5" />
            </button>

            <button
              onClick={handleNext}
              className={`flex items-center justify-center p-3 2xl:p-5 bg-[#d9d9d9] text-white rounded-full shadow transition-all duration-500 ease-in-out ${
                currentPage === 2
                  ? "opacity-20"
                  : "hover:scale-105 hover:bg-[#acacac]"
              }`}
              disabled={currentPage === 2}
            >
              <img src="/rightIcon.svg" className="w-3 h-3 2xl:w-5 2xl:h-5" />
            </button>
          </div>
        </div>

        <div className="relative bg-white w-full h-full rounded-tl-[1.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] md:w-2/4 p-4">
          <div className="absolute right-0 top-0 pl-3 py-3 2xl:py-2 flex gap-2 bg-dgray justify-center items-center rounded-bl-[1.5rem] element11">
            <i className="fa-solid fa-code text-3xl text-white"></i>
            <h1 className="text-4xl 2xl:text-5xl text-white font-bold element10">
              Skills
            </h1>
          </div>
          <h1 className="text-xl pt-5 md:px-2 2xl:px-5 md:pt-5 lg:pt-2 md:text-[24px] lg:text-3xl 2xl:text-4xl px-1 text-dgray font-bold">
            What can I bring?
          </h1>
          <p className="text-gray mt-2 md:mt-4 2xl:mt-6 px-1 md:px-2 2xl:px-5 flex flex-col tracking-tight 2xl:text-2xl">
            I am a passionate web developer with a solid foundation in HTML,
            CSS, JavaScript, and familiarity with React, MongoDB, and Tailwind
            CSS. My hands-on experience includes completing certifications in
            web development and cybersecurity, and working on team-based
            projects where I developed strong organizational and problem-solving
            skills. With a commitment to learning and a track record of adapting
            to new technologies, I am eager to contribute innovative, impactful
            solutions to your team while continuing to grow as a developer.
            <span className="mt-5 2xl:mt-8 text-dgray text-xl 2xl:text-3xl font-semibold">
              Let's work together!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ name, level }) => {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      { width: level, duration: 1.5, ease: "power3.out" }
    );
  }, [level]);

  const getDeviconClass = (name) => {
    const iconMap = {
      HTML: "devicon-html5-plain",
      CSS: "devicon-css3-plain",
      "Tailwind CSS": "devicon-tailwindcss-plain",
      JavaScript: "devicon-javascript-plain",
      React: "devicon-react-original",
      Next: "devicon-nextjs-plain",
      "Node.js": "devicon-nodejs-plain",
      "Express.js": "devicon-express-original",
      MongoDB: "devicon-mongodb-plain",
      PostgreSQL: "devicon-postgresql-plain",
    };
    return iconMap[name] || "devicon-devicon-plain";
  };

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Render the appropriate Devicon */}
        <i
          className={`${getDeviconClass(name)} text-white text-lg 2xl:text-2xl`}
        ></i>
        <p className="text-white 2xl:text-2xl">{name}</p>
      </div>
      <div className="flex gap-1 2xl:gap-2">
        <div className="w-full h-[10px] 2xl:h-[16px] bg-gray rounded-full">
          <div ref={barRef} className="h-full bg-white rounded-full"></div>
        </div>
        <p className="text-[12px] 2xl:text-xl text-white font-bold mt-[-5px]">
          {level}
        </p>
      </div>
    </>
  );
};

export default Skills;
