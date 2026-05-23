import React from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../lightswind/magnetic-button";
import { splineSceneUrl } from "../config/spline";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-cyan-300/5" />,
});

function SplineFallback() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#041225]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.34),transparent_30%),radial-gradient(circle_at_32%_72%,rgba(59,130,246,0.22),transparent_34%)]" />
      <div className="absolute inset-12 rounded-full border border-cyan-300/20" />
      <div className="absolute inset-24 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/45 bg-cyan-300/10 shadow-[0_0_90px_rgba(34,211,238,0.32)]" />
      <div className="absolute bottom-8 left-8 right-8 flex justify-between text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
        <span>AXIS</span>
        <span>Digital Lab</span>
      </div>
    </div>
  );
}

function SplineScene() {
  const isSplineCode = splineSceneUrl.endsWith(".splinecode");

  if (isSplineCode) {
    return (
      <Spline
        scene={splineSceneUrl}
        className="absolute left-1/2 top-0 h-full w-[150%] [transform:translateX(-50%)_scaleX(-1)_scale(0.72)] [transform-origin:center]"
      />
    );
  }

  return (
    <iframe
      title="AXIS 3D"
      src={splineSceneUrl}
      className="absolute left-1/2 top-0 h-full w-[150%] border-0 [transform:translateX(-50%)_scaleX(-1)_scale(0.72)] [transform-origin:center]"
      allow="autoplay; fullscreen; xr-spatial-tracking"
    />
  );
}

export function Hero() {
  const enableSpline = process.env.NEXT_PUBLIC_ENABLE_SPLINE === "true";

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,153,255,0.24),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(0,255,255,0.10),transparent_30%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div data-animate className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="pointer-events-auto absolute bottom-0 right-0 top-20 w-[72vw] overflow-hidden md:w-[64vw] lg:w-[58vw]">
          {enableSpline ? <SplineScene /> : <SplineFallback />}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#020916] via-[#020916]/70 to-transparent" />

      <div className="pointer-events-none relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-animate className="max-w-2xl">
          <div className="mb-8 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 backdrop-blur-md">
            Tecnologia • Design • Performance
          </div>

          <h1 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-7xl lg:text-7xl">
            Experiências digitais que elevam marcas.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/64 md:text-lg">
            A AXIS cria sites, sistemas e interfaces premium com foco em design, performance e tecnologia.
          </p>

          <div className="pointer-events-auto mt-10 flex flex-wrap gap-4">
            <MagneticButton asChild>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-[#020916] shadow-[0_0_42px_rgba(34,211,238,0.38)] transition hover:bg-cyan-300">
                Ver portfólio <ArrowUpRight size={18} />
              </a>
            </MagneticButton>

            <MagneticButton asChild>
              <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-cyan-300/60 hover:text-cyan-300">
                Fale conosco <ArrowUpRight size={18} />
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}

