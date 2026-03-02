import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Blog", path: "/blog" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
];

export function Navbar({ theme, toggleTheme }) {
    const location = useLocation();

    return (
        <nav className="fixed top-8 left-1/2 z-50 -translate-x-1/2">
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-dark-800/50 p-4 backdrop-blur-2xl transition-all hover:border-white/20 shadow-2xl">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative rounded-full px-8 py-3 text-xl font-black transition-all duration-300 ${isActive ? "text-white scale-110" : "text-white/50 hover:text-white hover:scale-110"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-active"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </Link>
                    );
                })}

                <div className="mx-4 h-8 w-[2px] bg-white/10" />

                <button
                    onClick={toggleTheme}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full text-white/50 transition-all hover:bg-white/5 hover:text-white"
                    aria-label="Toggle theme"
                >
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        {theme === "dark" ? <Sun size={28} /> : <Moon size={28} />}
                    </motion.div>
                </button>
            </div>
        </nav>
    );
}
