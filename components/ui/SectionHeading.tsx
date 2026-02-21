import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
    children: React.ReactNode;
    className?: string;
    center?: boolean;
}

export default function SectionHeading({ children, className, center }: SectionHeadingProps) {
    return (
        <h2
            className={twMerge(
                clsx(
                    "text-3xl md:text-5xl font-heading font-bold text-text-primary mb-12 relative inline-block",
                    center && "text-center w-full",
                    "after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-1/2 after:h-1 after:bg-white after:rounded-full",
                    center && "after:left-1/2 after:-translate-x-1/2",
                    className
                )
            )}
        >
            {children}
        </h2>
    );
}
