"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@oskarpajka.me";

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    const showCopied = () => {
      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    };

    try {
      await navigator.clipboard.writeText(email);
      showCopied();
    } catch {
      try {
        // Fallback for non-secure contexts where the Clipboard API is unavailable.
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showCopied();
      } catch (err) {
        console.error("Failed to copy email", err);
      }
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Email address copied" : `Copy email address ${email}`}
      className={cn(
        "group flex items-center gap-3 border-2 border-white bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black",
        copied && "bg-green-500 border-green-500 text-black hover:bg-green-400 hover:border-green-400"
      )}
    >
      {copied ? (
        <Check className="h-5 w-5" />
      ) : (
        <Copy className="h-5 w-5 transition-transform group-hover:scale-110" />
      )}
      <span>{copied ? "Copied!" : email}</span>
    </button>
  );
}
