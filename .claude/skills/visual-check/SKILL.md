---
name: visual-check
description: Launch this portfolio's Vite dev server and drive it with Playwright to visually verify a change — screenshots in light and dark mode, console error check. Use whenever a change touches CSS, layout, animation, or component markup and needs to be confirmed in the actual browser.
---

# Visual check — Pablo Segarra portfolio

This repo has no `chromium-cli` or Playwright installed as a project dependency, and no automated test suite. The verified way to actually see a change is below — don't re-derive it from scratch.

## 1. Dev server

```bash
lsof -ti:5173 -sTCP:LISTEN | xargs -r kill   # free the port if a previous run is still up
cd "<repo root>"
nohup npm run dev -- --port 5173 > /tmp/vite-dev.log 2>&1 & disown
until curl -sf http://localhost:5173 >/dev/null; do sleep 1; done
```

Stop it the same way (`lsof -ti:5173 ... | xargs -r kill`) when done.

## 2. Playwright (not a project dependency — install it in a scratch dir)

`node -e "require('playwright')"` from the repo root will fail — Playwright isn't in `package.json` on purpose (it's a verification tool, not a runtime dependency). Install it once per session in your scratch/tmp directory instead:

```bash
cd <scratch-dir>
npm init -y >/dev/null 2>&1
npm install playwright
npx playwright install chromium   # only needed the first time on a machine
```

Then write a small driver script in that same scratch dir (not in the repo) and run it with `node script.mjs` from there — it resolves `playwright` from the local `node_modules` created above.

## 3. Driver script shape

```js
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', msg => { if (msg.type() === 'error') errors.push('console: ' + msg.text()); });

await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForSelector('h1');
await page.screenshot({ path: '<scratch-dir>/shots/01-hero-light.png' });

// toggle dark mode
await page.click('#theme-toggle');
await page.waitForTimeout(500);
await page.screenshot({ path: '<scratch-dir>/shots/02-hero-dark.png' });

await browser.close();
console.log('ERRORS:', JSON.stringify(errors));
```

Adapt the interaction to whatever the change actually touches — hover `.pcard-media` for project-card changes, scroll to `#skills`/`#experience`/`#projects` for section changes, click `.pcard-btn`/`#theme-toggle` for modal/theme changes. Always `console --errors`-equivalent (the `page.on('console'...)` listener above) before declaring something works — a page can render its shell while a child component throws.

## 4. What to check specifically in this project

- **Light + dark**: this portfolio's dark mode is Vue's own slate (`#141b23` family, not near-black) — confirm it, since a regression here would be easy to miss visually.
- **`prefers-reduced-motion` / `(hover: none)`**: several elements (`.bg-spotlight`, `TerminalCard`'s typewriter, project-card hover caption) are intentionally disabled or static under these conditions. Emulate with Playwright:
  ```js
  await page.emulateMedia({ reducedMotion: 'reduce' });
  ```
  and a touch-context page (`browser.newPage({ hasTouch: true, isMobile: true })`) to check the `(hover: none)` path.
- **Console errors** — this project has no router and no SSR, so a clean console on load + after the interaction you tested is a strong signal nothing broke.

## 5. Read the screenshots

Use the Read tool on the generated PNGs — don't just check that the file exists. A blank or broken-layout screenshot is a failure even if the script ran without throwing.
