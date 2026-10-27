"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Linkedin, Settings, CheckCircle2, UserCheck, BarChart3 } from "lucide-react";

const WhyFeedGrow3D = dynamic(() => import("./three/WhyFeedGrow3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex items-center justify-center rounded-2xl bg-[#E8F5F1]/40 animate-pulse">
      <div className="w-8 h-8 border-2 border-[#008F68] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface WhyFeedGrowSectionProps {
  onOpenTrial: () => void;
}

export default function WhyFeedGrowSection({ onOpenTrial }: WhyFeedGrowSectionProps) {
  const trustPoints = [
    {
      title: "Built Around Linkedin",
      desc: "Designed specifically for modern professional discovery.",
      icon: Linkedin,
    },
    {
      title: "Fully Managed",
      desc: "No learning. No posting. No daily effort.",
      icon: Settings,
    },
    {
      title: "Proven Growth Framework",
      desc: "Structured execution - not guesswork. Backed by industry leaders.",
      icon: CheckCircle2,
    },
    {
      title: "Personal Success Manager",
      desc: "One point of contact throughout your journey.",
      icon: UserCheck,
    },
    {
      title: "Measurable Growth",
      desc: "Track impressions, connections and profile visibility.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="whyfeedgrow" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FBFCFC] border border-gray-100/80 rounded-[30px] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column 3D Dimensional Network Visualization */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-center items-center relative py-2">
              <div className="w-full max-w-[420px] relative">
                <WhyFeedGrow3D />
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 bg-white/90 lg:bg-white p-6 sm:p-8 md:p-10 rounded-[28px] shadow-sm border border-gray-100/80">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040A08] leading-tight mb-6">
                Why 50K+ Senior Professionals Trust FeedGrow
              </h2>

              <ul className="divide-y divide-gray-100">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <li key={index} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8F5F1] text-[#018065] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[17px] font-bold text-[#040A08] leading-snug">
                          {point.title}
                        </h4>
                        <p className="text-sm text-[#56615E] mt-0.5 leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenTrial}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#018065] hover:bg-[#137661] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Experience Visibility+ Free
                </button>
                <p className="mt-2 text-xs text-[#56615E] font-medium text-center sm:text-left">
                  Trusted by 50,000+ senior professionals across 30+ industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
