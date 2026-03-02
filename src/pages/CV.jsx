import { motion } from "framer-motion";
import { Download, Mail, MapPin, Github, GraduationCap, Target, Briefcase, Award, Code2 } from "lucide-react";

export default function CV() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bento-card p-12 relative overflow-hidden bg-white/5"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-white/10 pb-12 mb-12">
                    <div>
                        <h1 className="text-5xl font-black tracking-tighter text-white mb-2">Danushkumar VS</h1>
                        <p className="text-xl text-accent-blue font-bold tracking-widest uppercase">Engineering Student & Full Stack Developer</p>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 text-white/60">
                                <Mail size={18} className="text-accent-blue" />
                                <span className="font-medium">danushkumar.vs2024cse@sece.ac.in</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <MapPin size={18} className="text-accent-blue" />
                                <span className="font-medium">Tamil Nadu, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <Github size={18} className="text-accent-blue" />
                                <span className="font-medium">github.com/danushkumar77</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1mmZeYl29hOLAMNJ6Lmeuu1X-F4FnmqQ8/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-2xl bg-accent-blue px-8 py-4 font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent-blue/20 no-print"
                    >
                        <Download size={20} />
                        Download CV
                    </a>
                </div>

                {/* Content Grid */}
                <div className="space-y-16">
                    {/* Career Objective */}
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="text-accent-blue" size={28} />
                            <h2 className="text-2xl font-bold tracking-tight">Career Objective</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-white/60 font-medium italic">
                            Aspiring Full Stack Developer with a strong foundation in Computer Science and Engineering.
                            Passionate about building efficient, scalable applications and solving complex problems
                            with clean, modern code. Committed to professional growth and contributing to innovative engineering projects.
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <GraduationCap className="text-accent-purple" size={28} />
                            <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">Bachelor of Engineering - CSE</h3>
                                <span className="text-accent-purple font-black">2024 — 2028 (Expected)</span>
                            </div>
                            <p className="text-lg text-white/80 font-bold mb-6">Sri Eshwar College of Engineering</p>
                            <div className="flex flex-wrap gap-2">
                                {["DSA", "OOPs", "Web Development", "MySQL", "Python"].map(course => (
                                    <span key={course} className="px-3 py-1 rounded-lg bg-white/5 text-xs font-bold text-white/40 uppercase tracking-widest border border-white/5">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <Code2 className="text-accent-blue" size={28} />
                            <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue mb-6">Programming</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["C", "C++", "Python", "JavaScript"].map(s => (
                                        <span key={s} className="px-4 py-2 rounded-xl bg-white/5 text-sm font-bold text-white/70">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent-purple mb-6">Web Tech</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["React.js", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express"].map(s => (
                                        <span key={s} className="px-4 py-2 rounded-xl bg-white/5 text-sm font-bold text-white/70">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Projects */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <Briefcase className="text-yellow-500" size={28} />
                            <h2 className="text-2xl font-bold tracking-tight">Key Projects</h2>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Multiple Full Stack & ML Applications</h3>
                            <p className="text-white/60 leading-relaxed font-medium">
                                Developed over 8 projects involving React, Django, MERN, and Machine Learning.
                                Built several applications across diverse domains like financial fraud detection,
                                campus management, and e-commerce.
                            </p>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="text-green-500" size={28} />
                            <h2 className="text-2xl font-bold tracking-tight">Achievements & Certifications</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                                <p className="text-white/60 font-medium">Active participation in university hackathons and technical symposiums.</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                                <p className="text-white/60 font-medium">Successfully completed several professional development certifications in Web Development and Programming.</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                                <p className="text-white/60 font-medium">Consistently maintained a high academic performance in engineering core subjects.</p>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="glow-border" />
            </motion.div>
        </div>
    );
}
