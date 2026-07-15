import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Search, X } from "lucide-react";

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
    }
];

const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

export default function Blog() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = 
            selectedCategory === "All" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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

            {/* Search and Filters */}
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between max-w-5xl mx-auto">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-10 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all shadow-inner"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2.5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 border uppercase tracking-wider ${
                                selectedCategory === cat
                                    ? "bg-accent-blue/15 border-accent-blue/40 text-accent-blue shadow-lg shadow-accent-blue/5"
                                    : "bg-white/5 border-white/10 hover:border-white/20 text-white/50 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {filteredPosts.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 rounded-3xl border border-white/5 bg-white/[0.01] max-w-xl mx-auto"
                >
                    <p className="text-white/40 text-base font-semibold">No articles found matching your criteria.</p>
                    <button
                        onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                        className="mt-4 text-xs font-black uppercase tracking-wider text-accent-blue hover:underline"
                    >
                        Clear Filters
                    </button>
                </motion.div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                layout
                                key={post.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
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
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
