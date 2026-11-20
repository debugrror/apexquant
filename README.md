# APEXQUANTS — Website

Static Astro 5 + Tailwind site for apexquants.com.

## Develop

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

Static output is written to `dist/`.

## Deploy

Production is served by nginx from `/var/www/node-apps/apexquants.com/dist` on the company server. To redeploy:

```sh
sudo -iu node_runner ~/deploy-apexquants.sh
```

The script runs `git pull`, `npm ci`, and the build. Preview builds are deployed on Vercel.

## Contact form

The contact form posts to Formspree form `myzdblog` (https://formspree.io/f/myzdblog).

## Project layout

- `src/pages` — routes
- `src/layouts` — page layouts
- `src/components` — Astro components
- `public/` — static assets served as-is (e.g. `public/images/`)
