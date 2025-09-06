"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Menu, MapPin } from "lucide-react";

import enNavbar from "@/locales/en/navbar.json";
import esNavbar from "@/locales/es/navbar.json";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  // --- Global language state ---
  const { lang, setLang } = useLanguage();

  // --- Local state ---
  const [location, setLocation] = useState<string>("Detecting...");

  // --- Choose translation JSON based on language ---
  const texts = lang === "EN" ? enNavbar : esNavbar;

  // --- Fetch user location (future: move to global context) ---
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setLocation(
            data.address.city ||
              data.address.town ||
              data.address.village ||
              texts.location
          );
        },
        () => setLocation(texts.location)
      );
    } else {
      setLocation(texts.location);
    }
  }, [lang]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAF8]/95 backdrop-blur border-b border-black/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* --- Left: Logo --- */}
          <Link href="/" className="flex-shrink-0 w-[140px] md:w-[160px]">
            <Image
              src="/images/logo.png"
              alt="Fravi Insurance Logo"
              width={500}
              height={70}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>

          {/* --- Right: Links + Location + Language --- */}
          <div className="flex items-center gap-6">
            {/* --- Desktop links and location --- */}
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex gap-10 text-[15px] font-medium tracking-wide text-[#1A3D8F]">
                {texts.navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="px-1 transition-colors duration-200 hover:text-[#101031]"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Darker separator */}
              <div className="w-full border-t-2 border-black my-2"></div>

              {/* Location with darker text and icon */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#06061B]">
                <MapPin className="w-5 h-5 text-[#06061B]" />
                <span>{location}</span>
              </div>
            </div>

            {/* --- Language switch button --- */}
            <button
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              className="flex items-center gap-2 text-lg md:text-xl font-bold text-[#1A3D8F] hover:text-[#101031] transition-colors"
            >
              <Globe className="w-8 h-8" />
              {texts.language}
            </button>

            {/* --- Mobile menu button --- */}
            <button className="lg:hidden p-2 text-[#1A3D8F] hover:text-[#101031] transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Future improvement: add global spinner overlay for language/data loading --- */}
    </header>
  );
}
