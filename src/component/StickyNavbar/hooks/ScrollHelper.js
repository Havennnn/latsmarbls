const scrollToSection = (sectionId, offset = 50) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - offset,
      behavior: "smooth",
    });
  }
};

export default scrollToSection; 