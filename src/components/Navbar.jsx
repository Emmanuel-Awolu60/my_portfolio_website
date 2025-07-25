import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
// import { RiHomeLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "contact", "about", "blog"];
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

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-base font-semibold">
          {["home", "about", "projects", "blog", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`cursor-pointer ${
                activeSection === section
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-500 transition`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
          <button onClick={toggleDarkMode}>
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

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-[100%] right-0 w-64 h-screen bg-white dark:bg-gray-900 px-6 py-8 space-y-4 shadow-lg z-50 overflow-hidden"
          >
            {/* Background Slide-in Image */}
            <motion.img
              src="/your-background-image.svg" // Place the SVG in your public folder
              alt="Menu background"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col gap-4">
              {["home", "about", "projects", "blog", "contact"].map(
                (section) => (
                  <ScrollLink
                    key={section}
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`capitalize tracking-wide font-semibold flex items-center gap-2 ${
                      activeSection === section
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-800 dark:text-gray-300"
                    } hover:text-blue-500 dark:hover:text-blue-300 transition`}
                  >
                    <span>•</span> {section}
                  </ScrollLink>
                )
              )}
            </div>

            <button
              onClick={toggleDarkMode}
              className="relative z-10 mt-6 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <>
                  <FiSun className="w-5 h-5" /> <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5" /> <span>Dark Mode</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
