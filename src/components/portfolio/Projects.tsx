import { motion } from "framer-motion";
import { Section } from "./Section";
import { Bot, Image as ImageIcon, ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Multilingual AI Chatbot for Government Schemes & Scholarships",
    tag: "AI · Full-stack",
    desc: "AI-powered platform that helps users discover eligible government schemes and scholarships based on their personal details, with multilingual support and step-by-step guidance through the application process.",
    tech: ["Python", "NLP", "React", "AI"],
  },
  {
    icon: ImageIcon,
    title: "Creative Poster Design Works",
    tag: "Design · Branding",
    desc: "A curated collection of poster designs for events, social campaigns, and brands — combining bold typography, color, and modern composition.",
    tech: ["Photoshop", "Illustrator", "Branding"],
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title={<>Selected <span className="text-gradient">work</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass-strong rounded-3xl p-7 overflow-hidden neon-border">
            <div className="absolute -top-20 -right-20 size-60 rounded-full blur-3xl opacity-30"
              style={{ background: "var(--gradient-neon)" }} />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="size-12 rounded-xl flex items-center justify-center glass">
                  <p.icon className="size-6 text-primary" />
                </div>
                <span className="text-[11px] tracking-widest uppercase text-muted-foreground">{p.tag}</span>
              </div>
              <h3 className="text-xl font-semibold leading-snug mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] bg-white/5 border border-border">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition">
                  View case study <ArrowUpRight className="size-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
                  <Github className="size-4" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
