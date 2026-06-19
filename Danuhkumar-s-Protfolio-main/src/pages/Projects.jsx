import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Rocket } from "lucide-react";
const projects = [
    {
        title: "GovSphere – Unified Citizen Services Platform",
        description: "A modern full-stack digital governance platform designed to simplify citizen accessibility to government schemes, streamline local grievance resolutions, and facilitate real-time application processing updates. GovSphere provides role-based dashboards for citizens, verified officers, and system administrators, enabling efficient scheme searches, eligibility assessments, application audits, and citizen-officer dialogues.",
        tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap", "JavaScript"],
        features: [
            "Role-based authentication (Admin, Officer, Citizen)",
            "Citizen profile setup with location and identity verification",
            "Dynamic Scheme Finder with advanced categorization",
            "Automated Scheme Eligibility Checker module",
            "Secure application submission and real-time status tracking",
            "Civil Grievance submission and department-wise routing",
            "Interactive AI-powered chat assistant for service guidelines",
            "Officer portal for auditing and processing files",
            "Admin dashboard with metrics, user management, and broadcast alerts"
        ],
        github: "https://github.com/danushkumar77/GovSphere.git",
        demo: "https://govsphere-services.vercel.app/"
    },
    {
        title: "EduManage – College Management System",
        description: "A modern full-stack college management platform designed to digitize and streamline academic, administrative, and student management processes. EduManage provides role-based dashboards for students, faculty, and administrators, enabling efficient management of attendance, courses, examinations, announcements, and academic records.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
        features: [
            "Role-based authentication (Admin, Faculty, Student)",
            "Student admission and profile management",
            "Attendance tracking and monitoring system",
            "Course, department, and faculty management",
            "Examination and result management module",
            "Announcements and notice board system",
            "Responsive dashboard with analytics and reports",
            "Secure data storage and management"
        ],
        github: "https://github.com/danushkumar77/Edumanage",
        demo: "https://edumanage-fawn.vercel.app/"
    },
    {
        title: "Bookstore – MERN Stack Application",
        description: "A modern bookstore web application built using the MERN stack.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        features: [
            "User registration & login",
            "Book catalog management",
            "Add to cart & checkout",
            "Admin dashboard"
        ],
        github: "https://github.com/danushkumar77/Book-Store-Front_End.git",
        demo: "https://book-store-front-9e8aj28oa-danushkumars-projects-fec3eb81.vercel.app/"
    },
    {
        title: "Fresh Mart – Grocery Platform",
        description: "An online grocery shopping platform with product management and order processing features.",
        tech: ["React.js", "Node.js", "Express", "MongoDB/MySQL"],
        features: [
            "Product listing & filtering",
            "Cart functionality",
            "Order placement system",
            "Backend inventory management"
        ],
        github: "https://github.com/danushkumar77/Fresh-Mart.git",
        demo: "https://freshmart-sigma.vercel.app/"
    },
    {
        title: "InterviewPro AI – Smart Interview Preparation Platform",
        description: "A modern AI-powered interview preparation platform designed to help students and job seekers improve their technical, aptitude, and HR interview skills through mock interviews, quizzes, personalized feedback, and progress tracking.",
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth", "Express.js"],
        features: [
            "AI-powered mock interview practice",
            "Technical, aptitude, and HR question bank",
            "Interactive quiz system with score tracking",
            "Resume analysis and improvement suggestions",
            "Personalized learning dashboard",
            "Progress analytics and performance reports",
            "Role-based authentication (Student/Admin)",
            "Admin dashboard for question management",
            "User performance monitoring and analytics",
            "Fully responsive modern SaaS UI"
        ],
        github: "https://github.com/danushkumar77/InterviewPro-Ai",
        demo: "https://interview-pro-ai-ecru.vercel.app/"
    },
    {
        title: "Teacher–Student Management System",
        description: "A comprehensive web-based academic management system designed to streamline teacher-student interactions and institutional workflows.",
        tech: ["Python", "Django/Flask", "HTML", "CSS", "JavaScript", "MySQL/PostgreSQL"],
        features: [
            "Attendance tracking system",
            "Grade management module",
            "Assignment submission system",
            "Role-based authentication"
        ],
        github: "https://github.com/danushkumar77/ACE_EXAM.git",
        demo: "#"
    },
    {
        title: "FraudGuard – Financial Fraud Detection",
        description: "A real-time financial fraud detection system that identifies suspicious transactions using machine learning algorithms.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        features: [
            "Supervised & unsupervised ML models",
            "Data preprocessing & feature engineering",
            "Anomaly detection",
            "False-positive reduction optimization"
        ],
        github: "https://github.com/danushkumar77",
        demo: "#"
    },
    {
        title: "Campus Map POI Manager",
        description: "An interactive campus mapping system allowing users to explore and manage Points of Interest (POIs).",
        tech: ["JavaScript", "Leaflet.js", "HTML", "CSS", "SQL"],
        features: [
            "Dynamic search & filtering",
            "Category-based POI organization",
            "Map integration with navigation",
            "Responsive UI"
        ],
        github: "https://github.com/danushkumar77",
        demo: "#"
    },
    {
        title: "Vehicle Maintenance & Mileage Tracker",
        description: "A full-stack vehicle management platform that tracks fuel usage, mileage, and maintenance schedules.",
        tech: ["React.js", "Node.js/Express", "MySQL/MongoDB", "REST APIs"],
        features: [
            "Fuel expense tracking",
            "Mileage analytics dashboard",
            "Maintenance reminder system",
            "Service history logs"
        ],
        github: "https://github.com/danushkumar77",
        demo: "#"
    },
    {
        title: "Taxoraatai",
        description: "A web-based financial solution designed to simplify tax tracking and expense management.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB/SQL"],
        features: [
            "Income & expense tracking",
            "Tax calculation module",
            "Financial dashboard visualization",
            "Report generation system"
        ],
        github: "https://github.com/danushkumar77",
        demo: "#"
    },
    {
        title: "Energy Theft & Anomaly Detection",
        description: "An intelligent anomaly detection system designed to identify irregular energy consumption patterns.",
        tech: ["Python", "Scikit-learn", "Pandas", "React.js", "Backend APIs"],
        features: [
            "Smart meter data analysis",
            "Machine learning anomaly detection",
            "Data visualization dashboard",
            "Suspicious usage alert system"
        ],
        github: "https://github.com/danushkumar77",
        demo: "#"
    }
];

// Interactive 3D Perspective Tilt Wrapper Component
function TiltCard({ children, className, onClick }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // subtle rotation constraint for premium feel
    const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

    const handleMouseMove = (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        
        // set relative positions for CSS gold glowing sweeps
        const rx = e.clientX - rect.left;
        const ry = e.clientY - rect.top;
        el.style.setProperty("--mouse-x", `${rx}px`);
        el.style.setProperty("--mouse-y", `${ry}px`);

        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        x.set(mouseX / width);
        y.set(mouseY / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            className={`${className} cursor-pointer`}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
            {children}
        </motion.div>
    );
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className="w-full max-w-full">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
                <p className="mt-4 text-white/50">Full Stack Applications, Machine Learning, and Interactive Web Systems.</p>
            </motion.div>

            {/* Projects Bento Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <TiltCard
                            onClick={() => setActiveProject(project)}
                            className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-accent-blue/30 hover:bg-white/[0.08]"
                        >
                            {/* Glow sweeping border container */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                <div className="glow-border" />
                            </div>

                            <div className="flex flex-1 flex-col p-6 md:p-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
                                <div className="flex items-start justify-between">
                                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-accent-blue">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-white/40 hover:text-white transition-colors"
                                            title="View Github"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-white/50 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <span key={t} className="rounded-md bg-accent-blue/5 border border-accent-blue/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-blue/80">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[10px] font-bold text-white/50">
                                            +{project.tech.length - 4} More
                                        </span>
                                    )}
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-bold text-accent-blue uppercase tracking-wider flex items-center gap-1">
                                        View Specs <span className="text-xs opacity-70 group-hover:translate-x-1 transition-transform inline-block">→</span>
                                    </span>
                                    {project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-4 py-2 rounded-xl bg-accent-blue text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer"
                                        >
                                            <ExternalLink size={12} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            {/* Coming Soon Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-20 rounded-3xl border border-dashed border-white/10 p-12 text-center"
            >
                <Rocket className="mx-auto mb-4 h-12 w-12 text-accent-blue opacity-50" />
                <h3 className="text-xl font-bold">More Projects Coming Soon</h3>
                <p className="mt-2 text-white/40 italic">I am constantly building and learning new technologies.</p>
            </motion.div>

            {/* Expanded Project Details Overlay Modal */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 220 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl overflow-y-auto max-h-[85vh] rounded-3xl border border-white/10 bg-dark-800 p-8 md:p-10 shadow-2xl text-left"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-5 right-5 h-9 w-9 rounded-full bg-dark-600 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
                                aria-label="Close details"
                            >
                                ✕
                            </button>

                            {/* Tag */}
                            <span className="rounded-md bg-accent-blue/10 border border-accent-blue/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-blue inline-block mb-4">
                                Project Specification
                            </span>

                            {/* Title */}
                            <h3 className="text-3xl font-black text-white mb-4 pr-6 leading-tight">
                                {activeProject.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed text-base font-medium mb-6">
                                {activeProject.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mb-6 border-t border-white/10 pt-6">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#A38350] mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.tech.map((t) => (
                                        <span key={t} className="rounded-lg bg-accent-purple/10 border border-accent-purple/20 px-3 py-1.5 text-xs font-semibold text-accent-purple">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-8 border-t border-white/10 pt-6">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#A38350] mb-3">Key Features & Modules</h4>
                                <ul className="space-y-3">
                                    {activeProject.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                                            <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Actions Footer */}
                            <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
                                {activeProject.demo !== "#" && (
                                    <a
                                        href={activeProject.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-primary flex items-center gap-2 text-black px-6 py-3 uppercase tracking-wider text-xs font-bold cursor-pointer"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                                <a
                                    href={activeProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${activeProject.demo !== "#" ? "btn-secondary" : "btn-primary text-black"} flex items-center gap-2 px-6 py-3 uppercase tracking-wider text-xs font-bold cursor-pointer`}
                                >
                                    <Github size={16} /> View Code Base
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
