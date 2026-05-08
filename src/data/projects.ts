import { Bot, Image as ImageIcon, Sparkles, type LucideIcon } from "lucide-react";

export type Project = {
  icon: LucideIcon;
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  featured?: boolean;
  year?: number;
  image?: string;
  caseStudyUrl?: string;
  codeUrl?: string;
};

/**
 * PROJECTS DATABASE
 * Add a new project: append an object below, commit & push to GitHub.
 * The portfolio rebuilds automatically. See src/data/README.md for full guide.
 */
export const projects: Project[] = [
  {
    icon: Bot,
    title: "AI-Based Government Scheme & Scholarship Recommendation System",
    tag: "AI · Full-stack",
    desc: "AI-powered web app that recommends government schemes and scholarships for students, farmers, and employees based on user profiles. Includes secure authentication, automated form-filling from stored data, and an end-to-end application workflow built with a focus on scalability and security.",
    tech: ["React", "Node.js", "MongoDB", "AI/NLP"],
    featured: true,
    year: 2025,
    caseStudyUrl: "#",
    codeUrl: "https://github.com/AkashUsumaki",
  },
  {
    icon: Bot,
    title: "Multilingual AI Chatbot",
    tag: "AI · Web",
    desc: "Multilingual AI chatbot integrated with the Gemini API, delivering context-aware responses in German, Russian, Chinese, Hindi, and French. Includes a content-filtering layer that blocks inappropriate or 18+ queries for safe and ethical usage.",
    tech: ["Gemini API", "React", "Node.js", "i18n"],
    featured: true,
    year: 2025,
    caseStudyUrl: "#",
    codeUrl: "https://github.com/AkashUsumaki",
  },
  {
    icon: ImageIcon,
    title: "Creative Poster Design Works",
    tag: "Design · Branding",
    desc: "A curated collection of poster designs for events, social campaigns, and brands — combining bold typography, color, and modern composition.",
    tech: ["Photoshop", "Illustrator", "Canva"],
    year: 2024,
    caseStudyUrl: "#",
  },
];