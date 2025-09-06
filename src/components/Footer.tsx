"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-[#292E30] to-[#0A0F12] text-[#C8A048] text-sm 
      shadow-[0_-4px_12px_rgba(0,0,0,0.4)] font-[TrajanPro] uppercase tracking-wide"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="col-span-1 md:col-span-2">
            <div className="w-[160px] mb-5">
              <Image
                src="/images/logo.png"
                alt="Fravi Insurance Logo"
                width={500}
                height={70}
                className="w-full h-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
              />
            </div>
            <p className="text-[#E6C878]/80 normal-case font-normal leading-relaxed max-w-md text-[0.95rem]">
              Comprehensive insurance solutions built on trust and transparency. 
              Protecting your future with professionalism and integrity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-[0.8rem] text-[#E6C878]">Explore</h3>
            <ul className="space-y-2 normal-case font-normal text-sm">
              {["Home", "Services", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative transition-all duration-300 hover:text-[#E6C878]
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E6C878]
                    after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[0.8rem] text-[#E6C878]">Contact</h3>
            <ul className="space-y-2 normal-case font-normal text-sm text-[#E6C878]/80">
              <li>+1 (555) 123-4567</li>
              <li>info@fraviinsurance.com</li>
              <li>123 Main Street, Miami, FL</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#E6C878]/20" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#E6C878]/60 normal-case font-normal">
            © {new Date().getFullYear()} Fravi Insurance. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E6C878]/40 
                text-[#E6C878]/80 hover:bg-[#E6C878] hover:border-[#E6C878] hover:text-black transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
