"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, CheckCircle } from "lucide-react";

export interface ProfileData {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  skills: Array<{ name: string; badgeClass: string }>;
  about: string;
  image: string;
}

export const SAMPLE_PROFILES: ProfileData[] = [
  {
    id: "rohit-sharma",
    name: "Rohit Sharma",
    role: "Software Engineer",
    company: "Google",
    location: "Bengaluru, Karnataka, India",
    skills: [
      { name: "System Design", badgeClass: "bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]" },
      { name: "Cloud Architecture", badgeClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20" },
      { name: "Distributed Systems", badgeClass: "bg-slate-100 text-slate-700 border border-slate-200" },
    ],
    about:
      "Passionate about building scalable systems and leveraging modern architectures to solve high-impact engineering challenges.",
    image: "/images/profiles/rohit_sharma_2x.png",
  },
  {
    id: "priya-verma",
    name: "Priya Verma",
    role: "Product Manager",
    company: "Microsoft",
    location: "Hyderabad, Telangana, India",
    skills: [
      { name: "Product Strategy", badgeClass: "bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]" },
      { name: "User Research", badgeClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20" },
      { name: "Executive Leadership", badgeClass: "bg-slate-100 text-slate-700 border border-slate-200" },
    ],
    about:
      "Building high-adoption enterprise products that create measurable value, combining customer insight with cross-functional execution.",
    image: "/images/profiles/priya_verma_2x.png",
  },
  {
    id: "aman-gupta",
    name: "Aman Gupta",
    role: "Senior Consultant",
    company: "EY",
    location: "Gurugram, Haryana, India",
    skills: [
      { name: "Business Transformation", badgeClass: "bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]" },
      { name: "Market Analytics", badgeClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20" },
      { name: "Client Advisory", badgeClass: "bg-slate-100 text-slate-700 border border-slate-200" },
    ],
    about:
      "Advising growth-stage organizations on strategic positioning, operational clarity, and sustainable business transformation.",
    image: "/images/profiles/aman_gupta_2x.png",
  },
  {
    id: "sneha-iyer",
    name: "Sneha Iyer",
    role: "UX Design Lead",
    company: "Adobe",
    location: "Noida, Uttar Pradesh, India",
    skills: [
      { name: "Design Systems", badgeClass: "bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]" },
      { name: "User Experience", badgeClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20" },
      { name: "Interaction Design", badgeClass: "bg-slate-100 text-slate-700 border border-slate-200" },
    ],
    about:
      "Crafting intuitive digital experiences that balance human-centered aesthetics with measurable business outcomes.",
    image: "/images/profiles/sneha_iyer_2x.png",
  },
  {
    id: "vikram-singh",
    name: "Vikram Singh",
    role: "Lead Data Analyst",
    company: "Infosys",
    location: "Pune, Maharashtra, India",
    skills: [
      { name: "Predictive Analytics", badgeClass: "bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]" },
      { name: "Business Intelligence", badgeClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20" },
      { name: "Data Storytelling", badgeClass: "bg-slate-100 text-slate-700 border border-slate-200" },
    ],
    about:
      "Transforming complex operational data into clear strategic narratives that empower executive decision-making.",
    image: "/images/profiles/vikram_singh_2x.png",
  },
];

export default function HeroProfileCarousel() {
  const TOTAL = SAMPLE_PROFILES.length; // 5

  // 3 repeating sets so infinite wrap-around works seamlessly in both directions
  const EXTENDED_PROFILES = [
    ...SAMPLE_PROFILES,
    ...SAMPLE_PROFILES,
    ...SAMPLE_PROFILES,
  ];

  // Start in middle set at offset 5
  const [offsetIndex, setOffsetIndex] = useState(TOTAL);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Measure visible count based on screen width
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setOffsetIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setOffsetIndex((prev) => prev - 1);
  }, []);

  // Normalize offset after transition ends to maintain infinite cycle
  const handleTransitionEnd = () => {
    if (offsetIndex >= TOTAL * 2) {
      setIsTransitioning(false);
      setOffsetIndex((prev) => prev - TOTAL);
    } else if (offsetIndex < TOTAL) {
      setIsTransitioning(false);
      setOffsetIndex((prev) => prev + TOTAL);
    }
  };

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    const currentActive = ((offsetIndex % TOTAL) + TOTAL) % TOTAL;
    const diff = index - currentActive;
    setOffsetIndex((prev) => prev + diff);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || mouseStart === null) return;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown || mouseStart === null) return;
    const distance = mouseStart - e.clientX;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    setIsMouseDown(false);
    setMouseStart(null);
  };

  const onMouseLeave = () => {
    setIsMouseDown(false);
    setMouseStart(null);
  };

  // Active dot index (0..4)
  const activeDotIndex = ((offsetIndex % TOTAL) + TOTAL) % TOTAL;

  // Percentage shift calculation
  const slidePercentage = 100 / visibleCount;
  const transformValue = -(offsetIndex * slidePercentage);

  return (
    <div
      className="relative w-full outline-none select-none px-1 sm:px-2"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="LinkedIn Profile Positioning Examples Carousel"
    >
      {/* Visual Header Label */}
      <div className="flex items-center justify-between pb-3 px-1 text-xs text-[#536273]">
        <div className="inline-flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#008F68] animate-pulse" />
          <span className="text-[#101820] font-semibold">Live Profile Transformations</span>
        </div>
        <span className="text-[11px] text-[#536273]">Swipe or use controls &rarr;</span>
      </div>

      {/* Carousel Track Container */}
      <div
        className="relative overflow-hidden py-1"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-350 ease-out" : ""
          }`}
          style={{
            transform: `translateX(${transformValue}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {EXTENDED_PROFILES.map((profile, i) => (
            <div
              key={`${profile.id}-${i}`}
              className="shrink-0 px-1.5 sm:px-2"
              style={{ width: `${slidePercentage}%` }}
            >
              {/* Profile Card */}
              <div className="bg-white rounded-2xl border border-[#DCE6F0] shadow-[0_2px_12px_rgba(10,102,194,0.04)] hover:shadow-[0_8px_24px_rgba(10,102,194,0.08)] hover:-translate-y-1 transition-all duration-200 p-3.5 sm:p-4 flex flex-col justify-between h-[430px] sm:h-[440px]">
                
                {/* Photo & Badge Header */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top select-none pointer-events-none"
                  />
                  {/* Subtle FeedGrow Optimised Pill Badge */}
                  <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#008F68] border border-[#008F68]/20 shadow-xs text-[10px] font-semibold">
                    <CheckCircle className="w-3 h-3 text-[#008F68]" />
                    <span>Optimised</span>
                  </div>
                </div>

                {/* Profile Identity Details */}
                <div className="flex-1 flex flex-col justify-start pt-2.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-[#101820] text-[15px] sm:text-[15.5px] tracking-tight">
                      {profile.name}
                    </h3>
                    <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-[#EAF4FF] text-[#0A66C2]">
                      1st
                    </span>
                  </div>

                  {/* Role | Company */}
                  <p className="text-[12.5px] font-semibold text-[#0A66C2] mt-0.5 leading-snug">
                    {profile.role} · {profile.company}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-[11px] text-[#536273] mt-1">
                    <MapPin className="w-3 h-3 text-[#536273] shrink-0" />
                    <span className="truncate">{profile.location}</span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {profile.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[9.5px] font-medium px-2 py-0.5 rounded-full ${skill.badgeClass}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* About Section */}
                <div className="pt-2.5 mt-2 border-t border-[#DCE6F0]/80 shrink-0">
                  <span className="text-[9.5px] font-bold text-[#101820] tracking-wider uppercase block mb-0.5">
                    ABOUT
                  </span>
                  <p className="text-[11.5px] text-[#536273] leading-relaxed line-clamp-3">
                    {profile.about}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous profile"
        className="absolute -left-2 sm:-left-3 lg:-left-4 top-[50%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#DCE6F0] shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#101820] hover:text-[#0A66C2] transition-all duration-200 z-30 cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next profile"
        className="absolute -right-2 sm:-right-3 lg:-right-4 top-[50%] -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#DCE6F0] shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#101820] hover:text-[#0A66C2] transition-all duration-200 z-30 cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-5">
        {SAMPLE_PROFILES.map((_, dotIdx) => {
          const isActive = activeDotIndex === dotIdx;
          return (
            <button
              key={dotIdx}
              type="button"
              onClick={() => handleDotClick(dotIdx)}
              aria-label={`Go to profile ${dotIdx + 1}`}
              className={`transition-all duration-200 rounded-full cursor-pointer ${
                isActive
                  ? "w-6 h-2 bg-[#0A66C2]"
                  : "w-2 h-2 bg-[#DCE6F0] hover:bg-slate-300"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
