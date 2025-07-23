import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left: Text */}
        <FadeInSection>
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              👋Hi, I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Emmanuel AO
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full-Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              I build fast, responsive, and modern web applications using
              React.js, Tailwind.css, Node.js, Express, TypeScript and Python. I
              care deeply about clean code and good UI.
            </p>
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105 text-lg font-medium"
            >
              View Projects
            </a>
          </div>
        </FadeInSection>
        {/* Right: Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* <a
            href="https://github.com/Emmanuel-Awolu60"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <FadeInSection delay={0.2}>
            <img
              // src="https://avatars.githubusercontent.com/u/9919?v=4"
              src="/img/hero.jpg"
              alt="Profile"
              className="w-auto md:w-96 md:h-96 object-cover rounded-xl shadow-2xl border-4 border-blue-600"
            />
          </FadeInSection>
          {/* </a> */}
        </div>
      </div>
    </section>
  );
}
