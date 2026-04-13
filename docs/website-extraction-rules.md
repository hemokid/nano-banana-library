# Website Extraction Rules

These rules govern how content must be extracted from the portal URL stored in `source/website/WEBSITE.txt`. Follow them strictly before writing any record to `data/raw/`.

---

## 1. What information to extract from the website

For every prompt or prompt card found on the portal page, attempt to extract:

- The full prompt text, exactly as written
- Any title or heading associated with the prompt
- Any subtitle or secondary label
- Any numbering or sequence indicator
- Any category or section label visible on the page
- Any subcategory, tag, or group label
- Any image shown as an input/reference example
- Any image shown as an output/result example
- Whether a before/after or input/output pair is present
- The language of the prompt text
- The page URL or page section where the prompt was found
- Any watermark, credit, or attribution visible on images
- Any notes, descriptions, or instructions accompanying the prompt

---

## 2. How to identify full prompt text

- The full prompt text is the complete, unbroken block of instructional or descriptive text intended to be submitted to an AI model.
- Extract the entire text — do not truncate, summarize, or paraphrase.
- If the prompt text spans multiple paragraphs, preserve all paragraphs in order.
- If the prompt is hidden behind an expand/toggle interaction and becomes visible, extract it in full once visible.
- If only partial text is visible (e.g. truncated by a "read more" element), mark what was captured as `[partial]` and note what interaction would reveal the rest.
- Do not combine text from two different prompts into one record. One prompt = one record.
- Preserve all formatting cues visible in the text: line breaks, colons, bullet points, quoted values, and parenthetical instructions.

---

## 3. How to identify titles, subtitles, numbering, and labels

- **Title:** Any heading-level text directly above or attached to a prompt block. Record verbatim.
- **Subtitle:** Any secondary line of smaller text below the title, often in a different language or describing the use case. Record verbatim.
- **Numbering:** Any numeric prefix attached to a title (e.g. "1.", "3.", "12."). Record the full numbered title exactly as shown.
- **Labels:** Any UI text labeling the role of an element — such as "Input", "Output", "Prompt", "Before", "After", "Example", "Result". Record all visible labels as a comma-separated list.
- If a title, subtitle, or number is absent, set that field to `null`. Do not infer or construct one from context.

---

## 4. How to identify categories or subcategories

- A **category** is a high-level grouping label — typically visible as a page section heading, navigation tab, menu item, or breadcrumb.
- A **subcategory** is a more specific grouping label nested under a category — typically visible as a sub-heading, filter chip, or secondary tab.
- Record only labels that are **directly and visibly present** in the page for the prompt being extracted. Do not assign a category based on subject matter alone.
- If a category is shared across multiple prompts on the same page, note it in each record individually.
- If no category or subcategory label is visible, set both fields to `null`.
- Do not map to the core categories defined in `CLAUDE.md` at the raw extraction stage — that mapping belongs in the normalized layer.

---

## 5. How to identify image examples connected to a prompt

- An image is **connected** to a prompt if it appears within the same card, section, or visual container as that prompt.
- Record the presence of images using boolean flags: `before_image_present`, `after_image_present`, `has_image_output`.
- Describe what each image visibly shows, factually and briefly. Do not interpret artistic intent.
- If an image has a label ("Input", "Before", "Reference", etc.), record that label exactly.
- If an arrow, separator, or visual device implies a before→after relationship between two images, note it.
- If an image is present but its relationship to the prompt is ambiguous, note it in `uncertainty_notes`.
- Do not describe images that appear in other cards or sections. Only describe images within the same prompt container.

---

## 6. How to detect whether multiple prompts are variants of one family

A group of prompts should be flagged as possible variants when two or more of the following are true:

- The prompt texts share the same structural template (same opening verb, same sentence pattern) with only small differences in subject, style, material, time of day, or atmosphere.
- The prompts are grouped under a shared heading, tab set, or expandable section in the UI.
- The prompts share the same input image or the same type of input image.
- The prompts produce outputs of the same type (e.g. all produce exterior renders) but with different stylistic parameters.
- Explicit variant language is visible: "v2", "alternative", "option", "variation", or numbered sub-items.

When variants are suspected:
- Record each prompt as a separate raw record.
- Set `possible_variant_group` to a descriptive label shared across all suspected members (e.g. `exterior-sketch-to-render`).
- Do not merge variant records at the raw stage. Grouping happens in the normalized layer.

---

## 7. How to record uncertainty

- If a field value is concluded rather than directly read, append `[inferred]`.
- If text is visible but partially cut off or obscured, transcribe what is readable and append `[partial]`.
- If a field cannot be determined from the page, set it to `null` — never guess.
- List every field with low confidence in `uncertainty_notes`, one bullet per field.
- If the page structure is ambiguous (e.g. it is unclear whether two prompts are separate records or one), describe the ambiguity in `analyst_notes` and make a conservative choice — split rather than merge when unsure.
- If the session token in the URL has expired and the page content is inaccessible, stop extraction and record this as a blocker note before any `data/raw/` file is created.

---

## 8. Never invent missing content

If a field cannot be read directly from the page, set it to `null`.

Do not construct prompt text by paraphrasing or guessing. Do not assign a title if none is visible. Do not describe image content that is not visible. Do not assign a category that is not labeled on the page. Raw extraction records must contain only what is directly observable on the page — nothing more.

---

## 9. Preserve the source page context

- Every extracted record must include the `source_url` field, set to the full URL of the page where the prompt was found.
- If the portal has multiple pages, tabs, or sections, record which section the prompt came from in `analyst_notes`.
- Do not edit, summarize, or rephrase the source URL.
- If prompts are found on a sub-page or expanded panel reached by interaction, note the navigation path taken to reach them.
- The source URL is the permanent link between the raw record and the origin page. It must be preserved unchanged throughout all pipeline stages.

---

## 10. Keep website-extracted raw data separate from normalized data

- All records extracted from the website must be written to `data/raw/` only.
- Raw records contain only direct observations: verbatim text, presence flags, visible labels, uncertainty notes, and the source URL.
- Do not add cleaned prompt text, summaries, assigned categories, tags, or variant group IDs to raw records. Those fields belong in `data/normalized/`.
- Do not mix screenshot-extracted records with website-extracted records in the same file. Use separate files (e.g. `data/raw/website-batch-01.md`) to keep sources traceable.
- Raw records are immutable once written. If new information is discovered during normalization that contradicts a raw record, do not edit the raw record — flag the discrepancy in the normalized record instead.
