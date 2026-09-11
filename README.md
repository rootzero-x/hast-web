# HAST — web

Two front ends, one repository, deployed separately on Vercel.

| Folder  | Domain           | What it is                                   |
| ------- | ---------------- | -------------------------------------------- |
| `site/` | `hast.uz`        | The public site: what HAST is, and the app.   |
| `admin/`| `admin.hast.uz`  | The administration panel.                      |

The API is **not** here. It is PHP and MySQL, and it stays where the database
is — on the existing host, reached at `api.hast.uz`. Vercel runs static files
and serverless JavaScript; it cannot run this API, and moving the API away from
its database would cost every query a round trip across the internet.

So the shape is:

```
hast.uz          → Vercel  (this repo, site/)
admin.hast.uz    → Vercel  (this repo, admin/)
api.hast.uz      → the existing host, unchanged
```

## Running it

```
cd admin && npm install && npm run dev
cd site  && npm install && npm run dev
```

Both read the API base URL from `VITE_API_BASE`, falling back to the production
API so a fresh clone works with no setup.

## Deploying

Each folder is its own Vercel project:

1. Import this repository twice.
2. Set **Root Directory** to `site` for one and `admin` for the other.
3. Add the domain to each project and copy the DNS values Vercel shows — the
   CNAME target is per-project now, so it cannot be written down here.

Vercel issues and renews the certificates; there is nothing to do about SSL.

## Why two projects rather than one

The panel and the public site have nothing in common: different audiences,
different release cadence, and different consequences when something breaks. A
mistake in a marketing page should not be able to take down the tool used to
approve payments, and the panel carries `X-Frame-Options: DENY` and
`noindex` headers the public site must not have.
