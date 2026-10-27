"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Building2,
  Compass,
  Briefcase,
  AlertCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface NetworkNode {
  id: string;
  name: string;
  title: string;
  company: string;
  category: "Industry Peers" | "Decision-Makers" | "Professional Communities" | "Business Contacts";
  image: string;
  x: number; // Percentage on canvas (0 - 100)
  y: number;
  engagementType: string;
  relationshipFocus: string;
  activityMetric: string;
}

const NETWORK_NODES: NetworkNode[] = [
  {
    id: "node-1",
    name: "Vikram Singh",
    title: "Chief Product Officer",
    company: "ScaleTech Global",
    category: "Decision-Makers",
    image: "/images/profiles/vikram_singh_2x.png",
    x: 20,
    y: 24,
    engagementType: "Personalised Warm Outreach",
    relationshipFocus: "Exploring enterprise collaboration & executive roundtables",
    activityMetric: "Warm Outreach Sent",
  },
  {
    id: "node-2",
    name: "Sneha Iyer",
    title: "Senior VP of Technology",
    company: "Apex Systems",
    category: "Industry Peers",
    image: "/images/profiles/sneha_iyer_2x.png",
    x: 80,
    y: 22,
    engagementType: "Meaningful Comment on Architecture",
    relationshipFocus: "Industry dialogue on scalable cloud architecture",
    activityMetric: "Thoughtful Comment",
  },
  {
    id: "node-3",
    name: "Enterprise Tech Leaders",
    title: "Curated LinkedIn Community",
    company: "12,000+ Verified Members",
    category: "Professional Communities",
    image: "/images/profiles/avatars_group.png",
    x: 15,
    y: 72,
    engagementType: "Group Engagement & Discussions",
    relationshipFocus: "Active participation in niche technology discussions",
    activityMetric: "Group Discussion",
  },
  {
    id: "node-4",
    name: "Aman Gupta",
    title: "Managing Director",
    company: "Ventures Advisory",
    category: "Business Contacts",
    image: "/images/profiles/aman_gupta_2x.png",
    x: 82,
    y: 74,
    engagementType: "Targeted Connection Request",
    relationshipFocus: "Strategic advisory networking and client relationships",
    activityMetric: "Targeted Connection",
  },
  {
    id: "node-5",
    name: "Rohit Sharma",
    title: "Principal Architect",
    company: "NextGen Software",
    category: "Industry Peers",
    image: "/images/profiles/rohit_sharma_2x.png",
    x: 50,
    y: 12,
    engagementType: "Post Repost & Insight Commentary",
    relationshipFocus: "Continuous peer alignment across emerging frameworks",
    activityMetric: "Post Repost & Insight",
  },
  {
    id: "node-6",
    name: "Priya Verma",
    title: "VP of Product Strategy",
    company: "CloudCore",
    category: "Decision-Makers",
    image: "/images/profiles/priya_verma_2x.png",
    x: 50,
    y: 88,
    engagementType: "Personalised Executive Dialogue",
    relationshipFocus: "Developing long-term industry relationships",
    activityMetric: "Executive Dialogue",
  },
];

export default function InteractiveNetworkGraph() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedNode, setSelectedNode] = useState<NetworkNode>(NETWORK_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const categories = [
    "All",
    "Industry Peers",
    "Decision-Makers",
    "Professional Communities",
    "Business Contacts",
  ];

  const filteredNodes =
    activeCategory === "All"
      ? NETWORK_NODES
      : NETWORK_NODES.filter((n) => n.category === activeCategory);

  const activeNode =
    hoveredNodeId !== null
      ? NETWORK_NODES.find((n) => n.id === hoveredNodeId) || selectedNode
      : selectedNode;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#F7FAFD] to-white border-b border-[#DCE6F0] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#0A66C2]/5 to-[#008F68]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#EAF4FF] text-[#0A66C2] border border-[#DCE6F0]">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            INTERACTIVE NETWORK VISUALISATION
          </span>

          <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#101820] tracking-[-0.03em] leading-[1.16]">
            Your Network Is More Than a List of Connections.
          </h2>

          <p className="text-[16px] sm:text-[17.5px] text-[#536273] leading-relaxed max-w-2xl mx-auto">
            Build a stronger professional presence through relevant connections, thoughtful
            engagement, and personalised outreach.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0A66C2] text-white shadow-md shadow-[#0A66C2]/20 scale-102"
                    : "bg-white text-[#536273] border border-[#DCE6F0] hover:border-[#0A66C2] hover:text-[#0A66C2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Visual Graph Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Canvas: Interactive Node Graph (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 relative">
            <div className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] bg-white rounded-3xl border border-[#DCE6F0] shadow-xl overflow-hidden p-4">
              {/* Subtle grid pattern background */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#0A66C2 0.85px, transparent 0.85px)`,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Pulsing Concentric Radar Rings around Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-[#0A66C2]/20 animate-ping opacity-25" />
                <div className="absolute inset-0 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] -m-[50px] sm:-m-[60px] rounded-full border border-[#0A66C2]/15" />
                <div className="absolute inset-0 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] -m-[100px] sm:-m-[120px] rounded-full border border-[#008F68]/15" />
              </div>

              {/* SVG Connecting Lines with Glow and Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <defs>
                  <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0A66C2" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#008F68" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {NETWORK_NODES.map((node) => {
                  const isActive = activeNode.id === node.id;
                  const isVisible =
                    activeCategory === "All" || node.category === activeCategory;

                  return (
                    <g key={node.id} opacity={isVisible ? (isActive ? 1 : 0.4) : 0.15}>
                      {/* Base Line */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${node.x}%`}
                        y2={`${node.y}%`}
                        stroke={isActive ? "url(#activeLineGrad)" : "#0A66C2"}
                        strokeWidth={isActive ? 2.5 : 1.2}
                        strokeDasharray={isActive ? "none" : "4 4"}
                        filter={isActive ? "url(#glow)" : undefined}
                      />

                      {/* Animated traveling signal particle */}
                      {isActive && (
                        <circle r="4" fill="#008F68">
                          <animateMotion
                            path={`M 500,290 L ${node.x * 6.5},${node.y * 5.8}`}
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Executive Node ("You") */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-default">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#0A66C2] via-[#08529C] to-[#008F68] p-1 shadow-[0_0_30px_rgba(10,102,194,0.35)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-[#0A66C2]">
                      <div className="font-extrabold text-sm sm:text-base leading-none">YOU</div>
                      <span className="text-[9px] font-bold text-[#008F68] uppercase tracking-tighter mt-0.5">
                        Executive
                      </span>
                    </div>
                  </div>
                  <span className="absolute -bottom-1 right-0 w-5 h-5 rounded-full bg-[#008F68] border-2 border-white flex items-center justify-center text-white text-[10px]">
                    ✓
                  </span>
                </div>
                <div className="mt-2 text-center bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-gray-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-[#101820]">Managed Profile</span>
                </div>
              </div>

              {/* Orbiting Relationship Nodes */}
              {NETWORK_NODES.map((node) => {
                const isSelected = activeNode.id === node.id;
                const isFilteredOut =
                  activeCategory !== "All" && node.category !== activeCategory;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`absolute z-20 group flex flex-col items-center transition-all duration-300 cursor-pointer focus:outline-none ${
                      isFilteredOut ? "opacity-25 pointer-events-none" : "opacity-100"
                    } ${isSelected ? "scale-115" : "hover:scale-108"}`}
                    aria-label={`Select ${node.name}`}
                  >
                    <div className="relative">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 transition-all shadow-md ${
                          isSelected
                            ? "bg-gradient-to-tr from-[#0A66C2] to-[#008F68] shadow-[0_0_20px_rgba(10,102,194,0.4)]"
                            : "bg-white border-2 border-[#DCE6F0] group-hover:border-[#0A66C2]"
                        }`}
                      >
                        <Image
                          src={node.image}
                          alt={node.name}
                          width={56}
                          height={56}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                          node.category === "Decision-Makers"
                            ? "bg-[#0A66C2]"
                            : node.category === "Industry Peers"
                            ? "bg-[#008F68]"
                            : "bg-amber-500"
                        }`}
                      />
                    </div>

                    <div
                      className={`mt-1.5 px-2 py-0.5 rounded-md text-[10.5px] font-bold whitespace-nowrap transition-colors shadow-2xs ${
                        isSelected
                          ? "bg-[#0A66C2] text-white"
                          : "bg-white/95 text-[#101820] border border-gray-100 group-hover:bg-[#EAF4FF]"
                      }`}
                    >
                      {node.name}
                    </div>
                  </button>
                );
              })}

              {/* Bottom Instructions / Hint */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#536273] pointer-events-none">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#0A66C2]" />
                  Click or hover any profile node to inspect relationship strategy
                </span>
                <span className="hidden sm:inline font-medium text-[#008F68]">
                  FeedGrow Human-Led Coordination
                </span>
              </div>
            </div>
          </div>

          {/* Right Inspector: Floating Glassmorphism Detail Panel (4-5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCE6F0] shadow-xl relative overflow-hidden space-y-5">
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A66C2] via-[#008F68] to-[#0A66C2]" />

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl overflow-hidden border-2 border-[#0A66C2]/20 shadow-sm shrink-0">
                    <Image
                      src={activeNode.image}
                      alt={activeNode.name}
                      width={52}
                      height={52}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#101820] leading-tight">
                      {activeNode.name}
                    </h3>
                    <p className="text-xs text-[#536273] mt-0.5">{activeNode.title}</p>
                    <p className="text-[11px] font-semibold text-[#0A66C2]">{activeNode.company}</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A66C2] bg-[#EAF4FF] px-2.5 py-1 rounded-full border border-[#DCE6F0]">
                  {activeNode.category}
                </span>
              </div>

              <div className="space-y-3.5 pt-2 border-t border-gray-100 text-xs">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#536273] block mb-1">
                    Engagement Method
                  </span>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F0FDF8] border border-[#008F68]/20 text-[#008F68] font-semibold">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>{activeNode.engagementType}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#536273] block mb-1">
                    Relationship Focus
                  </span>
                  <p className="text-[#101820] leading-relaxed bg-[#F8FAFC] p-3 rounded-xl border border-gray-100">
                    {activeNode.relationshipFocus}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#536273] block mb-1">
                    Programme Deliverable Alignment
                  </span>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#EAF4FF] border border-[#DCE6F0] text-[#0A66C2]">
                    <span className="font-semibold">{activeNode.activityMetric}</span>
                    <span className="text-[10.5px] font-bold bg-white px-2 py-0.5 rounded-full shadow-2xs">
                      Human-Led
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#536273]">
                <span className="flex items-center gap-1 font-medium text-[#008F68]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  No automated templates
                </span>
                <span>Active 3-Month Cadence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Disclaimer Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-[#DCE6F0] max-w-2xl mx-auto flex items-center gap-3 text-xs text-[#536273] shadow-2xs">
          <AlertCircle className="w-4 h-4 text-[#0A66C2] shrink-0" />
          <span>
            <strong>Note:</strong> This interactive visualisation demonstrates how professional
            relationships form a managed network. It represents programme methodology, not actual
            individual contacts or guaranteed business results.
          </span>
        </div>
      </div>
    </section>
  );
}
