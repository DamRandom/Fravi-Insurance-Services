"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-white text-[var(--color-black)] py-20 px-6 md:px-12">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Fravi Insurance Service
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto text-center text-lg md:text-xl leading-relaxed text-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="mb-6">
          At <span className="font-semibold text-[var(--color-accent)]">Fravi Insurance Service</span>,
          we specialize in protecting what matters most. From <strong>auto</strong> and <strong>home</strong>
          coverage to <strong>business</strong> solutions, we provide tailored insurance plans that give
          our clients peace of mind.
        </p>
        <p className="mb-6">
          Operating across <strong>Florida</strong>, <strong>Texas</strong>, and <strong>Virginia</strong>,
          our dedicated team combines local expertise with industry-leading policies to ensure you’re
          always covered — without overpaying.
        </p>
        <p>
          With over <strong>15 years of experience</strong> and thousands of satisfied customers,
          Fravi Insurance Service is committed to transparency, simplicity, and unmatched service.
          Whether you’re protecting your car, your home, or your business, we’re here to make sure
          you’re covered every step of the way.
        </p>
      </motion.div>
    </section>
  );
}

