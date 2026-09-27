 "use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface WorkModalProps {
  work: {
    id: string;
    title: string;
    category: string;
    year: string;
    link: string;
    color: string;
    shortDescription: string;
    longDescription: string;
    techStack: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock scroll while open, restoring the previous value on close.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Escape to close, Tab trap, and focus restore.
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !work) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-4 md:p-8">
      {/* Backdrop */}
      <button
        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal backdrop"
      ></button>

      {/* Modal Content */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-modal-title"
        className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-300 sm:max-h-[90vh] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b-4 border-black bg-zinc-100 p-4 sm:p-6 md:p-8">
          <h2 id="work-modal-title" className="text-2xl font-black uppercase tracking-tighter break-words sm:text-3xl md:text-5xl">{work.title}</h2>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close modal"
            className="shrink-0 border-2 border-transparent p-2 transition-colors hover:border-black hover:bg-red-500 hover:text-white"
          >
            <X className="h-7 w-7 md:h-8 md:w-8" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="font-bold uppercase tracking-widest text-sm bg-black text-white px-4 py-2">{work.category}</span>
            <span className="font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2">{work.year}</span>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg font-medium leading-relaxed text-black/80 sm:text-xl md:text-2xl">
              {work.longDescription}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500"></div>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {work.techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-zinc-100 border-2 border-black font-bold uppercase tracking-wider text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t-4 border-black bg-zinc-100 p-4 sm:p-6 md:p-8">
          <Link
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
          >
            View Project
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
