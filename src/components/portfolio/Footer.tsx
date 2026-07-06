export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="font-display font-bold text-foreground">Akash K</span> — MERN Stack Developer · AIML Engineer · Data Analyst
        </div>
        <div>© {new Date().getFullYear()} Akash K. All rights reserved.</div>
      </div>
    </footer>
  );
}
