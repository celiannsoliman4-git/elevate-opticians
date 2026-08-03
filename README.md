# Elevate Opticians

A free, volunteer-led study group helping opticians across California prepare for ABO, NCLE, and state licensure exams — built with the same stack as [Golden State Opticians](https://golden-state-opticians.vercel.app/).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- React Router
- shadcn-style UI primitives (Button, Card, Badge via `class-variance-authority` + Radix `Slot`)
- Optional Clerk auth (`@clerk/clerk-react`) for a gated "Member Resources" area — inactive until `VITE_CLERK_PUBLISHABLE_KEY` is set
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

## Before publishing

- Swap the placeholder volunteer roster in `src/data/team.ts` for real facilitators.
- Update the contact email/socials in `src/data/programs.ts` and `src/sections/Footer.tsx`.
- The "Join the Study Group" form (`src/sections/Join.tsx`) is client-side only — wire it up to a real email list provider (Mailchimp, Google Form, etc.) or a mailto link before launch.
- Replace session details in `src/sections/Events.tsx` with your real schedule.
- Optionally set `VITE_CLERK_PUBLISHABLE_KEY` (see `.env.example`) to enable member sign-in.

## Deploy

This repo includes a `vercel.json` configured for the Vite framework preset. Import the repo at [vercel.com/new](https://vercel.com/new) and it will build automatically (`npm run build`, output `dist/`).
