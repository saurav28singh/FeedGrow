"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Users,
  MessageSquare,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function HumanLedShowcase({ onOpenTrial }: { onOpenTrial: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#DCE6F0] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#EAF4FF] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#008F68]" />
              AUTHENTIC HUMAN EXECUTION
            </span>

            <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.15]">
              Human-Led Networking. <br />
              <span className="text-[#0A66C2]">Meaningful Engagement.</span>
            </h2>

            <p className="text-[16px] sm:text-[17.5px] text-[#536273] leading-relaxed">
              At FeedGrow, all connection requests, comments, and conversations are human-led and
              personalised. We focus on relevant networking, meaningful engagement, and building
              professional relationships rather than automated or mass-generated interactions.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F7FAFD] border border-[#DCE6F0]">
                <div className="w-6 h-6 rounded-full bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-[14.5px] font-bold text-[#101820]">
                    Zero Automated Scripts or Generic Bots
                  </h4>
                  <p className="text-[13px] text-[#536273] mt-0.5">
                    We strictly avoid risky browser automation tools that compromise profile safety
                    or trigger LinkedIn account restrictions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20">
                <div className="w-6 h-6 rounded-full bg-[#E8F5F1] text-[#008F68] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-[14.5px] font-bold text-[#101820]">
                    Personalised In-Depth Research
                  </h4>
                  <p className="text-[13px] text-[#536273] mt-0.5">
                    Every message is written after reviewing the recipient&apos;s recent posts, company
                    milestones, and mutual industry context.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F7FAFD] border border-[#DCE6F0]">
                <div className="w-6 h-6 rounded-full bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-[14.5px] font-bold text-[#101820]">
                    Account Safety &amp; Professional Etiquette
                  </h4>
                  <p className="text-[13px] text-[#536273] mt-0.5">
                    All activities adhere strictly to professional decorum and LinkedIn fair-use
                    standards, protecting your executive reputation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 h-[48px] px-7 rounded-full bg-[#008F68] hover:bg-[#007A58] text-white text-[15px] font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Discuss Your Programme</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered 3D Workspace Composition */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]"
          >
            {/* Center Layer: Workspace Illustration with Laptop */}
            <div
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${mousePos.y * 0.4}deg)`,
                transition: "transform 0.25s ease-out",
              }}
              className="relative z-10 w-full max-w-[420px] rounded-3xl bg-gradient-to-b from-[#F7FAFD] via-white to-[#F0FDF8] p-6 sm:p-8 border border-[#DCE6F0] shadow-2xl overflow-hidden"
            >
              {/* Top Accent */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-bold text-[#0A66C2] bg-[#EAF4FF] px-2.5 py-0.5 rounded-full">
                  FeedGrow Executive Portal
                </span>
              </div>

              {/* Central Laptop Workspace Preview */}
              <div className="my-5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#101820]">Outreach Cadence</span>
                  <span className="text-[#008F68] font-bold">100% Human Managed</span>
                </div>

                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="w-4/5 h-full rounded-full bg-gradient-to-r from-[#0A66C2] to-[#008F68]" />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                  <div className="p-2 rounded-xl bg-[#F8FAFC] border border-gray-100">
                    <span className="text-gray-500 block">Weekly Requests</span>
                    <span className="font-extrabold text-[#101820] text-sm">85 / 85</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F8FAFC] border border-gray-100">
                    <span className="text-gray-500 block">Comments Made</span>
                    <span className="font-extrabold text-[#008F68] text-sm">50 / 50</span>
                  </div>
                </div>
              </div>

              {/* Verified Dialogue Simulation */}
              <div className="p-3.5 rounded-xl bg-[#F0FDF8] border border-[#008F68]/20 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#008F68]">1-on-1 Contextual Note</span>
                  <span className="text-[10px] text-gray-500">Scheduled by Manager</span>
                </div>
                <p className="text-[11.5px] text-[#101820] italic">
                  &ldquo;Loved your perspective on enterprise sustainability frameworks at the summit.
                  Would welcome connecting to exchange industry insights.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating 3D Badge 1: Top-Right */}
            <div
              style={{
                transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
                transition: "transform 0.3s ease-out",
              }}
              className="absolute -top-3 right-0 sm:right-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#DCE6F0] shadow-lg flex items-center gap-2.5 animate-float-slow"
            >
              <div className="w-8 h-8 rounded-xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center font-bold">
                in
              </div>
              <div>
                <p className="text-xs font-bold text-[#101820]">Official Guidelines</p>
                <p className="text-[10.5px] text-[#008F68]">Fully Compliant Pacing</p>
              </div>
            </div>

            {/* Floating 3D Badge 2: Bottom-Left */}
            <div
              style={{
                transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
                transition: "transform 0.3s ease-out",
              }}
              className="absolute -bottom-4 left-0 sm:left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#DCE6F0] shadow-lg flex items-center gap-2.5 animate-float-delayed"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F0FDF8] text-[#008F68] flex items-center justify-center">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#101820]">Account Safety First</p>
                <p className="text-[10.5px] text-gray-500">Dedicated Human Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
