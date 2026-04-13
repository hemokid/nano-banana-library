# Website Trial — Paired Records (Normalized)

Sources: `data/raw/website-batch-all-split-records.md` + `source/website_images/`
Date: 2026-04-09
Topics processed: sketch to image prompts, PhotoPlan to Isometric Diagram, Photo to Elevation (or CAD)

---

## Batch header

**Total paired records created:** 13

**Raw records that could not be matched to an image:**
- `photoplan-to-isometric-diagram--05` — Prompt 5 (apartment isometric from floor plan): No image file found. Only 4 images exist for 5 prompts in this group.

**Image files that could not be confidently matched to a single text record:**
- `sketch to image 2.png` and `sketch to image 4.png` — both show landscape plan transformations; assignment to prompts 02 and 03 respectively is inferred from subject matter, not from any label. The mapping could be reversed. Both are flagged with medium confidence.
- `Photo to Elevation (or CAD) 2.png` — shows two building examples in a single image; matched tentatively to the minimal prompt 01 but with low-medium confidence.

---

## Group 1: sketch to image prompts

**Source file:** `sketch to image prompts.txt`
**Available images:** 5 (`sketch to image 1–5.png`)
**Prompts:** 5
**Match status:** 5 matched, 0 unmatched

---

### Paired Record 01

**normalized_id:** `NB-WEB-sketch-to-image-01`

**source_filename:** `sketch to image prompts.txt`

**raw_id:** `sketch-to-image-prompts--01`

**visible_title_or_topic:** `Sketch to Image` (visible heading in image 1)

**cleaned_prompt_text:**
> Based on this architectural sketch, generate a realistic 3D rendering of a modern architecture building. Apply daylight conditions with natural shadows and reflective materials. The final image should resemble a professional visualization in the style of MIR renderings — cinematic, detailed, and photorealistic.

**matched_image_filenames:** `sketch to image 1.png`

**match_confidence:** high

**notes_on_why_the_pairing_was_made:**
Image 1 shows three versions of the same modern sculptural tower: a hand-drawn architectural sketch on the left (labeled "Sketch"), a Nano Banana render in the center (labeled "Nano Banana"), and a ChatGPT render on the right (labeled "ChatGPT"). The input is clearly an architectural sketch and the output is a photorealistic 3D render — matching prompt 1's instruction exactly. This is the only prompt in the group for a modern building exterior in 3D rendering style. The image also carries the section heading "Sketch to Image", confirming this is the first example in the series.

**uncertainty_notes:**
- The image includes a ChatGPT column not referenced in the prompt text — this may indicate the portal presents a model comparison. The prompt itself is for Nano Banana only.

---

### Paired Record 02

**normalized_id:** `NB-WEB-sketch-to-image-02`

**source_filename:** `sketch to image prompts.txt`

**raw_id:** `sketch-to-image-prompts--02`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Color this black-and-white landscape plan in a hand-rendered style. Use soft watercolor textures combined with vivid marker strokes. Emphasize plant areas with layered green tones, hardscape with warm grays, and water features with translucent blue washes. Maintain a clean, architectural layout while showcasing a vibrant, artistic look.

**matched_image_filenames:** `sketch to image 2.png`

**match_confidence:** medium

**notes_on_why_the_pairing_was_made:**
Image 2 shows a small-scale landscape site plan labeled "Hand Drawing" on the left and a colored, more rendered version labeled "Nano Banana" on the right. The Nano Banana output shows the plan with colored vegetation areas, green tones, and a more finished appearance. This aligns with prompt 2's instruction to color a landscape plan in a hand-rendered style with green plant areas and warm hardscape tones. The input is described as a "Hand Drawing" — consistent with the prompt's "black-and-white landscape plan."

**uncertainty_notes:**
- Prompts 2 and 3 are both about landscape plan transformation. The assignment of image 2 to prompt 2 (and image 4 to prompt 3) is inferred from subject scale and output character — not from any explicit label linking a specific image to a specific prompt number.
- The Nano Banana output in image 2 could also be interpreted as a "clean, professional plan" (matching prompt 3) rather than a watercolor/marker-style rendering (matching prompt 2). The mapping could be reversed.

---

### Paired Record 03

**normalized_id:** `NB-WEB-sketch-to-image-03`

**source_filename:** `sketch to image prompts.txt`

**raw_id:** `sketch-to-image-prompts--03`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Convert this hand-drawn landscape design into a clean, professional top-down landscape architecture plan. Retain the original layout and spatial composition, but enhance it with accurate linework, consistent geometry, and digital textures. Apply realistic plant symbols, soft green lawn textures, top-view trees and shrubs, and clean paving patterns. Use a modern landscape graphics style with clear zone differentiation, muted tones, and professional color palette. Remove sketchy lines and noise — the final rendering should look polished and presentation-ready for a landscape architecture portfolio or competition board.

**matched_image_filenames:** `sketch to image 4.png`

**match_confidence:** medium

**notes_on_why_the_pairing_was_made:**
Image 4 shows a large coastal masterplan — on the left, a CAD/linework version with sparse detail; on the right, a photorealistic rendered top-down plan with rich greenery, texture, and clarity (labeled "Nano Banana"). The Nano Banana output reads as a polished, professional rendered plan — aligned with prompt 3's goal of converting a hand-drawn design into a "clean, professional top-down landscape architecture plan" with "realistic plant symbols" and "soft green lawn textures." The scale and complexity of the site match the longer, more detailed nature of prompt 3 compared to prompt 2.

**uncertainty_notes:**
- Same ambiguity as record 02: images 2 and 4 could be swapped. The mapping is inferred.
- The left-side image in image 4 looks more like a CAD drawing than a hand-drawn sketch — the prompt specifies "hand-drawn landscape design." This is a minor inconsistency.

---

### Paired Record 04

**normalized_id:** `NB-WEB-sketch-to-image-04`

**source_filename:** `sketch to image prompts.txt`

**raw_id:** `sketch-to-image-prompts--04`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Render my sketch of a modern house and backyard. The facade uses smooth white stucco and dark aluminum panels. The backyard is landscaped with native California plants. Realistic materials, natural daylight, soft shadows, clean modern style.

**matched_image_filenames:** `sketch to image 3.png`

**match_confidence:** high

**notes_on_why_the_pairing_was_made:**
Image 3 shows a modern two-storey house with a garden path. The left image (labeled "Sketch") is a detailed pencil/ink architectural sketch of the house exterior and garden. The right image (labeled "Nano Banana") is a photorealistic render of the same house with white/light-toned walls, dark-frame windows, stone/paving path, flowering plants, and soft daylight. This directly matches prompt 4: a modern house sketch with clean materials, California-style landscaping, and natural daylight. The material palette visible in the render (light walls, dark frames, stone paving, soft planting) is consistent with "white stucco and dark aluminum panels" and "native California plants."

**uncertainty_notes:** null

---

### Paired Record 05

**normalized_id:** `NB-WEB-sketch-to-image-05`

**source_filename:** `sketch to image prompts.txt`

**raw_id:** `sketch-to-image-prompts--05`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> A modern minimalist living room with a high ceiling in perspective view. White walls, clean lines, and soft natural light. The space features sleek contemporary furniture, large windows, and a wood slat ceiling. Calm, airy atmosphere with neutral tones and subtle textures. Architectural visualization style.

*Note: "Wood slat ceiling ceiling" in source corrected to "wood slat ceiling" — one instance of the word duplication removed. Original preserved in raw record.*

**matched_image_filenames:** `sketch to image 5.png`

**match_confidence:** high

**notes_on_why_the_pairing_was_made:**
Image 5 shows a double-height interior living room. The left image is a clean line sketch showing the spatial composition — high ceiling, large windows, minimal furniture arrangement. The right image (labeled "Nano Banana") is a photorealistic render of the same space with warm wood ceiling slats, white walls, large glazed windows, contemporary furniture, and soft natural light. This is a direct visual match to prompt 5: minimalist living room, high ceiling, wood slat ceiling, large windows, neutral tones.

**uncertainty_notes:**
- The source text does not reference an input sketch ("A modern minimalist living room...") — it reads as a text-to-image prompt, not an image-to-image prompt. However, the matched image clearly shows a sketch as the input. This may indicate the prompt is used with a sketch input on the portal, even though the text itself is not phrased as an image-to-image instruction.

---

## Group 2: PhotoPlan to Isometric Diagram

**Source file:** `PhotoPlan to Isometric Diagram.txt`
**Available images:** 4 (`PhotoPlan to Isometric Diagram 1–4.png`)
**Prompts:** 5
**Match status:** 4 matched, 1 unmatched (`photoplan-to-isometric-diagram--05`)

---

### Paired Record 06

**normalized_id:** `NB-WEB-photoplan-isometric-01`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**raw_id:** `photoplan-to-isometric-diagram--01`

**visible_title_or_topic:** `PhotoPlan to Isometric Diagram` (from filename; image labels: "Photo" / "Nano Banana")

**cleaned_prompt_text:**
> Turn this building into a clean 3D axonometric illustration. Remove all background elements — keep only the main structure of the building. Add a minimal square base underneath the building to ground the composition. Use crisp lines, soft shadows, and subtle textures to emphasize form and depth. The overall style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 1.png`

**match_confidence:** high

**notes_on_why_the_pairing_was_made:**
Image 1 shows a colorful modular residential building labeled "Photo" on the left, and a clean white-background 3D isometric illustration labeled "Nano Banana" on the right. The output is exactly what prompt 1 describes: background removed, only the main building structure retained, placed on a minimal base, with crisp lines, soft shadows, and a clean diagrammatic look. This is the only image in the group showing a real building photo as the input.

**uncertainty_notes:** null

---

### Paired Record 07

**normalized_id:** `NB-WEB-photoplan-isometric-02`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**raw_id:** `photoplan-to-isometric-diagram--02`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Create an axonometric architectural program diagram using color-coded 3D blocks to represent spatial functions. Divide the building volume into stacked or interlocking bars, with each bar labeled by its program (e.g., "Retail", "Office", "Hotel", "Residential"). Overlay bold transparent typography directly inside each volume. Use bright, high-contrast colors for each function type. Show a second diagram next to the first, highlighting programmatic voids such as "Garden", "Culture", and "Passage", carved out of the same volume. Maintain clean linework, minimal black outlines, no shadows, and a white background. Style it in a conceptual, academic architecture diagram format, ideal for presentations or publications.

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 2.png`

**match_confidence:** high

**notes_on_why_the_pairing_was_made:**
Image 2 shows a photorealistic glass office tower on the left and, on the right, an exploded/layered axonometric diagram with color-coded horizontal bands representing different programmatic levels. The diagram uses bright, distinct colors for each layer — directly matching the prompt's instruction to use "color-coded 3D blocks" with "bright, high-contrast colors for each function type." The exploded/layered format also visually matches the description of showing stacked programmatic volumes.

**uncertainty_notes:**
- The image shows an exploded-layer diagram rather than labeled text inside each volume as the prompt specifies. The label overlay requirement ("bold transparent typography directly inside each volume") is not clearly visible in the image.
- Only one diagram is visible in the image, while the prompt requests two (solid + void version). The second diagram may not have been captured in this image, or may not have been generated.

---

### Paired Record 08

**normalized_id:** `NB-WEB-photoplan-isometric-03`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**raw_id:** `photoplan-to-isometric-diagram--03`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Turn this landscape plan for a residential community in Barcelona into a clean 3D axonometric diagram. Remove all surrounding elements — keep only the main structure of the building and landscape. Add a minimal square base underneath the building to ground the composition. Use thin lines, soft shadows, and subtle textures to emphasize form and depth. The overall style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 3.png`

**match_confidence:** medium

**notes_on_why_the_pairing_was_made:**
Image 3 shows a top-down landscape/site plan on the left (a residential courtyard block, green areas, streets) and a clean 3D isometric illustration of the same block on the right — a compact courtyard building with trees and greenery, isolated on a white background with a minimal base. The structure (plan → clean isometric with base) directly matches prompt 3's instruction. The surrounding context is removed and only the main building and landscape are kept, consistent with "remove all surrounding elements."

**uncertainty_notes:**
- The Barcelona context cannot be confirmed from the image — the plan and isometric do not include any geographic labels.
- Prompt 3 is structurally very similar to prompt 1, differing mainly in the input type (landscape plan vs. building photo). The assignment to image 3 (plan input) vs. image 1 (photo input) is consistent and confident on that basis.

---

### Paired Record 09

**normalized_id:** `NB-WEB-photoplan-isometric-04`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**raw_id:** `photoplan-to-isometric-diagram--04`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Convert the 2D architectural plan into a 3D isometric diagram with realistic textures. Extrude the building footprints into detailed structures, apply realistic facade materials like brick, concrete, wood, or glass. Add roofs, windows, and doors accurately based on the plan. Use soft natural lighting, shadows, and a clean white background to emphasize depth and clarity. Include textured landscape elements such as grass, pavement, and trees to represent the surrounding context. Present the entire model in a clean, angled isometric view, suitable for design presentation or competition boards.

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 4.png`

**match_confidence:** medium

**notes_on_why_the_pairing_was_made:**
Image 4 shows a top-down landscape plan on the left with dense tree canopy and a small building footprint, and on the right a realistic-textured 3D isometric of the same building in a green landscape — showing the building with a roof, walls, and surrounding trees rendered in a naturalistic style against a white background. This matches prompt 4's instruction to convert a 2D plan into a realistic-textured 3D isometric with "textured landscape elements such as grass, pavement, and trees." The output includes realistic materials and surrounding context as specified.

**uncertainty_notes:**
- The building in the image appears to be a simple pavilion/small structure — the prompt mentions "brick, concrete, wood, or glass" facade materials, but the rendered structure appears to use primarily simple white/light tones. The facade material detail is not clearly visible.
- This is the last available image, and prompt 5 has no image. The assignment of image 4 to prompt 4 (rather than prompt 5) is made by sequential elimination, but prompt 4 is a stronger visual match than prompt 5 in any case.

---

### Unmatched Record — No Image Available

**raw_id:** `photoplan-to-isometric-diagram--05`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**prompt_text:**
> Create a 3D isometric diagram of my apartment based on the provided floor plan. Show walls, rooms, furniture, and major interior elements in a clean, diagrammatic style. White Background.

**match_confidence:** none

**notes:** Only 4 images exist for this group (`PhotoPlan to Isometric Diagram 1–4.png`). There is no fifth image. This prompt has no visual example in the current source material.

---

## Group 3: Photo to Elevation (or CAD)

**Source file:** `Photo to Elevation (or CAD).txt`
**Available images:** 3 (`Photo to Elevation (or CAD) 1–3.png`)
**Prompts:** 3
**Match status:** 3 matched (prompt 1 with low-medium confidence)

---

### Paired Record 10

**normalized_id:** `NB-WEB-photo-to-elevation-01`

**source_filename:** `Photo to Elevation (or CAD).txt`

**raw_id:** `photo-to-elevation-or-cad--01`

**visible_title_or_topic:** `Photo to Elevation (or CAD)` (from filename)

**cleaned_prompt_text:**
> Generate rear elevation of the building.

**matched_image_filenames:** `Photo to Elevation (or CAD) 2.png`

**match_confidence:** low-medium

**notes_on_why_the_pairing_was_made:**
Image 2 shows two stacked rows, each containing a building photo on the left and a clean architectural elevation drawing on the right. Top row: a modern white house with a CAD-style elevation. Bottom row: a classical multi-storey building with a detailed elevation. The presence of two examples suggests this image may be illustrating the concept of the basic prompt across different building types — consistent with the minimal prompt 1 ("Generate rear elevation of the building.") which makes no style or complexity specification. Images 1 and 3 show much more detailed and specific outputs (civic building elevation, and a full construction document set) that better match the longer and more specific prompts 2 and 3.

**uncertainty_notes:**
- This is a process-of-elimination assignment: prompts 2 and 3 are more confidently matched to images 1 and 3, leaving image 2 for prompt 1.
- The two-row layout in image 2 is unique — it may represent a general overview image for the whole topic rather than an example of any specific prompt.
- The prompt "Generate rear elevation of the building." is flagged `split_uncertainty: true` in the raw record (only 6 words — possibly a minimal prompt or stub). If this prompt is a stub, the image may not correspond to it specifically.
- The elevations in image 2 appear to be front or side elevations, not rear elevations.

---

### Paired Record 11

**normalized_id:** `NB-WEB-photo-to-elevation-02`

**source_filename:** `Photo to Elevation (or CAD).txt`

**raw_id:** `photo-to-elevation-or-cad--02`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Generate a rear elevation view of the building. Use clean, precise architectural linework with no annotations, no textures, and no landscape or entourage. The drawing should show accurate proportions, windows, doors, facade elements, and structural outlines as seen from the back of the building. Present the elevation on a white background in a minimal, technical style suitable for architectural documentation or concept diagrams.

**matched_image_filenames:** `Photo to Elevation (or CAD) 1.png`

**match_confidence:** medium-high

**notes_on_why_the_pairing_was_made:**
Image 1 is labeled "Rendering/Photo" on the left and "Nano Banana" on the right. The left side shows a contemporary civic/museum building in a rendered or photographic view. The right side shows a clean architectural elevation drawing of the same building — precise linework, no entourage, white background, showing the facade structure accurately. This is consistent with prompt 2's requirements: "clean, precise architectural linework with no annotations, no textures, and no landscape or entourage" on a white background. The output style matches the prompt description closely.

**uncertainty_notes:**
- The elevation in image 1 appears to be a front or side elevation rather than a rear elevation (as the prompt specifies "rear elevation view"). The elevation direction cannot be confirmed from the image alone.

---

### Paired Record 12

**normalized_id:** `NB-WEB-photo-to-elevation-03`

**source_filename:** `Photo to Elevation (or CAD).txt`

**raw_id:** `photo-to-elevation-or-cad--03`

**visible_title_or_topic:** `null`

**cleaned_prompt_text:**
> Turn an architecture photo into a technical architectural drawing in this style. Convert the building photo into a black-and-white architectural construction drawing with orthographic projections only. Produce clean, precise CAD-style linework showing accurate sections and elevations, including walls, floors, roof structure, foundations, and openings. Use consistent line weights, dashed lines for hidden elements, and standard architectural symbols. Add dimensions, level markers, section cuts, and material callouts where appropriate. No shading, no textures, no colors, no people, no landscape. White background. The result should look like a professional construction document or permit drawing sheet, highly accurate and technical.

**matched_image_filenames:** `Photo to Elevation (or CAD) 3.png`

**match_confidence:** high

**notes_on_why_the_pairing_was_made:**
Image 3 shows a contemporary building with a distinctive curved/arched white facade on the left, and on the right a set of four technical drawings: front elevation, side elevation, longitudinal section, and floor plan — all in clean CAD-style linework with dimension lines, level markers, and section labels. This is a direct match to prompt 3's most specific requirements: "sections and elevations, including walls, floors, roof structure, foundations, and openings," with "dimensions, level markers, section cuts, and material callouts." The output is clearly a full construction document set, not just a single elevation.

**uncertainty_notes:**
- The prompt says "Turn an architecture photo into a technical architectural drawing in this style" — the phrase "in this style" implies a reference style image should accompany the input. No such reference style image is described in the text file. Whether the portal presents one alongside this prompt is unknown.

---

## Summary table

| normalized_id | raw_id | matched_image | confidence |
|---|---|---|---|
| `NB-WEB-sketch-to-image-01` | `sketch-to-image-prompts--01` | `sketch to image 1.png` | high |
| `NB-WEB-sketch-to-image-02` | `sketch-to-image-prompts--02` | `sketch to image 2.png` | medium |
| `NB-WEB-sketch-to-image-03` | `sketch-to-image-prompts--03` | `sketch to image 4.png` | medium |
| `NB-WEB-sketch-to-image-04` | `sketch-to-image-prompts--04` | `sketch to image 3.png` | high |
| `NB-WEB-sketch-to-image-05` | `sketch-to-image-prompts--05` | `sketch to image 5.png` | high |
| `NB-WEB-photoplan-isometric-01` | `photoplan-to-isometric-diagram--01` | `PhotoPlan to Isometric Diagram 1.png` | high |
| `NB-WEB-photoplan-isometric-02` | `photoplan-to-isometric-diagram--02` | `PhotoPlan to Isometric Diagram 2.png` | high |
| `NB-WEB-photoplan-isometric-03` | `photoplan-to-isometric-diagram--03` | `PhotoPlan to Isometric Diagram 3.png` | medium |
| `NB-WEB-photoplan-isometric-04` | `photoplan-to-isometric-diagram--04` | `PhotoPlan to Isometric Diagram 4.png` | medium |
| `NB-WEB-photoplan-isometric-05` | `photoplan-to-isometric-diagram--05` | — UNMATCHED — | none |
| `NB-WEB-photo-to-elevation-01` | `photo-to-elevation-or-cad--01` | `Photo to Elevation (or CAD) 2.png` | low-medium |
| `NB-WEB-photo-to-elevation-02` | `photo-to-elevation-or-cad--02` | `Photo to Elevation (or CAD) 1.png` | medium-high |
| `NB-WEB-photo-to-elevation-03` | `photo-to-elevation-or-cad--03` | `Photo to Elevation (or CAD) 3.png` | high |
