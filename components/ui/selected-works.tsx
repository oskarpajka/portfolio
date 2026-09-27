"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { WorkModal } from "@/components/ui/work-modal";
import { siteData } from "@/lib/data";

type Work = (typeof siteData.featuredWorks)[number];

export function SelectedWorks({ works }: { works: Work[] }) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work, index) => (
          <FadeIn key={work.id} delay={index * 100}>
            <button
              onClick={() => setSelectedWork(work)}
              aria-label={`View details for ${work.title}`}
              className={`w-full text-left group flex flex-col justify-between p-8 border-4 border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${work.color} min-h-[300px] cursor-pointer h-full`}
            >
              <div className="flex justify-between items-start mb-8 w-full">
                <span className="text-4xl font-black text-black/30">0{index + 1}</span>
                <div className="p-3 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors border-2 border-transparent group-hover:border-black">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  {work.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="font-bold uppercase tracking-widest text-xs bg-white/50 px-3 py-1 border-2 border-black">{work.category}</span>
                  <span className="font-bold uppercase tracking-widest text-xs bg-black text-white px-3 py-1">{work.year}</span>
                </div>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      <WorkModal
        work={selectedWork}
        isOpen={!!selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </>
  );
}
