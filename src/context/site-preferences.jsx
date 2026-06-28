"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const SitePreferencesContext = createContext(null);

export function SitePreferencesProvider({ children }) {
  const [language, setLanguage] = useState("pt-BR");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("axis-language");
    const storedTheme = window.localStorage.getItem("axis-theme");

    if (storedLanguage === "pt-BR" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("axis-language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("axis-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      isDark: theme === "dark",
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark")),
    }),
    [language, theme],
  );

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error("useSitePreferences must be used inside SitePreferencesProvider");
  }

  return context;
}
