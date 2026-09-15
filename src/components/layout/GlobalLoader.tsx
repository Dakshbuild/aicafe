"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-3xl font-serif font-bold text-primary mb-6 tracking-widest uppercase">
              Lumina
            </h1>
            
            <p className="text-xs font-sans text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Brewing your experience...
            </p>
            
            {/* Animated Line */}
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary/80"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
