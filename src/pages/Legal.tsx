/**
 * The privacy policy and the terms of use.
 *
 * These used to be a PHP page on the API host, which meant the two documents a
 * regulator and an app store check first lived on somebody else's hostname.
 * They are part of the product, so they live on the product's domain.
 *
 * Written to be read. A policy nobody understands protects nobody: it tells a
 * regulator something was disclosed and tells the reader nothing. Every section
 * says what is collected, why, and what the person can do about it, in the
 * plainest Uzbek the subject allows.
 */

import type { ReactNode } from 'react';

import { Mark } from '../Mark';

const UPDATED = '12.09.2026';
const SUPPORT = '@hast_support';
const EMAIL = 'rootzero.xz@gmail.com';
const SUPPORT_LINK = 'https://t.me/hast_support';

export function Legal({ doc }: { doc: 'privacy' | 'terms' }) {
  return (
    <div className="min-h-dvh bg-canvas">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-2.5" aria-label="HAST bosh sahifa">
            <Mark className="h-8 w-8" />
            <span className="font-extrabold tracking-tight">HAST</span>
          </a>

          <nav className="flex gap-1 rounded-full bg-canvas p-1 ring-1 ring-line">
            <Tab href="/maxfiylik" on={doc === 'privacy'}>
              Maxfiylik
            </Tab>
            <Tab href="/shartlar" on={doc === 'terms'}>
              Shartlar
            </Tab>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10">
        {doc === 'privacy' ? <Privacy /> : <Terms />}

        <footer className="mt-14 border-t border-line pt-6 text-[14px] text-ink-muted">
          HAST · Termiz, Oʻzbekiston
          <br />
          <a href={SUPPORT_LINK} className="text-brand-600 hover:underline">
            {SUPPORT}
          </a>{' '}
          · {EMAIL}
        </footer>
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function Privacy() {
  return (
    <>
      <H1>Maxfiylik siyosati</H1>
      <Updated />

      <Box>
        <b>Qisqasi:</b> biz ilova ishlashi uchun zarur boʻlgan maʼlumotni yigʻamiz —
        telefon raqamingiz, eʼlonlaringiz va yozishmalaringiz. Maʼlumotingizni
        sotmaymiz va reklama tarmoqlariga bermaymiz. Telefon raqamingiz eʼlonda
        koʻrinmaydi: uni faqat siz aloqa ochgan odam koʻradi.
      </Box>

      <H2>1. Biz kim ekanmiz</H2>
      <P>
        HAST — Termiz shahrida ishlaydigan, maklersiz ijara uy va sherik topish ilovasi.
        Maʼlumotlaringizni qayta ishlash uchun javobgar tomon — ilova egasi. Bogʻlanish:{' '}
        <A href={SUPPORT_LINK}>{SUPPORT}</A>, {EMAIL}.
      </P>

      <H2>2. Qanday maʼlumot yigʻamiz</H2>
      <Table
        rows={[
          ['Telefon raqam', 'Hisobingizni tanish va eʼlon egasi haqiqiy odam ekanini tasdiqlash uchun. Raqam Telegram orqali tasdiqlanadi.'],
          ['Ism va rasm (ixtiyoriy)', 'Boshqa foydalanuvchilar sizni tanishi uchun.'],
          ['Email (Google orqali kirsangiz)', 'Hisobga kirish uchun.'],
          ['Eʼlonlar, rasmlar, narx, manzil', 'Eʼloningizni koʻrsatish uchun. Siz yozgan hamma narsa ochiq koʻrinadi.'],
          ['Yozishmalar', 'Xabar yetkazish uchun. Yozishmalarni faqat siz va suhbatdoshingiz oʻqiydi; biz ularni faqat shikoyat kelganda va faqat tekshiruv uchun koʻramiz.'],
          ['Joylashuv (ruxsat bersangiz)', 'Yaqin atrofdagi uylarni koʻrsatish va eʼlon joylashda manzilni topish uchun. Ruxsat bermasangiz ham ilova ishlaydi.'],
          ['Qurilma va sessiya maʼlumoti', 'Xavfsizlik: qaysi qurilmalardan kirilganini koʻrsatish va shubhali faollikni toʻxtatish uchun.'],
          ['Toʻlov cheki (toʻlov qilsangiz)', 'Toʻlovni tekshirish uchun. Chek rasmi ochiq internetda turmaydi — uni faqat siz va administrator koʻra oladi.'],
        ]}
      />

      <H2>3. Nimani qilmaymiz</H2>
      <UL
        items={[
          <>
            Maʼlumotingizni <b>sotmaymiz</b>.
          </>,
          <>
            Reklama tarmoqlariga <b>bermaymiz</b> va ilovada uchinchi tomon reklamasi yoʻq.
          </>,
          <>Yozishmalaringizni oʻqib chiqmaymiz — shikoyat kelgan holatdan tashqari.</>,
          <>Telefon raqamingizni eʼlonda koʻrsatmaymiz.</>,
        ]}
      />

      <H2>4. Kimga beramiz</H2>
      <P>Faqat ilova ishlashi uchun zarur boʻlgan xizmatlarga:</P>
      <UL
        items={[
          <>
            <b>Telegram</b> — raqamingizni tasdiqlash uchun. Telegram bizga raqamingizni siz
            tugmani bosganingizdan keyin beradi.
          </>,
          <>
            <b>Google (Firebase)</b> — bildirishnoma yuborish va Google orqali kirish uchun.
          </>,
          <>
            <b>Hosting provayderi</b> — maʼlumot saqlanadigan server.
          </>,
        ]}
      />
      <P>
        Qonuniy talab boʻlsa — sud yoki vakolatli organning rasmiy soʻrovi — maʼlumot berishga
        majbur boʻlishimiz mumkin.
      </P>

      <H2>5. Qancha saqlaymiz</H2>
      <UL
        items={[
          <>
            <b>Hisob maʼlumotlari</b> — hisobingiz mavjud boʻlgan davrda.
          </>,
          <>
            <b>Eʼlonlar</b> — muddati tugagach arxivda qoladi, chunki siz uni qayta
            faollashtirishingiz mumkin.
          </>,
          <>
            <b>Yozishmalar</b> — suhbat oʻchirilgunicha.
          </>,
          <>
            <b>Kirish kodlari va sessiyalar</b> — bir necha daqiqa yoki hisobdan
            chiqqaningizgacha.
          </>,
          <>
            <b>Toʻlov cheklari</b> — buxgalteriya uchun toʻlovdan keyin 1 yil.
          </>,
        ]}
      />

      <H2>6. Sizning huquqlaringiz</H2>
      <UL
        items={[
          <>
            <b>Koʻrish</b> — profil sahifasida maʼlumotlaringizni koʻrasiz.
          </>,
          <>
            <b>Tuzatish</b> — istalgan vaqtda oʻzgartirasiz.
          </>,
          <>
            <b>Oʻchirish</b> — <i>Sozlamalar → Maxfiylik → Hisobni oʻchirish</i>. Hisobingiz va
            eʼlonlaringiz oʻchadi.
          </>,
          <>
            <b>Qurilmalarni boshqarish</b> — <i>Sozlamalar → Qurilmalar</i> orqali boshqa
            qurilmalardagi sessiyalarni bekor qilasiz.
          </>,
          <>
            <b>Bildirishnomalarni oʻchirish</b> — telefon sozlamalaridan.
          </>,
        ]}
      />
      <P>
        Soʻrovingiz boʻlsa <A href={SUPPORT_LINK}>{SUPPORT}</A> ga yozing.
      </P>

      <H2>7. Xavfsizlik</H2>
      <P>
        Barcha maʼlumot HTTPS orqali uzatiladi. Parollar saqlanmaydi — kirish Telegram yoki
        Google orqali. Administrator paneliga kirish ikki bosqichli tasdiqni talab qiladi, va
        paneldagi har bir oʻzgarish jurnalga yoziladi. Maʼlumotlar bazasi har kuni zaxiralanadi.
      </P>
      <P>
        Shunga qaramay, internetda hech bir tizim 100% xavfsiz emas. Shubhali faollik sezsangiz
        darhol xabar bering.
      </P>

      <H2>8. Bolalar</H2>
      <P>
        HAST 18 yoshdan kichiklar uchun moʻljallanmagan. Bolaning maʼlumotini bilmasdan yiqqan
        boʻlsak, xabar bering — oʻchiramiz.
      </P>

      <H2>9. Oʻzgarishlar</H2>
      <P>
        Siyosat oʻzgarsa, shu sahifada sanani yangilaymiz. Muhim oʻzgarish boʻlsa ilovada xabar
        beramiz.
      </P>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Terms() {
  return (
    <>
      <H1>Foydalanish shartlari</H1>
      <Updated />

      <Box>
        <b>Qisqasi:</b> HAST — eʼlon taxtasi. Biz uy egasi bilan ijarachini uchrashtiramiz, lekin
        kelishuvning tomoni emasmiz. Uyni koʻrmasdan pul bermang.
      </Box>

      <H2>1. Xizmat nima</H2>
      <P>
        HAST — ijara uy va sherik eʼlonlari joylanadigan platforma. Biz uy egasi ham, vositachi
        ham, kelishuv tomoni ham emasmiz. Eʼlonlarni foydalanuvchilar joylaydi.
      </P>

      <H2>2. Hisob</H2>
      <UL
        items={[
          <>Hisob ochish uchun telefon raqamingizni tasdiqlashingiz kerak.</>,
          <>Bitta odam — bitta hisob. Boshqa odamning raqami bilan hisob ochish taqiqlanadi.</>,
          <>Hisobingizdagi faoliyat uchun siz javobgarsiz.</>,
        ]}
      />

      <H2>3. Eʼlon joylash qoidalari</H2>
      <P>Quyidagilar taqiqlanadi va eʼlon ogohlantirishsiz olib tashlanadi:</P>
      <UL
        items={[
          <>
            <b>Soxta eʼlon</b> — mavjud boʻlmagan uy, boshqa saytdan olingan rasm.
          </>,
          <>
            <b>Notoʻgʻri narx</b> — eʼlonda bir narx, gaplashganda boshqasi.
          </>,
          <>
            <b>Makler oʻzini uy egasi deb koʻrsatishi.</b> Makler boʻlsangiz, buni ochiq yozing —
            HAST maklerlarni taqiqlamaydi, yashirishni taqiqlaydi.
          </>,
          <>Allaqachon ijaraga berilgan uyni oʻchirmaslik.</>,
          <>Takroriy eʼlonlar, spam, haqorat, kamsitish.</>,
          <>Uy-joydan boshqa narsa sotish.</>,
        ]}
      />

      <H2>4. Pullik xizmatlar</H2>
      <UL
        items={[
          <>Bepul tarifda bir vaqtda 2 ta faol eʼlon joylash mumkin.</>,
          <>
            Pullik tarif va eʼlonni tepaga koʻtarish — karta orqali toʻlanadi va chek rasmi
            yuklanadi. Toʻlov administrator tasdiqlagandan keyin ishlaydi.
          </>,
          <>Chek notoʻgʻri boʻlsa toʻlov rad etiladi va sababi sizga xabar qilinadi.</>,
          <>
            <b>Tepaga koʻtarish eʼlonni yaxshiroq qilmaydi</b> — faqat koʻrinishini oshiradi.
            Qoidabuzarlik uchun olib tashlangan eʼlon uchun pul qaytarilmaydi.
          </>,
          <>Ishlatilmagan obuna kuni uchun pul qaytarish soʻrovini {SUPPORT} ga yozing.</>,
        ]}
      />

      <H2>5. Muhim ogohlantirish</H2>
      <Box tone="warn">
        <p>
          Biz eʼlonlarni tekshirishga harakat qilamiz, lekin{' '}
          <b>har bir eʼlonning haqiqiyligini kafolatlay olmaymiz</b>. Shuning uchun:
        </p>
        <ul className="mt-3 space-y-1.5">
          <li>
            • Uyni <b>oʻz koʻzingiz bilan koʻring</b>.
          </li>
          <li>
            • Uyni koʻrmasdan va hujjatni tekshirmasdan <b>oldindan pul bermang</b>.
          </li>
          <li>• Shartnomani yozma tuzing.</li>
          <li>• Shubhali eʼlon uchrasa — ilovadagi «Shikoyat» tugmasini bosing.</li>
        </ul>
        <p className="mt-3">
          Foydalanuvchilar oʻrtasidagi kelishuv, pul va nizolar uchun HAST javobgar emas.
        </p>
      </Box>

      <H2>6. Moderatsiya</H2>
      <P>
        Shikoyat kelgan eʼlonni tekshiramiz. Qoidabuzarlik topilsa eʼlon arxivga olinadi yoki
        oʻchiriladi, egasiga sabab bilan xabar boradi. Takroriy qoidabuzarlikda hisob bloklanadi.
      </P>

      <H2>7. Xizmatning uzluksizligi</H2>
      <P>
        Ilovani doim ishlab turishga harakat qilamiz, lekin texnik ishlar yoki nosozlik tufayli
        vaqtincha toʻxtashi mumkin. Bunday holat uchun zarar qoplanmaydi.
      </P>

      <H2>8. Oʻzgarishlar</H2>
      <P>
        Shartlar oʻzgarsa shu sahifada eʼlon qilamiz. Ilovadan foydalanishda davom etsangiz,
        yangi shartlarga rozi boʻlgan hisoblanasiz.
      </P>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Tab({ href, on, children }: { href: string; on: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      className={
        'rounded-full px-4 py-1.5 text-[13.5px] font-bold transition ' +
        (on ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink')
      }
    >
      {children}
    </a>
  );
}

function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[32px] font-extrabold leading-tight tracking-tight sm:text-[40px]">
      {children}
    </h1>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-[19px] font-extrabold tracking-tight">{children}</h2>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>;
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="font-semibold text-brand-600 underline-offset-2 hover:underline">
      {children}
    </a>
  );
}

function Updated() {
  return <p className="mt-2 text-[13.5px] text-ink-muted">Oxirgi yangilanish: {UPDATED}</p>;
}

function Box({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'warn' }) {
  return (
    <div
      className={
        'mt-6 rounded-2xl border p-5 leading-relaxed text-ink-soft ' +
        (tone === 'warn'
          ? 'border-gold/30 bg-gold/[0.08]'
          : 'border-brand-200 bg-brand-50')
      }
    >
      {children}
    </div>
  );
}

function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-ink-soft">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two columns, and on a phone a stack: a wide table here is unreadable. */
function Table({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white">
      {rows.map(([what, why], i) => (
        <div
          key={what}
          className={
            'gap-4 p-4 sm:flex sm:items-start ' + (i > 0 ? 'border-t border-line' : '')
          }
        >
          <div className="font-bold sm:w-[38%] sm:shrink-0">{what}</div>
          <div className="mt-1 leading-relaxed text-ink-soft sm:mt-0">{why}</div>
        </div>
      ))}
    </div>
  );
}
