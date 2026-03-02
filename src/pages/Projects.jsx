import { motion } from "framer-motion";
import { Github, ExternalLink, Rocket } from "lucide-react";

const projects = [
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
        github: "https://github.com/danushkumar77",
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
        title: "Bookstore – MERN Stack Application",
        description: "A modern bookstore web application built using the MERN stack.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        features: [
            "User registration & login",
            "Book catalog management",
            "Add to cart & checkout",
            "Admin dashboard"
        ],
        github: "https://github.com/danushkumar77",
        demo: "#"
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

export default function Projects() {
    return (
        <div className="mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
                <p className="mt-4 text-white/50">Full Stack Applications, Machine Learning, and Interactive Web Systems.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-accent-blue/30 hover:bg-white/[0.08]"
                    >
                        <div className="flex flex-1 flex-col p-8">
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-accent-blue">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white/40 hover:text-white transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-white/50">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="rounded-md bg-accent-blue/5 border border-accent-blue/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-blue/80">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-white/40">
                                            <div className="h-1 w-1 rounded-full bg-accent-blue" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 rounded-3xl border border-dashed border-white/10 p-12 text-center"
            >
                <Rocket className="mx-auto mb-4 h-12 w-12 text-accent-blue opacity-50" />
                <h3 className="text-xl font-bold">More Projects Coming Soon</h3>
                <p className="mt-2 text-white/40 italic">I am constantly building and learning new technologies.</p>
            </motion.div>
        </div>
    );
}
