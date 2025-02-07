import React from "react";

const Project = () => {
  return (
    <section className="pt-10">
      <div className="relative flex flex-col md:flex-row w-full h-full px-6 sm:px-14 py-10 bg-white rounded-[1.5rem] 2xl:rounded-[2rem] justify-center items-center">
        <div className="absolute top-0 flex px-3 2xl:py-2 2xl:px-4 pb-3 2xl:pb-4 bg-dgray rounded-bl-[1.5rem] 2xl:rounded-bl-[2rem] rounded-br-[1.5rem] 2xl:rounded-br-[2rem] element16">
          <div className="flex gap-3 justify-center items-center element17">
            <i className="fa-solid fa-folder text-3xl text-white"></i>
            <h1 className="text-4xl 2xl:text-5xl text-white font-bold">
              Projects
            </h1>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 2xl:p-10">
              <img
                src="/mernAuth.jpg"
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm 2xl:shadow-md"
              />
              <div className="flex justify-between items-baseline mt-2 2xl:mt-4">
                <h3 className="text-md md:text-xl 2xl:text-3xl font-semibold text-dgray">
                  Login Auth
                </h3>
                <div className="flex items-center gap-2 text-md md:text-2xl 2xl:text-4xl">
                  <a
                    href="https://github.com/Havennnn/mern-auth"
                    className="text-dgray flex items-center justify-center rounded-full"
                  >
                    <i className="fa-brands fa-github hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                  <a
                    href="https://login-auth-by4k.vercel.app"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-solid fa-globe hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm 2xl:text-xl mt-2 2xl:mt-4 tracking-tight">
                A fully functional authentication system built using the MERN
                stack with secure features such as email verification and
                password reset via a 6-digit OTP. react, node, express,tailwind
                css, mongodb
              </p>
              <p className="mt-5 text-sm 2xl:text-xl font-medium">
                Technology Used:
              </p>
              <div className="mt-3 flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray text-sm 2xl:text-xl">
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="px-3 flex gap-1 justify-center items-center">
                  <i className="devicon-nodejs-plain"></i>
                  Node.js
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-express-original"></i>
                  Express.js
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-mongodb-plain"></i>
                  MongoDB
                </span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 2xl:p-8">
              <img
                src="/storyWeaver.jpg"
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm 2xl:shadow-md"
              />
              <div className="flex justify-between items-baseline mt-2 2xl:mt-4">
                <h3 className="text-md md:text-xl 2xl:text-3xl font-semibold text-dgray">
                  Story Weaver
                </h3>
                <div className="flex items-center gap-2 text-md md:text-2xl 2xl:text-4xl">
                  <a
                    href="https://github.com/Havennnn/StoryWeaver"
                    className="text-dgray flex items-center justify-center rounded-full"
                  >
                    <i className="fa-brands fa-github hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                  <a
                    href="https://story-weaver-two.vercel.app"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-solid fa-globe hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm 2xl:text-xl mt-2 2xl:mt-4 tracking-tight">
                A modern and dynamic storytelling platform built using React,
                Tailwind CSS, and React Router. Story Weaver combines
                cutting-edge technology with creativity, integrating the Google
                Generative AI API for crafting immersive narratives.
              </p>
              <p className="mt-5 text-sm 2xl:text-xl font-medium">
                Technology Used:
              </p>
              <div className="mt-3 flex text-sm 2xl:text-xl justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-nodejs-plain"></i>
                  Node.js
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-google-plain"></i>
                  Gemini API
                </span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="shadow-xl rounded-[1.5rem] p-6 2xl:p-8 hover:transform">
              <img
                src="/curatorArt.jpg"
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm 2xl:shadow-md"
              />
              <div className="flex justify-between items-baseline mt-2 2xl:mt-4">
                <h3 className="text-md md:text-xl 2xl:text-3xl font-semibold text-dgray">
                  Art Curator
                </h3>
                <div className="flex items-center text-md md:text-2xl 2xl:text-4xl gap-2 text-lg">
                  <a
                    href="https://github.com/Havennnn/curatorArt"
                    className="text-dgray flex items-center justify-center rounded-full"
                  >
                    <i className="fa-brands fa-github hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                  <a
                    href="https://curator-art.vercel.app"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-solid fa-globe   hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm 2xl:text-xl mt-2 2xl:mt-4 tracking-tight">
                A sleek and responsive art curation platform designed using
                React, Node.js, and Tailwind CSS. This website allows users to
                explore through a clean and modern interface.
              </p>
              <p className="mt-5 text-sm 2xl:text-xl font-medium">
                Technology Used:
              </p>
              <div className="mt-3 text-sm 2xl:text-xl flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="shadow-xl rounded-[1.5rem] p-6">
              <img
                src="/saasLandingPage.jpg"
                alt="page"
                className="w-full rounded-[1.5rem] shadow-sm 2xl:shadow-md"
              />
              <div className="flex justify-between items-baseline mt-2 2xl:mt-4">
                <h3 className="text-md md:text-xl 2xl:text-3xl font-semibold text-dgray">
                  Saas Landing Page
                </h3>
                <div className="flex items-center gap-2 text-md md:text-2xl 2xl:text-4xl text-dgray">
                  <a
                    href="https://github.com/Havennnn/lightsaas-landingpage"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-brands fa-github hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                  <a
                    href="https://lightsaas-landingpage-tau.vercel.app"
                    className="flex items-center justify-center"
                  >
                    <i className="fa-solid fa-globe hover:cursor-pointer hover:transform hover:scale-110 hover:text-highlight transition duration-300 ease-in-out"></i>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm 2xl:text-xl mt-2 2xl:mt-4 tracking-tight">
                A modern landing page designed using React, Framer, and Tailwind
                CSS. This website allows users to explore through a clean and
                modern interface.
              </p>
              <p className="mt-5 text-sm 2xl:text-xl font-medium">
                Technology Used:
              </p>
              <div className="mt-3 text-sm 2xl:text-xl flex justify-center flex-wrap gap-5 hover:cursor-default text-dgray">
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-react-original"></i>
                  React
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-nextjs-plain"></i>
                  Next
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-tailwindcss-plain"></i>
                  TailwindCSS
                </span>
                <span className="flex gap-1 justify-center items-center">
                  <i className="devicon-framermotion-original"></i>
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
