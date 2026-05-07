import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
const items = [
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: MessageCircle, href: "https://wa.me/910000000000" },
];
export function FloatingSocials() {
  return (
    <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {items.map((I, i) => (
        <a key={i} href={I.href} target="_blank" rel="noreferrer"
          className="size-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:scale-110 transition">
          <I.icon className="size-4 text-primary" />
        </a>
      ))}
      <div className="mx-auto h-16 w-px bg-gradient-to-b from-primary/60 to-transparent" />
    </div>
  );
}
