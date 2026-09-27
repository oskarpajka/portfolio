"use client";

import { useSyncExternalStore } from "react";
import { Globe } from "lucide-react";

const TIME_ZONE = "Europe/Warsaw";
const TIME_ZONE_LABEL = "Warsaw (CET)";
const PLACEHOLDER = "--:--:--";

let cachedFormatter: Intl.DateTimeFormat | null = null;

// Lazily built and cached; falls back to local time if the IANA zone is unsupported.
function getFormatter(): Intl.DateTimeFormat {
  if (!cachedFormatter) {
    try {
      cachedFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: TIME_ZONE,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    } catch {
      cachedFormatter = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    }
  }
  return cachedFormatter;
}

function subscribeToClock(onTick: () => void): () => void {
  const interval = setInterval(onTick, 1000);
  return () => clearInterval(interval);
}

export function LiveTimeWidget() {
  // SSR-safe: server and hydration render the placeholder, client then shows live time.
  const time = useSyncExternalStore(
    subscribeToClock,
    () => getFormatter().format(new Date()),
    () => PLACEHOLDER,
  );
  const mounted = time !== PLACEHOLDER;

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0" aria-hidden="true">
        <Globe className="w-4 h-4 text-blue-400" aria-hidden="true" />
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50 leading-none">Local Time — {TIME_ZONE_LABEL}</span>
          <span className="text-sm font-bold font-mono tracking-wider leading-none mt-1">{PLACEHOLDER}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-3 bg-black text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-opacity duration-300"
      role="timer"
      aria-label={`Current local time in ${TIME_ZONE_LABEL}`}
    >
      <Globe className="w-4 h-4 animate-pulse text-blue-400" aria-hidden="true" />
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-white/50 leading-none">Local Time — {TIME_ZONE_LABEL}</span>
        <span className="text-sm font-bold font-mono tracking-wider leading-none mt-1" aria-hidden="true">{time}</span>
      </div>
    </div>
  );
}
