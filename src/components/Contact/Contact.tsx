import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { socials } from "@/data/nav";
import { useGsapReveal } from "@/animations/useGsapReveal";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".contact-reveal");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[120px]" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="contact-reveal mono-label mb-4 text-xs text-cyan">Contact</p>
            <h2 className="contact-reveal font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Let's build something intelligent.
            </h2>
            <p className="contact-reveal mt-5 max-w-sm text-base leading-relaxed text-text-secondary">
              I'm interested in AI engineering opportunities, internships, collaborations, and
              ambitious projects.
            </p>

            <div className="contact-reveal mt-10 flex flex-col gap-3">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-cyan"
              >
                <EnvelopeSimple size={16} /> {socials.email}
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-cyan"
              >
                <GithubLogo size={16} /> GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-cyan"
              >
                <LinkedinLogo size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-reveal glass rounded-2xl p-7 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mono-label mb-2 block text-[11px] text-text-tertiary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-line bg-surface/60 px-4 py-3 text-sm text-text-primary outline-none transition-shadow focus:border-electric/50 focus:shadow-[0_0_0_3px_rgba(77,124,255,0.15)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mono-label mb-2 block text-[11px] text-text-tertiary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-line bg-surface/60 px-4 py-3 text-sm text-text-primary outline-none transition-shadow focus:border-electric/50 focus:shadow-[0_0_0_3px_rgba(77,124,255,0.15)]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mono-label mb-2 block text-[11px] text-text-tertiary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-line bg-surface/60 px-4 py-3 text-sm text-text-primary outline-none transition-shadow focus:border-electric/50 focus:shadow-[0_0_0_3px_rgba(77,124,255,0.15)]"
                  placeholder="What are you building?"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-text-primary px-6 py-3.5 text-sm font-medium text-void transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message sent"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
