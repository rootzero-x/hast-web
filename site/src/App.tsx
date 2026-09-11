/**
 * hast.uz — the public page.
 *
 * One page, because there is one thing to say: HAST puts a tenant and an owner
 * in touch without a broker in between, and the app is how you do it. A
 * marketing site with five sections nobody reads is worse than one page that
 * answers the only three questions a visitor actually has — what is this, is it
 * real, and how do I get it.
 *
 * The honest framing matters here. Termiz is the only city with listings today,
 * and the page says so rather than implying national coverage; somebody who
 * installs the app expecting Tashkent and finds nothing is a person lost for
 * good.
 */

import { Mark, Wordmark } from './Mark';

const APP_LINK = 'https://694fc8f1e1918.myxvest1.ru/rental-app/open/';
const BOT_LINK = 'https://t.me/HAST_Mobile_bot';

export function App() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForOwners />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-paper/80 backdrop-blur-lg dark:border-white/5 dark:bg-[#0A1310]/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a href="/" className="flex items-center gap-2.5" aria-label="HAST">
          <Mark className="h-9 w-9" />
          <Wordmark />
        </a>

        <a
          href={APP_LINK}
          className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
        >
          Ilovani olish
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Two soft washes of brand colour rather than a photograph. A stock
          photo of a flat that is not on HAST would be the first thing on the
          page that is not true. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(900px 520px at 15% -10%, rgba(34,194,116,0.28), transparent 62%),' +
            'radial-gradient(760px 460px at 88% 6%, rgba(18,162,95,0.18), transparent 64%)',
        }}
      />

      <div className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pt-24">
        <p className="animate-rise text-sm font-semibold uppercase tracking-widest text-brand-600">
          Termiz shahri
        </p>

        <h1 className="animate-rise mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Uy egasi bilan
          <br />
          <span className="text-brand-600">toʻgʻridan-toʻgʻri.</span>
        </h1>

        <p className="animate-rise mt-6 max-w-prose text-lg leading-relaxed text-ink-soft dark:text-[#B9CCC3]">
          Maklersiz ijara uy toping yoki ijarani boʻlishish uchun sherik toping.
          Komissiya yoʻq, oraliqda hech kim yoʻq — eʼlon egasi bilan ilovada
          yozishasiz.
        </p>

        <div className="animate-rise mt-9 flex flex-wrap gap-3">
          <a
            href={APP_LINK}
            className="rounded-2xl bg-brand-600 px-7 py-4 font-bold text-white shadow-xl shadow-brand-600/25 transition hover:bg-brand-700"
          >
            Android uchun ilova
          </a>
          <a
            href={BOT_LINK}
            className="rounded-2xl border border-black/10 bg-white/80 px-7 py-4 font-bold transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Telegram bot
          </a>
        </div>

        <p className="mt-5 text-sm text-ink-muted dark:text-[#8CA096]">
          iPhone versiyasi tayyorlanmoqda.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

const STEPS = [
  {
    n: '01',
    title: 'Raqamingizni tasdiqlang',
    body:
      'Telegram orqali, bir bosishda. SMS kodini kutish yoʻq, yozib olish yoʻq — ' +
      'Telegram raqamingizni oʻzi tasdiqlaydi.',
  },
  {
    n: '02',
    title: 'Uy tanlang',
    body:
      'Narx, xonalar soni, hudud va universitetga yaqinlik boʻyicha filtrlang. ' +
      'Kartada koʻring. Suratlarni eʼlonni ochmasdan varaqlang.',
  },
  {
    n: '03',
    title: 'Egasiga yozing',
    body:
      'Raqamingizni bermay turib yozishing mumkin. Kelishsangiz — raqamni ' +
      'oʻzingiz ochasiz.',
  },
];

function HowItWorks() {
  return (
    <Section title="Qanday ishlaydi">
      <ol className="grid gap-5 sm:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="rounded-3xl border border-black/5 bg-white/70 p-7 backdrop-blur dark:border-white/5 dark:bg-white/[0.04]"
          >
            <span className="font-mono text-sm font-bold text-brand-600">{step.n}</span>
            <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft dark:text-[#B9CCC3]">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function ForOwners() {
  return (
    <Section title="Uy egasiga">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-lg leading-relaxed text-ink-soft dark:text-[#B9CCC3]">
            Eʼlon joylash bepul. Ikkita faol eʼlon — hech qanday toʻlovsiz.
            Koʻproq kerak boʻlsa tarifni kengaytirasiz.
          </p>

          <ul className="mt-7 space-y-3.5">
            {[
              'Raqamingiz eʼlonda koʻrinmaydi',
              'Kim qiziqqanini va nechta koʻrganini koʻrasiz',
              'Eʼlon muddati tugashidan oldin ogohlantiramiz',
              'Soxta eʼlon va maklerlar ustidan shikoyat qilinadi va tekshiriladi',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <Tick />
                <span className="text-ink-soft dark:text-[#B9CCC3]">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white/70 p-8 backdrop-blur dark:border-white/5 dark:bg-white/[0.04]">
          <h3 className="text-lg font-bold">Bepul tarif</h3>
          <p className="mt-1.5 text-ink-muted dark:text-[#8CA096]">Doimiy, muddatsiz</p>

          <dl className="mt-6 space-y-3 text-[15px]">
            {[
              ['Faol eʼlon', '2 ta'],
              ['Rasm', '15 tagacha'],
              ['Xabar almashish', 'Cheksiz'],
              ['Komissiya', 'Yoʻq'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-black/5 pb-3 dark:border-white/5">
                <dt className="text-ink-muted dark:text-[#8CA096]">{label}</dt>
                <dd className="font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function Trust() {
  return (
    <Section title="Ehtiyot boʻling">
      <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8">
        <p className="max-w-prose text-lg leading-relaxed">
          Biz eʼlonlarni tekshirishga harakat qilamiz, lekin har bir eʼlonning
          haqiqiyligini kafolatlay olmaymiz. Shuning uchun:
        </p>

        <ul className="mt-5 space-y-2.5 text-ink-soft dark:text-[#D8C79A]">
          <li>• Uyni oʻz koʻzingiz bilan koʻring.</li>
          <li>• Uyni koʻrmasdan va hujjatni tekshirmasdan oldindan pul bermang.</li>
          <li>• Shartnomani yozma tuzing.</li>
          <li>• Shubhali eʼlon uchrasa — ilovadagi «Shikoyat» tugmasini bosing.</li>
        </ul>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Mark className="h-8 w-8" />
          <div className="text-sm text-ink-muted dark:text-[#8CA096]">
            HAST · Termiz, Oʻzbekiston
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="https://694fc8f1e1918.myxvest1.ru/rental-app/legal/?doc=privacy"
            className="text-ink-muted underline-offset-4 hover:underline dark:text-[#8CA096]"
          >
            Maxfiylik siyosati
          </a>
          <a
            href="https://694fc8f1e1918.myxvest1.ru/rental-app/legal/?doc=terms"
            className="text-ink-muted underline-offset-4 hover:underline dark:text-[#8CA096]"
          >
            Foydalanish shartlari
          </a>
          <a href={BOT_LINK} className="text-ink-muted underline-offset-4 hover:underline dark:text-[#8CA096]">
            Qoʻllab-quvvatlash
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <h2 className="mb-9 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.14" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
