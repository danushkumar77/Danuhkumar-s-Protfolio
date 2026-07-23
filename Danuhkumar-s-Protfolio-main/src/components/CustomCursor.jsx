import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 280, mass: 0.35 };
  const ringSpringConfig = { damping: 35, stiffness: 200, mass: 0.65 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringXSpring = useSpring(ringX, ringSpringConfig);
  const ringYSpring = useSpring(ringY, ringSpringConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 1024px)").matches;
      setIsMobile(mobile);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e) => {
      if (!e.target) return;
      const target = e.target;
      
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".bento-card") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".interactive-hover");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mouseover", handleMouseOver);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* 1. Large trailing glow aura */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full bg-accent-blue/5 blur-xl pointer-events-none"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          scale: isHovered ? 2.2 : 1.4,
          width: 80,
          height: 80,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* 2. Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[#D4AF37]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.6 : 1,
          width: 8,
          height: 8,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* 3. Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border transition-all duration-300"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          scale: isHovered ? 1.9 : 1,
          borderColor: isHovered ? "rgba(212, 175, 55, 0.75)" : "rgba(212, 175, 55, 0.3)",
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.08)" : "rgba(212, 175, 55, 0)",
          width: 32,
          height: 32,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
