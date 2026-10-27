"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import {
  Users,
  MessageSquare,
  UserCheck,
  Rocket,
  Check,
  Sparkles,
} from "lucide-react";

interface OrbitingAvatar {
  id: string;
  name: string;
  title: string;
  company: string;
  category: string;
  image: string;
  borderTheme: "blue" | "green";
  orbitTrack: 1 | 2 | 3; // 1 = inner, 2 = middle, 3 = outer
  angleOffset: number; // initial angle in radians
  speedFactor: number;
}

export default function NetworkingHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });

  // Interactive states
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [hoveredAvatar, setHoveredAvatar] = useState<string | null>(null);

  // Animation time tracker
  const [simTime, setSimTime] = useState(0);
  const isHoveredRef = useRef(false);

  // Platform capabilities definitions
  const featurePills = [
    {
      id: "opt",
      name: "Profile Optimisation",
      icon: UserCheck,
      color: "#0A66C2",
      desc: "Comprehensive headline, about section, visual branding, and SEO rewriting for executive credibility.",
    },
    {
      id: "net",
      name: "Targeted Networking",
      icon: Users,
      color: "#0A66C2",
      desc: "Curated outreach to relevant decision-makers, domain peers, and senior industry leaders in your niche.",
    },
    {
      id: "eng",
      name: "Meaningful Engagement",
      icon: MessageSquare,
      color: "#008F68",
      desc: "Insightful commentary and genuine dialogue on industry posts to nurture warm professional relationships.",
    },
    {
      id: "opp",
      name: "More Opportunities",
      icon: Rocket,
      color: "#0A66C2",
      desc: "Direct inbound enquiries, consulting invitations, board seats, and high-value career conversations.",
    },
  ];

  // 10 Professional Profile Avatars distributed across 3 distinct orbital tracks
  const avatars: OrbitingAvatar[] = useMemo(
    () => [
      // Orbit 1: Inner Track (3 avatars)
      {
        id: "sneha",
        name: "Sneha Iyer",
        title: "Senior VP of Technology",
        company: "Apex Systems",
        category: "Industry Leader",
        image: "/images/profiles/sneha_iyer_2x.png",
        borderTheme: "blue",
        orbitTrack: 1,
        angleOffset: 0.1,
        speedFactor: 1.0,
      },
      {
        id: "rohit",
        name: "Rohit Sharma",
        title: "Principal Cloud Architect",
        company: "ScaleTech Global",
        category: "Industry Peer",
        image: "/images/profiles/rohit_sharma_2x.png",
        borderTheme: "green",
        orbitTrack: 1,
        angleOffset: 0.1 + (Math.PI * 2) / 3,
        speedFactor: 1.0,
      },
      {
        id: "priya",
        name: "Priya Verma",
        title: "VP of Product Strategy",
        company: "Venture Partners",
        category: "Executive Peer",
        image: "/images/profiles/priya_verma_2x.png",
        borderTheme: "blue",
        orbitTrack: 1,
        angleOffset: 0.1 + (Math.PI * 4) / 3,
        speedFactor: 1.0,
      },

      // Orbit 2: Middle Track (4 avatars)
      {
        id: "aman",
        name: "Aman Gupta",
        title: "Managing Director · Advisory",
        company: "Catalyst Advisory",
        category: "Decision Maker",
        image: "/images/profiles/aman_gupta_2x.png",
        borderTheme: "green",
        orbitTrack: 2,
        angleOffset: 0.45,
        speedFactor: 0.82,
      },
      {
        id: "preeti",
        name: "Preeti Bhagat",
        title: "Global Talent Director",
        company: "Enterprise Growth",
        category: "Executive Leader",
        image: "/images/revamp_img/PreetiBhagat.jpeg",
        borderTheme: "blue",
        orbitTrack: 2,
        angleOffset: 0.45 + Math.PI / 2,
        speedFactor: 0.82,
      },
      {
        id: "vikram",
        name: "Vikram Singh",
        title: "Chief Product Officer",
        company: "HyperScale Corp",
        category: "Industry Peer",
        image: "/images/profiles/vikram_singh_2x.png",
        borderTheme: "green",
        orbitTrack: 2,
        angleOffset: 0.45 + Math.PI,
        speedFactor: 0.82,
      },
      {
        id: "jana",
        name: "Jana Tameem",
        title: "Enterprise Operations Director",
        company: "Global Alliances",
        category: "Strategic Partner",
        image: "/images/revamp_img/JanaTameem.jpeg",
        borderTheme: "blue",
        orbitTrack: 2,
        angleOffset: 0.45 + (Math.PI * 3) / 2,
        speedFactor: 0.82,
      },

      // Orbit 3: Outer Track (3 avatars)
      {
        id: "sachin",
        name: "Sachin Seth",
        title: "Managing Partner · Advisory",
        company: "FinTech Innovations",
        category: "Domain Authority",
        image: "/images/revamp_img/SachinSeth.jpeg",
        borderTheme: "blue",
        orbitTrack: 3,
        angleOffset: 0.9,
        speedFactor: 0.68,
      },
      {
        id: "bhuvan",
        name: "Bhuvaneshwaran S.",
        title: "Engineering Practice Lead",
        company: "Digital Systems",
        category: "Senior Specialist",
        image: "/images/revamp_img/BhuvaneshwaranSubramanian.jpeg",
        borderTheme: "green",
        orbitTrack: 3,
        angleOffset: 0.9 + (Math.PI * 2) / 3,
        speedFactor: 0.68,
      },
      {
        id: "mandar",
        name: "Mandar Shrotri",
        title: "VP of Business Strategy",
        company: "Global Ventures",
        category: "Advisory Authority",
        image: "/images/revamp_img/MandarShrotri.jpeg",
        borderTheme: "blue",
        orbitTrack: 3,
        angleOffset: 0.9 + (Math.PI * 4) / 3,
        speedFactor: 0.68,
      },
    ],
    []
  );

  // Clean, elegant Orbital Track Geometry Parameters (Centered at X: 50%, Y: 50%)
  const trackConfigs = useMemo(
    () => ({
      1: {
        rx: 23.5, // % of container width
        ry: 13.0, // % of container height
        tiltDeg: -8,
        tiltRad: (-8 * Math.PI) / 180,
        basePeriod: 36, // slow, natural, elegant orbit
      },
      2: {
        rx: 34.5,
        ry: 18.0,
        tiltDeg: 11,
        tiltRad: (11 * Math.PI) / 180,
        basePeriod: 46,
      },
      3: {
        rx: 44.5,
        ry: 23.0,
        tiltDeg: -5,
        tiltRad: (-5 * Math.PI) / 180,
        basePeriod: 58,
      },
    }),
    []
  );

  // Compute avatar 3D coordinates on elliptical tilted orbit
  const computeOrbitPosition = (
    trackNum: 1 | 2 | 3,
    angleOffset: number,
    speedFactor: number,
    t: number
  ) => {
    const config = trackConfigs[trackNum];
    const omega = (2 * Math.PI) / config.basePeriod;
    const angle = angleOffset + omega * speedFactor * t;

    // Base ellipse coordinates relative to center
    const u = config.rx * Math.cos(angle);
    const v = config.ry * Math.sin(angle);

    // Apply tilt rotation
    const cosA = Math.cos(config.tiltRad);
    const sinA = Math.sin(config.tiltRad);

    const xRel = u * cosA - v * sinA;
    const yRel = u * sinA + v * cosA;

    // Depth: sin(angle) controls front vs back occlusion relative to center logo
    const zDepth = Math.sin(angle);

    return {
      xPct: 50.0 + xRel,
      yPct: 50.0 + yRel,
      zDepth,
      isFront: zDepth >= -0.05,
    };
  };

  // Continuous animation loop using requestAnimationFrame
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const loop = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Slow down smoothly when hovering an avatar; support reduced motion
      const baseMultiplier = prefersReducedMotion ? 0.05 : 1.0;
      const speedMultiplier = isHoveredRef.current ? 0.18 * baseMultiplier : baseMultiplier;
      setSimTime((prev) => prev + delta * speedMultiplier);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Sync hover state ref for smooth speed attenuation
  useEffect(() => {
    isHoveredRef.current = hoveredAvatar !== null;
  }, [hoveredAvatar]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
    targetPosRef.current = { x, y };
    setMousePos({ x: x * 6, y: y * 4 });
  };

  const handleMouseLeave = () => {
    targetPosRef.current = { x: 0, y: 0 };
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[1180px] mx-auto select-none bg-transparent"
    >
      {/* ========================================================= */}
      {/* CLEAN, MINIMAL ORBITING NETWORK STAGE (100% Seamless Background) */}
      {/* ========================================================= */}
      <div
        style={{
          transform: `perspective(1200px) rotateX(${mousePos.y * 0.25}deg) rotateY(${
            mousePos.x * 0.35
          }deg)`,
          transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[500px] min-h-[350px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-center overflow-visible"
      >
        {/* Very subtle ambient central backglow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[220px] sm:h-[300px] rounded-full bg-gradient-to-tr from-[#0A66C2]/[0.05] via-[#38BDF8]/[0.06] to-[#008F68]/[0.05] blur-3xl pointer-events-none -z-10" />

        {/* Minimal Central Concentric Radii */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#0A66C2]/15 pointer-events-none -z-5" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-[#0A66C2]/[0.08] pointer-events-none -z-5" />

        {/* ========================================================= */}
        {/* SUBTLE, ELEGANT SVG ORBIT PATHS (Thin, soft blue & teal) */}
        {/* ========================================================= */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-5 overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Orbit 1: Inner Track (Soft LinkedIn Blue) */}
          <ellipse
            cx="50"
            cy="50"
            rx={trackConfigs[1].rx}
            ry={trackConfigs[1].ry}
            transform={`rotate(${trackConfigs[1].tiltDeg} 50 50)`}
            fill="none"
            stroke="#0A66C2"
            strokeOpacity="0.22"
            strokeWidth="0.22"
            strokeDasharray="1.2 1.8"
          />

          {/* Orbit 2: Middle Track (Minimal FeedGrow Teal Accent) */}
          <ellipse
            cx="50"
            cy="50"
            rx={trackConfigs[2].rx}
            ry={trackConfigs[2].ry}
            transform={`rotate(${trackConfigs[2].tiltDeg} 50 50)`}
            fill="none"
            stroke="#009B77"
            strokeOpacity="0.22"
            strokeWidth="0.22"
            strokeDasharray="1.5 2.2"
          />

          {/* Orbit 3: Outer Track (Light Blue Accent) */}
          <ellipse
            cx="50"
            cy="50"
            rx={trackConfigs[3].rx}
            ry={trackConfigs[3].ry}
            transform={`rotate(${trackConfigs[3].tiltDeg} 50 50)`}
            fill="none"
            stroke="#0A66C2"
            strokeOpacity="0.16"
            strokeWidth="0.18"
            strokeDasharray="1.8 2.5"
          />
        </svg>

        {/* ========================================================= */}
        {/* REAR ORBITING AVATARS (Pass behind central logo, zIndex 10) */}
        {/* ========================================================= */}
        {avatars.map((av) => {
          const pos = computeOrbitPosition(
            av.orbitTrack,
            av.angleOffset,
            av.speedFactor,
            simTime
          );

          if (pos.isFront) return null;

          const depthNorm = Math.max(-1, Math.min(0, pos.zDepth));
          const scale = 0.76 + 0.14 * (depthNorm + 1); // 0.76 - 0.90
          const opacity = 0.82 + 0.16 * (depthNorm + 1);
          const isHovered = hoveredAvatar === av.id;

          return (
            <div
              key={av.id}
              onMouseEnter={() => setHoveredAvatar(av.id)}
              onMouseLeave={() => setHoveredAvatar(null)}
              style={{
                left: `${pos.xPct}%`,
                top: `${pos.yPct}%`,
                transform: `translate(-50%, -50%) scale(${
                  isHovered ? scale * 1.25 : scale
                })`,
                opacity: isHovered ? 1 : opacity,
                zIndex: isHovered ? 35 : 10,
                transition: isHovered
                  ? "transform 0.2s ease-out, filter 0.2s ease-out"
                  : "none",
              }}
              className="absolute cursor-pointer group"
            >
              {/* Circular Avatar Container with Thin White Border & Soft Shadow */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full p-0.5 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-2 border-white group-hover:border-[#0A66C2] transition-colors duration-200">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={av.image}
                    alt={av.name}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </div>

                {/* Minimal status dot */}
                <span
                  className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${
                    av.borderTheme === "blue" ? "bg-[#0A66C2]" : "bg-[#009B77]"
                  }`}
                />
              </div>

              {/* Hover Tooltip Card */}
              {isHovered && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B1F33] text-white py-1.5 px-3 rounded-xl shadow-xl border border-white/10 z-50 pointer-events-none animate-in fade-in duration-150">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11.5px] font-bold text-white">{av.name}</span>
                    <span
                      className={`text-[9px] font-semibold px-1.5 py-0.2 rounded-full ${
                        av.borderTheme === "blue"
                          ? "bg-[#0A66C2]/20 text-[#38BDF8]"
                          : "bg-[#009B77]/20 text-[#34D399]"
                      }`}
                    >
                      {av.category}
                    </span>
                  </div>
                  <div className="text-[9.5px] text-[#A0B0C0] leading-tight mt-0.5">
                    {av.title} &bull; {av.company}
                  </div>
                  <div className="text-[9px] font-medium text-[#38BDF8] mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#009B77]" />
                    <span>Direct Connection &bull; Active Dialogue</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* ========================================================= */}
        {/* CLEAN CENTRAL LINKEDIN LOGO (Appropriately Sized, zIndex 20) */}
        {/* ========================================================= */}
        <div
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="absolute z-20 pointer-events-none select-none flex items-center justify-center"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
            <Image
              src="/images/linkedin_3d_center.png"
              alt="Central LinkedIn Ecosystem"
              fill
              priority
              sizes="(max-width: 768px) 96px, 112px"
              className="object-contain drop-shadow-[0_12px_28px_rgba(10,102,194,0.25)]"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* FRONT ORBITING AVATARS (Pass in front of central logo, zIndex 30) */}
        {/* ========================================================= */}
        {avatars.map((av) => {
          const pos = computeOrbitPosition(
            av.orbitTrack,
            av.angleOffset,
            av.speedFactor,
            simTime
          );

          if (!pos.isFront) return null;

          const depthNorm = Math.max(0, Math.min(1, pos.zDepth));
          const scale = 0.88 + 0.20 * depthNorm; // 0.88 - 1.08
          const isHovered = hoveredAvatar === av.id;

          return (
            <div
              key={av.id}
              onMouseEnter={() => setHoveredAvatar(av.id)}
              onMouseLeave={() => setHoveredAvatar(null)}
              style={{
                left: `${pos.xPct}%`,
                top: `${pos.yPct}%`,
                transform: `translate(-50%, -50%) scale(${
                  isHovered ? scale * 1.25 : scale
                })`,
                zIndex: isHovered ? 45 : 30,
                opacity: 1.0,
                transition: isHovered
                  ? "transform 0.2s ease-out, filter 0.2s ease-out"
                  : "none",
              }}
              className="absolute cursor-pointer group"
            >
              {/* Circular Avatar Container with Thin White Border & Soft Shadow */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full p-0.5 bg-white shadow-[0_6px_16px_rgba(10,102,194,0.12)] border-2 border-white group-hover:border-[#0A66C2] transition-colors duration-200">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={av.image}
                    alt={av.name}
                    fill
                    sizes="70px"
                    className="object-cover"
                  />
                </div>

                {/* Minimal status dot */}
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border border-white ${
                    av.borderTheme === "blue" ? "bg-[#0A66C2]" : "bg-[#009B77]"
                  }`}
                />
              </div>

              {/* Hover Tooltip Card */}
              {isHovered && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B1F33] text-white py-2 px-3.5 rounded-xl shadow-2xl border border-white/10 z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-bold text-white">{av.name}</span>
                    <span
                      className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                        av.borderTheme === "blue"
                          ? "bg-[#0A66C2]/20 text-[#38BDF8]"
                          : "bg-[#009B77]/20 text-[#34D399]"
                      }`}
                    >
                      {av.category}
                    </span>
                  </div>
                  <div className="text-[10px] text-[#A0B0C0] leading-tight mt-0.5">
                    {av.title} &bull; {av.company}
                  </div>
                  <div className="text-[9.5px] font-medium text-[#38BDF8] mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#009B77]" />
                    <span>Direct Connection &bull; Active Dialogue</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* MINIMAL CAPABILITY PILL CONTROLS (Seamlessly below orbit) */}
      {/* ========================================================= */}
      <div className="mt-4 sm:mt-6 flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
          {featurePills.map((pill) => {
            const Icon = pill.icon;
            const isSelected = activeFeature === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setActiveFeature(isSelected ? null : pill.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B1F33] text-white shadow-sm border border-[#0B1F33]"
                    : "bg-white text-[#30403C] border border-[#E2ECE9] hover:border-[#0A66C2]/40 hover:bg-[#F9FBFC] shadow-2xs"
                }`}
              >
                <Icon
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: isSelected ? "#38BDF8" : pill.color }}
                />
                <span>{pill.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detail text banner when a pillar is selected */}
        {activeFeature && (
          <div className="mt-3.5 max-w-xl mx-auto p-3.5 px-5 rounded-2xl bg-[#F0F7FF] border border-[#0A66C2]/20 text-xs sm:text-[13px] text-[#0B1F33] flex items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#0A66C2] shrink-0" />
              <p className="leading-relaxed">
                {featurePills.find((p) => p.id === activeFeature)?.desc}
              </p>
            </div>
            <button
              onClick={() => setActiveFeature(null)}
              className="text-[11px] font-bold text-[#526174] hover:text-[#0B1F33] cursor-pointer shrink-0 underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
