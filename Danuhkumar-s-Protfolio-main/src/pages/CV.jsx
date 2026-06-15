import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
    Download, 
    Mail, 
    MapPin, 
    Github, 
    Linkedin, 
    GraduationCap, 
    Target, 
    Briefcase, 
    Award, 
    Code2, 
    Terminal, 
    Compass, 
    Sparkles, 
    BookOpen, 
    Layers, 
    CheckCircle2, 
    Clock, 
    ArrowRight
} from "lucide-react";
import { BentoCard } from "../components/bento/BentoCard";

export default function CV() {
    // Helper to scroll to section smoothly and update URL path
    const handleScroll = (e, sectionId, path) => {
        const el = document.getElementById(sectionId);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
            window.history.pushState({}, "", path);
        }
    };

    const driveResumeUrl = "https://drive.google.com/file/d/1mmZeYl29hOLAMNJ6Lmeuu1X-F4FnmqQ8/view?usp=sharing";

    // Refs and Scroll tracking for growing vertical timeline
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end center"]
    });
    const timelineScaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 35,
        restDelta: 0.001
    });

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <div className="w-full max-w-full py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bento-card p-6 md:p-12 relative overflow-hidden bg-white/5"
            >
                {/* 1. HEADER INTRO */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/10 pb-12 mb-12">
                    <div className="max-w-3xl">
                        <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Portfolio CV</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mt-4 mb-2">CV</h1>
                        <p className="text-xl text-accent-blue font-bold tracking-widest uppercase mb-6">More Than a Resume</p>
                        
                        <p className="text-xl md:text-2xl italic text-white/50 border-l-4 border-accent-blue pl-6 py-1 leading-relaxed font-serif mb-6">
                            "Every project, challenge, and achievement has shaped me into the developer I am today."
                        </p>
                        <p className="text-white/60 leading-relaxed font-medium text-base md:text-lg">
                            I am a Computer Science and Engineering student passionate about Full Stack Development, Software Engineering, Cloud Computing, and Artificial Intelligence. This page represents my journey, experiences, achievements, and continuous growth as a developer.
                        </p>
                    </div>

                    <div className="flex flex-row lg:flex-col sm:flex-nowrap gap-4 w-full lg:w-auto shrink-0 no-print">
                        <a
                            href={driveResumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex-1 lg:flex-initial flex items-center justify-center gap-3 rounded-2xl bg-accent-blue px-6 py-4 font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent-blue/20"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "contact", "/contact")}
                            className="group cv-contact-btn flex-1 lg:flex-initial flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-sm"
                        >
                            <Mail size={18} className="text-accent-blue" />
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* 2. THE STORY TIMELINE */}
                <div className="border-b border-white/10 pb-12 mb-12">
                    <div className="mb-12 text-center">
                        <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">The Journey</span>
                        <h2 className="text-3xl font-black mt-4 mb-2 text-white">Academic Journey & Timeline</h2>
                        <p className="text-sm text-white/40 font-medium">Trace my progression down the timeline</p>
                    </div>

                    {/* Timeline container */}
                    <div ref={timelineRef} className="relative max-w-4xl mx-auto py-12 px-4">
                        {/* Background structural line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

                        {/* Scroll-Grow Gold progress line */}
                        <motion.div
                            style={{
                                scaleY: timelineScaleY,
                                originY: 0
                            }}
                            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-blue -translate-x-1/2"
                        />

                        {/* Timeline Rows */}
                        <div className="space-y-16 relative z-10">
                            
                            {/* Item 1 (Odd: Left on Desktop, Right on Mobile) */}
                            <div className="relative flex flex-col md:grid md:grid-cols-9 gap-4 md:gap-0 w-full">
                                {/* Left Side Card */}
                                <div className="col-span-4 flex justify-end md:pr-12 hidden md:flex">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="bento-card p-6 w-full text-right hover:border-accent-blue/30 transition-all duration-300"
                                    >
                                        <span className="text-xs font-black uppercase text-accent-blue tracking-widest">2024 — 2028</span>
                                        <h3 className="text-xl font-bold text-white mt-1">Bachelor of Engineering (B.E.)</h3>
                                        <p className="text-sm font-bold text-accent-blue mt-0.5">Computer Science and Engineering</p>
                                        <p className="text-xs text-white/40 mt-1 font-medium">Sri Eshwar College of Engineering</p>
                                        <p className="text-sm text-white/50 mt-4 leading-relaxed font-medium">
                                            Currently building foundation in core programming, full-stack technologies, database engineering, cloud concepts (AWS), and AI integration.
                                        </p>
                                    </motion.div>
                                </div>
                                
                                {/* Timeline Marker Node */}
                                <div className="col-span-1 flex justify-start md:justify-center items-center relative pl-8 md:pl-0">
                                    <div className="absolute left-[3px] md:left-auto top-1/2 -translate-y-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent-blue border-4 border-dark-900 ring-2 ring-accent-blue/30" />
                                </div>

                                {/* Right Side (Mobile Card version, hidden on desktop) */}
                                <div className="col-span-4 pl-12 md:pl-12 flex md:hidden">
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="bento-card p-6 w-full text-left hover:border-accent-blue/30 transition-all duration-300"
                                    >
                                        <span className="text-xs font-black uppercase text-accent-blue tracking-widest">2024 — 2028</span>
                                        <h3 className="text-xl font-bold text-white mt-1">Bachelor of Engineering (B.E.)</h3>
                                        <p className="text-sm font-bold text-accent-blue mt-0.5">Computer Science and Engineering</p>
                                        <p className="text-xs text-white/40 mt-1 font-medium">Sri Eshwar College of Engineering</p>
                                        <p className="text-sm text-white/50 mt-4 leading-relaxed font-medium">
                                            Currently building foundation in core programming, full-stack technologies, database engineering, cloud concepts (AWS), and AI integration.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Desktop Spacer */}
                                <div className="col-span-4 hidden md:block" />
                            </div>

                            {/* Item 2 (Even: Right on Desktop, Right on Mobile) */}
                            <div className="relative flex flex-col md:grid md:grid-cols-9 gap-4 md:gap-0 w-full">
                                {/* Desktop Spacer */}
                                <div className="col-span-4 hidden md:block" />

                                {/* Timeline Marker Node */}
                                <div className="col-span-1 flex justify-start md:justify-center items-center relative pl-8 md:pl-0">
                                    <div className="absolute left-[3px] md:left-auto top-1/2 -translate-y-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent-purple border-4 border-dark-900 ring-2 ring-accent-purple/30" />
                                </div>

                                {/* Right Side Card */}
                                <div className="col-span-4 pl-12 md:pl-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="bento-card p-6 w-full text-left hover:border-accent-purple/30 transition-all duration-300"
                                    >
                                        <span className="text-xs font-black uppercase text-accent-purple tracking-widest">2022 — 2024</span>
                                        <h3 className="text-xl font-bold text-white mt-1">Higher Secondary Education</h3>
                                        <p className="text-sm font-bold text-accent-purple mt-0.5">Computer Science Group</p>
                                        <p className="text-xs text-white/40 mt-1 font-medium">Bharathiyar Matriculation Higher Secondary School</p>
                                        <p className="text-sm text-white/50 mt-4 leading-relaxed font-medium">
                                            Began programming basics in Python and developed a strong logical foundation.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Item 3 (Odd: Left on Desktop, Right on Mobile) */}
                            <div className="relative flex flex-col md:grid md:grid-cols-9 gap-4 md:gap-0 w-full">
                                {/* Left Side Card */}
                                <div className="col-span-4 flex justify-end md:pr-12 hidden md:flex">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="bento-card p-6 w-full text-right hover:border-accent-blue/30 transition-all duration-300"
                                    >
                                        <span className="text-xs font-black uppercase text-accent-blue tracking-widest">2020 — 2022</span>
                                        <h3 className="text-xl font-bold text-white mt-1">Secondary School Certificate</h3>
                                        <p className="text-xs text-white/40 mt-1 font-medium">Bharathiyar School</p>
                                        <p className="text-sm text-white/50 mt-4 leading-relaxed font-medium">
                                            Completed basic secondary education, earning strong marks and establishing key analytical thinking concepts.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Timeline Marker Node */}
                                <div className="col-span-1 flex justify-start md:justify-center items-center relative pl-8 md:pl-0">
                                    <div className="absolute left-[3px] md:left-auto top-1/2 -translate-y-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent-blue border-4 border-dark-900 ring-2 ring-accent-blue/30" />
                                </div>

                                {/* Right Side (Mobile Card version, hidden on desktop) */}
                                <div className="col-span-4 pl-12 md:pl-12 flex md:hidden">
                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="bento-card p-6 w-full text-left hover:border-accent-blue/30 transition-all duration-300"
                                    >
                                        <span className="text-xs font-black uppercase text-accent-blue tracking-widest">2020 — 2022</span>
                                        <h3 className="text-xl font-bold text-white mt-1">Secondary School Certificate</h3>
                                        <p className="text-xs text-white/40 mt-1 font-medium">Bharathiyar School</p>
                                        <p className="text-sm text-white/50 mt-4 leading-relaxed font-medium">
                                            Completed basic secondary education, earning strong marks and establishing key analytical thinking concepts.
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Desktop Spacer */}
                                <div className="col-span-4 hidden md:block" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. LEARNING THROUGH BUILDING (PROJECTS) */}
                <div className="border-b border-white/10 pb-12 mb-12">
                    <div className="mb-8">
                        <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Practical Experience</span>
                        <h2 className="text-3xl font-black mt-4 mb-2 text-white">Learning Through Building</h2>
                        <p className="text-sm text-white/40 font-medium">I strongly believe that the best way to learn technology is by building real-world applications.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                name: "Teacher-Student Management System",
                                desc: "A web-based platform designed to manage academic workflows efficiently. This project helped me understand database management, user authentication, and system design.",
                                tags: ["Python", "Django/Flask", "MySQL", "Auth"]
                            },
                            {
                                name: "Book Store – MERN Stack",
                                desc: "A full-stack web application built using React, Node.js, Express.js, and MongoDB. Through this project, I learned REST APIs, CRUD operations, state management, and backend integration.",
                                tags: ["React", "Node.js", "Express", "MongoDB", "REST API"]
                            },
                            {
                                name: "FraudGuard – Financial Fraud Detection",
                                desc: "A machine learning-based system developed to detect suspicious financial transactions. This project introduced me to data preprocessing, predictive analytics, and machine learning workflows.",
                                tags: ["Python", "Scikit-Learn", "Pandas", "Analytics"]
                            },
                            {
                                name: "Campus Map POI Manager",
                                desc: "An interactive campus navigation platform that allows users to explore and manage points of interest efficiently. This project enhanced my understanding of user experience design and location-based applications.",
                                tags: ["JavaScript", "Leaflet.js", "SQL", "UX Design"]
                            }
                        ].map((proj, idx) => (
                            <motion.div 
                                key={proj.name}
                                variants={fadeInUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 hover:bg-white/[0.04] transition-all"
                            >
                                <h4 className="font-bold text-white text-lg">{proj.name}</h4>
                                <p className="text-sm text-white/50 mt-3 leading-relaxed">{proj.desc}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {proj.tags.map(t => (
                                        <span key={t} className="rounded-lg bg-accent-blue/5 border border-accent-blue/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-accent-blue/70">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. SKILLS & BEYOND CLASSROOM */}
                <div className="grid gap-10 lg:grid-cols-12 border-b border-white/10 pb-12 mb-12">
                    
                    {/* Skills Breakdown (Col-7) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <span className="rounded-full bg-accent-purple/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-purple border border-accent-purple/20">Skillset</span>
                            <h2 className="text-3xl font-black mt-4 mb-2 text-white">Skills I've Built Along The Way</h2>
                        </div>
                        <div className="space-y-5">
                            {[
                                { cat: "Programming Languages", skills: ["C", "C++", "Python", "Java", "JavaScript"] },
                                { cat: "Development Technologies", skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "NestJS"] },
                                { cat: "Database Technologies", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
                                { cat: "Tools & Platforms", skills: ["Git", "GitHub", "Docker", "Postman", "AWS", "Vercel", "Jupyter Notebook"] }
                            ].map((group) => (
                                <div key={group.cat} className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                                    <h4 className="text-xs font-black uppercase tracking-wider text-accent-purple mb-3">{group.cat}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map(s => (
                                            <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-white/80">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Beyond Classroom & Hackathons (Col-5) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Extracurricular</span>
                            <h2 className="text-3xl font-black mt-4 mb-2 text-white">Beyond The Classroom</h2>
                            <p className="text-xs text-white/40 mt-1">Learning does not stop after lectures. I spend time sharpening my skills through challenges and contributions.</p>
                        </div>

                        {/* Hackathon highlights */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                            <h4 className="font-bold text-white flex items-center gap-2">
                                <Award size={18} className="text-accent-blue" />
                                Hackathons & Experiences
                            </h4>
                            <p className="text-xs text-white/50">Every hackathon has taught me something valuable: teamwork, presentation skills, time pressure, and core system setups.</p>
                            
                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-lg">🏆</span>
                                    <div>
                                        <h5 className="text-xs font-black text-white">Second Runner-Up – Techathon 2.0</h5>
                                        <p className="text-[10px] text-white/40 mt-0.5">Amrita Vishwa Vidyapeetham, Chennai</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-lg">🏆</span>
                                    <div>
                                        <h5 className="text-xs font-black text-white">Agentathon Participant</h5>
                                        <p className="text-[10px] text-white/40 mt-0.5">National Level AI Hackathon at PES University, Bangalore</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                            {[
                                "1000+ Problems Solved on SkillRack",
                                "HackerRank SQL Silver Level",
                                "Active GitHub Contributor",
                                "Continuous Learner and Technology Enthusiast"
                            ].map((hl) => (
                                <div key={hl} className="flex items-center gap-3 text-xs text-white/70 font-medium">
                                    <Sparkles size={14} className="text-yellow-500 shrink-0" />
                                    <span>{hl}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. CERTIFICATIONS GRID */}
                <div className="border-b border-white/10 pb-12 mb-12">
                    <div className="mb-8">
                        <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Credentials</span>
                        <h2 className="text-3xl font-black mt-4 mb-2 text-white">Certifications & Learning</h2>
                        <p className="text-sm text-white/40 font-medium">Professional courses and badges validate my domain expertise.</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { name: "Cloud Computing", issuer: "LinkedIn Learning", tags: ["Cloud", "SaaS"], link: "https://www.linkedin.com/learning/" },
                            { name: "Innovating with Google Cloud AI", issuer: "Google Cloud (Simplilearn)", tags: ["AI", "Google Cloud"], link: "https://simplilearn.com/" },
                            { name: "Mastering Data Structures & Algorithms", issuer: "Udemy (Abdul Bari)", tags: ["DSA", "C++", "C"], link: "https://www.udemy.com/" },
                            { name: "Python Programming Masterclass", issuer: "Udemy (Makeintern)", tags: ["Python", "Scripting"], link: "https://www.udemy.com/" },
                            { name: "SQL Basic", issuer: "HackerRank", tags: ["SQL", "Databases"], link: "https://hackerrank.com/" }
                        ].map((cert, idx) => (
                            <motion.div 
                                key={cert.name}
                                variants={fadeInUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <Award className="text-white/20 group-hover:text-accent-blue transition-colors" size={24} />
                                        <div className="flex gap-1.5">
                                            {cert.tags.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-white text-base leading-snug group-hover:text-accent-blue transition-colors">{cert.name}</h4>
                                    <p className="text-xs text-white/40 mt-1 font-medium">{cert.issuer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 6. WHAT I'M WORKING TOWARDS & GOALS */}
                <div className="grid gap-8 md:grid-cols-2 border-b border-white/10 pb-12 mb-12">
                    
                    {/* Current Focus Areas */}
                    <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                        <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                            <Target size={20} className="text-accent-purple" />
                            Current Focus Areas
                        </h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                "Full Stack Development",
                                "Cloud Computing (AWS)",
                                "Artificial Intelligence",
                                "Software Engineering Best Practices",
                                "Advanced Database Design",
                                "Real-World Project Development"
                            ].map((f) => (
                                <div key={f} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5">
                                    <CheckCircle2 size={14} className="text-accent-purple shrink-0" />
                                    <span className="text-xs font-bold text-white/70">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Looking Ahead Box */}
                    <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                                <Sparkles size={20} className="text-accent-blue" />
                                Looking Ahead
                            </h3>
                            <p className="text-sm leading-relaxed text-white/50 font-medium italic font-serif">
                                "This is only the beginning of my journey. Every project I build, every challenge I overcome, and every lesson I learn brings me one step closer to becoming the developer I aspire to be."
                            </p>
                        </div>
                        <p className="text-xs text-white/40 mt-4 leading-relaxed">
                            I am excited to continue learning, growing, and contributing to meaningful technology solutions that make a positive impact.
                        </p>
                    </div>
                </div>

                {/* 7. CONNECTING FOOTER */}
                <div className="text-center p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5">
                    <h3 className="text-2xl font-black text-white">Let's Connect</h3>
                    <p className="text-sm text-white/50 mt-2 max-w-lg mx-auto leading-relaxed">Interested in collaborating, discussing opportunities, or simply connecting?</p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href={driveResumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider"
                        >
                            <Download size={14} /> Download Resume
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "contact", "/contact")}
                            className="btn-secondary flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider border-white/10 hover:border-accent-purple/40"
                        >
                            <Mail size={14} className="text-accent-purple" /> Contact Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/danushkumar-v-s-797a4a329"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider border-white/10 hover:border-accent-blue/40"
                        >
                            <Linkedin size={14} className="text-accent-blue" /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/danushkumar77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider border-white/10 hover:border-white/40"
                        >
                            <Github size={14} /> GitHub
                        </a>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
