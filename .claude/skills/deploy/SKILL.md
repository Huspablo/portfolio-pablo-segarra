---
name: deploy
description: Deploy this portfolio to production on Vercel (psegarra.dev) with one command — builds locally first to catch errors, then ships to production. Use whenever the user asks to deploy, publish, ship, or push the portfolio live.
---

# Deploy — Pablo Segarra portfolio

Production target: **Vercel**, project `huspablos-projects/portfolio-pablo-segarra`, live at **https://psegarra.dev**. The repo is already linked locally (`.vercel/project.json` — gitignored on purpose, it's machine-local state, not something to commit). If a fresh clone is missing it, relink first:

```bash
vercel link --yes --project portfolio-pablo-segarra
```

`netlify.toml` also exists in this repo but is **not** the real target (leftover from an earlier setup — `api/likes.js` only works as a serverless function under Vercel's `api/` convention). Ignore it unless the user explicitly says to deploy to Netlify instead.

## Steps

1. **Check git state first** — `git status --short`. Vercel deploys whatever is on disk, regardless of git state, so uncommitted changes go live too. If there's anything uncommitted, tell the user what it is before proceeding — don't silently ship dirty state without a heads-up.
2. **Build locally before deploying** — `npm run build`. Fail fast: if this breaks, stop and report the error instead of letting Vercel's remote build catch it later (same signal, much faster).
3. **Deploy to production**:
   ```bash
   vercel --prod
   ```
   The project is already linked, so this runs non-interactively and prints a production URL at the end. This is a real, publicly-visible action on a live personal site — invoking this skill is itself the user's confirmation to deploy, so don't ask "are you sure?" again once you're following these steps; just report what you did.
4. **Confirm the result** — the printed URL should resolve to `https://psegarra.dev`. Report success (or the exact error) back to the user.

## Variants

- **Preview instead of production**: `vercel` without `--prod` creates a throwaway preview deployment with its own URL, production untouched. Offer this if the user seems unsure or wants to check something before it's public — but the default for "deploy"/"despliega"/"publica" is straight to `--prod`, per the user's own stated preference.
- **Force a redeploy with no code changes**: add `-f`/`--force`. Only do this if explicitly asked.

## Notes

- `api/likes.js` (the like-counter serverless function) needs `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` configured as environment variables **on Vercel itself** — there's no `.env` in this repo for it, that's expected, not a bug.
- See `CLAUDE.md` at the repo root for the rest of the project's conventions (design tokens, content model, image pipeline, visual verification).
