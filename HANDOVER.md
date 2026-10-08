# JenksArt — handover

Two things were built here:

1. **The website** — static Next.js 16, no database, ready for Vercel.
2. **`promo/`** — a 30-second vertical promo video, cut down from the existing
   45-second JENKSART-PROMO project and upgraded with his real mural photos.

---

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # must pass before deploying
node scripts/check.mjs http://localhost:3000   # layout check at 390px and 1440px
```

Deploy: push to a repo, import on Vercel, set the project name so it lands on
`jenksart.vercel.app`. No env vars are required for it to work.

---

## The enquiry form

**Nothing to configure.** The form hands its answers to the visitor's own mail
app, addressed to `jenksart3@gmail.com` with every field filled in — no form
service, no API key, no account, nothing that can quietly stop working later.

The value of it is the questions it asks: the wall's town, its rough size,
indoor or outdoor, and a budget range. That is the difference between a quote
taking one message and taking eight.

If he ever wants enquiries to land in his inbox without the visitor pressing
send in their own mail app, that is a form service (Web3Forms, Formspree) and
about ten minutes of work in `components/EnquiryForm.tsx`. It is not needed for
this to work.

---

## What to ask Jenks

These are the things that were read off the photographs rather than told to us.
They are marked `unconfirmed: true` in `data/murals.ts` — worth one message.

**Confirm or correct:**

- **Mural titles and locations.** Four of the eight are guesses from what is
  visible in the photo. The Leigh Halfpenny gable end, Andi Pandi's nursery and
  the Mortal Bunny shutter are certain, because the detail is painted on the
  wall. The others are not.
- **The About page story.** It says he trained as an engineer, painted around a
  normal job, painted NHS tribute murals while work stopped in lockdown, and
  went full time a year later. That comes from press coverage, and one source
  says "electrical engineer" where another says "factory job". He should read
  that paragraph before it goes public.

**Ask him for:**

- **A photo of him painting** — can in hand, mid-wall. Every portfolio site
  needs one and he has none in the set. The promo video has a slot explicitly
  waiting for it.
- **Before-and-after pairs.** A grey wall next to the finished mural is the most
  persuasive asset a muralist can have, and there isn't one here.
- **A mural in a home** — a kid's bedroom or a feature wall. The site offers
  home work because that is genuinely what he does, but all eight photos are
  commercial, community or street pieces.
- **More photos generally.** Eight is thin. The site is designed so it does not
  look sparse, but twenty would be a different thing.

---

## Three free wins to mention

Nothing to do with this site, all worth telling him:

1. **His Facebook Page has no website link set.** 17K followers and nowhere to
   click. One field, two minutes.
2. **His Wix Reviews page is still the unedited template** — it currently shows
   "This is a Paragraph. Click on 'Edit Text'…" to anyone who opens it. He has
   18 real reviews on Facebook that could go there instead.
3. **The "reknowned" typo** on the homepage — already flagged, and spelled
   correctly throughout the new site.

---

## The video

`promo/renders/jenksart-30s.mp4` — 1080×1920, 30fps, 30 seconds.

```bash
cd promo
npx --yes hyperframes@0.8.141 check     # validate
npx --yes hyperframes@0.8.141 render -o renders/jenksart-30s.mp4
```

**How the 30s cut was made.** The original is 45 seconds across seven scenes.
Four were kept: the dead wall, the turn, the JenksArt identity, and the call to
action. The other three were dropped rather than shortened, because each scene's
animation has hard-coded beats late in its own timeline — scene 2's headline
lands at 5.6s, scene 4's last move at 7.05s — so trimming a scene deletes its
payoff. The four kept scenes are *extended* slightly instead, and the extra time
holds on the revealed mural and on the contact details.

The voice-over was re-cut locally with ffmpeg from the original ElevenLabs take,
sliced at its measured silence boundaries, so no new voice generation was needed.
Each kept line starts 0.2s after its scene cut, the same offset the original used.

**Two of his photos are now in the film** — the Mortal Bunny shutter is the
mural the particle field reveals, and the ladybird portrait backs the closing
card. Before this, every mural in the video was a designed stand-in, because
Facebook blocked automated capture, so this is the first version showing his
actual work.

A third photo (the Andi Pandi's nursery) is wired into the `04-surfaces` scene,
but that scene is one of the three dropped for the 30s cut, so it does not
appear. It is ready and waiting if a longer cut is ever wanted — which is the
strongest argument for asking Jenks for more photos: **the film has room for
more of his work than there are photos to fill it.**

### ⚠️ Swap the music before he posts it publicly

`promo/assets/bgm.mp3` was borrowed from a HyperFrames sample asset pack, and
**its licence has not been verified for commercial use.** It is fine for showing
him privately. If he wants to post the video to his 17K followers, replace it
with a properly licensed track first — the sound effects are clear (Pixabay
licence, commercial use permitted, no attribution required), it is only the music
bed that is in question.

---

## Where things live

| Path | What |
|---|---|
| `data/site.ts` | Name, phone, email, service areas. **Change contact details here only.** |
| `data/murals.ts` | The eight murals — titles, captions, categories, alt text |
| `data/press.ts` | Press quotes and the notable commissions |
| `app/globals.css` | Colour tokens and type. The accent is `#E85D26`, matching the video |
| `public/murals/` | The photos, renamed from their Facebook filenames |
| `_source-photos/` | The untouched originals as he sent them |
| `scripts/check.mjs` | Layout + screenshot check |
| `promo/` | The HyperFrames video project |

The site and the video deliberately share a palette and typeface (Barlow +
IBM Plex Mono, `#111111` on `#E85D26`), so they read as one piece of work.
