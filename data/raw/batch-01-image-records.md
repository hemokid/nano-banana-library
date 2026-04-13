# Batch 01 — Raw Image Records

Analyzed per rules in `docs/image-analysis-rules.md`.
Template: `docs/raw-image-record-template.md`
Date of analysis: 2026-04-08
Analyst: Claude (automated visual read)
Files analyzed: 15 (screenshots 1–15 in chronological filename order)

---

## Record 01

**source_filename:**
`צילום מסך 2026-04-08 123908.png`

**visible_title:**
`1. Percakapan di Balkon`

**visible_subtitle:**
`Warm Balcony Conversation`

**visible_prompt_text:**
> Foto zoom ke area balkon untuk lokasi maya, shooting dari arah kiri dengan latar belakang bangunan pada sisi kanan setelah di-upscale dengan resolusi tinggi: Architectural lifestyle photography dengan visual Beton elegan dan bata merah sebagai latar belakang. Dua orang tengah melakukan percakapan santai di balkon mewah, berpakaian kasual kontemporer yang mencerminkan gaya hidup modern dan nyaman. Lampu hias dan pot bunga tersusun rapi, pencahayaan senja yang hangat [partial] ...Fotografi arsitektur autentik, warna natural, cinematic look, high detail [partial]

**visible_labels:**
`Input, Output, Prompt`

**visible_input_description:**
`Reference photograph of a residential building exterior, modern style, daytime`

**visible_output_description:**
`Generated image showing two people having a conversation on a balcony, warm evening/sunset lighting, elegant architectural backdrop`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — first record in batch, no prior observed prompts to compare`

**language_detected:**
`Indonesian`

---

**uncertainty_notes:**
- Prompt text is cut off at the bottom; full text not readable
- Watermark on output image partially legible — appears to be `@nazilobauthor` [partial]
- No category label is visible in the UI

**analyst_notes:**
`Card layout: numbered title at top, English subtitle, Input image left, Output image right, Prompt text block at bottom. This layout is consistent across the first 5 records in this batch.`

---

## Record 02

**source_filename:**
`צילום מסך 2026-04-08 123940.png`

**visible_title:**
`2. Anak Bermain di Taman`

**visible_subtitle:**
`Playing Garden Moments`

**visible_prompt_text:**
> [Indonesian text — partially legible at this resolution] Foto zoom ke area taman... Architectural lifestyle photography... anak-anak bermain di taman dengan suasana cerah... [partial] ...cinematic look, high detail [partial]

**visible_labels:**
`Input, Output, Prompt`

**visible_input_description:**
`Reference photograph of a residential exterior with a garden/yard area, daytime`

**visible_output_description:**
`Generated image of children playing in a lush garden/yard with natural daylight and greenery`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Record 04 (also children playing, different setting). Flag for normalization review.`

**language_detected:**
`Indonesian`

---

**uncertainty_notes:**
- Prompt text is partially legible only; verbatim full text not readable at screenshot resolution
- Category not labeled in the UI

**analyst_notes:**
`Same card layout as Record 01. Numbered sequence continues.`

---

## Record 03

**source_filename:**
`צילום מסך 2026-04-08 124004.png`

**visible_title:**
`3. Mencuci Mobil`

**visible_subtitle:**
`Morning Car Wash Ritual`

**visible_prompt_text:**
> [Indonesian text — partially legible] Foto zoom ke area carport... Architectural lifestyle photography... seseorang sedang mencuci mobil di depan rumah... [partial] ...cinematic look, high detail [partial]

**visible_labels:**
`Input, Output, Prompt`

**visible_input_description:**
`Reference photograph of a residential property with a car visible in the foreground, daytime`

**visible_output_description:**
`Generated image of a person washing a car in front of a house in morning light`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — distinct scene (car wash), no close match to other records observed`

**language_detected:**
`Indonesian`

---

**uncertainty_notes:**
- Prompt text partially legible only
- Category not labeled in the UI

**analyst_notes:**
`Same card layout. Numbered sequence continues.`

---

## Record 04

**source_filename:**
`צילום מסך 2026-04-08 124012.png`

**visible_title:**
`4. Bermain di Carport`

**visible_subtitle:**
`AKI Carport Playground`

**visible_prompt_text:**
> [Indonesian text — partially legible] Foto zoom ke area carport... Architectural lifestyle photography... anak-anak bermain di area carport... [partial] ...cinematic look, high detail [partial]

**visible_labels:**
`Input, Output, Prompt`

**visible_input_description:**
`Reference photograph of a residential building with a covered carport area, daytime`

**visible_output_description:**
`Generated image of children playing in the carport area with natural lighting`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Record 02 (also children playing, garden setting vs. carport). Flag for normalization review.`

**language_detected:**
`Indonesian`

---

**uncertainty_notes:**
- Prompt text partially legible only
- Category not labeled in the UI
- Variant relationship with Record 02 is inferred, not confirmed from visible text

**analyst_notes:**
`Same card layout. Numbered sequence continues.`

---

## Record 05

**source_filename:**
`צילום מסך 2026-04-08 124036.png`

**visible_title:**
`5. Hujan deras`

**visible_subtitle:**
`Rainy Night Arrival`

**visible_prompt_text:**
> [Indonesian text — partially legible] Foto zoom ke area depan rumah... Architectural lifestyle photography... malam hari dengan hujan deras... mobil tiba di depan rumah... [partial] ...cinematic look, high detail [partial]

**visible_labels:**
`Input, Output, Prompt`

**visible_input_description:**
`Reference photograph of a residential building exterior in daytime`

**visible_output_description:**
`Generated image of the same building at night in heavy rain, car arriving with headlights on, dramatic and moody atmospheric lighting`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — mood/atmosphere (night, rain) is distinct from all other records in this batch`

**language_detected:**
`Indonesian`

---

**uncertainty_notes:**
- Prompt text partially legible only
- Category not labeled in the UI

**analyst_notes:**
`Same card layout as Records 01–04. This is the last record in what appears to be the first numbered series (1–5). Records 06 onward show a different layout format.`

---

## Record 06

**source_filename:**
`צילום מסך 2026-04-08 124101.png`

**visible_title:**
`1. Day to Night View Transformation`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Convert this interior daytime image into a realistic night view. Reduce natural daylight, introduce warm artificial lighting (ceiling lights, wall lights, lamps, and soft glow and reflections), enhance shadows and depth, and maintain realistic materials and textures for a cozy, photorealistic night interior. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`Interior photograph of a living room, bright daytime natural lighting, contemporary furniture`

**visible_output_description:**
`The same living room transformed to a night scene with warm artificial lighting, lamps on, softer shadows`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — first record in a new numbered series starting at 1. Different series from Records 01–05.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- Prompt text may be partially cut off at the bottom
- No "Input" / "Output" labels visible in this layout — images are shown with an arrow between them, not labeled panels
- Layout format is different from Records 01–05: no numbered card with subtitle, no explicit Input/Output labels; arrow graphic used to indicate before→after direction

**analyst_notes:**
`This screenshot begins a new section. The layout changes: before/after images shown with a curved arrow between them (not labeled Input/Output), and the prompt text is below in smaller font. The numbered title restarts at 1. This may represent a different course section or category. Language switches to English.`

---

## Record 07

**source_filename:**
`צילום מסך 2026-04-08 124110.png`

**visible_title:**
`2. Image into Design Board`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Transform this interior into a professional architectural presentation sheet with an organized layout. Include the main image, supporting views from different angles and dimensions, and a material palette. Use a clean internal layout, soft neutral tones, warm natural lighting, textured walls, wood beams, and refined touch-drawn or digital illustrative style. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`Interior photograph of a room with an arched fireplace, exposed ceiling beams, and contemporary furnishings`

**visible_output_description:**
`A design presentation/mood board layout containing the room image alongside architectural drawings, elevations, floor plan sketches, and material swatches`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — output type (design board) is distinct from other records`

**language_detected:**
`English`

---

**uncertainty_notes:**
- Prompt text may be partially cut off
- No Input/Output labels visible — arrow-based layout as in Record 06

**analyst_notes:**
`Same new layout format as Record 06. Sequence continues at 2.`

---

## Record 08

**source_filename:**
`צילום מסך 2026-04-08 124120.png`

**visible_title:**
`3. Image to realistic render`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Convert this raw image into a photorealistic render. Enhance materials, textures, and lighting with natural colors, realistic shadows, global illumination, and depth. Add balanced surfaces, natural and accent lighting, refine wall textures, ceiling details, and surfaces for a fully polished architectural visualization. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`Interior photograph of a dining room with blue accent chairs, pendant lighting, and a chandelier — appears to be an existing photo used as input`

**visible_output_description:**
`The same dining room transformed into a higher-quality photorealistic render with enhanced lighting, richer materials, and more refined detail`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Record 06 (both transform existing images into better-quality outputs). Different output type — Record 06 is day-to-night, this is realism enhancement. Flag for normalization review.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- Prompt text may be partially cut off
- No Input/Output labels visible — arrow-based layout

**analyst_notes:**
`Same new layout format. Sequence continues at 3.`

---

## Record 09

**source_filename:**
`צילום מסך 2026-04-08 124128.png`

**visible_title:**
`4. CAD plan to Render plan`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Convert this CAD landscape plan into a photorealistic rendered plan. Add realistic textures for grass, paving, water, and planting. Include trees, shrubs, and shadows, enhance depth and lighting with natural sunlight, and maintain the original layout while creating a sharp, high-quality landscape visualization. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`A technical CAD/line-drawing landscape plan showing paths, planting areas, a circular feature, and vegetation outlines`

**visible_output_description:**
`The same landscape plan rendered with realistic textures, greens, water, shadows, and natural materials — a photorealistic top-down plan view`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — CAD-to-render of a landscape plan is a distinct workflow from other records`

**language_detected:**
`English`

---

**uncertainty_notes:**
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout

**analyst_notes:**
`Same layout format. Sequence continues at 4. Subject shifts to landscape/site plan — first landscape-related prompt observed in this batch.`

---

## Record 10

**source_filename:**
`צילום מסך 2026-04-08 124137.png`

**visible_title:**
`5. Image into Architectural concept sheet`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Create a clean, minimal architectural concept sheet using the provided image as the main visual. Include the render as the main visual, a design brief text area, hierarchy with simple headers and body text, a professional palette, material swatches, and simple icons or diagrams if needed. Keep it professional, minimal, and simple in a professional layout style. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`A photorealistic render of a sculptural/parametric building facade with a modern urban backdrop`

**visible_output_description:**
`A formatted architectural concept/presentation sheet containing the building render, text panels, material palette swatches, and diagrams`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Record 07 (both transform an image into a presentation/design board layout). Different input type — Record 07 uses an interior photo; this uses a 3D render. Flag for normalization review.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout

**analyst_notes:**
`Same layout format. Sequence ends at 5 — matches the pattern of Records 01–05 (series of 5). Records 11 onward may begin another sub-series or section.`

---

## Record 11

**source_filename:**
`צילום מסך 2026-04-08 124152.png`

**visible_title:**
`null`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Transform the sketch into an iconic and imposing photorealistic tower, with a high-end glass facade, lush vertical greenery, dramatic, sunset lighting, and a strong urban-scale presence, maintaining the composition. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`A sketch or architectural concept image of a tall residential/commercial tower with vegetation`

**visible_output_description:**
`A photorealistic render of the same tower with a glass facade, vertical greenery, and dramatic sunset lighting in an urban context`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Records 12, 13, 15 — all appear to transform a sketch/reference into a photorealistic exterior render. Flag for normalization review.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- No numbered title visible in the UI — unclear if this is part of a numbered series or a standalone card
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout; arrow is a curved graphic at the top of the card

**analyst_notes:**
`Layout format again slightly different: no visible numbered title in the header area. The before/after images are shown with a curved arrow at the top. This format may indicate a different page or section of the portal. Subject is a high-rise tower.`

---

## Record 12

**source_filename:**
`צילום מסך 2026-04-08 124158.png`

**visible_title:**
`null`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Transform the sketch into a high-end modern photorealistic house, with clean concrete volumes, large glass surfaces, refined tropical landscaping, and late afternoon lighting, maintaining the composition. 4:5 format. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`A reference or sketch image of a low-rise modern house with clean geometric volumes, flat roof, and garden`

**visible_output_description:**
`A photorealistic render of the same house with concrete surfaces, large glass windows, tropical landscaping, and warm afternoon lighting`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Records 11, 13, 15 — all transform a sketch/reference into a photorealistic exterior render. Same prompt structure. Flag for normalization review.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- No numbered title visible
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout

**analyst_notes:**
`Same untitled card format as Record 11. Subject is a low-rise residential house. Prompt mentions "4:5 format" — first mention of an output aspect ratio.`

---

## Record 13

**source_filename:**
`צילום מסך 2026-04-08 124206.png`

**visible_title:**
`null`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Transform the sketch into a contemporary tropical photorealistic house, with a glass facade, wooden brise-soleil, abundant vegetation, and soft natural lighting, maintaining double-height integration with the garden and pool. 4:5 format. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`A reference or sketch image of a tropical villa/house with visible pool and garden area`

**visible_output_description:**
`A photorealistic render of the same house with glass facade, timber screening elements, tropical vegetation, pool, and soft natural lighting`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Records 11, 12, 15 — all transform a reference into a photorealistic exterior render. Shares "4:5 format" mention with Record 12. Flag for normalization review.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- No numbered title visible
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout

**analyst_notes:**
`Same format. Tropical residential subject with pool. Mentions brise-soleil — a specific architectural element.`

---

## Record 14

**source_filename:**
`צילום מסך 2026-04-08 124213.png`

**visible_title:**
`null`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Transform the interior into a photorealistic living room with golden hour lighting, featuring warm sunlight entering through the windows, natural materials, and a sophisticated atmosphere, maintaining the double-height ceiling. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`Reference or sketch image of a double-height interior living room space`

**visible_output_description:**
`Photorealistic render of the same interior with golden hour sunlight streaming through large windows, warm materials, and sophisticated lighting`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`null — interior subject is distinct from Records 11–13 and 15 which are all exterior renders`

**language_detected:**
`English`

---

**uncertainty_notes:**
- No numbered title visible
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout

**analyst_notes:**
`Same untitled format. Subject shifts to interior — double-height living room. First interior render in Records 11–15 sub-group.`

---

## Record 15

**source_filename:**
`צילום מסך 2026-04-08 124221.png`

**visible_title:**
`null`

**visible_subtitle:**
`null`

**visible_prompt_text:**
> Transform the sketch into a modern photorealistic house with a pool, featuring golden hour lighting, soft shadows, realistic vegetation, and natural water reflections, maintaining the same composition. 4:5 format. [partial — may be cut off]

**visible_labels:**
`Prompt`

**visible_input_description:**
`Reference or sketch image of a house with a pool and garden, in a lush green setting`

**visible_output_description:**
`Photorealistic render of the same house and pool with golden hour lighting, water reflections, realistic vegetation, and warm shadows`

---

**contains_prompt:** `yes`

**contains_before_after_example:** `yes`

**contains_workflow_explanation:** `no`

---

**category_clue:**
`null`

**subcategory_clue:**
`null`

**possible_variant_group:**
`Possible relation to Records 11, 12, 13 — all transform a reference into a photorealistic exterior render. Shares "4:5 format" mention with Records 12 and 13. Pool subject may also relate to Record 13. Flag for normalization review.`

**language_detected:**
`English`

---

**uncertainty_notes:**
- No numbered title visible
- Prompt text may be partially cut off
- No Input/Output labels — arrow-based layout

**analyst_notes:**
`Same untitled format. Exterior house with pool. Third prompt mentioning "4:5 format" (Records 12, 13, 15). Confirms this is a recurring convention in this sub-group.`

---

## Cross-batch observations

Raw pattern observations only — interpretation belongs in the normalized layer.

**Two distinct card formats observed:**

| Format | Records | Layout | Language | Numbered title |
|---|---|---|---|---|
| A — Indonesian lifestyle series | 01–05 | Input/Output/Prompt panels | Indonesian | Yes (1–5) |
| B — English transformation series | 06–15 | Before→arrow→After, Prompt below | English | Partial (06–10 numbered 1–5, 11–15 untitled) |

**Recurring patterns in Format B (Records 06–15):**
- All prompts follow the structure: "Transform/Convert [input] into [output style], [specific qualities], maintaining [composition constraint]"
- Records 12, 13, 15 all specify "4:5 format" as an output constraint
- Records 11–15 have no visible numbered title — may be a different page/section of the portal
- Records 06–10 appear to form a complete numbered series (1–5)

**Possible variant groups for normalization review:**
- Records 02 + 04: children playing in different outdoor settings
- Records 07 + 10: image-to-presentation-board (different input types)
- Records 06 + 08: image-to-enhanced-render (day-to-night vs. realism boost)
- Records 11 + 12 + 13 + 15: sketch-to-photorealistic-exterior-render (same prompt structure, different buildings)

**No category labels visible in any of the 15 screenshots.** Category assignment will require inference during normalization.
