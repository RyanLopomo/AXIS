import { institutionalData } from "./institutionalData";

export function absoluteSiteUrl(path = "") {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || institutionalData.officialWebsite;
  if (!configuredUrl) return undefined;

  try {
    return new URL(path, configuredUrl).toString();
  } catch {
    return undefined;
  }
}

export function pageMetadata({ title, description, path, image }) {
  const url = absoluteSiteUrl(path);
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title,
      description,
      type: "website",
      ...(url ? { url } : {}),
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
