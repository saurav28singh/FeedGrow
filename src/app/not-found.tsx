import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F7FAFD] to-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="py-6 px-4 sm:px-8 border-b border-[#DCE6F0]/80 bg-white/80 backdrop-blur-sm">
        <div className="max-w-[1264px] mx-auto flex items-center justify-between">
          <Link href="/" aria-label="FeedGrow Home">
            <Image
              src="/images/feedgrow-logo.png"
              alt="FeedGrow Logo"
              width={160}
              height={160}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-[#008F68] hover:text-[#007A58] inline-flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#EAF4FF] text-[#0A66C2] border border-[#BFDBFE] shadow-sm mx-auto">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: "12s" }} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#0A66C2] bg-[#EAF4FF] px-3.5 py-1 rounded-full border border-[#DCE6F0]">
              404 — PAGE NOT FOUND
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101820] tracking-tight">
              Lost in the Network?
            </h1>
            <p className="text-sm sm:text-base text-[#526174] leading-relaxed">
              The page you are looking for doesn&apos;t exist, has been moved, or the link is incorrect.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#008F68] hover:bg-[#007A58] text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-[#008F68]/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              href="/products/networking-plus"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-gray-50 text-[#101820] border border-[#DCE6F0] text-sm font-medium transition-all"
            >
              <span>Explore Networking+</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="py-6 px-4 text-center text-xs text-[#526174] border-t border-[#DCE6F0]/80 bg-white">
        &copy; {new Date().getFullYear()} FeedGrow. All rights reserved.
      </footer>
    </main>
  );
}
