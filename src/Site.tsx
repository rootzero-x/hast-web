/**
 * Which page hast.uz is showing.
 *
 * Four static pages do not need a router library: Vercel rewrites every path to
 * this document, so all that is left is reading the path and picking a
 * component. A dependency here would cost more than the twenty lines it saves,
 * and plain `<a href>` between pages is not a downgrade - each of these is a
 * separate document that people bookmark, share and print.
 */

import { App } from './App';
import { Legal } from './pages/Legal';
import { OpenApp } from './pages/OpenApp';

/**
 * Every page gets its own title.
 *
 * The document is served from one HTML file, so without this every page would
 * be called "maklersiz ijara uy va sherik topish" - in the tab, in a bookmark,
 * in a shared link, and in the one place it matters most: the privacy policy
 * URL an app store reviewer opens.
 */
const PAGES = {
  '/maxfiylik': {
    title: 'Maxfiylik siyosati — HAST',
    render: () => <Legal doc="privacy" />,
  },
  '/shartlar': {
    title: 'Foydalanish shartlari — HAST',
    render: () => <Legal doc="terms" />,
  },
  '/ilova': {
    title: 'Ilovani ochish — HAST',
    render: () => <OpenApp />,
  },
} as const;

export function Site() {
  // Trailing slashes normalised, so /shartlar and /shartlar/ are one page.
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const page = PAGES[path as keyof typeof PAGES];

  if (page === undefined) return <App />;

  document.title = page.title;
  return page.render();
}
