import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Oskar Pajka",
  description: "Cookie Policy for the Oskar Pajka portfolio website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-lora tracking-tighter mb-8">Cookie Policy</h1>
      <div className="space-y-6 text-black/80 leading-relaxed">
        <p>Effective date: April 11, 2026</p>
        <p>This portfolio website does not currently use non-essential cookies for advertising, profiling, or analytics.</p>
        <p>Essential technical storage may still be used by the hosting platform for security, load balancing, and basic delivery of content.</p>
        <p>If non-essential cookies are added in the future, this policy will be updated and a cookie consent mechanism will be introduced where required.</p>
        <p>Contact: hello@oskarpajka.me</p>
      </div>
    </main>
  );
}
