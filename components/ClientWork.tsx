"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CheckCircle2, ArrowUpRight, Globe, Users, TrendingUp, Zap } from "lucide-react";

const CLIENTS = [
    {
        id: "satashiya",
        number: "01",
        name: "Satashiya NDT Training Institute",
        category: "Education · Industrial",
        tagline: "Redefining how an NDT institute presents itself online.",
        description:
            "Built a professional, industrial-themed website for a premier Non-Destructive Testing training institute. The goal was to drive student inquiries, clearly present courses, and establish credibility in a niche technical industry.",
        highlights: ["Industrial Theme Design", "Course Presentation", "Inquiry Lead Focus", "Mobile-Responsive"],
        results: [
            { icon: <Globe size={14} />, stat: "100%", label: "Responsive" },
            { icon: <TrendingUp size={14} />, stat: "↑ Leads", label: "Inquiries" },
            { icon: <Zap size={14} />, stat: "Fast", label: "Load Speed" },
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        accent: "#3b82f6",
        gradientFrom: "from-blue-600/20",
        gradientTo: "to-cyan-500/5",
        href: "#",
    },
    {
        id: "redhawk",
        number: "02",
        name: "Red Hawk Consultancy",
        category: "Corporate · Consultancy",
        tagline: "Ultra-minimal presence engineered for trust and growth.",
        description:
            "Designed and developed a sleek, ultra-minimal corporate website for a professional consultancy firm. The project focused on creating a trustworthy digital brand identity, clear service presentation, and a high-converting contact section.",
        highlights: ["Corporate Branding", "Lead Generation", "Clean Modern UI", "SEO Optimized"],
        results: [
            { icon: <Users size={14} />, stat: "Pro", label: "Brand Identity" },
            { icon: <TrendingUp size={14} />, stat: "↑ CTR", label: "Conversions" },
            { icon: <Zap size={14} />, stat: "A+", label: "Performance" },
        ],
        tech: ["Next.js", "Framer Motion", "Shadcn UI", "Tailwind CSS"],
        accent: "#a855f7",
        gradientFrom: "from-purple-600/20",
        gradientTo: "to-pink-500/5",
        href: "#",
    },
];

export default function ClientWork() {
    return (
        <section id="client-work" className="py-32 relative bg-bg-primary overflow-hidden">

            {/* Ambient background blobs */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-blue/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Real Work, Real Impact</p>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tighter">
                            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Success Stories</span>
                        </h2>
                        <p className="text-white/35 text-sm max-w-xs leading-relaxed">
                            Two complete end-to-end client projects delivered as part of my internship at Red Hawk Consultancy.
                        </p>
                    </div>
                </motion.div>

                {/* Cards — alternating editorial layout */}
                <div className="flex flex-col gap-8">
                    {CLIENTS.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={`relative rounded-2xl border border-white/8 bg-gradient-to-br ${client.gradientFrom} ${client.gradientTo} overflow-hidden group hover:border-white/15 transition-all duration-500`}>
                                <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={3} />

                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(90deg, ${client.accent}, transparent 60%)` }}
                                />

                                <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">

                                    {/* Left: main content */}
                                    <div className="flex flex-col gap-6">

                                        {/* Top row: number + category */}
                                        <div className="flex items-center gap-4">
                                            <span
                                                className="text-5xl font-black font-heading leading-none select-none"
                                                style={{ color: `${client.accent}25` }}
                                            >
                                                {client.number}
                                            </span>
                                            <div className="h-[1px] w-8 bg-white/10" />
                                            <span
                                                className="text-xs font-semibold tracking-[0.15em] uppercase"
                                                style={{ color: client.accent }}
                                            >
                                                {client.category}
                                            </span>
                                        </div>

                                        {/* Title + tagline */}
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-black font-heading text-white tracking-tight mb-2">
                                                {client.name}
                                            </h3>
                                            <p className="text-white/35 text-sm italic">
                                                &ldquo;{client.tagline}&rdquo;
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                                            {client.description}
                                        </p>

                                        {/* Highlights grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {client.highlights.map(h => (
                                                <div key={h} className="flex items-center gap-2 text-xs text-white/50">
                                                    <CheckCircle2 size={12} style={{ color: client.accent }} className="shrink-0" />
                                                    {h}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {client.tech.map(t => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border text-white/50"
                                                    style={{ borderColor: `${client.accent}30`, background: `${client.accent}0d` }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: results panel */}
                                    <div className="flex flex-col gap-4 lg:min-w-[180px]">
                                        <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Outcomes</p>

                                        <div className="flex flex-row lg:flex-col gap-3">
                                            {client.results.map((r, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.85 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className="flex-1 lg:flex-none flex flex-col items-center lg:items-start gap-1 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-center lg:text-left"
                                                >
                                                    <div className="flex items-center gap-1.5" style={{ color: client.accent }}>
                                                        {r.icon}
                                                        <span className="text-lg font-black text-white">{r.stat}</span>
                                                    </div>
                                                    <p className="text-[10px] text-white/30 uppercase tracking-wider font-medium">{r.label}</p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* View project CTA */}
                                        <motion.a
                                            href={client.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="mt-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl border text-sm font-semibold text-white/60 hover:text-white transition-all duration-300 group/btn"
                                            style={{ borderColor: `${client.accent}30`, background: `${client.accent}0d` }}
                                        >
                                            View Project
                                            <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
