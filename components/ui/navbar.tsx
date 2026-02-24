import Link from "next/link";
import { siteData } from "@/lib/data";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-lora font-black text-xl md:text-2xl tracking-tighter flex items-center gap-2 md:gap-3 group">
          <span className="hidden sm:inline">{siteData.personal.name}</span>
          <span className="sm:hidden">{siteData.personal.name.split(' ')[0]}</span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm font-bold uppercase tracking-widest text-black">
          <Link href="#about" className="border-2 border-black px-3 py-1.5 md:px-4 md:py-2 hover:bg-red-500 hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">About</Link>
          <Link href="#work" className="border-2 border-black px-3 py-1.5 md:px-4 md:py-2 hover:bg-orange-500 hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Work</Link>
          <Link href="#contact" className="border-2 border-black px-3 py-1.5 md:px-4 md:py-2 hover:bg-purple-500 hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
