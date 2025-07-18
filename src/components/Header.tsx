"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("navbar-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`bg-[var(--color-white)] border-b border-gray-100 shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "py-2" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className={`transition-all duration-300 ${isSticky ? "w-[140px]" : "w-[180px]"}`}>
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
        <nav className="flex items-center space-x-8 text-[15px] font-medium text-[var(--color-primary)]">
          {["Home", "Services", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative pb-1 transition-all duration-200 hover:text-[var(--color-accent)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-accent)] after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
