"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Check, Eye, Award, Target } from "lucide-react";

// Dynamically import the Three.js interactive 3D scene with SSR disabled
const Hero3D = dynamic(() => import("./three/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[680px] flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#F0F7FF]/80 via-white to-[#F0FDF8]/50 animate-pulse border border-[#0A66C2]/15">
      <div className="flex flex-col items-center gap-3 text-[#0A66C2] text-sm font-semibold">
        <div className="w-10 h-10 border-3 border-[#0A66C2] border-t-transparent rounded-full animate-spin" />
        <span className="tracking-tight text-xs font-medium text-[#040A08]">Loading 3D Experience...</span>
      </div>
    </div>
  ),
});

interface HeroSectionProps {
  onOpenTrial: (plan?: string) => void;
  onOpenDemo?: () => void;
}

export default function HeroSection({ onOpenTrial }: HeroSectionProps) {
  const scrollToIncluded = () => {
    const el = document.getElementById("whats-included");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-26 md:pt-28 lg:pt-30 pb-12 md:pb-16 bg-white overflow-hidden">
      {/* Subtle LinkedIn-Blue & Mint Ambient Gradients */}
      <div className="absolute top-0 right-0 w-[780px] h-[780px] bg-gradient-to-bl from-[#EBF4FF]/80 via-[#F0FDF8]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-[#0A66C2]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/6 left-0 w-[420px] h-[420px] bg-[#F0FDF8]/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 xl:col-span-5 text-left z-10 flex flex-col justify-center">
            
            {/* 1. Eyebrow Badges: 8-12px gap, 22-28px spacing to headline */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#0A66C2]/20 bg-[#EBF4FF] text-[#0A66C2]">
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#0A66C2]">
                  ✦ BUILD · BRAND · GROW
                </span>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#008F68]/20 bg-[#F0FDF8] text-[#008F68]">
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.08em] uppercase text-[#008F68]">
                  LINKEDIN POSITIONING
                </span>
              </div>
            </div>

            {/* 2. Main Headline: 52-62px desktop, line-height 1.08-1.15 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-[#101820] leading-[1.12] tracking-tight">
              <span>A Stronger Profile.</span>
              <span className="block text-[#0A66C2]">A Bigger You.</span>
            </h1>

            {/* 3. Supporting Headline: 18-22px spacing from headline */}
            <p className="mt-5 text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-[#101820] leading-snug">
              Your expertise deserves to be seen.<br className="hidden sm:inline" />
              {" "}Your next opportunity starts with how you present yourself.
            </p>

            {/* 4. Description: 8-12px spacing, max-width 520px, 17-19px font, color #536273 */}
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-[16px] lg:text-[17.5px] text-[#536273] leading-[1.6] max-w-[520px]">
              Transform your LinkedIn profile into a polished professional brand with personalised profile writing, strategic optimisation, and professional visuals.
            </p>

            {/* 5. Three Core Benefits: 24-30px spacing from description */}
            <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 lg:gap-4 pt-1">
              {/* Benefit 1 */}
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#EBF4FF] flex items-center justify-center shrink-0 text-[#0A66C2]">
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-semibold text-[#101820]">
                    Be Seen
                  </h4>
                  <p className="text-[12px] sm:text-[12.5px] text-[#536273] leading-snug mt-0.5">
                    Strengthen your professional visibility.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#EBF4FF] flex items-center justify-center shrink-0 text-[#0A66C2]">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-semibold text-[#101820]">
                    Be Known
                  </h4>
                  <p className="text-[12px] sm:text-[12.5px] text-[#536273] leading-snug mt-0.5">
                    Build a recognisable personal brand.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#EBF4FF] flex items-center justify-center shrink-0 text-[#0A66C2]">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-semibold text-[#101820]">
                    Be Chosen
                  </h4>
                  <p className="text-[12px] sm:text-[12.5px] text-[#536273] leading-snug mt-0.5">
                    Present your value with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. CTA Buttons: 24-30px spacing from benefits, 12-16px gap */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8">
              <Link
                href="/products/networking-plus"
                className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-6 sm:px-7 rounded-full bg-[#008F68] hover:bg-[#007A58] text-white text-[15px] font-semibold transition-all duration-200 shadow-[0_4px_14px_rgba(0,143,104,0.22)] hover:shadow-[0_6px_20px_rgba(0,143,104,0.3)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#008F68] focus:ring-offset-2 group cursor-pointer"
              >
                <span>Get Your Networking+</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={scrollToIncluded}
                className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-5 sm:px-6 rounded-full bg-white hover:bg-gray-50/80 text-[#101820] border border-gray-200 hover:border-gray-300 text-[15px] font-medium transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 cursor-pointer"
              >
                <span>Explore What&apos;s Included</span>
              </button>
            </div>

            {/* 7. Trust Indicators: 18-24px spacing from CTA buttons */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 lg:gap-x-3.5 xl:gap-x-5 gap-y-2 mt-5 sm:mt-6 text-[12px] sm:text-[12.5px] xl:text-[13px] text-[#536273]">
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
                Authentic Profile Content
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Approved 3D Hero Scene */}
          <div className="flex col-span-1 lg:col-span-6 xl:col-span-7 justify-center items-center relative overflow-hidden lg:overflow-visible mt-8 lg:mt-0 w-full">
            <div className="relative w-full h-[340px] sm:h-[440px] md:h-[540px] lg:h-[700px] xl:h-[740px]">
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
