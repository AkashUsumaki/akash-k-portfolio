import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 max-w-2xl">
          {eyebrow && <div className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">{eyebrow}</div>}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
