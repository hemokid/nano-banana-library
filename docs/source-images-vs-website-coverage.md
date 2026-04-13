# Source Images vs. Website Coverage

Comparison of content covered by website-derived records against the source/images screenshot pool.
Date: 2026-04-09
Basis: `data/raw/batch-01-image-records.md` (first 15 of 71 images), `data/normalized/website-trial-paired-records.md`, `data/raw/website-batch-all-split-records.md`, `docs/source-inventory.md`, `docs/website-source-inventory.md`

**Important caveat:** Only the first 15 of 71 source images have been analyzed. The remaining 56 images (timestamps 12:42–12:57) are entirely unknown. All conclusions about source/images are provisional and based on a 21% sample.

---

## 1. What the website-derived records already cover

The 14 text files and 29 split records from `source/website_text/` cover the following transformation types:

**Sketch / drawing → render:**
- Architectural sketch → photorealistic 3D render (building exterior)
- Hand-drawn house sketch → photorealistic exterior render
- SketchUp model → photorealistic render (urban and landscape)

**Plan → 3D visualization:**
- Landscape plan → bird's-eye aerial rendering
- 2D architectural plan → 3D isometric diagram (multiple variants: clean diagrammatic, realistic textured, program-coded)
- Landscape section drawing → 3D isometric diagram
- Floor plan → interior perspective rendering

**Photo / rendering → technical drawing:**
- Building photo → elevation drawing (minimal, detailed, full construction document)
- Hand-drawn landscape plan → clean CAD linework
- Building photo → 3D building model (game-engine style)

**Photo / rendering → transformed rendering:**
- Architectural scene → seasonal/atmospheric change (winter, autumn)
- Rendering → new camera angle / view
- Building photo → facade retexture (material replacement)
- Interior photo → day-to-night transformation [partially — this appears in both sources]
- Interior photo → photorealistic render upgrade

**Multi-source composition:**
- Multiple reference images → composed interior rendering

**2D map / satellite:**
- Satellite/aerial photo → stylized urban outline map

**Illustration / graphic output:**
- Rendering → architectural line-drawing illustration (competition style)
- Image → design presentation board / mood board
- Image → architectural concept sheet with layout

**Total: approximately 14 distinct transformation workflows, 29 individual prompt records**

---

## 2. What source/images appears to contain beyond the website records

Based on the first 15 images analyzed, source/images contains at minimum two content categories not present in the website text files:

**Series A — Indonesian lifestyle addition prompts (Records 01–05):**
These are a distinct prompt category not covered by any website text file. The workflow is: take a reference photograph of a real building and add a lifestyle scene with people and activity. Examples observed:
- Balcony conversation (two people, evening)
- Children playing in garden
- Car wash scene (morning)
- Children playing in carport
- Rainy night arrival with car

This category has no equivalent in the website text files. It appears to be a separate module — likely "Post-processing / Results usage" or an "Lifestyle rendering" category.

**The numbered English series (Records 06–10) — partial overlap:**
Some prompts in this series (day-to-night, image to design board, image to render, CAD plan to render, image to concept sheet) have close parallels in the website text, but not all are exact matches. Notably, the source/images series is numbered and appears to be a curated teaching sequence, while the website text files are individual standalone prompts.

**Unknown content in the remaining 56 images:**
The 56 unanalyzed screenshots span a 28-minute capture window (12:42–12:57 vs. 12:39–12:41 for records 1–15). Given the density of prompts in the first 15 images, the remaining screenshots likely contain several additional complete series — potentially covering categories not yet seen at all, such as:
- Urban Planning
- Landscape-specific workflows
- 3D / Sections
- Illustrations
- Plans
- Other tools and workflows

These are the core categories defined in CLAUDE.md, and none have been confirmed as fully covered yet by either source.

---

## 3. Themes duplicated across both sources

The following transformation types appear in both the website text files and the source/images screenshots (with some variation in framing):

| Transformation type | Website text files | Source/images (batch-01) |
|---|---|---|
| Sketch → photorealistic exterior render | `sketch to image prompts.txt` prompts 1, 4 | Records 11–13, 15 |
| Interior rendering / enhancement | `sketch to image prompts.txt` prompt 5 | Records 06, 08, 14 |
| Image → design/presentation board | `website batch` (image into design board) | Record 07 |
| CAD/plan → rendered plan | `sketch to image prompts.txt` prompt 3 | Record 09 |
| Landscape plan → 3D isometric | `PhotoPlan to Isometric Diagram.txt` prompts 3, 4 | Record 09 (adjacent) |
| Day-to-night transformation | `Change Season or Atmosphere prompt.txt` | Record 06 |

**Key observation:** The overlap is real but not exact. Website prompts are standalone and generalized; source/images prompts appear to be part of structured numbered series with specific example inputs. They are complementary framings of similar workflows rather than pure duplicates.

---

## 4. Themes unique to source/images (so far)

Based on the 15 analyzed images:

**Lifestyle addition / people-in-scene prompts (Series A, Records 01–05):**
Adding human activity to architectural reference photos — a distinct workflow with no counterpart in the website text files. Prompts are in Indonesian. This may represent a separate course module aimed at a different audience or use case.

**Multi-model comparison (image 1, sketch to image group):**
The source/images screenshot shows a side-by-side comparison between Nano Banana and ChatGPT outputs. No website text file presents this comparative framing.

**Structured teaching sequences:**
The source/images prompts are organized in numbered series (1–5, then a second series beginning again at 1). This pedagogical sequencing is not present in the website text files, which are standalone records.

**Unknown content in images 16–71:**
Given that the analysis covers only 21% of the image pool, it is highly likely that unique content exists in the remaining screenshots — including entire categories not yet observed.

---

## 5. Recommendation: ingestion priority

### Recommended approach: **continue website normalization first, then return to source/images**

**Rationale:**

**Website text files are structurally complete and high quality.** All 14 files have been read, all 29 prompts extracted, and 13 of them are already paired with images. The remaining pairing work (11 more text topics, ~16 unpaired records) is well-defined and can be completed quickly with high confidence. The website source also provides clean, machine-readable English-language prompt text with no OCR or legibility issues.

**Source/images require more effort per record.** Prompt text is embedded in screenshots at compressed resolution, requires visual reading, is partially legible, and in some cases is in Indonesian. Extracting full verbatim prompt text from the remaining 56 images is labor-intensive and will produce more partial/uncertain records.

**The lifestyle series (Series A) has no text source.** The 5 Indonesian-language lifestyle prompts from source/images have no text file equivalent — they can only be extracted from the screenshots. However, because the prompt text is partially legible at screenshot resolution, obtaining the full text may require either a higher-resolution source or manual transcription. These records should be flagged as incomplete until full text is available.

**Proposed order:**
1. Complete website pairing for all remaining 11 topics → produces ~16 more normalized records
2. Expand website records to include all CLAUDE.md data model fields (category, tags, summary, use_case, etc.)
3. Analyze source/images batches 02–05 (images 16–71) to discover remaining categories
4. Merge and deduplicate across both sources in the curated layer

This order maximizes the quality and completeness of early normalized records while keeping the harder extraction work (screenshot OCR, Indonesian prompts) for a later, dedicated phase.
