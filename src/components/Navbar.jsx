import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll spy to update active section
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
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle dark mode
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
          <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
            Emmanuel AO
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-semibold">
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

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeSection === "about"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 transition`}
          >
            About
          </ScrollLink>

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
            to="blog"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeSection === "blog"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 transition`}
          >
            Blog
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
            // className="ml-4 text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:scale-105 transition"
          >
            {darkMode ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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
          {["home", "about", "projects", "contact", "blog"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`cursor-pointer ${
                activeSection === section
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}

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
