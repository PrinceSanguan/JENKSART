---
workflow: product-launch-video
flow: automation
storyboard: no
message: "Your blank wall can become a landmark — and Jenks prices it to your budget"
destination: facebook-reels
aspect: 1080x1920
language: en-GB
audience: "Homeowners, shopfronts, cafes, gyms and schools across Swansea, Llanelli and South Wales who have a dead exterior or interior wall"
length: 45s
angle: transformation
narration: yes
---

## Intent

A 45-second vertical promo for **JenksArt** (Jenks) — a verified Welsh street
artist and muralist working out of Swansea and Llanelli, recently painting in
Bristol. Built for Facebook Reels, where his page already posts reels to 17K
followers.

The angle is **Blank Wall → Masterpiece**: open on a dead grey wall, let colour
erupt across it, resolve into finished mural work, and close on his own
positioning — *"prices to match budgets"* — plus a single clear way to contact
him.

This angle was chosen deliberately: the dossier shows `jenksart.com` is 61 words
with **zero images** — a visual artist whose own website shows no visuals. The
video does the job his site fails to do: it shows the transformation and asks
for the enquiry.

Tone: bold, street, confident. Spray-paint and concrete, not corporate gloss.
Welsh pride without being twee.

## Assets

- assets/bgm.mp3 — house background track (trimmed to 45s with fades); copied from
  the hyperframes `changelog-video` skill assets, chosen because HeyGen music
  retrieval and local generation are both unavailable offline.
- assets/murals/ — **labelled photo slots, currently empty.** Designed stand-ins
  render in their place so the video is complete without them. Drop in full-res
  mural photos (ideally portrait, ≥1080px wide) to upgrade the piece.

## Customizations

- Voice-over is **not** generated in-project. `SCRIPT.md` is delivered as a
  timed, ElevenLabs-ready script for the user to render themselves; the
  composition carries a silent VO slot cut to the script's beats so the
  generated audio drops in without retiming.
- Designed street-art visual system: concrete texture, overspray grain, stencil
  display type, paint-stroke mask reveals — all generated in HTML/CSS/SVG so the
  render stays deterministic.
- Real contact details from research, verbatim: jenksart3@gmail.com,
  07817 428594, facebook.com/jenksart1.

## Notes

- Facebook blocks automated capture and its photo grid only serves 200–384px
  thumbnails, so there is no site/page capture. This is a no-capture run.
- Social proof available if wanted: 17K followers, 96% recommend, 18 reviews.
- Do not claim awards, years of experience, or client names — none are
  evidenced in the research.
- Research base: D:\NEXTjs\HYPERRESEARCH/research/notes/prospect-jenksart.md
  and jenksart-facebook*.md.
