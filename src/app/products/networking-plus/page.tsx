"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialModal from "@/components/TrialModal";
import ScrollToTop from "@/components/ScrollToTop";
import InteractiveNetworkGraph from "@/components/networking/InteractiveNetworkGraph";
import AnimatedDeliverablesCounter from "@/components/networking/AnimatedDeliverablesCounter";
import EditorialServicesShowcase from "@/components/networking/EditorialServicesShowcase";
import InteractiveTimeline from "@/components/networking/InteractiveTimeline";
import HumanLedShowcase from "@/components/networking/HumanLedShowcase";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Users,
  MessageSquare,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Compass,
  Briefcase,
  Layers,
  ChevronRight,
  Calendar,
  AlertCircle,
  Clock,
  Send,
  Linkedin,
  TrendingUp,
  UserCheck,
  Award,
  Plus,
  Target,
  BarChart3,
} from "lucide-react";

// Dynamically load the high-performance 3D hero experience
const NetworkingHero3D = dynamic(
  () => import("@/components/networking/NetworkingHero3D"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[520px] sm:h-[580px] lg:h-[620px] flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#EAF4FF] via-white to-[#F0FDF8] border border-[#DCE6F0] animate-pulse">
        <div className="flex flex-col items-center gap-3 text-[#0A66C2]">
          <div className="w-10 h-10 border-3 border-[#0A66C2] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-semibold text-[#101820]">
            Loading 3D Networking Experience...
          </span>
        </div>
      </div>
    ),
  }
);

export default function NetworkingPlusPage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState(
    "FeedGrow Networking Plus – Personal Branding"
  );

  const handleOpenTrial = (planName?: string) => {
    setActivePlan(planName || "FeedGrow Networking Plus – Personal Branding");
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
  };

  const scrollToProgramme = () => {
    const el = document.getElementById("programme-overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Section 9: Who Is This For audience categories with real photography
  const audienceCategories = [
    {
      title: "Working Professionals",
      desc: "Strengthen your professional presence and build relevant industry relationships.",
      image: "/images/profiles/rohit_sharma_2x.png",
      badge: "Career Growth",
      role: "Mid to Senior Professionals",
    },
    {
      title: "Experienced Industry Professionals",
      desc: "Develop meaningful connections within your professional network.",
      image: "/images/profiles/sneha_iyer_2x.png",
      badge: "Executive Leadership",
      role: "Directors & Practice Heads",
    },
    {
      title: "Consultants",
      desc: "Present your expertise and connect with relevant professionals.",
      image: "/images/profiles/aman_gupta_2x.png",
      badge: "Advisory Authority",
      role: "Strategy & Domain Advisors",
    },
    {
      title: "Freelancers",
      desc: "Build a stronger professional presence and engage with potential industry contacts.",
      image: "/images/profiles/priya_verma_2x.png",
      badge: "Independent Specialists",
      role: "High-Value Creators & Solopreneurs",
    },
    {
      title: "Entrepreneurs",
      desc: "Develop relevant professional relationships around your business and industry.",
      image: "/images/profiles/vikram_singh_2x.png",
      badge: "Founders & Builders",
      role: "Startups & Growth Leaders",
    },
    {
      title: "Business Professionals",
      desc: "Maintain a coordinated, professionally managed LinkedIn networking presence.",
      image: "/images/profiles/avatars_group.png",
      badge: "Commercial Presence",
      role: "Business Developers & Partners",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101820]">
      {/* 1. Header Navigation */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* ========================================================= */}
      {/* 1. CENTERED HERO SECTION & 3D SIGNATURE NETWORKING */}
      {/* ========================================================= */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-white via-[#F8FBFE]/90 to-white overflow-hidden">
        {/* Soft Ambient Brand Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#EFF6FF] via-[#F0FDF8]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Hero Content Stack */}
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase bg-[#EFF6FF] text-[#0A66C2] border border-[#BFDBFE]/80 shadow-2xs">
                <Plus className="w-3.5 h-3.5 text-[#0A66C2] stroke-[2.5]" />
                NETWORKING PLUS · PERSONAL BRANDING
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-[11.5px] font-bold tracking-wide uppercase bg-[#ECFDF5] text-[#008F68] border border-[#A7F3D0]/80 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-[#008F68]" />
                3-MONTH PROFESSIONALLY MANAGED PROGRAMME
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[58px] font-extrabold tracking-[-0.03em] leading-[1.12] text-center max-w-4xl">
              <span className="text-[#0B1F33] block">Build Meaningful Connections.</span>
              <span className="text-[#0A66C2] block mt-1">Grow Your Professional Presence.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-[17px] sm:text-[20px] md:text-[22px] font-semibold text-[#008F68] text-center mt-3 sm:mt-4">
              Your Presence. Your Network. Professionally Managed.
            </p>

            {/* Description */}
            <p className="text-[15.5px] sm:text-[17px] text-[#526174] leading-relaxed text-center max-w-[700px] mt-3 sm:mt-4">
              Strengthen your LinkedIn presence, connect with relevant professionals, and
              develop meaningful industry relationships through three months of dedicated,
              human-led networking and personal-branding support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-6 sm:mt-7">
              <button
                onClick={() =>
                  handleOpenTrial("FeedGrow Networking Plus – Personal Branding")
                }
                className="inline-flex items-center justify-center gap-2 h-[50px] sm:h-[54px] px-7 sm:px-8 rounded-full bg-gradient-to-r from-[#008F68] to-[#00A878] hover:from-[#007A58] hover:to-[#008F68] text-white text-[15.5px] font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(0,143,104,0.28)] hover:shadow-[0_12px_28px_rgba(0,143,104,0.38)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Get Your Networking+</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToProgramme}
                className="inline-flex items-center justify-center gap-2 h-[50px] sm:h-[54px] px-6 sm:px-7 rounded-full bg-white hover:bg-gray-50 text-[#0B1F33] border border-[#DCE6F0] hover:border-gray-300 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-2xs cursor-pointer"
              >
                <span>Explore the Programme</span>
              </button>
            </div>

            {/* Benefits Row (Compact centered horizontal indicators) */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-7 sm:mt-8 pt-2">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]/70 flex items-center justify-center text-[#0A66C2] shrink-0">
                  <Users className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0B1F33] leading-none">
                    100% Human-Led
                  </div>
                  <div className="text-[11.5px] text-[#526174] mt-0.5">
                    Real people, real conversations
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]/70 flex items-center justify-center text-[#0A66C2] shrink-0">
                  <Target className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0B1F33] leading-none">
                    Personalised Outreach
                  </div>
                  <div className="text-[11.5px] text-[#526174] mt-0.5">
                    Relevant and meaningful
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]/70 flex items-center justify-center text-[#0A66C2] shrink-0">
                  <BarChart3 className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0B1F33] leading-none">
                    Weekly Progress Reports
                  </div>
                  <div className="text-[11.5px] text-[#526174] mt-0.5">
                    Stay informed at every step
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. MAIN 3D VISUAL — SIGNATURE NETWORKING EXPERIENCE BELOW HERO */}
          <div className="mt-12 sm:mt-14 lg:mt-16 relative">
            <NetworkingHero3D />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INTERACTIVE NETWORKING VISUALISATION */}
      {/* ========================================================= */}
      <InteractiveNetworkGraph />

      {/* ========================================================= */}
      {/* 3. PROGRAMME OVERVIEW — PREMIUM 3D PRESENTATION */}
      {/* ========================================================= */}
      <section
        id="programme-overview"
        className="py-20 md:py-28 bg-[#FBFCFC] border-b border-[#DCE6F0]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-extrabold text-[#0B1F33] tracking-[-0.03em] leading-[1.18]">
              Strengthen Your Presence. Build<br className="hidden sm:inline" /> Relevant Connections.
            </h2>
            <div className="space-y-3 text-[15px] sm:text-[16.5px] text-[#526174] leading-relaxed max-w-2xl mx-auto">
              <p>
                FeedGrow Networking Plus combines profile optimisation, targeted connection
                requests, professional engagement, personalised outreach, and weekly reporting into
                one coordinated, professionally managed programme.
              </p>
              <p>
                Over three months, our focus is on relevant networking, meaningful professional
                interactions, and developing relationships within your industry.
              </p>
            </div>
          </div>

          {/* Three Key Principles: Feature Cards with Professional Photography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Principle 1: Human-Led */}
            <div className="group relative p-5 sm:p-6 pb-7 sm:pb-8 rounded-3xl bg-white border border-[#DCE6F0] hover:border-[#0A66C2]/50 shadow-[0_4px_24px_rgba(10,102,194,0.06)] hover:shadow-[0_16px_36px_rgba(10,102,194,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
              {/* 16:9 Professional Photograph with rounded corners */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-2xs">
                <Image
                  src="/images/networking/feature_human_led.jpg"
                  alt="Human-Led Networking — Businesswoman managing genuine professional conversations on laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#0A66C2] flex items-center justify-center mt-5 mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Users className="w-5 h-5 stroke-[2.3]" />
              </div>

              {/* Title & Description */}
              <h3 className="text-[21px] sm:text-[22px] font-extrabold text-[#0B1F33] mb-2.5">
                Human-Led
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#526174] leading-relaxed">
                Every connection request, comment, and conversation is human-led. We do not use
                automated scripts, generic bots, or mass-generated templates.
              </p>
            </div>

            {/* Principle 2: Personalised */}
            <div className="group relative p-5 sm:p-6 pb-7 sm:pb-8 rounded-3xl bg-white border border-[#DCE6F0] hover:border-[#008F68]/50 shadow-[0_4px_24px_rgba(0,143,104,0.06)] hover:shadow-[0_16px_36px_rgba(0,143,104,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
              {/* 16:9 Professional Photograph with rounded corners */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-2xs">
                <Image
                  src="/images/networking/feature_personalised.jpg"
                  alt="Personalised Outreach — Strategic professional analysing target audience and network alignment"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#008F68] flex items-center justify-center mt-5 mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <UserCheck className="w-5 h-5 stroke-[2.3]" />
              </div>

              {/* Title & Description */}
              <h3 className="text-[21px] sm:text-[22px] font-extrabold text-[#0B1F33] mb-2.5">
                Personalised
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#526174] leading-relaxed">
                Outreach is tailored to professional goals and relevant audiences. Your messaging
                authentically reflects your background, seniority, and distinct voice.
              </p>
            </div>

            {/* Principle 3: Relevant */}
            <div className="group relative p-5 sm:p-6 pb-7 sm:pb-8 rounded-3xl bg-white border border-[#DCE6F0] hover:border-[#0A66C2]/50 shadow-[0_4px_24px_rgba(10,102,194,0.06)] hover:shadow-[0_16px_36px_rgba(10,102,194,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
              {/* 16:9 Professional Photograph with rounded corners */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-2xs">
                <Image
                  src="/images/networking/feature_relevant.jpg"
                  alt="Relevant Connections — Two business professionals building meaningful industry relationships"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#0A66C2] flex items-center justify-center mt-5 mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Compass className="w-5 h-5 stroke-[2.3]" />
              </div>

              {/* Title & Description */}
              <h3 className="text-[21px] sm:text-[22px] font-extrabold text-[#0B1F33] mb-2.5">
                Relevant
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#526174] leading-relaxed">
                Focus on meaningful professional engagement and industry relationships with
                peers, decision-makers, and prospective partners in your specific domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PROGRAMME DELIVERABLES — ANIMATED METRICS */}
      {/* ========================================================= */}
      <AnimatedDeliverablesCounter />

      {/* ========================================================= */}
      {/* 5. SERVICES SECTION — IMMERSIVE LAYOUT */}
      {/* ========================================================= */}
      <EditorialServicesShowcase />

      {/* ========================================================= */}
      {/* 6. THREE-MONTH PROGRAMME — INTERACTIVE TIMELINE */}
      {/* ========================================================= */}
      <InteractiveTimeline />

      {/* ========================================================= */}
      {/* 7. WHO IS THIS FOR? */}
      {/* ========================================================= */}
      <section id="whos-this-for" className="py-20 md:py-28 bg-[#FBFCFC] border-t border-[#DCE6F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.16em] uppercase text-[#0A66C2] bg-[#EAF4FF] px-3.5 py-1 rounded-full border border-[#DCE6F0]">
              TARGET AUDIENCE
            </span>
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.16]">
              Built for Professionals Ready to Strengthen Their Presence.
            </h2>
            <p className="text-[16px] sm:text-[17.5px] text-[#536273] leading-relaxed max-w-2xl mx-auto">
              Networking Plus is designed for professionals who want to develop their LinkedIn
              presence, build relevant connections, and engage more effectively within their industries.
            </p>
          </div>

          {/* 6 Audience Category Cards with Real Professional Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {audienceCategories.map((item, idx) => (
              <div
                key={idx}
                className="group p-7 sm:p-8 rounded-3xl bg-white border border-[#DCE6F0] hover:border-[#0A66C2]/40 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#DCE6F0] group-hover:border-[#0A66C2] transition-colors shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#008F68] bg-[#F0FDF8] px-3 py-1 rounded-full border border-[#008F68]/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-[19px] font-extrabold text-[#101820] mb-1.5 group-hover:text-[#0A66C2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#0A66C2] mb-3">
                    {item.role}
                  </p>

                  <p className="text-[14px] text-[#536273] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#008F68]">
                  <Check className="w-3.5 h-3.5 mr-1.5 stroke-[2.5]" />
                  <span>Custom Strategy Alignment</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. HUMAN-LED NETWORKING SECTION */}
      {/* ========================================================= */}
      <HumanLedShowcase
        onOpenTrial={() =>
          handleOpenTrial("FeedGrow Networking Plus – Personal Branding")
        }
      />

      {/* ========================================================= */}
      {/* 9. REPORTING AND COMMITMENT */}
      {/* ========================================================= */}
      <section id="reporting" className="py-20 md:py-28 bg-[#FBFCFC] border-t border-[#DCE6F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.16em] uppercase text-[#0A66C2] bg-[#EAF4FF] px-3.5 py-1 rounded-full border border-[#DCE6F0]">
              ACCOUNTABILITY &amp; INTEGRITY
            </span>

            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.16]">
              Clear Activities. Regular Reporting. Personalised Execution.
            </h2>

            <div className="space-y-2 text-[16px] sm:text-[17px] text-[#536273] leading-relaxed">
              <p>
                We commit to the activities and deliverables in this package, with regular reporting
                and personalised execution.
              </p>
              <p>
                Actual results depend on your profile, industry, and target audience. Our focus
                remains on consistent, relevant, and professionally managed LinkedIn networking.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#DCE6F0] shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-[17px] font-extrabold text-[#101820]">
                Dedicated Account Manager
              </h4>
              <p className="text-[13.5px] text-[#536273] leading-relaxed">
                One dedicated specialist coordinating all strategy, messaging voice, and outreach
                timing for 3 full months.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#DCE6F0] shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF8] text-[#008F68] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-[17px] font-extrabold text-[#101820]">
                Weekly Work Reports
              </h4>
              <p className="text-[13.5px] text-[#536273] leading-relaxed">
                Detailed transparency logs of completed connection requests, comments made, and
                conversations opened.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#DCE6F0] shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] text-[#0A66C2] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-[17px] font-extrabold text-[#101820]">
                Personalised Execution
              </h4>
              <p className="text-[13.5px] text-[#536273] leading-relaxed">
                Carefully composed touchpoints matching your seniority, domain terminology, and
                career trajectory.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#DCE6F0] shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF8] text-[#008F68] flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-[17px] font-extrabold text-[#101820]">
                Coordinated 3-Month Programme
              </h4>
              <p className="text-[13.5px] text-[#536273] leading-relaxed">
                A disciplined cadence designed for cumulative, compound visibility and lasting
                professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FINAL CTA — STRONG VISUAL FINISH */}
      {/* ========================================================= */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#0A66C2] via-[#08529C] to-[#0B1F33] text-white relative overflow-hidden">
        {/* Subtle dimensional networking glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#008F68]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/90 bg-white/15 px-4 py-1.5 rounded-full mb-5">
              READY TO GET STARTED?
            </span>

            {/* Heading */}
            <h2 className="text-[34px] sm:text-[44px] md:text-[50px] font-extrabold text-white tracking-[-0.03em] leading-[1.15]">
              Ready to Strengthen Your Professional Presence?
            </h2>

            {/* Description */}
            <p className="mt-5 text-[16.5px] sm:text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed">
              Connect with FeedGrow to discuss your professional goals, your industry, and the
              audience you want to reach.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() =>
                  handleOpenTrial("FeedGrow Networking Plus – Personal Branding")
                }
                className="inline-flex items-center gap-2.5 h-[54px] sm:h-[56px] px-9 sm:px-10 rounded-full bg-white hover:bg-[#F0F7FF] text-[#0A66C2] text-[16px] font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Get Your Networking+</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() =>
                  handleOpenTrial("FeedGrow Networking Plus — Consultation")
                }
                className="inline-flex items-center gap-2 h-[54px] sm:h-[56px] px-8 sm:px-9 rounded-full bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white text-[16px] font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Contact FeedGrow</span>
              </button>
            </div>

            {/* Closing Brand Message */}
            <div className="mt-16 pt-10 border-t border-white/15 max-w-xl mx-auto space-y-2">
              <p className="text-[20px] font-extrabold text-white">
                FeedGrow Networking Plus
              </p>
              <p className="text-[15px] font-medium text-white/90">
                Your Growth Partner in the Digital World.
              </p>
              <p className="text-[13.5px] text-white/75 italic">
                Build connections. Strengthen relationships. Explore opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenTrial={handleOpenTrial} />

      {/* Floating Scroll To Top */}
      <ScrollToTop />

      {/* Interactive Booking / Consultation Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrial}
        planName={activePlan}
      />
    </div>
  );
}
