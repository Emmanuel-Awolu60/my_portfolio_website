import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Background SVG Blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] z-0 opacity-20">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="#6366f1"
            d="M37.3,-66.2C48.9,-58.7,58.9,-48.5,65.4,-36.4C71.9,-24.3,74.9,-10.1,72.8,2.7C70.6,15.5,63.4,27,55.1,39.7C46.8,52.3,37.5,66.2,24.9,70.8C12.3,75.4,-3.6,70.7,-17.4,64C-31.2,57.3,-42.8,48.6,-52.4,37.1C-62.1,25.5,-69.7,11.2,-71.3,-4C-72.9,-19.2,-68.4,-35.4,-57.9,-44.2C-47.4,-53,-30.8,-54.5,-16.1,-60.4C-1.3,-66.3,11.5,-76.6,24.5,-76.5C37.4,-76.5,49.7,-66.1,37.3,-66.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-lg text-indigo-600 font-semibold tracking-wide mb-4">
          Who am I?
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          I'm Emmanuel AO — a Full-Stack Web Developer and Visual Tech Writer.
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
          I craft clean, responsive, and functional websites by bridging the gap
          between design and code. My strength lies in building scalable
          front-end interfaces and robust back-end systems. Whether it’s a
          landing page, a full-stack app, or a technical blog, I focus on
          clarity, performance, and real-world usability.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-10 leading-relaxed">
          With every project, I aim to bring ideas to life through precise
          execution and elegant code. I'm currently open to freelance and
          collaboration opportunities.
        </p>

        <a
          href="/Emmanuel-Awolu-Resume.pdf"
          download
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
