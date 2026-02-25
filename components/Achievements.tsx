"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Trophy, Medal, Star, Award } from "lucide-react";

const CARD_CONFIG = [
    {
        icon: <Trophy size={22} />,
        accent: "#f59e0b",
        gradient: "from-amber-500/20 to-yellow-500/5",
        label: "Sports",
        number: "01",
    },
    {
        icon: <Medal size={22} />,
        accent: "#3b82f6",
        gradient: "from-blue-600/20 to-cyan-500/5",
        label: "Innovation",
        number: "02",
    },
    {
        icon: <Star size={22} />,
        accent: "#a855f7",
        gradient: "from-purple-600/20 to-fuchsia-500/5",
        label: "Academic",
        number: "03",
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-32 relative bg-bg-primary overflow-hidden section-fade-edge">

            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20"
                >
                    <div>
                        <p className="text-sm tracking-[0.3em] uppercase text-accent-blue font-semibold mb-3">Beyond the Code</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tighter">
                            Achievements <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">&amp; Honours</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-white/30 text-sm">
                        <Award size={16} className="text-amber-400" />
                        Recognized across sports, academics &amp; innovation.
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((achievement, index) => {
                        const config = CARD_CONFIG[index % CARD_CONFIG.length];
                        return (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className={`relative h-full rounded-2xl border border-white/8 bg-gradient-to-br ${config.gradient} overflow-hidden group hover:border-white/15 hover:-translate-y-1 transition-all duration-500`}>
                                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />

                                    {/* Top accent line */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                                        style={{ background: `linear-gradient(90deg, ${config.accent}, transparent 60%)` }}
                                    />

                                    {/* Ghost number */}
                                    <span
                                        className="absolute top-4 right-5 text-7xl font-black font-heading leading-none select-none pointer-events-none"
                                        style={{ color: `${config.accent}15` }}
                                    >
                                        {config.number}
                                    </span>

                                    <div className="relative z-10 p-7 flex flex-col gap-5 h-full">

                                        {/* Icon + label */}
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-11 h-11 rounded-xl flex items-center justify-center border"
                                                style={{ background: `${config.accent}18`, borderColor: `${config.accent}35`, color: config.accent }}
                                            >
                                                {config.icon}
                                            </div>
                                            <span
                                                className="text-xs font-bold tracking-[0.15em] uppercase"
                                                style={{ color: config.accent }}
                                            >
                                                {config.label}
                                            </span>
                                        </div>

                                        {/* Achievement text */}
                                        <p className="text-white/75 text-base leading-relaxed font-medium flex-grow">
                                            {achievement.text}
                                        </p>

                                        {/* Footer line */}
                                        <div
                                            className="h-[1px] w-full opacity-20 group-hover:opacity-50 transition-opacity"
                                            style={{ background: config.accent }}
                                        />
                                        <p className="text-xs text-white/25 uppercase tracking-widest">Achievement</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
