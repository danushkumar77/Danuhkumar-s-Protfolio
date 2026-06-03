import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Blog from "./Blog";
import CV from "./CV";
import Contact from "./Contact";

export default function Portfolio() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            // Scroll to top if landing on /
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const sectionId = path.substring(1); // 'about', 'projects', etc.
            const element = document.getElementById(sectionId);
            if (element) {
                // Wait briefly to ensure elements are mounted/positioned correctly
                const timer = setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 150);
                return () => clearTimeout(timer);
            }
        }
    }, [location.pathname]);

    return (
        <div className="flex flex-col gap-32">
            <section id="home" className="scroll-mt-32">
                <Home />
            </section>
            
            <section id="about" className="scroll-mt-32">
                <About />
            </section>
            
            <section id="projects" className="scroll-mt-32">
                <Projects />
            </section>
            
            <section id="certificates" className="scroll-mt-32">
                <Certificates />
            </section>
            
            <section id="blog" className="scroll-mt-32">
                <Blog />
            </section>
            
            <section id="cv" className="scroll-mt-32">
                <CV />
            </section>
            
            <section id="contact" className="scroll-mt-32">
                <Contact />
            </section>
        </div>
    );
}
