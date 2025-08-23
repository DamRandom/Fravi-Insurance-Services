"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "Auto Insurance",
    highlights: [
      "Full protection against collisions, theft, and third-party damage.",
      "24/7 roadside assistance for peace of mind.",
      "Flexible plans to fit your needs and budget.",
      "Discounts for safe driving history.",
    ],
    image: "/images/services/car-insurance.jpg",
  },
  {
    title: "Home Insurance",
    highlights: [
      "Coverage for fire, theft, natural disasters, and accidents.",
      "Quick emergency assistance and replacement of valuables.",
      "Liability protection for visitors and guests.",
      "Secure your home and your peace of mind.",
    ],
    image: "/images/services/home-insurance.jpg",
  },
  {
    title: "Business Insurance",
    highlights: [
      "Protect property, employees, and business continuity.",
      "Financial loss coverage from interruptions.",
      "Plans for all business sizes and sectors.",
      "Focus on growth while we handle risks.",
    ],
    image: "/images/services/business-insurance.jpg",
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

      <div className="relative max-w-6xl mx-auto">
        {/* Botones */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 p-4 bg-[var(--color-accent)] text-black rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 p-4 bg-[var(--color-accent)] text-black rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaChevronRight />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16 p-6 md:p-10 rounded-xl"
          >
            {/* Tarjeta de imagen */}
            <motion.div
              className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={services[index].image}
                alt={services[index].title}
                width={600}
                height={400}
                className="object-cover w-full h-80 md:h-[28rem]"
              />
            </motion.div>

            {/* Información resumida */}
            <div className="md:w-1/2 flex flex-col gap-5 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {services[index].title}
              </h3>
              <div className="flex flex-col gap-3">
                {services[index].highlights.map((point, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {point}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
