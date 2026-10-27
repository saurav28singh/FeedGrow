"use client";

import React from "react";
import Image from "next/image";
import { 
  GraduationCap, 
  Briefcase, 
  Crown, 
  Rocket, 
  Lightbulb, 
  TrendingUp, 
  Award,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check
} from "lucide-react";

interface WhoIsThisForSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export default function WhoIsThisForSection({ onOpenTrial }: WhoIsThisForSectionProps) {
  const audiences = [
    {
      num: "01",
      badge: "Early Career",
      title: "Students and Fresh Graduates",
      desc: "Create a professional starting point that communicates your education, academic projects, technical skills, and career direction with clarity.",
      keyOutcome: "Internship & Entry-Level Positioning",
      image: "/images/audiences/students.jpg",
      imageAlt: "Ambitious college graduate and student preparing career launch on laptop in university library",
      icon: GraduationCap,
      theme: {
        accent: "text-[#0A66C2]",
        bgAccent: "bg-[#EAF4FF]",
        borderAccent: "border-[#0A66C2]/20",
        dot: "bg-[#0A66C2]",
        hoverBorder: "hover:border-[#0A66C2]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(10,102,194,0.09)]",
        arrowHover: "group-hover:bg-[#EAF4FF] group-hover:text-[#0A66C2]",
      },
    },
    {
      num: "02",
      badge: "Career Growth",
      title: "Job Seekers and Working Professionals",
      desc: "Present your work experience, measurable contributions, and core competencies to align seamlessly with your target roles and recruiter criteria.",
      keyOutcome: "Recruiter-Ready Role Alignment",
      image: "/images/audiences/professionals.jpg",
      imageAlt: "Corporate professional and job seeker working on strategic career growth in modern open office",
      icon: Briefcase,
      theme: {
        accent: "text-[#008F68]",
        bgAccent: "bg-[#F0FDF8]",
        borderAccent: "border-[#008F68]/20",
        dot: "bg-[#008F68]",
        hoverBorder: "hover:border-[#008F68]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(0,143,104,0.09)]",
        arrowHover: "group-hover:bg-[#F0FDF8] group-hover:text-[#008F68]",
      },
    },
    {
      num: "03",
      badge: "Executive Leadership",
      title: "Founders, CEOs, and Business Leaders",
      desc: "Strengthen your individual executive presence to communicate organizational vision, leadership track record, and commercial gravitas to stakeholders.",
      keyOutcome: "Executive Authority & Investor Trust",
      image: "/images/audiences/executives.jpg",
      imageAlt: "Distinguished CEO and founder standing with leadership confidence in modern boardroom overlooking skyline",
      icon: Crown,
      theme: {
        accent: "text-[#0A66C2]",
        bgAccent: "bg-[#EAF4FF]",
        borderAccent: "border-[#0A66C2]/20",
        dot: "bg-[#0A66C2]",
        hoverBorder: "hover:border-[#0A66C2]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(10,102,194,0.09)]",
        arrowHover: "group-hover:bg-[#EAF4FF] group-hover:text-[#0A66C2]",
      },
    },
    {
      num: "04",
      badge: "Business & Networking",
      title: "Entrepreneurs and Business Owners",
      desc: "Create a high-trust personal profile that reinforces your company identity, unlocks strategic partnerships, and attracts client opportunities.",
      keyOutcome: "Commercial Brand & Partner Alignment",
      image: "/images/audiences/entrepreneurs.jpg",
      imageAlt: "Dynamic tech entrepreneur collaborating with startup team in modern innovation workspace",
      icon: Rocket,
      theme: {
        accent: "text-[#008F68]",
        bgAccent: "bg-[#F0FDF8]",
        borderAccent: "border-[#008F68]/20",
        dot: "bg-[#008F68]",
        hoverBorder: "hover:border-[#008F68]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(0,143,104,0.09)]",
        arrowHover: "group-hover:bg-[#F0FDF8] group-hover:text-[#008F68]",
      },
    },
    {
      num: "05",
      badge: "Independent Advisory",
      title: "Consultants, Coaches, and Freelancers",
      desc: "Articulate your niche service offerings, proven methodologies, and client transformation outcomes in a clear, highly credible structure.",
      keyOutcome: "High-Ticket Advisory Positioning",
      image: "/images/audiences/consultants.jpg",
      imageAlt: "Poised executive consultant and coach reviewing strategic client deliverables in private studio office",
      icon: Lightbulb,
      theme: {
        accent: "text-[#0A66C2]",
        bgAccent: "bg-[#EAF4FF]",
        borderAccent: "border-[#0A66C2]/20",
        dot: "bg-[#0A66C2]",
        hoverBorder: "hover:border-[#0A66C2]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(10,102,194,0.09)]",
        arrowHover: "group-hover:bg-[#EAF4FF] group-hover:text-[#0A66C2]",
      },
    },
    {
      num: "06",
      badge: "Client Facing",
      title: "Sales and Business Development Professionals",
      desc: "Turn your LinkedIn presence into a warm introduction asset that builds immediate buyer rapport, validates domain depth, and drives pipeline.",
      keyOutcome: "High-Conversion Outreach & Rapport",
      image: "/images/audiences/sales.jpg",
      imageAlt: "Sales and business development director presenting partnership agreement in corporate hospitality suite",
      icon: TrendingUp,
      theme: {
        accent: "text-[#008F68]",
        bgAccent: "bg-[#F0FDF8]",
        borderAccent: "border-[#008F68]/20",
        dot: "bg-[#008F68]",
        hoverBorder: "hover:border-[#008F68]/35",
        hoverShadow: "hover:shadow-[0_20px_40px_rgba(0,143,104,0.09)]",
        arrowHover: "group-hover:bg-[#F0FDF8] group-hover:text-[#008F68]",
      },
    },
  ];

  // Audience 7: Experienced Specialists (Wide Featured Spotlight)
  const specialistAudience = {
    num: "07",
    badge: "Domain Expertise",
    title: "Experienced Professionals and Industry Specialists",
    desc: "Bring greater clarity to your professional story and highlight the deep knowledge, strategic contributions, and cross-functional leadership you've built over years of dedicated practice.",
    keyOutcome: "Distinguished Mastery & Legacy Positioning",
    image: "/images/audiences/specialists.jpg",
    imageAlt: "Senior distinguished female industry specialist in high-tech research lab with proven domain authority",
    icon: Award,
    deliverables: [
      { label: "Executive Narrative", text: "Translating years of multi-disciplinary experience into a compelling, modern story." },
      { label: "Domain Authority", text: "Highlighting proprietary frameworks, publications, patents, or specialized technical depth." },
      { label: "Advisory & Board Readiness", text: "Positioning leadership credentials for non-executive, advisory, or senior consulting roles." },
    ],
  };

  return (
    <section id="whos-this-for" className="relative py-20 sm:py-24 lg:py-28 bg-[#FAFCFF] border-t border-gray-100 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#EBF4FF]/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#F0FDF8]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0A66C2]/20 bg-[#F0F7FF] text-[#0A66C2] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              WHO IS LINKEDIN POSITIONING FOR?
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-bold text-[#040A08] tracking-[-0.03em] leading-[1.18]">
            Wherever You Are in Your Professional Journey, Your Profile Matters.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16.5px] text-[#556461] leading-relaxed max-w-2xl mx-auto">
            FEEDGROW LinkedIn Positioning is tailored for ambitious individuals who want to present themselves with authority and communicate their real value with uncompromising clarity.
          </p>
        </div>

        {/* 7 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          
          {/* Cards 1 to 6 */}
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-[#E2ECE9] ${aud.theme.hoverBorder} shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${aud.theme.hoverShadow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden h-full`}
              >
                {/* Topic-specific photograph with hover scale */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={aud.image}
                    alt={aud.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={idx < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-65 group-hover:opacity-50 transition-opacity duration-300" />

                  {/* Top-left: Category badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-white/60">
                    <Icon className={`w-3.5 h-3.5 ${aud.theme.accent}`} />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#101820]">
                      {aud.badge}
                    </span>
                  </div>

                  {/* Top-right: Understated numbered label */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-widest group-hover:bg-[#0A66C2] transition-colors duration-300">
                    {aud.num}
                  </div>

                  {/* Bottom-left: Key outcome indicator on photo */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/55 backdrop-blur-md text-white/95 text-[11.5px] font-medium border border-white/10 w-fit">
                    <span className={`w-1.5 h-1.5 rounded-full ${aud.theme.dot} shrink-0 animate-pulse`} />
                    <span className="truncate">{aud.keyOutcome}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Eyebrow badge */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`text-[11px] font-bold tracking-[0.14em] uppercase ${aud.theme.accent}`}>
                        {aud.badge}
                      </span>
                      <span className="text-[12px] font-mono font-semibold text-gray-400 group-hover:text-[#0A66C2] transition-colors tracking-wider">
                        {aud.num}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors leading-[1.3] tracking-tight mb-2.5 sm:min-h-[52px]">
                      {aud.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[14.5px] text-[#556461] leading-[1.65] font-normal">
                      {aud.desc}
                    </p>
                  </div>

                  {/* Bottom Deliverable Anchor */}
                  <div className="mt-6 pt-4 border-t border-[#F0F4F8] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-1.5 h-1.5 rounded-full ${aud.theme.dot} shrink-0`} />
                      <span className="text-[12px] font-semibold text-[#30403C] truncate">
                        {aud.keyOutcome}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 ${aud.theme.arrowHover} transition-colors shrink-0`}>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Card 7: Experienced Specialists & Industry Leaders (Wide Spotlight Card across all 3 columns) */}
          <div className="lg:col-span-3 md:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-[#0A66C2]/25 hover:border-[#0A66C2]/45 shadow-[0_6px_24px_rgba(10,102,194,0.06)] hover:shadow-[0_20px_40px_rgba(10,102,194,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col lg:flex-row overflow-hidden group">
            
            {/* Left Column: Photograph */}
            <div className="relative w-full lg:w-[42%] aspect-[16/10] lg:aspect-auto shrink-0 bg-gray-100 overflow-hidden">
              <Image
                src={specialistAudience.image}
                alt={specialistAudience.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/60 opacity-60 group-hover:opacity-45 transition-opacity duration-300" />

              {/* Photo top badges */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-white/60">
                <Award className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#101820]">
                  {specialistAudience.badge}
                </span>
              </div>

              <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-widest group-hover:bg-[#0A66C2] transition-colors duration-300">
                {specialistAudience.num}
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white/95 text-[12px] font-medium border border-white/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#0A66C2] animate-pulse" />
                <span>{specialistAudience.keyOutcome}</span>
              </div>
            </div>

            {/* Right Column: Detailed Value & Milestones */}
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0A66C2]">
                      EXECUTIVE & DOMAIN MASTERY
                    </span>
                    <span className="text-[11px] font-semibold text-[#008F68] bg-[#F0FDF8] px-2.5 py-0.5 rounded-full border border-[#008F68]/20">
                      Senior Specialists
                    </span>
                  </div>
                  <span className="text-[12px] font-mono font-semibold text-gray-400">
                    07 / 07
                  </span>
                </div>

                <h3 className="text-[22px] sm:text-[25px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors tracking-tight leading-snug mb-3">
                  {specialistAudience.title}
                </h3>

                <p className="text-[14.5px] sm:text-[15px] text-[#556461] leading-[1.65] mb-6">
                  {specialistAudience.desc}
                </p>

                {/* 3 Deliverables Checklist */}
                <div className="space-y-2.5 mb-6">
                  {specialistAudience.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px]">
                      <span className="w-5 h-5 rounded-full bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 mt-0.5 border border-[#0A66C2]/15">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <p className="text-[#30403C]">
                        <strong className="text-[#040A08] font-semibold">{del.label}: </strong>
                        <span className="text-[#556461]">{del.text}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome Bar */}
              <div className="pt-4 border-t border-[#F0F4F8] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008F68]" />
                  <span className="text-[12.5px] font-semibold text-[#064E4A]">
                    {specialistAudience.keyOutcome}
                  </span>
                </div>
                <button
                  onClick={() => onOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0A66C2] hover:text-[#084e96] transition-colors cursor-pointer"
                >
                  <span>Explore Positioning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Statement & Callout */}
        <div className="mt-14 sm:mt-18 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 px-8 rounded-3xl bg-white border border-[#008F68]/25 shadow-sm max-w-3xl mx-auto">
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#064E4A] text-center sm:text-left">
              &ldquo;Whatever your next milestone looks like, start by presenting your professional value clearly.&rdquo;
            </p>
            <button
              onClick={() => onOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#008F68] hover:bg-[#007A58] text-white text-[14px] font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
