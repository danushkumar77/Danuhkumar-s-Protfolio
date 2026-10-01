import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Clock, 
  Search, 
  X, 
  Trophy, 
  Award, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  Code2, 
  Rocket, 
  Palette, 
  Compass, 
  Brain, 
  Zap,
  BookOpen
} from "lucide-react";

export default function Blog() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hackathons"); // "hackathons" | "articles"
  const [expandedSection, setExpandedSection] = useState("all");

  return (
    <div className="w-full max-w-full">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="rounded-full bg-accent-blue/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-accent-blue border border-accent-blue/20 inline-block mb-3">
          Insights & Achievements
        </span>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Hackathons & Engineering Blog</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto text-sm md:text-base">
          Showcasing real-world victories, high-intensity 24-hour hackathon builds, and technical engineering deep dives.
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <div className="mb-12 flex justify-center">
        <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("hackathons")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "hackathons"
                ? "bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/40 text-yellow-400 shadow-lg shadow-yellow-500/10"
                : "text-white/50 hover:text-white"
            }`}
          >
            <Trophy size={16} className={activeTab === "hackathons" ? "text-yellow-400" : "text-white/40"} />
            Hackathon Victories & Experience
          </button>
          <button
            onClick={() => setActiveTab("articles")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "articles"
                ? "bg-accent-blue/15 border border-accent-blue/40 text-accent-blue shadow-lg shadow-accent-blue/5"
                : "text-white/50 hover:text-white"
            }`}
          >
            <BookOpen size={16} className={activeTab === "articles" ? "text-accent-blue" : "text-white/40"} />
            Technical Case Studies
          </button>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === "hackathons" ? (
        <div className="space-y-16">
          {/* Quick Summary Intro */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-center max-w-4xl mx-auto relative overflow-hidden backdrop-blur-sm">
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
              Participating in national-level hackathons has been one of the most transformative parts of my engineering journey.
              From 24-hour non-stop prototyping sprints to data science and human-centered design challenges, these events tested technical scalability, real-time problem-solving, and resilience under pressure.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-white/60">
              <span className="px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 flex items-center gap-1.5">
                🥇 2x First Prize Champion
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center gap-1.5">
                🥈 2x Runner-Up Winner
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-accent-purple flex items-center gap-1.5">
                🏆 Top 10 National Finalist
              </span>
            </div>
          </div>

          {/* 1. 🥇 1st Prize: FusionX 1.0 */}
          <motion.section 
            id="fusionx"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 scroll-mt-28"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 shadow-lg shadow-yellow-500/10">
                <Trophy size={24} className="text-yellow-400" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Grand Winner Spotlight</span>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  🥇 1st Prize: FusionX 1.0 (Open Innovation) | ₹10,000 Cash Prize
                </h2>
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-yellow-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

              {/* Event Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <MapPin size={15} className="text-yellow-400" /> Paavai Engineering College (Autonomous)
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-accent-blue" /> 18-19 September 2026
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-accent-purple" /> 24-Hour Hackathon
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-emerald-400" /> Team Size: 4
                  </span>
                </div>
              </div>

              {/* Organiser Banner */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <p className="text-white/70">
                  <strong className="text-white">Organised by:</strong> Department of Information Technology, Paavai Engineering College in collaboration with <span className="text-accent-blue font-semibold">Google Developer Group On Campus</span> & <span className="text-accent-purple font-semibold">The Growing Coders Club</span>.
                </p>
                <span className="px-3 py-1 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-bold tracking-wider shrink-0 text-center">
                  Theme: Where Ideas Collide, Innovation Ignites
                </span>
              </div>

              {/* About & Challenge */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                    <Sparkles size={16} /> About The Event
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    FusionX 1.0 was a prestigious 24-hour national hackathon with a prize pool of ₹50,000+. Teams of four had to identify a real-world problem, engineer an end-to-end working software solution, and deliver a live demonstration and pitch to industry judges within 24 hours.
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-purple flex items-center gap-2">
                    <Target size={16} /> The Challenge
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    In the <strong>Open Innovation</strong> track, there was no fixed problem statement. Our team tackled workflow automation and accessibility bottlenecks, designing an intelligent system that delivers real-time execution and scalability.
                  </p>
                </div>
              </div>

              {/* Solution & Features */}
              <div className="space-y-4 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Lightbulb size={18} className="text-yellow-400" />
                  Our Solution & Architecture
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  We engineered a robust full-stack solution featuring automated pipelines, instant response handling, and an intuitive user interface.
                </p>

                <div className="grid gap-4 sm:grid-cols-3 pt-2">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Feature 1
                    </div>
                    <h4 className="text-sm font-semibold text-white">Rapid 24h Prototype</h4>
                    <p className="text-xs text-white/50 mt-1">End-to-end working prototype architected, tested, and deployed within the 24-hour deadline.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-accent-purple font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Feature 2
                    </div>
                    <h4 className="text-sm font-semibold text-white">Intelligent Data Pipeline</h4>
                    <p className="text-xs text-white/50 mt-1">Modular architecture delivering reliable backend data routing and instant queries.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Feature 3
                    </div>
                    <h4 className="text-sm font-semibold text-white">Modern UI/UX</h4>
                    <p className="text-xs text-white/50 mt-1">Responsive, ergonomic interface designed for seamless multi-role user workflows.</p>
                  </div>
                </div>
              </div>

              {/* My Role & Tech Stack */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                    <Users size={16} className="text-accent-blue" /> My Role
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Led full-stack frontend & backend engineering, REST API integration, state management, and delivered the technical live pitch to the judges.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                    <Code2 size={16} className="text-accent-purple" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Git & GitHub", "Vercel"].map((tech) => (
                      <span key={tech} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="rounded-2xl bg-gradient-to-r from-yellow-500/10 via-accent-blue/10 to-transparent border border-yellow-500/30 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Official Outcome</span>
                  <h4 className="text-xl font-black text-white flex items-center gap-2">
                    🏆 1st Prize Winner & ₹10,000 Cash Prize
                  </h4>
                  <p className="text-xs text-white/60">
                    The judges commended our solution's originality, fully functional live demo, and high real-world impact.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-4 py-2 rounded-2xl bg-yellow-400 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-yellow-400/20">
                    ₹10,000 Cash Prize
                  </span>
                </div>
              </div>

              {/* Photos Gallery */}
              <div className="grid gap-6 md:grid-cols-2 pt-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] relative group shadow-lg">
                  <img
                    src="/assets/fusionx_award.jpg"
                    alt="FusionX 1.0 1st Prize Award Ceremony at Paavai Engineering College"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <p className="text-xs text-white font-bold">🥇 1st Prize Award Presentation & Shield Ceremony</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Paavai Engineering College • FusionX 1.0 (GDG On Campus)</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] relative group shadow-lg">
                  <img
                    src="/assets/fusionx_team.jpg"
                    alt="Team Hacking at FusionX 1.0 24-Hour Hackathon"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <p className="text-xs text-white font-bold">💻 Collaborative 24-Hour Live Prototyping Sprint</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Pachal, Tamil Nadu • 18-19 September 2026</p>
                  </div>
                </div>
              </div>

              {/* Key Learnings */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Rocket size={16} className="text-accent-blue" />
                  Key Learnings & Takeaways
                </h3>
                <ul className="grid gap-3 sm:grid-cols-3 text-xs text-white/70">
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    <span>Taking an idea from concept to a working prototype under a strict 24-hour deadline.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    <span>Dividing work effectively, integrating modules in real time, and staying calm under pressure.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                    <span>Pitching a technical solution clearly and demonstrating live value to an expert jury panel.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 2. 🥇 1st Prize: IntelliData 2026 */}
          <motion.section 
            id="intellidata"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 scroll-mt-28"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10">
                <Trophy size={24} className="text-emerald-400" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Data Science Champion</span>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  🥇 1st Prize: IntelliData 2026 | Industry Insight & Data Science Hackathon
                </h2>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

              {/* Event Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <MapPin size={15} className="text-emerald-400" /> Sri Eshwar College of Engineering, Coimbatore
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-accent-blue" /> 28-29 September 2026
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-accent-purple" /> 2-Day Data Hackathon
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-yellow-400" /> Team Size: 4 (III Year CSE)
                  </span>
                </div>
              </div>

              {/* Organiser Banner */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <p className="text-white/70">
                  <strong className="text-white">Organised by:</strong> Sri Eshwar College of Engineering, Coimbatore for III Year CSE.
                </p>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tracking-wider shrink-0 text-center">
                  Track: Industry Insight & Predictive Analytics
                </span>
              </div>

              {/* About & Problem Statement */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Sparkles size={16} /> About The Event
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    IntelliData 2026 was a competitive two-day event combining an Industry Insight Challenge with a Data Science Hackathon. Teams worked with real-world industry datasets to discover patterns, engineer predictive models, and deliver business insights to judges.
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                    <Target size={16} /> Problem Statement & Approach
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Analyzed complex multivariate datasets to identify hidden trends, correlations, and feature relationships, translating raw unstructured data into actionable strategic decision points.
                  </p>
                </div>
              </div>

              {/* 4-Step Data Science Approach */}
              <div className="space-y-4 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Lightbulb size={18} className="text-emerald-400" />
                  Our Data Science Pipeline
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-2">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Step 1
                    </div>
                    <h4 className="text-sm font-semibold text-white">Data Cleaning & Prep</h4>
                    <p className="text-xs text-white/50 mt-1">Imputed missing values, handled outliers, removed duplicates, and encoded categorical variables.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Step 2
                    </div>
                    <h4 className="text-sm font-semibold text-white">Exploratory EDA</h4>
                    <p className="text-xs text-white/50 mt-1">Uncovered feature correlations, distribution skews, and key business driver patterns.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-accent-purple font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Step 3
                    </div>
                    <h4 className="text-sm font-semibold text-white">ML Modelling & Tuning</h4>
                    <p className="text-xs text-white/50 mt-1">Trained and compared Random Forest, XGBoost & ensembles; optimized F1-score & accuracy.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Step 4
                    </div>
                    <h4 className="text-sm font-semibold text-white">Storytelling Dashboard</h4>
                    <p className="text-xs text-white/50 mt-1">Constructed interactive visual dashboards delivering clear business recommendations.</p>
                  </div>
                </div>
              </div>

              {/* Role & Tech Stack */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                    <Users size={16} className="text-emerald-400" /> My Role
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Led data preprocessing, exploratory analysis, ML predictive model training, interactive dashboard construction, and the final insights pitch.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                    <Code2 size={16} className="text-accent-blue" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn", "Streamlit", "Jupyter"].map((tech) => (
                      <span key={tech} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Photo Card */}
              <div className="pt-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] md:aspect-[21/9] relative group shadow-lg max-w-2xl mx-auto">
                  <img
                    src="/assets/intellidata_award.png"
                    alt="IntelliData 2026 1st Prize Trophy Presentation at Sri Eshwar College of Engineering"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4">
                    <p className="text-xs text-white font-bold">🥇 1st Prize Trophy & Certificate Presentation – IntelliData 2026</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Sri Eshwar College of Engineering, Coimbatore • 28-29 September 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 3. 🥈 Runner-Up: Design Thinking Hackathon */}
          <motion.section 
            id="design-thinking"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 scroll-mt-28"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-500/10">
                <Palette size={24} className="text-cyan-400" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Human-Centric Innovation</span>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  🥈 Runner-Up: Design Thinking Hackathon
                </h2>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              {/* Event Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <MapPin size={15} className="text-cyan-400" /> Sri Eshwar College of Engineering, Coimbatore
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-accent-blue" /> 11 April 2026
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-accent-purple" /> Design Sprint Hackathon
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-yellow-400" /> Team Size: 4
                  </span>
                </div>
              </div>

              {/* 5-Stage Framework */}
              <div className="space-y-4 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Compass size={18} className="text-cyan-400" />
                  Our 5-Stage Design Thinking Framework
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 pt-2">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Stage 01</span>
                      <h4 className="text-xs font-bold text-white mt-1">Empathize</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                        Conducted stakeholder interviews and workflow observations to uncover foundational user pain points.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent-blue">Stage 02</span>
                      <h4 className="text-xs font-bold text-white mt-1">Define</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                        Synthesized research into a clear problem statement targeting user bottlenecks and friction points.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent-purple">Stage 03</span>
                      <h4 className="text-xs font-bold text-white mt-1">Ideate</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                        Brainstormed multiple creative solution paths and shortlisted the top concept by impact & feasibility.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Stage 04</span>
                      <h4 className="text-xs font-bold text-white mt-1">Prototype</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                        Constructed high-fidelity wireframes, interaction flows, and an interactive prototype model.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Stage 05</span>
                      <h4 className="text-xs font-bold text-white mt-1">Test & Iterate</h4>
                      <p className="text-[11px] text-white/50 mt-1 leading-relaxed">
                        Gathered feedback from evaluators and users, refining UX usability and interaction ergonomics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Card */}
              <div className="pt-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] md:aspect-[21/9] relative group shadow-lg max-w-2xl mx-auto">
                  <img
                    src="/assets/design_thinking_award.jpg"
                    alt="Design Thinking Hackathon Runner-Up Trophy & Certificate Presentation"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4">
                    <p className="text-xs text-white font-bold">🥈 Runner-Up Trophy & Certificate Presentation – Design Thinking Hackathon</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Sri Eshwar College of Engineering, Coimbatore • 11 April 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. 🥈 2nd Runner-Up: Amrita Vishwa Vidyapeetham */}
          <motion.section 
            id="amrita"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 scroll-mt-28"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/30 text-accent-blue shadow-lg shadow-blue-500/10">
                <Award size={24} className="text-accent-blue" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-accent-blue">National 24h Sprint</span>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  🥈 2nd Runner-Up: Techathon 2.0 (24-Hour Hackathon) | ₹6,000 Cash Prize
                </h2>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

              {/* Event Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <MapPin size={15} className="text-accent-blue" /> Amrita Vishwa Vidyapeetham, Chennai
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-yellow-400" /> Tantrotsav '24 (Techathon 2.0)
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-accent-purple" /> 24-Hour Hackathon
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-emerald-400" /> Team Size: 4 (45+ Shortlisted Teams)
                  </span>
                </div>
                <a 
                  href="https://tantrotsav.amrita.edu/events/6983040f5e25551162272b83" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-bold text-accent-blue hover:underline flex items-center gap-1"
                >
                  View Event Details ↗
                </a>
              </div>

              {/* About & Challenge */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                    <Sparkles size={16} /> About The Event
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Techathon 2.0 was a prestigious national-level 24-hour hackathon hosted by Amrita Vishwa Vidyapeetham during Tantrotsav. More than 45+ finalist teams from across top engineering institutions competed to architect, code, and deploy solutions within 24 continuous hours.
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-purple flex items-center gap-2">
                    <Target size={16} /> The Challenge
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Teams were challenged to build a high-intensity, fully functioning tech product addressing critical modern challenges, balancing innovation, speed of execution, reliable architecture, and pitch quality under strict deadline constraints.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="space-y-4 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Lightbulb size={18} className="text-accent-blue" />
                  Our Prototype & Technical Focus
                </h3>

                <div className="grid gap-4 sm:grid-cols-3 pt-2">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Focus 1
                    </div>
                    <h4 className="text-sm font-semibold text-white">24h Continuous Execution</h4>
                    <p className="text-xs text-white/50 mt-1">Non-stop sprint delivering complete frontend, backend, and data integrations.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-accent-purple font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Focus 2
                    </div>
                    <h4 className="text-sm font-semibold text-white">Scalability & Innovation</h4>
                    <p className="text-xs text-white/50 mt-1">Engineered modular API endpoints and optimized state management for high performance.</p>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-1">
                      <CheckCircle2 size={15} /> Focus 3
                    </div>
                    <h4 className="text-sm font-semibold text-white">Live Working Demo</h4>
                    <p className="text-xs text-white/50 mt-1">Flawless real-time prototype demonstration evaluated directly on stage by jury members.</p>
                  </div>
                </div>
              </div>

              {/* Role & Tech Stack */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                    <Users size={16} className="text-accent-blue" /> My Role
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Handled full-stack development, rapid backend REST API implementation, frontend reactivity, and co-delivered the final stage presentation to the jury.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                    <Code2 size={16} className="text-accent-purple" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Git"].map((tech) => (
                      <span key={tech} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 via-accent-purple/10 to-transparent border border-blue-500/30 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-accent-blue">Official Outcome</span>
                  <h4 className="text-xl font-black text-white flex items-center gap-2">
                    🥈 2nd Runner-Up Winner & ₹6,000 Cash Prize
                  </h4>
                  <p className="text-xs text-white/60">
                    Secured 3rd position among 45+ shortlisted finalist teams with on-stage cheque presentation.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-4 py-2 rounded-2xl bg-accent-blue text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-accent-blue/20">
                    ₹6,000 Cash Prize
                  </span>
                </div>
              </div>

              {/* Photos Gallery */}
              <div className="grid gap-6 md:grid-cols-2 pt-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] relative group shadow-lg">
                  <img
                    src="/assets/hackathon_1.jpg"
                    alt="Collaborative 24-Hour Prototyping Sprint at Amrita Vishwa Vidyapeetham"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <p className="text-xs text-white font-bold">💻 Collaborative 24-Hour Live Prototyping Sprint</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Amrita Vishwa Vidyapeetham, Chennai (Vengal)</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] relative group shadow-lg">
                  <img
                    src="/assets/hackathon_2.jpg"
                    alt="2nd Runner-Up Cheque & Award Presentation Ceremony at Amrita"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <p className="text-xs text-white font-bold">🥈 2nd Runner-Up Award & Cheque Presentation</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Techathon 2.0 • Tantrotsav Award Ceremony</p>
                  </div>
                </div>
              </div>

              {/* Key Learnings */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Rocket size={16} className="text-accent-blue" />
                  Key Learnings & Takeaways
                </h3>
                <ul className="grid gap-3 sm:grid-cols-3 text-xs text-white/70">
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    <span>Delivering a reliable end-to-end full prototype under a continuous 24-hour sprint.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                    <span>Seamless task segregation and real-time modular integration across team members.</span>
                  </li>
                  <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    <span>Demonstrating live prototype value and answering questions clearly on a grand stage.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 5. 🧠 PES University AI Hackathon */}
          <motion.section 
            id="pes-university"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 scroll-mt-28"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/30 text-accent-purple shadow-lg shadow-purple-500/10">
                <Brain size={24} className="text-accent-purple" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-accent-purple">National Level AI Hackathon</span>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  🧠 10-Hour AI Hackathon – Top 10 Finalist (150+ Teams)
                </h2>
              </div>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

              {/* Event Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <MapPin size={15} className="text-accent-purple" /> PES University, Bengaluru
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-accent-blue" /> Great Bengaluru Hackathon / Agentathon
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-yellow-400" /> 10-Hour Intensive AI Sprint
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-emerald-400" /> 150+ Teams Nationwide
                  </span>
                </div>
              </div>

              {/* About & Approach */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-purple flex items-center gap-2">
                    <Sparkles size={16} /> About The Event
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    The Great Bengaluru Hackathon / Agentathon hosted at PES University was a high-stakes AI competition bringing together 150+ top collegiate engineering teams to build autonomous agentic workflows and intelligent applications within 10 hours.
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                    <Target size={16} /> Technical Challenge & Achievement
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Designed and benchmarked intelligent AI systems using prompt engineering, LLM chains, and multi-agent coordination. Successfully cleared the first elimination into the Top 30 cohort and advanced into the grand Top 10 National Finalists.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent-purple">Key Focus Areas & Badges</h4>
                <div className="flex flex-wrap gap-2.5">
                  {["Top 30 Cohort Selection", "Top 10 Grand Finalist", "Agentic AI", "Prompt Engineering", "Multi-Agent Systems", "Fast Prototyping"].map((t) => (
                    <span key={t} className="px-3.5 py-1.5 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-xs font-semibold text-accent-purple">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      ) : (
        /* Technical Articles Tab */
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => navigate("/blog/full-stack-react-scratch")}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-dark-800 p-6 md:p-8 transition-all hover:border-accent-purple/40 hover:-translate-y-1 hover:shadow-2xl cursor-pointer relative overflow-hidden sweep-container"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-accent-purple bg-accent-purple/10">
                  Full Stack Development
                </span>
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
                  Jan 2024
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black text-white group-hover:text-accent-purple transition-colors leading-tight">
                Building a Full Stack React Application from Scratch
              </h3>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Detailed breakdown of building MERN Bookstore and Fresh Mart. How I structured component hierarchy, state management, and backend synchronization.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-wider">
                <Clock size={14} className="text-accent-purple" />
                10 min read
              </span>
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-purple group-hover:text-white transition-colors">
                Read Article <ArrowRight size={16} className="translate-x-0 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
