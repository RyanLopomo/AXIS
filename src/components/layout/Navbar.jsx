import React from "react";
import { ArrowUpRight } from "lucide-react";
import { navigationItems } from "../../data/navigation";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#020916]/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="text-xl font-black tracking-[0.22em] text-white">
          AXIS
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/62 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
        >
          Contato <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
