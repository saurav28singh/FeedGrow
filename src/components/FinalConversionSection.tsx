"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalConversionSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export default function FinalConversionSection({ onOpenTrial }: FinalConversionSectionProps) {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#EBF4FF]/80 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#F0FDF8]/80 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content Block */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#0A66C2]/20 bg-[#F0F7FF] text-[#0A66C2] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              YOUR EXPERIENCE DESERVES TO BE PRESENTED PROFESSIONALLY.
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-extrabold text-[#040A08] tracking-[-0.03em] leading-[1.15]">
            Don&apos;t Just Have a LinkedIn Profile. <br className="hidden sm:inline" />
            <span className="text-[#0A66C2]">Make It Represent You.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[15px] sm:text-[16.5px] text-[#42524E] leading-relaxed text-left sm:text-center max-w-2xl mx-auto">
            <p>
              Your professional journey includes skills, experience, ambitions, and achievements that deserve to be communicated clearly.
            </p>

            <p>
              Whether you&apos;re preparing for your next career step, developing your professional network, growing your business, or strengthening your industry presence, your LinkedIn profile can play an important role in how you present yourself.
            </p>

            <p className="font-medium text-[#040A08]">
              <strong className="text-[#0A66C2]">FEEDGROW LinkedIn Positioning</strong> helps you bring your professional story together through thoughtful optimisation, personalised writing, relevant keywords, and professional visuals.
            </p>

            {/* Closing Statement */}
            <p className="text-[#064E4A] font-semibold italic pt-2 text-[15px] sm:text-[16px]">
              &ldquo;Present your value with clarity. Reflect your ambitions with confidence. Build your professional identity with intention.&rdquo;
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0A66C2] to-[#08529C] text-white text-center shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#008F68]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/80 bg-white/15 px-3 py-1 rounded-full mb-3">
                LET&apos;S GET STARTED
              </span>

              <h3 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight leading-snug max-w-xl mx-auto">
                Ready to give your LinkedIn profile the professional attention it deserves?
              </h3>

              <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] text-white/90 max-w-lg mx-auto">
                Connect with FEEDGROW to get started with your LinkedIn Positioning.
              </p>

              <div className="mt-7">
                <button
                  onClick={() => onOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
                  className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-white hover:bg-[#F0F7FF] text-[#0A66C2] text-[15.5px] font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Get Your LinkedIn Positioning</span>
                  <ArrowRight className="w-4 h-4 text-[#0A66C2]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
