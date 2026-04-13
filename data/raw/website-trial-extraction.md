# Website Trial Extraction — 3 Source Files

Extracted per rules in `docs/website-extraction-rules.md`.
Date of extraction: 2026-04-09
Analyst: Claude (automated read)
Sources: `source/website_text/` and `source/website_images/`

---

## Record Group 1

**source_text_filename:** `sketch to image prompts.txt`

**matched_image_filenames:**
- `sketch to image 1.png`
- `sketch to image 2.png`
- `sketch to image 3.png`
- `sketch to image 4.png`
- `sketch to image 5.png`

**visible_topic_title:** `Sketch to Image` (visible as a heading label in `sketch to image 1.png`)

---

### Extracted prompts (verbatim from text file)

The file contains **5 numbered prompts**. Each is a separate prompt entry.

---

**Prompt 1 (verbatim):**
> Based on this architectural sketch, generate a realistic 3D rendering of a modern architecture building. Apply daylight conditions with natural shadows and reflective materials. The final image should resemble a professional visualization in the style of MIR renderings — cinematic, detailed, and photorealistic.

**Prompt 2 (verbatim):**
> Color this black-and-white landscape plan in a hand-rendered style. Use soft watercolor textures combined with vivid marker strokes. Emphasize plant areas with layered green tones, hardscape with warm grays, and water features with translucent blue washes. Maintain a clean, architectural layout while showcasing a vibrant, artistic look.

**Prompt 3 (verbatim):**
> Convert this hand-drawn landscape design into a clean, professional top-down landscape architecture plan. Retain the original layout and spatial composition, but enhance it with accurate linework, consistent geometry, and digital textures. Apply realistic plant symbols, soft green lawn textures, top-view trees and shrubs, and clean paving patterns. Use a modern landscape graphics style with clear zone differentiation, muted tones, and professional color palette. Remove sketchy lines and noise — the final rendering should look polished and presentation-ready for a landscape architecture portfolio or competition board.

**Prompt 4 (verbatim):**
> Render my sketch of a modern house and backyard. The facade uses smooth white stucco and dark aluminum panels. The backyard is landscaped with native California plants. Realistic materials, natural daylight, soft shadows, clean modern style.

**Prompt 5 (verbatim):**
> A modern minimalist living room with a high ceiling in perspective view. White walls, clean lines, and soft natural light. The space features sleek contemporary furniture, large windows, and a Wood slat ceiling ceiling. Calm, airy atmosphere with neutral tones and subtle textures. Architectural visualization style.

---

**prompt_text_complete_or_partial:** Complete — all 5 prompts appear fully readable in the text file. No truncation markers present.

---

### What the matched images show

| Image | Visible labels | What is shown |
|---|---|---|
| `sketch to image 1.png` | "Sketch to Image" (header), "Sketch", "Nano Banana", "ChatGPT" | Three versions of a modern sculptural tower: hand sketch (left), Nano Banana render (center), ChatGPT render (right) |
| `sketch to image 2.png` | "Hand Drawing", "Nano Banana" | A landscape site plan: hand-drawn version (left) vs. a cleaned/rendered digital plan (right) |
| `sketch to image 3.png` | "Sketch", "Nano Banana" | A modern house with garden path: hand sketch (left) vs. photorealistic render (right) |
| `sketch to image 4.png` | "Nano Banana" | A large coastal masterplan: CAD/sketch version (left) vs. photorealistic rendered top-down plan (right) |
| `sketch to image 5.png` | "Nano Banana" | A double-height interior living room: sketch (left) vs. photorealistic render (right) |

---

**Do the images and text clearly belong together:** Yes — all images show sketch-to-render before/after pairs and the section header "Sketch to Image" is visible in image 1. The 5 images correspond well to the 5 prompts.

**Probable prompt-to-image mapping (inferred — not explicitly labeled):**
- Prompt 1 (modern building, MIR style) → `sketch to image 1.png`
- Prompt 2 (color landscape plan, hand-rendered/watercolor) → `sketch to image 2.png` [inferred — uncertain, see below]
- Prompt 3 (hand-drawn landscape to top-down digital plan) → `sketch to image 4.png` [inferred — see below]
- Prompt 4 (modern house and backyard) → `sketch to image 3.png`
- Prompt 5 (minimalist living room interior) → `sketch to image 5.png`

**uncertainty_notes:**
- No explicit numeric link between the 5 text prompts and the 5 image files — mapping is inferred from subject matter
- Prompts 2 and 3 both relate to landscape plans; images 2 and 4 both show landscape plans — assignment of which image goes to which prompt is uncertain
- Image 1 shows a ChatGPT column alongside Nano Banana, making it a 3-way comparison — unique among the images
- Prompt 5 uses "Wood slat ceiling ceiling" — a repeated word visible in the source; preserved verbatim as written

---

## Record Group 2

**source_text_filename:** `Retexture prompt.txt`

**matched_image_filenames:**
- `retexture.png`

**visible_topic_title:** `null` — no heading visible in the image

---

### Extracted prompt (verbatim from text file)

**Prompt (verbatim):**
> Prompt: Replace the building facade in the original photo with the facade texture shown in image 2. Maintain the same perspective and lighting. Match the new texture naturally onto the building, ensuring it blends realistically with the structure, shadows, and surrounding context.

**prompt_text_complete_or_partial:** Complete — the full text is a single short paragraph. No truncation markers.

---

### What the matched image shows

| Image | Visible labels | What is shown |
|---|---|---|
| `retexture.png` | null | Two images side by side: (left) a large modern institutional building with a white/grey perforated metal mesh facade, urban street setting with pedestrians; (right) a close-up detail shot of a terracotta-colored vertical fin/louver facade panel system |

---

**Do the images and text clearly belong together:** Yes — the prompt describes replacing one facade texture with another, and the image shows two different facade types that could serve as source and target. The left image appears to be the building to retexture; the right image appears to be the reference texture ("image 2" in the prompt).

**uncertainty_notes:**
- The prompt references "image 2" internally, implying it was originally presented alongside two images. Only one image file (`retexture.png`) exists, but it contains both images in a side-by-side layout — consistent with the prompt's intent.
- The text file includes the word "Prompt:" as a label prefix — this is a UI label, not part of the prompt itself. The actual prompt text begins at "Replace the building facade..."
- No before/after output image is present — only the two reference images (source building + target texture). There is no generated result image in this record.

---

## Record Group 3

**source_text_filename:** `Photo to 3D Building Model prompt.txt`

**matched_image_filenames:**
- `Photo to 3D Building Model.png`

**visible_topic_title:** `null` — no heading visible in the image

---

### Extracted content (verbatim from text file)

The file contains **two distinct sections**: a prompt and an external tool reference.

**Prompt (verbatim):**
> Based on this architectural photograph, generate a high-fidelity 3D building model in the style of "3d print building model." Key Requirements: Aim for a realistic look, preserving the main structure and texture details of the building, but stylized for a game. Emphasize realistic lighting and shadow effects. Use a 45-degree top-down perspective to showcase the building's three-dimensionality. Materials should be clearly defined, such as reflective glass and metallic surfaces. It should look like a high-quality 3D render suitable for a game engine. White background.

**External tool reference (verbatim):**
> Generate a downloadable 3D model from an image using an image-to-3D website:
>
> https://gen.hexa3d.io/
>
> https://www.meshy.ai/

**prompt_text_complete_or_partial:** Complete — the prompt block appears fully readable. The external tool reference is also complete.

**Note on text file structure:** This file contains two distinct types of content — (1) an AI image prompt for Nano Banana, and (2) references to external third-party tools for generating actual downloadable 3D models. These should be treated as separate data entries during normalization.

---

### What the matched image shows

| Image | Visible labels | What is shown |
|---|---|---|
| `Photo to 3D Building Model.png` | null | Two images side by side: (left) a real photograph of a multi-storey curved European-style building with brick facade and ornate balconies, street-level urban context; (right) a rendered 3D isometric model of the same building, isolated on a white background, showing the building's three-dimensional form with preserved facade detail |

---

**Do the images and text clearly belong together:** Yes — the prompt describes converting a photo of a building into a 3D model on a white background with a top-down perspective, and the image shows exactly that: a real photo on the left and a 3D isometric model on a white background on the right.

**uncertainty_notes:**
- The text file has a typographic error: "inthe" (missing space) and "thebuilding" (missing space) — preserved verbatim as written
- The file contains two fundamentally different content types (an AI prompt vs. external tool links). During normalization, the tool links should be recorded separately — possibly as a `workflow_notes` or `related_tools` field rather than as prompt text.
- No "before/after" in the AI-generation sense — the right image appears to be the Nano Banana output, but this is inferred from context, not labeled.

---

## Cross-record observations

Raw pattern observations only — interpretation belongs in the normalized layer.

- All three text files contain complete, fully readable prompt text — no truncation at source level.
- All three image files show before/after or reference pairs without labels identifying which is input and which is output. Relationship is inferred from visual logic.
- The `retexture.png` and `Photo to 3D Building Model.png` images contain no "Nano Banana" label — unlike the `sketch to image` images which do label the output column. This is a naming/labeling inconsistency across the source material.
- The `Photo to 3D Building Model prompt.txt` file mixes prompt content with external tool URLs — the only source file in this trial to contain non-prompt content. This pattern may recur in other text files.
- All three prompts are in English.
- All three prompts begin with an action verb ("Based on", "Replace", "Based on") — consistent with the NanoBanana prompt style observed in batch-01.
