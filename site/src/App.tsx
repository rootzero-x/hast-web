/**
 * hast.uz - the public page.
 *
 * The product is an app, so the page shows the app. Not a stock photograph of
 * a kitchen, not an illustration of a house: the actual screens somebody will
 * be looking at ten seconds after they tap the button. A visitor decides
 * whether to install from what the thing looks like, and hiding it behind
 * adjectives only delays that decision.
 *
 * Two claims on this page are deliberately modest. Termiz is the only city
 * with listings, and the page says so at the top rather than implying national
 * coverage; and there are no invented user counts, because the first person
 * who installs it and finds an empty city is a person lost for good.
 */

import type { ReactNode } from 'react';

import { Mark } from './Mark';
import { ChatScreen, FeedScreen, OwnerScreen, Phone } from './Phone';

const APP_LINK = 'https://694fc8f1e1918.myxvest1.ru/rental-app/open/';
const BOT_LINK = 'https://t.me/HAST_Mobile_bot';
const PRIVACY = 'https://694fc8f1e1918.myxvest1.ru/rental-app/legal/?doc=privacy';
const TERMS = 'https://694fc8f1e1918.myxvest1.ru/rental-app/legal/?doc=terms';

export function App() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ForOwners />
      <Safety />
      <Closing />
      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Hero() {
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
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 font-extrabold text-ink shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
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

        {/* The handset sits slightly low and tilted, so it reads as an object on
            the page rather than a picture pasted onto it. */}
        <div className="animate-rise flex justify-center lg:justify-end">
          <div className="animate-float">
            <Phone label="HAST ilovasi: e‘lonlar ro‘yxati" className="rotate-[1.5deg]">
              <FeedScreen />
            </Phone>
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

/* -------------------------------------------------------------------------- */

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

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Raqamingizni tasdiqlang',
    body:
      'Telegram orqali, bir bosishda. SMS kodini kutish ham, uni yozib olish ham ' +
      'kerak emas.',
  },
  {
    n: '02',
    title: 'Uy tanlang',
    body:
      'Narx, xonalar soni, hudud va universitetga yaqinlik bo‘yicha filtrlang. ' +
      'Suratlarni e‘lonni ochmasdan varaqlang.',
  },
  {
    n: '03',
    title: 'Egasiga yozing',
    body:
      'Raqamingizni bermay turib yozasiz. Kelishsangiz — raqamni o‘zingiz ochasiz.',
  },
];

function HowItWorks() {
  return (
    <Section
      eyebrow="Qanday ishlaydi"
      title="Uch qadam, o‘rtada hech kimsiz."
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <ol className="space-y-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="group flex gap-4 rounded-3xl bg-white p-6 ring-1 ring-line transition hover:ring-brand-300"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-50 text-[13px] font-extrabold text-brand-600 ring-1 ring-brand-100">
                {step.n}
              </span>
              <span>
                <h3 className="text-[17px] font-extrabold tracking-tight">{step.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{step.body}</p>
              </span>
            </li>
          ))}
        </ol>

        <div className="flex justify-center lg:justify-end">
          <Phone label="HAST ilovasi: uy egasi bilan yozishuv" className="rotate-[-1.5deg]">
            <ChatScreen />
          </Phone>
        </div>
      </div>
    </Section>
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

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <Phone label="HAST ilovasi: e‘lon statistikasi" className="rotate-[1.5deg]">
              <OwnerScreen />
            </Phone>
          </div>

          <div className="order-1 lg:order-2">
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

            <div className="mt-9 rounded-3xl bg-canvas p-7 ring-1 ring-line">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[17px] font-extrabold tracking-tight">Bepul tarif</h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[11.5px] font-extrabold text-brand-700 ring-1 ring-brand-100">
                  Doimiy
                </span>
              </div>

              <dl className="mt-5 space-y-0">
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
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function Safety() {
  return (
    <Section eyebrow="Ehtiyot bo‘ling" title="Har bir e‘lonni kafolatlay olmaymiz.">
      <div className="rounded-3xl border border-gold/25 bg-gold/[0.07] p-8 sm:p-10">
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
    </Section>
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

/* -------------------------------------------------------------------------- */

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

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Heading eyebrow={eyebrow} title={title} />
      <div className="mt-12">{children}</div>
    </section>
  );
}

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
