import { motion } from "framer-motion";

export const FadeInStagger = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.15 }}
    variants={{
      hidden: {},
      visible: {},
    }}
  >
    {children}
  </motion.div>
);
