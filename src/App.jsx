import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Skills from "./component/Skills.jsx";
import SkillsBox from "./component/SkillsBox.jsx";
import About from "./component/About.jsx";
import Project from "./component/Project.jsx";
import Footer from "./component/Footer.jsx";
import ScrollIndicator from "./component/ScrollIndicator";
import StickyNavbar from "./component/StickyNavbar";
import Preloader from "./component/Preloader";

const BUILD_VERSION = Date.now();

const App = () => {
  const MainContent = () => (
    <div
      id="home"
      className="relative px-8 lg:px-12 pt-6 2xl:px-16 2xl:pt-10 bg-[#1E1E1E] overflow-hidden"
    >
      <Navbar />
      <ScrollIndicator />
      <Home />
      <StickyNavbar />
      <div id="skills">
        <Skills />
        <SkillsBox />
      </div>
      <div id="contact">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <Footer />
    </div>
  );

  return (
    <HashRouter>
      <Preloader
        loadingDuration={2500}
        welcomeDuration={2000}
        logoSrc={`/Logo.svg?v=${BUILD_VERSION}`}
        welcomeLogoSrc={`/LogoFilled.svg?v=${BUILD_VERSION}`}
        primaryText="Lats"
        secondaryText="Marbls"
      >
        <MainContent />
      </Preloader>
    </HashRouter>
  );
};

export default App;
