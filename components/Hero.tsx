"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TypewriterEffect } from "./ui/typewriter";
import { FloatingBadge } from "./ui/floating-badge";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { ShaderGradient } from "./ui/shader-gradient";
import { SmoothTyping } from "./ui/smooth-typing";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
    { icon: <Github size={15} />, href: "https://github.com/Amankazmi", label: "GitHub" },
    { icon: <Linkedin size={15} />, href: "https://linkedin.com/in/aman-kazmi", label: "LinkedIn" },
    { icon: <Mail size={15} />, href: "mailto:amankazmi257@gmail.com", label: "Email" },
];

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section id="hero" ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* ── Background layers ── */}

            {/* Shader gradient rays */}
            <ShaderGradient
                colors={["#1e40af", "#7c3aed", "#ec4899", "#0f172a", "#1e3a8a"]}
                speed={0.3}
            />

            {/* Dotted particle grid */}
            <DottedGlowBackground
                darkColor="rgba(255,255,255,0.08)"
                darkGlowColor="rgba(99,102,241,0.7)"
                gap={22}
                radius={1.2}
                opacity={0.4}
                speedMin={0.2}
                speedMax={0.8}
            />

            {/* Large vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-[1]" />

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-[2]" />

            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-[2]" />

            {/* Floating tech badges */}
            <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
                <div className="pointer-events-auto absolute top-[28%] left-[12%]">
                    <FloatingBadge text="React" delay={0.3} yOffset={-15} />
                </div>
                <div className="pointer-events-auto absolute top-[35%] right-[10%]">
                    <FloatingBadge text="Next.js" delay={0.5} xOffset={10} yOffset={-10} />
                </div>
                <div className="pointer-events-auto absolute bottom-[32%] left-[8%]">
                    <FloatingBadge text="Node.js" delay={0.7} yOffset={10} />
                </div>
                <div className="pointer-events-auto absolute bottom-[28%] right-[12%]">
                    <FloatingBadge text="MongoDB" delay={0.9} xOffset={-15} />
                </div>
                <div className="pointer-events-auto absolute top-[55%] left-[20%]">
                    <FloatingBadge text="TypeScript" delay={1.1} yOffset={8} />
                </div>
                <div className="pointer-events-auto absolute top-[20%] right-[22%]">
                    <FloatingBadge text="Tailwind" delay={1.3} xOffset={-5} />
                </div>
            </div>

            {/* ── Main content ── */}
            <motion.div
                style={{ y: yText, opacity }}
                className="relative z-20 flex flex-col items-center gap-4 px-4 sm:px-6 max-w-5xl mx-auto text-center pt-24 w-full"
            >
                {/* Eyebrow with animated typing indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                >
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-[11px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                        Available for hire
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 text-xs text-white/30 font-medium">
                        <span className="w-4 h-[1px] bg-white/20" />
                        Full Stack Developer
                    </span>
                </motion.div>

                {/* Main name heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-heading tracking-tighter leading-[0.95] text-white"
                >
                    <SmoothTyping text="Hi, I'm Aman Kazmi." delay={0.5} speed={0.055} />
                </motion.div>

                {/* Typewriter subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7 }}
                    className="text-base sm:text-lg md:text-xl font-light text-white/50 tracking-wide"
                >
                    <TypewriterEffect
                        words={[
                            "Full Stack Developer",
                            "MERN Stack Engineer",
                            "UI/UX Enthusiast",
                            "Performance-Focused Dev",
                        ]}
                    />
                </motion.div>

                {/* Bio line */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="max-w-md text-xs sm:text-sm text-white/30 leading-relaxed px-2 sm:px-0"
                >
                    Building scalable, performant, and visually rich web applications — from pixel-perfect UIs to robust backend systems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                >
                    {/* PRIMARY */}
                    <Link href="#projects">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative group flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-sm overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(139,92,246,0.55)] transition-shadow duration-300"
                        >
                            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
                            <span className="relative z-10">View Projects</span>
                            <motion.span
                                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <ArrowUpRight size={16} />
                            </motion.span>
                        </motion.button>
                    </Link>

                    {/* SECONDARY */}
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative group flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md text-white/70 hover:text-white text-sm font-semibold transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.07)]"
                        >
                            <motion.span
                                animate={{ y: [0, 3, 0] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <Download size={15} />
                            </motion.span>
                            <span className="relative z-10">Download Resume</span>
                        </motion.button>
                    </a>
                </motion.div>

                {/* Social links row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.7 }}
                    className="flex items-center gap-2 mt-2"
                >
                    {SOCIALS.map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/35 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                    <span className="w-4 h-[1px] bg-white/15 ml-1" />
                    <span className="text-xs text-white/20 font-medium">@Amankazmi</span>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/20 font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/25"
                >
                    <ArrowDown size={18} />
                </motion.div>
            </motion.div>
        </section>
    );
}
