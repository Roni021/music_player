"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { ResolvedTheme, ThemeMode } from "@/types/music";

interface ThemeApi {
  mode: ThemeMode;
  theme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

const STORAGE_KEY = "mm:theme";
const ThemeContext = createContext<ThemeApi | null>(null);

const systemTheme = (): ResolvedTheme =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

/**
 * Theme state. The document attribute is also set by an inline script in the root
 * layout so the first paint is already correct; this provider keeps it in sync.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [theme, setTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    let stored: ThemeMode = "system";
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw === "dark" || raw === "light" || raw === "system") stored = raw;
    } catch {
      /* storage unavailable */
    }
    setModeState(stored);
    setTheme(stored === "system" ? systemTheme() : stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0a0b14" : "#f4f2ef");
  }, [theme]);

  useEffect(() => {
    if (mode !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => setTheme(systemTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    setTheme(next === "system" ? systemTheme() : next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const toggle = useCallback(() => setMode(theme === "dark" ? "light" : "dark"), [setMode, theme]);

  const value = useMemo<ThemeApi>(() => ({ mode, theme, setMode, toggle }), [mode, theme, setMode, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeApi {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside <ThemeProvider>");
  return context;
}

/** Runs before hydration so the correct palette is painted immediately. */
export const themeBootstrapScript = `
(function(){try{var m=localStorage.getItem('${STORAGE_KEY}')||'system';
var t=m==='system'?(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):m;
document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();
`;
