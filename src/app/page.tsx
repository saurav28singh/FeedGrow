"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IdentityReimaginedSection from "@/components/IdentityReimaginedSection";
import WhyLinkedInMattersSection from "@/components/WhyLinkedInMattersSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import FeedGrowAdvantageSection from "@/components/FeedGrowAdvantageSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import OurApproachSection from "@/components/OurApproachSection";
import PricingInvestmentSection from "@/components/PricingInvestmentSection";
import FinalConversionSection from "@/components/FinalConversionSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TrialModal from "@/components/TrialModal";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState("FEEDGROW LinkedIn Positioning — ₹6,999");

  const handleOpenTrial = (planName?: string) => {
    setActivePlan(planName || "FEEDGROW LinkedIn Positioning — ₹6,999");
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* 1. Hero Section (Section 4) */}
      <HeroSection
        onOpenTrial={() => handleOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
        onOpenDemo={handleOpenDemo}
      />

      {/* 2. Your Professional Identity, Reimagined (Section 5) */}
      <IdentityReimaginedSection onOpenTrial={handleOpenTrial} />

      {/* 3. Why Your LinkedIn Profile Matters (Section 6) */}
      <WhyLinkedInMattersSection />

      {/* 4. What's Included in Your LinkedIn Positioning? (Section 7) */}
      <WhatsIncludedSection onOpenTrial={handleOpenTrial} />

      {/* 5. The FeedGrow Advantage (Section 8) */}
      <FeedGrowAdvantageSection />

      {/* 6. Who Is LinkedIn Positioning For? (Section 9) */}
      <WhoIsThisForSection onOpenTrial={handleOpenTrial} />

      {/* 7. Our Approach (Section 10) */}
      <OurApproachSection onOpenTrial={handleOpenTrial} />

      {/* 8. Your Investment (Section 11) */}
      <PricingInvestmentSection onOpenTrial={handleOpenTrial} />

      {/* 9. Final Conversion Section (Section 12) */}
      <FinalConversionSection onOpenTrial={handleOpenTrial} />

      {/* 10. Footer (Section 13) */}
      <Footer onOpenTrial={handleOpenTrial} />

      {/* Floating Scroll To Top button */}
      <ScrollToTop />

      {/* Interactive Booking / Consultation Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrial}
        planName={activePlan}
      />

      {/* Interactive Video / Product Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        onStartTrial={() => handleOpenTrial("FEEDGROW LinkedIn Positioning — ₹6,999")}
      />
    </main>
  );
}
