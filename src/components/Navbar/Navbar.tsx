import { useEffect, useRef, useState } from "react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { navLinks, socials } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { gsap } from "@/lib/gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        overlayRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.out" }
      );
      gsap.fromTo(
        ".mobile-link",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.2, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className={`glass rounded-full px-5 py-2.5 font-display text-sm font-semibold tracking-tight transition-opacity ${
              scrolled ? "opacity-100" : "opacity-90"
            }`}
          >
            Aung<span className="text-electric">.</span>
          </a>

          <nav
            className={`glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex transition-all duration-500 ${
              scrolled ? "opacity-100" : "opacity-90"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-inset ring-electric/30" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            className="glass hidden items-center gap-1.5 rounded-full px-4 py-2.5 text-sm text-text-primary transition-colors hover:text-cyan md:flex"
          >
            Resume <ArrowUpRight size={14} weight="bold" />
          </a>

          <button
            className="glass flex items-center justify-center rounded-full p-3 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-void bg-grid px-8 md:hidden ${
          menuOpen ? "" : "pointer-events-none"
        }`}
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link border-b border-line-soft py-4 font-display text-3xl text-text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            className="mobile-link mt-6 flex items-center gap-2 text-lg text-cyan"
          >
            Resume <ArrowUpRight size={16} weight="bold" />
          </a>
        </nav>
      </div>
    </>
  );
}
