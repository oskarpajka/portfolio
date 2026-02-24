"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !work) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <button 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity w-full h-full cursor-default"
        onClick={onClose}
        aria-label="Close modal backdrop"
      ></button>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b-4 border-black bg-zinc-100">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{work.title}</h2>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-black transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="font-bold uppercase tracking-widest text-sm bg-black text-white px-4 py-2">{work.category}</span>
            <span className="font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2">{work.year}</span>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-black/80">
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
        <div className="p-6 md:p-8 border-t-4 border-black bg-zinc-100 flex justify-end">
          <Link 
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-colors group"
          >
            View Project
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
