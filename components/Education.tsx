"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GraduationCap, Trophy, CalendarDays, BookOpen } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";

const ACCENTS = [
    { color: "#3b82f6", gradient: "from-blue-600/20 to-cyan-500/5", border: "#3b82f620" },
    { color: "#a855f7", gradient: "from-purple-600/20 to-fuchsia-500/5", border: "#a855f720" },
    { color: "#10b981", gradient: "from-emerald-600/20 to-teal-500/5", border: "#10b98120" },
];

export default function Education() {
    return (
        <section id="education" className="py-32 relative bg-bg-primary overflow-hidden">

            {/* Blobs */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-purple/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Academic Background</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tighter">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Education</span>
                    </h2>
                </motion.div>

                {/* 2-col layout: left decorative panel + right cards */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

                    {/* Left: decorative info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:sticky lg:top-32 flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-3">
                            <BookOpen size={32} className="text-accent-blue" />
                            <p className="text-white/40 text-sm leading-relaxed">
                                A strong technical foundation built through hands-on engineering education — from core computer science fundamentals to advanced software systems and modern practices.
                            </p>
                        </div>

                        {/* Score highlights */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Academic Scores</p>
                            {EDUCATION.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: ACCENTS[i % ACCENTS.length].color }}
                                        />
                                        <span className="text-xs text-white/50 font-medium">
                                            {edu.degree.split(" ")[0]}
                                            {edu.degree.includes("B.E") ? " B.E." : edu.degree.includes("Diploma") ? " Diploma" : ""}
                                        </span>
                                    </div>
                                    <span
                                        className="text-sm font-bold"
                                        style={{ color: ACCENTS[i % ACCENTS.length].color }}
                                    >
                                        {edu.score}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative rings */}
                        <div className="relative h-28 hidden lg:flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                                className="absolute w-24 h-24 rounded-full border border-accent-blue/15"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute w-16 h-16 rounded-full border border-accent-purple/20"
                            />
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                                <GraduationCap size={16} className="text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: education cards */}
                    <div className="flex flex-col gap-5">
                        {EDUCATION.map((edu, index) => {
                            const accent = ACCENTS[index % ACCENTS.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className={`relative rounded-2xl border border-white/8 bg-gradient-to-br ${accent.gradient} overflow-hidden group hover:border-white/15 transition-all duration-500`}>
                                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />

                                        {/* Top accent line */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                                            style={{ background: `linear-gradient(90deg, ${accent.color}, transparent 60%)` }}
                                        />

                                        <div className="relative z-10 p-7 md:p-8">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                                                {/* Icon */}
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                                                    style={{ background: `${accent.color}15`, borderColor: `${accent.color}30` }}
                                                >
                                                    <GraduationCap size={22} style={{ color: accent.color }} />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-grow min-w-0">
                                                    {/* Degree + period */}
                                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                                        <h3 className="text-xl font-bold font-heading text-white tracking-tight">
                                                            {edu.degree}
                                                        </h3>
                                                        <div className="flex items-center gap-1.5 text-xs text-white/35 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full shrink-0">
                                                            <CalendarDays size={10} />
                                                            {edu.period}
                                                        </div>
                                                    </div>

                                                    {/* Institution */}
                                                    <p className="text-sm font-semibold mb-1" style={{ color: accent.color }}>
                                                        {edu.institution}
                                                    </p>
                                                    {edu.university && (
                                                        <p className="text-xs text-white/30 mb-4">{edu.university}</p>
                                                    )}

                                                    {/* Score badge */}
                                                    <div
                                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold border"
                                                        style={{
                                                            color: accent.color,
                                                            borderColor: `${accent.color}35`,
                                                            background: `${accent.color}12`,
                                                        }}
                                                    >
                                                        <Trophy size={13} />
                                                        {edu.score}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
