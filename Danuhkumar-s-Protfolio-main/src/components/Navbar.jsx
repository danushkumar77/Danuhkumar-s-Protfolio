import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Certificates", path: "/certificates" },
    { name: "Blog", path: "/blog" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
];

export function Navbar({ theme, toggleTheme }) {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isLandingPage = !location.pathname.startsWith("/blog/") && location.pathname !== "/resume";

    useEffect(() => {
        const handleScrollState = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScrollState);
        return () => window.removeEventListener("scroll", handleScrollState);
    }, []);

    useEffect(() => {
        if (!isLandingPage) return;

        const sectionIds = ["home", "about", "projects", "experience", "certificates", "blog", "cv", "contact"];
        
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -55% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection("home");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isLandingPage, location.pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    // Stagger animation variants for initial load
    const navContainerVariants = {
        hidden: { opacity: 0, y: -25, x: "-50%", filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            x: "-50%",
            filter: "blur(0px)",
            transition: {
                duration: 0.65,
                staggerChildren: 0.04,
                delayChildren: 0.15,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <>
            {/* 1. Desktop Navbar (Centered Pill) */}
            <motion.nav 
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                style={{ originX: 0.5 }}
                className={`hidden lg:block fixed left-1/2 z-50 w-max max-w-[95%] transition-all duration-500 ${
                    scrolled ? "top-3" : "top-6"
                }`}
            >
                <div className={`flex items-center gap-1 sm:gap-2 rounded-full border bg-dark-800/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-x-auto scrollbar-none max-w-full ${
                    scrolled 
                        ? "p-1.5 border-accent-blue/20 bg-black/80 shadow-accent-blue/5" 
                        : "p-2 border-white/10 hover:border-white/20"
                }`}>
                    {navLinks.map((link) => {
                        const linkId = link.name.toLowerCase() === "projects" ? "projects" : link.name.toLowerCase();
                        const isActive = isLandingPage 
                            ? activeSection === linkId 
                            : location.pathname === link.path;

                        return (
                            <motion.div key={link.path} variants={navItemVariants}>
                                <Magnetic strength={0.12}>
                                    <Link
                                        to={link.path}
                                        onClick={(e) => {
                                            if (isLandingPage) {
                                                const element = document.getElementById(linkId);
                                                if (element) {
                                                    e.preventDefault();
                                                    element.scrollIntoView({ behavior: "smooth" });
                                                    window.history.pushState({}, "", link.path);
                                                    setActiveSection(linkId);
                                                }
                                            }
                                        }}
                                        className={`relative px-4 py-2.5 text-xs sm:text-sm font-black transition-all duration-300 shrink-0 block ${
                                            isActive ? "text-accent-blue scale-105" : "text-white/50 hover:text-white hover:scale-105"
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active-line"
                                                className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-blue rounded-full"
                                                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </Link>
                                </Magnetic>
                            </motion.div>
                        );
                    })}

                    <motion.div variants={navItemVariants} className="mx-2 h-6 w-[1px] bg-white/10 shrink-0" />

                    <Magnetic strength={0.15}>
                        <motion.button
                            variants={navItemVariants}
                            onClick={toggleTheme}
                            className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white/50 transition-all hover:bg-white/5 hover:text-white shrink-0 cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </motion.button>
                    </Magnetic>
                </div>
            </motion.nav>

            {/* 2. Mobile/Tablet Top Header (Floating Bar) */}
            <motion.header 
                initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed left-4 right-4 z-40 flex items-center justify-between rounded-full border bg-white/80 dark:bg-dark-800/60 px-6 py-3 backdrop-blur-2xl shadow-lg lg:hidden transition-all duration-500 ${
                    scrolled ? "top-2 border-accent-blue/15 shadow-accent-blue/5" : "top-4 border-black/10 dark:border-white/10"
                }`}
            >
                <span className="font-bold text-sm tracking-wider text-accent-blue font-serif italic">Danushkumar V S</span>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="text-white/50 hover:text-white cursor-pointer transition-colors"
                        aria-label="Toggle theme"
                    >
                        <motion.div
                            key={theme}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.div>
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white/50 hover:text-white cursor-pointer transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.header>

            {/* 3. Aside Drawer & Backdrop Menu for Mobile/Tablet */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop Blur Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        {/* Slide-out Sidebar drawer (aside) */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 350, damping: 35 }}
                            className="fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[80vw] bg-[#070707] border-r border-white/10 p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl lg:hidden"
                        >
                            <div>
                                {/* Drawer Header */}
                                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                    <span className="font-bold text-base tracking-wider text-accent-blue font-serif italic">Danushkumar</span>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white/50 hover:text-white cursor-pointer transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Vertical Navigation Link List */}
                                <div className="flex flex-col gap-2 mt-8">
                                    {navLinks.map((link) => {
                                        const linkId = link.name.toLowerCase() === "projects" ? "projects" : link.name.toLowerCase();
                                        const isActive = isLandingPage 
                                            ? activeSection === linkId 
                                            : location.pathname === link.path;

                                        return (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                onClick={(e) => {
                                                    setIsMenuOpen(false);
                                                    if (isLandingPage) {
                                                        const element = document.getElementById(linkId);
                                                        if (element) {
                                                            e.preventDefault();
                                                            element.scrollIntoView({ behavior: "smooth" });
                                                            window.history.pushState({}, "", link.path);
                                                            setActiveSection(linkId);
                                                        }
                                                    }
                                                }}
                                                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-base font-bold transition-all duration-200 ${
                                                    isActive 
                                                        ? "bg-accent-blue/15 text-accent-blue" 
                                                        : "text-white/60 hover:text-white hover:bg-white/5"
                                                }`}
                                            >
                                                <span>{link.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Drawer Footer */}
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-xs text-white/30 text-center font-medium">Danushkumar VS © {new Date().getFullYear()}</p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
