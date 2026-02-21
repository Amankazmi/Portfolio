"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export default function ScrollReveal({ children, delay = 0, width = "fit-content" }: ScrollRevealProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}
