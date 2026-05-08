import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle, Send, Briefcase, Loader2 } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/AkashUsumaki" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akashkasiit" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/_mr_._unique_01" },
  { icon: Mail, label: "Email", href: "mailto:akashan54321@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/918610213770" },
  { icon: Phone, label: "Phone", href: "tel:+918610213770" },
  { icon: Briefcase, label: "Freelancer", href: "https://www.freelancer.in/u/akashkasi01" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_xqq9qdm",
        "template_wuzw1mm",
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
        { publicKey: "EK9dbN_TlaBQ96HzW" }
      );
      toast.success("Message sent ✓ I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

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
          onSubmit={handleSubmit}
          className="glass-strong rounded-2xl p-6 md:p-8 neon-border space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required maxLength={100} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" maxLength={255} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} required maxLength={150} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} maxLength={1000} className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
          </div>
          <motion.button type="submit" disabled={loading} whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-primary-foreground font-medium glow disabled:opacity-70"
            style={{ background: "var(--gradient-neon)" }}>
            {loading ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : <><Send className="size-4" /> Send Message</>}
          </motion.button>
        </form>
      </div>
    </Section>
  );
}
