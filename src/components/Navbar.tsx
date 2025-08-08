"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md 
      border-b border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="w-[140px]">
          <Image
            src="/images/logo.png"
            alt="Fravi Insurance Logo"
            width={500}
            height={70}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        <nav className="flex items-center space-x-8 text-sm font-semibold text-[var(--color-primary)]">
          {["Home", "Services", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative transition-all duration-300 hover:text-[var(--color-accent)]
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-accent)]
              after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
