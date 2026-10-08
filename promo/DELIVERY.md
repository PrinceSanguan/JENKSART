# JenksArt — 45s promo video

A 45-second vertical (9:16) promotional video for **JenksArt**, the Welsh street
artist / muralist at [facebook.com/jenksart1](https://www.facebook.com/jenksart1/).
Built for Facebook Reels.

---

## What to open first

| File | What it is |
|---|---|
| **`renders/video.mp4`** | The finished video — voiceover, music and SFX. 1080×1920, 45.0s. |
| `ELEVENLABS-SCRIPT.md` | The voiceover script, and the timings of the take that is in the film. |
| `index.html` | The composition. `npm run dev` to preview and edit in Studio. |
| `snapshots/contact-sheet-*.jpg` | Frame-by-frame review sheets. |

---

## The video

**Angle: Blank Wall → Masterpiece.** It opens on the dead wall everyone has
stopped seeing, erupts into colour, and closes on his own budget line and three
ways to contact him.

| # | Frame | In | Out | Beat |
|---|---|---|---|---|
| 1 | The wall nobody looks at | 0.00s | 4.12s | Hook — recognition |
| 2 | Until someone picks up a can | 4.12s | 10.67s | The transformation |
| 3 | This is JenksArt | 10.67s | 18.09s | Who he is |
| 4 | If it's got a wall | 18.09s | 25.64s | Range (domestic + commercial) |
| 5 | Prices to match budgets | 25.64s | 30.16s | Objection kill |
| 6 | The receipts | 30.16s | 36.37s | Social proof |
| 7 | Give him a shout | 36.37s | 45.00s | One ask, three routes |

These cuts are **timed to the delivered voiceover**, not to the original plan —
see below.

Two deliberate choices worth knowing:

- **Frame 5 is the only orange frame in the film.** The register flip on *"prices
  to match budgets"* makes his own budget line the loudest moment, because
  "probably expensive" is what kills a mural enquiry.
- **The voiceover never reads the phone number aloud.** Digits burn spoken
  seconds and nobody memorises them from a reel, so they hold on screen for the
  full 7.5-second closing frame instead.

---

## The voiceover

Rendered in ElevenLabs on 2026-10-08 — model **v4**, voice **"Hope — upbeat and
clear"**, speed 0.96 / stability 50 / similarity 75. It is in the film.

The take ran **41.17s**, and its pacing differed line-by-line from the authored
plan: it rattles the surface list off in 5.0s where the plan allowed 8.0s, and
takes 7.1s over the murals line where the plan allowed 5.5s. So the **frame cuts
were moved onto the voice** rather than the voice being stretched to the frames.

The seven lines were split at the take's own pause boundaries (with 0.06s
pre-roll and 0.08s post-roll so no consonant attack is clipped) and re-placed so
each lands 0.25s after its frame's cut. **Nothing inside a line was retimed** —
the delivery is exactly as ElevenLabs rendered it. Each cut was also floored at
that frame's own end-of-motion so no animation got truncated; frames 2 and 4 are
motion-bound rather than voice-bound, which is where the two long voice gaps sit.

The closing frame grew from 7.5s to 8.63s, so its fade to black was re-anchored
to the end of the frame — left at its authored 7.1s it would have blacked the
screen out 1.1s before the final word.

Full placement table: `STORYBOARD.md` § Voiceover.

**Mix:** voice compressed (-18 dB, 3:1) then lifted to -16.3 LUFS / -1.7 dBTP;
music bed ducked to 0.25 (-12 dB). The master lands at **-14.5 LUFS / -1.5
dBTP** — on target for Facebook, with the render's limiter touching only 1.3 dB.

If you re-record the VO, say the word and the cut gets re-timed to the new take.

---

## Adding his real mural photos

Every mural in the video is a **designed stand-in**, built in HTML/CSS/SVG. No
real photos were used: Facebook blocks automated capture and its photo grid only
serves 200–384px thumbnails, far too small for a 1080×1920 frame.

Four slots are ready. Drop files in at these exact paths and the stand-ins get
replaced:

| File | Wanted shot |
|---|---|
| `assets/murals/mural-01.jpg` | The hero mural — boldest, most colourful piece |
| `assets/murals/mural-02.jpg` | A second finished mural, behind the closing card |
| `assets/murals/mural-04.jpg` | A commercial piece: shopfront, cafe, gym or school |

Portrait orientation, ≥1080px on the short edge. Each frame carries a
paste-ready `<img>` block in an HTML comment directly above its stand-in, naming
the one element to swap.

---

## Music

`assets/bgm-45s.mp3` — cut from the house track `assets/bgm.mp3`.

Not taken from the top: the track's first 10 seconds are a quiet build and there
is a breakdown around 50s. The strongest clean entrance is the drop at **60s**,
with no dip through 105s, so the cut is **60.0 → 105.0s** with a 0.6s fade-in and
a 2.5s fade-out, then loudness-normalised to -16 LUFS / -1.5 dBTP. It now sits
at `data-volume="0.25"` under the voice. Four sound effects (two bass impacts,
two whooshes) ride the frame 2, 3, 5 and 7 cuts and moved with them.

---

## The facts in the video, and where they came from

All researched from the verified Facebook page on **2026-10-08** via the
`hyperresearch` vault at `D:\NEXTjs\HYPERRESEARCH`
(`research/notes/prospect-jenksart.md`, `jenksart-facebook*.md`).

| Claim on screen | Source |
|---|---|
| 17K followers | Facebook page header |
| 96% recommend · 18 reviews | Facebook About tab |
| Swansea · Llanelli | Page service area |
| Bristol | His most recent post (Big Pun mural collab) |
| "prices to match budgets" | His page intro, verbatim |
| jenksart3@gmail.com · 07817 428594 | Page contact + jenksart.com |

**Deliberately not claimed:** no awards, no years-of-experience figure, no client
names. None are evidenced in the research, so none are in the video.

---

## Notes

- Design system: the `broadside` preset — ink-black ground, fire-orange as the
  single accent, Barlow 900 lowercase display, IBM Plex Mono chrome.
- Fonts are real files in `assets/fonts/` (Barlow + IBM Plex Mono, both SIL Open
  Font License), so the render does no network fetch and is deterministic.
- Captions are off on this cut. The voice audio now exists, so burned-in
  captions are possible — say the word. The layout already keeps the bottom 17%
  clear, so they can be added without moving anything.
- `hyperframes lint` and `hyperframes check` both pass: 0 errors, and 21/21 text
  checks meet WCAG AA contrast.
