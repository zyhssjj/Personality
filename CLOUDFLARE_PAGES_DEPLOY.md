# Cloudflare Pages Deployment

## Build Settings
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

## Why This Project Is Ready
- Uses a static Vite build
- Routes are handled with `HashRouter`, so no extra SPA rewrite rule is required
- Public assets already live under `public/`
- `_headers` is included for cache and security headers on Pages

## Deploy Steps
1. Push this project to GitHub.
2. Open Cloudflare Pages.
3. Create a new project and connect the repo.
4. Keep the build command as `npm run build`.
5. Set the output directory to `dist`.
6. Deploy and use the default `*.pages.dev` domain first.

## Recommended Domain Format
- `yourname.pages.dev`
- `yourname-portfolio.pages.dev`
- `golang-ai.pages.dev`
