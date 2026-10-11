import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import profile from "@/assets/akash-profile.png";

const ROLES = ["MERN Stack Developer", "AIML Engineer", "Data Analyst"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = ROLES[i % ROLES.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text === word) setTimeout(() => setDel(true), 1200);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text === "") { setDel(false); setI(i + 1); }
      }
    }, del ? 50 : 90);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-gradient">{text}<span className="caret text-primary">|</span></span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[800px] radial-spot pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="size-1.5 rounded-full bg-primary glow" /> Available for freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Akash K</span>
            <br />
            <span className="text-foreground/90">A passionate</span>
            <br />
            <Typewriter />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            I build modern, responsive websites, craft AI-powered web experiences,
            and design clean, brand-forward interfaces for startups, businesses, and creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3">
            <a href="#hire" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-primary-foreground font-medium glow transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-neon)" }}>
              <Briefcase className="size-4" /> Hire Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/Akash-K-Resume.jpg" download="Akash-K-Resume.jpg" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-white/10 transition">
              <Download className="size-4" /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-white/5 transition">
              <Sparkles className="size-4" /> View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="relative mx-auto">
          <div className="relative size-72 md:size-80 float-y">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-neon)" }} />
            <div className="absolute inset-0 rounded-full spin-slow"
              style={{ background: "conic-gradient(from 0deg, transparent, oklch(0.78 0.18 200 / 0.7), transparent 40%, oklch(0.7 0.27 320 / 0.7), transparent 80%)" }} />
            <div className="absolute inset-2 profile-perspective">
              <div className="profile-flip size-full">
                <div className="profile-face rounded-full overflow-hidden glass-strong">
                  <img src={profile} alt="Akash K" width={768} height={768} className="size-full object-cover" />
                </div>
                <div className="profile-face profile-face-back rounded-full overflow-hidden glass-strong" aria-hidden="true">
                  <img src={profile} alt="" width={768} height={768} className="size-full object-cover" />
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-10 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs">
              <Code2 className="size-4 text-primary" /> Clean Code
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 bottom-8 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs">
              <Palette className="size-4 text-accent" /> Pixel Perfect
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
