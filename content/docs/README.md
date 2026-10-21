# Docs content

Pages under /docs are rendered from these Markdown files at build time
(`lib/docs/render.ts`). The table of contents, titles and URLs are in
`lib/docs/manifest.ts`.

- `guide/` is a copy of the product's `docs/user-guide` folder. To update it, copy
  that folder over this one; links between chapters, "chapter N" references and the
  "What changed" sections (which move to /docs/release-notes) are handled automatically.
- The other files are written for the website (installation, quick start, API, guides).

To add a page: write the Markdown file, add it to `DOC_SECTIONS` in the manifest, and
add `app/docs/<slug>/page.tsx` like the existing ones.
