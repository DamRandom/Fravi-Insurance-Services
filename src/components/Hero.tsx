"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[85vh] relative flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Capa oscura + blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Contenido */}
      <div className="z-10 max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-2xl">
          Protection You Can Trust, Service You’ll Remember
        </h1>
        <p className="text-md md:text-lg text-white/90 font-light max-w-xl mx-auto mb-8 drop-shadow-md">
          Serving families and businesses across Florida, Texas, and Virginia with customized insurance solutions.
        </p>
        <a
          href="#"
          className="inline-block bg-[var(--color-accent)] text-[var(--color-black)] px-6 py-3 rounded-md font-semibold text-sm shadow-md hover:bg-yellow-400 transition-all duration-200"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
