"use client";

import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export const AnimatedGradientBackground = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <main
            className={twMerge(
                "relative flex flex-col min-h-[100vh] items-center justify-center bg-black text-white overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 z-0">
                {/* Grain texture */}
                <div className="shader-grain" />
            </div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </main>
    );
};
