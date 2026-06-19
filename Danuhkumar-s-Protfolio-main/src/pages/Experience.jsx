import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Experience() {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const internships = [
        {
            role: "Modern Full Stack Developer Intern",
            company: "Calloc Technologies Pvt. Ltd., Bangalore",
            duration: "June 2026",
            desc: "Completed a Modern Full Stack Development Internship at Calloc Technologies Pvt. Ltd., Bangalore, where I gained hands-on experience in building and maintaining modern web applications. This internship provided valuable exposure to both frontend and backend development, enabling me to understand the complete software development lifecycle from design to deployment. Collaborated on development tasks, learned industry-standard coding practices, and enhanced my understanding of full-stack architecture, user experience, and application performance optimization.",
            highlights: [
                "Developed responsive and user-friendly web interfaces.",
                "Worked on frontend and backend application development.",
                "Integrated APIs and managed data flow between systems.",
                "Participated in debugging, testing, and application optimization.",
                "Used Git and GitHub for version control and collaborative development.",
                "Gained exposure to real-world software development workflows and industry practices."
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"]
        },
        {
            role: "MERN Stack Development Intern",
            company: "AlgoTutor Academy",
            duration: "December 2025",
            desc: "Successfully completed a MERN Stack Development Internship at AlgoTutor Academy, where I gained practical experience in developing modern full-stack web applications using the MERN technology stack. Throughout the internship, I worked with MongoDB, Express.js, React.js, and Node.js to build responsive, scalable, and user-friendly applications. Learned how to design dynamic web interfaces, create RESTful APIs, manage databases, and implement efficient client-server communication.",
            highlights: [
                "Developed full-stack web applications using the MERN stack.",
                "Built responsive and interactive user interfaces with React.js.",
                "Created and integrated RESTful APIs using Express.js and Node.js.",
                "Managed application data and database operations with MongoDB.",
                "Improved problem-solving, debugging, and software development skills.",
                "Worked with Git and GitHub for version control and project management."
            ],
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub"]
        }
    ];

    return (
        <div className="w-full max-w-full">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Experience</h1>
                <p className="mt-4 text-white/50 font-medium">My professional journey and industry internships.</p>
            </motion.div>

            {/* Experience Cards */}
            <div className="grid gap-6 md:grid-cols-2 w-full">
                {internships.map((exp, idx) => (
                    <motion.div
                        key={exp.role}
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-accent-blue/30 hover:bg-white/[0.08] transition-all duration-300"
                    >
                        {/* Glow sweeping border container */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                            <div className="glow-border" />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/5 pb-4 mb-6 relative z-10">
                            <div>
                                <h3 className="text-2xl font-black text-white group-hover:text-accent-blue transition-colors leading-tight">{exp.role}</h3>
                                <p className="text-sm font-semibold text-accent-blue mt-1">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-white/40 md:text-right shrink-0">
                                <Calendar size={14} className="text-accent-blue" />
                                <span>{exp.duration}</span>
                            </div>
                        </div>

                        <p className="text-sm text-white/60 leading-relaxed font-medium mb-6 relative z-10">
                            {exp.desc}
                        </p>

                        <div className="mb-6 relative z-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#A38350] mb-3">Key Highlights</h4>
                            <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                            {exp.tech.map(t => (
                                <span key={t} className="rounded-lg bg-accent-purple/10 border border-accent-purple/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-accent-purple">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
