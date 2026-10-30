"use client";

import { useSitePreferences } from "../../context/site-preferences";
import { siteLegalDocuments } from "../../data/siteLegalDocuments";
import { institutionalData } from "../../config/institutionalData";
import { InstitutionalContactDetails } from "./InstitutionalContactDetails";

const links = [
  { scope: "privacy", href: "https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares", pt: "ANPD: direitos dos titulares", en: "ANPD: data subject rights" },
];

export function LegalDocumentPage({ kind }) {
  const { language } = useSitePreferences();
  const text = siteLegalDocuments[language] || siteLegalDocuments["pt-BR"];
  const isPrivacy = kind === "privacy";
  const sections = isPrivacy ? text.privacy : text.terms;
  const title = isPrivacy ? text.privacyTitle : text.termsTitle;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
      <header className="mx-auto max-w-3xl py-10 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">AXIS · {language === "en" ? "LEGAL" : "DOCUMENTOS"}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.05em] text-[var(--axis-fg)] sm:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-7 text-[var(--axis-muted)]">{isPrivacy ? text.privacyIntro : text.termsIntro}</p>
        <p className="mt-4 text-xs leading-5 text-[var(--axis-muted)]">{text.updated}</p>
        <div className="mt-4"><InstitutionalContactDetails language={language} /></div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label={language === "en" ? "Document index" : "Índice do documento"} className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-5 lg:sticky lg:top-6">
          <h2 className="text-sm font-semibold text-[var(--axis-fg)]">{language === "en" ? "Contents" : "Neste documento"}</h2>
          <ol className="mt-4 space-y-2.5">{sections.map(([sectionTitle], index) => <li key={sectionTitle}><a className="text-xs leading-5 text-[var(--axis-muted)] transition hover:text-cyan-300" href={`#section-${index + 1}`}>{String(index + 1).padStart(2, "0")} · {sectionTitle}</a></li>)}</ol>
          <div className="mt-5 border-t border-white/10 pt-4 text-xs"><a className="text-cyan-300 hover:text-cyan-200" href={isPrivacy ? institutionalData.legalPaths.terms : institutionalData.legalPaths.privacy}>{isPrivacy ? text.termsTitle : text.privacyTitle} →</a></div>
        </nav>

        <article className="min-w-0 max-w-3xl">
          {sections.map(([sectionTitle, body], index) => <section key={sectionTitle} id={`section-${index + 1}`} className="scroll-mt-8 border-b border-white/10 py-6 first:pt-0"><h2 className="text-lg font-semibold leading-7 text-[var(--axis-fg)]"><span className="mr-2 text-cyan-400">{index + 1}.</span>{sectionTitle}</h2><p className="mt-3 text-sm leading-7 text-[var(--axis-muted)] sm:text-base">{body}</p>{isPrivacy && ["Seus direitos", "Your rights"].includes(sectionTitle) ? <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--axis-muted)]">{links.filter((link) => link.scope === "privacy").map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-200">{language === "en" ? link.en : link.pt}</a></li>)}</ul> : null}</section>)}
          <div className="mt-8 flex flex-wrap gap-4 text-sm"><a href={institutionalData.legalPaths.terms} className="text-cyan-300 hover:text-cyan-200">{text.termsTitle}</a><a href={institutionalData.legalPaths.privacy} className="text-cyan-300 hover:text-cyan-200">{text.privacyTitle}</a><a href="/axisclipes" className="text-cyan-300 hover:text-cyan-200">AXIS CLIPES</a></div>
        </article>
      </div>
    </div>
  );
}
