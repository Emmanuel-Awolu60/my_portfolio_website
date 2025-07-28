import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCode, FaHome, FaTools, FaUser } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

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
        <div className="hidden md:flex space-x-8 text-base font-semibold items-center">
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
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 w-72 h-screen z-50 overflow-hidden"
          >
            {/* Slide-in Background Layer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute top-[64px] right-0 bottom-0 left-0 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
            />

            {/* Foreground content */}
            <div className="relative z-10 px-6 py-8 space-y-4">
              {/* Menu Content */}
              <div className="flex flex-col gap-4 mt-16">
                {["home", "about", "projects", "blog", "contact"].map(
                  (section) => (
                    <ScrollLink
                      key={section}
                      to={section}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`capitalize tracking-wide font-semibold text-lg flex items-center gap-2 ${
                        activeSection === section
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-gray-800 dark:text-gray-200"
                      } hover:text-blue-600 dark:hover:text-blue-300 transition`}
                    >
                      {section === "home" && <FaHome className="w-4 h-4" />}
                      {section === "about" && <FaUser className="w-4 h-4" />}
                      {section === "projects" && (
                        <FaTools className="w-4 h-4" />
                      )}
                      {section === "blog" && <TbWriting className="w-4 h-4" />}
                      {section === "contact" && (
                        <IoIosContact className="w-4 h-4" />
                      )}
                      <span>{section}</span>
                    </ScrollLink>
                  )
                )}

                {/* Toggle Theme Button */}
                <button
                  onClick={toggleDarkMode}
                  className="mt-4 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
