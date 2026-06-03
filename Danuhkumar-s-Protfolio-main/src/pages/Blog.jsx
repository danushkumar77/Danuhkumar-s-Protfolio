import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

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
        <div className="w-full max-w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Technical Blog</h1>
                <p className="mt-4 text-white/50">Sharing my insights on development, AI, and my engineering journey.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-dark-800 p-6 md:p-8 transition-all hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                    >
                        <div>
                            {/* Card Header (Category & Date) */}
                            <div className="flex items-center justify-between">
                                <span className={`rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider ${post.color}`}>
                                    {post.category}
                                </span>
                                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
                                    {post.date}
                                </span>
                            </div>

                            {/* Title & Excerpt */}
                            <h3 className="mt-6 text-2xl font-black text-white group-hover:text-accent-blue transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="mt-4 text-white/50 text-sm leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Card Footer */}
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <span className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-wider">
                                <Clock size={14} className="text-accent-blue" />
                                {post.readTime}
                            </span>
                            <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-blue group-hover:text-white transition-colors">
                                Read Article <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                            </span>
                        </div>
                        
                        {/* Interactive Gradient Background Glow */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
