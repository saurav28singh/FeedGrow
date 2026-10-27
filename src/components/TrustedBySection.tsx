"use client";

import React from "react";
import Image from "next/image";

interface TrustedBySectionProps {
  onOpenTrial: () => void;
}

export default function TrustedBySection({ onOpenTrial }: TrustedBySectionProps) {
  const logosRow1 = [
    { name: "Times Internet", file: "times-internet-logo.png" },
    { name: "HCL", file: "hcl-logo.png" },
    { name: "Adobe", file: "adobe-logo.png" },
    { name: "Naukri", file: "naukri-logo.png" },
    { name: "TCS", file: "tcs-logo.png" },
    { name: "Microsoft", file: "microsoft-logo.png" },
    { name: "Flipkart", file: "flipkart-logo.png" },
  ];

  const logosRow2 = [
    { name: "Genpact", file: "genpact-logo.png" },
    { name: "ISRO", file: "isro-logo.png" },
    { name: "Dabur", file: "dabur-logo.png" },
    { name: "Adani", file: "adani-logo.png" },
    { name: "Paytm", file: "paytm-logo.png" },
    { name: "Airtel", file: "airtel-logo.png" },
    { name: "Walmart", file: "wallmart-logo.png" },
  ];

  const logosRow3 = [
    { name: "Amazon", file: "amazon-logo.png" },
    { name: "IBM", file: "ibm-logo.png" },
    { name: "Google", file: "google-logo.png" },
    { name: "Sony", file: "sony-logo.png" },
    { name: "Bosch", file: "bosch-logo.png" },
    { name: "Columbia", file: "columbia-logo.png" },
    { name: "Facebook", file: "facebook-logo.png" },
  ];

  const logosRow4 = [
    { name: "Philips", file: "philiphs-logo.png" },
    { name: "Nestle", file: "nestle-logo.png" },
    { name: "Siemens", file: "siemens-logo.png" },
    { name: "American Express", file: "american-express-logo.png" },
    { name: "Uber", file: "uber-logo.png" },
    { name: "FedEx", file: "fedex-logo.png" },
    { name: "Abbott", file: "abbott-logo.png" },
  ];

  const allRows = [logosRow1, logosRow2, logosRow3, logosRow4];

  return (
    <section className="py-14 md:py-20 bg-[#FBFCFC]">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040A08] text-center mb-8 md:mb-12">
          Trusted by Professionals who&apos;ve worked at
        </h2>

        {/* Logo Rows */}
        <div className="space-y-4 md:space-y-6">
          {allRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6"
            >
              {row.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[100px] sm:w-[130px] md:w-[145px] h-[55px] sm:h-[65px] flex items-center justify-center p-2 rounded-xl bg-white border border-gray-100/80 shadow-xs hover:shadow-sm transition-all hover:scale-105"
                >
                  <Image
                    src={`/images/revamp_img/${item.file}`}
                    alt={item.name}
                    width={149}
                    height={72}
                    className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Dream Job Callout */}
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-lg sm:text-xl font-bold text-[#2F3332] mb-3">
            Your Dream Job Starts with the Right Resume &amp; Linkedin Profile
          </p>
          <div className="flex flex-col items-center">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#018065] hover:bg-[#137661] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              Try Visibility+ For Free Today
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
