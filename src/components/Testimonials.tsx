"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Fast, simple, and transparent. I saved more than I expected and the service is top-notch.",
    name: "Anthony M.",
    rating: 5,
  },
  {
    quote:
      "Finally, an insurance company that makes things easy. The quotes are honest and the process was smooth.",
    name: "Sara L.",
    rating: 5,
  },
  {
    quote:
      "Customer support answered every question and the coverage fits perfectly. Highly recommended.",
    name: "Javier R.",
    rating: 5,
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.978a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.978c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.286-3.978a1 1 0 00-.364-1.118L2.047 9.405c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.978z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white text-[var(--color-black)] py-20 px-6 md:px-12">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Real Customers. Real Quotes.
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-16">
        {testimonials.map(({ quote, name, rating }, i) => (
          <motion.figure
            key={i}
            className="relative pl-6 border-l-4 border-[var(--color-accent)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
          >
            <blockquote className="text-lg md:text-xl italic text-gray-800 leading-relaxed mb-3">
              <span className="text-[3rem] text-[var(--color-accent)] leading-none align-top">“</span>
              {quote}
            </blockquote>

            <figcaption className="flex justify-between items-center">
              <span className="font-semibold text-[var(--color-accent)]">{name}</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} filled={idx < rating} />
                ))}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
