# Frame packet: 07-cta

## Project inputs

- Project: D:\NEXTjs\JENKSART-PROMO
- Design tokens: D:\NEXTjs\JENKSART-PROMO\frame.md
- RULES_DIR: C:\Users\Dionisio Samillano\.claude\skills\hyperframes-animation\rules

## Assigned storyboard block

## Frame 7 — Give him a shout

- scene: Contact details lock up over a finished wall; the mark holds last
- duration: 7.5s
- poster: 5.5s
- transition_in: cut
- status: outline
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

## Selected blueprint: cta-morph-press

# cta-morph-press — CTA Morph & Press

**intent**: A resting brand mark condenses at the same screen center into a smaller, brighter CTA, then a cursor arrives from off-stage and lands a human-aimed click on it. The viewer's eye is walked from "this is who we are" to "and this is what you do." The morph and the click are the two headline beats.

**roles served**

- CTA (from `cta-morph-press`): when the close moves from brand identity to a single user action, two elements share the same center sequentially (a morph, not a cut), and the payoff is a simulated click with physical feedback. Reach for it for a focused "click here" sign-off — no spatial set, no multi-step UI (that's `cursor-ui-demo`).
- Hook (ROLE-WIDENED, from `widget-morph-on-blank-field`): the same
  machinery run as an OPENER — a lone `[widget]` (pill / chip lockup) on a flat field transforms
  in place, performs its payload, then vanishes to a plain frame that a typed `[title]` resolves.
  The click, when present, ignites the morph rather than closing it; there may be no cursor at
  all. Reach for it when the product hook IS one widget doing one thing — still no spatial set,
  no multi-step UI (that's `cursor-ui-demo`). Mint-reconsideration trigger: if future mining
  brings 2+ more widget-morph openers with the vanish → typed-title resolve, promote this variant
  to its own blueprint (the beat order is fully inverted by then).

**duration**: 4–6s (Hook widget-morph opener 5–7.5s)

**shot structure** (a `[bg]` canvas; hero and CTA are flex-centered siblings sharing one `transform-origin`)

- **Scene 1 (0.0–~1.4s) — presence.** The `[hero mark / brand lockup]` holds dead-center, alive but resting — only a faint rotational breath on the mark; any title text under it stays rock-stable. Camera static.
- **Scene 2 (~1.4–2.4s) — the morph (signature move).** The hero CONDENSES at the same screen center into a smaller, brighter `[CTA]` (button / card): the outgoing mark shrink-fades exactly as the CTA scales up in its place. Because they share one `transform-origin`, the eye reads it as one element transforming, not a swap.
- **Scene 3 (~2.4–3.4s) — approach.** A `[cursor]` arrives from off-stage on a **decelerating** path (it "arrives," it does not pass through) and lands a few px **off** the CTA's geometric center, so the aim reads human, not scripted.
- **Scene 4 (~3.4–end) — press.** The cursor lands a physical CLICK — cursor and CTA compress together in lockstep, then release with feedback (an optional ripple / glow bloom). Holds on the clicked state.
- **Variant — Hook (widget-morph opener)** (from `widget-morph-on-blank-field`;
  reorders the beats — press first, morph second, title last). **(1) presence**: a lone
  `[pill / chip lockup]` sits centered on a flat `[field]`; optionally the `[cursor]` glides in, a
  hover pill-background appears behind the chip, and the click lands with the same lockstep press.
  **(2) the morph**: the widget transforms IN PLACE — expands downward anchored at its top edge
  into a `[menu]`, or spring-morphs outward into a `[prompt card]` with a small overshoot settle —
  new content fades/slides into place. **(3) payload**: the transformed state performs —
  `[placeholder]` types with a blinking caret, `[user text]` types while a control flips from
  muted to its vibrant active color, or the menu snap-collapses back to the pill carrying the
  `[new value]` + a checkmark pop; the background may snap to a new color under the persistent
  foreground card. **(4) resolve**: the widget VANISHES; a plain frame closes the beat — a
  `[closing title]` types on center, or a hold on the flipped solid.

**motion vocabulary**: faint rotation-only resting breath (logo scope only); same-center morph-swap (shrink-fade ↔ scale-up sharing `transform-origin`); cursor decel-arrival from off-stage; off-center human aim; lockstep press compression; release feedback ripple / glow. Hook opener: anchored downward expand of a pill into a menu and springy snap-collapse back;
chip-to-card spring morph with overshoot settle; placeholder / user-text typewriter with blinking
caret (may cut mid-word); control color-state flip muted → vibrant; background color snap under a
persistent foreground card; checkmark pop; widget vanish to blank frame; typed closing title.

**rule mapping**

- hero → CTA condense at one center → `scale-swap-transition` (shared `transform-origin: 50% 50%` is what sells the morph; CTA `position: absolute` so it doesn't shove the hero during the brief overlap)
- resting-hero aliveness (rotation only, scoped to the mark so the Phase-2 scale doesn't fight it) → `sine-wave-loop` (low-amplitude rotation register — subtle jitter, not a scale breath)
- cursor press + release in lockstep (single-target-array so both compress together) → `physics-press-reaction` (PRESS_DOWN + RELEASE portion)
- cursor approach (decel from off-stage, off-center landing, hard-cut opacity in) → `gsap-effects` (translate on `power2.out`)
- click ripple / release glow → `cursor-click-ripple` (attack-decay ring) and/or `ambient-glow-bloom` (release bloom)
- (Hook) chip → prompt-card spring morph at one center → `scale-swap-transition` (the base morph
  contract, run in the expand direction) + `card-morph-anchor` (corner-radius / surface ride-along)
- (Hook) anchored-edge expand / snap-collapse (pill ↔ menu, top edge pinned) →
  `anchored-layout-expand` (edge-anchored directional container growth — origin-pinned expansion
  with counter-scaled children; `card-morph-anchor` stays for uniform-scale morphs only)
- (Hook) placeholder + user typing, blinking caret, mid-word cut → `gsap-effects` (typewriter) +
  `context-sensitive-cursor` (blink) + `discrete-text-sequence` (mid-word cut states)
- (Hook) control color flip muted → vibrant → `press-release-spring` (color-transition variation)
- (Hook) checkmark pop / card-arrival overshoot → `spring-pop-entrance`
- (Hook) hover pill-background + igniting click → the base's `physics-press-reaction` +
  `cursor-click-ripple` mappings apply unchanged

**camera modifier**: camera-static — the morph and click happen in element space; a camera move would compete with the click as the climax. The Hook opener keeps the same contract — even the background color flip is an element-level
snap, not a camera event.
