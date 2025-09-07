"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaCarAlt, FaHome, FaBriefcase } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    key: "auto",
    title: "Auto Insurance",
    description:
      "Reliable coverage for personal and commercial vehicles to keep you moving forward.",
    image: "/images/services/auto.jpg",
  },
  {
    key: "home",
    title: "Home Insurance",
    description:
      "Comprehensive protection for your house, apartment or rental property.",
    image: "/images/services/home.jpg",
  },
  {
    key: "business",
    title: "Business Insurance",
    description:
      "Tailored policies to safeguard your company’s future, assets and staff.",
    image: "/images/services/business.jpg",
  },
];

export default function Hero() {
  const [active, setActive] = useState("auto");
  const [isAuto, setIsAuto] = useState(true);
  const [instant, setInstant] = useState(false);
  const instantTimeoutRef = useRef<number | null>(null);

  const current = services.find((s) => s.key === active)!;

  const computeDisplayMs = (title: string, description: string) => {
    const text = `${title} ${description}`.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const WPM = 220;
    const readingMs = Math.ceil((words / WPM) * 60000);
    const buffer = 1500;
    const MIN_MS = 6000;
    return Math.max(MIN_MS, readingMs + buffer);
  };

  const displayMs = computeDisplayMs(current.title, current.description);

  useEffect(() => {
    if (!isAuto) return;
    const id = window.setTimeout(() => {
      const idx = services.findIndex((s) => s.key === active);
      const next = services[(idx + 1) % services.length].key;
      setActive(next);
    }, displayMs);
    return () => clearTimeout(id);
  }, [active, isAuto, displayMs]);

  useEffect(() => {
    return () => {
      if (instantTimeoutRef.current) {
        clearTimeout(instantTimeoutRef.current);
      }
    };
  }, []);

  const handleSelect = (key: string) => {
    if (key === active) return;
    setActive(key);
    setIsAuto(false);
    setInstant(true);
    if (instantTimeoutRef.current) clearTimeout(instantTimeoutRef.current);
    instantTimeoutRef.current = window.setTimeout(() => setInstant(false), 300);
  };

  const enterDur = instant ? 0.22 : 0.6;
  const ease = "easeOut";

  return (
    <section className="h-[85vh] relative px-6 py-10 flex items-center justify-between overflow-hidden">
      {/* --- Background --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06061B]/80 to-[#101031]/90 backdrop-blur-sm" />
      </div>

      {/* --- Main content --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="z-10 max-w-[600px] w-full space-y-6 text-[#1A3D8F]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: enterDur, ease }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-left text-[#1A3D8F]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: enterDur, ease }}
          >
            {current.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-white font-normal text-left leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: enterDur, delay: instant ? 0 : 0.06, ease }}
          >
            {current.description}
          </motion.p>

          {/* Image */}
          <motion.div
            className="w-64 h-40 relative rounded-lg shadow-md overflow-hidden ml-8"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: enterDur, delay: instant ? 0 : 0.02, ease }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Input + button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 22 }}
            transition={{ duration: enterDur, delay: instant ? 0 : 0.08, ease }}
          >
            <input
              type="text"
              placeholder="Enter ZIP Code"
              className="px-4 py-2 rounded-md text-sm w-48 focus:outline-none border border-black/30 text-[#06061B] shadow-sm bg-white/95"
            />
            <button
              className="px-6 py-2 rounded-md text-sm font-semibold text-[#06061B] bg-[#1A3D8F] hover:bg-[#101031]/90 transition-colors"
              type="button"
            >
              Get a Quote
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* --- Vertical buttons (desktop) --- */}
      <div className="z-10 hidden md:flex flex-col gap-4 pr-4">
        {["auto", "home", "business"].map((key) => {
          const Icon =
            key === "auto" ? FaCarAlt : key === "home" ? FaHome : FaBriefcase;
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              aria-label={key}
              className={`p-4 rounded-full transition-all flex items-center justify-center border-2
          ${
            isActive
              ? "bg-[#1A3D8F] text-[#06061B] border-[#1A3D8F]"
              : "bg-transparent text-white border-white/50 hover:bg-white/10"
          }`}
              type="button"
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
    </section>
  );
}
