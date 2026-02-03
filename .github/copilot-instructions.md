# Copilot Instructions — sapiensv2 🔧

Purpose: Short, actionable guide for AI coding agents to be instantly productive in this repository.

## TL;DR ✅
- Run locally: `npm start` (Create React App dev server on http://localhost:3000).
- Build: `npm run build`. Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages -d build`; `predeploy` runs `build`).
- Primary stack: Create React App (React 18) + Tailwind CSS + react-router. No TypeScript. No tests present.

---

## Project architecture & why it’s structured this way 🧭
- Single-page marketing site built with Create React App (CRA). Routing is client-side using `react-router-dom`.
- Styling: Tailwind (utility-first) + many component-local CSS files (each component folder often has `index.css`). Use whichever approach is already used in the affected component (do not rewrite whole components to Tailwind).
- Components are organized under `src/components/*`. Pages live in `src/pages/*` and are wired into `src/App.js` via `<Routes>`.
- Static images: two places —
  - Compiled assets inside `src/assets/images` (imported into components).  
  - Static/public files served at runtime under `public/images/uploads` (referenced as `/images/...`).
- Email integration: EmailJS used for contact forms. Credentials are in `src/configs/emailjs.js` and used in `src/pages/Contact/index.js` and `src/components/HeroSection/index.js`.

## Key files to inspect (start here) 🔎
- `package.json` — scripts (dev/build/deploy) and deps.
- `src/App.js` — routes and global layout (Navbar, Footer, ResponsiveNav).
- `src/index.js` — app entry point and render flow.
- `src/components/*` — component patterns and local CSS.
- `src/pages/Contact/index.js` — EmailJS form example and validation.
- `src/configs/emailjs.js` — service/template/public keys (sensitive; be cautious).
- `tailwind.config.js` and `src/index.css` — Tailwind setup and global styles.

## Conventions & patterns (do this to stay consistent) 📏
- Component structure: create `src/components/YourComponent/` with `index.js(x)` (or `.jsx`) and `index.css` and import the CSS inside `index.*`.
- Use function components + React hooks (project uses React 18 and hooks everywhere).
- Navigation: use `react-router-dom` `Link` and `useLocation` to determine active links (see `src/components/Navbar/index.js`).
- Styling: prefer existing approach in the target file. If a component uses `index.css`, keep it; otherwise use tailwind utility classes for new layouts.
- Images: import from `src/assets/images` when you want bundling/versioning; use `/images/uploads/...` if they are placed in `public`.

## Integration points & gotchas ⚠️
- EmailJS: `src/configs/emailjs.js` contains keys used at runtime. Test forms locally to verify the EmailJS templates match `templateParams`. Example usage: 
  ```js
  emailjs.send(serviceId, templateId, { from_name, from_email, message }, publicKey)
  ```
- Deployment: `npm run deploy` pushes `build` to GitHub Pages. The repo `homepage` is set in `package.json` — update it if the target URL changes.
- Mix of Next scripts in `package.json`: there are `next-*` scripts but this repository is currently CRA-based (no `pages/` dir). Do not switch to Next without an intentional migration.
- Rendering duplication: `src/App.js` contains a `ReactDOM.createRoot(...).render(<App/>)` at the bottom AND `src/index.js` renders the app too. This is a code smell and may cause duplicate renders if modified—avoid adding additional render calls; prefer `src/index.js` as the single entrypoint.

## Testing & verification locally 🧪
- Start dev server: `npm start` → visit `http://localhost:3000`.
- Manual checks: navigation links, contact form (EmailJS), responsive behaviour (toggle ResponsiveNav), image loading from `public` and `src/assets`.
- Linting: project uses CRA's ESLint config (`react-app`). Run the app and check console warnings; no custom lint scripts are present.

## Example tasks & step-by-step patterns ✍️
- Add a new page `NewFeature`:
  1. Create `src/pages/NewFeature/index.js` (follow existing pages style).
  2. Add a route in `src/App.js`: `<Route path="/new-feature" element={<NewFeature/>} />`.
  3. Add `Link` entries in `src/components/Navbar/index.js` and `src/components/ResponsiveNav/index.js` (follow `useLocation` active pattern).
  4. Add `index.css` if you need component-specific styles; otherwise use Tailwind classes.

- Add a contact-like form using EmailJS:
  - Copy pattern from `src/pages/Contact/index.js` and call `emailjs.send(...)` with `serviceId/templateId/publicKey` from `src/configs/emailjs.js`.

## PR guidance & safe edits ✅
- Keep changes small and focused. Run `npm start` locally and verify UI and console before sending a PR.
- Avoid changing global fonts or the render/bootstrapping flow unless necessary (see the duplicate render note).
- For visual changes, reference current component CSS rather than replacing it wholesale.

---

Please review these instructions and tell me if you want more examples (e.g., a component scaffold template or a suggested minimal unit-test pattern).