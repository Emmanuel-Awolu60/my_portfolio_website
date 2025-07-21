import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { zoomIn } from "../utils/motion";

const projects = [
  {
    title: "DevNotes",
    description:
      "A markdown-powered note app built for developers with auto-saving, tagging, and dark mode.",
    tech: "React, Tailwind, Firebase",
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
            variants={zoomIn(index * 0.2, 0.6)}
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
            <div className="flex gap-6 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-green-600 hover:underline"
                >
                  <BiLinkExternal className="text-lg" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://emmanuelao.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          // className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          className="inline-block text-blue-600 py-2 px-6 transition"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
};

export default Projects;
