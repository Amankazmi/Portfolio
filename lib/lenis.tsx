"use client";

import { ReactLenis as Lenis } from "lenis/react";

export function ReactLenis({
    root,
    options,
    children,
}: {
    root?: boolean;
    options?: any;
    children: React.ReactNode;
}) {
    return (
        <Lenis root= { root } options = { options } >
            { children }
            </Lenis>
  );
}
