<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Guidelines

This is a small, mostly static institutional website for Escola Conexao. Keep the codebase simple, readable, and easy to change.

Follow `DESIGN_SYSTEM.md` for visual tokens, typography, colors, spacing, radii, and reusable UI direction.

## Quality Principles

- Favor clarity over cleverness. Code should be easy to scan and maintain.
- Keep components small and focused. Extract a component only when it improves readability or removes meaningful duplication.
- Apply DRY pragmatically. Avoid repeated data, markup, and styles, but do not add abstractions for one-off content.
- Keep static content structured. Prefer arrays/objects mapped into markup when repeating sections such as cards, links, or highlights.
- Avoid unnecessary client-side JavaScript. Use Server Components by default and add `"use client"` only when interactivity requires it.
- Do not introduce new dependencies unless they clearly reduce complexity or are required by the feature.
- Preserve accessibility basics: semantic HTML, useful `aria-label`s where needed, good contrast, keyboard-friendly links/buttons, and descriptive alternative text for real images.
- Keep styling predictable. Use CSS Modules for page/component styles and global CSS only for base resets, tokens, and document-level defaults.
- Use responsive layout constraints deliberately. Text, cards, buttons, and visual blocks should not overflow on mobile.
- Prefer meaningful names for variables, arrays, classes, and components. Avoid generic names when the domain has clearer terms.

## Project Structure

- `src/app/page.tsx`: main static landing page.
- `src/app/page.module.css`: landing page styles.
- `src/app/layout.tsx`: metadata, language, and shared document structure.
- `src/app/globals.css`: global reset and base styles.
- `public/`: static assets such as logos, photos, icons, and favicons.

When the website grows, create focused folders under `src/components/` and `src/data/` instead of letting `page.tsx` become too large.

## Content And Assets

- Keep placeholder school contact details easy to find and replace.
- Use real school photos or approved brand assets when available.
- Store project assets in `public/` and reference them with root-relative paths such as `/images/fachada.jpg`.
- Do not hardcode large repeated content directly inside JSX when a small data structure would be clearer.

## Validation

Before considering work complete, run:

```bash
npm run lint
npm run build
```

If a command cannot be run, document the reason clearly in the final note.
