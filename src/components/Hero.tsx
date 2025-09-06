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
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#292E30]/80 to-[#0A0F12]/90 backdrop-blur-sm" />
      </div>

      {/* Contenido principal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="z-10 max-w-[600px] w-full space-y-6 text-[#E6C878]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: enterDur, ease }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-[TrajanPro] uppercase tracking-wide leading-tight text-left drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] text-gold"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: enterDur, ease }}
          >
            {current.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-200/90 text-md md:text-lg font-[Inter] text-left leading-relaxed drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: enterDur, delay: instant ? 0 : 0.06, ease }}
          >
            {current.description}
          </motion.p>

          {/* Imagen */}
          <motion.div
            className="w-64 h-40 relative rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.6)] overflow-hidden ml-8"
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

          {/* Input + botón */}
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
              className="px-4 py-2 rounded-md text-sm font-[Inter] text-[#0A0F12] w-48 focus:outline-none shadow-[0_6px_12px_rgba(0,0,0,0.28)] bg-white/95"
            />
            <button
              className="btn-gold px-6 py-2 rounded-md text-sm font-medium"
              type="button"
            >
              Get a Quote
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Botones verticales (desktop) */}
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
              className={`btn-gold p-4 rounded-full transition-all flex items-center justify-center
          ${
            isActive
              ? "bg-[#E6C878] text-[#0A0F12] border-[#C8A048]"
              : "bg-white/0 text-white/90 border-white/20 hover:bg-white/6"
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
