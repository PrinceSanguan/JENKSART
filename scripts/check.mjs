/**
 * Visual + layout check against a running server.
 *
 *   node scripts/check.mjs [baseUrl] [outDir]
 *
 * Reports horizontal overflow at phone width (the single most common break in
 * a design like this) and writes full-page screenshots for review.
 */
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://localhost:3737';
const OUT = process.argv[3] ?? './.screens';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const ROUTES = ['/', '/murals', '/about', '/contact'];
const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
  { name: 'desktop', width: 1440, height: 900, isMobile: false, deviceScaleFactor: 1 },
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--hide-scrollbars'],
});

let failures = 0;

for (const vp of VIEWPORTS) {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport(vp);
    await page.goto(BASE + route, { waitUntil: 'networkidle0', timeout: 60000 });
    // Scroll through so ScrollTrigger reveals fire before the capture.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });

    const metrics = await page.evaluate(() => {
      const de = document.documentElement;

      // An element that sticks out is only a problem if nothing above it clips.
      // The hero's Ken Burns layer is scaled past the viewport on purpose and
      // is contained by an overflow-hidden parent.
      const isClipped = (el) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const o = getComputedStyle(p);
          if (o.overflowX === 'hidden' || o.overflow === 'hidden') return true;
        }
        return false;
      };

      const culprits = [];
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > de.clientWidth + 1 && !isClipped(el)) {
          culprits.push(
            `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 48)} → right:${Math.round(r.right)}`,
          );
        }
      }
      return {
        scrollWidth: de.scrollWidth,
        clientWidth: de.clientWidth,
        culprits: culprits.slice(0, 5),
      };
    });

    const overflow = metrics.scrollWidth > metrics.clientWidth + 1 || metrics.culprits.length > 0;
    if (overflow) failures++;

    const tag = `${route === '/' ? 'home' : route.slice(1)}-${vp.name}`;
    await page.screenshot({ path: `${OUT}/${tag}.png`, fullPage: vp.name === 'mobile' });

    console.log(
      `${overflow ? 'OVERFLOW' : 'ok      '} ${tag.padEnd(18)} scroll=${metrics.scrollWidth} client=${metrics.clientWidth}`,
    );
    for (const c of metrics.culprits) console.log(`           ↳ ${c}`);

    await page.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} viewport(s) overflow.` : '\nNo horizontal overflow.');
process.exit(failures ? 1 : 0);
