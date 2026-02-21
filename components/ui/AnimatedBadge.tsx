import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface AnimatedBadgeProps {
    text: string;
    variant?: "fuchsia" | "white";
    animate?: boolean;
}

export default function AnimatedBadge({ text, variant = "fuchsia", animate = true }: AnimatedBadgeProps) {
    return (
        <span
            className={twMerge(
                clsx(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border",
                    variant === "fuchsia"
                        ? "border-white text-white bg-white/10"
                        : "border-accent-white text-accent-white bg-accent-white/10",
                    animate && "animate-pulse" // Simple pulse for now, can be enhanced
                )
            )}
        >
            {variant === "white" && (
                <span className="w-2 h-2 rounded-full bg-accent-white mr-2 animate-pulse" />
            )}
            {text}
        </span>
    );
}
