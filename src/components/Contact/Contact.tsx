import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { socials } from "@/data/nav";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const inputClass =
  "w-full rounded-lg border border-line bg-surface/60 px-4 py-3 text-sm text-text-primary outline-none transition-shadow focus:border-electric/50 focus:shadow-[0_0_0_3px_rgba(77,124,255,0.15)]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!configured) {
      const data = new FormData(form);
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
      const body = encodeURIComponent(
        `${data.get("message")}\n\nReply to: ${data.get("email")}`
      );
      window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[120px]" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <p className="mono-label mb-4 text-xs text-cyan">Contact</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Let's build something intelligent.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-text-secondary">
                I'm interested in AI engineering opportunities, internships, collaborations, and
                ambitious projects.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-10 flex flex-col gap-3">
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
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 sm:p-8">
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
                    className={inputClass}
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
                    className={inputClass}
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
                    className={`${inputClass} resize-none`}
                    placeholder="What are you building?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-text-primary px-6 py-3.5 text-sm font-medium text-void transition-transform hover:scale-[1.01] disabled:opacity-70"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight
                        size={15}
                        weight="bold"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "sent" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="status"
                      className="text-xs text-cyan"
                    >
                      Message sent — I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="alert"
                      className="text-xs text-magenta"
                    >
                      Couldn't send right now — email me directly at{" "}
                      <a href={`mailto:${socials.email}`} className="underline">
                        {socials.email}
                      </a>
                      .
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
