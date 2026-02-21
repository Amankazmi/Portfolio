"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const SECTIONS = ["hero", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Hide / show on scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
        if (latest > lastScrollY && latest > 150) setHidden(true);
        else setHidden(false);
        setLastScrollY(latest);
    });

    // Active section tracking via IntersectionObserver
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        SECTIONS.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    return (
        <>
            {/* ── DESKTOP NAV ── floating pill */}
            <motion.div
                variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -80, opacity: 0 } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none"
            >
                <nav
                    className={`pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-2xl border transition-all duration-500 ${scrolled
                            ? "bg-black/80 border-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
                            : "bg-black/30 border-white/5 backdrop-blur-xl"
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="mr-3 flex items-center gap-0.5 px-2 py-1.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                        <span className="text-lg font-black font-heading text-white tracking-tighter">AK</span>
                        <span className="text-lg font-black font-heading text-accent-blue">.</span>
                    </Link>

                    {/* Separator */}
                    <div className="hidden md:block w-[1px] h-5 bg-white/10 mr-2" />

                    {/* Nav links — desktop hidden on mobile */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${isActive
                                            ? "text-white bg-white/8"
                                            : "text-white/40 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="w-1 h-1 rounded-full bg-accent-blue shrink-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>

                    {/* Separator */}
                    <div className="hidden md:block w-[1px] h-5 bg-white/10 mx-2" />

                    {/* CTA */}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-shadow"
                    >
                        Hire Me
                        <ArrowUpRight size={12} />
                    </motion.a>

                    {/* Mobile toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-all"
                    >
                        <Menu size={18} />
                    </motion.button>
                </nav>
            </motion.div>

            {/* ── MOBILE DRAWER ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55]"
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 26, stiffness: 220 }}
                            className="fixed inset-y-0 right-0 w-72 z-[60] flex flex-col bg-[#080808] border-l border-white/8 shadow-2xl"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
                                <div className="flex items-center gap-1">
                                    <span className="text-xl font-black font-heading text-white">AK</span>
                                    <span className="text-xl font-black font-heading text-accent-blue">.</span>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all"
                                >
                                    <X size={18} />
                                </motion.button>
                            </div>

                            {/* Drawer links */}
                            <nav className="flex flex-col gap-1 p-4 flex-1">
                                {NAV_LINKS.map((link, i) => {
                                    const isActive = activeSection === link.href.replace("#", "");
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + i * 0.045 }}
                                            onClick={() => setMobileOpen(false)}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                                    ? "text-white bg-white/8 border border-white/10"
                                                    : "text-white/40 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {link.name}
                                            {isActive && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                            )}
                                        </motion.a>
                                    );
                                })}
                            </nav>

                            {/* Drawer CTA */}
                            <div className="p-4 border-t border-white/6">
                                <motion.a
                                    href="#contact"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-bold"
                                >
                                    Hire Me <ArrowUpRight size={14} />
                                </motion.a>
                                <p className="text-center text-[10px] text-white/20 mt-3">
                                    Currently available for new projects
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
