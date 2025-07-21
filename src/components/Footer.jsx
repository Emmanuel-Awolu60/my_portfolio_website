import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mt-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0f0f0f]/80 backdrop-blur-lg py-8 px-4 sm:px-6 md:px-10 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-5">
          {/* Copyright */}
          <p className="text-gray-400 text-sm sm:text-base px-4 sm:px-0">
            &copy; {new Date().getFullYear()} Emmanuel Awolu. All rights
            reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="mt-2 text-sm sm:text-base text-blue-500 hover:underline transition"
          >
            Back to Top ↑
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
