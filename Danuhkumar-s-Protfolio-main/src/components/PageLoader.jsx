import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fade out after exactly 1.5 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 1500);

    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Framer motion path drawing configuration
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center">
            {/* SVG Logo Container */}
            <motion.svg
              width="160"
              height="160"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              {/* Outer Diamond */}
              <motion.path
                d="M 100,15 L 185,100 L 100,185 L 15,100 Z"
                stroke="#D4AF37"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />

              {/* Letter 'D' */}
              <motion.path
                d="M 60,65 L 60,135 M 60,65 C 85,65 100,80 100,100 C 100,120 85,135 60,135"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 }}
              />

              {/* Letter 'K' */}
              <motion.path
                d="M 115,65 L 115,135 M 115,100 L 140,65 M 115,100 L 140,135"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              />
            </motion.svg>

            {/* Glowing Golden Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-center select-none"
            >
              <h2 className="font-outfit text-sm tracking-[0.3em] text-[#D4AF37] uppercase font-semibold">
                Danushkumar DK
              </h2>
              <p className="font-inter text-[10px] tracking-[0.2em] text-[#A38350] uppercase mt-1">
                Portfolio
              </p>
            </motion.div>

            {/* Glowing Progress Bar */}
            <div className="mt-8 w-40 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
