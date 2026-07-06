import { motion } from "framer-motion";
import { Section } from "./Section";

const technical = [
  { n: "HTML", v: 95 }, { n: "CSS", v: 92 }, { n: "JavaScript", v: 88 },
  { n: "React", v: 88 }, { n: "NodeJS", v: 86 }, { n: "ExpressJS", v: 85 },
  { n: "Python", v: 85 }, { n: "Java", v: 75 }, { n: "MySQL", v: 82 },
  { n: "MongoDB", v: 80 }, { n: "ML", v: 78 }, { n: "Prompt with AI", v: 85 },
];
const creative = [
  "Website Development", "AI Website Creation", "UI/UX Design",
  "Logo Design", "Poster Design", "Portfolio Website Creation",
];
const office = [
  "MS Word", "Excel", "PowerPoint", "Data Entry", "Typing",
  "Communication", "Problem Solving",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>A toolkit built for <span className="text-gradient">modern work</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-6">Technical Proficiency</h3>
          <div className="space-y-5">
            {technical.map((s, i) => (
              <div key={s.n}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground/90">{s.n}</span>
                  <span className="text-muted-foreground">{s.v}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.07, ease: "easeOut" }}
                    className="h-full rounded-full glow"
                    style={{ background: "var(--gradient-neon)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <div className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-4">Creative & Web</h3>
            <div className="flex flex-wrap gap-2">
              {creative.map((c, i) => (
                <motion.span key={c}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 rounded-full text-xs glass-strong neon-border">
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-4">Office & Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {office.map((c, i) => (
                <motion.span key={c}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 rounded-full text-xs border border-border bg-white/[0.03]">
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
