import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const blogPosts = [
    {
        slug: "hackathon-experience",
        title: "My Hackathon Experience 🚀",
        excerpt: "From Finalist to 2nd Runner-Up – Competing Among 150+ Teams. Insights and lessons learned from high-pressure environments.",
        date: "Feb 2024",
        readTime: "6 min read",
        category: "Hackathons",
        color: "text-accent-blue bg-accent-blue/10"
    },
    {
        slug: "full-stack-react-scratch",
        title: "Building a Full Stack React Application from Scratch",
        excerpt: "Detailed breakdown of building MERN Bookstore and Fresh Mart. How I structured my full stack projects for scalability.",
        date: "Jan 2024",
        readTime: "10 min read",
        category: "Full Stack Development",
        color: "text-accent-purple bg-accent-purple/10"
    },
    {
        slug: "big-o-beginners",
        title: "Understanding Big-O Notation for Beginners",
        excerpt: "Breaking down complex algorithmic concepts into simple pieces. My strategy to solve LeetCode problems effectively.",
        date: "Dec 2023",
        readTime: "7 min read",
        category: "DSA & Problem Solving",
        color: "text-yellow-500 bg-yellow-500/10"
    },
    {
        slug: "connecting-frontend-backend",
        title: "Connecting React Frontend with Node.js Backend",
        excerpt: "Practical guide to REST API integration and secure communication between client and server.",
        date: "Dec 2023",
        readTime: "5 min read",
        category: "Full Stack Development",
        color: "text-accent-purple bg-accent-purple/10"
    }
];

export default function Blog() {
    const navigate = useNavigate();

    return (
        <div className="mx-auto max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Technical Blog</h1>
                <p className="mt-4 text-white/50">Sharing my insights on development, AI, and my engineering journey.</p>
            </motion.div>

            <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group grid items-center gap-8 rounded-3xl border border-white/10 bg-dark-800 p-8 transition-colors hover:border-white/20 md:grid-cols-[1fr_2fr]"
                    >
                        <div className="aspect-[4/3] rounded-2xl bg-white/5 transition-transform group-hover:scale-[1.02] flex items-center justify-center overflow-hidden">
                            <BookOpen size={48} className="text-white/10" />
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                                    <span className={`rounded-full px-3 py-1 ${post.color}`}>{post.category}</span>
                                    <span className="text-white/30">{post.date}</span>
                                </div>
                                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-4 text-white/50">{post.excerpt}</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-white/30">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                </div>
                                <button
                                    onClick={() => navigate(`/blog/${post.slug}`)}
                                    className="flex items-center gap-2 text-sm font-bold text-accent-blue group-hover:gap-3 transition-all"
                                >
                                    Read Article <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
