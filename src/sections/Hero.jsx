import React from "react";
import FadeInSection from "../components/FadeInSection";
import { ReactTyped } from "react-typed"; // <-- fixed import
import "./AnimatedBorder.css";

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
            className="space-y-6 text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              👋Hi, I’m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Emmanuel AO
              </span>
            </h1>

            {/* Typing Effect */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              <ReactTyped
                strings={[
                  "Full-Stack Web Developer",
                  "Backend Engineer",
                  "Tech Writer",
                  "Creative Problem Solver",
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1500}
                loop
              />
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
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

        {/* Right: Animated Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <FadeInSection delay={0.2}>
            <img
              src="/img/hero.jpg"
              alt="Profile"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-blue-600 animated-blob"
            />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
