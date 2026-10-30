import { institutionalData } from "../../config/institutionalData";

export function InstitutionalContactDetails({ language = "pt-BR" }) {
  const isEnglish = language === "en";

  return (
    <aside className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-[var(--axis-muted)]">
      <p><strong className="text-[var(--axis-fg)]">{institutionalData.organizationName}</strong> · {institutionalData.registrationType}</p>
      <p><strong className="text-[var(--axis-fg)]">{isEnglish ? "Reported registered business name" : "Nome empresarial informado"}:</strong> {institutionalData.registeredBusinessName || (isEnglish ? "Pending" : "Pendente")}</p>
      <p><strong className="text-[var(--axis-fg)]">{isEnglish ? "Responsible party" : "Responsável"}:</strong> {institutionalData.responsibleName}</p>
      <p><strong className="text-[var(--axis-fg)]">{isEnglish ? "Reported CNPJ" : "CNPJ informado"}:</strong> {institutionalData.taxId}</p>
      <p><strong className="text-[var(--axis-fg)]">{isEnglish ? "Contact address" : "Endereço de contato"}:</strong> {institutionalData.contactAddress || (isEnglish ? "Pending" : "Pendente")}</p>
      {institutionalData.contactAddress && !institutionalData.contactAddressComplete ? <p className="text-xs leading-5">{isEnglish ? "Partial address: neighborhood, city/state, and postal code pending." : "Endereço parcial: bairro, cidade/UF e CEP pendentes."}</p> : null}
      <p>
        <strong className="text-[var(--axis-fg)]">{isEnglish ? "Privacy" : "Privacidade"}:</strong>{" "}
        <a className="text-cyan-300 hover:text-cyan-200" href={`mailto:${institutionalData.privacyEmail}`}>{institutionalData.privacyEmail}</a>
      </p>
      <p>
        <strong className="text-[var(--axis-fg)]">{isEnglish ? "Official website" : "Site oficial"}:</strong>{" "}
        <a className="text-cyan-300 hover:text-cyan-200" href={institutionalData.officialWebsite} target="_blank" rel="noopener noreferrer">{institutionalData.officialWebsite}</a>
      </p>
    </aside>
  );
}
