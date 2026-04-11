import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Oskar Pajka",
  description: "Terms of Service for the Oskar Pajka portfolio website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-lora tracking-tighter mb-8">Terms of Service</h1>
      <div className="space-y-6 text-black/80 leading-relaxed">
        <p>Effective date: April 11, 2026</p>
        <p>By using this website, you agree to use it lawfully and respectfully. This portfolio and its content are provided for informational purposes only.</p>
        <p>Unless otherwise stated, all content on this site is owned by Oskar Pajka. You may not copy, republish, or redistribute content for commercial use without permission.</p>
        <p>This site is provided &quot;as is&quot; without warranties of any kind. I am not liable for any damages resulting from your use of this website.</p>
        <p>These terms may be updated at any time. Continued use of the website after changes means you accept the updated terms.</p>
        <p>Contact: hello@oskarpajka.me</p>
      </div>
    </main>
  );
}
