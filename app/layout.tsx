import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Oskar Pajka | Full-Stack Developer",
  description: "Portfolio of Oskar Pajka, a Full-Stack Developer specializing in modern web technologies.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Oskar Pajka | Full-Stack Developer",
    description: "Portfolio of Oskar Pajka, a Full-Stack Developer specializing in modern web technologies.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Oskar Pajka Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased bg-white text-black selection:bg-black selection:text-white relative min-h-screen flex flex-col overflow-x-hidden"
      >
        <div className="fixed inset-0 pointer-events-none bg-noise z-50 mix-blend-overlay opacity-50"></div>
        <div className="fixed inset-0 pointer-events-none bg-dots opacity-30 z-0"></div>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
