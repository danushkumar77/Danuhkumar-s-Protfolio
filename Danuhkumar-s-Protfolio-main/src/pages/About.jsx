import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Award, BookOpen, Layers, Target, Heart, MapPin, Mail, Compass, Sparkles } from "lucide-react";
import { BentoCard } from "../components/bento/BentoCard";

export default function About() {
    // Helper to scroll to section smoothly and update URL path
    const handleScroll = (e, sectionId, path) => {
        const el = document.getElementById(sectionId);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
            window.history.pushState({}, "", path);
        }
    };

    return (
        <div className="w-full max-w-full">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Me</h1>
                <p className="mt-4 text-lg text-white/50 tracking-wide font-medium">Get to know my journey, skills, and aspirations</p>
            </motion.div>

            {/* Layout Grid */}
            <div className="grid gap-8 lg:grid-cols-12">
                
                {/* Left Side: Main Info blocks (Col-8) */}
                <div className="lg:col-span-8 space-y-10">
                    
                    {/* About Me & Journey */}
                    <section className="bento-card relative overflow-hidden p-6 md:p-8 group">
                        <div className="relative z-10 space-y-8">
                            <div>
                                <h2 className="text-2xl font-black mb-4 flex items-center gap-3 text-white">
                                    <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
                                    Who I Am
                                </h2>
                                <p className="text-white/60 leading-relaxed text-base md:text-lg font-medium">
                                    My name is Danushkumar V S, and I am a Computer Science and Engineering student at Sri Eshwar College of Engineering. I am passionate about technology, software development, and building projects that solve real-world problems. I enjoy learning new technologies, exploring innovative ideas, and continuously improving my skills as a developer.
                                </p>
                            </div>

                            <div className="border-t border-white/5 pt-8">
                                <h2 className="text-2xl font-black mb-4 flex items-center gap-3 text-white">
                                    <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
                                    My Journey
                                </h2>
                                <p className="text-white/60 leading-relaxed text-base md:text-lg font-medium">
                                    My interest in technology started during my school days and grew stronger as I began learning programming and web development. Over time, I developed a passion for creating websites, applications, and software solutions. I believe that the best way to learn is by building projects and gaining hands-on experience.
                                </p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 duration-500" />
                        <div className="glow-border" />
                    </section>

                    {/* Education Timeline */}
                    <section className="bento-card relative overflow-hidden p-6 md:p-8 group">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-accent-purple">
                                <span className="h-2.5 w-2.5 rounded-full bg-accent-purple" />
                                Education Timeline
                            </h2>
                            
                            <div className="relative border-l-2 border-white/10 pl-6 ml-3 space-y-10">
                                
                                {/* Sri Eshwar */}
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-accent-purple ring-4 ring-dark-900 border-2 border-white" />
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Bachelor of Engineering (B.E.)</h3>
                                            <p className="text-sm font-black text-accent-purple">Computer Science and Engineering</p>
                                            <p className="text-sm text-white/50 font-medium">Sri Eshwar College of Engineering</p>
                                        </div>
                                        <span className="shrink-0 rounded-full bg-accent-purple/10 border border-accent-purple/20 px-4 py-1 text-xs font-bold text-accent-purple uppercase tracking-widest self-start">
                                            2024 — 2028
                                        </span>
                                    </div>
                                </div>

                                {/* 12th Standard */}
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-white/30 ring-4 ring-dark-900" />
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">Higher Secondary Education (12th Standard)</h3>
                                            <p className="text-sm text-white/50 font-medium">Bharathiyar Matriculation Higher Secondary School</p>
                                        </div>
                                        <span className="shrink-0 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs font-bold text-white/40 uppercase tracking-widest self-start">
                                            Completed
                                        </span>
                                    </div>
                                </div>

                                {/* 10th Standard */}
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-white/30 ring-4 ring-dark-900" />
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">Secondary Education (10th Standard)</h3>
                                            <p className="text-sm text-white/50 font-medium">Bharathiyar Matriculation Higher Secondary School</p>
                                        </div>
                                        <span className="shrink-0 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs font-bold text-white/40 uppercase tracking-widest self-start">
                                            Completed
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="glow-border" />
                    </section>

                    {/* What I Love Doing & Achievements Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        
                        {/* What I Love Doing */}
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6">
                                    <Heart size={20} className="text-red-500" />
                                    What I Love Doing
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Building full-stack web applications",
                                        "Solving real-world problems through technology",
                                        "Participating in hackathons and coding events",
                                        "Learning new tools and frameworks",
                                        "Exploring AI and emerging technologies"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-white/60 font-medium">
                                            <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-purple/30 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6">
                                    <Award size={20} className="text-accent-purple" />
                                    Achievements
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Techathon 2.0 – 2nd Runner-Up (Amrita Chennai)",
                                        "Agentathon – Top 8 Finalist (PES Bangalore)",
                                        "Active participant in technical workshops and coding competitions",
                                        "Completed Abdul Bari's 76-hour DSA masterclass using C/C++"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-white/60 font-medium">
                                            <div className="h-1.5 w-1.5 rounded-full bg-accent-purple mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Career Goal & Personal Note Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Career Goal */}
                        <BentoCard className="p-6 md:p-8 hover:border-accent-purple/30 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                                    <Target size={20} className="text-accent-purple" />
                                    Career Goal
                                </h3>
                                <p className="text-base text-white/60 leading-relaxed font-medium">
                                    My goal is to become a skilled Software Engineer and Full Stack Developer who creates impactful digital solutions. I am always eager to learn, take on new challenges, and contribute to innovative projects.
                                </p>
                            </div>
                        </BentoCard>

                        {/* Personal Note Card */}
                        <BentoCard className="p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-500 bg-yellow-500/[0.01] flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                                    <Sparkles size={20} className="text-yellow-500" />
                                    Personal Note
                                </h3>
                                <p className="text-base text-white/60 leading-relaxed font-medium italic font-serif">
                                    "I believe that growth comes from continuous learning and consistent effort. Every project, challenge, and experience helps me become a better developer and a better problem solver. My journey is just getting started, and I am excited about what lies ahead."
                                </p>
                            </div>
                        </BentoCard>
                    </div>
                </div>

                {/* Right Side: Sidebar card & Goals (Col-4) */}
                <div className="lg:col-span-4 space-y-10 h-fit">
                    
                    {/* Compact Profile Box */}
                    <div className="bento-card overflow-hidden group p-4 bg-white/5 border border-white/10">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="/assets/profile.jpg"
                                alt="Danushkumar VS"
                                className="w-full h-auto object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="mt-6 px-4 pb-4">
                            <h3 className="font-bold text-2xl tracking-tight text-white mb-1">Danushkumar V S</h3>
                            <p className="text-sm text-accent-blue font-bold uppercase tracking-widest mb-6">Full Stack Developer</p>

                            <div className="space-y-4 border-t border-white/5 pt-6">
                                <div className="flex items-center gap-3 text-xs md:text-sm text-white/40 font-medium break-all">
                                    <Mail size={16} className="text-accent-blue shrink-0" />
                                    danushkumar.vs2024cse@sece.ac.in
                                </div>
                                <div className="flex items-center gap-3 text-xs md:text-sm text-white/40 font-medium">
                                    <MapPin size={16} className="text-accent-blue shrink-0" />
                                    Tamil Nadu, India
                                </div>
                            </div>

                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact", "/contact")}
                                className="mt-8 btn-primary w-full py-4 text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 group hover:gap-3 transition-all relative z-10 text-black text-center shadow-md shadow-accent-blue/10"
                            >
                                Let's Chat <Compass size={18} />
                            </a>
                        </div>
                        <div className="glow-border" />
                    </div>
                </div>
            </div>
        </div>
    );
}
