"use client";

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const PREMIUM_PROJECTS = [
    {
        id: "hirrd",
        title: "Hirrd",
        subtitle: "Job Portal Platform",
        description: "A comprehensive, full-stack job portal connecting top talent with startups. Features robust authentication, advanced filtering, and a seamless application pipeline.",
        tech: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Amankazmi/Hirrd",
        live: "https://hirrd-steel.vercel.app/",
        accent: "#3b82f6",
        gradient: "from-blue-600/30 via-cyan-500/10 to-transparent",
        featured: true,
    },
    {
        id: "blogify",
        title: "Blogify",
        subtitle: "Modern Blog Platform",
        description: "A highly optimized, SEO-friendly blogging engine. Supports rich text editing, dynamic routing, and instantaneous page transitions.",
        tech: ["React", "Express.js", "MongoDB", "Framer Motion"],
        github: "https://github.com/Amankazmi/Blogify",
        live: "https://blogify-r781.onrender.com/",
        accent: "#a855f7",
        gradient: "from-purple-600/30 via-pink-500/10 to-transparent",
        featured: true,
    },
    {
        id: "codereview",
        title: "CodeReview AI",
        subtitle: "AI Code Feedback Tool",
        description: "An AI-powered developer utility that analyzes pull requests, enforces architectural standards, and suggests performance optimizations.",
        tech: ["OpenAI API", "React", "Node.js", "Docker"],
        github: "https://github.com/Amankazmi/Code-Review",
        live: "https://code-review-au7acc2ri-aman-kazmis-projects.vercel.app/",
        accent: "#10b981",
        gradient: "from-emerald-600/30 via-teal-500/10 to-transparent",
        featured: false,
    },
    {
        id: "shatashiya",
        title: "Shatashiya NDT",
        subtitle: "Training Institute Website",
        description: "Enterprise-grade platform for a premier Non-Destructive Testing institute. Focuses on performance, accessibility, and high conversion rates.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        github: "#",
        live: "https://satashiya-ndt-institute.vercel.app/",
        accent: "#f59e0b",
        gradient: "from-amber-600/30 via-orange-500/10 to-transparent",
        featured: false,
        hideSource: true,
    },
    {
        id: "redhawk",
        title: "Red Hawk Consultancy",
        subtitle: "Corporate Landing Platform",
        description: "A sleek, ultra-minimal web presence for a growth consulting firm. Engineered for supreme load speeds and professional aesthetics.",
        tech: ["Next.js App Router", "Framer Motion", "Shadcn UI"],
        github: "#",
        live: "https://red-hawk-consultancy-final.vercel.app/",
        accent: "#94a3b8",
        gradient: "from-slate-600/30 via-zinc-500/10 to-transparent",
        featured: false,
        hideSource: true,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    } as any
};

function ProjectCard({ project, large = false }: { project: typeof PREMIUM_PROJECTS[0]; large?: boolean }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={`group relative cursor-pointer rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:-translate-y-1 transition-all duration-500 ${large ? "min-h-[340px]" : "min-h-[260px]"}`}>
                    <GlowingEffect spread={50} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={3} />

                    {/* Card background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                    {/* Accent top border line */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, ${project.accent}80, transparent)` }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-5">
                            {/* Accent dot + subtitle */}
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-2 h-2 rounded-full flex-shrink-0 ring-2 ring-white/10"
                                    style={{ background: project.accent }}
                                />
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                                    {project.subtitle}
                                </span>
                            </div>
                            {/* Arrow icon — shows on hover */}
                            <ArrowUpRight
                                size={18}
                                className="text-white/20 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            />
                        </div>

                        {/* Title */}
                        <h3 className={`font-black font-heading text-white tracking-tight mb-3 ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                            {project.title}
                        </h3>

                        {/* Progressive blur text reveal: description fades into blur at the bottom */}
                        <div className="relative flex-grow overflow-hidden mb-5">
                            <p className="text-white/55 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            {/* Progressive blur overlay — fades bottom of text */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                                style={{
                                    background: `linear-gradient(to bottom, transparent, rgba(9,9,11,0.85))`,
                                    backdropFilter: "blur(0px)",
                                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
                                }}
                            />
                        </div>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.slice(0, large ? 5 : 3).map(t => (
                                <span
                                    key={t}
                                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border text-white/60 transition-all duration-300 group-hover:text-white/80"
                                    style={{
                                        borderColor: `${project.accent}30`,
                                        background: `${project.accent}10`,
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                            {project.tech.length > (large ? 5 : 3) && (
                                <span className="text-xs text-white/30 self-center pl-1">
                                    +{project.tech.length - (large ? 5 : 3)} more
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl bg-[#0a0a0f] border-white/10 p-0 overflow-hidden text-white gap-0">
                {/* Dialog hero */}
                <div className={`w-full h-36 md:h-48 bg-gradient-to-br ${project.gradient} relative flex items-center px-8`}>
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    <div className="relative z-10">
                        <div className="text-xs uppercase tracking-widest text-white/50 mb-2">{project.subtitle}</div>
                        <DialogTitle className="text-3xl md:text-4xl font-black font-heading text-white">{project.title}</DialogTitle>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <DialogDescription className="text-base text-white/65 leading-relaxed mb-8">
                        {project.description}
                    </DialogDescription>

                    <div className="mb-8">
                        <h5 className="text-xs text-white/30 uppercase tracking-widest mb-3 font-semibold">Tech Stack</h5>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span
                                    key={t}
                                    className="px-3 py-1 text-sm rounded-full border text-white/70"
                                    style={{ borderColor: `${project.accent}40`, background: `${project.accent}15` }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-black transition-colors"
                                style={{ background: project.accent }}
                            >
                                Live Preview <ExternalLink size={14} />
                            </motion.button>
                        </a>
                        {!project.hideSource && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                    className="w-full py-3 rounded-xl border border-white/10 text-sm text-white font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                                >
                                    Source Code <Github size={14} />
                                </motion.button>
                            </a>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function Projects() {
    const featured = PREMIUM_PROJECTS.filter(p => p.featured);
    const rest = PREMIUM_PROJECTS.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-bg-primary">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <p className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Premium Showcase</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tighter">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Projects</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Featured row — 2 large cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5"
                >
                    {featured.map(p => (
                        <motion.div key={p.id} variants={itemVariants}>
                            <ProjectCard project={p} large />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Remaining row — 3 smaller cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {rest.map(p => (
                        <motion.div key={p.id} variants={itemVariants}>
                            <ProjectCard project={p} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
