# Repository Guidelines

## Project Structure & Module Organization
The React app lives in `src/`. `src/main.jsx` is the entry point and `src/App.jsx` is the UI root. Reusable UI pieces are in `src/components/`, and static assets are in `src/assets/`. Production output is emitted to `docs/` for GitHub Pages hosting. Sample input data lives in `sample/`, and captured HTML references live in `sample-html/`.

## Build, Test, and Development Commands
- `npm run dev`: Start the Vite dev server with HMR.
- `npm run build`: Create a production build in `docs/`.
- `npm run preview`: Serve the `docs/` build locally for verification.
- `npm run biome:lint`: Lint and auto-fix files in `src/`.
- `npm run biome:format`: Format files in `src/`.

## Coding Style & Naming Conventions
Formatting is controlled by Biome. Use spaces for indentation and single quotes for strings per `biome.json`. Component names use PascalCase (example: `HeaderAndFooter.tsx`). Use `.jsx` or `.tsx` as appropriate. Run `npm run biome:format` before committing changes.

## Testing Guidelines
There is no test framework or test directory yet. If you add tests, create a top-level `tests/` directory and use clear names like `*.test.jsx`. Update this document and README with the test commands when tests are introduced.

## Commit & Pull Request Guidelines
There is no enforced commit convention. Use short, descriptive English messages (example: `Add bookmarklet generator UI`). PRs should include a concise summary, linked issues (if any), and screenshots for UI changes. Only include `docs/` when intentionally updating build artifacts.

## Security & Configuration Tips
`vite.config.js` sets `base` and `build.outDir` for GitHub Pages. If the public URL changes, update `base` accordingly. Do not embed secrets in client-side code.
