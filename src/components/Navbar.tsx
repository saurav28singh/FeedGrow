"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, ExternalLink } from "lucide-react";

interface NavbarProps {
  onOpenTrial: (plan?: string) => void;
}

export default function Navbar({ onOpenTrial }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productItems = [
    {
      name: "Networking+",
      desc: "3-Month professionally managed personal branding & networking",
      href: "/products/networking-plus",
      badge: "3-Month",
    },
    {
      name: "FEEDGROW LinkedIn Positioning",
      desc: "Complete profile transformation & personal branding",
      href: "/#investment",
      badge: "₹6,999",
    },
    {
      name: "Complete Profile Optimisation",
      desc: "Turn your profile into a clear representation of expertise",
      href: "/#whats-included",
    },
    {
      name: "LinkedIn SEO Optimisation",
      desc: "Help your profile speak the language of your industry",
      href: "/#whats-included",
    },
    {
      name: "Professional Profile Rewriting",
      desc: "Your experience, presented with greater impact",
      href: "/#whats-included",
    },
    {
      name: "Professional Visual Branding",
      desc: "Edited headshots & customized LinkedIn banners",
      href: "/#whats-included",
    },
    {
      name: "Our 5-Step Approach",
      desc: "Your background is the foundation, your goals shape the result",
      href: "/#our-approach",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#E5E9F0]"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-[#E5E9F0]/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
        }`}
      >
        <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official FeedGrow Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-0.5" aria-label="FeedGrow Home">
            <Image
              src="/images/feedgrow-logo.png"
              alt="FeedGrow Logo"
              width={180}
              height={180}
              priority
              className="h-10 sm:h-12 lg:h-[56px] w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors py-2 ${
                  productsOpen ? "text-[#008F68]" : "text-[#1F2826] hover:text-[#008F68]"
                }`}
                aria-expanded={productsOpen}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#008F68]" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {productsOpen && (
                <div className="absolute top-full -left-20 w-[360px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="space-y-1">
                    {productItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="group flex items-start justify-between p-3 rounded-xl hover:bg-[#F0FDF8] transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[#040A08] group-hover:text-[#008F68] transition-colors">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#F0FDF8] border border-[#008F68]/20 text-[#008F68]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#556461] mt-0.5">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-[#008F68] transition-all transform group-hover:translate-x-0.5 mt-1 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#why-feedgrow"
              className="text-[15px] font-medium text-[#1F2826] hover:text-[#008F68] transition-colors"
            >
              Why FeedGrow
            </Link>

            <Link
              href="/#whos-this-for"
              className="text-[15px] font-medium text-[#1F2826] hover:text-[#008F68] transition-colors"
            >
              Who&apos;s This For
            </Link>


            <Link
              href="/#about"
              className="text-[15px] font-medium text-[#1F2826] hover:text-[#008F68] transition-colors"
            >
              About
            </Link>

            <Link
              href="/#contact"
              className="text-[15px] font-medium text-[#1F2826] hover:text-[#008F68] transition-colors"
            >
              Contact
            </Link>

            {/* Login button */}
            <button
              onClick={() => onOpenTrial("FeedGrow Portal Access")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#008F68] hover:bg-[#007A58] text-white text-[14px] font-semibold transition-all duration-200 shadow-[0_2px_10px_rgba(0,143,104,0.22)] hover:shadow-[0_4px_16px_rgba(0,143,104,0.32)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[290px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center shrink-0">
            <Image
              src="/images/feedgrow-logo.png"
              alt="FeedGrow Logo"
              width={140}
              height={140}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 rounded-full text-gray-500 hover:text-black hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between w-full text-base font-semibold text-[#040A08] py-2"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileProductsOpen ? "rotate-180 text-[#018065]" : ""
                }`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="pl-3 mt-2 space-y-2 border-l-2 border-emerald-100">
                {productItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm py-1.5 text-gray-700 hover:text-[#018065]"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold text-[#0A66C2] bg-[#EAF4FF] px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#why-feedgrow"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#040A08] hover:text-[#018065] py-2"
          >
            Why FeedGrow
          </Link>

          <Link
            href="/#whos-this-for"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#040A08] hover:text-[#018065] py-2"
          >
            Who&apos;s This For
          </Link>


          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#040A08] hover:text-[#018065] py-2"
          >
            About
          </Link>

          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#040A08] hover:text-[#018065] py-2"
          >
            Contact
          </Link>

          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial("FeedGrow Portal Access");
              }}
              className="w-full py-3 rounded-full bg-[#008F68] hover:bg-[#064E4A] text-white font-bold text-center inline-flex items-center justify-center gap-2 shadow transition-colors cursor-pointer"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
