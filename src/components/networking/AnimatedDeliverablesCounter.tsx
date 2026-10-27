"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  MessageSquare,
  Repeat,
  HeartHandshake,
  Building2,
  UserCheck,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Check,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function AnimatedDeliverablesCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    requests: 1000,
    comments: 600,
    posts: 80,
    warm: 80,
    groups: 15,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let frameId: number | null = null;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (prefersReducedMotion) {
            setCounts({
              requests: 1000,
              comments: 600,
              posts: 80,
              warm: 80,
              groups: 15,
            });
            return;
          }

          // Animate counters smoothly from 0 up to verified target values
          const duration = 1600; // ms
          const startTime = performance.now();

          const animateCounts = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              requests: Math.floor(easeProgress * 1000),
              comments: Math.floor(easeProgress * 600),
              posts: Math.floor(easeProgress * 80),
              warm: Math.floor(easeProgress * 80),
              groups: Math.floor(easeProgress * 15),
            });

            if (progress < 1) {
              frameId = requestAnimationFrame(animateCounts);
            } else {
              setCounts({
                requests: 1000,
                comments: 600,
                posts: 80,
                warm: 80,
                groups: 15,
              });
            }
          };

          frameId = requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [hasAnimated]);

  const coreMetrics = [
    {
      value: `${counts.requests.toLocaleString()}+`,
      title: "Targeted Connection Requests",
      desc: "1,000+ personalised connection requests targeted towards relevant industry leaders.",
      icon: Users,
      badge: "Targeted Outreach",
      color: "blue",
    },
    {
      value: `${counts.comments}+`,
      title: "Meaningful Comments",
      desc: "600+ thoughtful comments on relevant professional posts to foster industry dialogue.",
      icon: MessageSquare,
      badge: "Industry Dialogue",
      color: "emerald",
    },
    {
      value: `${counts.posts}+`,
      title: "Post Engagement or Reposts",
      desc: "80+ engagement and repost activities to maintain an active, respected presence.",
      icon: Repeat,
      badge: "Active Presence",
      color: "blue",
    },
    {
      value: `${counts.warm}+`,
      title: "Warm-Conversation Outreach",
      desc: "80+ personalised conversations focused on genuine relationship building.",
      icon: HeartHandshake,
      badge: "Relationship Building",
      color: "emerald",
    },
    {
      value: `${counts.groups}+`,
      title: "Professional Group Engagement",
      desc: "15+ purposeful group interactions across relevant LinkedIn communities.",
      icon: Building2,
      badge: "Community Presence",
      color: "blue",
    },
  ];

  const coreServices = [
    {
      tag: "Included Support",
      title: "Profile Review & Optimisation",
      desc: "Professional review and optimisation of the LinkedIn profile to present skills, experience, and career goals more effectively.",
      icon: UserCheck,
    },
    {
      tag: "1-on-1 Dedicated",
      title: "Dedicated Account Manager",
      desc: "One dedicated account manager coordinating activities according to professional goals and preferences for three months.",
      icon: ShieldCheck,
    },
    {
      tag: "Weekly Audits",
      title: "Weekly Work Reports",
      desc: "Regular reports covering completed activities and performance analysis, scheduled at a mutually agreed time.",
      icon: FileText,
    },
    {
      tag: "3-Month Access",
      title: "LinkedIn Premium Subscription Support",
      desc: "Three months of subscription support, subject to agreed package terms and applicable eligibility.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section ref={sectionRef} id="deliverables" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#008F68]" />
            PROGRAMME ACTIVITIES &amp; DELIVERABLES
          </span>

          <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.16]">
            Your Programme at a Glance.
          </h2>

          <p className="text-[16px] sm:text-[17.5px] text-[#536273] max-w-2xl mx-auto leading-relaxed">
            A comprehensive, human-led programme coordinated across three full months to strengthen
            your professional visibility and industry network.
          </p>
        </div>

        {/* 5 Quantified Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {coreMetrics.map((item, idx) => {
            const Icon = item.icon;
            const isBlue = item.color === "blue";
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-white to-[#F8FAFC] border border-[#DCE6F0] hover:border-[#0A66C2]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                        isBlue
                          ? "bg-[#EAF4FF] text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white"
                          : "bg-[#F0FDF8] text-[#008F68] group-hover:bg-[#008F68] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isBlue
                          ? "text-[#0A66C2] bg-[#EAF4FF] border-[#DCE6F0]"
                          : "text-[#008F68] bg-[#F0FDF8] border-[#008F68]/20"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Oversized Typography for Animated Metric */}
                  <div className="text-[34px] sm:text-[38px] font-extrabold text-[#101820] tracking-tight leading-none mb-2">
                    <span className={isBlue ? "text-[#0A66C2]" : "text-[#008F68]"}>
                      {item.value}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#101820] mb-2 group-hover:text-[#0A66C2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#536273] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#008F68]">
                  <Check className="w-4 h-4 mr-1.5 stroke-[2.5]" />
                  <span>3-Month Coordinated Activity</span>
                </div>
              </div>
            );
          })}

          {/* 4 Core Managed Scope Cards in Remaining Space */}
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-[#DCE6F0] hover:border-[#008F68]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0FDF8] text-[#008F68] flex items-center justify-center group-hover:bg-[#008F68] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#008F68] bg-[#F0FDF8] px-2.5 py-0.5 rounded-full border border-[#008F68]/20">
                      {service.tag}
                    </span>
                  </div>

                  <div className="text-[20px] font-extrabold text-[#101820] tracking-tight leading-snug mb-2 group-hover:text-[#008F68] transition-colors">
                    {service.title}
                  </div>

                  <p className="text-[14px] text-[#536273] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#0A66C2]">
                  <Check className="w-4 h-4 mr-1.5 stroke-[2.5]" />
                  <span>Managed Deliverable</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Notice: Programme Deliverables vs Guarantees */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#DCE6F0] flex items-start gap-4 text-[13.5px] text-[#536273] max-w-3xl mx-auto shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#0A66C2] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#101820] mb-0.5">
              Clear Activity Commitment:
            </p>
            <p className="leading-relaxed">
              We commit to the activities and deliverables in this package, with regular reporting
              and personalised execution. Actual results depend on your profile, industry, and
              target audience. These numbers represent planned programme deliverables, not
              guaranteed follower growth, conversions, or business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
