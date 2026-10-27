"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface CareerStagesSectionProps {
  onOpenTrial: (stageName?: string) => void;
}

export default function CareerStagesSection({ onOpenTrial }: CareerStagesSectionProps) {
  // For mobile accordion state
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: "01",
      title: "Early Career",
      sub: "(Entry-Level Professionals)",
      items: [
        {
          name: "Visibility+",
          desc: "Stand out from the very beginning of your career.",
        },
        {
          name: "Linkedin Positioning",
          desc: "Expertly rewrite your Linkedin to highlight your strengths and attract recruiters.",
        },
        {
          name: "Expert Resume Makeover",
          desc: "Get your resume rewritten by experts to make a strong first impression.",
        },
        {
          name: "Linkedin Profile Review Report",
          desc: "Know what's missing from your Linkedin profile",
        },
        {
          name: "Post Buddy for Linkedin",
          desc: "Get AI-driven post ideas and content plans to boost your presence on Linkedin.",
        },
      ],
    },
    {
      num: "02",
      title: "Mid-Level Career",
      sub: "(Growth-Oriented Professionals)",
      items: [
        {
          name: "Visibility+",
          desc: "Accelerate your career with greater professional visibility.",
        },
        {
          name: "Linkedin Positioning",
          desc: "Our expert will rewrite your profile to highlight your growth, experience, and leadership.",
        },
        {
          name: "Expert Resume Makeover",
          desc: "Get an expert-crafted resume and prepare for your next big move.",
        },
        {
          name: "Linkedin Profile Review Report",
          desc: "Get a full Linkedin profile scan and uncover what's holding you back",
        },
        {
          name: "Post Buddy for Linkedin",
          desc: "Improve your Linkedin presence by sharing insightful career stories & engaging content.",
        },
      ],
    },
    {
      num: "03",
      title: "Senior-Level Career (Leadership)",
      sub: "(Executives, Founders & Business Owners)",
      items: [
        {
          name: "Visibility+",
          desc: "Strengthen your executive presence and industry influence.",
        },
        {
          name: "Linkedin Positioning",
          desc: "Transform your Linkedin into a leadership profile that attracts opportunities.",
        },
        {
          name: "Expert Resume Makeover",
          desc: "A premium rewrite crafted to showcase your leadership journey and strategic value.",
        },
        {
          name: "Linkedin Profile Review Report",
          desc: "Get an in-depth Linkedin review and uncover barriers to your next leadership role.",
        },
        {
          name: "Post Buddy for Linkedin",
          desc: "Share thought leadership to position yourself as an expert and attract top opportunities",
        },
      ],
    },
  ];

  return (
    <section id="whothisfor" className="py-14 md:py-20 bg-white">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#040A08] leading-tight">
            Wherever You Are in Your Career, We&apos;ve Got You Covered!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#56615E] font-medium leading-relaxed">
            Whether you&apos;re starting out, growing fast, or aiming for the top - FeedGrow is with you every step of the way.
          </p>
        </div>

        {/* Desktop 3-Column Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 bg-white p-8 rounded-[28px] shadow-sm border border-[#E6E6E6] relative">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className={`p-6 flex flex-col justify-between ${
                idx !== stages.length - 1 ? "border-r border-[#E6E6E6]" : ""
              }`}
            >
              <div>
                <span className="text-[72px] font-extrabold text-[#F2F2F2] leading-none select-none block">
                  {stage.num}
                </span>
                <h3 className="text-xl font-bold text-[#141414] mt-1">
                  {stage.title}
                </h3>
                <p className="text-xs font-semibold text-[#56615E] mb-6">
                  {stage.sub}
                </p>

                <div className="space-y-4">
                  {stage.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      onClick={() => onOpenTrial(`${stage.title} - ${item.name}`)}
                      className="group cursor-pointer p-2.5 -mx-2 rounded-xl hover:bg-[#F5FFFC] transition-colors"
                    >
                      <h4 className="text-sm font-bold text-[#040A08] group-hover:text-[#018065] transition-colors flex items-center justify-between">
                        <span>{item.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#018065] transition-opacity shrink-0" />
                      </h4>
                      <p className="text-xs text-[#56615E] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Accordion View */}
        <div className="lg:hidden space-y-4">
          {stages.map((stage, idx) => {
            const isOpen = activeStage === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E6E6E6] rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveStage(isOpen ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-extrabold text-[#E0E0E0]">
                      {stage.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#141414]">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#56615E]">{stage.sub}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#018065]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 space-y-4 border-t border-gray-100 bg-gray-50/40">
                    {stage.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        onClick={() => onOpenTrial(`${stage.title} - ${item.name}`)}
                        className="p-3 bg-white rounded-xl border border-gray-100 shadow-xs cursor-pointer active:bg-[#F5FFFC]"
                      >
                        <h4 className="text-sm font-bold text-[#040A08] flex items-center justify-between">
                          <span>{item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#018065]" />
                        </h4>
                        <p className="text-xs text-[#56615E] mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12">
          <button
            onClick={() => onOpenTrial("Career Growth Plan")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#018065] hover:bg-[#137661] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
          >
            Try Visibility+ For Free Today
          </button>
          <p className="mt-2 text-xs text-[#56615E] font-medium">
            Trusted by 100,000 professionals across 30+ industries
          </p>
        </div>
      </div>
    </section>
  );
}
