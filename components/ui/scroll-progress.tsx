"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const gradientStyle = {
        background: "linear-gradient(to right, #3b82f6, #a855f7, #ec4899)",
        transformOrigin: "left" as const,
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[2px]">
            {/* Main bar */}
            <motion.div
                style={{ ...gradientStyle, scaleX }}
                className="absolute inset-0"
            />
            {/* Glow blur duplicate */}
            <motion.div
                style={{ ...gradientStyle, scaleX, filter: "blur(4px)", opacity: 0.6 }}
                className="absolute inset-0"
            />
        </div>
    );
}
