import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Bot, PenTool, Image as ImageIcon, FileText, Briefcase, Star, Layout } from "lucide-react";

const services = [
  { icon: Code2, t: "Website Development", d: "Modern, responsive websites built with clean code and great performance." },
  { icon: Bot, t: "AI Website Creation", d: "Smart, AI-driven sites and chat experiences tailored to your brand." },
  { icon: Layout, t: "UI/UX Design", d: "Intuitive, beautiful interfaces that turn visitors into users." },
  { icon: ImageIcon, t: "Poster Design", d: "Eye-catching posters and graphics for events, brands, and campaigns." },
  { icon: PenTool, t: "Logo Design", d: "Distinctive, memorable logos that capture your brand identity." },
  { icon: FileText, t: "Data Entry", d: "Fast, accurate data entry and document handling for businesses." },
  { icon: Briefcase, t: "Office Work Support", d: "Word, Excel, PowerPoint, and admin support delivered on time." },
  { icon: Star, t: "Portfolio Website Creation", d: "Standout portfolios for creators, freelancers, and professionals." },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>What I can <span className="text-gradient">build for you</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div key={s.t}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden">
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, oklch(0.82 0.2 195 / 0.15), oklch(0.7 0.27 320 / 0.15))" }} />
            <div className="relative">
              <div className="size-11 rounded-xl flex items-center justify-center mb-4 glass-strong">
                <s.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
