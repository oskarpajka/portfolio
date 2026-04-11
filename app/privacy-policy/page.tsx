import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Oskar Pajka",
  description: "Privacy Policy for the Oskar Pajka portfolio website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-lora tracking-tighter mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-black/80 leading-relaxed">
        <p>Effective date: April 11, 2026</p>
        <p>This website is a personal portfolio. It does not require account creation and does not intentionally collect sensitive personal data.</p>
        <p>If you contact me by email, I only use the information you provide to respond to your message. I do not sell your personal information.</p>
        <p>This site may be hosted by third-party infrastructure providers that process basic technical logs (such as IP address and request metadata) for security and reliability purposes.</p>
        <p>I may update this policy from time to time. Continued use of the site after updates means you accept the revised policy.</p>
        <p>Contact: hello@oskarpajka.me</p>
      </div>
    </main>
  );
}
