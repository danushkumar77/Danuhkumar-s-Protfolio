import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, GraduationCap, MapPin, ExternalLink, Mail, Award, BookOpen, Layers, Target } from "lucide-react";

export default function About() {
    return (
        <div className="mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Me</h1>
                <p className="mt-4 text-lg text-white/50 tracking-wide font-medium">Full Stack Developer & Problem Solver</p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12">
                {/* Main Content Info */}
                <div className="lg:col-span-8 space-y-12">
                    <section className="bento-card relative overflow-hidden p-8 group">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-accent-blue" />
                                The Journey
                            </h2>
                            <div className="space-y-4 text-white/60 leading-relaxed text-lg font-medium">
                                <p>
                                    I am a dedicated Full Stack Developer with a passion for building robust and scalable web applications.
                                    My technical journey is fueled by a commitment to mastering modern technologies and applying them
                                    to solve real-world problems.
                                </p>
                                <p>
                                    Currently pursuing my computer science degree, I have honed my skills in the MERN stack (MongoDB,
                                    Express.js, React, Node.js) and other relevant tools like Python, Tailwind CSS, and Framer Motion.
                                    My focus is always on creating efficient code that provides exceptional user experiences.
                                </p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="glow-border" />
                    </section>

                    <section className="bento-card relative overflow-hidden p-8 group">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-accent-purple">
                                <span className="h-2 w-2 rounded-full bg-accent-purple" />
                                Education
                            </h2>
                            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 hover:border-accent-purple/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in CSE</h3>
                                        <p className="text-lg text-accent-purple font-bold tracking-wide">Sri Eshwar College of Engineering</p>
                                    </div>
                                    <div className="shrink-0 flex items-center gap-2 rounded-full bg-accent-purple/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-purple border border-accent-purple/20">
                                        2024 — 2028
                                    </div>
                                </div>
                                <div className="mt-8 grid gap-4 md:grid-cols-2">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-xs text-white/30 uppercase font-bold tracking-widest mb-1">Focus Areas</p>
                                        <p className="text-sm text-white/70">Full Stack Development, AI/ML, Data Structures</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-xs text-white/30 uppercase font-bold tracking-widest mb-1">Location</p>
                                        <p className="text-sm text-white/70 font-medium flex items-center gap-2">
                                            <MapPin size={14} className="text-accent-purple" /> Coimbatore, TN
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glow-border" />
                    </section>
                </div>

                {/* Sidebar Sticky Profile */}
                <div className="lg:col-span-4 h-fit">
                    <div className="bento-card sticky top-32 overflow-hidden group p-4 bg-white/5 border border-white/10">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="/assets/profile.jpg"
                                alt="Profile"
                                className="w-full h-auto object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="mt-8 px-4 pb-4">
                            <h3 className="font-bold text-2xl tracking-tight text-white mb-1">Danushkumar VS</h3>
                            <p className="text-sm text-accent-blue font-bold uppercase tracking-widest mb-6">Full Stack Developer</p>

                            <div className="space-y-4 border-t border-white/5 pt-6">
                                <div className="flex items-center gap-3 text-sm text-white/40 font-medium">
                                    <Mail size={16} className="text-accent-blue" />
                                    danushkumar.vs2024cse@sece.ac.in
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/40 font-medium">
                                    <MapPin size={16} className="text-accent-blue" />
                                    Tamil Nadu, India
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className="mt-8 btn-primary w-full py-4 text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all relative z-10"
                            >
                                Hire Me <Target size={18} />
                            </Link>
                        </div>
                        <div className="glow-border" />
                    </div>
                </div>
            </div>
        </div>
    );
}
