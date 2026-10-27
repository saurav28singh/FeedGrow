"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Shield, Sparkles, ArrowRight } from "lucide-react";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export default function TrialModal({
  isOpen,
  onClose,
  planName = "FEEDGROW LinkedIn Positioning — ₹6,999",
}: TrialModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedinUrl: "",
    phone: "",
    careerStage: "Working Professional",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header background decoration */}
        <div className="bg-gradient-to-r from-[#0A66C2] via-[#08529C] to-[#018065] p-5 sm:p-6 text-white text-center relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />{" "}
            {planName.includes("Networking")
              ? "3-MONTH MANAGED PROGRAMME"
              : "₹6,999 • Inclusive of GST"}
          </div>
          <h3 id="trial-modal-title" className="text-xl sm:text-2xl font-bold">
            {planName}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
            {planName.includes("Networking")
              ? "Strengthen your LinkedIn presence, connect with relevant professionals, and build meaningful relationships."
              : "A comprehensive profile optimisation and personal branding package designed around your goals."}
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-[#018065] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#040A08]">Enquiry Received!</h4>
              <p className="text-gray-600 mt-2 text-sm max-w-sm mx-auto">
                Thank you, <strong className="text-[#018065]">{formData.name}</strong>. Our FeedGrow team will review your profile details and connect with you shortly to discuss your{" "}
                {planName.includes("Networking") ? "Networking+ programme" : "LinkedIn Positioning"}.
              </p>
              <div className="mt-6 p-4 bg-[#F5FFFC] border border-[#018065]/20 rounded-xl text-xs text-[#018065] text-left space-y-1">
                <p>
                  ✓{" "}
                  {planName.includes("Networking")
                    ? "Networking+ programme enquiry submitted"
                    : "LinkedIn Positioning request submitted"}
                </p>
                <p>
                  ✓{" "}
                  {planName.includes("Networking")
                    ? "Dedicated Account Manager consultation"
                    : "₹6,999 (Inclusive of GST) package details"}
                </p>
                <p>✓ Confirmation details sent to {formData.email}</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 w-full py-3 bg-[#018065] hover:bg-[#137661] text-white font-semibold rounded-full transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="trial-name"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="trial-name"
                  required
                  type="text"
                  placeholder="e.g. Lalit Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018065] text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="trial-email"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
                >
                  Work Email *
                </label>
                <input
                  id="trial-email"
                  required
                  type="email"
                  placeholder="lalit@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018065] text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="trial-linkedin"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
                >
                  LinkedIn Profile URL *
                </label>
                <input
                  id="trial-linkedin"
                  required
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018065] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="trial-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="trial-phone"
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018065] text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="trial-stage"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
                  >
                    Career Stage
                  </label>
                  <select
                    id="trial-stage"
                    value={formData.careerStage}
                    onChange={(e) => setFormData({ ...formData, careerStage: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#018065] text-sm bg-white"
                  >
                    <option value="Early Career">Early Career (0-3 yrs)</option>
                    <option value="Mid-Level Career">Mid-Level (3-10 yrs)</option>
                    <option value="Senior Executive">Senior / Leadership (10+ yrs)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-[#018065] shrink-0" />
                <span>Your details are 100% confidential. No spam, ever.</span>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#018065] hover:bg-[#137661] text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#018065]/25 cursor-pointer"
              >
                <span>
                  {planName.includes("Networking")
                    ? "Get Started with Networking+"
                    : "Get Started with Positioning"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
