"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

export function LiveTimeWidget() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Warsaw", // Change this to your actual timezone
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const updateTime = () => {
      const now = new Date();
      setTime(formatter.format(now));
    };

    updateTime();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0">
        <Globe className="w-4 h-4 text-blue-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50 leading-none">Local Time</span>
          <span className="text-sm font-bold font-mono tracking-wider leading-none mt-1">00:00:00</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-opacity duration-300">
      <Globe className="w-4 h-4 animate-pulse text-blue-400" />
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-white/50 leading-none">Local Time</span>
        <span className="text-sm font-bold font-mono tracking-wider leading-none mt-1">{time}</span>
      </div>
    </div>
  );
}
