"use client";
import { useState, useEffect } from "react";
import content from "@/data/content.json";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { site, navigation } = content;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-[10px] bg-slate-950 flex items-center justify-center text-white font-bold text-[15px] tracking-tight">
                S
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white group-hover:scale-125 transition-transform" />
            </div>
            <span className="font-semibold tracking-tight text-[17px] text-slate-900">
              {site.shortName}
              <span className="text-slate-400 font-normal ml-1.5 text-[13px] hidden sm:inline">{site.domain}</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[14px] font-[450] text-slate-600 hover:text-slate-950 rounded-full hover:bg-slate-100 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-5 text-[14px] font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Démarrer un projet
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-full bg-slate-900 text-white"
            aria-label="Menu"
          >
            <div className="w-4 flex flex-col gap-1">
              <span className={`block h-0.5 bg-white transition-all ${isMobileOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isMobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-b border-slate-200 bg-white ${
          isMobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="flex py-3 text-[17px] font-[450] text-slate-700 hover:text-slate-950 border-b border-slate-100 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-slate-900 text-white font-medium"
          >
            Démarrer un projet →
          </a>
          <div className="pt-4 text-[13px] text-slate-500">
            <p>{site.contact.email}</p>
            <p className="mt-1">{site.contact.phoneDisplay}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
