import { motion } from "framer-motion";
import { Download, FileText, Calendar, MapPin, Mail, Globe, Award, Rocket } from "lucide-react";

export default function Resume() {
    return (
        <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">Curriculum Vitae</h1>
                    <p className="mt-2 text-white/50">Engineering Student & Full Stack Developer</p>
                </div>
                <a
                    href="https://drive.google.com/file/d/1mmZeYl29hOLAMNJ6Lmeuu1X-F4FnmqQ8/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-accent-blue px-6 py-3 font-bold text-black transition-all hover:scale-105"
                >
                    <Download size={18} /> Download CV
                </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-dark-800 shadow-2xl">
                {/* Header Section */}
                <div className="border-b border-white/5 p-8 md:p-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Danushkumar VS</h2>
                            <div className="mt-4 space-y-2 text-sm text-white/60">
                                <div className="flex items-center gap-2"><Mail size={14} className="text-accent-blue" /> danushkumar.vs2024cse@sece.ac.in</div>
                                <div className="flex items-center gap-2"><MapPin size={14} className="text-accent-blue" /> Tamil Nadu, India</div>
                                <div className="flex items-center gap-2"><Globe size={14} className="text-accent-blue" /> github.com/danushkumar77</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start md:justify-end">
                            <div className="text-left md:text-right">
                                <p className="text-xs font-bold uppercase tracking-widest text-white/30">Current Institution</p>
                                <p className="mt-1 font-bold text-white">Sri Eshwar College of Engineering</p>
                                <p className="text-sm text-white/50">B.E. Computer Science and Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 space-y-12">

                    {/* Objective */}
                    <section>
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue mb-4">
                            <Rocket size={16} /> Career Objective
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            Aspiring Full Stack Developer with a strong foundation in Computer Science and Engineering.
                            Passionate about building efficient, scalable applications and solving complex problems with clean,
                            modern code. Committed to professional growth and contributing to innovative engineering projects.
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue mb-6">
                            <Calendar size={16} /> Education
                        </h3>
                        <div className="relative border-l-2 border-accent-blue/20 pl-6 ml-2">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent-blue" />
                            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                <h4 className="text-lg font-bold">Bachelor of Engineering - CSE</h4>
                                <span className="text-xs font-medium text-white/40">2024 - 2028 (Expected)</span>
                            </div>
                            <p className="text-white/60">Sri Eshwar College of Engineering</p>
                            <p className="mt-2 text-sm text-accent-blue/80 italic font-medium">Relevant Coursework: DSA, OOPs, Web Development, MySQL, Python Programming</p>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue mb-6">
                            <FileText size={16} /> Technical Skills
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4 rounded-2xl bg-white/5 p-6 border border-white/5">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Programming</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["C", "C++", "Python", "JavaScript"].map(s => (
                                        <span key={s} className="rounded-lg bg-white/5 px-3 py-1 text-sm text-white/80">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4 rounded-2xl bg-white/5 p-6 border border-white/5">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Web Tech</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["React.js", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express"].map(s => (
                                        <span key={s} className="rounded-lg bg-white/5 px-3 py-1 text-sm text-white/80">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Teaser */}
                    <section>
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue mb-4">
                            <Globe size={16} /> Key Projects
                        </h3>
                        <div className="space-y-6">
                            <div className="group rounded-2xl border border-white/5 p-6 transition-colors hover:bg-white/5">
                                <h4 className="text-lg font-bold group-hover:text-accent-blue transition-colors">Multiple Full Stack & ML Applications</h4>
                                <p className="mt-1 text-sm text-white/40">Developed over 8 projects involving React, Django, MERN, and Machine Learning.</p>
                                <p className="mt-3 text-sm text-white/60">Built several applications across diverse domains like financial fraud detection, campus management, and e-commerce.</p>
                            </div>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section>
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue mb-6">
                            <Award size={16} /> Achievements & Certifications
                        </h3>
                        <ul className="list-inside list-disc space-y-3 text-white/60">
                            <li>Active participation in university hackathons and technical symposiums.</li>
                            <li>Successfully completed several professional development certifications in Web Development and Programming.</li>
                            <li>Consistently maintained a high academic performance in engineering core subjects.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
