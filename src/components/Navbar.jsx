import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "blog", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.5 }
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

  const navLinks = ["home", "about", "projects", "blog", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode className="text-blue-600 dark:text-blue-400 w-6 h-6" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
            Emmanuel AO
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth={true}
              duration={500}
              className={`relative cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                activeSection === link ? "text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}

              {/* Underline animation */}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ${
                  activeSection === link ? "scale-x-100" : ""
                }`}
              ></span>
            </ScrollLink>
          ))}

          <button onClick={toggleDarkMode} className="ml-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 dark:text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 font-medium text-center text-gray-800 dark:text-gray-200"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link}
                to={link}
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block cursor-pointer ${
                  activeSection === link ? "text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </ScrollLink>
            ))}

            <button
              onClick={toggleDarkMode}
              className="mt-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
