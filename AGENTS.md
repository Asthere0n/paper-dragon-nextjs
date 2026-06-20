# AGENTS.md

## Commands

- Use npm; this repo has `package-lock.json` and no pnpm/yarn lockfile. Start with `npm ci` when dependencies are missing.
- Next 16 requires Node `>=20.9.0`.
- Dev server: `npm run dev` (`next dev --turbopack`).
- Lint uses `eslint .`; `next lint` is not valid on Next 16.
- Verification commands: `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
- There is no test runner or `npm test` script configured; `src/data/testCharacter.json` is app fixture data, not a test suite.

## Current Baseline

- As of this file, `npm run lint` fails on existing issues: `no-explicit-any` in `src/features/character-sheet/character-context.ts`, a hook rule violation in `src/features/character-sheet/Combat/PCArmorClass/calculateAC.ts`, and Next 16 React Hooks `set-state-in-effect` errors in `PCArmorClass.tsx` and `src/components/ui/carousel.tsx`; unused `styles` variables and `Logo.tsx` `<img>` usage are warnings.
- `npx tsc --noEmit` fails on existing implicit `any` errors, the CSS-module object passed as a `style` prop, `AllowsShield` type mismatches, and armor select value type mismatches.
- `npm run build` compiles first, then fails during TypeScript validation for the same baseline type issues.

## Architecture Notes

- This is a single Next.js App Router app under `src/app`; `src/app/page.tsx` renders `Header`, `InfoBar`, and `CharacterSheetViewer` directly.
- Main character data currently comes from `src/data/testCharacter.json`; `CharacterSheetViewer.tsx` deep-clones it and provides it through `CharacterContext`.
- `CharacterContext` lives in `src/features/character-sheet/character-context.ts`; import it from there instead of from the viewer component.
- The bottom navbar does client-side state switching between sheet views (`Summary`, `Combat`, `Abilities`, `Inventory`, `Journal`, `Magic`); these are not separate routes.
- Shared vignette styles live in `CharacterSheetViewer.module.css`; several top-level view components receive the CSS-module object as a `style` prop even though it is currently unused/mistyped.

## File Structure

- `src/app` is reserved for Next.js App Router files such as `layout.tsx`, `page.tsx`, route segments, loading/error files, metadata files, and global CSS.
- `src/features/character-sheet` contains character-sheet-specific UI, context, styles, and view-switching components. Keep new sheet views and sheet-only subcomponents inside this feature folder.
- `src/components/ui` contains shadcn/Radix-style reusable primitives. Keep registry-generated UI components here to preserve `components.json` aliases.
- `src/components/layout` contains app shell components shared by routes, currently `Header`, `Logo`, and `SideMenu`.
- `src/components/icons` contains reusable icon components and SVG assets.
- `src/components/customized` contains one-off customized shared UI examples or wrappers that are not part of the shadcn registry.
- `src/data` contains local fixture/static app data, currently `testCharacter.json`. Do not place fixture data under `src/test` unless a real test runner is added.
- `src/lib` contains non-React utilities and shared helpers. Character rules/helpers live under `src/lib/character`.
- Prefer `@/*` imports for cross-folder imports and relative imports for files within the same feature/component folder.

## Styling And UI

- Tailwind v4 is wired through `src/app/globals.css` (`@import "tailwindcss"`) and `postcss.config.mjs`; `tailwind.config.js` mainly supplies content globs and custom font family names.
- shadcn/Radix-style components live in `src/components/ui`; `components.json` aliases `ui` to `@/components/ui` and `utils` to `@/lib/utils`.
- The `@/*` import alias maps to `src/*` in `tsconfig.json`.
- Font setup is split across `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.js`, and `public/fonts`; update all relevant places when changing font variables/classes.
