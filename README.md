# Shiqian Li · Personal Website

English | [中文](README.zh.md)

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

## Local preview

```bash
npm install
npm run dev
```

Or use any static server:

```bash
python -m http.server 8000
```

> The counter depends on `/api/counter`, so it silently fails under a plain static preview and doesn't affect anything else.

## Deployment

Deploy to Vercel (the root directory is the output directory); `api/` is registered automatically as a Serverless Function.

Optional environment variables:

| Variable | Description |
| --- | --- |
| `SB_URL` | Supabase project URL |
| `SB_ANON` | Supabase anon key |

Defaults from `api/counter.js` are used when unset.

## License

MIT © Shiqian Li
