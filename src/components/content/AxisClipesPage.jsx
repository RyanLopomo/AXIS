"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, BrainCircuit, Captions, Check, Clapperboard, Download, FileVideo, FolderOpen, Globe2, Laptop, Play, ShieldCheck, Sparkles } from "lucide-react";
import { useSitePreferences } from "../../context/site-preferences";
import { axisClipesResources } from "../../data/axisClipesResources";
import { axisClipesPageCopy as copy } from "../../data/axisClipesPageCopy";
import { institutionalData } from "../../config/institutionalData";
import { InstitutionalContactDetails } from "./InstitutionalContactDetails";

const stepIcons = [FileVideo, BrainCircuit, Clapperboard, Download];

export function AxisClipesPage() {
  const { language, theme } = useSitePreferences();
  const text = copy[language] || copy["pt-BR"];
  const image = theme === "dark" ? "/Dark/01_dark.png" : "/Bright/01_bright.png";

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <section className="grid min-h-[70svh] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200"><Sparkles size={14} /> {text.badge}</span>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">AXIS</p>
          <h1 className="mt-2 text-5xl font-bold tracking-[-0.06em] text-[var(--axis-fg)] sm:text-6xl lg:text-7xl">{text.title}</h1>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-tight text-[var(--axis-fg)] sm:text-3xl">{text.subtitle}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--axis-muted)]">{text.intro}</p>
          <a href="#funcionalidades" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#04101e] transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{text.featureButton}<ArrowDown size={17} /></a>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--axis-muted)]">{text.status}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--axis-muted)]">{text.launchModel}</p>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-[#061426] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:rounded-[2rem] sm:p-3">
          <Image src={image} alt={text.imageAlt} width={1800} height={1000} priority sizes="(max-width: 1024px) 100vw, 55vw" style={{ viewTransitionName: "axis-clipes-cover" }} className="h-auto w-full rounded-xl object-contain sm:rounded-2xl" />
          <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-[#020916]/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">{text.badge}</span>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="how-title">
        <SectionTitle id="how-title">{text.how}</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {text.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return <article key={step} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"><div className="flex items-center justify-between"><Icon size={22} className="text-cyan-300" /><span className="text-xs font-bold tracking-[0.16em] text-cyan-300">0{index + 1}</span></div><h3 className="mt-6 text-lg font-semibold text-[var(--axis-fg)]">{step}</h3><p className="mt-3 text-sm leading-6 text-[var(--axis-muted)]">{text.stepText[index]}</p></article>;
          })}
        </div>
        <p className="mt-4 text-xs leading-5 text-[var(--axis-muted)]">{text.status}</p>
      </section>

      <section id="funcionalidades" className="scroll-mt-8 py-12 sm:py-16" aria-labelledby="features-title">
        <SectionTitle id="features-title">{text.features}</SectionTitle>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{text.featureItems.map((feature) => <div key={feature} className="flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-[var(--axis-fg)]"><Check size={17} className="shrink-0 text-cyan-300" />{feature}</div>)}</div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="info-title"><SectionTitle id="info-title">{text.important}</SectionTitle><div className="mt-8 grid gap-4 sm:grid-cols-2">{text.info.map(([title, body], index) => { const Icon = [Laptop, Globe2, FolderOpen, ShieldCheck, Sparkles][index]; return <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"><Icon size={21} className="text-cyan-300" /><h3 className="mt-4 font-semibold text-[var(--axis-fg)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--axis-muted)]">{body}</p></article>; })}</div></section>

      <section className="mt-8 rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/[0.1] via-white/[0.025] to-transparent p-6 sm:p-10" aria-labelledby="follow-title">
        <h2 id="follow-title" className="text-2xl font-bold tracking-tight text-[var(--axis-fg)] sm:text-3xl">{text.follow}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--axis-muted)]">{text.followText}</p>
        {axisClipesResources.length ? <ul className="mt-6 grid gap-3 sm:grid-cols-2">{axisClipesResources.filter((resource) => { try { return new URL(resource.url).protocol === "https:"; } catch { return false; } }).map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between rounded-xl border border-white/10 px-4 text-sm text-[var(--axis-fg)] hover:border-cyan-300/45">{resource.title}<ArrowUpRight size={17} className="text-cyan-300" /></a></li>)}</ul> : <p className="mt-6 flex items-center gap-2 text-sm text-[var(--axis-muted)]"><Play size={16} className="text-cyan-300" />{text.noLinks}</p>}
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm"><span className="text-[var(--axis-muted)]">{text.links}</span><a className="text-cyan-300 hover:text-cyan-200" href={institutionalData.legalPaths.terms}>{text.terms}</a><a className="text-cyan-300 hover:text-cyan-200" href={institutionalData.legalPaths.privacy}>{text.privacy}</a></div>
        <div className="mt-5"><InstitutionalContactDetails language={language} /></div>
      </section>
    </div>
  );
}

function SectionTitle({ id, children }) { return <h2 id={id} className="text-2xl font-bold tracking-[-0.04em] text-[var(--axis-fg)] sm:text-3xl">{children}</h2>; }
