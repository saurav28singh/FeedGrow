"use client";

import React from "react";
import { 
  Compass, 
  Target, 
  FileCheck2, 
  Palette, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface OurApproachSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export default function OurApproachSection({ onOpenTrial }: OurApproachSectionProps) {
  const steps = [
    {
      step: "01",
      title: "Understand Your Professional Background",
      desc: "We work with your education, experience, skills, achievements, and goals.",
      icon: Compass,
    },
    {
      step: "02",
      title: "Refine Your Professional Positioning",
      desc: "We improve how your profile communicates your professional identity and relevant expertise.",
      icon: Target,
    },
    {
      step: "03",
      title: "Optimise Your Profile Content",
      desc: "We refine key profile sections and incorporate relevant industry terminology where appropriate.",
      icon: FileCheck2,
    },
    {
      step: "04",
      title: "Strengthen Your Visual Presentation",
      desc: "We help align your headshot and LinkedIn banner with your professional identity.",
      icon: Palette,
    },
    {
      step: "05",
      title: "Review for Consistency",
      desc: "We review the relevant elements to create a more coherent, polished profile.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="our-approach" className="relative py-20 md:py-26 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#0A66C2]/20 bg-[#F0F7FF] text-[#0A66C2] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              OUR METHODOLOGY
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[40px] md:text-[44px] font-bold text-[#040A08] tracking-[-0.03em] leading-tight">
            OUR APPROACH
          </h2>

          <p className="mt-2 text-[17px] sm:text-[19px] font-semibold text-[#0A66C2]">
            Your Background Is the Foundation. Your Goals Shape the Presentation.
          </p>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#556461] max-w-2xl mx-auto">
            We believe effective profile optimisation starts with understanding the professional you are and the direction you want to take.
          </p>
        </div>

        {/* 5-Step Process Timeline / Structured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 sm:p-7 bg-[#FAFCFF] border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-extrabold text-[#0A66C2] bg-[#EBF4FF] border border-[#0A66C2]/20 px-3 py-1 rounded-full">
                      STEP {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0A66C2] border border-gray-100 flex items-center justify-center shadow-2xs group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#040A08] tracking-tight group-hover:text-[#0A66C2] transition-colors mb-2 leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-[13.5px] text-[#556461] leading-[1.6]">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Authenticity Note Box */}
        <div className="mt-14 sm:mt-16 max-w-3xl mx-auto">
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#F0FDF8] via-white to-[#F0F7FF] border border-[#008F68]/25 shadow-xs flex items-start gap-4 text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#008F68]/10 text-[#008F68] border border-[#008F68]/20 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#040A08] uppercase tracking-wider mb-1">
                AUTHENTICITY REMAINS CENTRAL
              </h4>
              <p className="text-[14.5px] text-[#42524E] leading-relaxed">
                Throughout the process, authenticity remains central. We present the information you provide professionally without inventing credentials or achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
