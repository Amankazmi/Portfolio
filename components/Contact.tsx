"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Mail, Github, Linkedin, MapPin, Clock, CheckCircle2, ArrowUpRight, User, MessageSquare } from "lucide-react";
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


                        {/* ── Premium Terminal ASCII Card ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] max-w-xs"
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
                            <div className="relative" style={{ height: "300px" }}>
                                <AsciiArt
                                    src="/ascii_art.jpeg"
                                    resolution={90}
                                    charset="dense"
                                    colored={true}
                                    backgroundColor="#0a0a0f"
                                    inverted={true}
                                    animated={false}
                                    animationStyle="none"
                                    objectFit="contain"
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

                        {/* Social links */}
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold mb-4">Find me on</p>
                            <div className="flex gap-3 flex-wrap">
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
                    </motion.div>

                    {/* RIGHT — Premium Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        {/* Multi-layer glow */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-accent-blue/15 via-accent-purple/10 to-pink-500/10 rounded-3xl blur-2xl pointer-events-none" />

                        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
                            {/* Top rainbow accent line */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500" />

                            <div className="p-7 md:p-9">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.85 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="flex flex-col items-center justify-center py-20 gap-6 text-center"
                                        >
                                            {/* Animated success rings */}
                                            <div className="relative">
                                                <motion.div
                                                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="absolute inset-0 rounded-full bg-green-500/20"
                                                />
                                                <div className="relative w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center">
                                                    <CheckCircle2 size={36} className="text-green-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black font-heading text-white mb-2">Message Sent! 🎉</p>
                                                <p className="text-white/40 text-sm max-w-xs">Thanks for reaching out. I\'ll get back to you within 24 hours.</p>
                                            </div>
                                            <button
                                                onClick={() => setSubmitted(false)}
                                                className="text-xs text-accent-blue/70 hover:text-accent-blue transition-colors underline underline-offset-4 mt-2"
                                            >
                                                Send another message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            className="flex flex-col gap-6"
                                            initial={{ opacity: 1 }}
                                        >
                                            {/* Header */}
                                            <div className="mb-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-1 h-5 rounded-full bg-gradient-to-b from-accent-blue to-accent-purple" />
                                                    <p className="text-white font-black font-heading text-xl tracking-tight">Send a Message</p>
                                                </div>
                                                <p className="text-white/30 text-sm pl-3">I typically respond within 24 hours.</p>
                                            </div>

                                            {/* Name + Email row */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {/* Name */}
                                                <div className="flex flex-col gap-2">
                                                    <label className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${focusedField === "name" ? "text-accent-blue" : "text-white/25"
                                                        }`}>Your Name</label>
                                                    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-white/[0.03] transition-all duration-300 ${focusedField === "name"
                                                            ? "border-accent-blue/50 shadow-[0_0_0_3px_rgba(59,130,246,0.1)] bg-white/[0.05]"
                                                            : "border-white/8 hover:border-white/15"
                                                        }`}>
                                                        <User size={14} className={`shrink-0 transition-colors duration-300 ${focusedField === "name" ? "text-accent-blue" : "text-white/20"
                                                            }`} />
                                                        <input
                                                            type="text"
                                                            required
                                                            placeholder="Aman Kazmi"
                                                            onFocus={() => setFocusedField("name")}
                                                            onBlur={() => setFocusedField(null)}
                                                            className="bg-transparent w-full text-white text-sm placeholder-white/20 focus:outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="flex flex-col gap-2">
                                                    <label className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${focusedField === "email" ? "text-accent-blue" : "text-white/25"
                                                        }`}>Email Address</label>
                                                    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-white/[0.03] transition-all duration-300 ${focusedField === "email"
                                                            ? "border-accent-blue/50 shadow-[0_0_0_3px_rgba(59,130,246,0.1)] bg-white/[0.05]"
                                                            : "border-white/8 hover:border-white/15"
                                                        }`}>
                                                        <Mail size={14} className={`shrink-0 transition-colors duration-300 ${focusedField === "email" ? "text-accent-blue" : "text-white/20"
                                                            }`} />
                                                        <input
                                                            type="email"
                                                            required
                                                            placeholder="hello@example.com"
                                                            onFocus={() => setFocusedField("email")}
                                                            onBlur={() => setFocusedField(null)}
                                                            className="bg-transparent w-full text-white text-sm placeholder-white/20 focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center justify-between">
                                                    <label className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${focusedField === "message" ? "text-accent-blue" : "text-white/25"
                                                        }`}>Message</label>
                                                    <span className="text-[10px] text-white/20 font-mono">markdown supported</span>
                                                </div>
                                                <div className={`flex gap-3 px-4 py-3 rounded-xl border bg-white/[0.03] transition-all duration-300 ${focusedField === "message"
                                                        ? "border-accent-blue/50 shadow-[0_0_0_3px_rgba(59,130,246,0.1)] bg-white/[0.05]"
                                                        : "border-white/8 hover:border-white/15"
                                                    }`}>
                                                    <MessageSquare size={14} className={`shrink-0 mt-0.5 transition-colors duration-300 ${focusedField === "message" ? "text-accent-blue" : "text-white/20"
                                                        }`} />
                                                    <textarea
                                                        required
                                                        rows={5}
                                                        placeholder="Tell me about your project, idea, or just say hi..."
                                                        onFocus={() => setFocusedField("message")}
                                                        onBlur={() => setFocusedField(null)}
                                                        className="bg-transparent w-full text-white text-sm placeholder-white/20 focus:outline-none resize-none leading-relaxed"
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit button */}
                                            <motion.button
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="relative mt-1 w-full py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-3 overflow-hidden group disabled:opacity-60"
                                                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)" }}
                                            >
                                                {/* Shimmer on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                                                {/* Glow */}
                                                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/30 via-accent-purple/30 to-pink-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                                {isSubmitting ? (
                                                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                                                ) : (
                                                    <>
                                                        <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                                        Send Message
                                                    </>
                                                )}
                                            </motion.button>

                                            {/* Privacy note */}
                                            <p className="text-center text-[10px] text-white/20 -mt-2">
                                                🔒 Your information is private and will never be shared.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
