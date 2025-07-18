import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            👋 Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">Emmanuel</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            Full-Stack Web Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            I build fast, responsive, and modern web applications using React,
            Tailwind, Node.js, and Express. I care deeply about clean code and
            good UI.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105 text-lg font-medium"
          >
            View Projects
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-xl shadow-2xl border-4 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
}
