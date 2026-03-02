import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Award, Zap, Brain, Rocket } from "lucide-react";

const blogContent = {
    "hackathon-experience": {
        title: "My Hackathon Experience 🚀",
        subtitle: "From Finalist to 2nd Runner-Up – Competing Among 150+ Teams",
        date: "Feb 2024",
        content: (
            <div className="space-y-12">
                <section>
                    <p className="text-lg leading-relaxed text-white/70">
                        Participating in hackathons has been one of the most transformative experiences in my engineering journey.
                        These competitions tested not just my technical knowledge, but also my problem-solving ability, teamwork, time management, and resilience under pressure.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Award className="text-accent-blue" />
                        🏆 24-Hour Hackathon – 2nd Runner-Up (₹6000 Cash Prize)
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                            <span className="flex items-center gap-2 text-sm text-white/50">
                                <MapPin size={16} /> Amrita Vishwa Vidyapeetham, Chennai
                            </span>
                            <a href="https://tantrotsav.amrita.edu/events/6983040f5e25551162272b83" target="_blank" rel="noreferrer" className="text-xs font-bold text-accent-blue hover:underline">
                                View Event Details
                            </a>
                        </div>
                        <p className="text-white/60">This was a 24-hour national-level hackathon where more than 45+ teams were selected for the final round.</p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl bg-accent-blue/10 p-4 border border-accent-blue/20">
                                <h4 className="text-sm font-bold text-accent-blue uppercase tracking-wider mb-2">Achievement</h4>
                                <p className="text-white/80 font-medium">🥈 Secured 2nd Runner-Up</p>
                                <p className="text-white/80 font-medium">💰 Won ₹6000 Cash Prize</p>
                            </div>
                            <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Focus Areas</h4>
                                <ul className="text-xs text-white/60 space-y-1 list-disc list-inside">
                                    <li>Continuous 24h intensity</li>
                                    <li>Scalability & Innovation</li>
                                    <li>Ready Prototype</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Brain className="text-accent-purple" />
                        🧠 10-Hour AI Hackathon – Top 10 Finalist
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                        <span className="flex items-center gap-2 text-sm text-white/50">
                            <MapPin size={16} /> PES University, Bengaluru
                        </span>
                        <p className="text-white/60">Competitive AI-based hackathon with 150+ participating teams.</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs text-accent-purple font-bold">Top 30 Selection</span>
                            <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs text-accent-blue font-bold">Top 10 Finalist</span>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Zap className="text-yellow-500" />
                        🤖 Gen AI Hackathon – Sri Eshwar College
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                        <span className="flex items-center gap-2 text-sm text-white/50">
                            <MapPin size={16} /> Sri Eshwar College of Engineering
                        </span>
                        <p className="text-white/60">Centered around Generative AI solutions, prompt engineering, and intelligent automation.</p>
                    </div>
                </section>
            </div>
        )
    },
    "full-stack-react-scratch": {
        title: "Building a Full Stack React Application from Scratch",
        subtitle: "A technical breakdown of component architecture, state management, and backend synchronization.",
        date: "Jan 2024",
        content: (
            <div className="space-y-10">
                <p className="text-lg text-white/70 italic border-l-4 border-accent-blue pl-6">
                    "This breakdown is based on my experience building the MERN Bookstore, Fresh Mart, and the Teacher-Student Management System."
                </p>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Project Case Studies</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-accent-blue">MERN Bookstore</h3>
                            <p className="text-sm text-white/50 mt-2">Focused on secure checkout and dynamic catalog management.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-accent-purple">Fresh Mart</h3>
                            <p className="text-sm text-white/50 mt-2">Inventory tracking and real-world retail workflow simulation.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-xl font-bold">Key Technical Explorations:</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 h-5 w-5 rounded bg-accent-blue/20 flex items-center justify-center shrink-0">
                                <Zap size={14} className="text-accent-blue" />
                            </div>
                            <div>
                                <h4 className="font-bold">Designing REST APIs</h4>
                                <p className="text-sm text-white/50">Implementing scalable endpoints with robust validation for applications like the Teacher-Student system.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 h-5 w-5 rounded bg-accent-purple/20 flex items-center justify-center shrink-0">
                                <Brain size={14} className="text-accent-purple" />
                            </div>
                            <div>
                                <h4 className="font-bold">Authentication in MERN Stack</h4>
                                <p className="text-sm text-white/50">Deep dive into role-based authentication (Teacher/Student) and secure data handling.</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        )
    },
    "big-o-beginners": {
        title: "Understanding Big-O Notation for Beginners",
        subtitle: "DSA & Problem Solving Journal – My Strategy to Crack Technical Placements.",
        date: "Dec 2023",
        content: (
            <div className="space-y-10">
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">The Placement Strategy</h2>
                    <p className="text-white/70">To attract top recruiters, it's vital to show not just the ability to write code, but to optimize it. Here's how I practice DSA daily:</p>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-5 rounded-2xl border border-dashed border-white/20">
                            <h4 className="font-bold flex items-center gap-2 mb-3">
                                <Rocket size={18} className="text-accent-blue" />
                                LeetCode Strategy
                            </h4>
                            <p className="text-xs text-white/40">Solving 1-2 medium problems daily focusing on patterns like Two Pointers and Sliding Window.</p>
                        </div>
                        <div className="p-5 rounded-2xl border border-dashed border-white/20">
                            <h4 className="font-bold flex items-center gap-2 mb-3">
                                <Brain size={18} className="text-accent-purple" />
                                Dynamic Programming
                            </h4>
                            <p className="text-xs text-white/40">Breaking down overlapping subproblems to simplify complex logic.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-xl font-bold">Practical Comparisons:</h3>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="p-4 font-bold">Comparison</th>
                                    <th className="p-4 font-bold text-accent-blue">Arrays</th>
                                    <th className="p-4 font-bold text-accent-purple">Linked List</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-white/60">
                                <tr>
                                    <td className="p-4">Access Time</td>
                                    <td className="p-4 font-mono">O(1)</td>
                                    <td className="p-4 font-mono">O(n)</td>
                                </tr>
                                <tr>
                                    <td className="p-4">Insertion</td>
                                    <td className="p-4 font-mono">O(n)</td>
                                    <td className="p-4 font-mono">O(1)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    },
    "connecting-frontend-backend": {
        title: "Connecting React Frontend with Node.js Backend",
        subtitle: "A practical guide to full stack integration systems.",
        date: "Dec 2023",
        content: (
            <div className="space-y-8">
                <p className="text-lg text-white/70">A deep dive into REST API integration and secure communication between client and server, based on my Vehicle Tracker and Bookstore implementations.</p>
                <ul className="space-y-4">
                    <li className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="font-bold text-accent-blue">REST API Design</h4>
                        <p className="text-sm text-white/50">Designing scalable endpoints with proper HTTP methods and status codes.</p>
                    </li>
                    <li className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className="font-bold text-accent-purple">State Syncing</h4>
                        <p className="text-sm text-white/50">Using React Hooks and Axios to manage async data fetching and error states.</p>
                    </li>
                </ul>
            </div>
        )
    }
};

export default function BlogDetail() {
    const { slug } = useParams();
    const post = blogContent[slug];

    if (!post) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold">Post Not Found</h1>
                <Link to="/blog" className="mt-6 inline-block text-accent-blue">Return to Blog</Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
        >
            <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
                <ArrowLeft size={14} /> Back to Blog
            </Link>

            <header className="mb-12">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent-blue mb-4">
                    <span>Hackathons</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="text-white/30">{post.date}</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{post.title}</h1>
                <p className="mt-4 text-xl text-white/50">{post.subtitle}</p>
            </header>

            <div className="prose prose-invert max-w-none">
                {post.content}
            </div>
        </motion.div>
    );
}
