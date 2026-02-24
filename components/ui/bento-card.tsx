"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "relative overflow-hidden border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
