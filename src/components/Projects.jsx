import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "DevNotes",
    description:
      "A markdown-powered note app built for developers with auto-saving, tagging, and dark mode.",
    tech: "React, Tailwind, Firebase",
    icon: "<FaGithub />",
    github: "https://github.com/Emmanuel-Awolu60/devnotes",
    live: "https://devnotes.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website — built to showcase my projects, skills, and blog content.",
    tech: "React, Tailwind, Framer Motion",
    github: "https://github.com/Emmanuel-Awolu60/my_portfolio_website",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website — built to showcase my projects, skills, and blog content.",
    tech: "React, Tailwind, Framer Motion",
    github: "https://github.com/Emmanuel-Awolu60/my_portfolio_website",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website — built to showcase my projects, skills, and blog content.",
    tech: "React, Tailwind, Framer Motion",
    github: "https://github.com/Emmanuel-Awolu60/my_portfolio_website",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-11/12 mx-auto mt-20 mb-10 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.3, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-md rounded-xl p-6 border border-blue-100 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <p className="text-sm mb-4 text-gray-500">Tech: {project.tech}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline text-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
