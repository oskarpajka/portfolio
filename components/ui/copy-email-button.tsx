"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/data";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Validated env fallback lives in lib/data.ts.
  const email = siteData.personal.email;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const legacyCopy = (text: string): boolean => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else if (!legacyCopy(email)) {
        throw new Error("Clipboard unavailable");
      }
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Email ${email} copied to clipboard` : `Copy email address ${email} to clipboard`}
      className={cn(
        "group flex items-center gap-3 border-2 border-white bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black",
        copied && "bg-green-500 border-green-500 text-black hover:bg-green-400 hover:border-green-400"
      )}
    >
      {copied ? (
        <Check className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Copy className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
      )}
      <span aria-hidden="true">{copied ? "Copied!" : email}</span>
      <span aria-live="polite" className="sr-only">
        {copied ? `Email ${email} copied to clipboard` : ""}
      </span>
    </button>
  );
}
