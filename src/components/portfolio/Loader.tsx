import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          <div className="relative">
            <div className="size-20 rounded-full border-2 border-white/10" />
            <div className="absolute inset-0 size-20 rounded-full border-2 border-transparent spin-slow"
              style={{ borderTopColor: "oklch(0.78 0.18 200)", borderRightColor: "oklch(0.7 0.27 320)" }} />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-display text-gradient font-bold">AK</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
