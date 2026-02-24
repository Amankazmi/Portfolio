"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";
import { SKILLS } from "@/data/portfolio";
import { LayoutDashboard, Server, Database, Cloud, Code2, Zap } from "lucide-react";

const CATEGORIES = [
    { key: "Languages", label: "Languages", icon: <Code2 size={16} />, accent: "#f59e0b", gradient: "from-amber-500/15 to-yellow-500/5" },
    { key: "Frontend", label: "Frontend", icon: <LayoutDashboard size={16} />, accent: "#3b82f6", gradient: "from-blue-600/15 to-cyan-500/5" },
    { key: "Backend", label: "Backend", icon: <Server size={16} />, accent: "#a855f7", gradient: "from-purple-600/15 to-fuchsia-500/5" },
    { key: "Databases", label: "Databases", icon: <Database size={16} />, accent: "#10b981", gradient: "from-emerald-600/15 to-teal-500/5" },
    { key: "DevOps & Tools", label: "DevOps & Tools", icon: <Cloud size={16} />, accent: "#ec4899", gradient: "from-pink-600/15 to-rose-500/5" },
];

const PROFICIENCY_SKILLS = [
    { name: "React / Next.js", level: 95, accent: "#3b82f6" },
    { name: "Node.js / Express", level: 88, accent: "#a855f7" },
    { name: "MongoDB", level: 85, accent: "#10b981" },
    { name: "TypeScript", level: 82, accent: "#f59e0b" },
    { name: "Tailwind CSS", level: 90, accent: "#3b82f6" },
    { name: "Framer Motion", level: 78, accent: "#ec4899" },
];

function ProfBar({ name, level, accent, delay }: { name: string; level: number; accent: string; delay: number }) {
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
                <span className="text-white/60 font-medium">{name}</span>
                <span className="font-bold" style={{ color: accent }}>{level}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${accent}90, ${accent})` }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredSkills = activeCategory
        ? SKILLS.filter(s => s.category === activeCategory)
        : SKILLS;

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-bg-primary">
            <div className="shader-grain" />

            {/* Blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Technical Arsenal</p>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tighter">
                            Skills &amp;{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                                Expertise
                            </span>
                        </h2>
                        <p className="text-white/30 text-sm max-w-xs">
                            {SKILLS.length}+ technologies across the full stack.
                        </p>
                    </div>
                </motion.div>

                {/* Main 2-col layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">

                    {/* LEFT — Category filter + skill tags */}
                    <div className="flex flex-col gap-6">

                        {/* Category filter pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap gap-2"
                        >
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${activeCategory === null ? "bg-white/10 border-white/25 text-white" : "border-white/8 bg-white/[0.02] text-white/35 hover:text-white/60 hover:border-white/15"}`}
                            >
                                All
                            </button>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key === activeCategory ? null : cat.key)}
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300"
                                    style={activeCategory === cat.key
                                        ? { background: cat.accent + "20", borderColor: cat.accent + "50", color: cat.accent }
                                        : { background: "transparent", borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }
                                    }
                                >
                                    <span style={{ color: activeCategory === cat.key ? cat.accent : "rgba(255,255,255,0.25)" }}>{cat.icon}</span>
                                    {cat.label}
                                </button>
                            ))}
                        </motion.div>

                        {/* Skill tag cloud */}
                        <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 min-h-[280px]">
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                            <div className="flex flex-wrap gap-2.5">
                                {filteredSkills.map((skill, i) => {
                                    const cat = CATEGORIES.find(c => c.key === skill.category);
                                    return (
                                        <motion.span
                                            key={skill.name}
                                            layout
                                            initial={{ opacity: 0, scale: 0.75 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.75 }}
                                            transition={{ delay: i * 0.04, duration: 0.35 }}
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border cursor-default transition-colors duration-200"
                                            style={{
                                                background: cat ? cat.accent + "10" : "rgba(255,255,255,0.03)",
                                                borderColor: cat ? cat.accent + "30" : "rgba(255,255,255,0.08)",
                                                color: "rgba(255,255,255,0.65)",
                                            }}
                                        >
                                            <span
                                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                                style={{ background: cat?.accent ?? "#555" }}
                                            />
                                            {skill.name}
                                        </motion.span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Category breakdown */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {CATEGORIES.map((cat, i) => {
                                const count = SKILLS.filter(s => s.category === cat.key).length;
                                return (
                                    <motion.button
                                        key={cat.key}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        onClick={() => setActiveCategory(cat.key === activeCategory ? null : cat.key)}
                                        className={`flex items-center gap-2 p-3 rounded-xl border transition-all duration-300 text-left ${activeCategory === cat.key ? "bg-white/8 border-white/15" : "bg-white/[0.02] border-white/6 hover:bg-white/[0.05]"}`}
                                    >
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ background: cat.accent + "18", color: cat.accent }}
                                        >
                                            {cat.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50 font-medium leading-none mb-0.5">{cat.label}</p>
                                            <p className="text-sm font-bold text-white">{count}</p>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT — Proficiency bars */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-8"
                    >
                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />

                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-accent-blue via-accent-purple to-transparent opacity-60" />

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap size={16} className="text-accent-blue" />
                                <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold">Core Proficiency</p>
                            </div>

                            {PROFICIENCY_SKILLS.map((skill, i) => (
                                <ProfBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    accent={skill.accent}
                                    delay={0.1 + i * 0.1}
                                />
                            ))}

                            {/* Divider + a few highlighted highlights */}
                            <div className="pt-4 border-t border-white/6">
                                <p className="text-[10px] uppercase tracking-widest text-white/20 font-semibold mb-4">Also proficient in</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Supabase", "Firebase", "MySQL", "Docker", "Git", "Vercel", "Shadcn UI", "EJS"].map(s => (
                                        <span
                                            key={s}
                                            className="px-2.5 py-1 rounded-lg text-xs text-white/40 border border-white/8 bg-white/[0.02] hover:text-white/60 transition-colors"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
