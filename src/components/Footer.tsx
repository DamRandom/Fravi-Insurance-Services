"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#06061B] text-sm shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="col-span-1 md:col-span-2">
            <div className="w-[150px] mb-5">
              <Image
                src="/images/logo.png"
                alt="Fravi Insurance Logo"
                width={500}
                height={70}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md text-[0.95rem]">
              Comprehensive insurance solutions built on trust and transparency.
              Protecting your future with professionalism and integrity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-gray-800 text-[0.8rem]">
              Explore
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-gray-800 text-[0.8rem]">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>+1 (555) 123-4567</li>
              <li>info@fraviinsurance.com</li>
              <li>123 Main Street, Miami, FL</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Fravi Insurance. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-black transition"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
