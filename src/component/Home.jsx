import React, { useState, useEffect } from "react";
import cv from "../assets/MarableLatrell_Intern_Resume.pdf";
import heroBg from "../assets/Herobg-new2.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const DownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "MarableLatrell_OJT_Resume.pdf";
    link.click();
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setEmail("");
    setMessage("");
    setStatus("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "772012b3-85ef-4d30-b354-b9c9c07587ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message has been sent successfully!");
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [showModal]);

  const slideIn = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
  };

  return (
    <section className="h-[700px] xl:h-[93vh] bg-white transition-all duration-500 ease-in-out rounded-tl-[1.5rem] rounded-br-[1.5rem]">
      <div className="relative flex h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="relative flex w-full flex-col gap-1 2xl:gap-2 px-6 sm:px-14 2xl:px-24 md:w-[55%] md:py-24 lg:w-[58%] my-auto animate-fadeIn"
        >
          <p className="font-bold text-gray animate-pulse 2xl:text-2xl">
            GOOD DAY!
          </p>
          <h1 className="font-bold text-5xl 2xl:text-7xl text-dgray text-shadow">
            I'm Latrell
          </h1>
          <p className="font-bold text-2xl 2xl:text-4xl text-gray animate-pulse">
            WEB and APP DEVELOPER
          </p>
          <p className="text-dgray 2xl:text-2xl tracking-tight">
            I am applying for an internship to receive hands-on training and
            learn from experienced professionals. I am eager to improve my
            skills in web and app development and gain practical knowledge that
            will help me grow in the field
          </p>

          <div className="py-4 flex items-center gap-3">
            <button
              className="flex items-center justify-center w-32 2xl:w-40 gap-2 p-2 2xl:p-3 text-white text-sm 2xl:text-xl bg-dgray rounded-xl 2xl:rounded-2xl shadow-xl hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-highlight transition duration-300 ease-in-out"
              onClick={DownloadCV}
            >
              <i className="fa-solid fa-file-arrow-down text-white"></i>
              Resume
            </button>
            <a
              className="flex items-center justify-center w-32 2xl:w-40 gap-2 p-2 2xl:p-3 text-white text-sm 2xl:text-xl bg-dgray rounded-xl  2xl:rounded-2xl shadow-xl hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-highlight transition duration-300 ease-in-out"
              href="#projects"
            >
              <i className="fa-solid fa-folder text-white"></i>
              Projects
            </a>
          </div>
        </motion.div>

        <div className="absolute left-0 bottom-0 flex pr-3 py-3 2xl:pr-6 2xl:py-5 bg-dgray rounded-tr-[1.5rem] element3">
          <div className="element4">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={slideIn}
              className="flex items-center justify-center gap-2 sm:gap-3 2xl:gap-4"
            >
              <li className="flex mt-1">
                <a
                  href="https://github.com/Havennnn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-github text-white text-3xl sm:text-5xl 2xl:text-7xl hover:cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:text-[#d6d6d6] transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li className="flex mt-1">
                <a
                  href="https://www.linkedin.com/in/latrell-marable-b43a37256/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin text-white text-3xl sm:text-5xl 2xl:text-7xl hover:cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:text-[#d6d6d6] transition duration-300 ease-in-out"></i>
                </a>
              </li>
              <li
                onClick={openModal}
                className="border-black flex items-center justify-around text-xl 2xl:text-3xl h-[27px] sm:h-[43px] 2xl:h-[62px] sm:mt-1 gap-2 px-3 sm:px-6 2xl:px-12 text-dgray bg-white rounded hover:cursor-pointer hover:transform hover:scale-105 2xl:hover:scale-110 hover:shadow-xl hover:bg-[#d6d6d6] transition duration-300 ease-in-out"
              >
                <i className="fas fa-envelope"></i>
                <p className="font-semibold text-dgray">Contact</p>
              </li>
            </motion.ul>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 bg-dgray bg-opacity-50 flex justify-center items-center shadow">
            <div className="bg-white p-6 rounded-[1.5rem] w-[42rem] shadow-xl">
              <div className="relative flex justify-between items-baseline mb-6">
                <h2 className="text-3xl 2xl:text-5xl font-semibold text-gray-800 ">
                  Contact Me
                </h2>
                <button
                  onClick={closeModal}
                  className="absolute right-0 mt-1 text-gray-600 text-white rounded-full bg-dgray w-7 h-7 2xl:w-10 2xl:h-10 2xl:text-xl flex justify-center items-center hover:transform hover:scale-105 hover:bg-highlight transition duration-300 ease-in-out"
                >
                  X
                </button>
              </div>

              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-full p-2 2xl:p-3 2xl:text-xl border border-gray-300 rounded-lg mb-4"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-full p-2 2xl:p-3 2xl:text-xl border border-gray-300 rounded-lg mb-4"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full p-2 2xl:p-3 2xl:text-xl border border-gray-300 rounded-lg mb-4"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-2 2xl:p-3 2xl:text-xl bg-dgray text-white rounded-xl hover:transform hover:scale-105 hover:bg-highlight transition duration-300 ease-in-out"
                >
                  Submit Form
                </button>
              </form>
              <p className="text-center italic text-sm mt-2">
                *It might take a while to send please wait*
              </p>
              {status && (
                <div className="mt-4 text-center text-xl font-semibold text-green-600">
                  {status}
                </div>
              )}
            </div>
          </div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="right-14 bottom-1/2 transform translate-y-1/2 md:w-[20rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[48rem] my-auto hidden md:block animate-fadeIn"
        >
          <Lottie animationData={heroBg} loop={true} />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
