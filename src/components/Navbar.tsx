"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 py-3 px-4 md:px-8
      bg-gradient-to-r from-white/90 via-white/70 via-15% to-transparent
      backdrop-blur-xl
      shadow-[0_8px_24px_rgba(0,0,0,0.4)] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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

        <nav className="flex items-center space-x-8 text-sm font-medium text-[var(--color-primary)]">
          {["Home", "Services", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative transition-all duration-300 hover:text-[var(--color-accent)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-accent)] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
