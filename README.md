# Kiwi Compliance — website

A static website hosted free on GitHub Pages. Every push to the deploy branch
rebuilds and republishes it automatically; there is no server to keep running
and nothing to pay for, so it stays up on its own.

**Live URL:** https://wtateo03-web.github.io/Kiwi-Compliance/

## Layout

```
site/            everything that gets published
  index.html     the home page
  assets/        images, extra CSS/JS
.github/workflows/deploy.yml   the auto-deploy pipeline
```

Only the contents of `site/` are published. Anything outside it (this README,
the workflow) stays in the repo but never appears on the web.

## Making a change

Edit a file in `site/`, commit, and push. GitHub Actions publishes the new
version within a minute or two. Progress is visible under the repo's
**Actions** tab.

To preview locally before pushing, open `site/index.html` in a browser, or
serve the folder:

```
python3 -m http.server -d site 8000    # then visit http://localhost:8000
```

## First-time setup

The workflow enables GitHub Pages itself on its first successful run. If it
fails with a permissions error instead, enable it manually once:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

then re-run the failed job from the Actions tab.

## Using a custom domain later

1. Add a file `site/CNAME` containing just the domain, e.g. `kiwicompliance.co.nz`
2. At your domain registrar, point the domain at GitHub Pages:
   - apex domain (`kiwicompliance.co.nz`) → A records to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` subdomain → CNAME to `wtateo03-web.github.io`
3. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS**.

## Current status

The published page is a placeholder. Real content replaces `site/index.html`
once the copy and details are supplied.
