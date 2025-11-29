# CTMS Frontend
Checkout(live) = https://ctms-frontend-brown.vercel.app/


A Next.js 14 (React 18) frontend for CTMS.

## Scripts
- dev: `npm run dev` (http://localhost:3000)
- build: `npm run build`
- start: `npm run start`

## Requirements
- Node.js 18+ (recommended for Next.js 14)
- npm 9+ (or pnpm/yarn)

## Local setup
1. Install deps: `npm ci` (or `npm install`)
2. Create env file: `.env.local` (copy from `.env.example` if present)
3. Start dev server: `npm run dev`

## Vercel deployment
- Framework preset: Next.js
- Build command: `next build` (default)
- Install command: `npm ci` (default autodetected)
- Output: .vercel/output (handled automatically by Vercel for Next.js)
- Environment variables: configure in Vercel Project Settings → Environment Variables (use values from `.env.local` as needed).

No extra vercel.json is required for standard Next.js apps.

## Notes
- `node_modules/`, `.next/`, `.vscode/`, and env files are ignored by Git.
- Mock Service Worker assets live under `public/` and work in dev only.
