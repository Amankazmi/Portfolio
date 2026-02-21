"use client";

import { motion } from "framer-motion";

const wordVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(12px)", scale: 0.85 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            delay: 0.4 + i * 0.12,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export const SmoothTyping = ({
    text,
    className,
}: {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}) => {
    const words = text.split(" ");

    return (
        <span className={className} aria-label={text}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mr-[0.25em]"
                >
                    {/* Last word gets a gradient accent */}
                    {i === words.length - 1 ? (
                        <span className="relative">
                            {/* Glow bloom behind last word */}
                            <span
                                aria-hidden
                                className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl pointer-events-none"
                            />
                            <span className="relative bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                                {word}
                            </span>
                        </span>
                    ) : (
                        word
                    )}
                </motion.span>
            ))}
        </span>
    );
};
