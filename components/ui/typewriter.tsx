"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
    words,
}: {
    words: string[];
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words]);

    return (
        <div className="relative flex items-center justify-center w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};
