"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Loader2, Mail, Github, Linkedin, MapPin, Clock, CheckCircle2, ArrowUpRight, User, MessageSquare, Globe, Sparkles, Zap } from "lucide-react";
import { AsciiArt } from "@/components/ui/ascii-art";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Phone } from "lucide-react";

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
    {
        icon: <Github size={20} />,
        label: "GitHub",
        handle: "@Amankazmi",
        description: "Open source & projects",
        href: PERSONAL_INFO.github,
        color: "#e2e8f0",
        glow: "rgba(226,232,240,0.15)",
        border: "rgba(226,232,240,0.2)",
        bg: "rgba(226,232,240,0.05)",
    },
    {
        icon: <Linkedin size={20} />,
        label: "LinkedIn",
        handle: "aman-kazmi",
        description: "Professional network",
        href: PERSONAL_INFO.linkedin,
        color: "#0ea5e9",
        glow: "rgba(14,165,233,0.2)",
        border: "rgba(14,165,233,0.3)",
        bg: "rgba(14,165,233,0.06)",
    },
    {
        icon: <Mail size={20} />,
        label: "Email",
        handle: "amankazmi257",
        description: "Drop me a message",
        href: `mailto:${PERSONAL_INFO.email}`,
        color: "#a855f7",
        glow: "rgba(168,85,247,0.2)",
        border: "rgba(168,85,247,0.3)",
        bg: "rgba(168,85,247,0.06)",
    },
];

type FieldId = "name" | "email" | "phone" | "message";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<FieldId | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setIsSubmitting(true);
        setError(null);
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setSubmitted(true);
        } catch (err) {
            console.error("EmailJS error:", err);
            setError("Something went wrong. Please try emailing me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                <p className="text-[11px] text-white/60 mb-2 pl-2">aman_kazmi <span className="text-white/25">{`//`} Full Stack Developer</span></p>
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

                    {/* RIGHT COLUMN CONTAINER */}
                    <div className="flex flex-col gap-6 w-full lg:max-w-xl mx-auto lg:mx-0 w-full lg:ml-auto">
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
                                                    <p className="text-white/40 text-sm max-w-xs">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
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
                                                ref={formRef}
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

                                                {/* Name, Email, Phone row */}
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
                                                                name="user_name"
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
                                                                name="user_email"
                                                                required
                                                                placeholder="hello@example.com"
                                                                onFocus={() => setFocusedField("email")}
                                                                onBlur={() => setFocusedField(null)}
                                                                className="bg-transparent w-full text-white text-sm placeholder-white/20 focus:outline-none"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Phone Number (Full Width in Grid) */}
                                                    <div className="flex flex-col gap-2 sm:col-span-2">
                                                        <label className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${focusedField === "phone" ? "text-accent-blue" : "text-white/25"
                                                            }`}>Phone Number (Optional)</label>
                                                        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border bg-white/[0.03] transition-all duration-300 ${focusedField === "phone"
                                                            ? "border-accent-blue/50 shadow-[0_0_0_3px_rgba(59,130,246,0.1)] bg-white/[0.05]"
                                                            : "border-white/8 hover:border-white/15"
                                                            }`}>
                                                            <Phone size={14} className={`shrink-0 transition-colors duration-300 ${focusedField === "phone" ? "text-accent-blue" : "text-white/20"
                                                                }`} />
                                                            <input
                                                                type="tel"
                                                                name="user_phone"
                                                                placeholder="+1 (555) 000-0000"
                                                                onFocus={() => setFocusedField("phone")}
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
                                                            name="message"
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

                                                {/* Error banner */}
                                                {error && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -6 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-center text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-4 -mt-2"
                                                    >
                                                        {error}
                                                    </motion.p>
                                                )}

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

                        {/* ── Extra Decorative Bento Below Form ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-6 relative group w-full"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 overflow-hidden w-full">
                                {/* Decorative dot matrix background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:6px_6px] opacity-10 transform rotate-12 -translate-y-8 translate-x-8 pointer-events-none" />

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10 w-full">
                                    {/* Left Side: Location & Status */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center overflow-hidden shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <Globe size={20} className="text-accent-blue group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white/90">Based in India</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                                <p className="text-[11px] text-white/40 font-mono tracking-wide">IST (UTC+5:30) · Online</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                    <div className="sm:hidden w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent -my-2" />

                                    {/* Right Side: Current Focus */}
                                    <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Current Focus</p>
                                        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg w-full sm:w-auto">
                                            <Sparkles size={14} className="text-accent-purple animate-pulse shrink-0" />
                                            <p className="text-[11px] text-white/70 font-medium truncate">Building modern web apps</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── Let's Build Together Bento ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group w-full"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden w-full">
                                {/* Diagonal subtle lines background */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }} />

                                <div className="p-6 relative z-10">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2">Collaboration</p>
                                            <h3 className="text-xl font-bold font-heading text-white tracking-tight">Let&apos;s build together</h3>
                                            <p className="text-sm text-white/40 mt-1 leading-relaxed">Available for freelance opportunities and exciting full-stack projects.</p>
                                        </div>
                                        {/* Pulstating beacon */}
                                        <div className="w-10 h-10 rounded-full border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center relative flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors duration-500">
                                            <Zap size={16} className="text-accent-blue group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 rounded-full border border-accent-blue/40 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                                        </div>
                                    </div>

                                    {/* Tech stack row */}
                                    <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex gap-2 flex-wrap">
                                            {['React', 'Next.js', 'Tailwind', 'TypeScript'].map((tech) => (
                                                <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-white/40 font-mono tracking-wide group-hover:border-white/10 group-hover:text-white/60 transition-colors duration-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Premium Social Cards (Full Width) ── */}
                <div className="mt-16 w-full max-w-7xl mx-auto flex flex-col gap-2 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-bold mb-1 pl-2">Social Profiles</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {SOCIALS.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-black/40 backdrop-blur-xl hover:border-opacity-40 transition-all duration-300 overflow-hidden cursor-pointer w-full"
                                style={{
                                    "--card-glow": s.glow,
                                    "--card-border": s.border,
                                    "--card-bg": s.bg,
                                } as React.CSSProperties}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = s.border;
                                    (e.currentTarget as HTMLElement).style.background = s.bg;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${s.glow}`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "";
                                    (e.currentTarget as HTMLElement).style.background = "";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                                }}
                            >
                                {/* Platform icon with background glow */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 relative overflow-hidden"
                                    style={{
                                        backgroundColor: `${s.color}10`,
                                        borderColor: `${s.color}20`,
                                        color: s.color,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {s.icon}
                                </div>

                                {/* Text content */}
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                    <p className="text-base font-bold text-white/90 group-hover:text-white transition-colors">{s.label}</p>
                                    <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors truncate">{s.handle}</p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                                        <ArrowUpRight
                                            size={16}
                                            className="text-white/30 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
