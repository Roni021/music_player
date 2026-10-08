"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { MusicPlayer } from "@/components/player/MusicPlayer";
import { prefersReducedMotion } from "@/lib/format";

/** App shell: sidebar, sticky header, scroll chrome, mobile nav and the player. */
export function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stuck, setStuck] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setStuck(window.scrollY > 8);
        setShowToTop(window.scrollY > 500);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  /* Section reveals. Re-registered per route so newly mounted pages animate too. */
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.shown)"));
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("shown");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="scrim" aria-hidden={!menuOpen} onClick={() => setMenuOpen(false)} />

      <div className="app">
        <Sidebar onNavigate={() => setMenuOpen(false)} />
        <main>
          <Header stuck={stuck} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
          <div key={pathname} className="view">
            {children}
          </div>
        </main>
      </div>

      <MobileNavigation />
      <MusicPlayer />

      <button
        type="button"
        className={`to-top${showToTop ? " show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
