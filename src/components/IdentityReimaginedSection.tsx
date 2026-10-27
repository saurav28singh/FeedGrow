"use client";

import React from "react";
import { Eye, Sparkles, CheckCircle2, Check, ArrowRight } from "lucide-react";
import HeroProfileCarousel from "./HeroProfileCarousel";

interface IdentityReimaginedSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export default function IdentityReimaginedSection({ onOpenTrial }: IdentityReimaginedSectionProps) {
  const scrollToApproach = () => {
    const el = document.getElementById("our-approach");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="identity-reimagined"
      className="relative py-14 sm:py-18 lg:py-20 bg-white border-b border-[#DCE6F0] overflow-hidden"
    >
      {/* Container */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-12">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Content & Value Proposition                   */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[46%] xl:w-[44%] shrink-0 flex flex-col justify-center text-left z-10">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DCE6F0] bg-[#EAF4FF] text-[#0A66C2] mb-4 sm:mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0A66C2]" />
              <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#0A66C2]">
                FEEDGROW LINKEDIN POSITIONING
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-bold text-[#101820] leading-[1.14] tracking-tight">
              Make Your First{" "}
              <span className="text-[#0A66C2]">Impression Count.</span>
            </h2>

            {/* Supporting Headline */}
            <p className="mt-3 text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-[#101820] leading-snug">
              Your Profile. Your Story. Your Next Opportunity.
            </p>

            {/* Introductory Description (Two concise paragraphs) */}
            <div className="mt-4 sm:mt-5 space-y-2.5 text-[15px] sm:text-[16px] text-[#536273] leading-relaxed max-w-[560px]">
              <p>
                Your LinkedIn profile is more than a digital r&eacute;sum&eacute;. It&apos;s your professional story, your personal brand, and your introduction to the opportunities ahead.
              </p>
              <p>
                FeedGrow helps you present your experience, expertise, and ambitions with clarity through a thoughtfully optimised LinkedIn profile.
              </p>
            </div>

            {/* Three Key Benefits */}
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              
              {/* Benefit 1: Be Seen */}
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 border border-[#DCE6F0]/60">
                  <Eye className="w-4.5 h-4.5 text-[#0A66C2]" />
                </div>
                <div>
                  <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#101820]">
                    Be Seen
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#536273] leading-snug mt-0.5">
                    Strengthen your professional visibility with a profile that communicates your expertise clearly.
                  </p>
                </div>
              </div>

              {/* Benefit 2: Be Remembered */}
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 border border-[#DCE6F0]/60">
                  <Sparkles className="w-4.5 h-4.5 text-[#0A66C2]" />
                </div>
                <div>
                  <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#101820]">
                    Be Remembered
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#536273] leading-snug mt-0.5">
                    Build a consistent professional identity that reflects your experience, strengths, and ambitions.
                  </p>
                </div>
              </div>

              {/* Benefit 3: Be Considered */}
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 border border-[#DCE6F0]/60">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#0A66C2]" />
                </div>
                <div>
                  <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#101820]">
                    Be Considered
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#536273] leading-snug mt-0.5">
                    Present your professional value with confidence when relevant opportunities arise.
                  </p>
                </div>
              </div>

            </div>

            {/* Information Card */}
            <div className="mt-6 rounded-2xl bg-[#EAF4FF]/60 border border-[#DCE6F0] p-4 sm:p-5">
              <h4 className="text-[14.5px] sm:text-[15px] font-semibold text-[#0A66C2] leading-snug">
                Your Experience Deserves Better Presentation.
              </h4>
              <p className="mt-1.5 text-[13px] sm:text-[13.5px] text-[#536273] leading-relaxed">
                From profile positioning and professional storytelling to keyword optimisation and visual consistency, FeedGrow brings the essential elements of a strong LinkedIn presence together in one carefully structured service.
              </p>
            </div>

            {/* Trust Message with Subtle FeedGrow Green Accent */}
            <div className="mt-3.5 rounded-xl bg-[#F0FDF8] border border-[#008F68]/20 px-4 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#008F68] shrink-0" />
              <p className="text-[13px] sm:text-[13.5px] font-medium text-[#101820] leading-snug">
                Your professional identity should reflect who you are, what you bring, and where you want to go.
              </p>
            </div>

            {/* Primary & Secondary Call-to-Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Button */}
              <button
                type="button"
                onClick={() => onOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
                className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-6 sm:px-7 rounded-full bg-[#008F68] hover:bg-[#007A58] text-white text-[15px] font-semibold transition-all duration-200 shadow-[0_4px_14px_rgba(0,143,104,0.22)] hover:shadow-[0_6px_20px_rgba(0,143,104,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Reimagine Your Profile &rarr;</span>
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                onClick={scrollToApproach}
                className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-5 sm:px-6 rounded-full bg-white hover:bg-slate-50 text-[#101820] border border-[#DCE6F0] hover:border-slate-300 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore the Process</span>
              </button>
            </div>

            {/* Three Compact Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 sm:mt-5 text-[12.5px] sm:text-[13px] text-[#536273]">
              <span className="inline-flex items-center gap-1.5 font-medium whitespace-nowrap">
                <Check className="w-3.5 h-3.5 text-[#008F68] stroke-[2.5]" />
                Personalised Approach
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium whitespace-nowrap">
                <Check className="w-3.5 h-3.5 text-[#008F68] stroke-[2.5]" />
                Professional Presentation
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium whitespace-nowrap">
                <Check className="w-3.5 h-3.5 text-[#008F68] stroke-[2.5]" />
                Authentic Storytelling
              </span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive Indian Profiles Carousel         */}
          {/* ========================================================= */}
          <div className="w-full lg:w-[54%] xl:w-[56%] relative mt-6 lg:mt-0">
            <HeroProfileCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
