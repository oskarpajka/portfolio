// Site content for the portfolio.
// Update this file to change skills, projects, and links without touching UI code.

// Fallback used when NEXT_PUBLIC_CONTACT_EMAIL is unset or invalid.
export const FALLBACK_CONTACT_EMAIL = "hello@oskarpajka.me";

export interface Personal {
  name: string;
  role: string;
  bio: string;
  availability: string;
  currentFocus: string;
  email: string;
}

export interface Socials {
  github: string;
  linkedin: string;
}

export interface BentoProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  color: string;
  iconBg: string;
  iconColor: string;
  textColor?: string;
}

export interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  year: string;
  link: string;
  color: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
}

export interface ContactCta {
  heading: string;
  subheading: string;
  emailSubject: string;
}

export interface SiteData {
  personal: Personal;
  socials: Socials;
  skills: string[];
  bentoProjects: BentoProject[];
  featuredWorks: FeaturedWork[];
  contact: ContactCta;
  siteUrl: string;
}

function resolveContactEmail(value: string | undefined): string {
  const email = (value ?? "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : FALLBACK_CONTACT_EMAIL;
}

export const siteData: SiteData = {
  personal: {
    name: "Oskar Pajka",
    role: "Full-Stack Developer",
    bio: "A Full-Stack Developer passionate about building clean, fast, and accessible web applications. I love experimenting with new frameworks.",
    availability: "Available for work",
    currentFocus: "Unity3D",
    email: resolveContactEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  },
  socials: {
    github: "https://github.com/oskarpajka",
    linkedin: "https://www.linkedin.com/in/oskarpajka",
  },
  skills: [
    "Swift",
    "SwiftUI",
    "Xcode",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Python",
    "Unity3D",
  ],
  bentoProjects: [
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js App Router and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      link: "https://github.com/oskarpajka/portfolio",
      color: "bg-white",
      iconBg: "bg-red-500",
      iconColor: "text-white",
    },
    {
      id: "cera",
      title: "Cera",
      description: "Context-aware iOS translation app improving accuracy by leveraging surrounding context.",
      tech: ["SwiftUI", "Xcode", "iOS"],
      link: "https://github.com/oskarpajka/Cera",
      color: "bg-orange-500",
      iconBg: "bg-black",
      iconColor: "text-white",
      textColor: "text-white",
    },
  ],
  featuredWorks: [
    {
      id: "cera-translator",
      title: "Cera Translator",
      category: "Mobile App",
      year: "2026",
      link: "https://github.com/oskarpajka/Cera",
      color: "hover:bg-yellow-400",
      shortDescription: "Context-aware iOS translation app built with SwiftUI.",
      longDescription:
        "Cera improves translation accuracy by passing surrounding conversation context to the model instead of isolated sentences. Built with SwiftUI and Xcode, it caches recent translations locally and keeps the UI fully usable offline, with a focus on fast input and VoiceOver-friendly controls.",
      techStack: ["SwiftUI", "Swift", "Xcode"],
    },
    {
      id: "portfolio-platform",
      title: "Portfolio Platform",
      category: "Web Application",
      year: "2025",
      link: "https://github.com/oskarpajka/portfolio",
      color: "hover:bg-purple-500",
      shortDescription: "Personal portfolio on the Next.js App Router with Tailwind.",
      longDescription:
        "This site: a Next.js App Router portfolio with server-rendered pages, route-level metadata, and a sitemap for SEO. Content lives in a single typed data module so projects and skills update without touching layout code. Styled with Tailwind CSS and animated with Framer Motion while keeping keyboard navigation and focus states intact.",
      techStack: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      id: "unity-prototype",
      title: "Unity Prototype",
      category: "Game Prototype",
      year: "2025",
      link: "https://github.com/oskarpajka",
      color: "hover:bg-red-500",
      shortDescription: "Unity3D gameplay prototype exploring movement and interaction.",
      longDescription:
        "A Unity3D prototype for experimenting with character movement, interaction prompts, and scene flow. Built with C# scripting and Unity's input system, it served as a sandbox for iteration speed: small scenes, readable state transitions, and tunable movement values exposed in the inspector.",
      techStack: ["Unity3D", "C#", "Python"],
    },
    {
      id: "api-starter",
      title: "API Starter",
      category: "Tooling",
      year: "2024",
      link: "https://github.com/oskarpajka",
      color: "hover:bg-orange-500",
      shortDescription: "Typed Node.js API starter with Postgres and validation.",
      longDescription:
        "A minimal TypeScript API starter with Node.js, PostgreSQL, and schema validation on every route. Includes typed database access, request logging, and environment-checked configuration, so new endpoints start from tested patterns instead of boilerplate.",
      techStack: ["TypeScript", "Node.js", "PostgreSQL"],
    },
  ],
  contact: {
    heading: "Let's Build.",
    subheading:
      "I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    emailSubject: "Hello from your portfolio",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://oskarpajka.me",
};
