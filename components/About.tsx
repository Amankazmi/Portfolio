"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./ui/animated-counter";
import Image from "next/image";
import { GlowingEffect } from "./ui/glowing-effect";
import {
    GraduationCap, Briefcase, TerminalSquare, Sparkles,
    Code2, Layers, Cpu, Globe
} from "lucide-react";

const TIMELINE = [
    {
        icon: <Briefcase className="w-4 h-4" />,
        title: "Full Stack Developer Intern",
        company: "Red Hawk Consultancy",
        date: "Nov 2025 – Present",
        accent: "#3b82f6",
    },
    {
        icon: <Briefcase className="w-4 h-4" />,
        title: "MERN Stack Intern",
        company: "CreArt Solutions",
        date: "July 2025 · 15 days",
        accent: "#a855f7",
    },
    {
        icon: <GraduationCap className="w-4 h-4" />,
        title: "B.E. Information Technology",
        company: "L.D. College of Engineering",
        date: "2023 – 2026 (Expected)",
        accent: "#3b82f6",
    },
    {
        icon: <TerminalSquare className="w-4 h-4" />,
        title: "Diploma in Computer Engineering",
        company: "Gujarat Technical Board",
        date: "2020 – 2023",
        accent: "#6b7280",
    },
];

const STATS = [
    { label: "Projects Completed", value: 15, suffix: "+", icon: <Layers size={16} className="text-accent-blue" /> },
    { label: "Technologies Used", value: 20, suffix: "+", icon: <Cpu size={16} className="text-accent-purple" /> },
    { label: "Months of Experience", value: 12, suffix: "+", icon: <Globe size={16} className="text-pink-400" /> },
];

const TRAITS = ["Problem Solver", "Clean Code Advocate", "UI Perfectionist", "Fast Learner"];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-bg-primary section-fade-edge">
            {/* Ambient blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/6 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/6 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">

                    {/* ── LEFT COLUMN ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-8"
                    >
                        {/* ── Premium Photo Card ── */}
                        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                            {/* Outer glow ring */}
                            <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-accent-blue via-accent-purple to-pink-500 opacity-60 blur-sm" />
                            <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-accent-blue via-accent-purple to-pink-500 opacity-30" />

                            {/* Card */}
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#09090b]" style={{ height: "min(420px, 72vw)" }}>
                                {/* Photo */}
                                <Image
                                    src="/my_photo.jpg"
                                    alt="Aman Kazmi"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />

                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                                {/* Corner decorations */}
                                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent-blue/60 rounded-tl-lg" />
                                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent-purple/60 rounded-tr-lg" />

                                {/* Floating tech badges */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="absolute top-4 right-4 flex flex-col gap-2"
                                >
                                    {["Next.js", "React", "Node.js"].map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/60 border border-white/15 text-white/70 backdrop-blur-md">
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>

                                {/* Name + status badge */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-white font-black font-heading text-lg tracking-tight leading-tight">Aman Kazmi</p>
                                        <p className="text-white/50 text-xs font-medium">Full Stack Developer</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] text-green-400 font-semibold">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Who I Am header */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles size={14} className="text-accent-blue" />
                                <p className="text-xs tracking-[0.25em] uppercase text-accent-blue font-bold">Who I Am</p>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-white tracking-tighter leading-tight mb-5">
                                Engineering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-violet-400 to-accent-purple">
                                    Digital Futures.
                                </span>
                            </h2>
                            <p className="text-white/45 text-base leading-relaxed">
                                I&apos;m a passionate Full Stack Developer from Jamnagar, India, specializing in the MERN stack. I build fast, scalable, and visually rich web applications — combining clean architecture with pixel-perfect interfaces that users love.
                            </p>
                        </div>

                        {/* Trait pills */}
                        <div className="flex flex-wrap gap-2">
                            {TRAITS.map((trait, i) => (
                                <motion.span
                                    key={trait}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/[0.04] text-white/50 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                                >
                                    {trait}
                                </motion.span>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/8">
                            {STATS.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    className="flex flex-col items-center gap-1 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-center"
                                >
                                    {stat.icon}
                                    <div className="text-3xl font-black font-heading text-white flex items-baseline gap-0.5">
                                        <AnimatedCounter value={stat.value} />
                                        <span className="text-accent-blue text-xl">{stat.suffix}</span>
                                    </div>
                                    <p className="text-[10px] text-white/30 uppercase tracking-wider font-semibold leading-tight">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT COLUMN — Journey timeline card ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        className="relative lg:sticky lg:top-24"
                    >
                        {/* Ambient glow behind card */}
                        <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

                        <div className="relative rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md overflow-hidden">
                            <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={3} />

                            {/* Card top accent */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-violet-500 to-accent-purple opacity-70" />

                            <div className="p-8 md:p-10">
                                {/* Timeline header */}
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-8 h-8 rounded-lg bg-accent-purple/15 border border-accent-purple/25 flex items-center justify-center">
                                        <Code2 size={16} className="text-accent-purple" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-semibold">Career + Education</p>
                                        <h4 className="text-xl font-bold text-white font-heading">The Journey</h4>
                                    </div>
                                </div>

                                {/* Timeline items */}
                                <div className="relative">
                                    {/* Track line */}
                                    <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple/50 to-transparent" />

                                    <div className="space-y-8">
                                        {TIMELINE.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                viewport={{ once: true, margin: "-30px" }}
                                                transition={{ delay: 0.1 + index * 0.12, duration: 0.55 }}
                                                className="relative flex items-start gap-5 group"
                                            >
                                                {/* dot */}
                                                <div
                                                    className="relative z-10 w-8 h-8 rounded-full border-2 bg-black shrink-0 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform"
                                                    style={{ borderColor: item.accent + "60", color: item.accent }}
                                                >
                                                    {item.icon}
                                                    {index === 0 && (
                                                        <div
                                                            className="absolute inset-0 rounded-full border-2 animate-ping opacity-20"
                                                            style={{ borderColor: item.accent, animationDuration: "3s" }}
                                                        />
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/12 transition-all duration-300">
                                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                        <p className="text-sm font-bold text-white">{item.title}</p>
                                                        <span
                                                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                                            style={{ color: item.accent, background: item.accent + "15" }}
                                                        >
                                                            {item.date}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs font-medium" style={{ color: item.accent + "cc" }}>{item.company}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom CTA */}
                                <div className="mt-10 pt-8 border-t border-white/8">
                                    <p className="text-xs text-white/25 uppercase tracking-widest font-semibold mb-4">Currently building</p>
                                    <div className="flex items-center gap-3 p-4 rounded-xl border border-green-500/15 bg-green-500/5">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                                        <div>
                                            <p className="text-sm font-semibold text-white">Full Stack Developer Intern</p>
                                            <p className="text-xs text-green-400/70">Red Hawk Consultancy · Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
