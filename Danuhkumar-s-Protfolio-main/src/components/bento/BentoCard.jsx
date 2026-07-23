import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { useRef } from "react";

export const BentoCard = ({ children, className, colSpan = 1, rowSpan = 1 }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={cn(
                "bento-card group flex flex-col justify-between relative overflow-hidden",
                colSpan === 1 ? "col-span-1" :
                    colSpan === 2 ? "col-span-1 md:col-span-2" :
                        colSpan === 3 ? "col-span-1 md:col-span-3" :
                            "col-span-1 md:col-span-4",
                rowSpan === 2 ? "row-span-2" : "row-span-1",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Dynamic mouse-tracking border glow trail */}
            <div className="glow-border" />

            <div className="relative z-10 h-full w-full">
                {children}
            </div>

            {/* Subtle border glow effect */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_15px_rgba(212,175,55,0.15)] border border-accent-blue/20" />
        </motion.div>
    );
};
