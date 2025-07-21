import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// import { SiCodingninjas } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center text-white bg-gradient-to-br from-blue-900 via-gray-900 to-black animate-gradient-x bg-[length:300%_300%] backdrop-blur-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Spinning Logo or Text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center gap-2"
          >
            {/* <SiCodingninjas className="text-9xl  animate-spinSlow" /> */}
            <FaCode className="text-9xl  animate-spinSlow" />
            <span className="text-xl font-semibold tracking-wider text-white/90">
              {/* Emmanuel AO */}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
