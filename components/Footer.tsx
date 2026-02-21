"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Heart, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import Link from "next/link";

const NAV_LINKS = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
    { icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black border-t border-white/5">

            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[300px] h-[150px] bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Main Footer Body */}
                <div className="pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Col 1 — Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-5"
                    >
                        <div>
                            <motion.p
                                className="text-3xl font-black font-heading text-white tracking-tighter"
                                whileHover={{ textShadow: "0 0 20px rgba(139,92,246,0.6)" }}
                            >
                                AK<span className="text-accent-blue">.</span>
                            </motion.p>
                            <p className="text-white/40 text-sm mt-1 tracking-wide">Engineering Digital Futures.</p>
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                            Full Stack Developer passionate about building fast, scalable, and visually rich web experiences using the MERN stack and modern tools.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-4 mt-1">
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Col 2 — Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-5"
                    >
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">Navigation</p>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        <span className="w-0 h-[1px] bg-accent-blue group-hover:w-4 transition-all duration-300" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 3 — Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-5"
                    >
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">Let&apos;s Connect</p>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Have a project in mind or want to collaborate? I&apos;m always open to new opportunities.
                        </p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors font-medium">
                            <Mail size={14} className="text-accent-blue group-hover:scale-110 transition-transform" />
                            {PERSONAL_INFO.email}
                        </a>

                        {/* CTA button */}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-fit"
                        >
                            <ExternalLink size={14} />
                            Get in Touch
                        </motion.a>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="relative h-[1px] bg-white/5">
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"
                    />
                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Copyright */}
                    <p className="text-xs text-white/25 tracking-wide">
                        © {new Date().getFullYear()} Aman Kazmi. All rights reserved.
                    </p>

                    {/* Designed & Developed credit */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex items-center gap-1.5 text-xs text-white/25 tracking-wide"
                    >
                        <Code2 size={12} className="text-accent-blue" />
                        Designed &amp; Developed by
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple font-semibold">
                            Aman Kazmi
                        </span>
                        <Heart size={11} className="text-pink-500 fill-pink-500 ml-0.5" />
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
