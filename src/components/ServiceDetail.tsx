"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import { useService } from "@/context/ServiceContext";

import enAbout from "@/locales/en/insurance.json";
import esAbout from "@/locales/es/insurance.json";

export default function AboutUs() {
  const { lang } = useLanguage();
  const { selected } = useService();

  // Select texts by language
  const texts = lang === "ES" ? esAbout : enAbout;

  // Services data
  const services = useMemo(
    () => [
      {
        key: "auto",
        title: texts.auto.title,
        paragraphs: texts.auto.paragraphs,
      },
      {
        key: "home",
        title: texts.home.title,
        paragraphs: texts.home.paragraphs,
      },
      {
        key: "business",
        title: texts.business.title,
        paragraphs: texts.business.paragraphs,
      },
    ],
    [texts]
  );

  const current = services.find((s) => s.key === selected)!;

  const ease = "easeOut";
  const enterDur = 0.6;

  return (
    <section className="bg-white text-[var(--color-black)] py-20 px-6 md:px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          className="max-w-5xl mx-auto text-center text-lg md:text-xl leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: enterDur, ease }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-center text-[#1A3D8F] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: enterDur, ease }}
          >
            {current.title}
          </motion.h2>

          {current.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: enterDur,
                delay: idx * 0.1,
                ease,
              }}
              dangerouslySetInnerHTML={{ __html: p }} // Render HTML safely
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
