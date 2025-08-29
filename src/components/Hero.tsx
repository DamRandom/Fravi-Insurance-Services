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
    icon: FaCarAlt,
  },
  {
    key: "home",
    title: "Home Insurance",
    description:
      "Comprehensive protection for your house, apartment or rental property.",
    image: "/images/services/home.jpg",
    icon: FaHome,
  },
  {
    key: "business",
    title: "Business Insurance",
    description:
      "Tailored policies to safeguard your company’s future, assets and staff.",
    image: "/images/services/business.jpg",
    icon: FaBriefcase,
  },
];

export default function Hero() {
  const [active, setActive] = useState("auto");
  const current = services.find((s) => s.key === active)!;

  return (
    <section className="h-[85vh] relative px-6 py-10 flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="z-10 max-w-2xl w-full text-white space-y-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {services.map(({ key, icon: Icon, title }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)]"
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
              >
                <Icon size={16} />
                {title.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-[0_8px_10px_rgba(0,0,0,0.3)]"
            >
              {current.title}
            </motion.h1>

            <motion.p className="text-white/90 text-md md:text-lg font-light drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
              {current.description}
            </motion.p>

            <motion.div
              className="w-64 h-40 relative rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <input
                type="text"
                placeholder="Enter ZIP Code"
                className="px-4 py-2 rounded-md text-sm text-black w-48 focus:outline-none shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
              />
              <button
                className="bg-[var(--color-accent)] text-[var(--color-black)] px-6 py-2 rounded-md font-semibold text-sm shadow-[0_6px_8px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-y-[2px] transition-all duration-200"
                type="button"
              >
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
