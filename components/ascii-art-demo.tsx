"use client";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtDemo() {
  return (
    <AsciiArt
      src="https://assets.aceternity.com/avatars/manu.webp"
      resolution={100}
      color="var(--color-neutral-500)"
      animationStyle="fade"
      animationDuration={1.5}
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950"
    />
  );
}
