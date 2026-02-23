"use client";

import { ReactLenis as Lenis } from "lenis/react";

export function ReactLenis({
    root,
    children,
}: {
    root?: boolean;
    children: React.ReactNode;
}) {
    return (
        <Lenis
            root={root}
            options={{
                lerp: 0.08,          // smoothness — lower = smoother (0.05–0.12 is ideal)
                duration: 1.4,        // scroll duration multiplier
                smoothWheel: true,    // smooth mouse-wheel
                syncTouch: false,     // native touch on mobile (feels best)
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
            }}
        >
            {children}
        </Lenis>
    );
}
