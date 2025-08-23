"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Auto Insurance",
    subtitle: "Drive with total peace of mind",
    offer: "From $29.99/mo",
    features: [
      "✔ Full collision & theft coverage",
      "✔ 24/7 roadside assistance",
      "✔ Free replacement car during repairs",
      "✔ Safe driver discounts up to 40%",
    ],
    cta: "Get Auto Insurance",
    bg: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]",
    icon: "/icons/auto.png",
  },
  {
    title: "Home Insurance",
    subtitle: "Protect your family & property",
    offer: "From $39.99/mo",
    features: [
      "✔ Fire, theft & natural disaster coverage",
      "✔ Emergency response in under 30 min",
      "✔ Liability protection for visitors",
      "✔ Free smart-home security kit",
    ],
    cta: "Secure Your Home",
    bg: "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)]",
    icon: "/icons/home.png",
  },
  {
    title: "Business Insurance",
    subtitle: "Protect your growth & future",
    offer: "From $59.99/mo",
    features: [
      "✔ Property & employee coverage",
      "✔ Income protection from interruptions",
      "✔ Tailored plans for every industry",
      "✔ Dedicated risk advisor included",
    ],
    cta: "Protect Your Business",
    bg: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]",
    icon: "/icons/business.png",
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="bg-white py-28 px-6 md:px-20 text-[var(--color-black)]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-20 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Botones */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 p-2 hover:scale-125 transition-transform"
        >
          <FaChevronLeft className="text-[var(--color-primary)] text-3xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 p-2 hover:scale-125 transition-transform"
        >
          <FaChevronRight className="text-[var(--color-primary)] text-3xl" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className={`${services[index].bg} text-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 p-10 rounded-2xl shadow-2xl`}
          >
            {/* Texto promocional */}
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                {services[index].title}
              </h3>
              <p className="text-lg opacity-90">{services[index].subtitle}</p>
              <p className="text-2xl font-extrabold">{services[index].offer}</p>

              <div className="flex flex-col gap-2 text-sm md:text-base">
                {services[index].features.map((point, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                    {point}
                  </motion.p>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-200 transition"
              >
                {services[index].cta}
              </motion.button>
            </div>

            {/* Lado visual con ícono local */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Image
                  src={services[index].icon}
                  alt={`${services[index].title} icon`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
