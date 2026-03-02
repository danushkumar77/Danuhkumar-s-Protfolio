import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const formData = new FormData(e.target);

        // Required by Web3Forms
        formData.append("access_key", "1a0c3233-924e-4133-a9d1-e8be0b5f1858");

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

    return (
        <div className="mx-auto max-w-6xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Let's Connect</h1>
                <p className="mt-4 text-white/50">Interested in collaborating or just want to say hi?</p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="rounded-3xl border border-white/10 bg-dark-800 p-8">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">Official Email</p>
                                    <a href="mailto:danushkumar.vs2024cse@sece.ac.in" className="text-lg font-medium text-white hover:text-accent-blue">
                                        danushkumar.vs2024cse@sece.ac.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-purple/10 text-accent-purple">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">Location</p>
                                    <p className="text-lg font-medium">Tamil Nadu, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/30">Socials</p>
                                    <div className="mt-2 flex gap-4">
                                        <a href="https://github.com/danushkumar77" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/danushkumar-v-s-797a4a329" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-dashed border-white/10 p-8">
                        <p className="text-center text-sm text-white/30">
                            Response time: Usually within 24 hours.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-3xl border border-white/10 bg-dark-800 p-8 shadow-2xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/30">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder=""
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/30">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder=""
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/30">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                placeholder="How can I help you?"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-accent-blue focus:outline-none resize-none transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-blue py-4 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                            {status !== "sending" && <Send size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        </button>

                        {status === "success" && (
                            <p className="text-sm font-medium text-green-500 text-center mt-2">Message sent successfully! I'll get back to you soon.</p>
                        )}
                        {status === "error" && (
                            <p className="text-sm font-medium text-red-500 text-center mt-2">Something went wrong. Please try again later.</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
