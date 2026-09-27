import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for the Oskar Pajka portfolio website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-block mb-8 text-xs font-bold uppercase tracking-widest border-2 border-black px-4 py-2 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
      >
        ← Back to home
      </Link>
      <h1 className="text-4xl md:text-6xl font-lora tracking-tighter mb-8">Cookie Policy</h1>
      <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-10">Effective date: April 11, 2026</p>
      <div className="space-y-8 text-black/80 leading-relaxed">
        <section aria-labelledby="cp-essential">
          <h2 id="cp-essential" className="text-2xl font-lora tracking-tight text-black mb-3">What this site uses</h2>
          <p>This portfolio website does not currently use non-essential cookies for advertising, profiling, or analytics.</p>
        </section>
        <section aria-labelledby="cp-technical">
          <h2 id="cp-technical" className="text-2xl font-lora tracking-tight text-black mb-3">Essential technical storage</h2>
          <p>Essential technical storage may still be used by the hosting platform for security, load balancing, and basic delivery of content.</p>
        </section>
        <section aria-labelledby="cp-future">
          <h2 id="cp-future" className="text-2xl font-lora tracking-tight text-black mb-3">Future changes</h2>
          <p>If non-essential cookies are added in the future, this policy will be updated and a cookie consent mechanism will be introduced where required.</p>
        </section>
        <section aria-labelledby="cp-contact">
          <h2 id="cp-contact" className="text-2xl font-lora tracking-tight text-black mb-3">Contact</h2>
          <p>Contact: <a href="mailto:hello@oskarpajka.me" className="underline underline-offset-2 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">hello@oskarpajka.me</a></p>
        </section>
      </div>
    </main>
  );
}
