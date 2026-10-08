---
format: 1080x1920
duration: 45s
message: "Your blank wall can become a landmark — and Jenks prices it to your budget"
arc: Before (dead wall) → After (the mural) → Bridge (JenksArt) → Range → Price → Proof → CTA
audience: Homeowners and businesses across Swansea, Llanelli and South Wales with a dead wall
mode: autonomous
music: none
---

## Video direction

- **palette system** — `frame.md` (broadside) is the only colour truth. Two registers, one per
  frame: **dark** (ground `ink-black` / `ink-black-alt`, text `cream`, accent `fire-orange`) and
  **orange** (ground `fire-orange`, text `ink-black`). Frames 1-4, 6, 7 are dark; **Frame 5 is the
  single orange frame** and is therefore the loudest moment in the film. Accent is scarce by
  design — `fire-orange` marks exactly one thing per frame.
- **type by role** — display = Barlow 900 **lowercase**, negative tracking (the graphic primitive);
  chrome/labels = IBM Plex Mono **uppercase** 0.14em; body = Barlow 400. Never by raw family or px.
- **motion grammar + reveal model** — `power3` long-tail eases throughout; smooth over bouncy.
  Every frame is **VO-paced**: at t=0 only what the voiceover is saying then is on screen, and each
  further piece reveals on its own spoken cue, weighted into the back half. No front-loading.
  During a hold, at most a **subtle jitter** or the grain field stays alive — nothing else.
- **the film's texture** — a concrete/overspray grain field runs over every frame (`grain-overlay`),
  carried unbroken across cuts so seven shots read as one wall.
- **rhythm / held-frame allocation** — Frames 1, 5 and 7 are the **held beats**: Frame 1 ends on
  dead stillness so the Frame 2 eruption has somewhere to go; Frame 5 is the deliberate breather
  before the proof; Frame 7 holds the final lockup dead still for ~3.6s so the contact details can
  actually be read and acted on. Frames 2, 4 and 6 carry the motion load.
- **negative list** — no nav bars, footers, scrollbars, cursors or browser chrome; no bokeh or
  purple-blue "AI" gradients; no cream/paper register (the pack forbids a third surface); no
  stock-photo aesthetics. Both motion failure modes are banned: **slideshow** (dump everything by
  ~25% then freeze) and **screensaver** (everything floating independently). No lazy breathing, no
  back-half pan or push.
- **caption keep-out** — the bottom ~17% of the canvas stays clear of anything load-bearing, even
  though captions are disabled on this cut (bottom-edge consistency).
- **voiceover** — rendered externally in ElevenLabs by the user, then delivered and cut in. The
  frame durations below are timed to that take, not to `SCRIPT.md`'s planned windows (see
  § Voiceover).

## Voiceover (delivered take)

Rendered in ElevenLabs on **2026-10-08** — model **v4**, voice **"Hope — upbeat
and clear"**, speed 0.96, stability 50, similarity 75. Source file:
`ElevenLabs_2026-10-08T12_07_12_Hope - upbeat and clear_pvc_sp96_s50_sb75_v4.mp3`
(41.17s, mono).

The take's own pacing differs line-by-line from the authored plan — it rattles
the surface list off in 5.0s where the plan allowed 8.0s, and takes 7.1s over
the murals line where the plan allowed 5.5s. So **the frame cuts were moved to
the voice**, not the other way round: each cut sits 0.25s before its line's
speech onset, floored at that frame's own end-of-motion so nothing truncates.
Total stays exactly 45.000s.

The seven lines were split at the detected pause boundaries (±0.06s pre-roll /
0.08s post-roll so no phoneme attack is clipped) and re-placed. Nothing inside a
line was retimed — its internal pacing is exactly as ElevenLabs rendered it.

| Line | Source in→out | Placed at | Frame | Frame window | Motion ends |
|---|---|---|---|---|---|
| 1 | 0.00→3.72 | 0.36 | 01 dead-wall | 0.00–4.12 | 3.47 |
| 2 | 4.08→9.05 | 4.37 | 02 the-turn | 4.12–10.67 | 6.44 |
| 3 | 9.43→16.49 | 10.92 | 03 jenksart | 10.67–18.09 | 3.64 |
| 4 | 16.85→21.89 | 18.34 | 04 surfaces | 18.09–25.64 | 7.50 |
| 5 | 22.32→26.49 | 25.89 | 05 budgets | 25.64–30.16 | 3.95 |
| 6 | 26.75→32.60 | 30.41 | 06 proof | 30.16–36.37 | 5.24 |
| 7 | 32.92→41.17 | 36.62 | 07 cta | 36.37–45.00 | 8.63† |

† Frame 07's fade to black was re-anchored from its authored 7.10s to 8.23s when
the frame grew; left where it was, it blacked the screen out 1.1s before the
last word landed.

Last word ("JenksArt.") ends at **44.87s**, with that 0.4s fade running under
its tail. Frames 02 and 04 are motion-bound
rather than voice-bound — their animations need 6.44s and 7.50s while their
lines run 4.97s and 5.04s — so the two long voice gaps (1.44s before line 3,
2.37s before line 5) fall inside those frames while they are still animating.

Mix: voice compressed (-18dB / 3:1) then lifted to **-16.3 LUFS / -1.7 dBTP**;
music bed ducked to `data-volume="0.25"` (-12 dB, so ~-28 LUFS under the voice).

## Frame 1 — The wall nobody looks at

- scene: A dead grey wall fills the vertical frame; one line lands on it like a stencil
- duration: 4.12s
- poster: 3s
- transition_in: cut
- status: animated
- voiceover: "Every street has one. The wall nobody looks at."
- blueprint: kinetic-type-beats (Adapt)
- type: hook
- persuasion: Recognition — the viewer supplies the wall from their own street
- beat: dead calm
- focal: designed concrete-wall ground
- roles: concrete-wall = background (full-bleed, NOT dimmed — the wall is the subject) · grain field = supporting
- sfx: none
- asset_candidates: designed concrete-wall ground (CSS/SVG — overspray grain, mortar lines, damp staining); no captured assets exist
- handoff_out: concrete-wall plane — full-bleed, x 0 / y 0, scale 1.0, opacity 1, motionless at the cut
- src: compositions/frames/01-dead-wall.html

Open on the "before". No product, no brand, no pitch — just the thing the viewer
already owns and has stopped seeing. The hook is recognition, not information:
every viewer can picture the wall on their own street, or their own gable end.
Deliberately drained of colour so Frame 2's eruption has somewhere to go.

Adapt: keep the flat fixed-centre single-beat shape and the hard-cut flash entrance; the blueprint's
solid colour field becomes a dead concrete plane, because the field itself is the subject here.

Scene 1 (0.0-1.6s): full-bleed dead concrete plane — `ink-black-alt` ground, faint mortar seams on a rule-of-thirds division, a damp stain low-left, grain running over all of it. Nothing else on screen. The wall is motionless; only the grain lives. Full-width strip, 3 depth layers (stain / mortar / grain).
Scene 2 (1.6-3.0s): on "every street has one", a mono label hard-cut FLASHES into the upper third — `EVERY STREET HAS ONE`, small, `cream-hint`, dwarfed by the empty wall around it. No fade, no slide — the cut is the beat. Upper-third placement.
Scene 3 (3.0-5.0s): on "the wall nobody looks at", the display line lands dead-centre in two lines — massive Barlow 900 lowercase `cream`, per-word staggered reveal on `power3`. The mono label above holds. For the final ~0.8s the frame goes completely STILL — no jitter, no drift; the stillness is the payload the next cut detonates. Centered, display ~55% of frame.

## Frame 2 — Until someone picks up a can

- scene: Colour erupts across the dead wall and resolves into finished mural work
- duration: 6.55s
- poster: 5s
- transition_in: cut
- status: animated
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

## Frame 3 — This is JenksArt

- scene: The JenksArt wordmark sprays into existence through a stencil
- duration: 7.42s
- poster: 4s
- transition_in: cut
- status: animated
- voiceover: "This is JenksArt. Welsh street artist. Murals across Swansea, Llanelli — and most recently, Bristol."
- blueprint: logo-assemble-lockup (Adapt)
- type: product_intro
- persuasion: Credentials by demand — three place names prove a working muralist
- beat: the name
- focal: designed stencil wordmark
- roles: wordmark = cutout (hero) · place-name rail = supporting · concrete = background (dim ~50%)
- sfx: whoosh-short
- asset_candidates: designed stencil wordmark (no logo file exists); designed place-name rail
- src: compositions/frames/03-jenksart.html

Name the artist only after the promise has landed. The three place names do real
work — they establish that this is a working muralist with demand beyond his own
town, which is the closest thing the research gives us to credentials. Bristol is
verbatim from his latest post; no claims beyond the evidence.

Adapt: keep the blueprint's spine — the mark COMES TO EXIST rather than fading in — but drop the
camera push-through variant: a vertical frame with a centred mark has no negative space to fly
through, and a Z-push would fight the rail that follows. The mark assembles from a spray-particle
cloud instead, which is the same "built from parts" idea in this film's own material.

Scene 1 (0.0-1.8s): dark field, concrete ghosted to ~50%. On "This is JenksArt", the wordmark ASSEMBLES from a seeded particle cloud — particles converge onto the glyph pixels and resolve into massive Barlow 900 lowercase `cream`, dead-centre. The short whoosh rides the convergence. Centered, mark ~60% of frame width.
Scene 2 (1.8-3.0s): on "Welsh street artist", a mono label flashes in beneath the mark — `WELSH STREET ARTIST`, uppercase 0.14em, `fire-orange` — and a 1px `cream` hairline draws left-to-right between mark and label.
Scene 3 (3.0-5.5s): the place names land one per spoken name as stacked mono plates — `SWANSEA`, then `LLANELLI`, then `BRISTOL` — each staggered onto the rail with a small `fire-orange` tick drawing beside it. After `BRISTOL` the frame settles and holds still. Stacked rail below centre, all within the top 83%.

## Frame 4 — If it's got a wall

- scene: Surface types cascade in as stencilled plates, filling the frame
- duration: 7.55s
- poster: 6s
- transition_in: cut
- status: animated
- voiceover: "Gable ends. Shopfronts. Cafés, gyms, barbers, schools. Kids' bedrooms. If it's got a wall, he'll paint it."
- blueprint: grid-card-assemble (Reproduce)
- type: feature_showcase
- persuasion: Breadth — and the one beat that speaks to a commercial buyer
- beat: accumulation
- focal: designed stencil plates
- roles: stencil plates = cutout · mural-04 = supporting (ghosted ~20% behind the grid) · concrete = background (dim ~55%)
- sfx: none
- asset_candidates: designed stencil plates, one per surface type; assets/murals/mural-04.jpg (commercial-wall slot, optional)
- src: compositions/frames/04-surfaces.html

Breadth beat, and the one that reaches the higher-ticket buyer. His page intro
says "a mural or artwork on something" — so the list deliberately mixes domestic
and commercial, because nothing in his current web presence speaks to a business
buyer at all. Each plate lands as the voiceover names it.

Reproduce: the Key_Feature grid variant — labeled plates assembling into a brick grid on a tight
stagger, near-static hold, headline book-end. No camera reveal, and no push-in on the hold.

Scene 1 (0.0-1.0s): dark field, concrete at ~55%, mural-04 ghosted to ~20% behind everything. On "Gable ends", the first stencil plate arrives upper-left — a `cream`-outlined rectangle carrying `GABLE ENDS` in mono uppercase — fading and sliding a short distance into its slot. Low drama. A 2-column brick grid is implied but otherwise empty.
Scene 2 (1.0-1.9s): on "Shopfronts", the second plate lands to its right, same arrival.
Scene 3 (1.9-4.2s): `CAFÉS`, `GYMS`, `BARBERS`, `SCHOOLS` cascade one per spoken word into rows 2-3 on a tight stagger. Each plate's border flashes `fire-orange` as it lands, then settles to `cream-hint` — the accent marks only the newest arrival.
Scene 4 (4.2-5.3s): on "Kids' bedrooms", the last plate lands spanning both columns — deliberately the odd one out, and the beat that says this is not only a commercial service.
Scene 5 (5.3-8.0s): on the payoff, every plate dims to `cream-hint` and the display line lands over the grid — "if it's got a wall" in Barlow 900 lowercase `cream`, then "he'll paint it" arriving on its own beat in `fire-orange`. The grid holds static beneath; no push-in, no float.

## Frame 5 — Prices to match budgets

- scene: The frame flips to the fire-orange register; his own line stands alone
- duration: 4.52s
- poster: 4s
- transition_in: cut
- status: animated
- voiceover: "And before you ask — prices to match budgets. His words, not ours."
- blueprint: titlecard-reveal (Reproduce)
- type: benefit_highlight
- persuasion: Objection kill — answered out loud, and attributed
- beat: held breather (the register flip is the drama)
- focal: the quote line
- roles: orange register = background (full-bleed) · quote = cutout
- sfx: impact-bass-2
- asset_candidates: designed full-bleed orange register with quote treatment; no assets needed
- src: compositions/frames/05-budgets.html

The objection kill. "Probably expensive" is what stops a mural enquiry, so it is
answered out loud and attributed — the words are lifted verbatim from his own
Facebook page intro, which is why the frame says "his words, not ours". The
register flip makes it the loudest moment in the video.

Reproduce: the Benefits crossfade variant — exactly ONE restrained move brings the calm card to
centre, then a still hold. Low motion is the payload. The register flip supplies all the force this
beat needs; adding a second move would spend it.

Scene 1 (0.0-1.0s): the register FLIPS on the cut — full-bleed `fire-orange` plane, `ink-black` type, grain carried over from the dark frames. The bass impact lands on the flip. On "and before you ask", a mono label sits in the upper third: `AND BEFORE YOU ASK` in `ink-on-orange-muted`. Full-bleed, 2 layers.
Scene 2 (1.0-3.3s): the one move — "prices to match budgets" fades in dead-centre while scaling 95% to 100% on a smooth `power3`, massive Barlow 900 lowercase `ink-black` across two lines, with an oversized `ink-black` quote mark sitting behind it at ~12% opacity. Then it holds.
Scene 3 (3.3-5.5s): on "his words, not ours", an attribution rail fills in below — `— JENKSART, IN HIS OWN WORDS` in mono uppercase `ink-on-orange-hint`. The frame then holds DEAD still to the cut: no drift, no push, no jitter. This is the film's allocated breather before the proof.

## Frame 6 — The receipts

- scene: Three figures count up on the dark register
- duration: 6.21s
- poster: 4.5s
- transition_in: cut
- status: animated
- voiceover: "Seventeen thousand people follow his work. Ninety-six percent of reviewers recommend him."
- blueprint: dataviz-countup (Adapt)
- type: social_proof
- persuasion: Proof after value, never before
- beat: accumulation
- focal: the stat stack
- roles: stat blocks = cutout · concrete = background (dim ~60%)
- sfx: none
- asset_candidates: designed count-up stat blocks (17K / 96% / 18); no assets needed
- src: compositions/frames/06-proof.html

Proof after value, never before. All three figures are read straight off the
verified Facebook page on 2026-10-08 — 17K followers, 96% recommend, 18 reviews.
No awards, no years-of-experience claim, no client names: none are evidenced.

Adapt: keep the count-up as the shot's engine, but drop the Z push-THROUGH signature — in a
1080x1920 frame with three stacked figures, a push through one stat would throw the other two off
the read. The escalation comes from the counters themselves and their stagger instead.

Scene 1 (0.0-1.2s): dark field, concrete at ~60%. A mono label flashes into the upper third — `FACEBOOK · VERIFIED PAGE` in `cream-hint`. Nothing else yet.
Scene 2 (1.2-3.0s): on "seventeen thousand", the first figure lands upper-centre and COUNTS 0 to 17K — massive Barlow 900 `fire-orange` on tabular figures so the digits do not jitter as they climb — with `FOLLOWERS` in mono `cream-hint` beneath it. It resolves and locks.
Scene 3 (3.0-4.6s): on "ninety-six percent", the second figure lands below it and counts 0 to 96% in `cream`, with `RECOMMEND HIM` in mono beneath. A 1px `border-dark` hairline separates the two blocks.
Scene 4 (4.6-6.0s): the third figure fills in quietly on the rail — `18 REVIEWS` in mono uppercase, no count-up, because it is supporting evidence and not a headline. All three hold still to the cut. Stacked, 3 blocks, top 83%.

## Frame 7 — Give him a shout

- scene: Contact details lock up over a finished wall; the mark holds last
- duration: 8.63s
- poster: 5.5s
- transition_in: cut
- status: animated
- voiceover: "Got a wall that deserves better? Give him a shout — the details are on screen. JenksArt."
- blueprint: cta-morph-press (Adapt)
- type: cta
- persuasion: One ask, three routes, held long enough to act on
- beat: held lockup
- focal: contact rail
- roles: mural-02 = background (dim ~35% under an ink scrim) · wordmark = supporting · contact rail = cutout
- sfx: whoosh
- asset_candidates: assets/murals/mural-02.jpg (optional backing slot, designed stand-in otherwise); designed contact rail — email, phone, facebook handle
- src: compositions/frames/07-cta.html

One ask, three routes, held long enough to act on. The voiceover deliberately does
NOT read the phone number aloud — digits burn spoken seconds and nobody memorises
them from a reel; they hold on screen instead, for the full 7.5 seconds.

Adapt: keep the shared-transform-origin CONDENSE signature — the outgoing hero shrink-fades exactly
as the CTA scales up in its place, so the eye reads one element transforming rather than a swap.
Drop the literal button press: there is no cursor anywhere in this film and introducing one in the
last shot would break its grammar.

Scene 1 (0.0-2.2s): mural-02 (or its designed stand-in) sits full-bleed behind at ~35% under an ink scrim. On the question, the display line lands centred — "got a wall that deserves better?" in Barlow 900 lowercase `cream`, per-word stagger. Centered, type ~45% of frame.
Scene 2 (2.2-3.6s): the signature condense. On "give him a shout", the display line shrink-fades at the same screen centre exactly as the contact card scales up into its place — one transform-origin, one event. The card is an `ink-black-alt` panel with a 1px `border-dark` edge and a `fire-orange` left bar.
Scene 3 (3.6-5.0s): the three contact rows fill the card one per beat — `JENKSART3@GMAIL.COM`, `07817 428594`, `FACEBOOK.COM/JENKSART1` — mono uppercase `cream`, left-aligned on a shared grid, each with a small `fire-orange` tick drawing beside it as it arrives.
Scene 4 (5.0-7.5s): on "JenksArt", the wordmark locks up above the card in Barlow 900 lowercase, and the whole lockup holds DEAD still for the final ~2.5s — long enough to read and act on. This is the film's only real exit: a slow 0.4s fade to `ink-black` on the last beat.
