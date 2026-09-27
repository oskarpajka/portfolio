import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Oskar Pajka portfolio website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="inline-block mb-8 text-xs font-bold uppercase tracking-widest border-2 border-black px-4 py-2 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
      >
        ← Back to home
      </Link>
      <h1 className="text-4xl md:text-6xl font-lora tracking-tighter mb-8">Terms of Service</h1>
      <p className="text-sm font-bold uppercase tracking-widest text-black/60 mb-10">Effective date: April 11, 2026</p>
      <div className="space-y-8 text-black/80 leading-relaxed">
        <section aria-labelledby="tos-use">
          <h2 id="tos-use" className="text-2xl font-lora tracking-tight text-black mb-3">Acceptable use</h2>
          <p>By using this website, you agree to use it lawfully and respectfully. This portfolio and its content are provided for informational purposes only.</p>
        </section>
        <section aria-labelledby="tos-ip">
          <h2 id="tos-ip" className="text-2xl font-lora tracking-tight text-black mb-3">Intellectual property</h2>
          <p>Unless otherwise stated, all content on this site is owned by Oskar Pajka. You may not copy, republish, or redistribute content for commercial use without permission.</p>
        </section>
        <section aria-labelledby="tos-liability">
          <h2 id="tos-liability" className="text-2xl font-lora tracking-tight text-black mb-3">Disclaimer</h2>
          <p>This site is provided &quot;as is&quot; without warranties of any kind. I am not liable for any damages resulting from your use of this website.</p>
        </section>
        <section aria-labelledby="tos-changes">
          <h2 id="tos-changes" className="text-2xl font-lora tracking-tight text-black mb-3">Changes</h2>
          <p>These terms may be updated at any time. Continued use of the website after changes means you accept the updated terms.</p>
        </section>
        <section aria-labelledby="tos-contact">
          <h2 id="tos-contact" className="text-2xl font-lora tracking-tight text-black mb-3">Contact</h2>
          <p>Contact: <a href="mailto:hello@oskarpajka.me" className="underline underline-offset-2 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">hello@oskarpajka.me</a></p>
        </section>
      </div>
    </main>
  );
}
