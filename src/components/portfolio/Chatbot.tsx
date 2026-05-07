import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Akash's AI assistant. Ask me about his services, projects, or how to hire him." },
  ]);
  const [v, setV] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    const text = v.trim();
    if (!text || loading) return;
    const next: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setV("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (resp.status === 429) { toast.error("Too many requests. Please slow down."); setLoading(false); return; }
      if (resp.status === 402) { toast.error("AI credits exhausted."); setLoading(false); return; }
      if (!resp.ok || !resp.body) { toast.error("Chat failed. Try again."); setLoading(false); return; }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      setMsgs(m => [...m, { role: "assistant", content: "" }]);
      let done = false;
      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              acc += delta;
              setMsgs(m => m.map((msg, i) => i === m.length - 1 ? { ...msg, content: acc } : msg));
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Network error.");
    } finally {
      setLoading(false);
      requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight }));
    }
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
            <div ref={scrollRef} className="p-3 space-y-2 h-72 overflow-y-auto">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] text-sm px-3 py-2 rounded-2xl ${m.role === "user" ? "text-primary-foreground" : "glass"} prose prose-sm prose-invert max-w-none`}
                    style={m.role === "user" ? { background: "var(--gradient-neon)" } : undefined}>
                    <ReactMarkdown>{m.content || (loading && i === msgs.length - 1 ? "…" : "")}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input value={v} onChange={e => setV(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
                placeholder={loading ? "Thinking..." : "Ask me anything..."}
                disabled={loading}
                className="flex-1 px-3 py-2 rounded-lg bg-input/40 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <button onClick={send} disabled={loading} className="size-9 rounded-lg flex items-center justify-center text-primary-foreground disabled:opacity-50"
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
