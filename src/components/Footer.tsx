"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Eye, 
  CheckCircle2, 
  ArrowUp, 
  ArrowUpRight, 
  ChevronDown, 
  ShieldCheck, 
  Lock
} from "lucide-react";

interface FooterProps {
  onOpenTrial?: (planName?: string) => void;
}

export default function Footer({ onOpenTrial }: FooterProps) {
  // Mobile accordion state (default open on larger screens, expandable on mobile)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    services: true,
    navigation: true,
    legal: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const servicesLinks = [
    { 
      name: "Networking+ (3-Month Programme)", 
      href: "/products/networking-plus", 
      badge: "Flagship",
      isRoute: true 
    },
    { 
      name: "FEEDGROW LinkedIn Positioning", 
      href: "/#investment", 
      badge: "₹6,999",
      isMakeover: true 
    },
    { name: "Profile Optimisation", href: "/#whats-included" },
    { name: "LinkedIn SEO Optimisation", href: "/#whats-included" },
    { name: "Professional Profile Rewriting", href: "/#whats-included" },
    { name: "Professional Visual Branding", href: "/#whats-included" },
    { name: "Authentic Human-Written Content", href: "/#whats-included" },
    { name: "Final Review & Practical Guidance", href: "/#whats-included" },
  ];

  const quickLinks = [
    { name: "Why FeedGrow", href: "/#why-feedgrow" },
    { name: "Who's This For", href: "/#whos-this-for" },
    { name: "Our 5-Step Approach", href: "/#our-approach" },
    { name: "Your Investment (₹6,999)", href: "/#investment", highlight: "₹6,999" },
    { name: "About FeedGrow", href: "/#about" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Refund & Cancellation", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Contact Support", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/feedgrow",
      ariaLabel: "Follow FeedGrow on Facebook",
      hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/feedgrow/",
      ariaLabel: "Connect with FeedGrow on LinkedIn",
      hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@feedgrow",
      ariaLabel: "Subscribe to FeedGrow on YouTube",
      hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/feedgrow/",
      ariaLabel: "Follow FeedGrow on Instagram",
      hoverClass: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent hover:text-white",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="about" className="relative bg-[#06111B] text-white pt-16 sm:pt-20 lg:pt-24 border-t border-white/[0.08] overflow-hidden">
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0A66C2]/50 via-[#009B77]/60 to-transparent" />

      {/* Subtle Background Lighting & Depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-[#0A66C2]/[0.05] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#009B77]/[0.05] rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Restrained Network Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-start pb-14 sm:pb-16 border-b border-white/[0.07]">
          
          {/* Column 1: Brand & Principles (4 cols on Desktop, 5 on XL) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between">
            <div>
              {/* Official FeedGrow Brand Logo in a clean, compact presentation */}
              <Link 
                href="/" 
                className="inline-block mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] rounded-xl"
                aria-label="FeedGrow Home"
              >
                <div className="inline-flex items-center gap-3 p-2 px-3 rounded-xl bg-white shadow-sm border border-white/20 group-hover:border-white/50 transition-all duration-300">
                  <Image
                    src="/images/feedgrow-logo.png"
                    alt="FeedGrow Logo"
                    width={140}
                    height={40}
                    priority
                    className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
                  />
                </div>
              </Link>

              {/* Tagline */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009B77] animate-pulse" />
                <p className="text-[#009B77] font-bold text-xs sm:text-[13px] tracking-[0.12em] uppercase">
                  Your Growth Partner in the Digital World.
                </p>
              </div>

              {/* 3 Brand Principles in a Visually Attractive Card Layout */}
              <div className="space-y-2.5 max-w-lg mb-6">
                
                {/* Principle 1: Be Seen */}
                <div className="group/item flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#0A66C2]/35 transition-all duration-200">
                  <div className="w-7 h-7 rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] border border-[#0A66C2]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-[12.5px] leading-relaxed">
                    <span className="font-bold text-[#0A66C2] mr-1.5">Be Seen</span>
                    <span className="text-gray-300/90">— Increase professional visibility on LinkedIn.</span>
                  </div>
                </div>

                {/* Principle 2: Be Known */}
                <div className="group/item flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#009B77]/35 transition-all duration-200">
                  <div className="w-7 h-7 rounded-lg bg-[#009B77]/15 text-[#009B77] border border-[#009B77]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-[12.5px] leading-relaxed">
                    <span className="font-bold text-[#009B77] mr-1.5">Be Known</span>
                    <span className="text-gray-300/90">— Build recognition and establish your personal brand.</span>
                  </div>
                </div>

                {/* Principle 3: Be Chosen */}
                <div className="group/item flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#38BDF8]/35 transition-all duration-200">
                  <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs sm:text-[12.5px] leading-relaxed">
                    <span className="font-bold text-[#38BDF8] mr-1.5">Be Chosen</span>
                    <span className="text-gray-300/90">— Position yourself for relevant professional opportunities.</span>
                  </div>
                </div>

              </div>

              {/* Closing Brand Statement */}
              <div className="border-l-2 border-[#009B77] pl-3.5 py-1 mb-6 max-w-lg bg-gradient-to-r from-[#009B77]/5 to-transparent rounded-r-lg">
                <p className="text-xs sm:text-[13px] font-medium text-gray-400 italic leading-relaxed">
                  &ldquo;Build your profile. Strengthen your brand. Grow your presence.&rdquo;
                </p>
              </div>

              {/* Social Media Links */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Connect With Us
                </p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] ${social.hoverClass} cursor-pointer`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Positioning Services (3 cols on Desktop) */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="flex items-center justify-between sm:justify-start gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]" />
                <h3 className="text-white font-bold text-xs sm:text-[13px] tracking-[0.12em] uppercase whitespace-nowrap">
                  Positioning Services
                </h3>
              </div>
              <button 
                onClick={() => toggleSection("services")}
                className="sm:hidden text-gray-400 p-1"
                aria-label="Toggle Services links"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections.services ? "rotate-180" : ""}`} />
              </button>
            </div>

            <ul className={`space-y-2.5 text-xs sm:text-[13px] text-gray-400 ${openSections.services ? "block" : "hidden sm:block"}`}>
              {servicesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 py-0.5 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0A66C2] rounded"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#0A66C2] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${
                        item.isRoute 
                          ? "bg-[#0A66C2]/15 text-[#38BDF8] border-[#0A66C2]/30" 
                          : "bg-[#009B77]/15 text-[#009B77] border-[#009B77]/30"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (3 cols on Desktop) */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div className="flex items-center justify-between sm:justify-start gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009B77]" />
                <h3 className="text-white font-bold text-xs sm:text-[13px] tracking-[0.12em] uppercase whitespace-nowrap">
                  Quick Navigation
                </h3>
              </div>
              <button 
                onClick={() => toggleSection("navigation")}
                className="sm:hidden text-gray-400 p-1"
                aria-label="Toggle Quick Navigation links"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections.navigation ? "rotate-180" : ""}`} />
              </button>
            </div>

            <ul className={`space-y-2.5 text-xs sm:text-[13px] text-gray-400 ${openSections.navigation ? "block" : "hidden sm:block"}`}>
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 py-0.5 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#009B77] rounded"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#009B77] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.name}
                    </span>
                    {item.highlight && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#009B77]/15 text-[#009B77] border border-[#009B77]/30 shrink-0">
                        {item.highlight}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trust & Legal (2 cols on Desktop) */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center justify-between sm:justify-start gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <h3 className="text-white font-bold text-xs sm:text-[13px] tracking-[0.12em] uppercase whitespace-nowrap">
                  Trust &amp; Legal
                </h3>
              </div>
              <button 
                onClick={() => toggleSection("legal")}
                className="sm:hidden text-gray-400 p-1"
                aria-label="Toggle Trust & Legal links"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSections.legal ? "rotate-180" : ""}`} />
              </button>
            </div>

            <ul className={`space-y-2.5 text-xs sm:text-[13px] text-gray-400 mb-6 ${openSections.legal ? "block" : "hidden sm:block"}`}>
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 py-0.5 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 rounded"
                  >
                    <ArrowUpRight className="w-3 h-3 text-gray-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Privacy & Trust Badge */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-gray-400 leading-snug">
              <div className="flex items-center gap-1.5 text-white font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#009B77]" />
                <span>100% Confidential</span>
              </div>
              <p className="text-gray-400 text-[10.5px]">
                Your career information is held with strict confidentiality and never shared.
              </p>
            </div>
          </div>

        </div>

        {/* Premium Bottom Bar */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          {/* Copyright & Disclaimer */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-gray-300 font-medium">
              &copy; {new Date().getFullYear()} FEEDGROW. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-700">&bull;</span>
            <p className="text-[11.5px] text-gray-500">
              Your Growth Partner in the Digital World.
            </p>
          </div>

          {/* Legal Shortcuts & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11.5px]">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <span className="text-gray-700">&bull;</span>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <span className="text-gray-700">&bull;</span>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <span className="text-gray-700">&bull;</span>
            
            {/* Smooth Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-xs text-gray-300 hover:text-white transition-all duration-200 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#009B77] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Trademark Disclaimer */}
        <div className="pb-8 pt-2 text-center border-t border-white/[0.04]">
          <p className="text-[11px] text-gray-500">
            LinkedIn is a registered trademark of LinkedIn Corporation. FeedGrow is an independent professional branding service and is not affiliated with or endorsed by LinkedIn Corporation.
          </p>
        </div>

      </div>
    </footer>
  );
}
