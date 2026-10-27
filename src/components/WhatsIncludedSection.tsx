"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
  FileText, 
  Search, 
  PenTool, 
  Image as ImageIcon, 
  UserCheck2, 
  ClipboardCheck, 
  Check, 
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface WhatsIncludedSectionProps {
  onOpenTrial: (plan?: string) => void;
}

export default function WhatsIncludedSection({ onOpenTrial }: WhatsIncludedSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag states
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const services = [
    {
      id: "service-01",
      number: "01",
      title: "Complete LinkedIn Profile Optimisation",
      subheading: "Turn Your Profile Into a Clearer Representation of Your Expertise.",
      desc: "Your profile should communicate your professional identity without making visitors work to understand your value. We review and refine key sections of your LinkedIn profile to improve clarity, structure, and professional positioning.",
      intro: "Your profile optimisation includes:",
      bullets: [
        { label: "Headline Optimisation", detail: "A more purposeful headline that communicates your professional identity, relevant expertise, and direction." },
        { label: "About Section Rewriting", detail: "A professionally written introduction that presents your background, strengths, experience, and ambitions." },
        { label: "Experience Section Improvement", detail: "Clearer descriptions of your roles, responsibilities, and contributions based on the information you provide." },
        { label: "Skills and Profile Section Refinement", detail: "Review and improvement of relevant profile sections to create a more complete and coherent presentation." },
        { label: "Professional Positioning", detail: "Alignment of your profile messaging with your career goals, industry, or target audience." },
      ],
      closing: "The result is a profile designed to communicate your professional story more clearly and consistently.",
      icon: FileText,
      tag: "Foundation & Structure",
      iconBoxClass: "bg-[#EBF4FF] text-[#0A66C2] border border-[#0A66C2]/20",
      tagClass: "text-[#008F68] bg-[#F0FDF8] border-[#008F68]/20",
    },
    {
      id: "service-02",
      number: "02",
      title: "LinkedIn SEO Optimisation",
      subheading: "Help Your Profile Speak the Language of Your Industry.",
      desc: "LinkedIn profile optimisation involves more than filling in the required sections. The words you use can influence how clearly your expertise and professional focus are communicated. Our LinkedIn SEO optimisation focuses on identifying and incorporating relevant industry-specific keywords into appropriate profile sections.",
      intro: "This includes:",
      bullets: [
        { label: "Keyword Research & Placement", detail: "Industry-specific keyword research and placement." },
        { label: "Professional Terminology", detail: "Relevant professional terminology tailored to your field." },
        { label: "Skillset Alignment", detail: "Keyword alignment with your skills and areas of expertise." },
        { label: "Search-Friendly Layout", detail: "Search-friendly profile structure across all sections." },
        { label: "Consistent Usage", detail: "Consistent use of relevant terms across key profile sections." },
      ],
      closing: "We focus on using keywords naturally and appropriately, ensuring your profile remains professional and readable rather than appearing overloaded with search terms. The objective is to strengthen the relevance and clarity of your profile—not to promise a particular search ranking or number of profile views.",
      icon: Search,
      tag: "Discoverability",
      iconBoxClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20",
      tagClass: "text-[#0A66C2] bg-[#EBF4FF] border-[#0A66C2]/20",
    },
    {
      id: "service-03",
      number: "03",
      title: "Professional Profile Rewriting",
      subheading: "Your Experience, Presented With Greater Impact.",
      desc: "You may have valuable experience, meaningful achievements, and strong professional skills. Communicating them effectively is an important part of personal branding. We rewrite relevant profile content to make your professional story clearer, more compelling, and easier to understand.",
      intro: "Your profile copy focuses on:",
      bullets: [
        { label: "Clarity & Tone", detail: "Clear and professional messaging crafted for executive readability." },
        { label: "Achievement Focus", detail: "Achievement-focused descriptions based on your actual experience." },
        { label: "Enhanced Responsibilities", detail: "Improved presentation of responsibilities and expertise." },
        { label: "Audience Calibration", detail: "Language appropriate to your industry and target audience." },
        { label: "Goal Alignment", detail: "Alignment with your future professional ambitions and career milestones." },
      ],
      closing: "We work with the information you provide to present your experience more effectively while maintaining authenticity. Your professional story stays yours. We help you communicate it better.",
      icon: PenTool,
      tag: "Compelling Narrative",
      iconBoxClass: "bg-[#EBF4FF] text-[#0A66C2] border border-[#0A66C2]/20",
      tagClass: "text-[#008F68] bg-[#F0FDF8] border-[#008F68]/20",
    },
    {
      id: "service-04",
      number: "04",
      title: "Professional Visual Branding",
      subheading: "Make Your Profile Look as Professional as Your Ambitions.",
      desc: "Your profile's visual presentation contributes to the impression it creates. We help improve the visual elements of your LinkedIn presence so they complement your professional positioning and create a more cohesive appearance.",
      intro: "This includes:",
      bullets: [
        { label: "Professionally Edited Headshot", detail: "Image editing to support a polished, professional presentation with natural lighting and contrast." },
        { label: "Customised LinkedIn Banner", detail: "A banner designed around your industry, professional identity, or relevant goals." },
        { label: "Consistent Visual Presentation", detail: "Visual choices that complement your profile messaging and overall professional brand." },
      ],
      closing: "The aim is to create a professional appearance that supports your identity without distracting from your experience and expertise.",
      icon: ImageIcon,
      tag: "Visual Cohesion",
      iconBoxClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20",
      tagClass: "text-[#0A66C2] bg-[#EBF4FF] border-[#0A66C2]/20",
    },
    {
      id: "service-05",
      number: "05",
      title: "Authentic, Human-Written Content",
      subheading: "Your Voice. Your Experience. Your Professional Identity.",
      desc: "A strong profile should reflect the person behind it. We create personalised profile copy based on your background, information, skills, experience, and professional objectives. Our approach prioritises clarity, relevance, and authenticity rather than generic descriptions that could apply to anyone.",
      intro: "You can expect:",
      bullets: [
        { label: "100% Manually Written", detail: "Manually written, personalised profile copy crafted by personal branding specialists." },
        { label: "Bespoke Messaging", detail: "Messaging tailored to your professional background and goals." },
        { label: "Unambiguous Descriptions", detail: "Clear descriptions of your experience and expertise." },
        { label: "Cross-Section Coherence", detail: "Consistency across relevant profile sections." },
        { label: "Zero Fabrication", detail: "No fabricated achievements, qualifications, or professional credentials." },
      ],
      closing: "Your profile should communicate your real strengths—not an invented version of your professional journey.",
      icon: UserCheck2,
      tag: "Genuine Authenticity",
      iconBoxClass: "bg-[#EBF4FF] text-[#0A66C2] border border-[#0A66C2]/20",
      tagClass: "text-[#008F68] bg-[#F0FDF8] border-[#008F68]/20",
    },
    {
      id: "service-06",
      number: "06",
      title: "Final Review and Practical Guidance",
      subheading: "A More Consistent Profile, Ready to Represent You.",
      desc: "Before your positioning is complete, we review the relevant profile elements for consistency, clarity, and overall presentation.",
      intro: "This includes:",
      bullets: [
        { label: "Quality Assessment", detail: "Review of profile sections and messaging for maximum impact." },
        { label: "Consistency Checks", detail: "Consistency checks across relevant content and contact points." },
        { label: "Maintenance Recommendations", detail: "Practical recommendations for maintaining your professional presence." },
        { label: "Engagement Guidance", detail: "Guidance on using your optimised profile effectively for networking and outreach." },
      ],
      closing: "The aim is to give you a more polished profile and practical direction for continuing to develop your LinkedIn presence.",
      icon: ClipboardCheck,
      tag: "Ongoing Readiness",
      iconBoxClass: "bg-[#F0FDF8] text-[#008F68] border border-[#008F68]/20",
      tagClass: "text-[#0A66C2] bg-[#EBF4FF] border-[#0A66C2]/20",
    },
  ];

  // Calculate scroll boundaries & active card index
  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    const cards = container.querySelectorAll<HTMLElement>("[data-carousel-card]");
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(cardRect.left - containerRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setCurrentIndex(closestIdx);
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateScrollState();
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Programmatic scroll to specific card index
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-carousel-card]");
    
    if (cards[index]) {
      const card = cards[index];
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
      const targetScroll = container.scrollLeft + (cardRect.left - containerRect.left) - paddingLeft;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  const handleNext = () => {
    const nextIdx = Math.min(services.length - 1, currentIndex + 1);
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = Math.max(0, currentIndex - 1);
    scrollToCard(prevIdx);
  };

  // Mouse Drag to scroll (desktop trackpad & mouse support)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.25;
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  return (
    <section id="whats-included" className="relative py-20 md:py-26 bg-[#F8FAFC] border-t border-gray-100 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-[540px] h-[540px] bg-[#EBF4FF]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[540px] h-[540px] bg-[#F0FDF8]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#0A66C2]/20 bg-[#F0F7FF] text-[#0A66C2] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              COMPREHENSIVE POSITIONING SUITE
            </span>
          </div>

          <h2 className="text-[30px] sm:text-[40px] md:text-[44px] font-bold text-[#040A08] tracking-[-0.03em] leading-tight">
            WHAT&apos;S INCLUDED IN YOUR LINKEDIN POSITIONING?
          </h2>

          <p className="mt-3 text-[16px] text-[#556461] max-w-2xl mx-auto leading-relaxed">
            Six comprehensive service components engineered to transform your profile into a polished, strategic representation of your professional journey.
          </p>
        </div>

        {/* Carousel Top Navigation Bar with Counter & Arrow Controls */}
        <div className="flex items-center justify-between max-w-[1320px] mx-auto mb-6 px-1">
          {/* Service counter & guide */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2ECE9] shadow-2xs text-[12px] font-mono font-semibold text-[#040A08]">
              <span className="text-[#0A66C2] font-bold">0{currentIndex + 1}</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400">06</span>
            </div>
            <span className="hidden sm:inline text-[13px] font-medium text-[#556461]">
              Swipe or use controls to browse all 6 deliverables
            </span>
          </div>

          {/* Left and Right navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous service card"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DCE6F0] bg-white text-[#040A08] flex items-center justify-center shadow-2xs transition-all duration-200 hover:bg-[#F0F7FF] hover:border-[#0A66C2]/40 hover:text-[#0A66C2] active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[#DCE6F0] disabled:hover:text-[#040A08] disabled:active:scale-100 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next service card"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DCE6F0] bg-white text-[#040A08] flex items-center justify-center shadow-2xs transition-all duration-200 hover:bg-[#F0F7FF] hover:border-[#0A66C2]/40 hover:text-[#0A66C2] active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-[#DCE6F0] disabled:hover:text-[#040A08] disabled:active:scale-100 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 lg:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 pb-6 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing items-stretch"
            style={{ scrollbarWidth: "none" }}
            role="region"
            aria-label="LinkedIn Positioning Services Carousel"
          >
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  data-carousel-card
                  className="w-[86vw] sm:w-[480px] md:w-[520px] lg:w-[calc((100%-48px)/2.28)] shrink-0 snap-start snap-always rounded-3xl bg-white border border-[#E2ECE9] hover:border-[#0A66C2]/35 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(10,102,194,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group select-none"
                >
                  <div className="p-7 sm:p-9 flex-1 flex flex-col">
                    {/* Top Bar with Number, Icon and Category Tag */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 ${srv.iconBoxClass}`}>
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div>
                          <span className="text-[11.5px] font-bold tracking-wider uppercase text-[#0A66C2]">
                            SERVICE {srv.number}
                          </span>
                          <div className="mt-0.5">
                            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-block border ${srv.tagClass}`}>
                              {srv.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[12px] font-mono font-semibold text-gray-300 group-hover:text-gray-400 transition-colors">
                        {srv.number}/06
                      </span>
                    </div>

                    {/* Title & Subheading */}
                    <h3 className="text-[21px] sm:text-[23px] font-bold text-[#040A08] tracking-tight group-hover:text-[#0A66C2] transition-colors leading-snug mb-1.5">
                      {srv.title}
                    </h3>

                    <p className="text-[14px] sm:text-[14.5px] font-semibold text-[#0A66C2] leading-snug mb-3.5">
                      {srv.subheading}
                    </p>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[14.5px] text-[#42524E] leading-[1.65] mb-5">
                      {srv.desc}
                    </p>

                    {/* Bullets List */}
                    <div className="mt-auto pt-4 border-t border-gray-100/90">
                      <p className="text-[11.5px] font-bold text-[#040A08] uppercase tracking-wider mb-3">
                        {srv.intro}
                      </p>

                      <ul className="space-y-2.5">
                        {srv.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-[13.5px] text-[#1F2826] leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-[#EBF4FF] text-[#0A66C2] flex items-center justify-center shrink-0 mt-0.5 border border-[#0A66C2]/15">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <div>
                              <strong className="text-[#040A08] font-semibold">{b.label}: </strong>
                              <span className="text-[#556461]">{b.detail}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Closing note inside card */}
                  <div className="px-7 sm:px-9 py-5 bg-[#FAFCFF] border-t border-gray-100">
                    <p className="text-[12.5px] sm:text-[13px] text-[#556461] italic leading-relaxed">
                      {srv.closing}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Indicators Below Carousel */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {services.map((srv, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to service ${srv.number}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#0A66C2]"
                  : "w-2.5 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 px-7 rounded-3xl bg-white border border-[#0A66C2]/20 shadow-sm">
            <span className="text-sm sm:text-[15px] font-medium text-[#040A08]">
              Ready to get all six comprehensive services in one unified positioning package?
            </span>
            <button
              onClick={() => onOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-[14px] font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer shrink-0"
            >
              <span>Get Started — ₹6,999</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
