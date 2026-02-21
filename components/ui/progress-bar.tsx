"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";

export const SlidingProgressBar = ({
    skill,
    percentage,
    delay = 0,
}: {
    skill: string;
    percentage: number;
    delay?: number;
}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-white">{skill}</span>
                <span className="text-accent-blue font-bold flex items-center gap-0.5">
                    <AnimatedCounter value={percentage} duration={1.5} />%
                </span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }} // smooth custom easing
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-blue/80 to-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                />
            </div>
        </div>
    );
};
