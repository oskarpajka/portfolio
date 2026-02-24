import { siteData } from "@/lib/data";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 mt-auto border-t-8 border-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-8">
          
          {/* Brand */}
          <div className="flex items-center gap-4">
            <span className="text-white font-lora font-black tracking-tighter text-2xl md:text-3xl">
              {siteData.personal.name}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full md:w-auto">
            <Link href={siteData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors flex items-center gap-3 text-sm font-bold uppercase tracking-widest w-full md:w-auto border-b border-white/10 md:border-none pb-4 md:pb-0">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
              GitHub
            </Link>
            <Link href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors flex items-center gap-3 text-sm font-bold uppercase tracking-widest w-full md:w-auto border-b border-white/10 md:border-none pb-4 md:pb-0">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              LinkedIn
            </Link>
            <a href={`mailto:${siteData.personal.email}`} className="hover:text-yellow-400 transition-colors flex items-center gap-3 text-sm font-bold uppercase tracking-widest w-full md:w-auto">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              Email
            </a>
          </div>

        </div>
        
        <div className="mt-12 md:mt-16 pt-8 border-t-4 border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-white/50">
          <p>© {new Date().getFullYear()} {siteData.personal.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
