"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TrendingUp, Eye, Network, Feather, Star } from "lucide-react";

const GrowthMetrics3D = dynamic(() => import("./three/GrowthMetrics3D"), {
  ssr: false,
  loading: () => (
    <div className="w-36 h-36 flex items-center justify-center rounded-full bg-emerald-50/50 animate-pulse mx-auto mb-4">
      <div className="w-7 h-7 border-2 border-[#008F68] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface VisibilityGrowthSectionProps {
  onOpenTrial: () => void;
}

export default function VisibilityGrowthSection({ onOpenTrial }: VisibilityGrowthSectionProps) {
  const cards = [
    {
      title: "Up to 5X Followers/Connection Growth",
      desc: "Grow your followers and network with relevant professionals who matter.",
      icon: TrendingUp,
    },
    {
      title: "Up to 1000% More Profile Impressions",
      desc: "Increase your visibility and get discovered by recruiters and decision-makers.",
      icon: Eye,
    },
    {
      title: "Strategic Networking",
      desc: "Build meaningful connections with industry leaders, recruiters, and hiring managers.",
      icon: Network,
    },
    {
      title: "Expert-Crafted Content",
      desc: "Professionally crafted content that builds credibility",
      icon: Feather,
    },
  ];

  return (
    <section id="fitall" className="py-14 md:py-20 bg-[#FBFCFC] relative overflow-hidden">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#040A08] leading-tight">
            Visibility That Creates Opportunities.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#2F3332] font-normal max-w-lg mx-auto">
            Experience the first 15 days FREE before committing to the complete program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Panel with Interactive 3D Growth Emblem */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center text-center bg-[#EFF2F8] p-6 sm:p-8 rounded-[18px] border border-gray-100 relative group">
            <div className="mb-2">
              <GrowthMetrics3D />
            </div>

            <div className="inline-flex items-center gap-2 bg-[#E9EDF2] text-[#2F3332] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-5 h-5 rounded-full bg-[#0B1F47] text-white flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Verified Growth Framework</span>
            </div>

            <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#040A08] leading-tight mb-3">
              Guaranteed Linkedin Growth.
            </h3>

            <p className="text-sm sm:text-[15px] text-[#56615E] leading-relaxed">
              A proven system that helps professionals increase visibility, attract opportunities, and build authority through strategic profile optimization and content execution.
            </p>
          </div>

          {/* Right Panel Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-white border border-[#E6E6E6] rounded-[16px] hover:shadow-md hover:border-[#018065]/40 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F3F5F8] group-hover:bg-[#E8F5F1] group-hover:text-[#018065] flex items-center justify-center text-[#040A08] mb-4 transition-colors">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h4 className="text-[17px] font-bold text-[#040A08] mb-2 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-sm text-[#56615E] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Wide 5th Card */}
            <div className="mt-4 p-5 sm:p-6 bg-white border border-[#E6E6E6] rounded-[16px] flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md hover:border-[#018065]/40 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-[#F3F5F8] group-hover:bg-[#E8F5F1] group-hover:text-[#018065] flex items-center justify-center text-[#040A08] shrink-0 transition-colors">
                <Star className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-[#040A08] mb-1">
                  Attract Inbound Opportunities
                </h4>
                <p className="text-sm text-[#56615E] leading-relaxed">
                  Get noticed by recruiters, potential employers, clients, and business partners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-6 bg-[#EFF2F8] rounded-[18px] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base sm:text-lg font-semibold text-[#040A08] text-center md:text-left">
            Experience the first 15 days FREE before committing to the complete program.
          </p>
          <button
            onClick={onOpenTrial}
            className="px-6 py-2.5 rounded-full bg-[#018065] hover:bg-[#137661] text-white text-sm sm:text-base font-bold whitespace-nowrap shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Start My Free Trial Now
          </button>
        </div>
      </div>
    </section>
  );
}
