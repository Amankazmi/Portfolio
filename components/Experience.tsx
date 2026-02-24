"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Award, Terminal, Zap, Code2, Globe, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const EXPERIENCE = [
    {
        role: "Full Stack Developer Intern",
        company: "Red Hawk Consultancy",
        period: "Nov 2025 – Present · 6 months",
        description: "Building and maintaining full-stack web applications for enterprise clients. Responsible for developing pixel-perfect, responsive UIs and integrating them with scalable backend APIs. Delivered two client-facing projects during this internship.",
        achievements: [
            "Built and shipped two complete client projects end-to-end.",
            "Developed high-performance UIs using Next.js and Framer Motion.",
            "Integrated RESTful APIs and optimized front-end rendering pipelines.",
        ],
        icon: <Briefcase className="w-5 h-5 text-white" />,
        accent: "#3b82f6",
        tag: "Current"
    },
    {
        role: "MERN Stack Intern",
        company: "CreArt Solutions",
        period: "July 2025 · 15 days",
        description: "Short-term intensive internship focused on full-stack development using the MERN stack. Gained hands-on experience building scalable web applications and optimizing MongoDB database queries under senior mentorship.",
        achievements: [
            "Built scalable full-stack features using MongoDB, Express, React & Node.js.",
            "Optimized database queries improving application response times.",
            "Collaborated with the team to implement robust REST API endpoints.",
        ],
        icon: <Terminal className="w-5 h-5 text-white" />,
        accent: "#8b5cf6",
        tag: "Completed"
    }
];

const STATS = [
    { value: 2, suffix: "", label: "Internships", icon: <Briefcase size={16} className="text-accent-blue" /> },
    { value: 2, suffix: "+", label: "Client Projects", icon: <Globe size={16} className="text-accent-purple" /> },
    { value: 6, suffix: "+", label: "Months Active", icon: <Zap size={16} className="text-pink-400" /> },
];

const FLOATING_SKILLS = [
    { text: "Next.js", delay: 0 },
    { text: "React", delay: 0.3 },
    { text: "Node.js", delay: 0.6 },
    { text: "MongoDB", delay: 0.9 },
    { text: "Framer Motion", delay: 1.2 },
    { text: "TypeScript", delay: 1.5 },
    { text: "REST APIs", delay: 0.15 },
    { text: "Git", delay: 0.45 },
];

function FloatingSkillBadge({ text, delay }: { text: string; delay: number }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-300 cursor-default"
        >
            {text}
        </motion.span>
    );
}

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-20 md:py-32 relative bg-bg-primary overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Career Path</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-heading text-white tracking-tighter">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Experience</span>
                    </h3>
                </motion.div>

                {/* Main 2-col layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">

                    {/* ── LEFT PANEL ── sticky animated content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:sticky lg:top-32 flex flex-col gap-10"
                    >
                        {/* Intro text */}
                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-blue mb-3">My Journey</p>
                            <h4 className="text-3xl md:text-4xl font-black font-heading text-white tracking-tight leading-snug mb-4">
                                Turning code into{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                                    real-world impact.
                                </span>
                            </h4>
                            <p className="text-white/40 text-sm leading-relaxed">
                                From short intensive sprints to long-term product development — every experience has sharpened my ability to build fast, maintainable, and visually rich web solutions.
                            </p>
                        </div>

                        {/* Animated Stats row */}
                        <div className="grid grid-cols-3 gap-4">
                            {STATS.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                    className="flex flex-col items-center justify-center gap-1 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 transition-colors"
                                >
                                    {s.icon}
                                    <div className="text-2xl font-black font-heading text-white flex items-baseline">
                                        <AnimatedCounter value={s.value} />
                                        <span className="text-accent-blue ml-0.5">{s.suffix}</span>
                                    </div>
                                    <p className="text-[10px] text-white/35 font-medium tracking-wide uppercase text-center">{s.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating skills */}
                        <div>
                            <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
                                <Star size={10} className="text-accent-blue" /> Technologies Used
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {FLOATING_SKILLS.map(s => (
                                    <FloatingSkillBadge key={s.text} text={s.text} delay={s.delay} />
                                ))}
                            </div>
                        </div>

                        {/* Decorative animated orbit rings */}
                        <div className="relative h-32 hidden lg:flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute w-28 h-28 rounded-full border border-accent-blue/15"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                className="absolute w-20 h-20 rounded-full border border-accent-purple/20"
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute w-12 h-12 rounded-full border border-fuchsia-500/20"
                            />
                            <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                <Code2 size={14} className="text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT PANEL ── timeline */}
                    <div ref={containerRef} className="relative">
                        {/* Track */}
                        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/5" />
                        {/* Animated fill */}
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute left-6 top-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-transparent origin-top shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                        />

                        <div className="space-y-16 relative z-10">
                            {EXPERIENCE.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative pl-16"
                                >
                                    {/* Timeline dot */}
                                    <div
                                        className="absolute left-0 top-6 w-12 h-12 rounded-full bg-black border-2 flex items-center justify-center shadow-xl"
                                        style={{ borderColor: exp.accent + "60" }}
                                    >
                                        <div
                                            className="w-7 h-7 rounded-full flex items-center justify-center"
                                            style={{ background: `${exp.accent}20` }}
                                        >
                                            {exp.icon}
                                        </div>
                                        {/* Pulse ring */}
                                        {index === 0 && (
                                            <div
                                                className="absolute inset-0 rounded-full border-2 animate-ping opacity-20"
                                                style={{ borderColor: exp.accent, animationDuration: "3s" }}
                                            />
                                        )}
                                    </div>

                                    {/* Card */}
                                    <div className="relative p-7 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 overflow-hidden group">
                                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />

                                        {/* Accent top line */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                                            style={{ background: `linear-gradient(90deg, ${exp.accent}, transparent)` }}
                                        />

                                        <div className="relative z-10">
                                            {/* Header row */}
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                                <h3 className="text-xl font-bold font-heading text-white">{exp.role}</h3>
                                                <div className="flex items-center gap-2">
                                                    {index === 0 && (
                                                        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold bg-green-500/15 text-green-400 border border-green-500/20">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                            Live
                                                        </span>
                                                    )}
                                                    <Badge
                                                        variant="outline"
                                                        className="text-[10px] border-white/10 text-white/40 bg-transparent"
                                                    >
                                                        {exp.period}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 mb-5" style={{ color: exp.accent }}>
                                                <Briefcase size={14} />
                                                <span className="text-sm font-semibold">{exp.company}</span>
                                            </div>

                                            <p className="text-white/45 text-sm leading-relaxed mb-6">
                                                {exp.description}
                                            </p>

                                            <div className="pt-5 border-t border-white/5">
                                                <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-2 uppercase tracking-wider">
                                                    <Award className="text-accent-purple" size={13} />
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-2.5">
                                                    {exp.achievements.map((a, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: 10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.2 + i * 0.08 }}
                                                            className="flex items-start gap-2.5 text-sm text-white/40"
                                                        >
                                                            <div
                                                                className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                                                                style={{ background: exp.accent }}
                                                            />
                                                            <span className="leading-relaxed">{a}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
