# JenksArt — 45s voiceover script (paste into ElevenLabs)

> ## ✅ Already rendered and in the film
>
> The v4 take you generated on **2026-10-08** (voice **"Hope — upbeat and clear"**,
> speed 0.96 / stability 50 / similarity 75) is **in `renders/video.mp4`**. You do
> not need to re-run anything below unless you want a different read.
>
> The take came in at **41.17s**, and its line-by-line pacing differed from the
> authored plan, so **the frame cuts were moved to the voice** rather than the
> voice being stretched to the frames. Totals still land on exactly 45.000s.
> The delivered placement is in `STORYBOARD.md` § Voiceover.

**Target:** 45.0s · 99 words · ~127 wpm with pauses · en-GB

> **You're using v4.** The tag-aware models (v3 and newer) do **not** honour
> `<break time="..." />` the way `eleven_multilingual_v2` did — they pace from
> punctuation, line breaks and square-bracket delivery tags instead. So the
> **v4 block below is the one to paste.** The old v2 break-tag version is kept
> at the bottom in case you fall back to that model.

## Settings (v4)

| Setting | Value |
|---|---|
| Voice | **Daniel** (British male, confident, grounded) — warmer alternative: **George** |
| Model | **v4** (the tag-aware model) |
| Stability | **Natural** (not Creative — it drifts on the short staccato lines; not Robust — it flattens them) |
| Speed | **1.0** — do not speed up, the gaps are doing work |
| Speaker boost | on |

If your panel shows the old numeric sliders instead of the three stability
presets, use **stability 0.40 · similarity 0.75 · style 0.35**.

Avoid US-accented voices. The audience is South Wales.

**Direction:** Street-confident, not salesy. Short sentences, full stops landed
hard. He's telling a mate about an artist worth knowing, not reading an advert.

---

## ▶ Paste this (v4)

```text
[calm] Every street has one... the wall nobody looks at.

[excited] Until someone picks up a can... and turns it into the reason people stop and stare.

[confident] This is JenksArt. Welsh street artist. Murals across Swansea, Llanelli... and most recently, Bristol.

Gable ends. Shopfronts. Cafés, gyms, barbers, schools. Kids' bedrooms... if it's got a wall, he'll paint it.

And before you ask... prices to match budgets. His words, not ours.

Seventeen thousand people follow his work. Ninety-six percent of reviewers recommend him.

[warm] Got a wall that deserves better? Give him a shout... the details are on screen.

JenksArt.
```

**Keep the blank lines** — on v4 they are the pause. The `...` inside a line is
the short beat; the blank line is the cut between frames.

**If a bracketed tag gets spoken out loud** (it happens on some voices), delete
all four tags and re-generate. The punctuation alone still carries the read —
the tags are polish, not structure.

**Expect it to land a little under 45s.** Punctuation pauses are shorter than
the explicit breaks the v2 version used, so a typical take comes in around
40–43s. Tell me the real duration and the frame timings get re-cut to match it.

---

## Line-by-line timing — as delivered

These are the real timings of the take that is in the film, not the plan. Each
line sits 0.25s after its frame's cut; nothing inside a line was retimed.

| Line | Speaks | Frame | Frame window |
|---|---|---|---|
| 1 | 0.36 – 4.08s | 01 dead wall | 0.00 – 4.12s |
| 2 | 4.37 – 9.34s | 02 the turn | 4.12 – 10.67s |
| 3 | 10.92 – 17.99s | 03 jenksart | 10.67 – 18.09s |
| 4 | 18.34 – 23.38s | 04 surfaces | 18.09 – 25.64s |
| 5 | 25.89 – 30.06s | 05 budgets | 25.64 – 30.16s |
| 6 | 30.41 – 36.27s | 06 proof | 30.16 – 36.37s |
| 7 | 36.62 – 44.87s | 07 cta | 36.37 – 45.00s |

Last word ("JenksArt.") ends at 44.87s, and the film's 0.4s fade to black runs
44.60 – 45.00s under its tail.

The voiceover never reads the phone number aloud — digits burn spoken seconds
and nobody memorises them from a reel, so they hold on screen for the full
7.5-second closing frame instead.

---

## If you re-record it

1. Save the new take anywhere and tell me the file path.
2. I re-measure its pause boundaries, re-place the seven lines, and re-cut the
   frames to it — the same pass that produced this cut.

Dropping a new `assets/voice.mp3` in by hand and re-rendering also works, but
the frame cuts would still be timed to the old take.

---

## ▶ Fallback: v2 version (break tags, for `eleven_multilingual_v2` only)

```text
Every street has one. <break time="0.4s" /> The wall nobody looks at.

<break time="0.7s" /> Until someone picks up a can. <break time="0.3s" /> And turns it into the reason people stop and stare.

<break time="0.6s" /> This is JenksArt. <break time="0.3s" /> Welsh street artist. Murals across Swansea, Llanelli <break time="0.2s" /> and most recently, Bristol.

<break time="0.5s" /> Gable ends. <break time="0.2s" /> Shopfronts. <break time="0.2s" /> Cafés, gyms, barbers, schools. <break time="0.2s" /> Kids' bedrooms. <break time="0.3s" /> If it's got a wall, he'll paint it.

<break time="0.5s" /> And before you ask <break time="0.2s" /> prices to match budgets. <break time="0.3s" /> His words, not ours.

<break time="0.5s" /> Seventeen thousand people follow his work. <break time="0.3s" /> Ninety-six percent of reviewers recommend him.

<break time="0.6s" /> Got a wall that deserves better? <break time="0.3s" /> Give him a shout <break time="0.2s" /> the details are on screen. <break time="0.4s" /> JenksArt.
```
