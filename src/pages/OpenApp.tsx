/**
 * hast.uz/ilova — the page a link from the bot lands on.
 *
 * Its one job: if the app is installed, open it; if it is not, say clearly how
 * to get it. This used to live on the API host, which meant every "open the
 * app" button in the product pointed at a hostname that is not ours.
 *
 * Android's `intent://` URL is what actually opens an installed app from a
 * browser. Its `S.browser_fallback_url` is where the browser goes when nothing
 * handles the scheme, and it points back here with `?yoq=1` rather than at the
 * bot: a fallback that returns to where the person came from is a loop, and
 * they end up bouncing between two pages wondering which one is broken.
 */

import { useEffect, useState } from 'react';

import { Mark } from '../Mark';

const BOT = 'https://t.me/HAST_Mobile_bot';
const PACKAGE = 'uz.hast.hast_app';

const INTENT =
  'intent://open#Intent;scheme=hast;package=' +
  PACKAGE +
  ';S.browser_fallback_url=' +
  encodeURIComponent('https://hast.uz/ilova?yoq=1') +
  ';end';

export function OpenApp() {
  const notInstalled = new URLSearchParams(window.location.search).has('yoq');
  const [android, setAndroid] = useState(false);

  useEffect(() => {
    setAndroid(/android/i.test(navigator.userAgent));
  }, []);

  return (
    <div className="aurora flex min-h-dvh flex-col items-center justify-center px-5 py-16 text-center">
      <Mark className="h-16 w-16" />

      {notInstalled ? (
        <>
          <h1 className="mt-7 text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[34px]">
            Ilova topilmadi
          </h1>
          <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-white/70">
            Telefoningizda HAST oʻrnatilmagan koʻrinadi. Ilovani Telegram botimizdan olasiz —
            u sizga oxirgi versiyani yuboradi.
          </p>
        </>
      ) : (
        <>
          <h1 className="mt-7 text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[34px]">
            HAST ilovasini oching
          </h1>
          <p className="mt-4 max-w-prose text-[16px] leading-relaxed text-white/70">
            Ilova oʻrnatilgan boʻlsa, pastdagi tugma uni ochadi. Oʻrnatilmagan boʻlsa —
            Telegram botimizdan yuklab olasiz.
          </p>
        </>
      )}

      <div className="mt-9 flex w-full max-w-xs flex-col gap-3">
        {!notInstalled && android && (
          <a
            href={INTENT}
            className="rounded-2xl bg-white px-6 py-4 font-extrabold text-ink shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
          >
            Ilovani ochish
          </a>
        )}

        <a
          href={BOT}
          className={
            'rounded-2xl px-6 py-4 font-bold transition ' +
            (!notInstalled && android
              ? 'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20'
              : 'bg-white text-ink shadow-xl shadow-black/20 hover:-translate-y-0.5')
          }
        >
          Telegram botdan olish
        </a>

        <a
          href="/"
          className="rounded-2xl px-6 py-3 text-[14px] font-semibold text-white/55 transition hover:text-white"
        >
          Bosh sahifa
        </a>
      </div>

      {!android && !notInstalled && (
        <p className="mt-8 max-w-prose text-[13.5px] text-white/45">
          Ilova hozircha Android uchun. iPhone versiyasi tayyorlanmoqda — botga yozib qoʻysangiz,
          chiqqanda xabar beramiz.
        </p>
      )}
    </div>
  );
}
