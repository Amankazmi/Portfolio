"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const ShaderGradient = ({
    className,
    colors = [
        "#6d28d9", "#7c3aed", "#8b5cf6", "#a855f7",
        "#c026d3", "#d946ef", "#ec4899", "#f43f5e",
        "#ef4444", "#f97316", "#f59e0b", "#eab308", "#fbbf24"
    ],
    speed = 1,
}: {
    className?: string;
    colors?: string[];
    speed?: number;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let startTime: number | null = null;
        let dpr = window.devicePixelRatio || 1;

        const resize = () => {
            dpr = window.devicePixelRatio || 1;
            const { width, height } = container.getBoundingClientRect();
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };

        const hexToRgb = (hex: string) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return { r, g, b };
        };

        const draw = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            // time in seconds
            const t = ((timestamp - startTime) / 1000) * speed;

            const { width, height } = container.getBoundingClientRect();
            const w = canvas.width;
            const h = canvas.height;

            ctx.clearRect(0, 0, w, h);

            // Scale ctx to dpr
            ctx.save();
            ctx.scale(dpr, dpr);

            // Animate the whole fan: slow rotate the origin
            const fanOscillation = Math.sin(t * 0.4) * 0.06; // gently sways the whole fan
            const baseStartAngle = Math.PI * 1.08 + fanOscillation;
            const totalSpread = Math.PI * 0.42;

            const totalStripes = colors.length;
            const stripeWidth = totalSpread / totalStripes;
            const rayLen = Math.sqrt(width * width + height * height) * 1.3;

            // Origin — bottom-right
            const originX = width * 1.02;
            const originY = height * 1.05;

            for (let i = 0; i < totalStripes; i++) {
                const { r, g, b } = hexToRgb(colors[i]);

                // Each stripe also individually wiggles with different phase
                const individualWobble = Math.sin(t * 1.2 + i * 0.6) * 0.018;
                const angle = baseStartAngle + i * stripeWidth + individualWobble;
                const nextAngle = angle + stripeWidth * 0.82;

                const midAngle = (angle + nextAngle) / 2;
                const gradX = Math.cos(midAngle) * rayLen * 0.6;
                const gradY = Math.sin(midAngle) * rayLen * 0.6;

                const gradient = ctx.createLinearGradient(originX, originY, originX + gradX, originY + gradY);
                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.98)`);
                gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.85)`);
                gradient.addColorStop(0.65, `rgba(${r}, ${g}, ${b}, 0.5)`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                ctx.beginPath();
                ctx.moveTo(originX, originY);
                ctx.arc(originX, originY, rayLen, angle, nextAngle);
                ctx.closePath();

                ctx.fillStyle = gradient;
                ctx.fill();
            }

            ctx.restore();

            animationId = requestAnimationFrame(draw);
        };

        resize();
        animationId = requestAnimationFrame(draw);

        const ro = new ResizeObserver(resize);
        ro.observe(container);

        return () => {
            cancelAnimationFrame(animationId);
            ro.disconnect();
        };
    }, [colors, speed]);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 pointer-events-none", className)}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};
