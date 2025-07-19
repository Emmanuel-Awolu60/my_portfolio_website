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
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Left Image (shows first on mobile) */}
        <div className="flex-shrink-0">
          <img
            src="/img/eaopic.jpg"
            alt="Emmanuel Awolu"
            className="rounded-xl w-[280px] md:w-[360px] object-cover shadow-lg"
            onError={(e) => (e.currentTarget.src = "/img/fallback.jpg")}
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-left space-y-6">
          <h2 className="text-lg text-indigo-600 font-semibold tracking-wide">
            Who am I?
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            I'm Emmanuel AO, a web developer and visual tech writer.
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            As a full-stack developer, I have a strong interest in developing
            user interfaces that are both intuitive and efficient. I turn
            concepts into smooth digital experiences by balancing front-end
            inventiveness with back-end accuracy. My focus is on delivering
            functionality and innovation, ensuring every project is responsive,
            engaging, and flawless.
          </p>

          <a
            href="/Emmanuel-Awolu-Resume.pdf"
            download
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
