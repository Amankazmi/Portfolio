import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Clock, Code2, HeartHandshake, MessageSquare, ShieldCheck } from "lucide-react";

const REASONS = [
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "I keep you updated at every stage, ensuring no surprises and full transparency."
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Respecting deadlines is non-negotiable. I deliver quality work on schedule."
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Scalable, maintainable, and efficient code that future developers will love."
    },
    {
        icon: ShieldCheck,
        title: "Professional Approach",
        description: "I treat every project with the seriousness and dedication of a business partner."
    },
    {
        icon: HeartHandshake,
        title: "Reliable Support",
        description: "My relationship doesn't end at delivery. I provide support to ensure smooth operation."
    }
];

export default function WhyMe() {
    return (
        <section id="why-me" className="py-24 relative bg-bg-card/30">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <SectionHeading center>Why Work With Me?</SectionHeading>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                    {REASONS.map((reason, index) => (
                        <ScrollReveal key={reason.title} delay={index * 0.1}>
                            <div className="h-full bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-bg-primary border border-border-subtle flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                    <reason.icon size={24} />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
