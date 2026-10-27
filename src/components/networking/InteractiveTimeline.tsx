"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  TrendingUp,
} from "lucide-react";

export default function InteractiveTimeline() {
  const [activeMonth, setActiveMonth] = useState<number>(1);

  const months = [
    {
      monthNum: 1,
      phase: "Foundation",
      weeks: "Weeks 1 – 4",
      tagline: "Profile alignment, outreach kick-off, and dedicated coordination.",
      icon: Compass,
      color: "#0A66C2",
      points: [
        "Profile review and optimisation.",
        "Begin targeted connection requests.",
        "Start relevant professional engagement.",
        "Initiate personalised outreach.",
      ],
      deliverablesHighlight: "1-on-1 strategy sync & complete profile rewriting",
    },
    {
      monthNum: 2,
      phase: "Engagement",
      weeks: "Weeks 5 – 8",
      tagline: "Deepening dialogue, active commentary, and community engagement.",
      icon: TrendingUp,
      color: "#008F68",
      points: [
        "Continue targeted networking.",
        "Continue professional engagement.",
        "Maintain personalised outreach.",
        "Review completed activities through scheduled reporting.",
      ],
      deliverablesHighlight: "Warm conversation cadence & midway activity audit",
    },
    {
      monthNum: 3,
      phase: "Continued Networking & Review",
      weeks: "Weeks 9 – 12",
      tagline: "Sustaining cadence, solidifying relationships, and delivering full audits.",
      icon: ShieldCheck,
      color: "#0A66C2",
      points: [
        "Continue networking and engagement.",
        "Maintain personalised professional outreach.",
        "Review programme activities.",
        "Summarise the work completed.",
      ],
      deliverablesHighlight: "Comprehensive 3-month performance summary & handover",
    },
  ];

  return (
    <section id="timeline" className="py-20 md:py-28 bg-white border-t border-[#DCE6F0] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20">
            <Calendar className="w-3.5 h-3.5 text-[#008F68]" />
            PROGRAMME PHASES
          </span>

          <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.16]">
            A Structured Approach to Professional Networking.
          </h2>

          <p className="text-[16px] sm:text-[17.5px] text-[#536273] leading-relaxed max-w-2xl mx-auto">
            Three months of coordinated networking activities, personalised engagement, and
            regular reporting.
          </p>
        </div>

        {/* Desktop Horizontal Connected Timeline Bar */}
        <div className="hidden lg:block mb-12 relative">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-1 bg-gradient-to-r from-[#0A66C2]/20 via-[#008F68]/30 to-[#0A66C2]/20 z-0 rounded-full" />

          {/* Active Track Highlight */}
          <div
            style={{
              width: activeMonth === 1 ? "0%" : activeMonth === 2 ? "50%" : "100%",
              transition: "width 0.4s ease-in-out",
            }}
            className="absolute top-1/2 left-[12%] -translate-y-1/2 h-1.5 bg-gradient-to-r from-[#0A66C2] to-[#008F68] z-0 rounded-full shadow-[0_0_12px_rgba(10,102,194,0.5)]"
          />

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {months.map((m) => {
              const isSelected = activeMonth === m.monthNum;
              const isPastOrCurrent = activeMonth >= m.monthNum;
              const Icon = m.icon;

              return (
                <button
                  key={m.monthNum}
                  onClick={() => setActiveMonth(m.monthNum)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Glowing 3D Node */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      isSelected
                        ? "bg-[#0A66C2] text-white scale-110 shadow-[0_0_24px_rgba(10,102,194,0.45)]"
                        : isPastOrCurrent
                        ? "bg-[#008F68] text-white"
                        : "bg-white text-[#536273] border-2 border-[#DCE6F0] group-hover:border-[#0A66C2]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block transition-colors ${
                        isSelected ? "text-[#0A66C2]" : "text-[#536273]"
                      }`}
                    >
                      Month {m.monthNum}
                    </span>
                    <span className="text-[15px] font-extrabold text-[#101820]">
                      {m.phase}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Three Stage Cards (Interactive & Responsive) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {months.map((m) => {
            const isSelected = activeMonth === m.monthNum;
            const Icon = m.icon;

            return (
              <div
                key={m.monthNum}
                onClick={() => setActiveMonth(m.monthNum)}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-b from-[#F7FAFD] to-white border-2 border-[#0A66C2] shadow-xl shadow-[#0A66C2]/10 -translate-y-1.5"
                    : "bg-white border-[#DCE6F0] hover:border-[#0A66C2]/40 shadow-xs hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                        isSelected
                          ? "bg-[#0A66C2] text-white shadow-sm"
                          : "bg-[#EAF4FF] text-[#0A66C2]"
                      }`}
                    >
                      Month {m.monthNum}
                    </span>
                    <span className="text-xs font-semibold text-[#536273] bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                      {m.weeks}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-[#0A66C2] text-white"
                          : "bg-[#EAF4FF] text-[#0A66C2]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[20px] font-extrabold text-[#101820] leading-snug">
                      {m.phase}
                    </h3>
                  </div>

                  <p className="text-[13.5px] text-[#536273] mb-6 leading-relaxed">
                    {m.tagline}
                  </p>

                  {/* Bullet points specified by the prompt */}
                  <ul className="space-y-3.5 text-[14px] text-[#101820]">
                    {m.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isSelected ? "text-[#008F68]" : "text-[#0A66C2]"
                          }`}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#536273] font-medium">Phase Focus:</span>
                  <span className="font-bold text-[#008F68]">{m.deliverablesHighlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase Note */}
        <p className="text-center text-xs text-[#536273] mt-8 italic">
          Note: These are high-level programme phases and strategic milestones, not guaranteed monthly deliverable quotas.
        </p>
      </div>
    </section>
  );
}
