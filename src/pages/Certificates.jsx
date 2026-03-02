import { motion } from "framer-motion";
import { Award, Calendar, BookOpen, Layers, Target } from "lucide-react";

const certificateCategories = [
    {
        title: "Programming & Core Computer Science",
        icon: <BookOpen className="text-accent-blue" size={20} />,
        certificates: [
            {
                name: "Mastering Data Structures & Algorithms using C and C++",
                issuer: "Udemy (Abdul Bari)",
                description: "A 76-hour in-depth certification focusing on foundational software engineering concepts and complex algorithm design.",
                tags: ["DSA", "C++", "C"]
            },
            {
                name: "Programming Python Masterclass",
                issuer: "Udemy (Makeintern)",
                description: "A technical certification covering Python language proficiency and advanced scripting.",
                tags: ["Python", "Scripting"]
            },
            {
                name: "C Training Certificate",
                issuer: "IIT Bombay (Spoken Tutorial)",
                description: "Formal training completed at Sri Eshwar College of Engineering with a score of 72.50%.",
                tags: ["C", "IIT Bombay"]
            },
            {
                name: "Cpp (C++) Training Certificate",
                issuer: "IIT Bombay (Spoken Tutorial)",
                description: "Technical proficiency in C++ with a score of 65.00%.",
                tags: ["C++", "IIT Bombay"]
            },
            {
                name: "Oracle Java Learning Explorer",
                issuer: "Oracle University",
                description: "Foundational badge recognizing the completion of entry-level Java programming modules.",
                tags: ["Java", "Oracle"]
            }
        ]
    },
    {
        title: "Cloud, AI, & Database Management",
        icon: <Layers className="text-accent-purple" size={20} />,
        certificates: [
            {
                name: "SQL (Intermediate)",
                issuer: "HackerRank",
                description: "Validating the ability to perform complex database queries and data manipulation.",
                tags: ["SQL", "Databases"]
            },
            {
                name: "Cloud Computing: Core Concepts",
                issuer: "LinkedIn Learning",
                description: "Establishes foundational knowledge in cloud architecture and essential services.",
                tags: ["Cloud", "SaaS"]
            },
            {
                name: "Innovating with Google Cloud AI",
                issuer: "Simplilearn (Google Cloud)",
                description: "Focused on utilizing AI and ML tools within the Google Cloud platform.",
                tags: ["AI", "Google Cloud"]
            },
            {
                name: "CIT Gen AI Certificate",
                issuer: "Coimbatore Institute of Technology",
                description: "Earned during Technova '26, focusing on generative AI and intelligent automation.",
                tags: ["GenAI", "Technova"]
            }
        ]
    },
    {
        title: "Hackathons & Academic Presentations",
        icon: <Target className="text-green-500" size={20} />,
        certificates: [
            {
                name: "PES University Bangalore Hackathon",
                issuer: "Great Bengaluru Hackathon / Agentathon",
                description: "Participation/Achievement in major coding marathons focusing on Agentic AI and real-world problem-solving.",
                tags: ["Hackathon", "Agentic AI"]
            },
            {
                name: "Amrita Vishwa Vidyapeetham Hackathon",
                issuer: "Anokha Tech Fest / AI-Verse",
                description: "Involvement in high-stakes events focusing on Generative AI and educational technology.",
                tags: ["Hackathon", "GenAI"]
            },
            {
                name: "KCT Paper Presentation",
                issuer: "Kumaraguru College of Technology",
                description: "Recognizes research contributions during events like ICAECA 2025 or Yugam 2026.",
                tags: ["Research", "Presentation"]
            },
            {
                name: "KCT Workshop: Digital Twin & GenAI",
                issuer: "Kumaraguru College of Technology",
                description: "Completion of specialized training in Digital Twin for Smart Manufacturing and GenAI Essentials.",
                tags: ["Workshop", "Digital Twin"]
            }
        ]
    }
];

export default function Certificates() {
    return (
        <div className="mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Certifications</h1>
                <p className="mt-4 text-white/50 italic font-medium tracking-wide">Validating technical expertise across software engineering, cloud, and AI.</p>
            </motion.div>

            <div className="space-y-20">
                {certificateCategories.map((category, catIndex) => (
                    <section key={category.title} className="relative">
                        <div className="flex items-center gap-3 mb-10">
                            {category.icon}
                            <h2 className="text-2xl font-bold tracking-tight text-white/90">
                                {category.title}
                            </h2>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {category.certificates.map((cert, certIndex) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIndex * 0.1 + certIndex * 0.05 }}
                                    className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-accent-blue/30 hover:bg-white/[0.07]"
                                >
                                    <div>
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                                                {cert.name}
                                            </h3>
                                            <Award className="text-white/10 group-hover:text-accent-blue/50 transition-all shrink-0 ml-4" size={24} />
                                        </div>
                                        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-accent-blue/80">
                                            {cert.issuer}
                                        </p>
                                        <p className="mt-6 text-sm leading-relaxed text-white/50">
                                            {cert.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {cert.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/30 border border-white/5 bg-white/5 px-2 py-1 rounded-lg">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-32 p-12 rounded-3xl border border-dashed border-white/10 text-center"
            >
                <p className="text-white/30 italic">More certifications appearing as I continue to master new technologies.</p>
            </motion.div>
        </div>
    );
}
