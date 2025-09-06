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

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skills = [
  { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-indigo-500 to-purple-500" },
  { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "MongoDB", level: 82, color: "from-purple-500 to-pink-500" },
  { name: "AWS", level: 78, color: "from-orange-500 to-red-500" },
];

const stats = [
  { number: "3+", label: "Years Experience", icon: "🚀" },
  { number: "50+", label: "Projects Completed", icon: "💼" },
  { number: "20+", label: "Happy Clients", icon: "😊" },
  { number: "100%", label: "Success Rate", icon: "⭐" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] z-0 opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] z-0 opacity-5"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-pink-600 blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg">👋</span>
            Get to know me
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Emmanuel
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Story & Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey as a Developer
              </h3>

              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi there! I'm Emmanuel AO, a passionate{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Full-Stack Web Developer
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Technical Writer
                  </span>{" "}
                  who believes in the power of clean code and exceptional user
                  experiences.
                </p>

                <p>
                  With over 3 years of experience in the tech industry, I
                  specialize in crafting scalable web applications using modern
                  technologies. My journey started with curiosity about how
                  websites work, and it has evolved into a passion for building
                  solutions that solve real-world problems.
                </p>

                <p>
                  I bridge the gap between design and functionality, creating
                  applications that are not just visually appealing but also
                  performant, accessible, and user-friendly. Every line of code
                  I write is aimed at delivering value and creating meaningful
                  digital experiences.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                What Drives Me
              </h4>
              <div className="space-y-3">
                {[
                  "Clean, maintainable code that scales",
                  "User-centered design and accessibility",
                  "Continuous learning and innovation",
                  "Collaborative problem-solving",
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="pt-6">
              <motion.a
                href="/public/eao-cv.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 transform rotate-45 group-hover:translate-x-[250%] transition-all duration-700 ease-in-out" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Skills & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            {/* Stats Grid */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                By the Numbers
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl mb-2 group-hover:animate-bounce">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">💡</div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Fun Fact
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    I started coding by trying to customize my MySpace profile,
                    and now I build full-stack applications. Sometimes the
                    smallest sparks lead to the biggest journeys!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
