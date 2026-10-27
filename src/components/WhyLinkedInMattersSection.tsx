"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Search, 
  ShieldCheck, 
  Target, 
  Palette, 
  Users, 
  ArrowUpRight 
} from "lucide-react";

export default function WhyLinkedInMattersSection() {
  const items = [
    {
      num: "01",
      pillLabel: "Discoverability",
      photoHighlight: "Search & Keyword Indexing",
      tag: "Visibility & Reach",
      icon: Search,
      title: "Stronger Professional Visibility",
      desc: "A well-structured LinkedIn profile aligned with high-intent industry keywords ensures you surface when recruiters, hiring managers, and clients search for your specific domain expertise. Strategic optimisation turns passive searches into qualified profile views.",
      keyTakeaway: "Targeted search visibility & keyword alignment",
      image: "/images/foundation/visibility.jpg",
      imageAlt: "Professional reviewing LinkedIn profile search analytics and visibility metrics on laptop",
      theme: {
        accent: "text-[#0A66C2]",
        bgAccent: "bg-[#EAF4FF]",
        borderAccent: "border-[#0A66C2]/20",
        badge: "text-[#0A66C2] bg-[#EAF4FF]",
        dot: "bg-[#0A66C2]",
        hoverBorder: "hover:border-[#0A66C2]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(10,102,194,0.09)]",
        arrowHover: "group-hover:bg-[#EAF4FF] group-hover:text-[#0A66C2]",
      },
    },
    {
      num: "02",
      pillLabel: "Executive Authority",
      photoHighlight: "Verified Trust & Track Record",
      tag: "Reputation & Trust",
      icon: ShieldCheck,
      title: "Enhanced Professional Credibility",
      desc: "Presenting your background, responsibilities, and achievements with structured precision establishes immediate authority. Clear career milestones and verified competencies inspire confidence in stakeholders before the first meeting.",
      keyTakeaway: "Executive authority & proven competence",
      image: "/images/foundation/credibility.jpg",
      imageAlt: "Confident senior business executive conveying trust and leadership in corporate office",
      theme: {
        accent: "text-[#008F68]",
        bgAccent: "bg-[#F0FDF8]",
        borderAccent: "border-[#008F68]/20",
        badge: "text-[#008F68] bg-[#F0FDF8]",
        dot: "bg-[#008F68]",
        hoverBorder: "hover:border-[#008F68]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(0,143,104,0.09)]",
        arrowHover: "group-hover:bg-[#F0FDF8] group-hover:text-[#008F68]",
      },
    },
    {
      num: "03",
      pillLabel: "Value Articulation",
      photoHighlight: "Strategic Role Alignment",
      tag: "Message Clarity",
      icon: Target,
      title: "Clearer Communication of Your Value",
      desc: "Decision-makers evaluate profiles in seconds. We refine your profile messaging so your core strengths, unique perspective, and professional trajectory are immediately obvious to recruiters, prospective partners, and industry peers.",
      keyTakeaway: "Instant value proposition & role clarity",
      image: "/images/foundation/value.jpg",
      imageAlt: "Business professional presenting strategic value and growth insights to colleagues in boardroom",
      theme: {
        accent: "text-[#0A66C2]",
        bgAccent: "bg-[#EAF4FF]",
        borderAccent: "border-[#0A66C2]/20",
        badge: "text-[#0A66C2] bg-[#EAF4FF]",
        dot: "bg-[#0A66C2]",
        hoverBorder: "hover:border-[#0A66C2]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(10,102,194,0.09)]",
        arrowHover: "group-hover:bg-[#EAF4FF] group-hover:text-[#0A66C2]",
      },
    },
    {
      num: "04",
      pillLabel: "Brand Cohesion",
      photoHighlight: "Unified Narrative & Visuals",
      tag: "Brand Identity",
      icon: Palette,
      title: "A Consistent Personal Brand",
      desc: "Your headline, About narrative, experience highlights, and visual branding work together as a synchronized whole. We create a unified digital footprint that reinforces a cohesive, memorable professional identity.",
      keyTakeaway: "Cohesive multi-section narrative & visuals",
      image: "/images/foundation/branding.jpg",
      imageAlt: "Creative professional working on personal branding presentation, portfolio, and portrait strategy",
      theme: {
        accent: "text-[#008F68]",
        bgAccent: "bg-[#F0FDF8]",
        borderAccent: "border-[#008F68]/20",
        badge: "text-[#008F68] bg-[#F0FDF8]",
        dot: "bg-[#008F68]",
        hoverBorder: "hover:border-[#008F68]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(0,143,104,0.09)]",
        arrowHover: "group-hover:bg-[#F0FDF8] group-hover:text-[#008F68]",
      },
    },
    {
      num: "05",
      pillLabel: "High-Trust Outreach",
      photoHighlight: "Warm Outreach & Connections",
      tag: "Network Growth",
      icon: Users,
      title: "A Stronger Foundation for Networking",
      desc: "Every connection request, article share, and interaction references your profile. A polished, high-calibre profile provides essential context, converting cold outbound outreach into receptive, high-value professional relationships.",
      keyTakeaway: "High-conversion outreach & warm connections",
      image: "/images/foundation/networking.jpg",
      imageAlt: "Two business professionals having a meaningful networking conversation in an executive lounge",
      theme: {
        accent: "text-[#0A66C2]",
        bgAccent: "bg-[#EAF4FF]",
        borderAccent: "border-[#0A66C2]/20",
        badge: "text-[#0A66C2] bg-[#EAF4FF]",
        dot: "bg-[#0A66C2]",
        hoverBorder: "hover:border-[#0A66C2]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(10,102,194,0.09)]",
        arrowHover: "group-hover:bg-[#EAF4FF] group-hover:text-[#0A66C2]",
      },
    },
  ];

  return (
    <section
      id="why-linkedin-matters"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FAFDFB] border-y border-[#E8EFF5] overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-[#0A66C2]/5 via-[#008F68]/5 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0A66C2]/20 bg-[#F0F7FF] text-[#0A66C2] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              WHY YOUR LINKEDIN PROFILE MATTERS
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-bold text-[#040A08] tracking-[-0.03em] leading-[1.18]">
            More Than a Profile. A Foundation for Your Professional Brand.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16.5px] text-[#556461] leading-relaxed max-w-2xl mx-auto">
            Your LinkedIn profile is your single most critical digital asset. Strategic optimisation turns everyday visits into credible opportunities and meaningful career momentum.
          </p>
        </div>

        {/* 5 Cards Responsive Grid: 3 in Row 1, 2 Centered in Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {items.map((item, idx) => {
            const Icon = item.icon;
            
            // Grid spanning logic:
            // Desktop (lg): 6 columns. Row 1: cards 0,1,2 span 2 cols each.
            // Row 2: card 3 starts at col 2 and spans 2 cols, card 4 starts at col 4 and spans 2 cols (leaving col 1 and 6 empty to center).
            // Tablet (md): 2 columns. Cards 0,1,2,3 are 1 col each. Card 4 spans 2 cols, max-w-md, centered.
            // Mobile: 1 column.
            const colSpanClass =
              idx < 3
                ? "lg:col-span-2"
                : idx === 3
                ? "lg:col-start-2 lg:col-span-2"
                : "lg:col-start-4 lg:col-span-2 md:col-span-2 md:w-full md:max-w-md md:mx-auto lg:max-w-none lg:mx-0";

            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-[#E2ECE9] ${item.theme.hoverBorder} shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${item.theme.hoverShadow} transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden h-full ${colSpanClass}`}
              >
                {/* 1. Photograph with uniform aspect ratio & hover zoom */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={idx < 3}
                  />
                  {/* Subtle dark gradient overlay for text readability & elegant lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-65 group-hover:opacity-50 transition-opacity duration-300" />

                  {/* Top-left: Topic badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-white/60">
                    <Icon className={`w-3.5 h-3.5 ${item.theme.accent}`} />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#101820]">
                      {item.pillLabel}
                    </span>
                  </div>

                  {/* Top-right: Understated numbered label */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-widest group-hover:bg-[#0A66C2] transition-colors duration-300">
                    {item.num}
                  </div>

                  {/* Bottom-left: subtle photo context highlight */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/55 backdrop-blur-md text-white/95 text-[11.5px] font-medium border border-white/10 w-fit">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.theme.dot} shrink-0 animate-pulse`} />
                    <span className="truncate">{item.photoHighlight}</span>
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Eyebrow topic label */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-bold tracking-[0.14em] uppercase ${item.theme.accent}`}>
                        {item.tag}
                      </span>
                      <span className="text-[12px] font-mono font-semibold text-gray-400 group-hover:text-[#0A66C2] transition-colors tracking-wider">
                        {item.num}
                      </span>
                    </div>

                    {/* Card Heading with minimum height for baseline alignment */}
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors leading-[1.3] tracking-tight mb-3 sm:min-h-[52px]">
                      {item.title}
                    </h3>

                    {/* Concise, impactful description */}
                    <p className="text-[14px] sm:text-[14.5px] text-[#556461] leading-[1.65] font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* 3. Subtle visual detail & key takeaway anchor */}
                  <div className="mt-6 pt-4 border-t border-[#F0F4F8] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.theme.dot} shrink-0`} />
                      <span className="text-[12px] font-semibold text-[#30403C] truncate">
                        {item.keyTakeaway}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 ${item.theme.arrowHover} transition-colors shrink-0`}>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
