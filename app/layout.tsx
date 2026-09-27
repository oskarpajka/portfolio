import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oskarpajka.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oskar Pajka | Full-Stack Developer",
    template: "%s | Oskar Pajka",
  },
  description:
    "Portfolio of Oskar Pajka, a Full-Stack Developer building clean, fast, and accessible web applications with Next.js, React, and TypeScript.",
  keywords: [
    "Oskar Pajka",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Oskar Pajka" }],
  creator: "Oskar Pajka",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oskar Pajka | Full-Stack Developer",
    description:
      "Portfolio of Oskar Pajka, a Full-Stack Developer building clean, fast, and accessible web applications.",
    url: siteUrl,
    siteName: "Oskar Pajka Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oskar Pajka | Full-Stack Developer",
    description:
      "Portfolio of Oskar Pajka, a Full-Stack Developer building clean, fast, and accessible web applications.",
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none bg-noise z-50 mix-blend-overlay opacity-50"></div>
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none bg-dots opacity-30 z-0"></div>
        <Navbar />
        {/* Pages render their own <main> landmark; this wrapper only grows layout. */}
        {/* tabIndex -1 lets keyboard users land on the skip-link target. */}
        <div id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
