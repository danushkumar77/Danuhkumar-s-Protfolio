import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children, strength = 0.3 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate magnetic displacement
        const x = (clientX - centerX) * strength;
        const y = (clientY - centerY) * strength;
        
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.2 }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}
