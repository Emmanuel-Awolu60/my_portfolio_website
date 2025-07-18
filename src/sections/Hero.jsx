import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Text */}
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            👋 Hi, I’m <span className="text-blue-600 dark:text-blue-400">Emmanuel</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
            Full-Stack Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            I build fast, responsive, and modern web applications using React, Tailwind, Node.js, and Express.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105"
          >
            View Projects
          </a>
        </div>

        {/* Right: Image (Optional, replace src with yours) */}
        <div className="hidden md:block">
          <img
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
}
