"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const FloatingBadge = ({
    text,
    delay = 0,
    xOffset = 0,
    yOffset = 0,
}: {
    text: string;
    delay?: number;
    xOffset?: number;
    yOffset?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, yOffset, 0],
                x: [0, xOffset, 0]
            }}
            transition={{
                opacity: { delay, duration: 0.8 },
                scale: { delay, duration: 0.8 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: delay * 0.5 },
                x: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: delay * 0.5 }
            }}
            className="absolute z-20"
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            whileHover={{ scale: 1.05 }}
        >
            <Badge variant="outline" className="px-4 py-2 text-sm bg-black/40 backdrop-blur-md border-white/10 text-white shadow-lg shadow-black/50 cursor-grab">
                {text}
            </Badge>
        </motion.div>
    );
};
