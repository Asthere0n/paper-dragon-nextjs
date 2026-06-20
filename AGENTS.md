# AGENTS.md

## Commands

- Use npm; this repo has `package-lock.json` and no pnpm/yarn lockfile. Start with `npm ci` when dependencies are missing.
- Dev server: `npm run dev` (`next dev --turbopack`).
- Verification commands: `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
- There is no test runner or `npm test` script configured; `src/test/testCharacter.json` is app fixture data, not a test suite.

## Current Baseline

- As of this file, `npm run lint` fails on existing issues: `no-explicit-any` in `CharacterSheetViewer.tsx`, unused `styles` variables in section components, and a hook rule violation in `Combat/PCArmorClass/calculateAC.ts`.
- `npx tsc --noEmit` also fails on existing implicit `any` errors, the CSS-module object passed as a `style` prop, `AllowsShield` type mismatches, and `Logo.tsx` treating a PNG import as `{ src }` while `src/lib/custom.d.ts` declares PNGs as `string`.
- `npm run build` compiles first, then fails during lint/type validation for the same baseline issues.

## Architecture Notes

- This is a single Next.js App Router app under `src/app`; `src/app/page.tsx` renders `Header`, `InfoBar`, and `CharacterSheetViewer` directly.
- Main character data currently comes from `src/test/testCharacter.json`; `CharacterSheetViewer.tsx` deep-clones it and provides it through `CharacterContext`.
- `CharacterContext` is exported from `src/components/CharacterSheetViewer/CharacterSheetViewer.tsx`; `src/context/CharacterContext.tsx` exists but is empty, so do not import from it unless refactoring all consumers.
- The bottom navbar does client-side state switching between sheet views (`Summary`, `Combat`, `Abilities`, `Inventory`, `Journal`, `Magic`); these are not separate routes.
- Shared vignette styles live in `CharacterSheetViewer.module.css`; several top-level view components receive the CSS-module object as a `style` prop even though it is currently unused/mistyped.

## Styling And UI

- Tailwind v4 is wired through `src/app/globals.css` (`@import "tailwindcss"`) and `postcss.config.mjs`; `tailwind.config.js` mainly supplies content globs and custom font family names.
- shadcn/Radix-style components live in `src/components/ui`; `components.json` aliases `ui` to `@/components/ui` and `utils` to `@/lib/utils`.
- The `@/*` import alias maps to `src/*` in `tsconfig.json`.
- Font setup is split across `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.js`, and `public/fonts`; update all relevant places when changing font variables/classes.
