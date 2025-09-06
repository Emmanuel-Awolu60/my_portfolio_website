import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer comprehensive full-stack web development services including modern frontend development with React, Next.js, and TypeScript, backend APIs with Node.js and Express, database design and optimization, cloud deployment on AWS/Vercel, performance optimization, and SEO implementation. I focus on creating scalable, maintainable applications that drive real business value.",
    category: "Services",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity and scope. Simple landing pages typically take 1-2 weeks, full-stack applications range from 3-8 weeks, and enterprise-level projects may take 2-4 months. I provide detailed timelines during our initial consultation and maintain transparent communication throughout the development process.",
    category: "Timeline",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, I provide comprehensive post-launch support including bug fixes, security updates, performance monitoring, feature additions, and technical consultation. I offer flexible support packages ranging from monthly retainers to one-time sessions based on your needs.",
    category: "Support",
  },
  {
    question: "Can you work with existing code or legacy projects?",
    answer:
      "Absolutely! I specialize in code audits, legacy system modernization, performance optimization, and feature additions to existing applications. Whether you need to migrate from older technologies, improve performance, or add new functionality, I can help transform your existing codebase.",
    category: "Development",
  },
  {
    question: "How do you structure your pricing?",
    answer:
      "I offer flexible pricing models to suit different project needs: fixed-rate quotes for well-defined projects, hourly rates for ongoing development or consultations, and milestone-based pricing for larger projects. All pricing is transparent with no hidden fees, and I provide detailed estimates upfront.",
    category: "Pricing",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core tech stack includes React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, AWS, and modern CSS frameworks like Tailwind. I stay current with industry trends and can adapt to project-specific requirements while recommending the best technologies for your specific use case.",
    category: "Technology",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes, I work with clients globally through remote collaboration. I use modern project management tools, maintain clear communication channels, and schedule regular check-ins to ensure seamless project delivery regardless of timezone differences.",
    category: "Collaboration",
  },
  {
    question: "Can you help with website performance and SEO?",
    answer:
      "Definitely! I implement comprehensive performance optimization including code splitting, image optimization, caching strategies, and Core Web Vitals improvements. For SEO, I handle technical SEO implementation, meta optimization, structured data, and performance-based ranking factors.",
    category: "Optimization",
  },
];

const categories = [
  "All",
  "Services",
  "Timeline",
  "Development",
  "Pricing",
  "Technology",
  "Support",
  "Collaboration",
  "Optimization",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = faqs.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-40 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            FAQ
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about working with me. Can't find what
            you're looking for? Feel free to reach out!
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Close any open FAQ when switching categories
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center group"
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm here to help! Reach out and let's discuss your project in
              detail.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group"
            >
              <span>Get In Touch</span>
              <motion.svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
