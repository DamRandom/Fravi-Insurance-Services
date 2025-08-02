"use client";

import { useState } from "react";
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
  const current = services.find((s) => s.key === active)!;

  return (
    <section className="h-[85vh] relative px-6 py-10 flex items-center justify-between overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Main content with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="z-10 max-w-[600px] w-full text-white space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Title with text shadow */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight text-left
              drop-shadow-[0_8px_10px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {current.title}
          </motion.h1>

          {/* Description with text shadow */}
          <motion.p
            className="text-white/90 text-md md:text-lg font-light text-left
              drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {current.description}
          </motion.p>

          {/* Image with shadow for depth */}
          <motion.div
            className="w-64 h-40 relative rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden ml-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Input and button with shadows and hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <input
              type="text"
              placeholder="Enter ZIP Code"
              className="px-4 py-2 rounded-md text-sm text-black w-48 focus:outline-none
                shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
            />
            <button
              className="bg-[var(--color-accent)] text-[var(--color-black)] px-6 py-2 rounded-md font-semibold text-sm
                shadow-[0_6px_8px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-[2px]
                transition-all duration-200"
              type="button"
            >
              Get a Quote
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Vertical buttons with shadow and hover effect */}
      <div className="z-10 hidden md:flex flex-col gap-4 pr-4">
        {["auto", "home", "business"].map((key) => {
          const Icon =
            key === "auto" ? FaCarAlt : key === "home" ? FaHome : FaBriefcase;
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              aria-label={key}
              className={`p-4 rounded-full border-2 shadow-[0_6px_8px_rgba(0,0,0,0.3)] transition-all duration-200
                ${
                  isActive
                    ? "bg-[var(--color-accent)] text-black shadow-none translate-y-0"
                    : "border-white text-white hover:bg-white/10 hover:shadow-none hover:translate-y-[2px]"
                }
              `}
              type="button"
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
    </section>
  );
}
