import { Project, Experience, Education, Skill, Achievement, ClientProject } from "@/types";

export const PERSONAL_INFO = {
    name: "Aman Kazmi",
    role: ["Full Stack Developer", "MERN Stack Developer", "Web Solutions Builder"],
    email: "amankazmi257@gmail.com",
    phone: "+91 9316639894",
    github: "https://github.com/Amankazmi",
    linkedin: "https://linkedin.com/in/aman-kazmi",
    tagline: "I build professional online identities that help businesses grow 🚀",
    bio: "Hi, I'm Aman — a Full Stack Website Developer specializing in building modern, responsive, and high-performance business websites. I help companies, institutes, and startups create a strong online presence through clean design, fast performance, and professional structure."
};

export const PROJECTS: Project[] = [
    {
        id: "hirrd",
        title: "Hirrd — Job Application Portal",
        period: "Feb'25–Jun'25",
        description: "Full-stack job platform with Clerk auth + Supabase backend. Role-based workflows for recruiters & candidates: job posting, application tracking, resume uploads, hiring status, protected routes.",
        tech: ["React", "Supabase", "Clerk", "TypeScript"],
        github: "https://github.com/Amankazmi/Hirrd",
        featured: true,
    },
    {
        id: "blogify",
        title: "Blogify — Dynamic Blogging Platform",
        period: "Sep'24–Nov'24",
        description: "Blogging website with Express.js, MongoDB, EJS. Admin CRUD for posts, pagination, contact form, server-side rendering.",
        tech: ["Express.js", "MongoDB", "EJS", "Node.js"],
        github: "https://github.com/Amankazmi/Blogify",
    },
    {
        id: "codereview",
        title: "CodeReview — AI-Powered Code Feedback Tool",
        period: "Jun'25–Jul'25",
        description: "Real-time code review platform powered by Gemini 2.0 Flash API. Syntax highlighting via PrismJS, Markdown-rendered AI suggestions on performance, readability, security.",
        tech: ["React", "Express.js", "Gemini AI", "PrismJS"],
        github: "https://github.com/Amankazmi/Code-Review",
    },
];

export const SKILLS: Skill[] = [
    // Languages
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "CSS", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },

    // Frontend
    { name: "ReactJS", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Shadcn UI", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "Firebase", category: "Databases" },
    { name: "Supabase", category: "Databases" },

    // DevOps & Tools
    { name: "Docker", category: "DevOps & Tools" },
    { name: "Git", category: "DevOps & Tools" },
    { name: "GitHub", category: "DevOps & Tools" },
    { name: "Vercel", category: "DevOps & Tools" },
    { name: "VS Code", category: "DevOps & Tools" },
];

export const EXPERIENCE: Experience[] = [
    {
        company: "Red Hawk Consultancy",
        role: "Full Stack Website Developer",
        status: "Currently Working",
        type: "Corporate Business Website",
        period: "Present", // Inferred from "Currently Working"
        description: "Professional corporate website project focused on building a strong digital presence for a consultancy firm. Modern, clean, business-oriented website presenting services, expertise, and credibility to potential clients.",
        goals: [
            "Establish a professional online brand identity",
            "Clearly showcase services and consultancy offerings",
            "Improve lead generation through structured contact sections",
            "Create a trustworthy and corporate visual appearance",
        ],
        features: [
            "Fully responsive design (mobile, tablet, desktop)",
            "Clean and modern UI layout",
            "Structured service presentation",
            "Contact and inquiry section for client leads",
            "Optimized performance and fast loading speed",
            "SEO-friendly structure",
        ],
        responsibilities: [
            "Website design and development",
            "Layout planning and content structuring",
            "Responsive implementation",
            "Performance optimization",
            "Deployment setup",
        ],
    },
];

export const CLIENT_WORK: ClientProject[] = [
    {
        id: "satashiya",
        name: "Satashiya NDT Training Institute",
        description: "Professional industrial-themed website focused on increasing student inquiries and presenting NDT courses clearly and effectively.",
        highlights: ["Industrial Theme", "Course Presentation", "Inquiry Focus"],
    },
    {
        id: "redhawk",
        name: "Red Hawk Consultancy",
        description: "Clean and modern corporate website for professional branding and lead generation.",
        highlights: ["Corporate Branding", "Lead Generation", "Modern UI"],
    },
];

export const EDUCATION: Education[] = [
    {
        degree: "B.E. Information Technology",
        institution: "L.D. College of Engineering",
        university: "GTU",
        period: "2023–26",
        score: "CPI: 8.47",
    },
    {
        degree: "Diploma Computer Engineering",
        institution: "GP Jamnagar",
        university: "GTU",
        period: "2020–23",
        score: "CPI: 9.44",
    },
    {
        degree: "SSC CBSE",
        institution: "K.V. I.N.S Valsura",
        period: "2020",
        score: "70.4%",
    },
];

export const ACHIEVEMENTS: Achievement[] = [
    { id: "hockey", text: "Represented school in National Hockey Tournament at LPU University, Jalandhar (10th Standard)" },
    { id: "hackathon", text: "Participant in SSIP Hackathon" },
    { id: "rank", text: "86th Rank in Diploma across entire Gujarat state" },
];
