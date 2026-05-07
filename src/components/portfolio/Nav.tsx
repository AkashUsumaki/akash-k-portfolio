import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#hire", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all ${scrolled ? "glass-strong px-5 py-2" : ""}`}>
        <a href="#home" className="font-display text-lg font-bold">
          <span className="text-gradient">Akash</span>.K
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLight(v => !v)} aria-label="Toggle theme"
            className="p-2 rounded-lg glass hover:bg-white/10 transition">
            {light ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-lg glass">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-5 mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
