"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Mail, Github, Linkedin, MapPin, Clock, CheckCircle2, ArrowUpRight } from "lucide-react";
import { AsciiArt } from "@/components/ui/ascii-art";
import { PERSONAL_INFO } from "@/data/portfolio";

const CONTACT_ITEMS = [
    {
        icon: <Mail size={16} />,
        label: "Email",
        value: PERSONAL_INFO.email,
        href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
        icon: <MapPin size={16} />,
        label: "Location",
        value: "Jamnagar, Gujarat, India",
        href: null,
    },
    {
        icon: <Clock size={16} />,
        label: "Availability",
        value: "Open to Opportunities",
        href: null,
        badge: true,
    },
];

const SOCIALS = [
    { icon: <Github size={16} />, label: "GitHub", href: PERSONAL_INFO.github },
    { icon: <Linkedin size={16} />, label: "LinkedIn", href: PERSONAL_INFO.linkedin },
    { icon: <Mail size={16} />, label: "Email", href: `mailto:${PERSONAL_INFO.email}` },
];

type FieldId = "name" | "email" | "message";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<FieldId | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1800);
    };

    const inputBase = "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-accent-blue/60 focus:bg-white/[0.05] transition-all duration-300";

    return (
        <section id="contact" className="py-20 md:py-32 relative bg-bg-primary overflow-hidden">

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/8 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tighter">
                        Let&apos;s Build{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                            Together.
                        </span>
                    </h2>
                </motion.div>

                {/* 2-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 items-start">

                    {/* LEFT — contact info panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-8"
                    >
                        {/* Intro */}
                        <div>
                            <p className="text-white/45 text-base leading-relaxed mb-6">
                                Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open. I&apos;ll get back to you as soon as possible.
                            </p>

                            {/* Contact items */}
                            <div className="flex flex-col gap-3">
                                {CONTACT_ITEMS.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mb-0.5">{item.label}</p>
                                                    <p className="text-sm text-white/65 group-hover:text-white transition-colors truncate">{item.value}</p>
                                                </div>
                                                <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 ml-auto shrink-0 transition-colors" />
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.badge ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-accent-purple/10 border border-accent-purple/20 text-accent-purple"}`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mb-0.5">{item.label}</p>
                                                    <div className="flex items-center gap-2">
                                                        {item.badge && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                                                        <p className="text-sm text-white/65">{item.value}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social links */}
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mb-4">Find me on</p>
                            <div className="flex gap-3">
                                {SOCIALS.map((s, i) => (
                                    <motion.a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white/40 hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 text-sm"
                                    >
                                        {s.icon}
                                        <span>{s.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* ── Premium Terminal ASCII Card ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f]"
                        >
                            {/* Outer gradient glow */}
                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent-blue/30 via-accent-purple/20 to-pink-500/10 -z-10" />

                            {/* Terminal header bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/8">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[10px] font-mono text-white/25 tracking-widest">~/aman-kazmi — zsh</span>
                                <div className="w-12" />
                            </div>

                            {/* ASCII Art */}
                            <div className="relative" style={{ height: "220px" }}>
                                <AsciiArt
                                    src="/ascii_art.jpeg"
                                    resolution={90}
                                    charset="dense"
                                    colored={true}
                                    backgroundColor="#0a0a0f"
                                    inverted={true}
                                    animated={false}
                                    animationStyle="none"
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                                {/* Scan-line overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-20"
                                    style={{
                                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)",
                                    }}
                                />
                                {/* Bottom shimmer fade */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                            </div>

                            {/* Terminal output lines */}
                            <div className="px-4 pb-4 font-mono">
                                <p className="text-[11px] text-accent-blue/80 mb-1">$ whoami</p>
                                <p className="text-[11px] text-white/60 mb-2 pl-2">aman_kazmi <span className="text-white/25">// Full Stack Developer</span></p>
                                <p className="text-[11px] text-accent-blue/80 mb-1">$ status</p>
                                <p className="text-[11px] text-green-400/80 mb-3 pl-2 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                                    open_to_opportunities=true
                                </p>
                                <p className="text-[11px] text-white/25 flex items-center gap-1">
                                    <span className="text-accent-blue/60">▶</span>
                                    <span className="animate-pulse">_</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Glow behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-2xl opacity-40 pointer-events-none" />

                        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 md:p-10">

                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-accent-blue via-accent-purple to-transparent opacity-60" />

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center">
                                            <CheckCircle2 size={30} className="text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white mb-2">Message Sent!</p>
                                            <p className="text-white/40 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-xs text-accent-blue hover:underline mt-2"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5"
                                        initial={{ opacity: 1 }}
                                    >
                                        <div className="mb-2">
                                            <p className="text-white font-bold text-lg">Send a message</p>
                                            <p className="text-white/30 text-sm">I typically respond within 24 hours.</p>
                                        </div>

                                        {/* Name + Email row */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className={`text-xs font-semibold uppercase tracking-wider transition-colors ${focusedField === "name" ? "text-accent-blue" : "text-white/30"}`}>
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Aman Kazmi"
                                                    onFocus={() => setFocusedField("name")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className={inputBase}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className={`text-xs font-semibold uppercase tracking-wider transition-colors ${focusedField === "email" ? "text-accent-blue" : "text-white/30"}`}>
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="hello@example.com"
                                                    onFocus={() => setFocusedField("email")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className={inputBase}
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className={`text-xs font-semibold uppercase tracking-wider transition-colors ${focusedField === "message" ? "text-accent-blue" : "text-white/30"}`}>
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Tell me about your project, idea, or just say hi..."
                                                onFocus={() => setFocusedField("message")}
                                                onBlur={() => setFocusedField(null)}
                                                className={`${inputBase} resize-none`}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-sm flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-60 transition-opacity"
                                        >
                                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
