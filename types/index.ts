export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  period: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  status?: string;
  type?: string; 
  description: string;
  goals: string[];
  features: string[];
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  score: string;
}

export interface Skill {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "DevOps & Tools";
}

export interface Achievement {
  id: string;
  text: string;
}

export interface ClientProject {
  id: string;
  name: string;
  description: string;
  highlights: string[];
}

export interface WhyMeReason {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}
