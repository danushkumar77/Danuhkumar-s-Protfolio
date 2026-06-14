import { useState, useEffect } from "react";
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ChevronUp, ChevronDown } from "lucide-react";
import { Navbar } from "./Navbar";


export default function Layout({ children, theme, toggleTheme }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Sync URL to home
        window.history.pushState({}, "", "/");
    };

    const handleScrollStep = (direction) => {
        const sections = ["home", "about", "projects", "certificates", "blog", "cv", "contact"];
        const scrollPos = window.scrollY;
        const offset = 140; // To account for the floating navbar scroll offset (scroll-mt-32 is 8rem = 128px)
        
        // Find section absolute heights on the page
        const items = sections.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return { id, top: rect.top + window.scrollY - offset };
        }).filter(Boolean);

        if (direction === "down") {
            // Find the first section that starts below current scroll position (with a small buffer)
            const next = items.find(item => item.top > scrollPos + 20);
            if (next) {
                window.scrollTo({ top: next.top, behavior: "smooth" });
                window.history.pushState({}, "", `/${next.id === "home" ? "" : next.id}`);
            }
        } else {
            // Find the last section that starts above current scroll position (with a small buffer)
            const prev = [...items].reverse().find(item => item.top < scrollPos - 20);
            if (prev) {
                window.scrollTo({ top: prev.top, behavior: "smooth" });
                window.history.pushState({}, "", `/${prev.id === "home" ? "" : prev.id}`);
            }
        }
    };

    return (
        <div className="min-h-screen bg-dark-900 transition-colors duration-300">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue z-50 origin-[0%]"
                style={{ scaleX }}
            />

            <Navbar theme={theme} toggleTheme={toggleTheme} />
            
            <main className="w-full max-w-full px-4 pb-20 pt-32 md:px-8 lg:px-12">
                {children}
            </main>

            {/* Background glow effects & cyber-grid pattern */}
            <div className={`fixed inset-0 -z-50 overflow-hidden transition-all duration-500 ${theme === 'light' ? 'cyber-grid-light' : 'cyber-grid'}`}>
                <div className="absolute top-[5%] left-[5%] h-[650px] w-[650px] rounded-full bg-accent-blue/10 blur-[130px] pointer-events-none animate-float-1" />
                <div className="absolute bottom-[10%] right-[5%] h-[550px] w-[550px] rounded-full bg-accent-purple/10 blur-[110px] pointer-events-none animate-float-2" />
                <div className="absolute top-[35%] right-[20%] h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none animate-float-1" />
            </div>

            {/* Scroll to Top Button - Desktop Only */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        onClick={scrollToTop}
                        className="hidden lg:flex fixed bottom-8 right-8 z-40 h-14 w-14 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-dark-800/80 text-accent-blue backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl hover:text-white cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Mobile/Tablet Floating Scroll Controls */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 lg:hidden">
                <button
                    onClick={() => handleScrollStep("up")}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-dark-800/80 text-accent-blue backdrop-blur-md shadow-lg active:scale-95 cursor-pointer hover:text-accent-purple transition-colors"
                    aria-label="Scroll up"
                >
                    <ChevronUp size={24} />
                </button>
                <button
                    onClick={() => handleScrollStep("down")}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-dark-800/80 text-accent-blue backdrop-blur-md shadow-lg active:scale-95 cursor-pointer hover:text-accent-purple transition-colors"
                    aria-label="Scroll down"
                >
                    <ChevronDown size={24} />
                </button>
            </div>

            <footer className="border-t border-white/5 py-12">
                <div className="container mx-auto px-4 text-center text-sm text-white/30">
                    <p>© {new Date().getFullYear()} Danushkumar VS. Built with passion & precision.</p>
                </div>
            </footer>
        </div>
    );
}
