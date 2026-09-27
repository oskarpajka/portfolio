import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oskar Pajka | Full-Stack Developer",
    template: "%s | Oskar Pajka",
  },
  description: "Portfolio of Oskar Pajka, a Full-Stack Developer specializing in modern web technologies.",
  authors: [{ name: "Oskar Pajka" }],
  creator: "Oskar Pajka",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Oskar Pajka | Full-Stack Developer",
    description: "Portfolio of Oskar Pajka, a Full-Stack Developer specializing in modern web technologies.",
    url: siteUrl,
    siteName: "Oskar Pajka Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oskar Pajka | Full-Stack Developer",
    description: "Portfolio of Oskar Pajka, a Full-Stack Developer specializing in modern web technologies.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
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
  themeColor: "#000000",
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[10000] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>
        <div className="fixed inset-0 pointer-events-none bg-noise z-50 mix-blend-overlay opacity-50"></div>
        <div className="fixed inset-0 pointer-events-none bg-dots opacity-30 z-0"></div>
        <Navbar />
        <div id="main-content" className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
