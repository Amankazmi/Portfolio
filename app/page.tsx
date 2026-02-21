import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ClientWork from "@/components/ClientWork";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ClientWork />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
