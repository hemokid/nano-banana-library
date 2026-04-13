# Raw Image Record Template

Use this template to record observations for one screenshot at a time.
Fill in every field. Use `null` for fields that cannot be determined from the image.
Append `[partial]` to text that is cut off or not fully legible.
Append `[inferred]` to values that are concluded rather than directly read.
Never invent information. Never leave a field blank — use `null` explicitly.

Completed records go in `data/raw/`.
Do not add interpretation or normalization here.

---

## Record

**source_filename:**
`<exact filename including Hebrew characters and extension>`

**visible_title:**
`<numbered title text visible at the top of the card, verbatim — or null>`

**visible_subtitle:**
`<English or secondary subtitle visible below the title, verbatim — or null>`

**visible_prompt_text:**
> <Full verbatim prompt text as visible in the screenshot. Use [partial] if cut off. Use null if no prompt text is visible.>

**visible_labels:**
`<Any UI labels visible, e.g. "Input", "Output", "Prompt", "Before", "After", tab names — list all, comma separated — or null>`

**visible_input_description:**
`<What is shown in the Input/Before image, described factually — or null if no input image is present>`

**visible_output_description:**
`<What is shown in the Output/After image, described factually — or null if no output image is present>`

---

**contains_prompt:** `yes / no / uncertain`

**contains_before_after_example:** `yes / no / uncertain`

**contains_workflow_explanation:** `yes / no / uncertain`

---

**category_clue:**
`<Any category or section label directly visible in the UI — or null. Do not infer.>`

**subcategory_clue:**
`<Any subcategory, tag, or group label directly visible in the UI — or null. Do not infer.>`

**possible_variant_group:**
`<Note if this prompt appears closely related to another already observed, and why — or null>`

**language_detected:**
`<Primary language of visible prompt text, e.g. Indonesian, English, Hebrew — or null>`

---

**uncertainty_notes:**
- <List each field or observation where confidence is low>
- <Use one bullet per uncertainty>
- `null` if no uncertainties

**analyst_notes:**
`<Any freeform observation that does not fit the fields above — or null>`

---
<!-- End of record. Copy this template for each new screenshot. -->
