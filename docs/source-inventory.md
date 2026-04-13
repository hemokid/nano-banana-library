# Source Inventory

## Project overview

This is the Nano Banana Prompt Library for Architects. The goal is to build an interactive web library of architecture-focused prompts for the NanoBanana model. All source material is kept in the `source/` folder and must not be modified or deleted.

---

## Source folders

| Folder | Purpose |
|---|---|
| `source/images/` | Raw screenshot assets captured from the prompt portal |
| `source/website/` | Text file containing the external portal URL |

---

## Image assets

- **Total image files found:** 71
- **Format:** PNG
- **Naming convention:** Hebrew Windows screenshot filenames (`צילום מסך`) with timestamps
- **Date captured:** 2026-04-08, between 12:39 and 12:57
- **Subfolders:** None — all files are flat in `source/images/`
- **Note:** Images appear to be sequential captures of the NanoBanana portal UI. Their content (prompts, categories, results) has not yet been extracted or classified.

---

## Website source

- **Exact filename:** `WEBSITE.txt`
- **Location:** `source/website/WEBSITE.txt`
- **Contains a URL:** Yes — confirmed valid URL present
- **URL domain:** `landscapearchitecture.store`
- **Note:** The URL includes a JWT session token (`sId` parameter) which may be time-limited. This should be verified before web ingestion begins.

---

## Next steps before any UI work

1. **Review screenshot contents** — Open a representative sample of the 71 images to understand what they show (prompt text, categories, UI panels, results).
2. **Verify the portal URL** — Confirm the session token in `WEBSITE.txt` is still valid and the page is accessible.
3. **Extract raw prompt data** — Pull prompt text from screenshots (manually or via OCR) and/or from the portal URL.
4. **Write raw records to `data/raw/`** — Preserve original wording exactly as found. One record per prompt, JSON or Markdown frontmatter format.
5. **Normalize into `data/normalized/`** — Add `cleaned_prompt`, `short_summary`, category, subcategory, tags, and all other data model fields per the spec in `CLAUDE.md`.
6. **Curate into `data/curated/`** — Group variants, resolve duplicates, assign `variant_group_id` and `variant_label`.
7. **Only then begin UI planning** — UI work starts after curated data is stable.
