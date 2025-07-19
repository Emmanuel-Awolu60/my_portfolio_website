import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is centered
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 w-full p-3.5 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {" "}
          {/* ALIGN ICON + TEXT */}
          <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />{" "}
          {/* Bigger + Colored */}
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
            Emmanuel AO
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-semibold">
          {" "}
          {/* Bolder + Slightly larger */}
          {/* <a
            href="#home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Home
          </a> */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeSection === "home"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 transition`}
          >
            Home
          </ScrollLink>
          {/* <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
          >
            Contact
          </a> */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeSection === "projects"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 transition`}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeSection === "contact"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 transition`}
          >
            Contact
          </ScrollLink>
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:scale-105 transition"
          >
            {darkMode ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-800 dark:text-white text-2xl font-bold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 space-y-3 font-semibold text-base">
          <a href="#home" className="text-gray-700 dark:text-gray-300">
            Home
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300">
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
          >
            {darkMode ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
