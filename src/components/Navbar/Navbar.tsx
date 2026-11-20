import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { navLinks, socials } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";

const IDS = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#top" className="glass rounded-full px-5 py-2.5 font-display text-sm font-semibold tracking-tight">
            Aung<span className="text-electric">.</span>
          </a>

          <nav className="glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex">
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
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-inset ring-electric/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
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
            type="button"
            className="glass flex items-center justify-center rounded-full p-3 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-void bg-grid px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                  className="border-b border-line-soft py-4 font-display text-3xl text-text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + navLinks.length * 0.06, duration: 0.4, ease: "easeOut" }}
                className="mt-6 flex items-center gap-2 text-lg text-cyan"
              >
                Resume <ArrowUpRight size={16} weight="bold" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
