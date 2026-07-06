import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { k: "Problem Solving", v: "Analytical thinking for real-world challenges" },
  { k: "Technical Skills", v: "Full-stack & AI/ML development expertise" },
  { k: "Idea to Product", v: "Transforming concepts into real products" },
  { k: "Perfectness", v: "Attention to detail in every deliverable" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>Crafting digital <span className="text-gradient">experiences</span> with passion</>}>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg">
          I'm <span className="text-foreground font-medium">Akash K</span>, a passionate MERN Stack Developer,
          AIML Engineer, and Data Analyst. I specialize in building responsive,
          high-performance web applications and crafting intelligent AI-driven solutions for clients,
          startups, and businesses around the world. From elegant UI design to AI-powered
          interfaces, I love turning ideas into polished, production-ready products that
          users genuinely enjoy.
        </motion.p>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.v}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 neon-border">
              <div className="text-3xl font-bold text-gradient">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
