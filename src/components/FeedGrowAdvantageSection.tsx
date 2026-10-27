"use client";

import React from "react";
import { 
  Layers, 
  MessageSquare, 
  KeyRound, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2,
  Check,
  ArrowUpRight,
  Target,
  Search,
  BadgeCheck
} from "lucide-react";

export default function FeedGrowAdvantageSection() {
  return (
    <section id="why-feedgrow" className="relative py-20 sm:py-24 lg:py-28 bg-[#FAFDFB] border-t border-gray-100 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-[#0A66C2]/5 via-[#008F68]/5 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#008F68]/20 bg-[#F0FDF8] text-[#008F68] mb-4 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#008F68]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              THE FEEDGROW ADVANTAGE
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-bold text-[#040A08] tracking-[-0.03em] leading-[1.18]">
            Thoughtful Optimisation. Professional Presentation. A Brand That Reflects You.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16.5px] text-[#556461] leading-relaxed max-w-2xl mx-auto">
            We approach profile optimisation as a strategic career asset—uniting search discoverability, executive messaging, authentic branding, and professional visuals into one cohesive presence.
          </p>
        </div>

        {/* 7 Advantages 12-Column SaaS Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* Card 01: Cohesive Identity (7 cols on desktop) */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E2ECE9] hover:border-[#0A66C2]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(10,102,194,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAF4FF] text-[#0A66C2] border border-[#0A66C2]/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
                    <Layers className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0A66C2]">
                    IDENTITY ARCHITECTURE
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-[#0A66C2] transition-colors">
                  01 / 07
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors tracking-tight leading-snug mb-2.5">
                A More Cohesive Professional Identity
              </h3>

              <p className="text-[14px] sm:text-[14.5px] text-[#556461] leading-[1.65] mb-6">
                Bring your headline, About section, experience, skills, and visual elements together into a more consistent, unified presentation that leaves zero ambiguity about who you are.
              </p>
            </div>

            {/* Profile Architecture Visual Detail */}
            <div className="bg-[#FAFDFB] rounded-2xl p-4 sm:p-5 border border-[#E8F0EC] space-y-2.5">
              <div className="flex items-center justify-between text-[11.5px] font-semibold text-[#040A08] border-b border-gray-100 pb-2">
                <span className="flex items-center gap-1.5 text-[#008F68]">
                  <BadgeCheck className="w-4 h-4 text-[#008F68]" />
                  Synchronised Profile Elements
                </span>
                <span className="text-[11px] font-medium text-gray-400">FeedGrow Standard</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#30403C] pt-1">
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-gray-100 shadow-2xs font-medium">
                  <Check className="w-3 h-3 text-[#008F68] stroke-[3]" /> Headline
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-gray-100 shadow-2xs font-medium">
                  <Check className="w-3 h-3 text-[#008F68] stroke-[3]" /> About Story
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-gray-100 shadow-2xs font-medium">
                  <Check className="w-3 h-3 text-[#008F68] stroke-[3]" /> Roles & Impact
                </div>
                <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-gray-100 shadow-2xs font-medium">
                  <Check className="w-3 h-3 text-[#008F68] stroke-[3]" /> Visual Branding
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: Clearer Value Communication (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E2ECE9] hover:border-[#008F68]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,143,104,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
                    <MessageSquare className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#008F68]">
                    EXECUTIVE POSITIONING
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-[#008F68] transition-colors">
                  02 / 07
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#040A08] group-hover:text-[#008F68] transition-colors tracking-tight leading-snug mb-2.5">
                Clearer Communication of Your Value
              </h3>

              <p className="text-[14px] sm:text-[14.5px] text-[#556461] leading-[1.65] mb-6">
                Help visitors understand your background, expertise, and professional direction within the critical first 5 seconds of scanning your profile.
              </p>
            </div>

            {/* Clarity Metric Detail */}
            <div className="bg-[#F0FDF8] rounded-2xl p-4 border border-[#C9F0E3] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Target className="w-4 h-4 text-[#008F68]" />
                <span className="text-[12px] font-semibold text-[#064E4A]">Rapid Value Articulation</span>
              </div>
              <span className="text-[11px] font-bold text-[#008F68] bg-white px-2.5 py-0.5 rounded-full border border-[#008F68]/20">
                100% Impact
              </span>
            </div>
          </div>

          {/* Card 03: Industry Keywords (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-7 border border-[#E2ECE9] hover:border-[#0A66C2]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(10,102,194,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAF4FF] text-[#0A66C2] border border-[#0A66C2]/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
                    <KeyRound className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0A66C2]">
                    SEARCH DISCOVERY
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-[#0A66C2] transition-colors">
                  03
                </span>
              </div>

              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors tracking-tight leading-snug mb-2.5">
                Industry-Relevant Keywords
              </h3>

              <p className="text-[14px] text-[#556461] leading-[1.65] mb-5">
                Use appropriate professional terminology and high-intent keywords to strengthen relevance across search algorithms and recruiter queries.
              </p>
            </div>

            {/* Keyword Pills Detail */}
            <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
              <span className="text-[10.5px] font-medium bg-[#F0F7FF] text-[#0A66C2] px-2.5 py-1 rounded-md border border-[#0A66C2]/15">
                #DomainExpertise
              </span>
              <span className="text-[10.5px] font-medium bg-[#F0F7FF] text-[#0A66C2] px-2.5 py-1 rounded-md border border-[#0A66C2]/15">
                #StrategicLeadership
              </span>
              <span className="text-[10.5px] font-medium bg-[#F0FDF8] text-[#008F68] px-2.5 py-1 rounded-md border border-[#008F68]/15">
                Algorithmic SEO
              </span>
            </div>
          </div>

          {/* Card 04: Personalised Profile Messaging (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-7 border border-[#E2ECE9] hover:border-[#008F68]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,143,104,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
                    <UserCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#008F68]">
                    BESPOKE MESSAGING
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-[#008F68] transition-colors">
                  04
                </span>
              </div>

              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#040A08] group-hover:text-[#008F68] transition-colors tracking-tight leading-snug mb-2.5">
                Personalised Profile Messaging
              </h3>

              <p className="text-[14px] text-[#556461] leading-[1.65] mb-5">
                Present your experience through authentic content tailored to your real background, unique voice, and specific career objectives.
              </p>
            </div>

            {/* Custom Tone Detail */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11.5px] font-medium text-[#42524E]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#008F68]" />
                Human-Crafted Copy
              </span>
              <span className="text-[#008F68] font-semibold bg-[#F0FDF8] px-2 py-0.5 rounded border border-[#008F68]/20">
                100% Bespoke
              </span>
            </div>
          </div>

          {/* Card 05: Professional Visuals (4 cols on desktop) */}
          <div className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-7 border border-[#E2ECE9] hover:border-[#0A66C2]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(10,102,194,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#EAF4FF] text-[#0A66C2] border border-[#0A66C2]/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
                    <Sparkles className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0A66C2]">
                    VISUAL COHESION
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-[#0A66C2] transition-colors">
                  05
                </span>
              </div>

              <h3 className="text-[19px] sm:text-[20px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors tracking-tight leading-snug mb-2.5">
                Professional Visuals
              </h3>

              <p className="text-[14px] text-[#556461] leading-[1.65] mb-5">
                Complement your profile content with an edited headshot and a customised LinkedIn banner calibrated for maximum executive credibility.
              </p>
            </div>

            {/* Visual Specs Detail */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11.5px] font-medium text-[#42524E]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0A66C2]" />
                Edited Headshot & Banner
              </span>
              <span className="text-[#0A66C2] font-semibold bg-[#EAF4FF] px-2 py-0.5 rounded border border-[#0A66C2]/20">
                Design Included
              </span>
            </div>
          </div>

          {/* Card 06: Authentic Professional Branding (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E2ECE9] hover:border-[#008F68]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,143,104,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs">
                    <ShieldCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#008F68]">
                    VERIFIED INTEGRITY
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-[#008F68] transition-colors">
                  06 / 07
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#040A08] group-hover:text-[#008F68] transition-colors tracking-tight leading-snug mb-2.5">
                Authentic Professional Branding
              </h3>

              <p className="text-[14px] sm:text-[14.5px] text-[#556461] leading-[1.65] mb-5">
                Communicate your real experience and verifiable strengths without fabricated achievements, exaggerated claims, or generic templates.
              </p>
            </div>

            {/* Zero Fabrication Trust Badge */}
            <div className="bg-[#F0FDF8] rounded-2xl p-3.5 sm:p-4 border border-[#C9F0E3] flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#064E4A]">Zero Fabrication Guarantee</span>
              <span className="text-[11px] font-bold text-[#008F68] bg-white px-2.5 py-0.5 rounded-full border border-[#008F68]/20">
                100% Authentic
              </span>
            </div>
          </div>

          {/* Card 07: A Foundation for Ongoing Growth (7 cols on desktop - Wide Anchor Card) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white via-[#F0F7FF]/50 to-[#F0FDF8]/60 rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#0A66C2]/25 hover:border-[#0A66C2]/50 shadow-[0_6px_24px_rgba(10,102,194,0.06)] hover:shadow-[0_20px_40px_rgba(10,102,194,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
                    <TrendingUp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#0A66C2]">
                    LONG-TERM IMPACT
                  </span>
                </div>
                <span className="text-[12px] font-mono font-semibold text-[#0A66C2]">
                  07 / 07
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#040A08] group-hover:text-[#0A66C2] transition-colors tracking-tight leading-snug mb-2.5">
                A Foundation for Ongoing Growth
              </h3>

              <p className="text-[14px] sm:text-[14.5px] text-[#556461] leading-[1.65] mb-6">
                Start with a professionally presented profile that scales with you—ready to support ongoing content creation, network expansion, and career milestones as your ambitions evolve.
              </p>
            </div>

            {/* Growth Progression Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-white/90 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-[#DCE6F0]">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#EAF4FF] text-[#0A66C2] font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                <span className="text-[11.5px] font-semibold text-[#101820]">Executive Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#EAF4FF] text-[#0A66C2] font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                <span className="text-[11.5px] font-semibold text-[#101820]">Network Gravity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F0FDF8] text-[#008F68] font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                <span className="text-[11.5px] font-semibold text-[#008F68]">Career Acceleration</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
