"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

const PHASES = ["Initializing", "Loading assets", "Building UI", "Almost ready"];

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [phaseIdx, setPhaseIdx] = useState(0);

    useEffect(() => {
        // Tick progress 0→100 over ~2.4s
        const start = performance.now();
        const duration = 2400;
        let raf: number;

        const tick = (now: number) => {
            const pct = Math.min(((now - start) / duration) * 100, 100);
            setProgress(Math.floor(pct));
            setPhaseIdx(Math.min(Math.floor(pct / 26), PHASES.length - 1));
            if (pct < 100) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        const timer = setTimeout(() => setIsLoading(false), 2600);
        return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                >
                    {/* Shader grain */}
                    <div className="shader-grain" />

                    {/* ── Ambient glow blobs ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.35, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[600px] h-[600px] bg-accent-blue/15 blur-[160px] rounded-full pointer-events-none"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.2, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute w-[500px] h-[500px] bg-accent-purple/15 blur-[140px] rounded-full pointer-events-none translate-x-40 translate-y-20"
                    />

                    {/* ── Corner decorations ── */}
                    {[
                        "top-6 left-6 border-t border-l",
                        "top-6 right-6 border-t border-r",
                        "bottom-6 left-6 border-b border-l",
                        "bottom-6 right-6 border-b border-r",
                    ].map((cls, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className={`absolute w-8 h-8 border-white/15 ${cls}`}
                        />
                    ))}

                    {/* ── Version / build tag ── */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono"
                    >
                        Portfolio v2.0
                    </motion.p>

                    {/* ── Main content ── */}
                    <div className="relative z-10 flex flex-col items-center gap-10">

                        {/* Logo + orbit rings — UNCHANGED animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: "blur(12px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Outer dashed ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                className="absolute -inset-10 rounded-full border border-dashed border-accent-blue/30"
                            />
                            {/* Inner dotted ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                className="absolute -inset-16 rounded-full border border-dotted border-accent-purple/20"
                            />
                            {/* A subtle solid thin ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute -inset-[84px] rounded-full border border-white/5"
                            />

                            {/* Centre icon box */}
                            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-accent-blue/25 to-accent-purple/25 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.35),inset_0_0_20px_rgba(139,92,246,0.1)]">
                                {/* Inner glow pulse */}
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.05, 0.9] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-2 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10"
                                />
                                <Code2 size={38} className="text-white relative z-10" />
                            </div>
                        </motion.div>

                        {/* Name + tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <h1 className="text-3xl font-black font-heading tracking-tighter text-white">
                                Aman{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                                    Kazmi
                                </span>
                            </h1>
                            <p className="text-xs tracking-[0.25em] uppercase text-white/25 font-medium">
                                Full Stack Developer
                            </p>
                        </motion.div>

                        {/* Progress bar + phase + percentage */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex flex-col items-center gap-3 w-64"
                        >
                            {/* Phase label + percentage */}
                            <div className="flex items-center justify-between w-full">
                                <span className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-medium">
                                    {PHASES[phaseIdx]}
                                </span>
                                <span className="text-[11px] font-mono font-bold text-accent-blue">
                                    {progress}%
                                </span>
                            </div>

                            {/* Progress track */}
                            <div className="w-full h-[3px] bg-white/8 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2.3, ease: "easeInOut" }}
                                    className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                                />
                            </div>

                            {/* Tick marks */}
                            <div className="flex items-center justify-between w-full">
                                {[0, 25, 50, 75, 100].map(n => (
                                    <span key={n} className={`text-[9px] font-mono transition-colors duration-300 ${progress >= n ? "text-white/35" : "text-white/10"}`}>
                                        {n}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Bottom signature ── */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-white/15 font-mono whitespace-nowrap"
                    >
                        Designed &amp; Developed by Aman Kazmi
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
