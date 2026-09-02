# Kiwi Compliance — website

A static website hosted free on GitHub Pages. Every push to the deploy branch
rebuilds and republishes it automatically; there is no server to keep running
and nothing to pay for, so it stays up on its own.

**Live URL:** https://kiwicompliance.com

## Layout

```
site/                  everything that gets published
  index.html           the homepage — all sections live here
  privacy.html         privacy notice
  terms.html           website terms
  robots.txt
  sitemap.xml
  CNAME                the custom domain — do not delete
  assets/
    styles.css         all styling, tokens at the top
    site.js            reveals, counters, dashboard tabs, mobile menu
    favicon.svg        the Kiwi mark
.github/workflows/deploy.yml   the auto-deploy pipeline
ASSETS.md              what to supply for the multi-site photograph
```

Only the contents of `site/` are published. Anything outside it stays in the
repo but never appears on the web.

## Design tokens

Colours, type and spacing are CSS custom properties at the top of
`styles.css`. Change a brand colour there and it updates everywhere.

```
Ink            #10201B    near-black with a green undertone
Kiwi Green     #2F6B4F    primary
Fresh Kiwi     #A9D84A    accent — status dots, active tab, small marks only
Warm White     #F6F7F2    page background
Stone          #E8EBE4    quiet section background
Muted Text     #68736D
```

Three functional status colours sit alongside these for the dashboard
(current / due / action required). They are legibility tools, not brand
colours, and each has a lighter variant for use on dark backgrounds.

Type is Schibsted Grotesk for headings, Inter for body and UI, IBM Plex Mono
for figures and dates — loaded from Google Fonts.

## Editing the copy

All page copy is plain HTML in `site/index.html`, in the order it appears on
the page, with each section commented. There is no build step and no
framework: edit the text, commit, push.

The compliance dashboard is hand-written HTML in the same file — the hero
panel near the top, and the five tabbed views under the "COMPLIANCE RECORD"
comment. Its figures are illustrative and labelled as such on the page.

## Making a change

Edit a file in `site/`, commit, and push. GitHub Actions publishes the new
version within a minute or two. Progress is visible under the repo's
**Actions** tab.

To preview locally before pushing, open `site/index.html` in a browser, or
serve the folder:

```
python3 -m http.server -d site 8000    # then visit http://localhost:8000
```

## First-time setup (required once)

GitHub does not let a workflow turn Pages on for its own repository, so this
has to be done by hand a single time:

1. Go to **Settings → Pages** in this repo
   (https://github.com/wtateo03-web/Kiwi-Compliance/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

That's it — no branch or folder to choose. The next push deploys
automatically, or re-run the latest job from the **Actions** tab to publish
immediately. After that this step never needs repeating.

## Custom domain

The site is served from **https://kiwicompliance.com** (registered at IONOS).

`site/CNAME` holds the domain — GitHub Pages reads that file on every deploy,
so it must stay in place. Deleting it drops the site back to the
`wtateo03-web.github.io/Kiwi-Compliance` URL.

DNS records required at IONOS:

| Type  | Host  | Value                                                     |
|-------|-------|-----------------------------------------------------------|
| A     | `@`   | `185.199.108.153`                                          |
| A     | `@`   | `185.199.109.153`                                          |
| A     | `@`   | `185.199.110.153`                                          |
| A     | `@`   | `185.199.111.153`                                          |
| AAAA  | `@`   | `2606:50c0:8000::153`                                      |
| AAAA  | `@`   | `2606:50c0:8001::153`                                      |
| AAAA  | `@`   | `2606:50c0:8002::153`                                      |
| AAAA  | `@`   | `2606:50c0:8003::153`                                      |
| CNAME | `www` | `wtateo03-web.github.io`                                   |

GitHub issues a free TLS certificate once DNS resolves; tick **Enforce HTTPS**
in Settings → Pages after that appears.

## Current status

The published page is a placeholder. Real content replaces `site/index.html`
once the copy and details are supplied.
