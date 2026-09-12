# HAST — hast.uz

The public page for HAST: a two-sided rental marketplace in Termiz, Uzbekistan.
Tenants and owners talk to each other directly, without a broker and without a
commission; people who want to split a rent find a flatmate on the same app.

React 19 · TypeScript (strict) · Vite · Tailwind.

## Running it

```
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
```

## What is on the page

The product is an app, so the page shows the app. Three handsets carry it — the
feed, a conversation with an owner, and what a listing earns the person who
posted it — and the middle of the page pins one handset in place while the story
scrolls past, changing screen as each chapter arrives.

The screens are **drawn in the browser**, not pasted in as screenshots. They are
sharp at any size, weigh a few kilobytes, cannot go stale behind a label change,
and take the app's own palette from `lib/core/theme/hast_colors.dart` so the
page and the product match. The room pictures inside them are illustrations on
purpose: a stock photograph of a flat that is not on HAST would be the first
untrue thing on the page.

When real screenshots exist, pass one to `<Phone shot="…">` and it replaces the
drawn screen inside the same frame. Nothing around it has to change.

### What the page will not say

There are no invented user counts and no fake reviews. The four figures under
the hero — no commission, two free listings, free messaging, Termiz — are each
true today, and the page says at the top that Termiz is the only city with
listings. Somebody who installs the app expecting Tashkent and finds nothing is
a person lost for good.

## Motion

Every moving thing checks `prefers-reduced-motion` and stops if the visitor has
asked it to. The parallax writes to `style.transform` inside a rAF rather than
through React state, because re-rendering a tree of SVG handsets sixty times a
second to move one box is how a smooth page becomes a stuttering one.

The showcase pins its handset with `position: sticky`, which is released the
moment the sticky element's parent ends. The text column therefore carries a
deliberate tail of empty space (`lg:pb-[34vh]`); without it the phone slides
away exactly while somebody is reading about the screen it is meant to be
showing.

## Where it points

The API is a separate PHP application on its own host and is not part of this
repository. Nothing on this page needs it — every link here is static.

## Deployment

One Vercel project, this repository, no Root Directory to set: the application
is at the repository root. `vercel.json` carries the SPA rewrite, the caching
rules and the security headers.

## The administration panel

Separate repository, separate Vercel project: `rootzero-x/hast-admin` serves
`admin.hast.uz`. The two share a brand and nothing else — deliberately. That one
is a dense, flat, dark tool; this is a light product page.
