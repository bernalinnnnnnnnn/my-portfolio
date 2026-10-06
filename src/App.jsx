import { useState, useEffect } from 'react';
import {
  Menu, X, Mail, Phone, MapPin, Download, ArrowUpRight, Award,
  GraduationCap, Briefcase, ChevronLeft, ChevronRight, ZoomIn
} from 'lucide-react';
import { portfolioData as d } from './data.js';

// Makes local paths work on any host (root domain or GitHub Pages subpath).
const asset = (p) =>
  /^(https?:|mailto:|tel:)/.test(p) ? p : `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;

const NAV = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['certificates', 'Certificates'],
  ['contact', 'Contact']
];

const CASE_FIELDS = [
  ['role', 'My role'],
  ['problem', 'Problem'],
  ['built', 'What I built'],
  ['result', 'Result']
];

const btnPrimary =
  'inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300';
const btnGhost =
  'inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300';

/* ---------- Shared pieces ---------- */

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="scroll-mt-16 border-t border-white/5 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-violet-400">{eyebrow}</p>
      <h2 className="mb-10 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {children}
    </div>
  </section>
);

const Chip = ({ children }) => (
  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
    {children}
  </span>
);

const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6 ${className}`}>{children}</div>
);

/* ---------- Click-to-preview lightbox (certificates and screenshots) ---------- */

const Lightbox = ({ items, index, setIndex }) => {
  const isOpen = index !== null;
  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = original;
    };
  }, [isOpen, items.length]);

  if (!isOpen || !items[index]) return null;
  const cur = items[index];
  const arrow = 'absolute top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/25';

  return (
    <div
      className="fade-in fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4"
      role="dialog" aria-modal="true" aria-label={cur.caption} onClick={close}
    >
      <button type="button" onClick={close} aria-label="Close preview"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/25">
        <X size={22} />
      </button>
      {items.length > 1 && (
        <>
          <button type="button" aria-label="Previous" className={`${arrow} left-3 md:left-6`}
            onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={26} /></button>
          <button type="button" aria-label="Next" className={`${arrow} right-3 md:right-6`}
            onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={26} /></button>
        </>
      )}
      <div
        className="flex max-h-[88vh] w-full max-w-5xl flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-[80vh] w-full flex-col items-center gap-4 overflow-y-auto md:max-w-[62%]">
          {cur.gallery ? (
            // If the item has a gallery (Certificates section), show all images stacked
            cur.gallery.map((g, i) => (
              <div key={i} className="w-full">
                <img src={asset(g.image)} alt={g.caption} className="w-full rounded-lg bg-white object-contain shadow-2xl" />
                <p className="mt-2 text-center text-xs text-white/70">{g.type}: {g.caption}</p>
              </div>
            ))
          ) : (
            // Fallback for Projects section (single image)
            <img src={cur.src} alt={cur.caption} className="max-h-[80vh] w-full rounded-lg bg-white object-contain shadow-2xl" />
          )}
        </div>
        <div className="max-h-[30vh] w-full overflow-y-auto text-left text-white md:max-h-[80vh] md:w-80 md:shrink-0">
          <p className="text-sm font-semibold md:text-base">{cur.caption}</p>
          {cur.sub && <p className="mt-1 text-xs text-white/60 md:text-sm">{cur.sub}</p>}
          <p className="mt-1 font-mono text-xs text-white/40">{index + 1} of {items.length}</p>
          {cur.link && (
            <a href={cur.link} target="_blank" rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-violet-300 underline hover:text-white">
              Verify credential
            </a>
          )}
          {cur.skills && cur.skills.length > 0 && (
            <div className="mt-4">
              <p className="font-mono text-xs uppercase tracking-wider text-violet-300">
                {cur.skillsLabel || 'Skills acquired'}
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-slate-300">
                {cur.skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------- Header ---------- */

const useActiveSection = (ids) => {
  const [active, setActive] = useState('');
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
};

const Header = ({ onWelcome }) => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV.map(([id]) => id));
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#welcome"
          onClick={(e) => { e.preventDefault(); onWelcome(); }}
          className="text-sm font-semibold text-white md:text-base"
        >
          Bernalyn M. Benedicto<span className="text-violet-400">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}
              className={`rounded-md px-3 py-1.5 text-sm transition ${active === id ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={asset(d.resumeUrl)} download
            className="hidden items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-sm text-slate-200 transition hover:bg-white/5 sm:inline-flex">
            <Download size={14} /> Resume
          </a>
          <button type="button" aria-label="Toggle menu" aria-expanded={open}
            onClick={() => setOpen(!open)} className="rounded-md p-2 text-slate-200 md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-slate-950 px-5 py-3 md:hidden" aria-label="Mobile">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 text-slate-300 hover:text-white">{label}</a>
          ))}
          <a href={asset(d.resumeUrl)} download className="block px-2 py-3 text-violet-300">Download Resume</a>
        </nav>
      )}
    </header>
  );
};

/* ---------- Typing effect (shows the full text at once if reduced motion is on) ---------- */

const Typewriter = ({ text, speed = 65, onDone }) => {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [n, setN] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (n >= text.length) { onDone && onDone(); return; }
    const t = setTimeout(() => setN(n + 1), n === 0 ? 400 : speed);
    return () => clearTimeout(t);
  }, [n]);

  // The invisible full text reserves the space so the layout doesn't jump while typing.
  return (
    <span className="relative block" aria-hidden="true">
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">
        {text.slice(0, n)}
        {n < text.length && <span className="caret" />}
      </span>
    </span>
  );
};

/* ---------- Welcome screen ---------- */

const Welcome = ({ onEnter }) => {
  const [leaving, setLeaving] = useState(false);
  const start = () => {
    setLeaving(true);
    setTimeout(onEnter, 350);
  };
  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center ${leaving ? 'fade-out' : ''}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_40%,rgba(139,92,246,0.22),transparent)]" />
      <img
        src={asset('/images/berna2.jpg')}
        alt={d.name}
        className="pop-in relative h-40 w-40 rounded-full object-cover ring-4 ring-violet-400/40 shadow-[0_0_60px_rgba(139,92,246,0.35)] md:h-56 md:w-56"
      />
      <div className="fade-up relative mt-8" style={{ animationDelay: '0.5s' }}>
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Welcome to my portfolio</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">{d.name}</h1>
        <p className="mt-2 text-slate-400">{d.role} | {d.shortBio}</p>
      </div>
      <button type="button" onClick={start} className={`${btnPrimary} fade-up relative mt-8`} style={{ animationDelay: '0.9s' }}>
        Get to know me more <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

/* ---------- Sections ---------- */

const Hero = () => {
  // The name types first; once it finishes, the photo pops in and the rest fades up.
  const [done, setDone] = useState(false);
  const reveal = done ? 'fade-up' : 'invisible';
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(139,92,246,0.22),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl" aria-label={d.name}>
            <Typewriter text={d.name} onDone={() => setDone(true)} />
          </h1>
          <div className={reveal}>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to Junior Web Developer roles
            </span>
            <p className="mt-5 text-lg text-violet-300 md:text-xl">{d.role} | {d.shortBio}</p>
            <p className="mt-1 font-mono text-sm text-slate-400">{d.tagline}</p>
            {d.learning && d.learning.length > 0 && (
              <p className="mt-1 text-sm text-slate-500">Currently strengthening: {d.learning.join(', ')}</p>
            )}
            {d.openTo && <p className="mt-1 text-sm text-slate-400">{d.openTo}</p>}
            <p className="mt-6 max-w-xl leading-relaxed text-slate-300">{d.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className={btnPrimary}>Get in touch <ArrowUpRight size={16} /></a>
              <a href={asset(d.resumeUrl)} download className={btnGhost}><Download size={16} /> Download Resume</a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {d.facts.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`justify-self-center md:justify-self-end ${done ? 'pop-in' : 'invisible'}`}>
          <img src={asset('/images/berna2.jpg')} alt={d.name}
            className="aspect-square w-56 rounded-2xl object-cover ring-1 ring-white/15 md:w-72" />
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <Section id="about" eyebrow="01 / About" title="Skills and Interests">
    <div className="grid gap-6 md:grid-cols-3">
      {d.skills.map((s) => (
        <Card key={s.group}>
          <h3 className="mb-4 text-sm font-semibold text-white">{s.group}</h3>
          <div className="flex flex-wrap gap-2">{s.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
        </Card>
      ))}
    </div>
    <h3 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-widest text-slate-400">Outside of code</h3>
    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
      {d.hobbies.map((h) => (
        <div key={h.title}>
          <p className="text-sm font-medium text-white">{h.title}</p>
          <p className="mt-1 text-sm text-slate-400">{h.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Experience = () => {
  const edu = d.education;
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Work Experience and Education">
      <ol className="relative ml-2 space-y-10 border-l border-white/10">
        {d.experience.map((job) => (
          <li key={job.role + job.period} className="relative pl-8">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-violet-400 ring-4 ring-slate-950" />
            <p className="font-mono text-xs text-slate-500">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{job.role}</h3>
            <p className="text-sm text-violet-300">{job.company}{job.place && `, ${job.place}`}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <Card className="mt-14">
        <div className="mb-3 flex items-center gap-2 text-violet-400">
          <GraduationCap size={18} /><span className="font-mono text-xs uppercase tracking-widest">Education</span>
        </div>
        <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
        <p className="font-mono text-xs text-slate-500">{edu.place} | {edu.period}</p>
        <p className="mt-3 text-sm text-slate-300">{edu.degree}</p>
        <p className="mt-2 text-sm font-medium text-violet-300">{edu.honors}</p>
        <div className="mt-4 flex flex-wrap gap-2">{edu.awards.map((a) => <Chip key={a}>{a}</Chip>)}</div>
      </Card>
    </Section>
  );
};

const ProjectShots = ({ images, title }) => {
  const [idx, setIdx] = useState(null);
  if (!images || !images.length) return null;
  const items = images.map((im) => ({ src: asset(im.src), caption: im.caption || title, sub: title }));
  return (
    <>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((im, i) => (
          <button key={im.src} type="button" onClick={() => setIdx(i)}
            aria-label={`Preview screenshot: ${im.caption || title}`}
            className="aspect-video overflow-hidden rounded-lg border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
            <img src={asset(im.src)} alt={im.caption || title} loading="lazy"
              className="h-full w-full object-cover transition duration-300 hover:scale-105" />
          </button>
        ))}
      </div>
      <Lightbox items={items} index={idx} setIndex={setIdx} />
    </>
  );
};

const Projects = () => (
  <Section id="projects" eyebrow="03 / Projects" title="Selected work">
    <div className="grid gap-6 md:grid-cols-2">
      {d.projects.map((p) => {
        const [role, techStr = ''] = p.meta.split(' | ');
        const tech = techStr.split(', ').filter(Boolean);
        const rows = CASE_FIELDS.filter(([k]) => p[k]);
        return (
          <Card key={p.title} className="flex flex-col transition hover:border-violet-400/40">
            <p className="font-mono text-xs text-slate-500">{role}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
            {rows.length ? (
              <dl className="mt-3 space-y-3 text-sm">
                {rows.map(([k, label]) => (
                  <div key={k}>
                    <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">{label}</dt>
                    <dd className="mt-0.5 leading-relaxed text-slate-300">{p[k]}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.description}</p>
            )}
            {p.highlight && (
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300">
                <Award size={15} /> {p.highlight}
              </p>
            )}
            <ProjectShots images={p.images} title={p.title} />
            <div className="mt-5 flex flex-wrap gap-2">{tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-violet-300 hover:text-white">
                View project <ArrowUpRight size={15} />
              </a>
            )}
          </Card>
        );
      })}
    </div>

  </Section>
);

const Certificates = () => {
  const all = d.certificates || [];
  const cats = ['All', ...Array.from(new Set(all.map((c) => c.category).filter(Boolean)))];
  const [filter, setFilter] = useState('All');
  const [idx, setIdx] = useState(null);

  const courses = filter === 'All' ? all : all.filter((c) => c.category === filter);

  // Create ONE tile per course, using the coverImage for the card.
  const tiles = courses.map((course) => ({
    src: asset(course.coverImage || course.items[0].image),
    caption: course.title,
    title: course.title,
    sub: [course.category, course.issuer, course.date].filter(Boolean).join(' | '),
    meta: [course.issuer, course.date].filter(Boolean).join(' | '),
    link: course.verifyUrl,
    skills: course.skills,
    skillsLabel: course.skillsLabel,
    gallery: course.items // <-- This passes all the badges/certs to the popup
  }));

  const total = all.reduce((n, c) => n + c.items.length, 0);

  return (
    <Section id="certificates" eyebrow="04 / Certificates" title="Certificates">
      <p className="-mt-6 mb-8 text-sm text-slate-400">
        {total} Certificates and Badges. Click any image to view it in full.
      </p>
      {cats.length > 2 && (
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Certificate categories">
          {cats.map((c) => (
            <button key={c} type="button" role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${filter === c
                ? 'bg-violet-500 text-white' : 'border border-white/10 text-slate-300 hover:bg-white/5'}`}>
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {tiles.map((t, i) => (
          <button key={t.src} type="button" onClick={() => setIdx(i)}
            aria-label={`View certificate: ${t.title}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-slate-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
            <img src={t.src} alt={t.caption} loading="lazy"
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-3 pt-10">
              <p className="line-clamp-2 text-xs font-medium leading-snug text-white md:text-sm">{t.title}</p>
              {t.meta && <p className="mt-0.5 truncate text-[10px] text-slate-400 md:text-xs">{t.meta}</p>}
            </div>
            <div className="pointer-events-none absolute right-2 top-2 rounded-full bg-slate-950/70 p-1.5 opacity-0 transition group-hover:opacity-100">
              <ZoomIn className="h-4 w-4 text-white" />
            </div>
          </button>
        ))}
      </div>
      <Lightbox items={tiles.map((t) => ({ ...t, caption: t.title }))} index={idx} setIndex={setIdx} />
    </Section>
  );
};

const Testimonials = () => {
  const list = d.testimonials || [];
  if (!list.length) return null;
  return (
    <Section id="recommendations" eyebrow="05 / Recommendations" title="What others say">
      <div className="grid gap-6 md:grid-cols-2">
        {list.map((t) => (
          <Card key={t.name}>
            <blockquote className="text-sm leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</blockquote>
            <p className="mt-4 text-sm font-medium text-white">{t.name}</p>
            {t.title && <p className="text-xs text-slate-500">{t.title}</p>}
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" eyebrow={`0${(d.testimonials || []).length ? 6 : 5} / Contact`} title="Let's work together">
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <p className="max-w-md leading-relaxed text-slate-300">
          I'm looking for an entry-level Junior Web Developer position. If you have an opening or a
          project, send me a message and I'll get back to you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${d.email}?subject=Hello%20Bernalyn`} className={btnPrimary}><Mail size={16} /> Email me</a>
          <a href={asset(d.resumeUrl)} download className={btnGhost}><Download size={16} /> Resume</a>
        </div>
      </div>
      <Card>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3 text-slate-300"><Mail size={16} className="text-violet-400" />
            <a href={`mailto:${d.email}`} className="break-all hover:text-white">{d.email}</a></li>
          <li className="flex items-center gap-3 text-slate-300"><Phone size={16} className="text-violet-400" />
            <a href={d.phoneLink} className="hover:text-white">{d.phone}</a></li>
          <li className="flex items-center gap-3 text-slate-300"><MapPin size={16} className="text-violet-400" />
            <span>{d.location}</span></li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
          {d.socials.map((s) => (
            <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm text-slate-300 transition hover:border-violet-400/40 hover:text-white">
              {s.platform} <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </Card>
    </div>
  </Section>
);

export default function App() {
  // Visitors who arrive on a direct link (e.g. /#projects) skip the welcome screen.
  const [entered, setEntered] = useState(
    () => typeof window !== 'undefined' && window.location.hash.length > 1
  );

  const enter = () => {
    window.scrollTo(0, 0);
    setEntered(true);
  };

  const goWelcome = () => {
    // Clear any #section in the address bar so a refresh doesn't skip the welcome page
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
    setEntered(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-violet-500/30">
      {!entered ? (
        <Welcome onEnter={enter} />
      ) : (
        <>
          <Header onWelcome={goWelcome} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certificates />
            <Testimonials />
            <Contact />
          </main>
          <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {d.name}. Built with React and Tailwind CSS.
          </footer>
        </>
      )}
    </div>
  );
}