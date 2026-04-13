# Website Text Splitting Rules

These rules govern how content from `source/website_text/` must be split into individual prompt records before writing to `data/raw/`. Follow them strictly. Do not split, discard, or rewrite source files.

---

## 1. How to detect when one text file contains multiple prompts

A text file contains multiple prompts when any of the following are present:

- Two or more numbered items in sequence (e.g. `1.`, `2.`, `3.` or `1)`, `2)`)
- Two or more clearly distinct instructional blocks separated by a blank line, where each block begins with an action verb directed at an AI model ("Generate", "Convert", "Based on", "Create", "Transform", "Replace", "Color", "Render", "Trace")
- A visible structural separator such as a horizontal rule, repeated dashes, or a section label between blocks
- Blocks that address different subjects or output types, even if not numbered (e.g. one block for an exterior render, another for an interior render)

When any of these indicators are present, treat the file as a multi-prompt source and split accordingly.

---

## 2. How to detect numbering and boundaries between prompts

**Numbered prompts:**
- A numbered prompt begins with a digit followed by a period or closing parenthesis at the start of a line (e.g. `1.`, `2.`, `3)`)
- The prompt text continues until the next numbered item begins, or until the end of the file
- Preserve any blank lines between the number and the prompt text as part of that prompt's block

**Unnumbered prompts:**
- A new unnumbered prompt begins when a blank line is followed by a new action verb or a new subject that is clearly distinct from the preceding block
- When boundaries between unnumbered blocks are ambiguous, prefer splitting conservatively (treat as two records) and note the ambiguity in `uncertainty_notes`

**Boundary rules:**
- A blank line alone is not a boundary — it must be accompanied by a new numbered item or a new instructional opening
- A mid-paragraph line break within a single long prompt is not a boundary
- Do not create a boundary based on subject matter alone if the text reads as one continuous instruction

---

## 3. How to handle intro text, notes, tool links, and non-prompt content

**Intro text:**
- Any text that appears before the first numbered or identifiable prompt and describes the category, use case, or instructions for use is **intro text**
- Record intro text in a dedicated field: `intro_text`
- Do not include intro text in the `prompt_text` of any child record
- Do not discard intro text

**Notes and explanatory text:**
- Any text that appears after a prompt and provides context, tips, or caveats (but is not itself a prompt) is a **note**
- Record notes in a dedicated field: `source_notes`
- Do not fold notes into the prompt text

**Tool links and external URLs:**
- Any line containing a URL (http:// or https://) that references an external service is a **tool reference**, not a prompt
- Record tool links in a dedicated field: `tool_references`, as a list
- Do not include URLs in the `prompt_text` field
- Do not discard tool references — they may be useful in the normalized layer as `related_tools`

**Section headers and labels:**
- Any line that appears to be a heading or label (e.g. "Prompt:", "Notes:", "How to use:") and is not itself instructional text is a **label**
- Strip the label prefix from the prompt text (e.g. "Prompt: Replace the building..." → record `prompt_text` as "Replace the building...")
- Record the original label in `source_label` so it is not lost

---

## 4. How to keep one source text file linked to multiple child prompt records

Every child record split from a single source file must include:

- `source_filename`: the exact original filename (e.g. `sketch to image prompts.txt`)
- `source_record_index`: the position of this prompt within the source file (e.g. `1 of 5`, `3 of 5`)
- `total_prompts_in_source`: the total number of prompts identified in the source file

These three fields together form the traceability chain. They must be present in every split record, even when the source file contains only one prompt.

---

## 5. How to name split records consistently

When writing split records to `data/raw/`, use the following naming convention for individual record identifiers within a batch file:

**Format:** `[source_slug]--[index]`

Where:
- `source_slug` is the source filename with spaces replaced by hyphens and the `.txt` extension removed, lowercased (e.g. `sketch-to-image-prompts`)
- `index` is a zero-padded two-digit number representing position within the source file (e.g. `01`, `02`, `03`)

**Examples:**
- `sketch-to-image-prompts--01`
- `sketch-to-image-prompts--02`
- `retexture-prompt--01`
- `photo-to-3d-building-model-prompt--01`

This ID is used as the record's `raw_id` field. It does not replace or alter the source filename.

---

## 6. How to record uncertainty when boundaries are unclear

- If a boundary between two prompts is inferred rather than explicitly marked, append `[inferred]` to the `boundary_detection` field of the record.
- List the specific uncertainty in `uncertainty_notes` — describe what made the boundary unclear (e.g. "no numbering present; split inferred from change of subject and action verb").
- If two blocks could reasonably be read as one prompt or two, split them into two records and flag both with `split_uncertain: true`.
- Never merge two ambiguous blocks into one record to avoid the decision. When in doubt, split and flag.
- If the number of prompts in a source file is uncertain, record the lower and upper bound (e.g. "between 2 and 3 prompts detected") in `analyst_notes`.

---

## 7. Never discard source text

Every word, line, number, label, URL, and character present in the source `.txt` file must be accounted for in the split records — either in `prompt_text`, `intro_text`, `source_notes`, `tool_references`, or `source_label`.

Nothing may be silently dropped. If a piece of text does not fit any defined field, place it in `analyst_notes` with a description of what it is and why it does not fit.

The source file itself must never be modified, truncated, or deleted.

---

## 8. Preserve the original source filename in every split record

The `source_filename` field must contain the exact original filename as it appears in `source/website_text/`, including capitalization, spaces, apostrophes, and the `.txt` extension.

Do not translate, slugify, normalize, or abbreviate the source filename at the raw stage. The `raw_id` (defined in rule 5) is the machine-friendly identifier. The `source_filename` is the human-readable link back to the original file and must remain unchanged throughout all pipeline stages.
