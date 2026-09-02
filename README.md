# Kiwi Compliance — website

A Next.js site exported to static files and hosted free on GitHub Pages. Every
push to the deploy branch rebuilds and republishes it automatically; there is no
server to keep running and nothing to pay for, so it stays up on its own.

**Live URL:** https://kiwicompliance.com

## Running it locally

```
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
```

`npm run build` writes plain HTML/CSS/JS to `out/`. That directory is what gets
published — there is no server-side rendering at runtime.

## Layout

```
app/
  layout.jsx          document shell, fonts, metadata
  page.jsx            the homepage — composes the sections in order
  globals.css         the whole design system: tokens first, then sections
  privacy/, terms/    legal pages
components/
  Nav, Hero, HeroFlow           header and the inputs → Kiwi → outputs visual
  MessToOrder                   the scroll transformation (section 2)
  HowItWorks, Diagrams          four stages and their SVGs
  BeforeAfter                   the tangle vs. the hub
  Platform, platformData        the interactive product showcase
  OperatingModel                the defining Kiwi-in-the-middle diagram
  Technology, Services, MultiSite, Trust, About, FinalCta, Footer
  Icons                         the line icon set
  hooks.js                      in-view, scroll progress, count-up
public/
  CNAME               the custom domain — do not delete
  favicon.svg, robots.txt, sitemap.xml
.github/workflows/deploy.yml    build + publish pipeline
```

## Editing copy

All copy lives in the component that renders it, as plain JSX text. There is no
CMS. Change the words, commit, push — the deploy runs itself.

The platform demo's data is in one place: `components/platformData.js`. The
figures reconcile deliberately (2,291 current + 119 due + 28 action = 2,438
assets, which is the 94.0% headline). If you change one, change the others.

## Design tokens

Colours, type and spacing are CSS custom properties at the top of `globals.css`.

```
Ink            #10201B    primary dark
Kiwi green     #316B4E    primary
Fresh accent   #A7D94B    accents only — status marks, active states, one focal block
Warm           #F6F7F2    page background
Border         #DEE4DC
Muted          #69756E
Dark section   #13241E
```

Three functional status colours (current / due / action) sit alongside these,
each with a lighter variant for dark backgrounds. Inside the platform window the
dark-mode tokens are re-pointed to their light values, so the app UI keeps full
contrast while sitting on a dark section.

Type is Geist, with Geist Mono for figures and dates, loaded from Google Fonts.

## Motion

Motion explains and then stops: entrance reveals of a few pixels, one count-up
per figure, connector lines that draw once, and the scroll-linked mess-to-order
transformation in section 2. Everything is disabled under
`prefers-reduced-motion`. Scroll-driven values are never also CSS-transitioned —
that combination lags behind the scroll and shows two states at once.

## First-time Pages setup (once)

GitHub does not let a workflow turn Pages on for its own repository:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. **Settings → Pages → Custom domain:** enter `kiwicompliance.com` and Save.

Step 2 matters: with an Actions-based deploy the `CNAME` file alone does not
register the domain. The file still needs to stay in `public/` so the domain
survives each deploy.

## DNS (IONOS)

| Type  | Host  | Value |
|-------|-------|-------|
| A     | `@`   | `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` |
| AAAA  | `@`   | `2606:50c0:8000::153` … `8003::153` |
| CNAME | `www` | `wtateo03-web.github.io` |

## Still outstanding

- `william@kiwicompliance.com` needs creating — it is on every call to action.
- Privacy and terms are honest holding pages, not solicitor-drafted documents.
- "Client login" has no destination yet and points at the contact section.
- No company number or registered office is stated; add them once incorporated.
