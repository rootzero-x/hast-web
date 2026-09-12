# Putting HAST on hast.uz

Two repositories, two Vercel projects, one domain. The code is finished and both
build; what follows needs a Vercel login, which is yours and should stay that
way.

## The shape

```
hast.uz          →  Vercel   rootzero-x/hast-web     (this repository)
www.hast.uz      →  Vercel   the same project, redirecting to the apex
admin.hast.uz    →  Vercel   rootzero-x/hast-admin   (separate repository)
api.hast.uz      →  myxvest  176.9.111.172 — the PHP API, unchanged
```

**The API does not move.** Vercel runs static files and serverless JavaScript;
the API is PHP talking to a MySQL database on the same machine. Moving it would
mean rewriting it and then putting the internet between every query and its
data. A subdomain pointed at the existing host gives the tidy address without
any of that.

Neither project needs a **Root Directory**: each repository has its application
at the root.

## 1 · Clear out what is there now

Vercel currently holds a `hast-site` project that was pushed from files rather
than linked to a repository, with all three hostnames attached to it — including
`admin.hast.uz`, which would serve the public page.

Delete it: **Settings → Advanced → Delete Project**. The domains are released
back to the account and can be attached to the right project in step 3. Deleting
a project does not touch the domain itself or its DNS records.

## 2 · Import both repositories

Vercel → **Add New → Project**, twice:

| | Project 1 | Project 2 |
| --- | --- | --- |
| Repository | `rootzero-x/hast-web` | `rootzero-x/hast-admin` |
| Suggested name | `hast-web` | `hast-admin` |
| Root Directory | *(leave empty)* | *(leave empty)* |
| Framework | Vite (detected) | Vite (detected) |

Both build with `npm run build` into `dist/`, which Vercel detects on its own.

### Environment variables

Only the panel needs any, and it has a working default compiled in, so a missing
variable will not break the build:

```
hast-admin →  VITE_API_BASE = https://api.hast.uz/api/v1
```

## 3 · Attach the domains

| Project | Domains |
| --- | --- |
| `hast-web` | `hast.uz` and `www.hast.uz` |
| `hast-admin` | `admin.hast.uz` |

Add them under each project's **Settings → Domains**. DNS is already pointed, so
they should verify within a few minutes; Vercel issues and renews the
certificates with nothing further from you.

Set `www.hast.uz` to redirect to `hast.uz` when Vercel offers — one address is
one address, and two of them splits search ranking for no benefit.

## 4 · Deployment protection

New projects inherit the account default, and this account has **Vercel
Authentication** switched on — which answers every visitor with a Vercel login
page. Turn it off for both: **Settings → Deployment Protection → Vercel
Authentication → Disabled**.

The panel does not need it either. It has its own two-factor sign-in, and
leaving Vercel's gate on would lock out every appointed administrator who has no
Vercel account.

## 5 · api.hast.uz on the existing host

Already added in the myxvest panel, serving from `/www/api.hast.uz`. Confirm
`https://api.hast.uz/api/v1/health` answers before pointing anything at it.

Then, on the API side and in this order:

1. **`server/app/config.php`** — set `app.url` to `https://api.hast.uz`. This is
   what builds the absolute URLs for uploaded photographs, so changing it before
   the domain answers would break every image in the app.
2. **The Telegram webhook** — `python tools/setup_bot.py` after step 1, so
   Telegram is told the new address. Miss this and the bot goes quiet.
3. **Google sign-in** — add `https://admin.hast.uz` to the authorised JavaScript
   origins in the Google Cloud console.

The CORS allow-list in `config.php` already names all three origins.

## After this

Both projects are linked to their repository, so every push to `main` deploys
itself. None of these steps has to be repeated.

## Why this is not automated

The Vercel connector available in this workspace can create a deployment and
nothing else: every attempt to read or configure a project under this account
answers 403. Creating projects, deleting them, attaching domains and changing
protection are all dashboard work.
