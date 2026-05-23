"use client";

import React from "react";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";
import { navigationItems } from "./data/navigation";
import { DynamicNavigation } from "./lightswind/dynamic-navigation";
import { MagneticCursor } from "./lightswind/magnetic-cursor";
import { ScrollStarEffect } from "./lightswind/scroll-star-effect";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020916] font-sans text-white selection:bg-cyan-400 selection:text-[#020916]">
      <MagneticCursor />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <ScrollStarEffect />
      </div>

      <div className="relative z-10">
        <DynamicNavigation items={navigationItems} logo="/logo-axis.png" />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
