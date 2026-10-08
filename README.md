# jenksart

Portfolio site for **JenksArt** — Steve "Jenks" Jenkins, street artist and
muralist, Llanelli. Static Next.js 16, no database, deploys to Vercel.

```bash
npm install
npm run dev                                     # http://localhost:3000
npm run build
node scripts/check.mjs http://localhost:3000    # layout check + screenshots
```

All content lives in `data/` — `site.ts` (contact and service areas),
`murals.ts` (the eight murals) and `press.ts` (quotes and commissions). There is
no CMS and no API; changing a fact means editing one of those three files.

`promo/` holds a separate HyperFrames project that renders the 30-second
vertical promo video.

No environment variables, no API keys, no backend — it deploys as-is.

See **[HANDOVER.md](./HANDOVER.md)** for deployment, what still needs confirming
with Jenks, and the note about the music licence on the video.
