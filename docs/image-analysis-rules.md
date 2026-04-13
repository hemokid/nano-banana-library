# Image Analysis Rules

These rules govern how screenshots in `source/images/` must be analyzed before any data is written to `data/raw/`. Follow them strictly. Do not deviate without explicit instruction.

---

## 1. What to identify in each screenshot

For every screenshot, attempt to identify the following:

- Any visible prompt text (partial or complete)
- The category or section label shown in the UI (e.g. "3D", "Landscape", "Renderings")
- Any subcategory or tag visible in the interface
- Whether the screenshot shows a single prompt or multiple prompts
- Whether any output image or result is visible alongside the prompt
- Whether the screenshot shows a before/after pair
- Whether the screenshot shows a workflow, step sequence, or instructional explanation
- Whether any UI element suggests this is one of several related variants (e.g. tabs, numbered items)
- The approximate position of the prompt within the page (top, middle, scrolled)

---

## 2. How to detect content type

Classify each screenshot into one or more of the following types. A single screenshot may qualify for more than one.

### Prompt
Indicators:
- A block of instructional or descriptive text directed at an AI model
- Text that begins with action verbs ("Generate", "Create", "Show", "Render", "Design")
- A clearly delineated input field or prompt box visible in the UI
- Text that describes a visual style, architectural subject, or spatial instruction

### Before/After Example
Indicators:
- Two images displayed side by side or stacked vertically
- Labels such as "before", "after", "input", "output", "original", or "result"
- A reference image adjacent to a generated/processed image
- An annotation or arrow connecting two visual states

### Workflow Explanation
Indicators:
- Numbered steps or a sequence of actions
- Explanatory prose describing how to use the prompt or tool
- Diagrams or flowcharts
- Text that describes a process rather than a single output

### Category or Subcategory Clue
Indicators:
- A heading, tab label, section title, or navigation element naming a category
- A visible breadcrumb or menu item
- A group of prompts under a shared label
- Any text matching the core categories defined in CLAUDE.md (3D, Urban Planning, Landscape, Renderings, Plans, Sections, Illustrations, Post-processing, Other)

### Variation of Another Prompt
Indicators:
- Very similar prompt text with small differences in style, material, time of day, or tone
- A tab interface showing multiple versions of the same concept
- Explicit labels such as "v2", "alternative", "variant", or "option"
- A prompt that shares subject matter and structure with another already observed

---

## 3. Fields to extract from each screenshot

Record the following fields for each screenshot in the raw observation record:

| Field | Description |
|---|---|
| `source_filename` | Exact filename of the screenshot, preserved as-is |
| `content_types` | List of detected content types (prompt, before_after, workflow, category_clue, variant) |
| `visible_text` | Full verbatim text visible in the screenshot, transcribed exactly |
| `prompt_text` | The prompt text only, if identifiable, copied verbatim |
| `category_hint` | Any category or subcategory label visible in the UI |
| `has_image_output` | Boolean — whether a generated or result image is visible |
| `before_image_present` | Boolean — whether a before/input image is visible |
| `after_image_present` | Boolean — whether an after/output image is visible |
| `variant_clue` | Any text or UI element suggesting this is one of several variants |
| `uncertainty_flags` | List of fields where the analyst was not confident |
| `raw_notes` | Freeform observations that do not fit other fields |

---

## 4. How to mark uncertainty

- If any field value is inferred rather than directly visible, append `[inferred]` to the value.
- If a field cannot be determined from the screenshot, set its value to `null` — never guess.
- If text is partially visible or cut off, transcribe what is visible and append `[partial]`.
- If the content type is ambiguous, list all plausible types and add the type to `uncertainty_flags`.
- If category assignment is uncertain, log the candidate categories and note the ambiguity in `raw_notes`.

---

## 5. Never invent missing information

If a field cannot be read directly from the screenshot, leave it as `null`.

Do not infer prompt text that is not visible. Do not assign a category that is not supported by visible UI evidence. Do not fabricate output descriptions based on what a prompt might produce. Raw observations must reflect only what is actually present in the image — nothing more.

---

## 6. Preserve the source screenshot filename

The `source_filename` field must always contain the original filename exactly as it appears in `source/images/`, including the Hebrew characters, spaces, and extension.

Do not rename, translate, slugify, or abbreviate filenames at the raw observation stage. The filename is the only reliable link between the raw record and the source asset. It must not be altered until the normalization phase, and only then with the original preserved alongside.

---

## 7. Keep raw observations separate from interpreted metadata

Raw observations belong in `data/raw/`. Interpreted metadata belongs in `data/normalized/`.

- `data/raw/` records must contain only what was directly observed: verbatim text, detected types, presence flags, and uncertainty notes.
- `data/normalized/` records are where cleaned prompts, assigned categories, summaries, tags, and variant groupings are written.
- Never mix interpretation into a raw record. If an observation leads to an interpretive conclusion, write the conclusion in the normalized layer only.
- The raw record must remain stable after it is written. It is the ground truth of what was seen.
