import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Github,
    Linkedin,
    Mail,
    Code2,
    Cpu,
    Database,
    Terminal,
    ArrowRight,
    Download,
    Flame,
    Award,
    Layers,
    Activity,
    Phone,
    Instagram
} from "lucide-react";
import { BentoCard } from "../components/bento/BentoCard";
import { contactConfig } from "../utils/contactConfig";

// Custom WhatsApp SVG icon
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.858.002-2.634-1.013-5.11-2.861-6.961S14.363 1.02 11.734 1.02c-5.437 0-9.861 4.422-9.865 9.86-.001 1.739.46 3.432 1.336 4.93L2.2 21.8l6.183-1.62c1.47.8 3.023 1.22 4.61 1.224h.004-.002-.004c.002 0 0 0 0 0zm11.378-7.794c-.328-.164-1.933-.955-2.23-1.064-.298-.11-.515-.164-.73.164-.216.328-.838 1.064-1.026 1.282-.188.218-.375.246-.703.082-.328-.164-1.383-.51-2.636-1.627-.975-.87-1.633-1.946-1.824-2.274-.191-.328-.02-.505.143-.668.148-.146.328-.382.493-.573.164-.191.219-.328.328-.546.11-.218.055-.41-.027-.573-.082-.164-.73-1.76-1.002-2.416-.265-.64-.537-.552-.73-.562-.188-.01-.402-.012-.617-.012-.215 0-.566.08-.862.402-.296.322-1.13 1.102-1.13 2.686 0 1.584 1.15 3.118 1.31 3.328.16.21 2.262 3.454 5.48 4.843.765.33 1.362.528 1.828.675.77.244 1.47.21 2.022.128.615-.093 1.933-.79 2.204-1.516.27-.727.27-1.348.19-1.477-.08-.127-.297-.21-.625-.373z" />
  </svg>
);

// Reusable CountUp component triggered in viewport view
function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200; // 1.2s count transition
    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth deceleration curve (ease-out-quad)
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-white leading-none">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
    const handleScroll = (e, sectionId, path) => {
        const el = document.getElementById(sectionId);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
            window.history.pushState({}, "", path);
        }
    };

    // Words array for typing loop animation
    const words = ["Full Stack Developer", "Software Engineer", "Problem Solver", "AI Enthusiast", "Lifelong Learner"];
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    // Hero staggering variants
    const heroContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const heroItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <div className="w-full max-w-full">
            <div className="flex flex-col gap-16">
                
                {/* 1. HERO SECTION */}
                <motion.div
                    variants={heroContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bento-card flex flex-col lg:flex-row items-center gap-10 p-6 md:p-10 relative group"
                >
                    {/* Clipped background content container to avoid glow bleeding */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="glow-border" />
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-blue/5 blur-[120px]" />
                    </div>

                    {/* Right border vertical social icons stack */}
                    <div className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-20">
                        {/* GitHub */}
                        <a
                            href={contactConfig.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full github-icon-box flex items-center justify-center shadow-lg border border-black/10 dark:border-white/10 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            title="GitHub"
                        >
                            <Github size={16} />
                        </a>
                        
                        {/* LinkedIn */}
                        <a
                            href={contactConfig.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow-lg border border-black/10 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            title="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </a>
                        
                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/${contactConfig.whatsApp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg border border-black/10 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            title="WhatsApp"
                        >
                            <WhatsAppIcon size={16} />
                        </a>
                        
                        {/* Call */}
                        <a
                            href={`tel:${contactConfig.phone}`}
                            className="h-9 w-9 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-lg border border-black/10 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            title="Call Me"
                        >
                            <Phone size={16} />
                        </a>
                        
                        {/* Instagram */}
                        <a
                            href={contactConfig.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-lg border border-black/10 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            title="Instagram"
                        >
                            <Instagram size={16} />
                        </a>
                    </div>

                    {/* Left Column: Image with gradient glow and infinite floating */}
                    <motion.div 
                        className="relative shrink-0"
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-blue opacity-30 blur-xl group-hover:opacity-60 transition duration-700"></div>
                        <img
                            src="/assets/profile.jpg"
                            alt="Danushkumar V S"
                            className="relative h-60 w-60 md:h-80 md:w-80 rounded-[2rem] object-cover object-top border-4 border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1"
                        />
                    </motion.div>

                    {/* Right Column: Personal details */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.h1 
                            variants={heroItemVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-white"
                        >
                            Danushkumar <span className="text-accent-blue font-serif italic font-medium">V S</span>
                        </motion.h1>
                        
                        {/* Smooth loop typing tag line */}
                        <div className="h-10 mt-3 flex items-center justify-center lg:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={words[wordIndex]}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="text-xl md:text-2xl font-black text-white/80 tracking-wide border-b border-accent-blue/30 pb-0.5"
                                >
                                    {words[wordIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <motion.div 
                            variants={heroItemVariants}
                            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3"
                        >
                            <span className="rounded-2xl bg-accent-blue/10 px-5 py-2.5 text-xs font-bold text-accent-blue border border-accent-blue/20">CSE Student</span>
                            <span className="rounded-2xl bg-accent-purple/10 px-5 py-2.5 text-xs font-bold text-accent-purple border border-accent-purple/20">Open to Opportunities</span>
                        </motion.div>

                        <motion.div 
                            variants={heroItemVariants}
                            className="mt-8 space-y-6"
                        >
                            <p className="max-w-3xl text-base md:text-lg leading-relaxed text-white/60 font-medium">
                                I'm a Computer Science and Engineering student at Sri Eshwar College of Engineering who is passionate about building modern web applications and solving real-world problems through technology. I enjoy learning new technologies, creating impactful projects, and continuously improving my development skills.
                            </p>
                            <p className="text-xl md:text-2xl italic text-white/50 border-l-4 border-accent-blue pl-6 py-1 leading-relaxed font-serif">
                                "Always Learning, Always Building, Always Improving."
                            </p>
                        </motion.div>

                        {/* Hero CTAs */}
                        <motion.div 
                            variants={heroItemVariants}
                            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <a
                                href="#projects"
                                onClick={(e) => handleScroll(e, "projects", "/projects")}
                                className="btn-primary flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-accent-blue/20"
                            >
                                View Projects <ArrowRight size={16} />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1mmZeYl29hOLAMNJ6Lmeuu1X-F4FnmqQ8/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider"
                            >
                                <Download size={16} /> Download CV
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact", "/contact")}
                                className="btn-secondary flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider border-white/20 hover:border-accent-purple/50"
                            >
                                <Mail size={16} className="text-accent-purple" /> Contact Me
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 2. QUICK STATS SECTION */}
                <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
                    {[
                        { val: 1000, suffix: "+", label: "Problems Solved", desc: "LeetCode, SkillRack & platforms", icon: <Code2 size={24} className="text-accent-blue" />, color: "border-accent-blue/20 bg-accent-blue/5" },
                        { val: 10, suffix: "+", label: "Projects Built", desc: "Full Stack & Machine Learning", icon: <Layers size={24} className="text-accent-purple" />, color: "border-accent-purple/20 bg-accent-purple/5" },
                        { val: 3, suffix: "+", label: "Hackathons Participated", desc: "Tantrotsav, Agentathon...", icon: <Flame size={24} className="text-orange-500" />, color: "border-orange-500/20 bg-orange-500/5" },
                        { val: 5, suffix: "+", label: "Certifications Earned", desc: "IIT Bombay, Udemy, Oracle...", icon: <Award size={24} className="text-green-500" />, color: "border-green-500/20 bg-green-500/5" }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`bento-card p-6 flex flex-col justify-between border ${stat.color} hover:scale-[1.02] transition-all duration-300`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Counter value={stat.val} suffix={stat.suffix} />
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                    {stat.icon}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base md:text-lg">{stat.label}</h4>
                                <p className="text-xs text-white/40 mt-1 font-medium">{stat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. ABOUT PREVIEW & CURRENT FOCUS */}
                <div className="grid gap-10 md:grid-cols-12">
                    
                    {/* About Preview Card (Col-7) */}
                    <BentoCard className="md:col-span-7 flex flex-col justify-between p-6 md:p-10 hover:border-accent-blue/30 transition-all duration-500">
                        <div>
                            <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Who Am I?</span>
                            <h3 className="text-3xl font-black mt-6 tracking-tight text-white">Passion Driven Developer</h3>
                            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/50 font-medium">
                                I'm a passionate developer with interests in Full Stack Development, Cloud Computing, Artificial Intelligence, and Software Engineering. I enjoy transforming ideas into real applications and gaining hands-on experience through projects, hackathons, and continuous learning.
                            </p>
                        </div>
                        <a
                            href="#about"
                            onClick={(e) => handleScroll(e, "about", "/about")}
                            className="btn-secondary w-full py-4 text-center mt-10 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group border-white/10 hover:border-accent-blue/40"
                        >
                            More About Me <ArrowRight size={16} className="text-accent-blue group-hover:translate-x-1.5 transition-transform" />
                        </a>
                    </BentoCard>

                    {/* Current Focus Card (Col-5) */}
                    <BentoCard className="md:col-span-5 p-6 md:p-10 hover:border-accent-purple/30 transition-all duration-500">
                        <span className="rounded-full bg-accent-purple/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-purple border border-accent-purple/20">Current Focus</span>
                        <h3 className="text-3xl font-black mt-6 tracking-tight text-white mb-6">Currently Working On</h3>
                        <div className="space-y-4">
                            {[
                                "Full Stack Web Development",
                                "Cloud Computing (AWS)",
                                "PostgreSQL Database Development",
                                "AI-Based Applications",
                                "Problem Solving and DSA"
                            ].map((focus) => (
                                <div key={focus} className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-purple/20 hover:bg-accent-purple/5 transition-all">
                                    <div className="h-2 w-2 rounded-full bg-accent-purple shrink-0" />
                                    <span className="text-sm font-bold text-white/80">{focus}</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </div>

                {/* 4. FEATURED SKILLS */}
                <BentoCard className="p-6 md:p-10">
                    <div className="text-center mb-10">
                        <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Skills Showcase</span>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-4">Featured Skills</h3>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            { title: "Languages", icon: <Code2 size={18} className="text-accent-blue" />, skills: ["C", "C++", "Python", "JavaScript"] },
                            { title: "Frontend", icon: <Cpu size={18} className="text-accent-purple" />, skills: ["HTML", "CSS", "React.js"] },
                            { title: "Backend", icon: <Activity size={18} className="text-green-500" />, skills: ["Node.js", "Express.js"] },
                            { title: "Databases", icon: <Database size={18} className="text-yellow-500" />, skills: ["MySQL", "PostgreSQL", "MongoDB"] },
                            { title: "Tools", icon: <Terminal size={18} className="text-orange-500" />, skills: ["Git", "GitHub", "VS Code", "AWS"] }
                        ].map(group => (
                            <div key={group.title} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2.5 font-black uppercase text-xs tracking-wider text-white">
                                        {group.icon}
                                        {group.title}
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {group.skills.map(skill => (
                                            <span key={skill} className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-white/60 border border-white/5 hover:border-accent-blue/30 hover:text-white transition-all cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* 5. ACHIEVEMENTS & CONTACT PREVIEW */}
                <div className="grid gap-10 md:grid-cols-12">
                    
                    {/* Achievement Highlights Card (Col-6) */}
                    <BentoCard className="md:col-span-6 p-6 md:p-10 hover:border-accent-purple/30 transition-all duration-500">
                        <span className="rounded-full bg-accent-purple/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-purple border border-accent-purple/20">Highlights</span>
                        <h3 className="text-3xl font-black mt-6 tracking-tight text-white mb-6">Achievement Highlights</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all">
                                <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple shrink-0 text-lg">
                                    🏆
                                </div>
                                <div>
                                    <h4 className="font-black text-white text-base">Techathon 2.0</h4>
                                    <p className="text-xs text-white/50 mt-1 uppercase tracking-widest font-black">2nd Runner-Up (₹6000 Cash Prize)</p>
                                    <p className="text-xs text-white/40 mt-1">Selected out of 45+ national teams at Amrita Chennai.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all">
                                <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue shrink-0 text-lg">
                                    🏆
                                </div>
                                <div>
                                    <h4 className="font-black text-white text-base">Agentathon</h4>
                                    <p className="text-xs text-white/50 mt-1 uppercase tracking-widest font-black">Top 8 Finalist</p>
                                    <p className="text-xs text-white/40 mt-1">PES University Bengaluru Hackathon competing against 150+ teams.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="p-3 rounded-xl bg-green-500/10 text-green-500 shrink-0 text-lg">
                                    📜
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Active Hackathon & Workshop Participant</h4>
                                    <p className="text-xs text-white/40 mt-1">Regular contributor to workshops, symposiums, and engineering events.</p>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Contact Preview Card (Col-6) */}
                    <BentoCard className="md:col-span-6 flex flex-col justify-between p-6 md:p-10 hover:border-accent-blue/30 transition-all duration-500 text-center md:text-left">
                        <div>
                            <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20 w-fit mx-auto md:mx-0">Let's Talk</span>
                            <h3 className="text-3xl font-black mt-6 tracking-tight text-white">Interested in collaborating or discussing opportunities?</h3>
                            <p className="mt-4 text-base leading-relaxed text-white/50 font-medium">
                                Let's connect and build something meaningful together. Reach out via email or follow my updates on professional social platforms.
                            </p>

                            <div className="mt-8 flex flex-col gap-4">
                                <a href={`mailto:${contactConfig.email}`} className="flex items-center justify-center md:justify-start gap-4 text-white/50 hover:text-accent-blue transition-all group">
                                    <div className="h-10 w-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
                                        <Mail size={18} className="text-accent-blue" />
                                    </div>
                                    <span className="text-sm font-bold break-all">{contactConfig.email}</span>
                                </a>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <a
                                        href={contactConfig.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 text-white/50 hover:text-accent-blue transition-all"
                                        title="LinkedIn"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                                            <Linkedin size={18} className="text-accent-blue" />
                                        </div>
                                    </a>
                                    <a
                                        href={contactConfig.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 text-white/50 hover:text-white transition-all"
                                        title="GitHub"
                                    >
                                        <div className="h-10 w-10 rounded-xl github-icon-box flex items-center justify-center border transition-colors">
                                            <Github size={18} />
                                        </div>
                                    </a>
                                    <a
                                        href={`https://wa.me/${contactConfig.whatsApp}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-all"
                                        title="WhatsApp"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                                            <WhatsAppIcon size={18} className="text-[#25D366]" />
                                        </div>
                                    </a>
                                    <a
                                        href={`tel:${contactConfig.phone}`}
                                        className="flex items-center gap-3 text-white/50 hover:text-accent-blue transition-all"
                                        title="Call Me"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                                            <Phone size={18} className="text-accent-blue" />
                                        </div>
                                    </a>
                                    <a
                                        href={contactConfig.instagramUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 text-white/50 hover:text-[#ee2a7b] transition-all"
                                        title="Instagram"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-[#ee2a7b]/10 flex items-center justify-center border border-[#ee2a7b]/20">
                                            <Instagram size={18} className="text-[#ee2a7b]" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "contact", "/contact")}
                            className="btn-primary w-full py-4 text-center mt-10 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group text-black shadow-lg shadow-accent-blue/20"
                        >
                            Let's Connect <ArrowRight size={16} />
                        </a>
                    </BentoCard>
                </div>

            </div>
        </div>
    );
}
