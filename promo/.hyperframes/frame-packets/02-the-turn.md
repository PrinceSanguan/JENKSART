# Frame packet: 02-the-turn

## Project inputs

- Project: D:\NEXTjs\JENKSART-PROMO
- Design tokens: D:\NEXTjs\JENKSART-PROMO\frame.md
- RULES_DIR: C:\Users\Dionisio Samillano\.claude\skills\hyperframes-animation\rules

## Assigned storyboard block

## Frame 2 — Until someone picks up a can

- scene: Colour erupts across the dead wall and resolves into finished mural work
- duration: 7.5s
- poster: 5s
- transition_in: cut
- status: outline
- voiceover: "Until someone picks up a can. And turns it into the reason people stop and stare."
- blueprint: video-text-pivot (Adapt)
- type: benefit_highlight
- persuasion: The transformation, paid in one shot — contrast IS the sales argument
- beat: eruption
- focal: assets/murals/mural-01.jpg
- roles: mural-01 = cutout (hero) · concrete-wall = background (dims to ~40% behind the reveal) · particle field = supporting
- sfx: impact-bass-1
- asset_candidates: assets/murals/mural-01.jpg (user-fillable slot — designed colour-burst stand-in renders when absent); designed paint-stroke SVG mask reveal
- handoff_in: concrete-wall plane — full-bleed, x 0 / y 0, scale 1.0, opacity 1, motionless; it continues from Frame 1 unchanged and only starts moving at Scene 3
- src: compositions/frames/02-the-turn.html

The whole video's promise, paid in one shot. This is the AFTER of the before-after:
the same wall, transformed. The turn must be sudden and physical — paint arriving
with force, not a gentle crossfade — because the sales argument IS the contrast.
Carries the mural photo slot: this is the frame most improved by a real photo.

Adapt: keep the signature weight-transfer — the incumbent surface YIELDS into the very space the
hero now fills, as one event — but the roles swap: the dead wall is the incumbent and the mural is
the hero, and the particle field (not a slide) performs the handover.

Scene 1 (0.0-1.4s): the concrete plane continues from Frame 1, untouched. On "picks up a can", a single `fire-orange` spray stroke SLASHES diagonally across the lower-middle — an SVG path drawing from its measured length, fast, overspray blooming along its edge. The bass impact lands with it. Rule-of-thirds, 3 layers.
Scene 2 (1.4-3.6s): two further strokes cross the first on their own beats — one `cream`, one `fire-orange` — and a seeded particle field begins converging where the three meet. Colour is arriving; no image yet.
Scene 3 (3.6-5.6s): the signature transfer. The converged particle field settles and the mural panel reveals BENEATH it, growing out of the stroke cluster to fill the upper ~70% of frame exactly as the concrete plane slides down and dims to ~40% behind it. One weight transfer, read as a single event. Layered-depth, 3 layers.
Scene 4 (5.6-7.5s): on "stop and stare", the display line lands across the mural's lower third — Barlow 900 lowercase `cream` over an ink scrim sized to the text so the mural still reads around it. Then holds still. Centered over the mural, type ~40% of frame.

## Selected blueprint: video-text-pivot

# video-text-pivot — Video → Text Pivot

**intent**: A product video holds center and claims attention, then slides aside to hand its weight to a hero stat in the space it vacates, then both clear and kinetic text types into the center — accent words carrying the meaning the video used to carry — sealed by a gradient pill. The arc is "show → yield → pivot → stamp," and each handoff pairs an exit with a same-anchor entrance so two beats read, not four.

**roles served**

- Product_Intro (from `metric-video-text-pivot`): when the open is "see the feature" then "see the impact" and the `[product video]` must stay visible through the stat reveal — it slides, it doesn't cut.
- Key_Feature: a feature clip that yields to a frame-filling metric and a typographic impact line.

**duration**: 6–8s

**shot structure** (a `[bg]` canvas; one `[product video]` as a real muted `.mp4` clip, a hero stat, then kinetic text — each pair shares a screen anchor so the handoff reads as a weight-transfer)

- **Scene 1 (0.0–~1.6s) — the video shows.** The `[product video]` lands centered on a smooth scale-up and breathes (a small y-bob), claiming full attention. Camera static.
- **Scene 2 (~1.6–3.2s) — yield + stat (signature move).** The video SLIDES aside (x + scale down) **into the very space** the `[hero stat]` now fills as the stat pops in with 3D-depth type — one weight-transfer reading as a single event, not two. The stat breathes within this window.
- **Scene 3 (~3.2–5.0s) — pivot to text.** Both video and stat clear out and kinetic `[impact text]` TYPES into the vacated center, character by character; its `[accent words]` carry the meaning the video used to carry.
- **Scene 4 (~5.0–end) — stamp.** A gradient `[pill]` snaps shut around the closing line (`scaleX` 0→1), its glow halo resolving a beat behind so the silhouette reads before the bloom — sealing the statement as one graphic. Holds.

**motion vocabulary**: video scale-in + small breath; weight-transfer slide (video x + scale-down handing off to the stat at the same anchor); 3D-depth stat type; character-stream typing; gradient pill scaleX-snap; glow-halo bloom trailing the silhouette.

**rule mapping**

- video entrance (smooth) and the weight-transfer slide → `gsap-effects` (scale/opacity then x + scale on a long-tail `power3`); the video itself is a muted `<video class="clip">` direct child of the root
- hero stat's frame-filling 3D type → `3d-text-depth-layers` (static-depth variation — layers built at setup, no cascade fighting the entry)
- the same-anchor video-exit ↔ stat-entry handoff (if treated as a morph) → `scale-swap-transition` (shared center)
- character-by-character impact typing through segmented spans → `dynamic-content-sequencing` (clean character stream) or `discrete-text-sequence`
- pill `scaleX` snap + trailing glow halo → `gsap-effects` (scaleX) + `ambient-glow-bloom` (the halo, resolving a beat behind)
- video / stat breath within their windows → `sine-wave-loop` (low-amplitude register — subtle jitter, gated to each element's window, never a forever loop)

**camera modifier**: camera-static — all motion is element-space (the video translates), so the "pivot" is the elements moving, not a camera.
