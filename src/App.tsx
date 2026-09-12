/**
 * hast.uz - the public page.
 *
 * The product is an app, so the page shows the app. Not a stock photograph of
 * a kitchen, not an illustration of a house: the actual screens somebody will
 * be looking at ten seconds after they tap the button. A visitor decides
 * whether to install from what the thing looks like, and hiding that behind
 * adjectives only delays the decision.
 *
 * The middle of the page is one handset that travels with the reader: right for
 * the first chapter, banking across to the left for the second, back to the
 * right for the third, changing screen as each one arrives. It is the cheapest
 * honest way to show three parts of an app in sequence - the reader never loses
 * the device, and nothing has to be claimed in words that the screen can show.
 *
 * Two claims here are deliberately modest. Termiz is the only city with
 * listings, and the page says so at the top rather than implying national
 * coverage; and there are no invented user counts, because the first person who
 * installs it and finds an empty city is a person lost for good.
 */

import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';

import { Mark } from './Mark';
import { ChatScreen, FeedScreen, OwnerScreen, Phone } from './Phone';

const APP_LINK = '/ilova';
const BOT_LINK = 'https://t.me/HAST_Mobile_bot';
const PRIVACY = '/maxfiylik';
const TERMS = '/shartlar';

export function App() {
  return (
    <>
      <Hero />
      <Showcase />
      <ForOwners />
      <Safety />
      <Closing />
      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Motion                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Whether the visitor has asked for less movement.
 *
 * Read as a live query rather than once at mount: somebody who turns the
 * setting on mid-visit, usually because the page has just made them feel
 * unwell, should not have to reload to be listened to.
 */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);

    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}

/**
 * Drifts an element against the scroll.
 *
 * Written straight to `style.transform` inside a rAF rather than through React
 * state: this runs on every scroll frame, and re-rendering a tree of SVG
 * handsets sixty times a second to move one box is how a smooth page becomes a
 * stuttering one.
 */
function useParallax(strength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduced) {
      node.style.transform = '';
      return;
    }

    let frame = 0;

    const apply = () => {
      frame = 0;

      const shift = -window.scrollY * strength;
      const tilt = 1.6 - window.scrollY * 0.003;

      node.style.transform =
        'translate3d(0,' + shift.toFixed(1) + 'px,0) rotate(' + tilt.toFixed(2) + 'deg)';
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
      node.style.transform = '';
    };
  }, [reduced, strength]);

  return ref;
}

/* -------------------------------------------------------------------------- */

function Hero() {
  const phone = useParallax(0.055);

  return (
    <header className="aurora relative overflow-hidden">
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="/" className="flex items-center gap-2.5" aria-label="HAST">
          <Mark className="h-9 w-9" />
          <span className="text-xl font-extrabold tracking-tight text-white">HAST</span>
        </a>

        <a
          href={APP_LINK}
          className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
        >
          Ilovani olish
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-10 lg:grid-cols-[1.05fr_auto] lg:gap-8 lg:pb-28 lg:pt-14">
        <div>
          <span className="animate-rise inline-flex items-center gap-2 rounded-full bg-brand-400/15 px-3.5 py-1.5 text-[12.5px] font-bold text-brand-300 ring-1 ring-brand-400/25">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Hozircha faqat Termiz shahrida
          </span>

          <h1 className="animate-rise mt-5 text-[42px] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[64px]">
            Maklersiz ijara uy
            <br />
            va{' '}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-teal bg-clip-text text-transparent">
              sherik topish
            </span>
            .
          </h1>

          <p className="animate-rise mt-6 max-w-prose text-[17px] leading-relaxed text-white/70">
            Uy egasi bilan to‘g‘ridan-to‘g‘ri yozishing. Oraliqda hech kim yo‘q,
            komissiya yo‘q. Ijarani bo‘lishish uchun sherik ham shu yerda.
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3">
            <a
              href={APP_LINK}
              className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 font-extrabold text-ink shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <AndroidIcon />
              Android uchun ilova
            </a>

            <a
              href={BOT_LINK}
              className="inline-flex items-center gap-2.5 rounded-2xl bg-white/10 px-7 py-4 font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              <TelegramIcon />
              Telegram bot
            </a>
          </div>

          <p className="mt-5 text-[13.5px] text-white/45">
            Ro‘yxatdan o‘tish Telegram orqali — SMS kodini kutmaysiz.
            iPhone versiyasi tayyorlanmoqda.
          </p>
        </div>

        <div className="animate-rise flex justify-center lg:justify-end">
          {/* Parallax on the outside, the idle float on the inside, so the two
              transforms never fight over the same element. */}
          <div ref={phone} className="will-change-transform">
            <div className="animate-float">
              <Phone label="HAST ilovasi: e‘lonlar ro‘yxati">
                <FeedScreen />
              </Phone>
            </div>
          </div>
        </div>
      </div>

      <div className="hairline relative z-10" />

      {/* The facts belong inside the hero's own background. Given a section of
          their own they would repaint the gradient from its origin, and the
          restart shows up as a hard band across the page. */}
      <Proof />
    </header>
  );
}

/** Four facts, each of which is true today. No invented numbers. */
function Proof() {
  const facts: [string, string][] = [
    ['0%', 'Komissiya'],
    ['2 ta', 'Bepul e‘lon'],
    ['0 so‘m', 'Xabar almashish'],
    ['Termiz', 'Ishga tushgan shahar'],
  ];

  return (
    <section className="relative z-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-10 sm:grid-cols-4">
        {facts.map(([value, label]) => (
          <div key={label} className="px-3 py-3 text-center">
            <p className="text-[26px] font-extrabold tracking-tight text-white sm:text-3xl">{value}</p>
            <p className="mt-1 text-[12.5px] font-semibold text-white/50">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* The scrolling showcase                                                     */
/* -------------------------------------------------------------------------- */

const CHAPTERS: { n: string; title: string; body: string; screen: ReactNode; label: string }[] = [
  {
    n: '01',
    title: 'Uy tanlang',
    body:
      'Narx, xonalar soni, hudud va universitetga yaqinlik bo‘yicha filtrlang. ' +
      'Suratlarni e‘lonni ochmasdan varaqlang. Topga chiqarilgan e‘lonlar ' +
      'alohida belgilanadi — sizdan hech narsa yashirilmaydi.',
    screen: <FeedScreen />,
    label: 'HAST ilovasi: e‘lonlar ro‘yxati',
  },
  {
    n: '02',
    title: 'Egasiga yozing',
    body:
      'Maklersiz, to‘g‘ridan-to‘g‘ri. Raqamingizni bermay turib yozasiz — ' +
      'kelishsangiz, raqamni o‘zingiz ochasiz. Xabar almashish butunlay bepul.',
    screen: <ChatScreen />,
    label: 'HAST ilovasi: uy egasi bilan yozishuv',
  },
  {
    n: '03',
    title: 'Yoki o‘zingiz e‘lon joylang',
    body:
      'Ikkita faol e‘lon — bepul va muddatsiz. Kim ko‘rganini, kim saqlaganini ' +
      'va kim yozganini ko‘rib turasiz. Muddati tugashidan oldin ogohlantiramiz.',
    screen: <OwnerScreen />,
    label: 'HAST ilovasi: e‘lon statistikasi',
  },
];

/**
 * Carries the handset across the page as the section is scrolled.
 *
 * It does not slide in a straight line. The horizontal position follows a
 * cosine, so the phone leaves and arrives at rest and is quickest in the middle
 * - the motion a thing with mass actually has. Chapter one has it on the right,
 * chapter two on the left, chapter three back on the right, and because the
 * chapter centres sit at one sixth, one half and five sixths of the scroll, one
 * cosine passes through all three without a single hand-placed keyframe.
 *
 * Three things ride on the same phase so the flight reads as one movement
 * rather than four effects:
 *
 *   bank    the handset turns to face where it is going, and is square to the
 *           reader again wherever it comes to rest
 *   arc     it lifts slightly at the midpoint, so the path is a curve
 *   recede  it shrinks a little in flight, as something further away does
 *
 * Everything is written straight to `style.transform` inside a rAF. This runs
 * on every scroll frame, and re-rendering a tree of SVG handsets sixty times a
 * second to move one box is how a smooth page becomes a stuttering one.
 */
function useTravel(section: RefObject<HTMLElement | null>) {
  const rail = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = rail.current;
    const host = section.current;
    if (!node || !host) return;

    if (reduced) {
      node.style.transform = '';
      return;
    }

    let frame = 0;

    const apply = () => {
      frame = 0;

      const box = host.getBoundingClientRect();
      const scrollable = box.height - window.innerHeight;
      const progress = scrollable <= 0 ? 0 : clamp(-box.top / scrollable, 0, 1);

      // Held before the first chapter is centred and after the last, so the
      // phone is still while anybody is actually reading beside it.
      const p = clamp(progress, FIRST_STOP, LAST_STOP);
      const phase = ((p - FIRST_STOP) / (MIDDLE_STOP - FIRST_STOP)) * Math.PI;

      // 0 at the right-hand stops, 1 at the left-hand one.
      const across = (1 - Math.cos(phase)) / 2;
      const swing = Math.sin(phase);

      const span = Math.max(0, node.parentElement!.clientWidth - node.offsetWidth);

      node.style.transform = [
        'translate3d(' + ((1 - across) * span).toFixed(1) + 'px,',
        (-Math.abs(swing) * 22).toFixed(1) + 'px,0)',
        'rotateY(' + (swing * -16).toFixed(2) + 'deg)',
        'rotate(' + (swing * -5).toFixed(2) + 'deg)',
        'scale(' + (1 - Math.abs(swing) * 0.045).toFixed(4) + ')',
      ].join(' ');
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== 0) cancelAnimationFrame(frame);
      node.style.transform = '';
    };
  }, [reduced, section]);

  return rail;
}

// Where the three chapters are centred in the section's scroll, which is also
// where the handset comes to rest.
const FIRST_STOP = 1 / 6;
const MIDDLE_STOP = 1 / 2;
const LAST_STOP = 5 / 6;

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function Showcase() {
  const [active, setActive] = useState(0);
  const section = useRef<HTMLElement>(null);
  const chapters = useRef<(HTMLElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();
  const rail = useTravel(section);

  // The chapter holding the middle of the screen is the one on the handset. A
  // band rather than a line, so a slow scroll cannot flicker between two.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const index = chapters.current.indexOf(entry.target as HTMLElement);
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: '-46% 0px -46% 0px' },
    );

    for (const node of chapters.current) {
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Heading eyebrow="Qanday ishlaydi" title="Uch qadam, oʻrtada hech kimsiz." />

      <div className="relative mt-10">
        {/*
          The travelling layer. Absolutely positioned so it takes no space in
          the flow, with a sticky child that pins it to the middle of the
          screen for as long as the chapters beside it last.
        */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
          <div className="sticky top-0 flex h-dvh items-center [perspective:1400px]">
            <div ref={rail} className="will-change-transform">
              <Phone label={CHAPTERS[active]?.label ?? 'HAST ilovasi'}>
                {CHAPTERS.map((chapter, i) => (
                  <div
                    key={chapter.n}
                    className={
                      'absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ' +
                      (i === active
                        ? 'translate-x-0'
                        : i < active
                          ? '-translate-x-full'
                          : 'translate-x-full')
                    }
                  >
                    {chapter.screen}
                  </div>
                ))}
              </Phone>
            </div>
          </div>
        </div>

        {/*
          A tail, so the sticky layer still has travel left while the last
          chapter is centred. A sticky element is released the moment its
          parent's bottom edge reaches it, and with three full-height chapters
          the release lands exactly on chapter three - the handset slides away
          precisely while somebody is reading beside it.
        */}
        <ol className="relative lg:pb-[26vh]">
          {CHAPTERS.map((chapter, i) => (
            <li
              key={chapter.n}
              ref={(node) => {
                chapters.current[i] = node;
              }}
              className={
                'flex flex-col justify-center py-10 lg:min-h-dvh lg:py-0 ' +
                // The handset is on the right, then the left, then the
                // right again - so the text takes the opposite side each time.
                (i === 1 ? 'lg:items-end' : 'lg:items-start')
              }
            >
              <div
                className={
                  'transition-opacity duration-500 lg:max-w-[46%] ' +
                  (reduced || i === active ? 'opacity-100' : 'lg:opacity-30')
                }
              >
                <span className="font-mono text-[13px] font-bold text-brand-600">{chapter.n}</span>

                <h3 className="mt-2 text-[26px] font-extrabold leading-tight tracking-tight sm:text-[32px]">
                  {chapter.title}
                </h3>

                <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-ink-soft">
                  {chapter.body}
                </p>
              </div>

              {/* Narrow screens get the handset inline, under its own chapter:
                  there is no second column for it to travel across. */}
              <div className="mt-8 flex justify-center lg:hidden">
                <Phone label={chapter.label}>{chapter.screen}</Phone>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ForOwners() {
  const benefits = [
    'Raqamingiz e‘londa ko‘rinmaydi',
    'Kim qiziqqanini va nechta ko‘rganini ko‘rasiz',
    'Muddati tugashidan oldin ogohlantiramiz',
    'Soxta e‘lon va maklerlar tekshiriladi',
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Heading eyebrow="Uy egasiga" title="E‘lon joylash bepul." />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="max-w-prose text-[17px] leading-relaxed text-ink-soft">
              Ikkita faol e‘lon — hech qanday to‘lovsiz, muddatsiz. Ko‘proq kerak
              bo‘lsa tarifni kengaytirasiz; e‘loningizni ro‘yxat boshiga chiqarish
              ham alohida.
            </p>

            <ul className="mt-8 space-y-3.5">
              {benefits.map((line) => (
                <li key={line} className="flex gap-3">
                  <Tick />
                  <span className="text-ink-soft">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-canvas p-7 ring-1 ring-line sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[17px] font-extrabold tracking-tight">Bepul tarif</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-[11.5px] font-extrabold text-brand-700 ring-1 ring-brand-100">
                Doimiy
              </span>
            </div>

            <dl className="mt-5">
              {[
                ['Faol e‘lon', '2 ta'],
                ['Rasm', '15 tagacha'],
                ['Xabar almashish', 'Cheksiz'],
                ['Komissiya', 'Yo‘q'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-line py-3 text-[15px] last:border-0"
                >
                  <dt className="text-ink-muted">{label}</dt>
                  <dd className="font-bold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Safety() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Heading eyebrow="Ehtiyot bo‘ling" title="Har bir e‘lonni kafolatlay olmaymiz." />

      <div className="mt-12 rounded-3xl border border-gold/25 bg-gold/[0.07] p-8 sm:p-10">
        <p className="max-w-prose text-[17px] leading-relaxed text-ink-soft">
          E‘lonlarni tekshirishga harakat qilamiz va shikoyatlarni ko‘rib chiqamiz,
          lekin hech bir platforma har bir e‘lonning haqiqiyligini to‘liq kafolatlay
          olmaydi. Shuning uchun:
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            'Uyni o‘z ko‘zingiz bilan ko‘ring',
            'Ko‘rmasdan va hujjatni tekshirmasdan oldindan pul bermang',
            'Shartnomani yozma tuzing',
            'Shubhali e‘lon uchrasa — «Shikoyat» tugmasini bosing',
          ].map((line) => (
            <li key={line} className="flex gap-3 text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Closing() {
  return (
    <section className="aurora relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center sm:py-28">
        <Mark className="mx-auto h-14 w-14" />

        <h2 className="mt-7 text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
          Termizda uy qidiryapsizmi?
        </h2>

        <p className="mx-auto mt-5 max-w-prose text-[17px] leading-relaxed text-white/70">
          Ilovani yuklab oling va uy egasiga bugun yozing.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={APP_LINK}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 font-extrabold text-ink shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
          >
            <AndroidIcon />
            Android uchun ilova
          </a>
          <a
            href={BOT_LINK}
            className="inline-flex items-center gap-2.5 rounded-2xl bg-white/10 px-7 py-4 font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            <TelegramIcon />
            Telegram bot
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Mark className="h-8 w-8" />
          <span className="text-[13.5px] text-ink-muted">HAST · Termiz, O‘zbekiston</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13.5px]">
          <a href={PRIVACY} className="text-ink-muted underline-offset-4 hover:text-ink hover:underline">
            Maxfiylik siyosati
          </a>
          <a href={TERMS} className="text-ink-muted underline-offset-4 hover:text-ink hover:underline">
            Foydalanish shartlari
          </a>
          <a href={BOT_LINK} className="text-ink-muted underline-offset-4 hover:text-ink hover:underline">
            Qo‘llab-quvvatlash
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-[30px] font-extrabold leading-[1.12] tracking-tight sm:text-[40px]">
        {title}
      </h2>
    </div>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.14" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.6 9.5H6.4a.6.6 0 0 0-.6.6v6.3a1.5 1.5 0 0 0 1.5 1.5h.4v2.3a1.2 1.2 0 0 0 2.4 0v-2.3h3.6v2.3a1.2 1.2 0 0 0 2.4 0v-2.3h.4a1.5 1.5 0 0 0 1.5-1.5v-6.3a.6.6 0 0 0-.6-.6ZM4.2 9.5A1.2 1.2 0 0 0 3 10.7v4.6a1.2 1.2 0 0 0 2.4 0v-4.6a1.2 1.2 0 0 0-1.2-1.2Zm15.6 0a1.2 1.2 0 0 0-1.2 1.2v4.6a1.2 1.2 0 0 0 2.4 0v-4.6a1.2 1.2 0 0 0-1.2-1.2ZM15.3 4.6l.9-1.5a.3.3 0 0 0-.5-.3l-1 1.6a6.2 6.2 0 0 0-4.6 0l-1-1.6a.3.3 0 1 0-.5.3l.9 1.5A5.2 5.2 0 0 0 6.2 8.5h11.6a5.2 5.2 0 0 0-2.5-3.9ZM9.4 6.9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm5.2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M21.7 4.3 2.9 11.6c-.9.4-.9 1.6 0 1.9l4.6 1.5 1.8 5.4c.2.7 1.1.9 1.6.3l2.5-2.6 4.7 3.5c.6.4 1.4.1 1.6-.6l3-15.3c.2-.8-.6-1.5-1.4-1.2ZM9.6 14.6l-.5 3.7-1.2-3.9 9-5.7-7.3 5.9Z" />
    </svg>
  );
}
