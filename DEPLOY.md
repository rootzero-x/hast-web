# Putting HAST on hast.uz

The code is finished and both projects build. What is left is wiring, and all of
it needs an account only you have: GitHub, Vercel, and the uzinfocom DNS panel.

## The shape

```
hast.uz          →  Vercel   (this repo, site/)
www.hast.uz      →  Vercel   (redirects to hast.uz)
admin.hast.uz    →  Vercel   (this repo, admin/)
api.hast.uz      →  myxvest  (176.9.111.172) — the PHP API, unchanged
```

**The API does not move.** Vercel runs static files and serverless JavaScript;
the API is PHP talking to a MySQL database on the same machine. Moving it would
mean rewriting it and then putting the internet between every query and its
data. Pointing a subdomain at the existing host gives you the tidy address
without any of that.

## What already exists

A Vercel project named **`hast-site`** was created and a production deployment
pushed to it, under the account `oyatullo2s-projects`.

Two caveats, both of which you resolve in step 2:

- The team has **Vercel Authentication** switched on, so every URL currently
  answers `302` to a login page. A public marketing site cannot stay that way.
- That deployment was pushed from files, not from git. It is not linked to a
  repository, so it will not rebuild when you push.

Nothing was created for `admin/` — deliberately, so that project name is still
free for a clean git-linked import.

## 1 · GitHub

The repository is committed locally but has nowhere to go yet.

1. Create an **empty** repository at <https://github.com/new> — no README, no
   licence, no `.gitignore`. Call it `hast-web`.
2. Then, from `Desktop/hast-web`:

```
git remote add origin https://github.com/rootzero-x/hast-web.git
git branch -M main
git push -u origin main
```

Your GitHub credentials are already in Windows Credential Manager, so the push
should not ask for anything.

## 2 · Vercel

### 2a · Turn off Vercel Authentication

**Settings → Deployment Protection → Vercel Authentication → Disabled**, for
both projects. Until this is off, every visitor sees a Vercel login screen
instead of the site.

The admin panel does not need it either: it has its own two-factor sign-in, and
leaving Vercel's gate on would lock out every appointed admin who has no Vercel
account.

### 2b · Link the repository

For **`hast-site`**: Settings → Git → connect it to `rootzero-x/hast-web`, and
set **Root Directory** to `site`. That replaces the file-pushed deployment with
one that rebuilds on every push.

For the panel, import the same repository as a **new** project:

| | `hast-site` (exists) | `hast-admin` (create) |
| --- | --- | --- |
| **Root Directory** | `site` | `admin` |
| Framework | Vite | Vite |
| Domain | `hast.uz`, `www.hast.uz` | `admin.hast.uz` |

Both build with `npm run build` into `dist/`, which Vercel detects on its own.

### 2c · Environment variables

Set on **both** projects, for Production and Preview:

```
VITE_API_BASE = https://api.hast.uz/api/v1
```

Both have a working default compiled in, so a missing variable will not break
the build — it just points at the production API, which is usually what you
wanted anyway.

## 3 · DNS at uzinfocom

Add these to the `hast.uz` zone.

| Type | Name | Value | Why |
| --- | --- | --- | --- |
| A | `@` | `76.76.21.21` | Vercel's apex address |
| CNAME | `www` | *(from Vercel)* | see below |
| CNAME | `admin` | *(from Vercel)* | see below |
| A | `api` | `176.9.111.172` | the existing host |

**The CNAME values cannot be written down here.** Vercel now issues a different
one per project — something like `d1d4fc829fe7bc7c.vercel-dns-017.com`. Add the
domain under the project's **Settings → Domains** first, and Vercel shows you
the exact value to paste.

If uzinfocom's panel will not accept a CNAME at `www`, use Vercel's nameservers
instead — but copy every existing record first, including MX, or e-mail stops
arriving the moment the nameservers change.

SSL needs nothing from you. Vercel issues and renews the certificates once the
records resolve, usually within minutes.

## 4 · api.hast.uz on the existing host

The DNS record alone is not enough: the host serves by hostname, so it has to be
told the name belongs to this account.

In the myxvest control panel, add `api.hast.uz` as a domain or alias pointing at
the directory the application already uses, then confirm
`https://api.hast.uz/api/v1/health` answers.

Until that is done, leave `VITE_API_BASE` pointing at the current address —
everything keeps working, just with a longer URL.

## 5 · After DNS resolves

Three things on the API side, in this order:

1. **`server/app/config.php`** — set `app.url` to `https://api.hast.uz`. This is
   what builds the absolute URLs for uploaded photographs, so changing it before
   the domain works would break every image in the app.
2. **The Telegram webhook** — `python tools/setup_bot.py` after step 1, so
   Telegram is told the new address. Miss this and the bot goes quiet.
3. **Google sign-in** — add `https://admin.hast.uz` to the authorised JavaScript
   origins in the Google Cloud console.

The CORS allow-list in `config.php` already names all three new origins.

## Why these steps are not automated

Creating repositories, configuring Vercel projects and editing DNS need
credentials that belong to you. The Vercel connector available here can create a
deployment but cannot read or configure a project, which is why step 2 is done
by hand rather than for you.
