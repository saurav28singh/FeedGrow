"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function BlogSection() {
  const [startIndex, setStartIndex] = useState(0);

  const blogPosts = [
    {
      title: "Have you ever wondered how some people are constantly active on Linkedin",
      author: "Laxmi Eturi",
      date: "4 weeks ago",
      image: "/images/revamp_img/linkedin-4763813_1280-1.webp",
      url: "#",
    },
    {
      title: "A great resume stands out by clearly communicating intent, aligning with job",
      author: "Laxmi Eturi",
      date: "4 weeks ago",
      image: "/images/revamp_img/resume-2296951_1280-1.webp",
      url: "#",
    },
    {
      title: "When reviewing your resume, hiring managers typically focus on",
      author: "Laxmi Eturi",
      date: "2 months ago",
      image: "/images/revamp_img/firmbee-com-gcsNOsPEXfs-unsplash.webp",
      url: "#",
    },
    {
      title: "A great resume is one that appeals equally to recruiters and",
      author: "Laxmi Eturi",
      date: "2 months ago",
      image: "/images/revamp_img/joao-ferrao-4YzrcDNcRVg-unsplash.webp",
      url: "#",
    },
  ];

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(blogPosts.length - 1, prev + 1));
  };

  return (
    <section
      id="blog"
      className="py-16 md:py-24"
      style={{
        background: "linear-gradient(106.8deg, #f5fffc -15.95%, #fff5f5 100%)",
      }}
    >
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040A08]">
              Blog
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#2F3332] font-normal">
              Career Insights to Accelerate Your Professional Growth
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all ${
                startIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50 hover:border-gray-300 shadow-xs"
              }`}
              aria-label="Previous posts"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= blogPosts.length - 3}
              className={`w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-all ${
                startIndex >= blogPosts.length - 3
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50 hover:border-gray-300 shadow-xs"
              }`}
              aria-label="Next posts"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(startIndex, startIndex + 3).map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-full h-[200px] sm:h-[220px] rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={220}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1.5 font-medium text-[#040A08]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#018065]">
                      <User className="w-3 h-3" />
                    </span>
                    {post.author}
                  </span>
                  <span className="text-gray-400">{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#040A08] leading-snug line-clamp-2 my-2 group-hover:text-[#018065] transition-colors">
                  {post.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-[#018065] font-semibold text-sm group-hover:text-[#137661]">
                <span>Know more</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
