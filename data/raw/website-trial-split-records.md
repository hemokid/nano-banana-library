# Website Trial Split Records

Split per rules in `docs/website-text-splitting-rules.md`.
Extraction rules: `docs/website-extraction-rules.md`.
Date: 2026-04-09
Analyst: Claude (automated)
Source files processed: 2
Total split records produced: 6

---

## Source file: `sketch to image prompts.txt`

**Detection method:** 5 numbered items (`1.`, `2.`, `3.`, `4.`, `5.`) detected. Each starts a new prompt block. Boundaries are explicit — no ambiguity.
**total_prompts_in_source:** 5
**intro_text:** null — no text appears before prompt 1.
**source_notes:** null — no trailing notes after prompt 5.
**tool_references:** null — no URLs present.

---

### Record 1 of 5

**raw_id:** `sketch-to-image-prompts--01`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `1 of 5`

**visible_title_or_topic:** `Sketch to Image` (section heading visible in matched image `sketch to image 1.png`; not present in the text file itself)

**prompt_text:**
> Based on this architectural sketch, generate a realistic 3D rendering of a modern architecture building. Apply daylight conditions with natural shadows and reflective materials. The final image should resemble a professional visualization in the style of MIR renderings — cinematic, detailed, and photorealistic.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is the explicit number `1.` at line start; next boundary is `2.` on a subsequent line.

**analyst_notes:** `Prompt begins on line 2 of the source file (line 1 is blank). Subject: modern building exterior. Output style references MIR renderings by name — a specific professional visualization studio.`

---

### Record 2 of 5

**raw_id:** `sketch-to-image-prompts--02`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `2 of 5`

**visible_title_or_topic:** null — no title in the text file. Image `sketch to image 2.png` shows a landscape plan pair labeled "Hand Drawing" / "Nano Banana".

**prompt_text:**
> Color this black-and-white landscape plan in a hand-rendered style. Use soft watercolor textures combined with vivid marker strokes. Emphasize plant areas with layered green tones, hardscape with warm grays, and water features with translucent blue washes. Maintain a clean, architectural layout while showcasing a vibrant, artistic look.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is the explicit number `2.` at line start.

**analyst_notes:** `Subject: top-down landscape plan. Output style: hand-rendered watercolor and marker. This is a plan rendering prompt, not a 3D or perspective prompt.`

---

### Record 3 of 5

**raw_id:** `sketch-to-image-prompts--03`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `3 of 5`

**visible_title_or_topic:** null — no title in the text file.

**prompt_text:**
> Convert this hand-drawn landscape design into a clean, professional top-down landscape architecture plan. Retain the original layout and spatial composition, but enhance it with accurate linework, consistent geometry, and digital textures. Apply realistic plant symbols, soft green lawn textures, top-view trees and shrubs, and clean paving patterns. Use a modern landscape graphics style with clear zone differentiation, muted tones, and professional color palette. Remove sketchy lines and noise — the final rendering should look polished and presentation-ready for a landscape architecture portfolio or competition board.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is the explicit number `3.` at line start.

**analyst_notes:** `Subject: hand-drawn landscape plan to clean digital plan. Longer and more detailed than prompts 1 and 2. Mentions portfolio/competition board as target use. Related to prompt 2 in subject matter (both are landscape plans) but different output style — prompt 2 targets hand-rendered artistic output, prompt 3 targets clean digital professional output. Flag as potential variant pair during normalization.`

---

### Record 4 of 5

**raw_id:** `sketch-to-image-prompts--04`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `4 of 5`

**visible_title_or_topic:** null — no title in the text file. Image `sketch to image 3.png` shows a modern house exterior labeled "Sketch" / "Nano Banana".

**prompt_text:**
> Render my sketch of a modern house and backyard. The facade uses smooth white stucco and dark aluminum panels. The backyard is landscaped with native California plants. Realistic materials, natural daylight, soft shadows, clean modern style.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is the explicit number `4.` at line start.

**analyst_notes:** `Subject: modern residential exterior with backyard. This is the shortest prompt in the file — minimal and direct. References a specific material combination (white stucco, dark aluminum). The California plants reference is geographically specific.`

---

### Record 5 of 5

**raw_id:** `sketch-to-image-prompts--05`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `5 of 5`

**visible_title_or_topic:** null — no title in the text file. Image `sketch to image 5.png` shows a double-height living room labeled "Nano Banana".

**prompt_text:**
> A modern minimalist living room with a high ceiling in perspective view. White walls, clean lines, and soft natural light. The space features sleek contemporary furniture, large windows, and a Wood slat ceiling ceiling. Calm, airy atmosphere with neutral tones and subtle textures. Architectural visualization style.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is the explicit number `5.` at line start; no further content follows in the file.

**analyst_notes:** `Subject: interior living room. This is the only interior prompt in this source file — all others (1, 2, 3, 4) are exterior or plan views. The phrase "Wood slat ceiling ceiling" contains a word duplication — preserved verbatim as written in source. The prompt does not reference an input sketch explicitly ("A modern minimalist living room...") — unlike prompts 1–4 which reference an input image ("this architectural sketch", "this landscape plan", "my sketch"). May indicate this prompt is used without an input image, as a text-to-image prompt rather than image-to-image.`

---

## Source file: `Photo to 3D Building Model prompt.txt`

**Detection method:** File contains one identifiable prompt block, followed by a section break (blank line + label "Generate a downloadable 3D model...") introducing external tool URLs. These are two distinct content types; the tool references are not a second prompt.
**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** `Generate a downloadable 3D model from an image using an image-to-3D website:` (label line preceding the tool URLs)
**tool_references:**
- `https://gen.hexa3d.io/`
- `https://www.meshy.ai/`

---

### Record 1 of 1

**raw_id:** `photo-to-3d-building-model-prompt--01`

**source_filename:** `Photo to 3D Building Model prompt.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Photo to 3D Building Model` (derived from filename; no heading present in the text file itself)

**prompt_text:**
> Based on this architectural photograph, generate a high-fidelity 3D building model in the style of "3d print building model." Key Requirements: Aim for a realistic look, preserving the main structure and texture details of the building, but stylized for a game. Emphasize realistic lighting and shadow effects. Use a 45-degree top-down perspective to showcase the building's three-dimensionality. Materials should be clearly defined, such as reflective glass and metallic surfaces. It should look like a high-quality 3D render suitable for a game engine. White background.

**non_prompt_content:**
- **type:** `source_notes` — `Generate a downloadable 3D model from an image using an image-to-3D website:`
- **type:** `tool_references` —
  - `https://gen.hexa3d.io/`
  - `https://www.meshy.ai/`

**split_uncertainty:** `false` — there is only one prompt block. The tool references are clearly non-prompt content: they follow a blank line and a new label sentence, they contain no instructional text directed at an AI model, and they are external URLs.

**analyst_notes:** `Two typographic errors are present in the source text and are preserved verbatim: "inthe" (missing space between "in" and "the") and "thebuilding" (missing space between "the" and "building"). The prompt describes an output style ("3d print building model", "suitable for a game engine") that is unusual compared to other prompts in this source collection — it targets a stylized/game-engine aesthetic rather than photorealism. The tool references point to two external image-to-3D conversion services (Hexa3D and Meshy). These are workflow tools, not prompts — they should be recorded in the normalized layer as related_tools. The visible_title_or_topic is derived from the source filename, not from text visible in the file — this is noted as [inferred].`

---

## Summary table

| raw_id | source_filename | index | prompts_in_source | split_uncertain |
|---|---|---|---|---|
| `sketch-to-image-prompts--01` | `sketch to image prompts.txt` | 1 of 5 | 5 | false |
| `sketch-to-image-prompts--02` | `sketch to image prompts.txt` | 2 of 5 | 5 | false |
| `sketch-to-image-prompts--03` | `sketch to image prompts.txt` | 3 of 5 | 5 | false |
| `sketch-to-image-prompts--04` | `sketch to image prompts.txt` | 4 of 5 | 5 | false |
| `sketch-to-image-prompts--05` | `sketch to image prompts.txt` | 5 of 5 | 5 | false |
| `photo-to-3d-building-model-prompt--01` | `Photo to 3D Building Model prompt.txt` | 1 of 1 | 1 | false |
