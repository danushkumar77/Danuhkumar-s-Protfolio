import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Award, Zap, Brain, Rocket, Trophy, Users, Clock, Target, Lightbulb, CheckCircle2, Code2, Sparkles, Palette, Compass } from "lucide-react";

const blogContent = {
  "hackathon-experience": {
    category: "Hackathons",
    title: "My Hackathon Experience 🚀",
    subtitle: "From 1st Prize Victories to Runner-Up Accolades – Key Lessons from High-Stakes Hackathons",
    date: "Sep 2026",
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-lg leading-relaxed text-white/70">
            Participating in hackathons has been one of the most transformative experiences in my engineering journey.
            These competitions tested not just my technical knowledge, but also my problem-solving ability, teamwork, time management, and resilience under pressure.
          </p>
        </section>

        {/* 🥇 1st Prize: FusionX 1.0 */}
        <section id="fusionx" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 shadow-lg shadow-yellow-500/10">
              <Trophy size={22} className="text-yellow-400" />
            </span>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Grand Winner</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                🥇 1st Prize: FusionX 1.0 (Open Innovation) | ₹10,000 Cash Prize
              </h2>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-yellow-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient Background Glow */}
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

            {/* About Event & Challenge */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                  <Sparkles size={16} /> About The Event
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  FusionX 1.0 was a prestigious 24-hour national hackathon featuring a prize pool of ₹50,000+. Teams of four were challenged to conceptualize a real-world issue, architect an end-to-end working software solution, and deliver a live demonstration and pitch to industry judges within a continuous 24-hour sprint.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-purple flex items-center gap-2">
                  <Target size={16} /> The Challenge
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  In the <strong>Open Innovation</strong> track, there was no predefined problem statement. Our team identified critical gaps in modern workflows and tackled them by engineering a scalable, automated, and intelligent solution designed to maximize usability and real-world efficiency for users and communities.
                </p>
              </div>
            </div>

            {/* Our Solution & Key Features */}
            <div className="space-y-4 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Lightbulb size={18} className="text-yellow-400" />
                Our Solution & Architecture
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We designed and engineered a production-ready application that delivers automated workflows, real-time responses, and an intuitive user interface crafted for high accessibility.
              </p>

              <div className="grid gap-4 sm:grid-cols-3 pt-2">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-accent-blue font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle2 size={15} /> Feature 1
                  </div>
                  <h4 className="text-sm font-semibold text-white">Rapid Prototyping & Live Pipeline</h4>
                  <p className="text-xs text-white/50 mt-1">End-to-end functioning prototype built and deployed within the 24-hour timeline.</p>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-accent-purple font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle2 size={15} /> Feature 2
                  </div>
                  <h4 className="text-sm font-semibold text-white">Intelligent Data Processing</h4>
                  <p className="text-xs text-white/50 mt-1">Modular architecture delivering reliable data handling and instant results.</p>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle2 size={15} /> Feature 3
                  </div>
                  <h4 className="text-sm font-semibold text-white">Modern Responsive UI/UX</h4>
                  <p className="text-xs text-white/50 mt-1">Clean, interactive interface ensuring effortless interaction for all users.</p>
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
                  Led core full-stack implementation, front-end state architecture, backend REST API integration, and delivered the live technical demonstration and pitch to the panel of judges.
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

            {/* Outcome & Recognition */}
            <div className="rounded-2xl bg-gradient-to-r from-yellow-500/10 via-accent-blue/10 to-transparent border border-yellow-500/30 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Official Outcome</span>
                <h4 className="text-xl font-black text-white flex items-center gap-2">
                  🏆 1st Prize Winner & ₹10,000 Cash Prize
                </h4>
                <p className="text-xs text-white/60">
                  Judges and organizers specifically commended our project's originality, fully functional live demo, and high real-world applicability.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-4 py-2 rounded-2xl bg-yellow-400 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-yellow-400/20">
                  ₹10,000 Cash Prize
                </span>
              </div>
            </div>

            {/* Image Gallery */}
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

            {/* What I Learned */}
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
        </section>

        {/* 🏆 Amrita Vishwa Vidyapeetham */}
        <section id="amrita" className="space-y-8 scroll-mt-28">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="text-accent-blue" />
            🥈 24-Hour Hackathon – 2nd Runner-Up (₹6000 Cash Prize)
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
              <span className="flex items-center gap-2 text-sm text-white/50">
                <MapPin size={16} /> Amrita Vishwa Vidyapeetham, Chennai
              </span>
              <a href="https://tantrotsav.amrita.edu/events/6983040f5e25551162272b83" target="_blank" rel="noreferrer" className="text-xs font-bold text-accent-blue hover:underline">
                View Event Details
              </a>
            </div>
            <p className="text-white/60">This was a 24-hour national-level hackathon where more than 45+ teams were selected for the final round.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-accent-blue/10 p-4 border border-accent-blue/20">
                <h4 className="text-sm font-bold text-accent-blue uppercase tracking-wider mb-2">Achievement</h4>
                <p className="text-white/80 font-medium">🥈 Secured 2nd Runner-Up</p>
                <p className="text-white/80 font-medium">💰 Won ₹6000 Cash Prize</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Focus Areas</h4>
                <ul className="text-xs text-white/60 space-y-1 list-disc list-inside">
                  <li>Continuous 24h intensity</li>
                  <li>Scalability & Innovation</li>
                  <li>Ready Prototype</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-[4/3] relative group">
                <img
                  src="/assets/hackathon_1.jpg"
                  alt="Coding at Hackathon"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-center">
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Collaborative Prototyping Phase</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-[4/3] relative group">
                <img
                  src="/assets/hackathon_2.jpg"
                  alt="Receiving Hackathon Award"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-2 text-center">
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">2nd Runner-Up Award Presentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🥈 Runner-Up: Design Thinking Hackathon */}
        <section id="design-thinking" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-500/10">
              <Palette size={22} className="text-cyan-400" />
            </span>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Human-Centric Innovation</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                🥈 Runner-Up: Design Thinking Hackathon
              </h2>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient Background Glow */}
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

            {/* Organiser Banner */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="text-white/70">
                <strong className="text-white">Organised by:</strong> Sri Eshwar College of Engineering, Coimbatore.
              </p>
              <span className="px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold tracking-wider shrink-0 text-center">
                Track: User Experience & Design Thinking
              </span>
            </div>

            {/* About Event & Problem Statement */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Sparkles size={16} /> About The Event
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  A Design Thinking Hackathon evaluates how deeply teams understand users and architect solutions centered around human needs, beyond raw coding. Teams followed a structured design framework to take a real-world problem from initial field observation to a validated, high-fidelity prototype.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                  <Target size={16} /> The Problem Statement
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our team investigated critical workflow pain points for target users, identifying daily friction, accessibility hurdles, and manual overhead to formulate an empathetic, human-centric design intervention.
                </p>
              </div>
            </div>

            {/* 5-Stage Design Thinking Process */}
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
                      Conducted stakeholder interviews, surveys, and workflow observations to discover core user frustrations.
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

            {/* My Role & Skills */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                  <Users size={16} className="text-cyan-400" /> My Role
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Contributed across user research, empathy mapping, ideation workshops, UI/UX prototyping, and co-delivered the final design presentation and live prototype walkthrough.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                  <Palette size={16} className="text-accent-purple" /> Methodologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Design Thinking", "User Research", "Wireframing", "UI/UX Prototyping", "Figma", "Usability Testing", "Empathy Mapping"].map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome & Recognition */}
            <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 via-accent-blue/10 to-transparent border border-cyan-500/30 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Official Outcome</span>
                <h4 className="text-xl font-black text-white flex items-center gap-2">
                  🥈 Runner-Up Award (2nd Place)
                </h4>
                <p className="text-xs text-white/60">
                  Recognized by the panel for exceptional user empathy, structured problem breakdown, and prototype design quality.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-4 py-2 rounded-2xl bg-cyan-400 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-400/20">
                  Runner-Up Award
                </span>
              </div>
            </div>

            {/* Image Card */}
            <div className="pt-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] md:aspect-[21/9] relative group shadow-lg max-w-2xl mx-auto">
                <img
                  src="/assets/design_thinking_award.jpg"
                  alt="Design Thinking Hackathon Runner-Up Trophy & Certificate Award at Sri Eshwar College of Engineering"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4">
                  <p className="text-xs text-white font-bold">🥈 Runner-Up Trophy & Certificate Presentation – Design Thinking Hackathon</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Sri Eshwar College of Engineering, Coimbatore • 11 April 2026</p>
                </div>
              </div>
            </div>

            {/* What I Learned */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Rocket size={16} className="text-cyan-400" />
                Key Learnings & Takeaways
              </h3>
              <ul className="grid gap-3 sm:grid-cols-3 text-xs text-white/70">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>Putting user needs and behavior first before deciding on technical implementation.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                  <span>Structuring complex, unstructured problems into intuitive and logical product narratives.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                  <span>Gathering evaluator feedback and rapidly iterating prototype UX under time constraints.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🥇 1st Prize: IntelliData 2026 */}
        <section id="intellidata" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10">
              <Trophy size={22} className="text-emerald-400" />
            </span>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Data Science Champion</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                🥇 1st Prize: IntelliData 2026 | Industry Insight Challenge & Data Science Hackathon
              </h2>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 via-white/[0.02] to-transparent p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient Background Glow */}
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

            {/* About Event & Problem Statement */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Sparkles size={16} /> About The Event
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  IntelliData 2026 was a competitive two-day event combining an Industry Insight Challenge with a Data Science Hackathon. Teams worked with real-world industry datasets to uncover hidden patterns, engineer predictive models, and deliver data-driven business insights to a technical jury.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent-blue flex items-center gap-2">
                  <Target size={16} /> The Problem Statement
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our team tackled complex multivariate industry datasets to discover critical correlations and build high-precision predictive models, translating raw unstructured data into actionable optimization strategies for industry stakeholders.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="space-y-4 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Lightbulb size={18} className="text-emerald-400" />
                Our End-to-End Data Science Approach
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
                  <h4 className="text-sm font-semibold text-white">Storytelling & Dashboard</h4>
                  <p className="text-xs text-white/50 mt-1">Constructed interactive visual dashboards delivering clear business recommendations.</p>
                </div>
              </div>
            </div>

            {/* My Role & Tech Stack */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                  <Users size={16} className="text-emerald-400" /> My Role
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Led data preprocessing, exploratory data analysis, machine learning model training & cross-validation, and delivered the final insights presentation to the panel of judges.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                  <Code2 size={16} className="text-accent-blue" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Matplotlib", "Seaborn", "Streamlit", "Jupyter Notebook"].map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome & Recognition */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 via-accent-blue/10 to-transparent border border-emerald-500/30 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Official Outcome</span>
                <h4 className="text-xl font-black text-white flex items-center gap-2">
                  🏆 1st Prize Winner – IntelliData 2026
                </h4>
                <p className="text-xs text-white/60">
                  The judges highly commended our predictive model accuracy, depth of statistical analysis, and business storytelling quality.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-4 py-2 rounded-2xl bg-emerald-400 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-400/20">
                  1st Prize Champion
                </span>
              </div>
            </div>

            {/* Image Card */}
            <div className="pt-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10] md:aspect-[21/9] relative group shadow-lg max-w-2xl mx-auto">
                <img
                  src="/assets/intellidata_award.png"
                  alt="IntelliData 2026 1st Prize Trophy Presentation at Sri Eshwar College of Engineering"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4">
                  <p className="text-xs text-white font-bold">🥇 1st Prize Award & Trophy Presentation – IntelliData 2026</p>
                  <p className="text-[10px] text-white/50 mt-0.5">Sri Eshwar College of Engineering, Coimbatore • 28-29 September 2026</p>
                </div>
              </div>
            </div>

            {/* What I Learned */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Rocket size={16} className="text-emerald-400" />
                Key Learnings & Takeaways
              </h3>
              <ul className="grid gap-3 sm:grid-cols-3 text-xs text-white/70">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>Turning raw complex data into actionable insights that non-technical business leaders can implement.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                  <span>Comparing and benchmarking multiple ML algorithms rigorously with fair cross-validation metrics.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                  <span>Presenting analytical findings through structured visual storytelling and interactive reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🧠 PES University */}
        <section id="pes-university" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/30 text-accent-purple shadow-lg shadow-purple-500/10">
              <Brain size={22} className="text-accent-purple" />
            </span>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-accent-purple">National Level AI Hackathon</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                🧠 10-Hour AI Hackathon – Top 10 Finalist
              </h2>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
              <span className="flex items-center gap-2 text-sm text-white/50">
                <MapPin size={16} /> PES University, Bengaluru
              </span>
              <span className="px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs text-accent-purple font-bold">
                Agentathon / AI Track
              </span>
            </div>
            <p className="text-white/60">Competitive AI-based hackathon competing against 150+ national collegiate teams.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs text-accent-purple font-bold">Top 30 Selection</span>
              <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs text-accent-blue font-bold">Top 10 Finalist</span>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "full-stack-react-scratch": {
    category: "Full Stack Development",
    title: "Building a Full Stack React Application from Scratch",
    subtitle: "A technical breakdown of component architecture, state management, and backend synchronization.",
    date: "Jan 2024",
    content: (
      <div className="space-y-10">
        <p className="text-lg text-white/70 italic border-l-4 border-accent-blue pl-6">
          "This breakdown is based on my experience building the MERN Bookstore, Fresh Mart, and the Teacher-Student Management System."
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Project Case Studies</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-accent-blue">MERN Bookstore</h3>
              <p className="text-sm text-white/50 mt-2">Focused on secure checkout and dynamic catalog management.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-accent-purple">Fresh Mart</h3>
              <p className="text-sm text-white/50 mt-2">Inventory tracking and real-world retail workflow simulation.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold">Key Technical Explorations:</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="mt-1 h-5 w-5 rounded bg-accent-blue/20 flex items-center justify-center shrink-0">
                <Zap size={14} className="text-accent-blue" />
              </div>
              <div>
                <h4 className="font-bold">Designing REST APIs</h4>
                <p className="text-sm text-white/50">Implementing scalable endpoints with robust validation for applications like the Teacher-Student system.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 h-5 w-5 rounded bg-accent-purple/20 flex items-center justify-center shrink-0">
                <Brain size={14} className="text-accent-purple" />
              </div>
              <div>
                <h4 className="font-bold">Authentication in MERN Stack</h4>
                <p className="text-sm text-white/50">Deep dive into role-based authentication (Teacher/Student) and secure data handling.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    )
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const post = blogContent[slug];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <Link to="/blog" className="mt-6 inline-block text-accent-blue">Return to Blog</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl px-4"
    >
      <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
        <ArrowLeft size={14} /> Back to Blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent-blue mb-4">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="text-white/30">{post.date}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{post.title}</h1>
        <p className="mt-4 text-xl text-white/50">{post.subtitle}</p>
      </header>

      <div className="prose prose-invert max-w-none">
        {post.content}
      </div>
    </motion.div>
  );
}
