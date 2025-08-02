import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

export default function SidebarNav() {
  const [darkMode, setDarkMode] = useState(false);
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
    <aside className="fixed top-0 left-0 h-full w-56 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-r border-gray-200 dark:border-gray-800 z-50 flex flex-col justify-between py-6 px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <FaCode className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
          Emmanuel AO
        </h1>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-6 text-gray-700 dark:text-gray-300 font-medium">
        {navLinks.map((link) => (
          <ScrollLink
            key={link}
            to={link}
            smooth={true}
            duration={500}
            className={`relative pl-2 py-1 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors group ${
              activeSection === link ? "text-blue-600 dark:text-blue-400" : ""
            }`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
            <motion.span
              layoutId="underline"
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                activeSection === link ? "scale-x-100" : ""
              }`}
            ></motion.span>
          </ScrollLink>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="mt-auto pt-8">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </div>
    </aside>
  );
}
