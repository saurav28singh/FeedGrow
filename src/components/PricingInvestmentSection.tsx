"use client";

import React from "react";
import { Check, Shield, Sparkles, ArrowRight, Star } from "lucide-react";

interface PricingInvestmentSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export default function PricingInvestmentSection({ onOpenTrial }: PricingInvestmentSectionProps) {
  const deliverables = [
    "Complete LinkedIn profile optimisation.",
    "LinkedIn SEO optimisation.",
    "Professional profile rewriting.",
    "Professionally edited profile headshot.",
    "Customised LinkedIn banner.",
    "Authentic, human-written profile content.",
    "Final profile review and practical guidance.",
  ];

  return (
    <section id="investment" className="relative py-20 md:py-26 bg-[#FAFCFF] border-y border-gray-100 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#EBF4FF]/60 to-[#F0FDF8]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#0A66C2]/20 bg-[#F0F7FF] text-[#0A66C2] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              TRANSPARENT PRICING
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[40px] md:text-[44px] font-bold text-[#040A08] tracking-[-0.03em] leading-tight">
            YOUR INVESTMENT
          </h2>
        </div>

        {/* Polished Investment Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-white border border-[#0A66C2]/25 shadow-[0_16px_50px_rgba(10,102,194,0.08)] overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#008F68] bg-[#F0FDF8] border border-[#008F68]/20 px-3.5 py-1 rounded-full">
                COMPLETE PACKAGE
              </span>
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Product Name */}
            <h3 className="text-[26px] sm:text-[32px] font-extrabold text-[#040A08] tracking-tight">
              FEEDGROW LINKEDIN POSITIONING
            </h3>

            {/* Description */}
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#556461] leading-relaxed">
              A comprehensive LinkedIn profile optimisation and personal branding package designed around your professional background, expertise, and goals.
            </p>

            {/* Price Box */}
            <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-[#F0F7FF] via-[#F8FAFC] to-[#F0FDF8] border border-[#0A66C2]/15 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-[44px] sm:text-[52px] font-extrabold text-[#040A08] tracking-tight">
                  ₹6,999
                </span>
                <span className="text-[14px] sm:text-[15px] font-bold text-[#008F68] sm:ml-3 block sm:inline">
                  Inclusive of GST
                </span>
              </div>
              <span className="text-xs text-[#556461] font-medium">
                One-time complete service
              </span>
            </div>

            {/* Deliverables Subheading & List */}
            <div>
              <h4 className="text-sm font-bold text-[#040A08] uppercase tracking-wider mb-4">
                Your package includes:
              </h4>

              <ul className="space-y-3.5 mb-8">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14.5px] sm:text-[15px] text-[#1F2826] font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#008F68] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing Note */}
            <p className="p-4 rounded-xl bg-[#FAFCFF] border border-gray-100 text-xs sm:text-[13px] text-[#556461] italic text-center mb-8">
              &ldquo;One comprehensive positioning. A more polished professional profile. A stronger foundation for your personal brand.&rdquo;
            </p>

            {/* CTA Button */}
            <button
              onClick={() => onOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
              className="w-full inline-flex items-center justify-center gap-2.5 h-[54px] rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-[16px] font-bold transition-all shadow-[0_4px_16px_rgba(10,102,194,0.28)] hover:shadow-[0_8px_24px_rgba(10,102,194,0.38)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
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
