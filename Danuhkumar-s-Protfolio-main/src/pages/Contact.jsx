import { motion, AnimatePresence } from "framer-motion";
import { 
    Mail, 
    MapPin, 
    Send, 
    Github, 
    Linkedin, 
    MessageSquare, 
    CheckCircle2, 
    Briefcase, 
    Rocket, 
    Sparkles, 
    Globe, 
    ArrowRight,
    Coffee,
    Phone,
    Instagram
} from "lucide-react";
import { useState } from "react";
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


export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const formData = new FormData(e.target);

        // Required by Web3Forms API
        formData.append("access_key", "2c3a7d6a-2454-4e05-8ab8-0b058faa35ae");

        const visitorName = formData.get("name") || "Visitor";
        const visitorEmail = formData.get("email");
        const userSubject = formData.get("subject") || "No Subject";

        // Prepend/customize the subject line for clear delivery and unique identifier to prevent spam categorization
        formData.set("subject", `Portfolio Message from ${visitorName}: ${userSubject}`);
        
        // Add sender display name as requested: "Portfolio Message"
        formData.append("from_name", "Portfolio Message");
        
        // Add Reply-To address to ensure correct headers and prevent spam classification
        if (visitorEmail) {
            formData.append("replyto", visitorEmail);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                e.target.reset();
            } else {
                console.error("Error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

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
            
            {/* 1. TITLE & SUBTITLE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <span className="rounded-full bg-accent-blue/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-blue border border-accent-blue/20">Let's Connect</span>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mt-4">Let's Build Something Amazing Together</h1>
                <p className="mt-4 text-lg text-white/50 tracking-wide font-medium">Interested in collaborating or just want to say hi?</p>
                <p className="mt-6 max-w-3xl mx-auto text-white/60 leading-relaxed font-serif italic text-base md:text-lg">
                    "Whether you have a project idea, internship opportunity, collaboration proposal, hackathon invitation, or simply want to connect, I'd love to hear from you."
                </p>
            </motion.div>

            {/* 2. WHY REACH OUT (CARDS GRID) */}
            <div className="mb-16">
                <div className="mb-8">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue">Collaboration</span>
                    <h3 className="text-2xl font-black text-white mt-1">Why Reach Out?</h3>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Internship Opportunities", text: "Open to internship opportunities where I can learn, contribute, and grow as a developer.", icon: <Briefcase size={22} className="text-accent-blue" />, bg: "bg-accent-blue/5 border-accent-blue/10" },
                        { title: "Project Collaborations", text: "Interested in collaborating on innovative and impactful projects.", icon: <Rocket size={22} className="text-accent-purple" />, bg: "bg-accent-purple/5 border-accent-purple/10" },
                        { title: "Hackathons & Tech Events", text: "Always excited to participate in hackathons, coding competitions, and technical events.", icon: <Sparkles size={22} className="text-yellow-500" />, bg: "bg-yellow-500/5 border-yellow-500/10" },
                        { title: "Tech Discussions", text: "Happy to discuss software development, full-stack technologies, cloud computing, AI, and career growth.", icon: <Coffee size={22} className="text-green-500" />, bg: "bg-green-500/5 border-green-500/10" }
                    ].map((why) => (
                        <div key={why.title} className={`p-6 rounded-2xl border ${why.bg} flex flex-col justify-between hover:scale-[1.02] transition-all`}>
                            <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/10 mb-4 shrink-0">
                                {why.icon}
                            </div>
                            <div>
                                <h4 className="font-black text-white text-base leading-snug">{why.title}</h4>
                                <p className="text-xs text-white/50 mt-2 leading-relaxed font-medium">{why.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. FORM & SIDEBAR GRID */}
            <div className="grid gap-10 lg:grid-cols-12 mb-16">
                
                {/* Left Side: Contact details & Status (Col-5) */}
                <div className="lg:col-span-5 space-y-8">
                    
                    {/* Status Highlights Card */}
                    <BentoCard className="p-6 md:p-8 border-accent-blue/30 bg-accent-blue/[0.01]">
                        <h4 className="font-bold text-white flex items-center gap-2 mb-4 uppercase text-xs tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Current Status
                        </h4>
                        <h3 className="text-xl font-black text-white mb-4">🟢 Currently Open For</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {[
                                "Internship Opportunities",
                                "Project Collaborations",
                                "Freelance Work",
                                "Hackathons",
                                "Technical Networking"
                            ].map((status) => (
                                <span key={status} className="px-3.5 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-500">
                                    {status}
                                </span>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Contact details */}
                    <div className="rounded-3xl border border-white/10 bg-dark-800 p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">Official Email</p>
                                    <a href="mailto:danushkumardk07@gmail.com" className="text-base font-bold text-white hover:text-accent-blue break-all">
                                        danushkumardk07@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] shrink-0 border border-[#25D366]/20">
                                    <WhatsAppIcon size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">WhatsApp</p>
                                    <a href={`https://wa.me/${contactConfig.whatsApp}`} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-[#25D366] transition-colors">
                                        {contactConfig.whatsAppDisplay}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue shrink-0 border border-accent-blue/20">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">Call Me</p>
                                    <a href={`tel:${contactConfig.phone}`} className="text-base font-bold text-white hover:text-accent-blue transition-colors">
                                        {contactConfig.phoneDisplay}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-purple/10 text-accent-purple shrink-0 border border-accent-purple/20">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">Location</p>
                                    <p className="text-base font-bold text-white">Salem, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Response promise */}
                    <div className="rounded-3xl border border-dashed border-white/10 p-6 md:p-8">
                        <h4 className="text-xs font-black uppercase tracking-wider text-white/40 mb-2">Response Promise</h4>
                        <p className="text-xs leading-relaxed text-white/50 font-medium">
                            "I usually respond within 24 hours. Whether you're a recruiter, fellow developer, student, or tech enthusiast, I'm always happy to connect and have meaningful conversations."
                        </p>
                    </div>
                </div>

                {/* Right Side: Form (Col-7) */}
                <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-dark-800 p-6 md:p-8 shadow-2xl overflow-hidden relative">
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            /* Success Screen */
                            <motion.div
                                key="success-screen"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center p-8 md:p-12 text-center min-h-[400px]"
                            >
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.15 }}
                                    className="h-20 w-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 mb-6 shrink-0"
                                >
                                    <CheckCircle2 size={36} />
                                </motion.div>
                                <h4 className="text-2xl font-black text-white">Message Sent Successfully!</h4>
                                <p className="text-sm text-white/50 mt-2 max-w-sm">Thanks for reaching out! I've received your message and will get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus("")}
                                    className="btn-secondary mt-8 text-xs font-black uppercase tracking-widest px-6 py-3 cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            /* Contact Form */
                            <motion.div
                                key="contact-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h3 className="text-2xl font-black text-white mb-6">Send Me a Message</h3>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-white/30">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Danushkumar V S"
                                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-white/30">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="danushkumardk07@gmail.com"
                                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/30">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            placeholder="Collaboration Idea / Internship / General Inquiry"
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/30">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Tell me more about your idea or opportunity..."
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none resize-none transition-colors"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-blue py-4 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {status === "sending" ? "Sending..." : "Send Message"}
                                        {status !== "sending" && <Send size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-sm font-medium text-red-500 text-center mt-2">Something went wrong. Please try again later.</p>
                                    )}
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* 4. LET'S CONNECT / FOLLOW JOURNEY (SOCIAL CARDS) */}
            <div className="mb-16">
                <div className="mb-8">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue">Follow Me</span>
                    <h3 className="text-2xl font-black text-white mt-1">Let's Connect</h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    
                    {/* LinkedIn */}
                    <a 
                        href={contactConfig.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                                <Linkedin size={20} className="text-accent-blue" />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-accent-blue group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">LinkedIn</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Connect with me professionally and explore my journey.</p>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a 
                        href={contactConfig.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl github-icon-box flex items-center justify-center border transition-colors">
                                <Github size={20} />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">GitHub</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Check out my projects, repositories, and coding activities.</p>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a 
                        href={`https://wa.me/${contactConfig.whatsApp}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-[#25D366]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                                <WhatsAppIcon size={20} className="text-[#25D366]" />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-[#25D366] group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">WhatsApp</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Ping me for quick updates, queries, or freelance project chats.</p>
                        </div>
                    </a>

                    {/* Call */}
                    <a 
                        href={`tel:${contactConfig.phone}`}
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                                <Phone size={20} className="text-accent-blue" />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-accent-blue group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">Call Me</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Get in touch directly over a phone call for immediate matters.</p>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a 
                        href={contactConfig.instagramUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-[#ee2a7b]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 flex items-center justify-center border border-[#ee2a7b]/20">
                                <Instagram size={20} className="text-[#ee2a7b]" />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-[#ee2a7b] group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">Instagram</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Follow my day-to-day development highlights and tech posts.</p>
                        </div>
                    </a>

                    {/* Portfolio */}
                    <a 
                        href="/" 
                        onClick={(e) => handleScroll(e, "home", "/")}
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-accent-purple/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20">
                                <Globe size={20} className="text-accent-purple" />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-accent-purple group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">Portfolio</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Explore the main home view, hero stats, and featured sections.</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a 
                        href={`mailto:${contactConfig.email}`}
                        className="group p-6 rounded-2xl border border-white/10 bg-dark-800 hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="h-10 w-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                                <Mail size={20} className="text-accent-blue" />
                            </div>
                            <ArrowRight size={16} className="text-white/20 group-hover:text-accent-blue group-hover:translate-x-1.5 transition-all" />
                        </div>
                        <div>
                            <h4 className="font-black text-white text-base">Email</h4>
                            <p className="text-[11px] text-white/40 mt-1 font-medium">Drop a direct message to my email inbox.</p>
                        </div>
                    </a>

                </div>
            </div>

            {/* 5. CLOSING MESSAGE */}
            <BentoCard className="p-6 md:p-10 text-center hover:border-accent-purple/30 transition-all duration-500">
                <span className="rounded-full bg-accent-purple/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-accent-purple border border-accent-purple/20 w-fit mx-auto">Great Start</span>
                <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-white/70 font-medium font-serif italic">
                    "Great opportunities often start with a simple conversation. If you have an idea, opportunity, or just want to connect, feel free to reach out. Let's build something meaningful together."
                </p>
            </BentoCard>

        </div>
    );
}
