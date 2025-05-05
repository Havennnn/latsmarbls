import React from "react";

const TechItem = ({ name }) => {
  const getDeviconClass = (name) => {
    const iconMap = {
      HTML: "devicon-html5-plain",
      CSS: "devicon-css3-plain",
      "Tailwind CSS": "devicon-tailwindcss-plain",
      JavaScript: "devicon-javascript-plain",
      React: "devicon-react-original",
      "Next.js": "devicon-nextjs-plain",
      "Node.js": "devicon-nodejs-plain",
      "Express.js": "devicon-express-original",
      MongoDB: "devicon-mongodb-plain",
      PostgreSQL: "devicon-postgresql-plain",
      PHP: "devicon-php-plain",
      Laravel: "devicon-laravel-original",
      "React Native": "devicon-react-original",
      MySQL: "devicon-mysql-original",
      "C#": "devicon-csharp-plain",
      Python: "devicon-python-plain",
      Blade: "devicon-laravel-plain",
    };
    return iconMap[name] || "devicon-devicon-plain";
  };

  return (
    <div className="flex items-center gap-2 my-2 transition-all duration-300 hover:translate-x-1">
      <i
        className={`${getDeviconClass(name)} text-white text-lg 2xl:text-2xl`}
      ></i>
      <p className="text-white 2xl:text-2xl">{name}</p>
    </div>
  );
};

export default TechItem;
