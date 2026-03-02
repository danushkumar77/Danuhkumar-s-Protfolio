import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Github,
    Linkedin,
    Mail,
    Code2,
    Cpu,
    Database,
    Terminal,
    ArrowRight
} from "lucide-react";
import { BentoCard } from "../components/bento/BentoCard";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4">
            <div className="flex flex-col gap-12">
                {/* Main Hero Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bento-card items-center flex flex-col md:flex-row gap-10 p-10 relative overflow-hidden group"
                >
                    <div className="relative shrink-0">
                        <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-blue opacity-30 blur-xl group-hover:opacity-60 transition duration-700"></div>
                        <img
                            src="/assets/profile.jpg"
                            alt="Danushkumar VS"
                            className="relative h-64 w-64 md:h-80 md:w-80 rounded-[2rem] object-cover object-top border-4 border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left z-10">
                        <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl leading-none">
                            Danushkumar <span className="text-accent-blue font-serif italic">VS</span>
                        </h1>
                        <p className="mt-8 text-2xl font-bold text-white/80 tracking-wide">Full Stack Developer</p>

                        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                            <span className="rounded-2xl bg-accent-blue/10 px-5 py-2.5 text-sm font-bold text-accent-blue border border-accent-blue/20">C.S.E Student</span>
                            <span className="rounded-2xl bg-accent-purple/10 px-5 py-2.5 text-sm font-bold text-accent-purple border border-accent-purple/20">Open to Opportunities</span>
                        </div>

                        <div className="mt-12 space-y-8">
                            <p className="text-2xl italic text-white/50 border-l-4 border-accent-blue pl-8 transition-all hover:pl-10 leading-relaxed font-serif">
                                "I build practical, efficient, and scalable web applications."
                            </p>
                            <p className="max-w-2xl text-lg leading-relaxed text-white/40 font-medium tracking-tight">
                                I'm a Full Stack Developer who enjoys building practical and efficient web applications. I focus on strong fundamentals, clean code, and real-world problem solving.
                            </p>
                        </div>
                    </div>
                    <div className="glow-border" />
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
                </motion.div>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* Quick Contact Card */}
                    <BentoCard className="flex flex-col items-center justify-center text-center p-12 h-full hover:border-accent-blue/40 transition-all duration-500">
                        <div className="mb-10 rounded-[2.5rem] bg-accent-blue/10 p-8 text-accent-blue ring-1 ring-accent-blue/20">
                            <Mail size={48} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">Interested in collaborating?</h3>
                        <p className="text-sm text-white/30 uppercase tracking-widest font-bold mb-10 italic">Based in Tamil Nadu, India</p>
                        <Link to="/contact" className="btn-primary w-full py-5 text-base tracking-[0.2em] uppercase font-black text-center shadow-lg shadow-accent-blue/20">
                            Let's Chat
                        </Link>
                    </BentoCard>

                    {/* Social Links Card */}
                    <BentoCard className="flex flex-col justify-between p-12 h-full hover:border-accent-purple/40 transition-all duration-500">
                        <h3 className="text-3xl font-bold mb-10 tracking-tight">Stay Connected</h3>
                        <div className="flex flex-col gap-8">
                            <a href="https://linkedin.com/in/danushkumar-v-s-797a4a329" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-white/50 transition-all hover:text-accent-blue hover:translate-x-3 group">
                                <div className="h-12 w-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center ring-1 ring-accent-blue/20 group-hover:bg-accent-blue/20">
                                    <Linkedin size={24} className="text-accent-blue" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/danushkumar77" target="_blank" rel="noreferrer" className="flex items-center gap-5 text-white/50 transition-all hover:text-white hover:translate-x-3 group">
                                <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:bg-white/10">
                                    <Github size={24} className="text-white/80" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">GitHub Repos</span>
                            </a>
                        </div>
                        <Link
                            to="/resume"
                            className="group mt-12 flex w-full items-center justify-between rounded-[1.5rem] bg-accent-blue/5 p-6 transition-all hover:bg-accent-blue/10 ring-1 ring-white/5 hover:ring-accent-blue/20"
                        >
                            <span className="text-lg font-bold text-accent-blue">View Professional Resume</span>
                            <ArrowRight size={24} className="text-accent-blue transition-transform group-hover:translate-x-3" />
                        </Link>
                    </BentoCard>
                </div>

                {/* Technical Skills Card */}
                <BentoCard className="p-12">
                    <h3 className="text-3xl font-bold mb-12 text-center tracking-tight">Core Technical Stack</h3>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: "Languages", icon: <Code2 size={24} />, skills: ["C", "C++", "Python"], color: "text-accent-blue" },
                            { label: "Web Core", icon: <Cpu size={24} />, skills: ["React.js", "Node.js", "Express", "Tailwind"], color: "text-accent-purple" },
                            { label: "Systems", icon: <Database size={24} />, skills: ["DSA", "OOPs", "MySQL"], color: "text-yellow-500" },
                            { label: "Workflow", icon: <Terminal size={24} />, skills: ["Git", "Vite", "VS Code"], color: "text-green-500" }
                        ].map(group => (
                            <div key={group.label} className="space-y-6">
                                <div className={`flex items-center gap-4 ${group.color}`}>
                                    <div className="p-2 rounded-lg bg-current/10">
                                        {group.icon}
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">{group.label}</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map(skill => (
                                        <span key={skill} className="rounded-xl bg-white/[0.03] px-4 py-2 text-sm font-bold text-white/50 border border-white/5 hover:border-white/20 hover:text-white/80 transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* Projects CTA Card */}
                <BentoCard className="group cursor-pointer p-12 overflow-hidden relative min-h-[400px] flex flex-col justify-center border-white/5 hover:border-accent-blue/30 transition-all duration-700">
                    <div className="relative z-10 text-center md:text-left">
                        <span className="rounded-full bg-accent-blue/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-accent-blue border border-accent-blue/20">Engineering Portfolio</span>
                        <h3 className="mt-8 text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                            Exploring 8+ <br />
                            <span className="text-accent-blue">Full Stack</span> Projects
                        </h3>
                        <p className="mt-8 max-w-2xl text-xl text-white/40 leading-relaxed font-medium italic font-serif">
                            Built complex applications across e-commerce, fraud detection, and campus management systems.
                        </p>

                        <Link to="/projects" className="mt-12 inline-flex items-center gap-4 text-2xl font-black text-accent-blue hover:gap-8 transition-all group/btn">
                            Explore All Projects
                            <div className="h-12 w-12 rounded-full border-2 border-accent-blue flex items-center justify-center group-hover/btn:bg-accent-blue group-hover/btn:text-black transition-all">
                                <ArrowRight size={24} />
                            </div>
                        </Link>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-blue/5 blur-[150px] group-hover:bg-accent-blue/10 transition-all duration-1000" />
                </BentoCard>
            </div>
        </div>
    );
}
