// src/components/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack web development, including frontend with React and Tailwind, and backend with Node.js, Express, and databases like PostgreSQL or MongoDB.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on scope, but most websites take 1–3 weeks. I prioritize quality and clear communication throughout.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, I provide ongoing maintenance, support, and updates if needed. We can set up a monthly plan or one-time sessions.",
  },
  {
    question: "Can you work with existing code or projects?",
    answer:
      "Absolutely. I can improve or complete existing codebases and modernize older projects.",
  },
  {
    question: "How do you charge for projects?",
    answer:
      "Pricing depends on complexity. I offer fixed-rate quotes for small projects and hourly or milestone-based pricing for larger ones.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2 text-blue-500"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-gray-600 dark:text-gray-300 mt-3"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
