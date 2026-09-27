import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Oskar Pajka portfolio website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-block mb-8 text-xs font-bold uppercase tracking-widest border-2 border-black px-4 py-2 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
      >
        ← Back to home
      </Link>
      <h1 className="text-4xl md:text-6xl font-lora tracking-tighter mb-8">Privacy Policy</h1>
      <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-10">Effective date: April 11, 2026</p>
      <div className="space-y-8 text-black/80 leading-relaxed">
        <section aria-labelledby="pp-overview">
          <h2 id="pp-overview" className="text-2xl font-lora tracking-tight text-black mb-3">Overview</h2>
          <p>This website is a personal portfolio. It does not require account creation and does not intentionally collect sensitive personal data.</p>
        </section>
        <section aria-labelledby="pp-contact">
          <h2 id="pp-contact" className="text-2xl font-lora tracking-tight text-black mb-3">Contact data</h2>
          <p>If you contact me by email, I only use the information you provide to respond to your message. I do not sell your personal information.</p>
        </section>
        <section aria-labelledby="pp-hosting">
          <h2 id="pp-hosting" className="text-2xl font-lora tracking-tight text-black mb-3">Hosting and logs</h2>
          <p>This site may be hosted by third-party infrastructure providers that process basic technical logs (such as IP address and request metadata) for security and reliability purposes.</p>
        </section>
        <section aria-labelledby="pp-changes">
          <h2 id="pp-changes" className="text-2xl font-lora tracking-tight text-black mb-3">Changes</h2>
          <p>I may update this policy from time to time. Continued use of the site after updates means you accept the revised policy.</p>
        </section>
        <section aria-labelledby="pp-contact-info">
          <h2 id="pp-contact-info" className="text-2xl font-lora tracking-tight text-black mb-3">Contact</h2>
          <p>Contact: <a href="mailto:hello@oskarpajka.me" className="underline underline-offset-2 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">hello@oskarpajka.me</a></p>
        </section>
      </div>
    </main>
  );
}
