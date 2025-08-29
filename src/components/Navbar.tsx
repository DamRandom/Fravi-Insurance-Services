"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 w-full bg-[#F8F9FA]/90 backdrop-blur-md 
      border-b border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="w-[120px] md:w-[140px]">
          <Image
            src="/images/logo.png"
            alt="Fravi Insurance Logo"
            width={500}
            height={70}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-x-6 md:gap-x-10 text-sm font-medium text-[var(--color-primary)]">
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
    </header>
  );
}
