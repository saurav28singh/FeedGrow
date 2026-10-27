"use client";

import React, { useState, useEffect } from "react";
import { X, Play, Sparkles, CheckCircle2, TrendingUp, Users, Eye, Briefcase, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
}

export default function DemoModal({ isOpen, onClose, onStartTrial }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "profile" | "growth" | "content">("overview");

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs = [
    { id: "overview", label: "Visibility+ Engine", icon: Sparkles },
    { id: "profile", label: "Profile Makeover", icon: Users },
    { id: "growth", label: "Strategic Growth", icon: TrendingUp },
    { id: "content", label: "Executive Content", icon: Eye },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#064E4A] via-[#008F68] to-[#018065] p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" /> Interactive Product Demo
          </div>
          <h2 id="demo-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            How Visibility+ Delivers 5X LinkedIn Growth
          </h2>
          <p className="text-emerald-50 text-sm mt-1 max-w-xl">
            See how our 100% managed service turns your LinkedIn profile into a magnetic inbound opportunity engine.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 bg-[#F8FAFC] px-6 pt-3 gap-2 overflow-x-auto shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-t-xl transition-all cursor-pointer whitespace-nowrap border-b-2 ${
                  isActive
                    ? "bg-white text-[#008F68] border-[#008F68] shadow-xs"
                    : "text-gray-500 hover:text-gray-800 border-transparent hover:bg-gray-100/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#008F68]" : "text-gray-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Highlight Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20 text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase">Follower Growth</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#040A08] mt-1">+482%</div>
                  <div className="text-xs font-bold text-[#008F68] mt-0.5">↗ Guaranteed 5X</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20 text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase">Profile Reach</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#008F68] mt-1">1.2M+</div>
                  <div className="text-xs font-bold text-[#008F68] mt-0.5">+62% Month-over-Month</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20 text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase">Connections</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#040A08] mt-1">8.2K</div>
                  <div className="text-xs font-bold text-[#008F68] mt-0.5">High-Value Leaders</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20 text-center">
                  <div className="text-xs font-semibold text-gray-500 uppercase">Opportunities</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#040A08] mt-1">+3X</div>
                  <div className="text-xs font-bold text-[#008F68] mt-0.5">Direct Recruiter Inbound</div>
                </div>
              </div>

              {/* Step By Step Flow */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-[#040A08]">The 4 Pillars of Guaranteed Growth:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-[#008F68] text-white flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h5 className="text-sm font-bold text-[#040A08]">Done-For-You Profile Makeover</h5>
                      <p className="text-xs text-gray-600 mt-0.5">Rewritten by top executive recruiters with high-converting hooks and ATS keywords.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-[#008F68] text-white flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h5 className="text-sm font-bold text-[#040A08]">Hand-Crafted Content Engine</h5>
                      <p className="text-xs text-gray-600 mt-0.5">3-5 viral thought leadership posts published weekly in your authentic voice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-[#008F68] text-white flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h5 className="text-sm font-bold text-[#040A08]">Strategic Industry Networking</h5>
                      <p className="text-xs text-gray-600 mt-0.5">Personalized connection requests to key decision-makers and hiring managers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-[#008F68] text-white flex items-center justify-center font-bold shrink-0">4</div>
                    <div>
                      <h5 className="text-sm font-bold text-[#040A08]">Real-Time Inbound Leads</h5>
                      <p className="text-xs text-gray-600 mt-0.5">Watch qualified recruiters, clients, and partners land directly in your inbox.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20">
                <h4 className="text-base font-bold text-[#064E4A]">Before vs After Transformation</h4>
                <p className="text-xs text-gray-600 mt-1">Our executive recruiters overhaul headline, about section, experience bullets, and featured media.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-700 mb-2">BEFORE FEEDGROW</span>
                  <p className="text-xs text-gray-600 italic">&ldquo;Software Engineer looking for new opportunities. Skilled in Java, Python, React.&rdquo;</p>
                  <p className="text-xs text-red-600 mt-2 font-medium">Result: Invisible in LinkedIn search algorithm. 0 recruiter inbounds.</p>
                </div>
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-2">AFTER VISIBILITY+</span>
                  <p className="text-xs text-gray-800 font-medium">&ldquo;Staff Platform Architect | Scaling Distributed Cloud Systems to 10M+ DAU | Ex-Fortune 500 Tech Lead&rdquo;</p>
                  <p className="text-xs text-emerald-700 mt-2 font-bold">Result: +1,240% profile visits. 4 inbound VP interview requests.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "growth" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#064E4A]">Guaranteed 5X Follower Growth</h4>
                  <p className="text-xs text-gray-600 mt-1">Targeted by industry, seniority, job title, and company size.</p>
                </div>
                <span className="text-2xl font-extrabold text-[#008F68]">+482%</span>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008F68]" />
                  <span>100% human-verified safe practices adhering strictly to LinkedIn guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008F68]" />
                  <span>Zero bots or fake engagement — only genuine decision makers in your sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008F68]" />
                  <span>Monthly analytics report with detailed growth trajectories</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "content" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-2xl bg-[#F0FDF8] border border-[#008F68]/20">
                <h4 className="text-base font-bold text-[#064E4A]">Viral Thought-Leadership Content</h4>
                <p className="text-xs text-gray-600 mt-1">Ghostwritten by industry-specialist copywriters based on your milestones and insights.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-2 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#008F68] text-white flex items-center justify-center font-bold text-sm">FG</div>
                  <div>
                    <div className="text-xs font-bold text-[#040A08]">Sample High-Performing Post Format</div>
                    <div className="text-[10px] text-gray-400">Published via FeedGrow Visibility+ Engine</div>
                  </div>
                </div>
                <p className="text-xs text-gray-700 line-clamp-3">
                  &ldquo;The biggest mistake I see engineering leaders make when scaling to 100M requests/day isn&apos;t their tech stack. It&apos;s their feedback loops. Here is the exact blueprint we used...&rdquo;
                </p>
                <div className="flex items-center gap-4 text-[11px] text-[#008F68] font-bold mt-2 pt-2 border-t border-gray-50">
                  <span>👍 842 Reactions</span>
                  <span>💬 156 Comments</span>
                  <span>🔄 48 Reposts</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-[#008F68]" />
            <span>Guaranteed results or 100% money-back policy</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartTrial();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#008F68] hover:bg-[#064E4A] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Try Before You Buy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
