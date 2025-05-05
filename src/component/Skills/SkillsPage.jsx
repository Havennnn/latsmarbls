import React from "react";
import TechItem from "./TechItem";

// Data for the technologies
const techData = {
  page1: [
    {
      category: "Web Technologies",
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Python",
        "C#",
        "PHP",
      ],
    },
    {
      category: "Frontend Frameworks",
      techs: ["React", "Next.js", "React Native", "Blade"],
    },
  ],
  page2: [
    {
      category: "Backend Technologies",
      techs: ["PHP", "Node.js", "Express.js", "Laravel"],
    },
    {
      category: "Databases",
      techs: ["MySQL", "MongoDB"],
    },
  ],
};

const SkillsPage = ({ pageNumber }) => {
  const pageData = pageNumber === 1 ? techData.page1 : techData.page2;

  return (
    <div className="flex flex-col h-[380px] lg:h-full animate-fadeIn">
      {pageData.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className="mb-4">
          <h1
            className={`text-white font-medium text-xl 2xl:text-3xl mb-3 ${
              sectionIndex > 0 ? "pt-6" : ""
            }`}
          >
            {section.category}
          </h1>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {section.techs.map((tech, techIndex) => (
              <TechItem key={`tech-${sectionIndex}-${techIndex}`} name={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPage;
