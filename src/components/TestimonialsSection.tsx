"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  onOpenTrial: () => void;
}

export default function TestimonialsSection({ onOpenTrial }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Lalit Kumar",
      avatar: "/images/revamp_img/Lalit.jpeg",
      review:
        "FeedGrow has helped me strengthen my professional visibility on Linkedin. Their support has enabled me to showcase my expertise, expand my network, and create meaningful opportunities through consistent personal branding.",
    },
    {
      name: "Jana A",
      avatar: "/images/revamp_img/JanaTameem.jpeg",
      review:
        "FeedGrow took the time to understand my goals and helped create a profile that truly reflects my expertise. Their thoughtful support and personalized approach have made this a very positive experience.",
    },
    {
      name: "Biswanath Mukherjee",
      avatar: "/images/revamp_img/BiswanathMukherjee.jpeg",
      review:
        "FeedGrow helped refine my Linkedin presence, making my 25+ years of experience more visible and impactful. I now feel better positioned to connect with new opportunities and grow my professional network.",
    },
    {
      name: "Bhuvaneswaran Subramanian",
      avatar: "/images/revamp_img/BhuvaneshwaranSubramanian.jpeg",
      review:
        "What started as a resume enhancement evolved into complete Linkedin profile management. FeedGrow's structured approach, quality content, and consistent support have significantly improved my professional visibility.",
    },
    {
      name: "Preeti Nilesh Bhagat",
      avatar: "/images/revamp_img/PreetiBhagat.jpeg",
      review:
        "FeedGrow has consistently helped me build relevant content, maintain an active Linkedin presence, and engage with the right audience. Their structured approach has improved both my visibility and professional reach.",
    },
    {
      name: "Praveen S.",
      avatar: "/images/revamp_img/PraveenS.jpeg",
      review:
        "Working with FeedGrow has been a practical learning experience in building Linkedin visibility. The Post Buddy feature and proactive support have made creating quality content and managing my profile much easier.",
    },
    {
      name: "Sachin Sethi",
      avatar: "/images/revamp_img/SachinSeth.jpeg",
      review:
        "FeedGrow's support has helped me strengthen my personal brand and professional presence on Linkedin. Their guidance is valuable for anyone looking to enhance visibility and create a stronger industry impact.",
    },
    {
      name: "Mandar Shrotri",
      avatar: "/images/revamp_img/MandarShrotri.jpeg",
      review:
        "FeedGrow helped me build a stronger Linkedin profile with a clear professional story, improving my visibility and positioning me for better career opportunities.",
    },
    {
      name: "Thammanna Raj K",
      avatar: "/images/revamp_img/Thammanna.jpeg",
      review:
        "FeedGrow transformed my resume and optimized my Linkedin profile, leading to relevant interview opportunities and multiple job offers. Their personalized guidance made a significant difference in my career journey.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 border border-gray-100/80 shadow-xs">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#040A08] leading-tight">
              Real People. Real Results. Real Talk.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#56615E] font-medium leading-relaxed">
              Thousands of professionals have trusted FeedGrow to grow their careers. Here&apos;s what they have to say.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-[#E6E6E6] bg-white transition-all duration-200 hover:border-[#018065]/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-xs">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#040A08] leading-snug">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#56615E] leading-relaxed">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile bottom CTA */}
          <div className="mt-10 pt-4 text-center md:hidden">
            <button
              onClick={onOpenTrial}
              className="w-full py-3.5 px-6 rounded-full bg-[#018065] text-white font-bold text-sm shadow-md"
            >
              Start My Free Trial Now
            </button>
            <p className="mt-2 text-xs text-[#56615E] font-medium">
              Trusted by 100,000 professionals across 30+ industries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
