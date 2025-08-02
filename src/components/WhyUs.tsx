"use client";

import { FaShieldAlt, FaDollarSign, FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShieldAlt size={28} />,
    title: "Trusted Coverage",
    description:
      "We work with reliable providers to ensure your policy is tailored, stable, and protects what matters most.",
  },
  {
    icon: <FaDollarSign size={28} />,
    title: "Fair, Honest Pricing",
    description:
      "No hidden fees or gimmicks. Just affordable, transparent rates you can actually trust.",
  },
  {
    icon: <FaRegClock size={28} />,
    title: "Quick & Simple Process",
    description:
      "Say goodbye to paperwork and endless phone calls. Get covered in minutes, fully online.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-[var(--color-black)]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-[var(--color-primary)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Fravi Insurance?
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="space-y-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[var(--color-accent)] text-black rounded-full shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
