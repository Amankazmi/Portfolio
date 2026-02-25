import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { ReactLenis } from "@/lib/lenis";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Kazmi | Full Stack Developer",
  description: "Portfolio of Aman Kazmi, a Full Stack Developer specializing in modern web solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <ReactLenis root>
        <body className="antialiased selection:bg-blue-500/30 selection:text-white bg-black text-white overflow-x-hidden font-sans">
          <ScrollProgressBar />
          <LoadingScreen />
          <Navbar />
          {children}
          <BackToTop />
        </body>
      </ReactLenis>
    </html>
  );
}
