"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProductsSectionProps {
  onOpenTrial: (productName?: string) => void;
}

interface ProductItem {
  title: string;
  image: string;
  description: string;
  cta: string;
  isTrial?: boolean;
  badge?: string;
}

function ProductCard({
  product,
  onOpenTrial,
}: {
  product: ProductItem;
  onOpenTrial: (title: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenTrial(product.title)}
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-4px)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.3s ease" : "transform 0.5s ease, box-shadow 0.5s ease",
      }}
      className="group relative bg-white p-6 sm:p-7 rounded-[24px] shadow-xs hover:shadow-xl border border-gray-100 hover:border-[#008F68]/40 transition-colors flex flex-col justify-between cursor-pointer select-none overflow-hidden"
    >
      {/* Top subtle ambient light sheen on hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-emerald-100/40 blur-2xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg sm:text-[18px] font-bold text-[#040A08]">
            {product.title}
          </h3>
          {product.isTrial && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5F1] text-[#008F68] border border-[#008F68]/20">
              <Sparkles className="w-3 h-3 text-[#84CC16]" />
              <span>15-Day Free</span>
            </span>
          )}
        </div>

        {/* 3D Depth Image Container */}
        <div
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            transition: "transform 0.3s ease",
          }}
          className="w-full h-[148px] relative my-3 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-gray-50/80 to-[#F0FDF8]/30 border border-gray-100/80"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={304}
            height={144}
            className="max-h-[144px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
          />
        </div>

        <p className="text-sm sm:text-[15px] text-[#2F3332] font-normal leading-relaxed mt-4">
          {product.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center text-[#018065] font-semibold text-sm sm:text-base group-hover:text-[#137661]">
        <span>{product.cta}</span>
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </div>
  );
}

export default function ProductsSection({ onOpenTrial }: ProductsSectionProps) {
  const products: ProductItem[] = [
    {
      title: "Visibility+",
      image: "/images/revamp_img/growth-profile.png",
      description:
        "We help professionals become easier to find through consistent Linkedin growth and personal branding.",
      cta: "Try 15 Days For Free",
      isTrial: true,
    },
    {
      title: "Positioning for Linkedin Profile",
      image: "/images/revamp_img/linkedin-makeover1.webp",
      description:
        "We rewrite your full Linkedin profile to help you get found & boost your career growth.",
      cta: "Make my Linkedin stand out",
    },
    {
      title: "Expert Resume Makeover",
      image: "/images/revamp_img/expert-resume-makeover.webp",
      description: "Our professionals rewrite resumes that recruiters / HR love.",
      cta: "Get my expert resume",
    },
    {
      title: "AI Resume Enhancer",
      image: "/images/revamp_img/ai-resume-enhancer.webp",
      description:
        "Give your current resume an AI-powered makeover to clear ATS shortlisting.",
      cta: "Upgrade my resume",
    },
    {
      title: "Post Buddy for Linkedin Growth",
      image: "/images/revamp_img/post-buddy-for-linkedin.webp",
      description:
        "Your personal Linkedin assistant - tells you what to post, when to post, & how to grow.",
      cta: "Start growing on Linkedin",
    },
  ];

  return (
    <section id="explore-career-suite" className="py-12 md:py-16 bg-[#F7F9F9] relative overflow-hidden">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F9F9] rounded-[32px] md:rounded-[40px]">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#040A08] text-center mb-8 md:mb-12">
            Our Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onOpenTrial={onOpenTrial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
