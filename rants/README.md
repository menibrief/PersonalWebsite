# Rants

Each rant is one Markdown file in this folder: `rants/<slug>.md`.
The `<slug>` becomes the URL — `rants/why-i-keep-a-rants-page.md`
publishes to `menibrief.com/rants/why-i-keep-a-rants-page.html`.

## To publish a new rant

1. Create `rants/my-new-rant.md` with frontmatter + body (see below).
2. From the project root, run:

   ```
   python3 build.py
   ```

3. That regenerates `rants/my-new-rant.html` and rebuilds `rants.html`
   (the index, sorted newest-first). Commit and deploy as usual.

## File format

```markdown
---
title: The title, shown as the headline and in the index
date: 2026-07-17
summary: One line that appears under the title in the index.
---

Body text in Markdown. Blank lines separate paragraphs.

## Subheadings work

**Bold**, *italic*, `inline code`, [links](https://example.com),
> blockquotes,

- and
- bullet
- lists

1. plus numbered lists
2. like this

```code fences```
```

Notes:
- The filename (not the `title`) sets the URL — keep slugs short and lowercase.
- `README.md` and any file missing a `title` are ignored by the build.
- `rants/*.html` files are generated — edit the `.md`, never the `.html`.
