/**
 * The handset, and the three screens shown inside it.
 *
 * The screens are drawn in the browser rather than pasted in as screenshots,
 * for reasons that outlast the first version: a PNG of a phone is heavy, goes
 * soft on a retina display, and is out of date the moment a label changes,
 * whereas this stays sharp at any size and costs a few kilobytes.
 *
 * They are honest about what they show. The palette, the wording, the money
 * format and the badges are the app's own (lib/core/theme/hast_colors.dart),
 * so the page advertises the product that actually exists.
 *
 * When real screenshots do arrive, pass one as `shot` and it replaces the drawn
 * screen inside the same frame - the bezel, the scale and the layout around it
 * do not change.
 */

import type { ReactNode } from 'react';

export function Phone({
  children,
  shot,
  className = '',
  label,
}: {
  children?: ReactNode;
  /** A real screenshot, when there is one. Replaces the drawn screen. */
  shot?: string;
  className?: string;
  label: string;
}) {
  return (
    <div className={'relative w-[300px] shrink-0 ' + className}>
      {/* The body. The ring is the metal edge, the inner ring the glass. */}
      <div className="relative rounded-[2.75rem] bg-night p-[10px] shadow-[0_40px_80px_-20px_rgba(4,11,8,0.55)] ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[2.15rem] bg-canvas">
          {/* The pill camera housing, floating over the screen as it really does. */}
          <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-night" />

          {shot ? (
            <img src={shot} alt={label} className="block h-[600px] w-full object-cover" />
          ) : (
            <div className="h-[600px] w-full" role="img" aria-label={label}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function StatusBar({ dark = false }: { dark?: boolean }) {
  const tone = dark ? 'text-white' : 'text-ink';

  return (
    <div className={'flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-bold ' + tone}>
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <Bars />
        <Battery />
      </span>
    </div>
  );
}

function Bars() {
  return (
    <svg viewBox="0 0 18 12" className="h-[10px] w-[15px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={i * 4.6}
          y={9 - i * 2.6}
          width="3"
          height={3 + i * 2.6}
          rx="1"
          fill="currentColor"
          opacity={i === 3 ? 0.35 : 1}
        />
      ))}
    </svg>
  );
}

function Battery() {
  return (
    <svg viewBox="0 0 26 12" className="h-[10px] w-[22px]" aria-hidden>
      <rect x="0.5" y="0.5" width="21" height="11" rx="3.2" fill="none" stroke="currentColor" opacity="0.4" />
      <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" />
      <path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/** A stand-in for a photograph of a flat. Never pretends to be one. */
function Shot({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* The suggestion of a room: a horizon and a window, no more. */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black/10" />
      <div className="absolute right-4 top-4 h-8 w-10 rounded-[3px] bg-white/25" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/** The feed: what somebody sees a second after opening the app. */
export function FeedScreen() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      <StatusBar />

      <div className="flex items-center justify-between px-4 pb-3 pt-2">
        <span className="text-[17px] font-extrabold tracking-tight text-ink">HAST</span>
        <span className="flex items-center gap-2.5">
          <Circle><BellIcon /></Circle>
          <Circle><HeartIcon /></Circle>
        </span>
      </div>

      <div className="px-4">
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 ring-1 ring-line">
          <SearchIcon />
          <span className="text-[12.5px] text-ink-faint">Termiz, 2 xona…</span>
        </div>
      </div>

      <div className="mt-3 flex gap-1.5 overflow-hidden px-4">
        {['Barchasi', 'Ijara', 'Sherik', '2 xona'].map((chip, i) => (
          <span
            key={chip}
            className={
              'whitespace-nowrap rounded-full px-3 py-1.5 text-[11.5px] font-bold ' +
              (i === 0 ? 'bg-brand-500 text-white' : 'bg-white text-ink-soft ring-1 ring-line')
            }
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-3 flex-1 space-y-3 overflow-hidden px-4">
        <Card
          price="2 500 000"
          title="2 xonali, tamirlangan"
          where="Termiz · Sh. Rashidov ko‘chasi"
          from="#7DE2AD"
          to="#12A25F"
          boosted
        />
        <Card
          price="1 800 000"
          title="1 xonali, universitetga yaqin"
          where="Termiz · Al-Hakim"
          from="#9BD8E6"
          to="#17B8C4"
        />
        <Card
          price="950 000"
          title="Sherik kerak — talaba"
          where="Termiz · Markaz"
          from="#F4D9A0"
          to="#E8B44A"
        />
      </div>

      <TabBar active={0} />
    </div>
  );
}

function Card({
  price,
  title,
  where,
  from,
  to,
  boosted = false,
}: {
  price: string;
  title: string;
  where: string;
  from: string;
  to: string;
  boosted?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
      <div className="relative h-[92px]">
        <Shot from={from} to={to} />

        {boosted && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-gold px-2 py-0.5 text-[9.5px] font-extrabold text-ink">
            TOPDA
          </span>
        )}

        <span className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-white/85">
          <HeartIcon small />
        </span>
      </div>

      <div className="px-3 py-2.5">
        <div className="flex items-baseline gap-1">
          <span className="text-[15px] font-extrabold text-ink">{price}</span>
          <span className="text-[10.5px] font-bold text-ink-muted">so‘m/oy</span>
        </div>
        <p className="mt-0.5 truncate text-[12px] font-semibold text-ink-soft">{title}</p>
        <p className="mt-0.5 truncate text-[10.5px] text-ink-faint">{where}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/** The conversation: the thing the whole product exists to make happen. */
export function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      <StatusBar />

      <div className="flex items-center gap-2.5 border-b border-line bg-white px-4 pb-3 pt-2">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-[12px] font-extrabold text-brand-700">
          AK
        </span>
        <span className="min-w-0">
          <p className="truncate text-[13px] font-bold text-ink">Aziz Karimov</p>
          <p className="text-[10.5px] font-semibold text-brand-600">Uy egasi · onlayn</p>
        </span>
      </div>

      <div className="flex-1 space-y-2.5 px-4 py-4">
        <Bubble>Assalomu alaykum. Uy hali bo‘shmi?</Bubble>
        <Bubble them>Valeykum assalom. Ha, bo‘sh. Qachon ko‘rmoqchisiz?</Bubble>
        <Bubble>Ertaga kechqurun bo‘ladimi?</Bubble>
        <Bubble them>Bo‘ladi. Soat 18:00 da kutaman.</Bubble>

        <div className="pt-1 text-center">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold text-brand-700 ring-1 ring-brand-100">
            Raqamingiz hali ko‘rinmaydi
          </span>
        </div>
      </div>

      <div className="border-t border-line bg-white px-4 py-3">
        <div className="flex items-center gap-2 rounded-full bg-canvas px-4 py-2.5 ring-1 ring-line">
          <span className="flex-1 text-[12px] text-ink-faint">Xabar yozing…</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500">
            <SendIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

function Bubble({ children, them = false }: { children: ReactNode; them?: boolean }) {
  return (
    <div className={'flex ' + (them ? 'justify-start' : 'justify-end')}>
      <span
        className={
          'max-w-[78%] rounded-2xl px-3 py-2 text-[12px] leading-snug ' +
          (them
            ? 'rounded-bl-md bg-white text-ink-soft ring-1 ring-line'
            : 'rounded-br-md bg-brand-500 text-white')
        }
      >
        {children}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/** The owner's side: what posting actually gets you. */
export function OwnerScreen() {
  return (
    <div className="flex h-full flex-col bg-canvas">
      <StatusBar />

      <div className="px-4 pb-3 pt-2">
        <p className="text-[17px] font-extrabold tracking-tight text-ink">Mening e‘lonlarim</p>
      </div>

      <div className="space-y-3 px-4">
        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-line">
          <div className="flex items-start justify-between gap-2">
            <span className="min-w-0">
              <p className="truncate text-[13px] font-bold text-ink">2 xonali, tamirlangan</p>
              <p className="mt-0.5 text-[11px] text-ink-faint">2 500 000 so‘m/oy</p>
            </span>
            <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[9.5px] font-extrabold text-brand-700 ring-1 ring-brand-100">
              FAOL
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <Metric n="248" label="ko‘rildi" />
            <Metric n="31" label="saqlandi" />
            <Metric n="7" label="yozdi" />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-line">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20">
              <span className="text-[12px]">⏳</span>
            </span>
            <p className="text-[11.5px] font-semibold leading-snug text-ink-soft">
              E‘lon muddati <b className="text-ink">3 kundan</b> keyin tugaydi
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-ink p-3.5">
          <p className="text-[12px] font-bold text-white">Topga chiqaring</p>
          <p className="mt-1 text-[10.5px] leading-snug text-white/60">
            E‘loningiz ro‘yxat boshida 7 kun turadi
          </p>
          <div className="mt-2.5 rounded-full bg-gold px-3 py-1.5 text-center text-[11px] font-extrabold text-ink">
            29 000 so‘m
          </div>
        </div>

        {/* The empty slot. A free plan allows two listings and one is in use,
            so showing the second as an invitation is both true and the thing
            the owner is most likely to tap. */}
        <div className="rounded-2xl border-2 border-dashed border-line py-5 text-center">
          <p className="text-[12px] font-bold text-ink-muted">+ Yangi e‘lon</p>
          <p className="mt-0.5 text-[10px] text-ink-faint">Bepul tarifda yana 1 ta</p>
        </div>
      </div>

      <div className="flex-1" />
      <TabBar active={2} />
    </div>
  );
}

function Metric({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl bg-canvas py-2 text-center">
      <p className="text-[14px] font-extrabold text-ink">{n}</p>
      <p className="text-[9.5px] font-semibold text-ink-faint">{label}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function TabBar({ active }: { active: number }) {
  const tabs = ['Qidiruv', 'Xabarlar', 'E‘lonlarim', 'Profil'];

  return (
    <div className="flex items-center justify-around border-t border-line bg-white px-2 pb-5 pt-2.5">
      {tabs.map((tab, i) => (
        <span key={tab} className="flex flex-col items-center gap-1">
          <span
            className={'h-1.5 w-1.5 rounded-full ' + (i === active ? 'bg-brand-500' : 'bg-ink-faint/40')}
          />
          <span
            className={
              'text-[9.5px] font-bold ' + (i === active ? 'text-brand-600' : 'text-ink-faint')
            }
          >
            {tab}
          </span>
        </span>
      ))}
    </div>
  );
}

function Circle({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-white ring-1 ring-line">
      {children}
    </span>
  );
}

/* --- the few icons the screens need, drawn rather than imported ----------- */

function BellIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-ink-soft" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 8a4 4 0 1 1 8 0c0 3 1.2 4.2 1.6 4.6H4.4C4.8 12.2 6 11 6 8Z" strokeLinejoin="round" />
      <path d="M8.4 15a1.8 1.8 0 0 0 3.2 0" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ small = false }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={(small ? 'h-3 w-3 ' : 'h-4 w-4 ') + 'text-ink-soft'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d="M10 16s-5.5-3.4-5.5-7A3 3 0 0 1 10 6.6 3 3 0 0 1 15.5 9c0 3.6-5.5 7-5.5 7Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-ink-faint" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="9" r="5" />
      <path d="m13 13 3 3" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-white" fill="currentColor">
      <path d="M3 10 17 3.5 13.5 17 10 11.5 3 10Z" />
    </svg>
  );
}
