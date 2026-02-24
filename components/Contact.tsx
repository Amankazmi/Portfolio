"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Mail, Github, Linkedin, Network, Loader2, ArrowUpRight, Zap, Target } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const SOCIALS = [
    {
        icon: <Github size={18} />,
        label: "GITHUB",
        handle: "SYS_USR_AMANKAZMI",
        href: PERSONAL_INFO.github,
        color: "#e2e8f0",
    },
    {
        icon: <Linkedin size={18} />,
        label: "LINKEDIN",
        handle: "NET_NODE_AMAN",
        href: PERSONAL_INFO.linkedin,
        color: "#0ea5e9",
    },
    {
        icon: <Mail size={18} />,
        label: "MAIL_PROTO",
        handle: "amankazmi257",
        href: `mailto:${PERSONAL_INFO.email}`,
        color: "#a855f7",
    },
];

const CyberBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* SVG Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <filter id="c-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#c-noise)" />
            </svg>
        </div>

        {/* Moving Radial Gradients Mesh */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
                rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)] blur-[100px]"
        />
        <motion.div
            animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.05, 0.1, 0.05],
                rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_60%)] blur-[120px]"
        />

        {/* CRT Scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
    </div>
);

interface CliFieldProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    focusedField: string | null;
    setFocusedField: (id: string | null) => void;
    rows?: number;
}

const CliField = ({ id, label, type = "text", value, onChange, focusedField, setFocusedField, rows = 1 }: CliFieldProps) => {
    const isFocused = focusedField === id;

    return (
        <div className="relative group font-mono mt-2 lg:mt-6">
            <div className="flex items-end gap-2 mb-2">
                <span className="text-[0.65rem] text-accent-blue/50 tracking-[0.2em] uppercase">INPUT_STREAM [{label}]</span>
                <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className={`relative flex items-start transition-all duration-300 ${isFocused ? 'scale-[1.01]' : 'scale-100'}`}>
                {/* Focus Brackets */}
                <div className={`absolute -inset-y-2 -left-3 w-2 border-l border-y transition-colors duration-300 ${isFocused ? 'border-accent-blue/70' : 'border-transparent'}`} />
                <div className={`absolute -inset-y-2 -right-3 w-2 border-r border-y transition-colors duration-300 ${isFocused ? 'border-accent-purple/70' : 'border-transparent'}`} />

                <span className={`mt-[1px] mr-3 text-sm transition-colors duration-300 ${isFocused ? 'text-accent-blue' : 'text-zinc-600'}`}>{'>'}</span>

                <div className="relative flex-1">
                    {type === "textarea" ? (
                        <textarea
                            id={id}
                            value={value}
                            required
                            onChange={onChange}
                            onFocus={() => setFocusedField(id)}
                            onBlur={() => setFocusedField(null)}
                            rows={rows}
                            className={`w-full bg-transparent outline-none text-zinc-300 resize-none font-mono text-sm leading-relaxed border-b transition-colors duration-300 ${isFocused ? 'border-accent-purple/50' : 'border-white/10'}`}
                            spellCheck="false"
                        />
                    ) : (
                        <input
                            type={type}
                            id={id}
                            value={value}
                            required
                            onChange={onChange}
                            onFocus={() => setFocusedField(id)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-transparent outline-none text-zinc-300 font-mono text-sm pb-1 border-b transition-colors duration-300 pointer-events-auto ${isFocused ? 'border-accent-blue/50' : 'border-white/10'}`}
                            autoComplete="off"
                            spellCheck="false"
                        />
                    )}

                    {/* Blinking block cursor substitute */}
                    {isFocused && (value.length === 0) && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="absolute left-0 top-[2px] text-sm text-accent-blue pointer-events-none"
                        >
                            █
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Active Label Side Text */}
            <div className={`hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 text-[0.55rem] tracking-widest transition-opacity duration-300 origin-center -rotate-90 pointer-events-none ${isFocused ? 'text-accent-blue opacity-100' : 'opacity-0'}`}>
                ACTIVE
            </div>
        </div>
    );
};

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        }, 2500);
    };

    return (
        <section id="contact" className="relative py-24 lg:py-40 bg-[#050508] border-t border-white/5 overflow-hidden">
            <CyberBackground />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">

                    {/* L-Column: Header + Display */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full relative">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <motion.div
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                                />
                                <span className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-zinc-500">SYSTEM.SECURE_COMM_CHANNEL</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black font-heading text-white tracking-tighter leading-[0.85] mb-8 relative inline-block">
                                INIT<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple inline-block">
                                    CONTACT.
                                </span>
                                {/* Decorative crosshair */}
                                <div className="absolute -left-6 md:-left-8 top-0 w-3 h-3 md:w-4 md:h-4 border-l border-t border-accent-blue/40" />
                                <div className="absolute -right-6 md:-right-8 bottom-0 w-3 h-3 md:w-4 md:h-4 border-r border-b border-accent-purple/40" />
                            </h2>

                            <p className="text-sm font-mono text-zinc-400 max-w-xs leading-relaxed border-l border-zinc-800 pl-4 py-2 opacity-80 backdrop-blur-sm">
                                &gt; Establishing secure connection...<br />
                                &gt; Awaiting payload parameters...<br />
                                &gt; Ready to collaborate.
                            </p>
                        </div>

                        {/* Social Nodes & Widget */}
                        <div className="mt-16 lg:mt-32 relative">
                            {/* Abstract background for tech element */}
                            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 relative z-10">
                                {SOCIALS.map((s, i) => (
                                    <motion.a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="group relative flex flex-col p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer backdrop-blur-md"
                                        style={{ boxShadow: `0 0 0 0 ${s.color}00` }}
                                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.boxShadow = `0 10px 30px -10px ${s.color}20`}
                                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.boxShadow = `0 0 0 0 ${s.color}00`}
                                    >
                                        {/* Animated corners */}
                                        <div style={{ borderColor: `${s.color}80` }} className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-solid transition-colors" />
                                        <div style={{ borderColor: `${s.color}80` }} className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-solid transition-colors" />

                                        <div className="flex justify-between items-start mb-4">
                                            <div style={{ color: s.color }} className="opacity-70 group-hover:opacity-100 transition-opacity">
                                                {s.icon}
                                            </div>
                                            <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                                        </div>

                                        <p className="text-[0.65rem] font-mono tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase">{s.label}</p>
                                        <p className="text-xs font-mono text-zinc-400 group-hover:text-white mt-1 truncate transition-colors">{s.handle}</p>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Tech Status Widget */}
                            <div className="mt-4 p-4 border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-between col-span-full relative z-10 hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Target size={18} className="text-accent-blue" />
                                    <div>
                                        <p className="text-[0.65rem] font-mono tracking-widest text-zinc-500 uppercase">SYS_STATUS</p>
                                        <p className="text-xs font-mono text-green-400 flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            ONLINE_AND_READY
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[0.65rem] font-mono tracking-widest text-zinc-500 uppercase">LOCATION</p>
                                    <p className="text-xs font-mono text-zinc-300 mt-0.5">IST // IND</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breakout grid center spacing */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* R-Column: The Form Terminal */}
                    <div className="lg:col-span-6 relative mt-16 lg:mt-0 w-full max-w-xl mx-auto lg:mx-0">
                        {/* Abstract grid lines background */}
                        <div className="absolute -inset-10 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
                            {Array.from({ length: 42 }).map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white/20" />
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative border border-white/10 bg-[#0a0a0e]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-12 z-10 shadow-2xl shadow-black/80"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-30 pointer-events-none">
                                <Terminal size={24} className="text-accent-purple" />
                            </div>

                            {/* Terminal Top Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-pink-500" />

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success_terminal"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="font-mono text-sm py-24 px-4"
                                    >
                                        <div className="mb-6 flex items-center justify-center">
                                            <div className="relative w-16 h-16 flex items-center justify-center">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-0 border border-green-500/30 rounded-full border-t-green-400"
                                                />
                                                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                                                    <Zap size={20} className="text-green-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-green-400 mb-2 font-bold text-center">&gt; [SYS_MSG]: PAYLOAD DELIVERED ACCURATELY.</p>
                                        <p className="text-zinc-400 mb-8 text-center">&gt; Response estimated within 24 standard hours.</p>

                                        <div className="flex justify-center flex-col items-center">
                                            <p className="text-accent-blue/70 mb-4 text-xs animate-pulse">&gt; Connection terminating...</p>
                                            <button
                                                onClick={() => setSubmitted(false)}
                                                className="px-6 py-2 border border-accent-blue/30 text-accent-blue text-xs uppercase tracking-widest hover:bg-accent-blue/10 transition-colors"
                                            >
                                                [ RESET_CONNECTION ]
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="terminal_form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col gap-6 md:gap-8"
                                    >
                                        <div className="mb-2">
                                            <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight text-white/90 uppercase">Transmission_Protocol</h3>
                                            <p className="text-xs font-mono text-zinc-500 mt-2">{`//`} Enter parameters below to initiate contact</p>
                                        </div>

                                        <CliField
                                            id="name"
                                            label="SENDER_ID"
                                            value={formData.name}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, name: e.target.value })}
                                            focusedField={focusedField}
                                            setFocusedField={setFocusedField}
                                        />

                                        <CliField
                                            id="email"
                                            label="RETURN_ADDRESS"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, email: e.target.value })}
                                            focusedField={focusedField}
                                            setFocusedField={setFocusedField}
                                        />

                                        <CliField
                                            id="message"
                                            label="DATA_PAYLOAD"
                                            type="textarea"
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                                            focusedField={focusedField}
                                            setFocusedField={setFocusedField}
                                        />

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative overflow-hidden w-full py-5 border border-white/20 bg-white/[0.02] hover:bg-white/[0.06] transition-colors mt-4 group disabled:opacity-50"
                                        >
                                            {/* Multi-stage System Override Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                                            <div className="relative flex items-center justify-center gap-3 font-mono text-sm tracking-widest">
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 size={16} className="animate-spin text-accent-purple" />
                                                        <span className="text-accent-purple uppercase font-bold">UPLOADING...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Network size={16} className="text-zinc-400 group-hover:text-accent-blue transition-colors" />
                                                        <span className="text-zinc-300 group-hover:text-white uppercase font-bold transition-colors">EXECUTE_TRANSMISSION</span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Scanning laser line on submitting */}
                                            {isSubmitting && (
                                                <motion.div
                                                    animate={{ top: ["0%", "100%", "0%"] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                    className="absolute left-0 w-full h-[1px] bg-accent-blue shadow-[0_0_10px_#3b82f6]"
                                                />
                                            )}

                                            {/* Hover corner brackets */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-accent-blue transition-colors" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-accent-purple transition-colors" />
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Decorative floating stats */}
                        <div className="absolute bottom-2 -right-4 md:-right-10 flex flex-col items-end gap-1 opacity-40 pointer-events-none font-mono">
                            <p className="text-[0.45rem] md:text-[0.55rem] tracking-[0.2em] text-accent-blue uppercase">LAT_LONG: 22.47° N, 70.05° E</p>
                            <p className="text-[0.45rem] md:text-[0.55rem] tracking-[0.2em] text-accent-purple uppercase">FREQ: 2.4GHz LINK</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
