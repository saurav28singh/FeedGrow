"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Users,
  MessageSquare,
  Repeat,
  HeartHandshake,
  Building2,
  ShieldCheck,
  FileText,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverableMetric: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  deliverableBullets: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    num: "01",
    title: "LinkedIn Profile Review & Optimisation",
    shortDesc: "Complete evaluation and rewriting to present skills, experience, and goals.",
    fullDesc:
      "A comprehensive review of your entire LinkedIn profile structure. We refine your headline, about summary, experience narratives, and keyword density to communicate your executive credibility and value clearly.",
    deliverableMetric: "Full Comprehensive Audit",
    icon: UserCheck,
    tag: "Foundation",
    deliverableBullets: [
      "Targeted keyword positioning for industry searchability",
      "Executive about summary written in your authentic voice",
      "Experience section restructuring focused on impact and achievements",
      "Recommendations for featured media, skills endorsement, and banner visuals",
    ],
  },
  {
    id: "service-2",
    num: "02",
    title: "Targeted Connection Requests",
    shortDesc: "1,000+ personalised connection requests targeted towards relevant industry leaders.",
    fullDesc:
      "Strategic outreach targeting 1,000+ relevant professionals aligned with your industry vertical, seniority tier, and professional aspirations. Every request includes a personalized note tailored to mutual relevance.",
    deliverableMetric: "1,000+ Requests Over 3 Months",
    icon: Users,
    tag: "Targeted Outreach",
    deliverableBullets: [
      "Carefully filtered by industry, seniority, company size, and geography",
      "Personalised connection notes without automated generic copy",
      "Paced evenly according to LinkedIn community guidelines",
      "Monitored and refined weekly based on connection acceptance feedback",
    ],
  },
  {
    id: "service-3",
    num: "03",
    title: "Meaningful Comments",
    shortDesc: "600+ thoughtful comments on relevant professional posts to foster industry dialogue.",
    fullDesc:
      "Active participation in relevant conversations where industry peers, decision-makers, and prospective partners are already sharing ideas. We contribute 600+ thoughtful, context-rich comments that position you as an engaged peer.",
    deliverableMetric: "600+ High-Context Comments",
    icon: MessageSquare,
    tag: "Thought Leadership",
    deliverableBullets: [
      "Constructive viewpoints on trending industry discussions",
      "Zero generic one-liner spam (e.g. 'Great post!')",
      "Human-researched commentary reflecting your actual domain expertise",
      "Consistently visible in target leaders' notification feeds",
    ],
  },
  {
    id: "service-4",
    num: "04",
    title: "Post Engagement or Reposts",
    shortDesc: "80+ engagement and repost activities to maintain an active, respected presence.",
    fullDesc:
      "Curating and amplifying key industry reports, news, and authoritative content with added perspective to maintain an active, consistent presence on your followers' feeds.",
    deliverableMetric: "80+ Strategic Engagements",
    icon: Repeat,
    tag: "Feed Visibility",
    deliverableBullets: [
      "Strategic reposts with thoughtful introductory perspectives",
      "Engagement with leading voices in your professional ecosystem",
      "Strengthens profile authority in LinkedIn algorithm indexing",
      "Builds reciprocity with key content creators in your domain",
    ],
  },
  {
    id: "service-5",
    num: "05",
    title: "Warm-Conversation Outreach",
    shortDesc: "80+ personalised conversations focused on genuine relationship building.",
    fullDesc:
      "Direct 1-on-1 dialogue with new and existing connections who demonstrate mutual interest. We open 80+ warm conversations centered on shared challenges, industry insights, and professional synergies.",
    deliverableMetric: "80+ Relationship Dialogues",
    icon: HeartHandshake,
    tag: "Direct Relationships",
    deliverableBullets: [
      "Zero aggressive sales pitches or immediate transactional asks",
      "Conversation starters tailored around recent posts, milestones, or mutual groups",
      "Follow-up cadences handled with executive discretion",
      "Identifies genuine opportunities for collaboration or consulting",
    ],
  },
  {
    id: "service-6",
    num: "06",
    title: "Professional Group Engagement",
    shortDesc: "15+ purposeful group interactions across relevant LinkedIn communities.",
    fullDesc:
      "Meaningful participation within 15+ curated LinkedIn professional groups and specialist forums, expanding your presence beyond 1st-degree connections into wider industry circles.",
    deliverableMetric: "15+ Group Interactions",
    icon: Building2,
    tag: "Community Presence",
    deliverableBullets: [
      "Curated selection of high-signal, moderated industry groups",
      "Meaningful answers to technical or strategic inquiries",
      "Broadens discovery among niche practitioners and recruiters",
      "Positions you as an active contributor to community development",
    ],
  },
  {
    id: "service-7",
    num: "07",
    title: "Dedicated Account Manager",
    shortDesc: "One dedicated partner coordinating all activities and preferences for three months.",
    fullDesc:
      "Your designated executive networking partner who coordinates weekly calendars, refines messaging tone, audits progress, and ensures every outbound communication perfectly reflects your personal brand standards.",
    deliverableMetric: "1-on-1 Strategic Management",
    icon: ShieldCheck,
    tag: "Human Coordination",
    deliverableBullets: [
      "Single point of contact for strategic alignment",
      "Initial in-depth onboarding session to understand goals and voice",
      "Proactive schedule and outreach pacing management",
      "Direct communication channel for ongoing refinements",
    ],
  },
  {
    id: "service-8",
    num: "08",
    title: "Weekly Work Reports",
    shortDesc: "Regular transparent reports covering completed activities and performance analysis.",
    fullDesc:
      "Comprehensive weekly audits delivered at a scheduled time, detailing every connection request sent, comment published, conversation initiated, and engagement milestones achieved.",
    deliverableMetric: "Weekly Transparent Audits",
    icon: FileText,
    tag: "Accountability",
    deliverableBullets: [
      "Full transparency log of all outgoing and completed activities",
      "Audience breakdown and response rate observations",
      "Actionable recommendations for the upcoming week",
      "Scheduled review calls to maintain full alignment",
    ],
  },
  {
    id: "service-9",
    num: "09",
    title: "LinkedIn Premium Subscription Support",
    shortDesc: "Three months of subscription support subject to agreed package terms.",
    fullDesc:
      "Support for LinkedIn Premium access across your three-month programme, unlocking advanced profile visibility, unrestricted browsing, InMail credits, and detailed viewer analytics.",
    deliverableMetric: "3 Months Programme Support",
    icon: BadgeCheck,
    tag: "Platform Capability",
    deliverableBullets: [
      "Unlocks expanded InMail capabilities for out-of-network outreach",
      "Full 90-day 'Who Viewed Your Profile' visibility",
      "Enhanced candidate / peer search filters",
      "Subject to package eligibility and terms",
    ],
  },
];

export default function EditorialServicesShowcase() {
  const [activeServiceId, setActiveServiceId] = useState<string>("service-1");
  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FBFCFC] border-t border-[#DCE6F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]">
            <Layers className="w-3.5 h-3.5 text-[#0A66C2]" />
            COMPLETE SERVICE SUITE
          </span>

          <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.16]">
            Everything You Need for More Meaningful Networking.
          </h2>

          <p className="text-[16px] sm:text-[17.5px] text-[#536273] leading-relaxed max-w-2xl mx-auto">
            A coordinated three-month programme designed to strengthen your LinkedIn presence and
            support relevant professional relationships.
          </p>
        </div>

        {/* Editorial Layout: Featured Spotlight Card + Structured Service List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Spotlight Interactive Showcase Panel (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white to-[#F7FAFD] border-2 border-[#0A66C2]/20 shadow-xl relative overflow-hidden space-y-6">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A66C2] via-[#008F68] to-[#0A66C2]" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#0A66C2] bg-[#EAF4FF] px-3 py-1 rounded-xl">
                  Service {activeService.num} of 09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008F68] bg-[#F0FDF8] px-3 py-1 rounded-full border border-[#008F68]/20">
                  {activeService.tag}
                </span>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-[#0A66C2]/25">
                  <ActiveIcon className="w-7 h-7" />
                </div>

                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#101820] leading-snug">
                  {activeService.title}
                </h3>

                <p className="text-[14.5px] text-[#536273] leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Metric Box */}
              <div className="p-4 rounded-2xl bg-[#EAF4FF]/80 border border-[#DCE6F0] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#536273] uppercase tracking-wider block">
                    Programme Deliverable
                  </span>
                  <span className="text-[15px] font-extrabold text-[#0A66C2]">
                    {activeService.deliverableMetric}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#008F68] bg-white px-2.5 py-1 rounded-full shadow-2xs">
                  Human-Led
                </span>
              </div>

              {/* Specific Deliverable Points */}
              <div className="space-y-2.5 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-[#101820] uppercase tracking-wider block mb-2">
                  What We Deliver:
                </span>
                {activeService.deliverableBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#101820]">
                    <CheckCircle2 className="w-4 h-4 text-[#008F68] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Structured Interactive List (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {SERVICES.map((item) => {
              const Icon = item.icon;
              const isSelected = activeServiceId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveServiceId(item.id)}
                  onMouseEnter={() => setActiveServiceId(item.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 select-none ${
                    isSelected
                      ? "bg-white border-[#0A66C2] shadow-lg shadow-[#0A66C2]/10 translate-x-1 sm:translate-x-2"
                      : "bg-white/80 border-[#DCE6F0] hover:border-[#0A66C2]/40 hover:bg-white shadow-2xs"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#0A66C2] text-white shadow-sm"
                          : "bg-[#EAF4FF] text-[#0A66C2]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-extrabold text-[#536273]">
                          {item.num}
                        </span>
                        <h4
                          className={`text-[16px] font-bold transition-colors ${
                            isSelected ? "text-[#0A66C2]" : "text-[#101820]"
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-[13.5px] text-[#536273] leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 mt-1">
                    <span className="hidden sm:inline-block text-[11px] font-semibold text-[#008F68] bg-[#F0FDF8] px-2.5 py-0.5 rounded-full border border-[#008F68]/20">
                      {item.deliverableMetric.split(" ")[0]}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected
                          ? "text-[#0A66C2] translate-x-1"
                          : "text-gray-300 group-hover:text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
