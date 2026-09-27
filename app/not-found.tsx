import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 min-h-[calc(100svh-5rem)]">
      <div className="border-4 border-black bg-white p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-sm font-black uppercase tracking-widest bg-black text-white inline-block px-4 py-2 mb-6">404</p>
        <h1 className="text-5xl md:text-7xl font-lora tracking-tighter mb-4">Lost?</h1>
        <p className="font-medium text-black/70 max-w-md mb-8">
          This page doesn&apos;t exist. Head back home to keep exploring.
        </p>
        <Link
          href="/"
          className="inline-block border-4 border-black bg-yellow-400 px-8 py-4 font-black uppercase tracking-widest transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
