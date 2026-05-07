import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

const replies = [
  "Hi! I'm Akash's AI assistant. Ask me about services, projects, or how to hire him.",
  "Akash builds modern websites, AI-powered apps, and clean UI/UX designs.",
  "You can hire Akash directly from the contact section below!",
  "Feel free to reach out via Email, WhatsApp, or LinkedIn.",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ from: "bot" | "me"; t: string }[]>([{ from: "bot", t: replies[0] }]);
  const [v, setV] = useState("");
  const send = () => {
    if (!v.trim()) return;
    setMsgs(m => [...m, { from: "me", t: v }, { from: "bot", t: replies[(m.length) % replies.length] }]);
    setV("");
  };
  return (
    <>
      <button onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 size-14 rounded-full flex items-center justify-center glow text-primary-foreground"
        style={{ background: "var(--gradient-neon)" }}>
        {open ? <X className="size-5" /> : <Bot className="size-6" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-5 z-50 w-[88vw] max-w-sm rounded-2xl glass-strong neon-border overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center gap-2">
              <Bot className="size-4 text-primary" /><span className="font-medium text-sm">Akash AI</span>
              <span className="ml-auto text-[11px] text-muted-foreground">Online</span>
            </div>
            <div className="p-3 space-y-2 h-72 overflow-y-auto">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] text-sm px-3 py-2 rounded-2xl ${m.from === "me" ? "text-primary-foreground" : "glass"}`}
                    style={m.from === "me" ? { background: "var(--gradient-neon)" } : undefined}>
                    {m.t}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input value={v} onChange={e => setV(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-lg bg-input/40 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <button onClick={send} className="size-9 rounded-lg flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-neon)" }}>
                <Send className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
