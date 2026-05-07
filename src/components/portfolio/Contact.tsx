import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle, Send, Briefcase } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Mail, label: "Email", href: "mailto:akash@example.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/910000000000" },
  { icon: Phone, label: "Phone", href: "tel:+910000000000" },
  { icon: Briefcase, label: "Freelancer", href: "https://freelancer.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build <span className="text-gradient">something great</span></>}>
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-8">
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-2">Reach out</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Available for freelance projects, collaborations, and full-time opportunities.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-border bg-white/[0.03] hover:bg-white/[0.07] transition">
                <s.icon className="size-4 text-primary" />
                <span className="text-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong rounded-2xl p-6 md:p-8 neon-border space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input required maxLength={100} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input required type="email" maxLength={255} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Subject</label>
            <input required maxLength={150} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea required rows={5} maxLength={1000} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-primary-foreground font-medium glow"
            style={{ background: "var(--gradient-neon)" }}>
            <Send className="size-4" /> {sent ? "Message Sent ✓" : "Send Message"}
          </motion.button>
        </form>
      </div>
    </Section>
  );
}
