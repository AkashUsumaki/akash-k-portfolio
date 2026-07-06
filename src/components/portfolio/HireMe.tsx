import { motion } from "framer-motion";
import { Section } from "./Section";
import { CheckCircle2, MessagesSquare, Lightbulb, Wrench, Users, Zap, HeartHandshake } from "lucide-react";

const traits = [
  { icon: Wrench, t: "Technical Skills", d: "Solid stack across web, AI, and databases." },
  { icon: MessagesSquare, t: "Communication", d: "Clear, frequent updates throughout the project." },
  { icon: Lightbulb, t: "Creativity", d: "Fresh ideas and design thinking on every brief." },
  { icon: Zap, t: "Problem Solving", d: "Calm under pressure with practical solutions." },
  { icon: CheckCircle2, t: "Professional Approach", d: "Reliable timelines, clean handoffs, no surprises." },
  { icon: HeartHandshake, t: "Adaptability", d: "Quick to learn new tools, frameworks, and workflows." },
  { icon: Users, t: "Team Collaboration", d: "Comfortable with async teams, agencies, and clients." },
];

export function HireMe() {
  return (
    <Section id="hire" title={<>Why <span className="text-gradient">work with me</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {traits.map((t, i) => (
          <motion.div key={t.t}
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-lg flex items-center justify-center glass-strong">
                <t.icon className="size-5 text-accent" />
              </div>
              <h3 className="font-semibold">{t.t}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
