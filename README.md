# Shiqian Li · Personal Website

The personal homepage of Shiqian Li, an algorithm / AI engineer — a single-file static site with no build step and no framework dependencies.

## Features

- **Bilingual (ZH / EN)** — toggle in the top bar; preference saved locally
- **Light / dark / system** themes
- **⌘K command palette** — jump to any section from the keyboard
- **Interactive effects** — glassmorphism, ambient blobs, card tilt, scroll reveal; gyroscope support on mobile
- **Holographic sticker easter egg** — the "don't click" sticker in the bottom-right corner
- **Visit counter** — page visits and sticker clicks in the footer, proxied to Supabase via `/api/counter`
- **Vercel Speed Insights** — real-user performance data
- Respects `prefers-reduced-motion`

## Structure

```
index.html        # all content, styles, and interactions (single file)
api/counter.js    # Vercel Serverless Function: Supabase counter proxy
package.json      # only for local preview (serve) and Speed Insights deps
vercel.json
favicon-32.png
apple-touch-icon.png
```

## Live site

**https://personal-website-joeli518.vercel.app**

Deployed on Vercel; `api/` is registered automatically as a Serverless Function.

## License

MIT © Shiqian Li

---

> This repo is a showcase page. The full source is currently not public.
