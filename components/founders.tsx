"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, GraduationCap, Linkedin, Mail, MapPin, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { EducationItem, ExperienceItem, Founder } from "@/data/founders";

/* Scroll-reveal wrapper — fades/rises content in as it enters the viewport.
   Runs once, on the real browser; used across the sections below the hero. */
const EASE = [0.22, 1, 0.36, 1] as const;
function Reveal({ children, className, delay = 0, y = 30 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedParagraph({ paragraph, keywords }: { paragraph: string; keywords: string[] }) {
  const orderedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  const matcher = new RegExp(`(${orderedKeywords.map(escapeRegExp).join("|")})`, "gi");
  return (
    <>
      {paragraph.split(matcher).map((part, index) =>
        orderedKeywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase()) ? (
          <strong className="keyword" key={`${part}-${index}`}>{part}</strong>
        ) : (
          part
        )
      )}
    </>
  );
}

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "founders", label: "Founders" },
  { id: "compare", label: "Compare" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

/* ============================ Fixed side rail ============================ */
export function SideRail() {
  return (
    <>
      {/* Desktop vertical rail */}
      <aside className="rail fixed left-0 top-0 z-50 hidden h-screen w-20 flex-col items-center justify-between py-7 lg:flex">
        <a href="#top" className="display-font text-lg font-bold text-white">
          E<span className="gold-text">.</span>
        </a>
        <nav className="flex flex-col items-center gap-6">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rail-link group flex items-center gap-3" aria-label={s.label}>
              <span className="rail-dot h-2 w-2 rounded-full bg-current group-hover:scale-150" />
              <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-md border border-[var(--line)] bg-[var(--panel)] px-2 py-1 text-[11px] font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {s.label}
              </span>
            </a>
          ))}
        </nav>
        <a href="#contact" className="rail-link -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em]">
          Connect
        </a>
      </aside>

      {/* Mobile top bar */}
      <header className="topbar sticky top-0 z-50 lg:hidden">
        <div className="page-shell flex items-center justify-between gap-3 py-4">
          <a href="#top" className="display-font shrink-0 text-lg font-bold text-white">
            Edgecipline<span className="gold-text">.</span>
          </a>
          <a href="#contact" className="btn-gold inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm">
            Connect <ArrowUpRight size={15} />
          </a>
        </div>
      </header>
    </>
  );
}

/* ============================ Full-screen hero =========================== */
export function FounderHero({ founders }: { founders: Founder[] }) {
  const glance = ["Product + technology", "Operations + people"];
  return (
    <section id="top" className="scene relative flex min-h-[760px] flex-col justify-center overflow-hidden py-20">
      <div className="grid-bg absolute inset-0" />
      <div className="blob blob-gold drift" style={{ width: 420, height: 420, top: "-6%", right: "4%" }} />
      <div className="blob blob-iris drift-slow" style={{ width: 360, height: 360, bottom: "2%", left: "-4%" }} />

      <div className="page-shell relative">
        <div className="enter max-w-4xl">
          <span className="eyebrow mb-7 flex">People behind the work · 2026</span>
          <h1 className="display-font text-[2.75rem] font-bold leading-[0.95] sm:text-8xl lg:text-[8.5rem]">
            Meet the <span className="gold-text">Founders</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Meet the two professionals behind Edgecipline, bringing together technology, business education, operations,
            administration and organizational execution.
          </p>
        </div>

        {/* Dual portrait tiles — both founders shown up front */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2">
          {founders.map((founder, i) => (
            <a
              key={founder.id}
              href="#founders"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              className="enter iri group relative overflow-hidden rounded-3xl card-hover"
            >
              <div className="flex items-stretch gap-4 p-4 sm:gap-5 sm:p-6">
                <div className="relative w-24 shrink-0 sm:w-32">
                  <HeroThumb founder={founder} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                  <div>
                    <span className="display-font text-sm font-bold gold-text">0{i + 1}</span>
                    <h2 className="display-font mt-1 text-2xl font-semibold text-white sm:text-3xl">{founder.name}</h2>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{glance[i]}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold)]">
                    View profile <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--faint)]">
          <ArrowDown size={15} className="bob text-[var(--gold)]" />
          Scroll to explore the full briefing
        </div>
      </div>
    </section>
  );
}

function HeroThumb({ founder }: { founder: Founder }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="photo-placeholder aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--line-strong)]">
      {!failed ? (
        <img src={founder.image} alt={founder.alt} onError={() => setFailed(true)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="display-font text-3xl font-bold gold-text">{founder.initials}</span>
        </div>
      )}
    </div>
  );
}

/* ===================== Interactive founder showcase ===================== */
export function FounderShowcase({ founders }: { founders: Founder[] }) {
  const [active, setActive] = useState(0);
  const founder = founders[active];
  const glance = ["Product, Technology & Strategy", "Operations, Administration & People"];

  return (
    <section id="founders" className="scene scroll-mt-24 py-24 sm:py-32">
      <div className="page-shell">
        <div className="mb-12 flex flex-col gap-8 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow mb-5 flex">The founders</span>
            <h2 className="display-font text-4xl font-bold leading-[1.02] sm:text-6xl">
              Two leaders,
              <br />
              <span className="gold-text">one direction.</span>
            </h2>
          </div>

          {/* Segmented toggle */}
          <div className="seg relative flex w-full max-w-md p-1.5 lg:w-auto">
            <motion.div
              className="seg-thumb absolute inset-y-1.5 rounded-full"
              initial={false}
              animate={{ left: active === 0 ? "6px" : "50%", right: active === 0 ? "50%" : "6px" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            />
            {founders.map((f, i) => (
              <button
                key={f.id}
                data-active={active === i}
                onClick={() => setActive(i)}
                className="seg-btn flex-1 whitespace-nowrap px-5 py-2.5 text-sm font-semibold"
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={founder.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16"
          >
            {/* Sticky portrait column */}
            <div className="min-w-0">
              <div className="lg:sticky lg:top-10">
                <FounderImage founder={founder} />
                <div className="iri mt-5 rounded-2xl p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">Current remit</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white">{founder.role}</p>
                  <p className="mt-1 text-xs text-[var(--faint)]">{glance[active]} · Edgecipline</p>
                  <a
                    className="btn-gold group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${founder.name} on LinkedIn`}
                  >
                    <Linkedin size={16} /> View LinkedIn
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Dossier column */}
            <div className="min-w-0">
              <div className="glass mb-10 rounded-3xl p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <span className="eyebrow flex">Executive brief</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--faint)]">Key terms highlighted</span>
                </div>
                <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)]">
                  {founder.summary.map((paragraph) => (
                    <p key={paragraph}>
                      <HighlightedParagraph paragraph={paragraph} keywords={founder.keywords} />
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-10 border-t border-[var(--line)] pt-10 xl:grid-cols-2">
                <EducationSection items={founder.education} />
                <ProfessionalFocus founder={founder} />
              </div>

              <div className="mt-12 border-t border-[var(--line)] pt-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="eyebrow flex">Career journey</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--faint)]">The path that shaped the role</span>
                </div>
                <CareerTimeline items={founder.experience} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function FounderImage({ founder }: { founder: Founder }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative">
      <div className="photo-glow" />
      <div className="photo-frame photo-placeholder group">
        {!failed && (
          <img src={founder.image} alt={founder.alt} onError={() => setFailed(true)} className="relative z-[1] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
        )}
        {failed && (
          <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center text-center">
            <span className="display-font text-7xl font-bold gold-text">{founder.initials}</span>
            <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">Professional portrait placeholder</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 z-[3] flex items-center justify-between px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
          <span>{founder.name}</span>
          <span className="gold-text">Founder</span>
        </div>
      </div>
    </div>
  );
}

export function EducationSection({ items }: { items: EducationItem[] }) {
  return (
    <section>
      <span className="eyebrow mb-6 flex"><GraduationCap size={14} /> Education</span>
      <div className="space-y-4">
        {items.map((item) => (
          <div className="iri rounded-2xl p-5 card-hover" key={item.degree}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--gold)]">{item.period}</p>
            <h4 className="display-font mt-2 text-xl font-semibold leading-tight text-white">{item.degree}</h4>
            <p className="mt-2 text-sm font-medium text-[var(--muted)]">{item.institution}</p>
            {item.specialization && <p className="mt-1 text-xs text-[var(--faint)]">{item.specialization}</p>}
            {item.location && (
              <p className="mt-1 flex items-center gap-1 text-xs text-[var(--faint)]"><MapPin size={12} />{item.location}</p>
            )}
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProfessionalFocus({ founder }: { founder: Founder }) {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="eyebrow flex">Professional focus</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--faint)]">Responsibility</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {founder.professionalFocus.slice(0, 4).map((item, index) => (
          <div className="iri rounded-2xl p-4 card-hover" key={item}>
            <span className="display-font text-sm font-bold gold-text">0{index + 1}</span>
            <p className="mt-3 text-xs font-semibold leading-5 text-white">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {founder.professionalFocus.slice(4).map((item) => (
          <span className="focus-chip rounded-full px-3 py-2 text-xs" key={item}>{item}</span>
        ))}
      </div>
      {founder.technicalNote && (
        <p className="mt-7 rounded-r-lg border-l-2 border-[var(--gold)] bg-[rgba(232,180,92,0.05)] py-3 pl-4 text-sm italic leading-6 text-[var(--muted)]">
          {founder.technicalNote}
        </p>
      )}
    </section>
  );
}

export function CareerTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative space-y-4 pl-8">
      <div className="timeline-line absolute bottom-6 left-[5px] top-6" />
      {items.map((item, index) => (
        <div className="timeline-entry relative p-5 sm:p-6" key={`${item.title}-${item.organization}`}>
          <span className="absolute -left-[38px] top-7 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--gold)] ring-4 ring-[rgba(232,180,92,0.15)]">
            <span className="h-1 w-1 rounded-full bg-[#0a0a0a]" />
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="display-font text-xs font-bold uppercase tracking-[0.1em] text-[var(--gold)]">0{index + 1}</p>
            <p className="text-xs font-medium text-[var(--faint)]">{item.period || item.duration}</p>
          </div>
          <h4 className="display-font mt-2 text-xl font-semibold text-white">{item.title}</h4>
          <p className="mt-1 text-sm font-medium text-[var(--muted)]">
            {item.organization}
            {item.location && <span className="text-[var(--faint)]"> · {item.location}</span>}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">{item.description}</p>
          {item.note && <p className="mt-3 text-xs italic text-[var(--gold)]">{item.note}</p>}
        </div>
      ))}
    </div>
  );
}

/* ==================== Diverging split comparison ======================== */
export function FounderComparison({ founders }: { founders: Founder[] }) {
  const lists: Record<string, string[]> = {
    sourav: ["Business and management education", "Product development", "Software engineering", "Technology strategy", "Technical execution", "Structured problem-solving"],
    munavvir: ["Operations management", "Administration", "Human resources", "Payroll and compliance coordination", "Client and vendor communication", "Organizational execution"],
  };
  return (
    <section id="compare" className="scene scroll-mt-24 overflow-hidden border-y border-[var(--line)] bg-[var(--bg-soft)] py-24 sm:py-32">
      <div className="blob blob-iris drift" style={{ width: 340, height: 340, top: "10%", left: "40%" }} />
      <div className="page-shell relative">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-5 inline-flex">At a glance</span>
          <h2 className="display-font text-4xl font-bold leading-[1.04] sm:text-5xl">Complementary Professional Backgrounds</h2>
        </Reveal>

        <div className="relative grid gap-4 md:grid-cols-2 md:gap-0">
          {/* center divider node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            <div className="iri flex h-14 w-14 items-center justify-center rounded-full">
              <Plus size={20} className="text-[var(--gold)]" />
            </div>
          </motion.div>

          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, x: i === 0 ? -36 : 36, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
              className={`glass card-hover p-8 sm:p-10 ${i === 0 ? "rounded-3xl md:rounded-r-none md:border-r-0" : "rounded-3xl md:rounded-l-none"}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.14em] text-[var(--gold)] ${i === 1 ? "md:text-right" : ""}`}>{founder.name}</p>
              <ul className="mt-6 space-y-3.5">
                {lists[founder.id].map((item) => (
                  <li key={item} className={`flex items-start gap-2.5 text-sm text-[var(--muted)] ${i === 1 ? "md:flex-row-reverse md:text-right" : ""}`}>
                    <Check size={15} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-8 text-[var(--muted)]">
            Together, Sourav and Munavvir combine technical capability, business education, operational experience and
            people management. Their backgrounds provide Edgecipline with balanced leadership across product development
            and company execution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================== Bento highlights grid ========================= */
export function ProfessionalHighlights() {
  const cards = [
    ["01", "Technology and Business", "Sourav combines management education with practical full-stack software-development experience.", "lg:col-span-3"],
    ["02", "7+ Years of Operations Experience", "Munavvir brings extensive administration, HR and operations experience across India and the UAE.", "lg:col-span-3"],
    ["03", "Complementary Leadership", "The founders bring separate but connected strengths across product, technology, operations and people management.", "lg:col-span-2"],
    ["04", "Practical Execution", "Both founders have experience managing real responsibilities, professional communication and day-to-day execution.", "lg:col-span-4"],
  ] as const;
  return (
    <section id="highlights" className="page-shell scene scroll-mt-24 py-24 sm:py-32">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow mb-4 flex">Professional highlights</span>
          <h2 className="display-font text-4xl font-bold sm:text-6xl">What they bring</h2>
        </div>
        <div className="hidden h-px w-1/4 bg-gradient-to-r from-[var(--gold)] to-transparent sm:block" />
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-6">
        {cards.map(([number, title, description, span], idx) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE, delay: idx * 0.09 }}
            className={`iri group relative overflow-hidden rounded-3xl p-8 card-hover sm:p-10 ${span}`}
          >
            <span className="display-font text-sm font-bold tracking-[0.16em] gold-text">{number}</span>
            <h3 className="display-font mt-12 max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">{title}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">{description}</p>
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(232,180,92,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================== Contact ================================= */
export function FounderContact({ founders }: { founders: Founder[] }) {
  return (
    <section id="contact" className="scene scroll-mt-24 overflow-hidden border-t border-[var(--line)] py-24 sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="blob blob-gold drift" style={{ width: 380, height: 380, top: "-8%", right: "6%" }} />
      <div className="page-shell relative grid gap-14 lg:grid-cols-2 lg:items-end">
        <Reveal>
          <span className="eyebrow flex">Open a conversation</span>
          <h2 className="display-font mt-6 max-w-xl text-5xl font-bold leading-[0.98] sm:text-7xl">
            Connect with <span className="gold-text">the Founders</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-7 text-[var(--muted)]">
            For investor and professional enquiries, reach out directly to the people shaping Edgecipline.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
              className="iri rounded-3xl p-7 card-hover"
            >
              <p className="display-font text-2xl font-semibold text-white">{founder.name}</p>
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{founder.role}</p>
              <div className="mt-8 flex flex-col gap-3">
                {/* Primary CTA — LinkedIn, highlighted so it's the obvious click-through */}
                <a
                  className="btn-gold group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold"
                  href={founder.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${founder.name} on LinkedIn`}
                >
                  <Linkedin size={17} /> View LinkedIn Profile
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  className="link-button inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em]"
                  href={founder.links.email}
                  aria-label={`Email ${founder.name}`}
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================== Footer ================================= */
export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="page-shell flex flex-col gap-5 py-10 text-xs text-[var(--faint)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold text-white">Edgecipline — Founder Profiles</span>
          <span className="mx-2 text-[var(--gold)]">/</span>
          Professional backgrounds of the founders behind Edgecipline.
        </div>
        <a href="#top" className="flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--gold)]">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
