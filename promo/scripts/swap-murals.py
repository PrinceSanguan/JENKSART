"""Swap the three designed mural stand-ins for the real photographs.

Each frame ships a stand-in SVG plus a comment giving the exact <img> to paste
in its place. This replaces the SVG element (balanced by tag depth, so nested
<svg> would still be handled) and leaves everything else untouched.

Run once, from the promo project root:  python -I scripts/swap-murals.py
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def comment_spans(html: str):
    """Ranges covered by HTML comments.

    These frames document the swap inside a comment that itself contains
    example markup, so a naive search finds the instructions rather than the
    element they describe.
    """
    return [(m.start(), m.end()) for m in re.finditer(r"<!--.*?-->", html, re.S)]


def replace_svg(html: str, class_name: str, replacement: str) -> str:
    """Replace the <svg class="…{class_name}…"> element, matching tag depth."""
    open_re = re.compile(r'<svg\b[^>]*class="[^"]*\b' + re.escape(class_name) + r'\b[^"]*"', re.S)
    comments = comment_spans(html)

    start = None
    for m in open_re.finditer(html):
        if not any(a <= m.start() < b for a, b in comments):
            start = m.start()
            break
    if start is None:
        raise SystemExit(f"could not find a live <svg> with class {class_name}")
    # Walk forward counting <svg ...> / </svg> to find the matching close.
    depth = 0
    for tag in re.finditer(r"<svg\b|</svg>", html[start:]):
        depth += 1 if tag.group(0) == "<svg" else -1
        if depth == 0:
            end = start + tag.end()
            return html[:start] + replacement + html[end:]
    raise SystemExit(f"unbalanced <svg> for {class_name}")


JOBS = [
    (
        "compositions/frames/02-the-turn.html",
        "turn-mural-art",
        '<img\n          class="turn-mural-photo"\n          src="assets/murals/mural-01.jpg"\n          alt=""\n          width="940"\n          height="1290"\n        />',
    ),
    (
        "compositions/frames/07-cta.html",
        "cta07-mural-art",
        '<img\n          class="cta07-mural-photo"\n          src="assets/murals/mural-02.jpg"\n          alt=""\n          style="position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover;"\n        />',
    ),
]

for rel, cls, repl in JOBS:
    path = ROOT / rel
    html = path.read_text(encoding="utf-8")

    # Idempotent: if the stand-in is already gone, leave the file alone.
    comments = comment_spans(html)
    pattern = re.compile(r'<svg\b[^>]*class="[^"]*\b' + re.escape(cls) + r'\b')
    if not any(not any(a <= m.start() < b for a, b in comments) for m in pattern.finditer(html)):
        print(f"skipped {cls:18s} — already swapped in {rel}")
        continue

    path.write_text(replace_svg(html, cls, repl), encoding="utf-8")
    print(f"swapped {cls:18s} -> real photo in {rel}")

sys.exit(0)
