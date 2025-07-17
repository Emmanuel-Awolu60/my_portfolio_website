import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Set initial theme from local storage or system preference
  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
      setDarkMode(true);
    } else {
      root.classList.remove("dark");
    }
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
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">Home</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">Contact</a>
          <button onClick={toggleDarkMode} className="ml-4 text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded hover:scale-105 transition">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 space-y-3">
          <a href="#home" className="text-gray-700 dark:text-gray-300">Home</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300">Contact</a>
          <button onClick={toggleDarkMode} className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}
