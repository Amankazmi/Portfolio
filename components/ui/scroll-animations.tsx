"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variant } from "framer-motion";

/* ─── Shared Variants ─────────────────────────────────────── */
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        transition: { duration: 0.6, delay: custom * 0.1, ease: "easeOut" },
    }),
};

export const blurFadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.75, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
    visible: (custom: number = 0) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const slideInRight = {
    hidden: { opacity: 0, x: 50, filter: "blur(8px)" },
    visible: (custom: number = 0) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: custom * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

// Stagger container: makes child motion elements animate in sequence
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

// Standard child variant for stagger
export const staggerChild = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ─── Convenience wrapper: ScrollReveal ───────────────────── */
// Drop-in <ScrollReveal> wrapper for any element — triggers once on scroll
interface ScrollRevealProps {
    children: React.ReactNode;
    variants?: any;
    className?: string;
    custom?: number;
    delay?: number;
    once?: boolean;
    amount?: number;
    as?: any;
}

export function ScrollReveal({
    children,
    variants = blurFadeUp,
    className,
    custom = 0,
    once = true,
    amount = 0.15,
    as: Tag = "div",
}: ScrollRevealProps) {
    const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;
    return (
        <MotionTag
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={variants}
            custom={custom}
            className={className}
        >
            {children}
        </MotionTag>
    );
}

/* ─── Parallax wrapper ────────────────────────────────────── */
interface ParallaxProps {
    children: React.ReactNode;
    speed?: number; // -1 to 1 range; negative = opposite direction
    className?: string;
}

export function ParallaxSection({ children, speed = 0.3, className }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [`${speed * 80}px`, `${-speed * 80}px`]);

    return (
        <div ref={ref} className={className} style={{ overflow: "hidden" }}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}
