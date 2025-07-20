// src/utils/motion/FadeInZoom.jsx
import { motion } from "framer-motion";

const fadeInZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const FadeInZoom = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={fadeInZoom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
