"use client";

import { motion } from "framer-motion";
import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: {
    className?: string;
    children: React.ReactNode;
    showRadialGradient?: boolean;
} & React.HTMLProps<HTMLDivElement>) => {
    return (
        <main
            className={twMerge(
                "relative flex flex-col  h-[100vh] items-center justify-center bg-bg-primary text-slate-950 transition-bg",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={clsx(
                        // The aurora effect
                        `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#1A1A1A_10%,#333333_15%,#000000_20%,#202020_25%,#111111_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[15px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-30 will-change-transform`,

                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                ></div>
            </div>
            {children}
        </main>
    );
};
