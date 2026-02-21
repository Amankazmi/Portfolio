import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function GlowCard({ children, className }: GlowCardProps) {
    return (
        <div
            className={twMerge(
                clsx(
                    "bg-bg-card rounded-2xl border border-border-subtle p-6 transition-all duration-300",
                    "hover:border-white hover:shadow-[0_0_20px_rgba(255, 255, 255,0.15)]",
                    className
                )
            )}
        >
            {children}
        </div>
    );
}
