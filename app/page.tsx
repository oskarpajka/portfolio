"use client";

import { useState } from "react";
import { BentoCard } from "@/components/ui/bento-card";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { LiveTimeWidget } from "@/components/ui/live-time-widget";
import { WorkModal } from "@/components/ui/work-modal";
import { FadeIn } from "@/components/ui/fade-in";
import { Github, Linkedin, ExternalLink, Terminal, Database, Layout, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<typeof siteData.featuredWorks[0] | null>(null);

  return (
    <>
      <main className="relative z-10">
        {/* ABOUT / HERO SECTION */}
        <section id="about" className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto pt-6 md:pt-20 relative min-h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[200px] grid-flow-dense">
          
          {/* Hero / Bio Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-between bg-yellow-400 min-h-[300px] md:min-h-0 relative" delay={0.1}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full z-0 pointer-events-none"></div>
            <div className="mt-12 md:mt-0 relative z-10">
              <h1 className="text-6xl md:text-8xl font-lora tracking-tighter text-black mb-4 leading-none">
                Hi, I&apos;m<br/>{siteData.personal.name.split(' ')[0]}.
              </h1>
              <p className="text-base md:text-lg text-black/80 max-w-md font-medium">
                {siteData.personal.bio}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 relative z-10">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest bg-black text-white px-4 py-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                {siteData.personal.availability}
              </div>
              <div className="self-end sm:self-auto">
                <LiveTimeWidget />
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard className="md:col-span-1 lg:col-span-2 md:row-span-1 flex flex-col justify-center bg-white min-h-[200px] md:min-h-0 overflow-hidden" delay={0.2}>
            <h2 className="text-sm font-black text-black mb-6 uppercase tracking-widest flex items-center gap-2 relative z-10">
              <div className="w-2 h-2 bg-red-500"></div>
              Core Stack
            </h2>
            
            <div className="relative overflow-x-hidden group">
              <div className="animate-marquee-track flex w-max items-center gap-4 pr-4 whitespace-nowrap">
                {siteData.skills.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-black text-white text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
                <div className="flex items-center gap-4 pr-4" aria-hidden="true">
                  {siteData.skills.map((tech) => (
                    <span key={`${tech}-dup`} className="px-4 py-2 bg-black text-white text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-white hover:text-black transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gradient masks for smooth fade out on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </BentoCard>

          {/* Socials */}
          <BentoCard className="md:col-span-1 lg:col-span-1 md:row-span-1 flex flex-col gap-4 bg-purple-500 text-white min-h-[200px] md:min-h-0" delay={0.3}>
            <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400"></div>
              Connect
            </h2>
            <div className="flex flex-col gap-3 h-full justify-center">
              <Link href={siteData.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm md:text-base">
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <div className="h-0.5 w-full bg-white/20"></div>
              <Link href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                <div className="flex items-center gap-3 font-bold uppercase tracking-wider text-sm md:text-base">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </BentoCard>

          {/* Project 1 */}
          <BentoCard className={`md:col-span-2 lg:col-span-2 md:row-span-2 group ${siteData.bentoProjects[0].color} min-h-[300px] md:min-h-0 p-0`} delay={0.4}>
            <Link href={siteData.bentoProjects[0].link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full justify-between p-6 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className={`p-3 md:p-4 ${siteData.bentoProjects[0].iconBg} ${siteData.bentoProjects[0].iconColor}`}>
                  <Layout className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="p-2 bg-black text-white group-hover:bg-red-500 transition-colors">
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-2xl md:text-3xl font-black text-black mb-2 uppercase tracking-tighter">{siteData.bentoProjects[0].title}</h3>
                <p className="text-black/70 font-medium mb-6 text-sm md:text-base">{siteData.bentoProjects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {siteData.bentoProjects[0].tech.map(t => (
                    <span key={t} className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-zinc-100 px-2 md:px-3 py-1 border-2 border-black">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </BentoCard>

          {/* Project 2 */}
          <BentoCard className={`md:col-span-1 lg:col-span-1 md:row-span-2 group ${siteData.bentoProjects[1].color} ${siteData.bentoProjects[1].textColor} min-h-[300px] md:min-h-0 p-0`} delay={0.5}>
            <Link href={siteData.bentoProjects[1].link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full justify-between p-6 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className={`p-3 ${siteData.bentoProjects[1].iconBg} ${siteData.bentoProjects[1].iconColor}`}>
                  <Database className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="p-2 bg-white text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter">{siteData.bentoProjects[1].title}</h3>
                <p className="text-white/90 font-medium text-xs md:text-sm mb-4">{siteData.bentoProjects[1].description}</p>
                <div className="flex flex-wrap gap-2">
                  {siteData.bentoProjects[1].tech.map(t => (
                    <span key={t} className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-black px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </BentoCard>

          {/* The Lab / Experimenting */}
          <BentoCard className="md:col-span-1 lg:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center bg-white min-h-[200px] md:min-h-0 relative overflow-hidden" delay={0.6}>
            <Terminal className="w-8 h-8 md:w-10 md:h-10 text-black mb-4 relative z-10" />
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest relative z-10">Exploring</h3>
            <p className="text-xs md:text-sm font-medium text-black/60 mt-1 relative z-10">{siteData.personal.currentFocus}</p>
          </BentoCard>
        </div>
      </section>

      {/* SELECTED WORKS SECTION */}
      <section id="work" className="bg-white relative min-h-screen flex flex-col justify-center py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500"></div>
              <h2 className="text-5xl md:text-8xl font-lora tracking-tighter">Selected Works</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.featuredWorks.map((work, index) => (
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
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-black text-white py-24 md:py-32 border-y-8 border-black relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-400"></div>
              <h2 className="text-5xl md:text-8xl font-lora tracking-tighter">What I Do</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <FadeIn delay={100}>
              <div className="border-4 border-white p-8 hover:bg-white hover:text-black transition-colors duration-300 group h-full">
                <div className="w-12 h-12 bg-red-500 mb-8 border-2 border-white group-hover:border-black group-hover:rotate-12 transition-transform"></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Frontend Dev</h3>
                <p className="font-medium text-white/70 group-hover:text-black/70">
                  Building fast, accessible, and pixel-perfect user interfaces using React, Next.js, and Tailwind CSS.
                </p>
              </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn delay={200}>
              <div className="border-4 border-white p-8 hover:bg-white hover:text-black transition-colors duration-300 group h-full">
                <div className="w-12 h-12 bg-blue-500 mb-8 border-2 border-white group-hover:border-black group-hover:rotate-12 transition-transform rounded-full"></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Backend Systems</h3>
                <p className="font-medium text-white/70 group-hover:text-black/70">
                  Designing robust APIs and database architectures with Node.js, PostgreSQL, and Go.
                </p>
              </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn delay={300}>
              <div className="border-4 border-white p-8 hover:bg-white hover:text-black transition-colors duration-300 group h-full">
                <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[41.6px] border-b-green-500 mb-8 group-hover:rotate-12 transition-transform drop-shadow-[0_2px_0_rgba(255,255,255,1)] group-hover:drop-shadow-[0_2px_0_rgba(0,0,0,1)]"></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Mobile Apps</h3>
                <p className="font-medium text-white/70 group-hover:text-black/70">
                  Creating native iOS experiences with SwiftUI and exploring cross-platform solutions.
                </p>
              </div>
            </FadeIn>

            {/* Service 4 */}
            <FadeIn delay={400}>
              <div className="border-4 border-white p-8 hover:bg-white hover:text-black transition-colors duration-300 group h-full">
                <div className="w-12 h-12 bg-purple-500 mb-8 border-2 border-white group-hover:border-black group-hover:rotate-12 transition-transform" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Creative Coding</h3>
                <p className="font-medium text-white/70 group-hover:text-black/70">
                  Adding that extra spark with WebGL, Framer Motion, and interactive 3D experiences.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-zinc-100 relative overflow-hidden min-h-screen flex flex-col justify-center border-t-8 border-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10 w-full">
          <FadeIn>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 rotate-45 mb-8 md:mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
              <h2 className="text-6xl md:text-9xl font-lora tracking-tighter mb-6 relative">
                Let&apos;s Build.
                <span className="absolute -top-8 -right-12 font-black uppercase text-3xl text-green-500 rotate-[-15deg] hidden md:block">
                  Together!
                </span>
              </h2>
              <p className="text-base md:text-xl font-medium text-black/70 max-w-xl mb-12">
                I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <CopyEmailButton />
            </div>
          </FadeIn>
        </div>
      </section>
      </main>

      <WorkModal 
        work={selectedWork} 
        isOpen={!!selectedWork} 
        onClose={() => setSelectedWork(null)} 
      />
    </>
  );
}
