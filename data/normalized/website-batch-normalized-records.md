# Website Batch — All Normalized Records

Sources: `data/raw/website-batch-all-split-records.md` + `source/website_images/`
Date: 2026-04-10
Total normalized records: 29

---

## Batch header

**Total normalized records created:** 29

**Records without matched images (2):**
- `NB-WEB-change-view-01` (`Change Rendering View.txt`) — no image file in source/website_images
- `NB-WEB-render-to-illustration-01` (`Rendering to Illustration.txt`) — no image file in source/website_images

**Records with low-confidence image matching (3):**
- `NB-WEB-plan-birdeye-01` and `NB-WEB-plan-birdeye-02` — both shown in the same image (`From Plan to Bird's-eye and Perspective.png`); matching is clear but one image covers two prompts
- `NB-WEB-photo-elevation-01` — 6-word minimal prompt matched by process of elimination to the general overview image

**Orphan images (not matched to any text record) (1):**
- `From Plan to Bird's-eye and Perspective 5.png` — shows a floor plan → 3D isometric apartment view; no corresponding prompt 5 exists in the text file. Likely belongs to an unlisted additional prompt.

**Records where category/subcategory was inferred (all 29):**
No UI category labels are present in any image or text file. All category and subcategory assignments are inferred from the transformation type and subject matter, per CLAUDE.md core category definitions. Every record is flagged accordingly.

---

## Records

---

### NB-WEB-change-view-01

**normalized_id:** `NB-WEB-change-view-01`
**source_filename:** `Change Rendering View.txt`
**raw_id:** `change-rendering-view--01`

**title:** Change Rendering View

**category:** Renderings `[inferred]`
**subcategory:** View / Camera Angle `[inferred]`

**tags:** view change, camera angle, perspective, rendering, consistency, materials, lighting

**original_prompt:**
> Change the angle of view of this architectural rendering. Generate a new perspective from [desired angle], keeping the original materials, lighting, and style consistent. Maintain correct proportions and architectural detailing. The scene should feel cohesive and realistic, with shadows, textures, and environment matching the new camera angle.

**cleaned_prompt:**
> Change the angle of view of this architectural rendering. Generate a new perspective from [desired angle], keeping the original materials, lighting, and style consistent. Maintain correct proportions and architectural detailing. The scene should feel cohesive and realistic, with shadows, textures, and environment matching the new camera angle.

**short_summary:** Regenerate an existing architectural rendering from a new camera angle while preserving all materials, lighting, and style.

**use_case:** Producing multiple viewpoints of a rendering without re-rendering from scratch; exploring the same design from street level, aerial, or oblique angles.

**recommended_output_type:** Architectural rendering (same style as input, new viewpoint)

**matched_image_filenames:** none

**match_confidence:** none — no image file found in source/website_images

**notes:**
- Contains a fill-in parameter token `[desired angle]` with five defined options: Eye-level / street view; Bird's-eye / aerial; Oblique / 45-degree; Front elevation / side view / corner perspective; Specific direction (e.g. "from southwest corner facing northeast")
- This is a template prompt — the token must be replaced before use

**uncertainty_notes:**
- No image example available — output style unknown
- Category assigned as Renderings because input and output are both renderings; could also fit Post-processing

---

### NB-WEB-change-season-01

**normalized_id:** `NB-WEB-change-season-01`
**source_filename:** `Change Season or Atmosphere prompt.txt`
**raw_id:** `change-season-or-atmosphere-prompt--01`

**title:** Change Season — Winter

**category:** Post-processing / Results usage `[inferred]`
**subcategory:** Season / Atmosphere Change `[inferred]`

**tags:** winter, snow, season change, atmosphere, interior lighting, exterior, mood

**original_prompt:**
> Transform this architectural scene into a cozy winter setting. Cover the ground, roof, and trees with a layer of snow. Add soft falling snowflakes in the atmosphere. Turn on the interior lights and give them a warm, golden glow to create a strong contrast between the cold, snowy exterior and the inviting warmth inside. Use soft winter daylight with a slightly overcast sky, visible breath-like mist, and subtle shadows. The final image should feel serene, atmospheric, and visually balanced between cold and warmth.

**cleaned_prompt:**
> Transform this architectural scene into a cozy winter setting. Cover the ground, roof, and trees with a layer of snow. Add soft falling snowflakes in the atmosphere. Turn on the interior lights and give them a warm, golden glow to create a strong contrast between the cold, snowy exterior and the inviting warmth inside. Use soft winter daylight with a slightly overcast sky, visible breath-like mist, and subtle shadows. The final image should feel serene, atmospheric, and visually balanced between cold and warmth.

**short_summary:** Transform any architectural exterior rendering into a winter scene with snow, falling snowflakes, overcast sky, and warm glowing interior lights.

**use_case:** Showing a project in winter conditions; creating seasonal marketing visuals; demonstrating the building's warmth and character in cold weather.

**recommended_output_type:** Exterior architectural rendering (winter atmosphere)

**matched_image_filenames:** `Change Season or Atmosphere.png`

**match_confidence:** high — image shows three versions of the same modern residential complex: original (green/neutral), winter (snow-covered, white trees, overcast), and autumn (orange/red foliage). The winter version (center) clearly corresponds to this prompt.

**notes:** The image also shows the autumn result, which corresponds to prompt 2 (NB-WEB-change-season-02). Both prompts share the same example image.

**uncertainty_notes:** null

---

### NB-WEB-change-season-02

**normalized_id:** `NB-WEB-change-season-02`
**source_filename:** `Change Season or Atmosphere prompt.txt`
**raw_id:** `change-season-or-atmosphere-prompt--02`

**title:** Change Season — Autumn

**category:** Post-processing / Results usage `[inferred]`
**subcategory:** Season / Atmosphere Change `[inferred]`

**tags:** autumn, season change, foliage, atmosphere, minimal prompt

**original_prompt:**
> To autumn

**cleaned_prompt:**
> Transform this architectural scene to an autumn setting.

**short_summary:** Minimal prompt to convert an architectural scene to an autumn season atmosphere with orange and red foliage.

**use_case:** Quick season swap to autumn; intended as a short follow-up or variant of the winter prompt.

**recommended_output_type:** Exterior architectural rendering (autumn atmosphere)

**matched_image_filenames:** `Change Season or Atmosphere.png`

**match_confidence:** medium — the rightmost panel in the image shows the same building in an autumn setting (orange/red leaves on trees), which is consistent with the "To autumn" instruction.

**notes:**
- Original prompt is "To autumn" — two words only. This is anomalously short.
- The `source_notes` list in the raw record (snow, frosted glass, warm lights, etc.) refers to winter elements — it logically belongs with prompt 1, not this prompt.
- Cleaned prompt expands "To autumn" to a complete sentence for usability. Original is preserved above.

**uncertainty_notes:**
- The brevity of the prompt is unresolved. It may be a context-dependent follow-up (sent after prompt 1 in a chat session) or a minimal standalone variant. Use with caution as a standalone prompt — results may vary.
- "To autumn" may not produce reliable results without prior context.

---

### NB-WEB-plan-birdeye-01

**normalized_id:** `NB-WEB-plan-birdeye-01`
**source_filename:** `From Plan to Bird's-eye and Perspective prompt.txt`
**raw_id:** `from-plan-to-birds-eye-and-perspective-prompt--01`

**title:** Plan to Bird's-Eye Rendering — Barcelona Residential

**category:** 3D `[inferred]`
**subcategory:** Bird's-Eye / Aerial Rendering `[inferred]`

**tags:** bird's-eye, aerial view, residential, urban design, Barcelona, Mediterranean, landscape plan, 3D render

**original_prompt:**
> Turn this landscape plan for a residential community in Barcelona into a 3D bird's-eye view architectural rendering. Emphasize the aerial perspective with realistic depth, scale, and spatial hierarchy. The buildings feature red tile roofs typical of Barcelona architecture. Surround the site with detailed urban context—gridded streets, mid-rise Mediterranean-style buildings, and plazas. Add photorealistic textures, soft natural daylight, tree canopies, paving, and street elements. The rendering should feel like a high-resolution aerial photo but in clean 3D visualization style, suitable for urban design presentation.

**cleaned_prompt:**
> Turn this landscape plan into a 3D bird's-eye view architectural rendering. Emphasize the aerial perspective with realistic depth, scale, and spatial hierarchy. Surround the site with detailed urban context — gridded streets, mid-rise buildings, and plazas. Add photorealistic textures, soft natural daylight, tree canopies, paving, and street elements. The rendering should feel like a high-resolution aerial photo in clean 3D visualization style, suitable for urban design presentation.

**short_summary:** Convert a site or landscape plan into a photorealistic 3D bird's-eye view rendering with surrounding urban context.

**use_case:** Urban design presentations; communicating masterplan proposals from above; showing spatial hierarchy and public realm at city scale.

**recommended_output_type:** 3D aerial rendering (bird's-eye, photorealistic)

**matched_image_filenames:** `From Plan to Bird's-eye and Perspective.png`

**match_confidence:** high — image shows labeled "Input" (site plan), "Prompt 1" (photorealistic bird's-eye 3D render of the same block with red-tile roofs and Mediterranean urban context), and "Prompt 2" (eye-level view). Prompt 1 output is clearly visible and matches this record.

**notes:** Original prompt references Barcelona and red tile roofs specifically. Cleaned prompt removes the geographic reference to make it reusable for other sites. Original preserved above.

**uncertainty_notes:** null

---

### NB-WEB-plan-birdeye-02

**normalized_id:** `NB-WEB-plan-birdeye-02`
**source_filename:** `From Plan to Bird's-eye and Perspective prompt.txt`
**raw_id:** `from-plan-to-birds-eye-and-perspective-prompt--02`

**title:** Follow-Up — Courtyard Eye-Level Perspective

**category:** Renderings `[inferred]`
**subcategory:** Eye-Level Exterior Perspective `[inferred]`

**tags:** eye-level, courtyard, perspective view, follow-up, context-dependent, exterior

**original_prompt:**
> Good, Create a eye level perspective view from the courtyard, looking toward the building, with the landscape design area in the foreground.

**cleaned_prompt:**
> Create an eye-level perspective view from the courtyard, looking toward the building, with the landscape design area in the foreground.

**short_summary:** Generate an eye-level courtyard perspective view as a follow-up to a bird's-eye rendering, with landscape in the foreground.

**use_case:** Adding a human-scale perspective to complement a bird's-eye view; showing the same project from ground level after establishing the aerial view.

**recommended_output_type:** Eye-level exterior architectural rendering

**matched_image_filenames:** `From Plan to Bird's-eye and Perspective.png`

**match_confidence:** high — the "Prompt 2" panel in the image shows a courtyard eye-level rendering with people, landscaping in the foreground, and the building facade behind — directly matching this prompt.

**notes:**
- Original begins with "Good," — a conversational affirmation indicating this is a chat follow-up, not a standalone prompt.
- Cleaned prompt removes "Good," for standalone usability. Original preserved above.
- This prompt is context-dependent: it assumes the prior bird's-eye render (NB-WEB-plan-birdeye-01) has already been generated in the same session.

**uncertainty_notes:**
- May not produce reliable results as a standalone prompt without the prior bird's-eye context in the same chat session.

---

### NB-WEB-plan-birdeye-03

**normalized_id:** `NB-WEB-plan-birdeye-03`
**source_filename:** `From Plan to Bird's-eye and Perspective prompt.txt`
**raw_id:** `from-plan-to-birds-eye-and-perspective-prompt--03`

**title:** Floor Plan to Interior Perspective — Scandinavian Style

**category:** Renderings `[inferred]`
**subcategory:** Interior Rendering from Floor Plan `[inferred]`

**tags:** interior, floor plan, perspective, Scandinavian, IKEA, residential, apartment

**original_prompt:**
> Create a 3D interior rendering of my apartment based on the provided floor plan. Use the camera angle indicated by the red arrow for perspective. The design style should be Modern Scandinavian, featuring natural materials, clean lines, white walls, warm wood accents, and minimalist decor. Furnish the space with realistic IKEA furniture—including sofas, dining set, storage units, and lighting fixtures. Add soft textiles, cozy lighting, and green plants to complete the look. The image should be composed in 11x17 landscape ratio, with natural daylight and soft shadows to enhance realism. Maintain accurate spatial proportions from the floor plan.

**cleaned_prompt:**
> Create a 3D interior rendering of an apartment based on the provided floor plan. Use the camera angle indicated by the red arrow for perspective. The design style should be Modern Scandinavian: natural materials, clean lines, white walls, warm wood accents, and minimalist decor. Furnish the space with realistic contemporary furniture including sofas, dining set, storage units, and lighting fixtures. Add soft textiles, cozy lighting, and green plants. Compose in 11x17 landscape ratio with natural daylight and soft shadows. Maintain accurate spatial proportions from the floor plan.

**short_summary:** Generate a photorealistic Scandinavian-style interior render from a floor plan, using the red arrow to indicate the camera angle.

**use_case:** Visualizing apartment interiors from architectural floor plans; showing furnished living spaces for residential presentations or client approvals.

**recommended_output_type:** Interior architectural rendering (photorealistic, 11x17 landscape ratio)

**matched_image_filenames:** `From Plan to Bird's-eye and Perspective 3.png`

**match_confidence:** high — image shows a floor plan (left, with red arrow indicating camera direction) and a photorealistic Nano Banana interior render (right) showing a bright Scandinavian living room with white walls, wood accents, large windows, and contemporary furniture. Directly matches the prompt.

**notes:**
- This prompt is grouped under "From Plan to Bird's-eye and Perspective" in the source file, but its subject is an interior perspective — different from the exterior/aerial prompts 1 and 2. Consider recategorizing during curation.
- Cleaned prompt removes the specific brand name "IKEA" to increase generalizability; original preserved above.
- Image file is named with suffix "3" (not "2"), suggesting there were originally more images in this series on the portal.

**uncertainty_notes:**
- Mismatch between file grouping and actual content: interior perspective grouped with exterior/aerial prompts.

---

### NB-WEB-multi-elements-01

**normalized_id:** `NB-WEB-multi-elements-01`
**source_filename:** `Multi-elements to Rendering.txt`
**raw_id:** `multi-elements-to-rendering--01`

**title:** Multi-Elements to Interior Rendering

**category:** Renderings `[inferred]`
**subcategory:** Interior Composition / Staging `[inferred]`

**tags:** interior, multi-image, composition, staging, furniture, lifestyle, scale matching

**original_prompt:**
> Place all the elements from the provided images into the living room shown in the last image. Arrange them harmoniously within the space, matching lighting, perspective, and scale. Ensure each object blends naturally with the environment. The final composition should feel balanced, realistic, and aesthetically pleasing — like a professionally styled interior scene.

**cleaned_prompt:**
> Place all the elements from the provided images into the living room shown in the last image. Arrange them harmoniously within the space, matching lighting, perspective, and scale. Ensure each object blends naturally with the environment. The final composition should feel balanced, realistic, and aesthetically pleasing — like a professionally styled interior scene.

**short_summary:** Compose multiple individual objects (furniture, decor, pets) into a single living room render, matching perspective, scale, and lighting.

**use_case:** Interior design visualization; placing specific furniture pieces, decor items, or lifestyle elements into a reference room photo or render; product placement in architectural contexts.

**recommended_output_type:** Photorealistic interior composite rendering

**matched_image_filenames:** `Multi-elements to Rendering.png`

**match_confidence:** medium — the image shows five separate input elements (pendant lamp, green sofa, glass side table with plant, golden retriever dog, furnished room photo). This appears to show the input elements only, not the final composed output. The rendered result is not visible in the image.

**notes:**
- Multi-image input prompt: requires multiple reference images (individual objects) plus a base room image ("the last image").
- The matched image shows only the input elements — the composed output is not captured in the source material.
- The presence of a dog as one of the elements is notable — this prompt can handle lifestyle/pet elements, not just furniture.

**uncertainty_notes:**
- No output image available for this record — only input elements are shown.

---

### NB-WEB-photo-3d-01

**normalized_id:** `NB-WEB-photo-3d-01`
**source_filename:** `Photo to 3D Building Model prompt.txt`
**raw_id:** `photo-to-3d-building-model-prompt--01`

**title:** Photo to 3D Building Model (Game-Engine Style)

**category:** 3D `[inferred]`
**subcategory:** Photo to 3D Model `[inferred]`

**tags:** 3D model, photo to 3D, isometric, game engine, white background, 45-degree, building model

**original_prompt:**
> Based on this architectural photograph, generate a high-fidelity 3D building model inthe style of "3d print building model." Key Requirements: Aim for a realistic look, preserving the main structure and texture details of thebuilding, but stylized for a game. Emphasize realistic lighting and shadow effects. Use a 45-degree top-down perspective to showcase the building's three-dimensionality. Materials should be clearly defined, such as reflective glass and metallic surfaces. It should look like a high-quality 3D render suitable for a game engine. White background.

**cleaned_prompt:**
> Based on this architectural photograph, generate a high-fidelity 3D building model in the style of a 3D print building model. Aim for a realistic look, preserving the main structure and texture details of the building, but stylized. Emphasize realistic lighting and shadow effects. Use a 45-degree top-down perspective to showcase the building's three-dimensionality. Materials should be clearly defined — reflective glass, metallic surfaces. Present on a white background.

**short_summary:** Convert a building photograph into a stylized isometric 3D model at 45-degree angle on a white background, preserving facade detail.

**use_case:** Generating 3D model visualizations from photographs; creating stylized building models for diagrams, presentations, or game-engine-style illustrations.

**recommended_output_type:** Stylized 3D isometric building model, white background

**matched_image_filenames:** `Photo to 3D Building Model.png`

**match_confidence:** high — image shows a curved European-style brick building (left, real photograph) and an isometric 3D model of the same building on a white background (right), preserving facade detail, balconies, and the building's curved form. Directly matches the prompt.

**notes:**
- Original contains two typographic errors ("inthe", "thebuilding") — both corrected in cleaned prompt; originals preserved above.
- Source file also contains references to two external 3D conversion tools: `https://gen.hexa3d.io/` and `https://www.meshy.ai/` — these are workflow tools for exporting actual downloadable 3D models, not AI image generation. Stored as related tools, not part of this prompt.

**uncertainty_notes:** null

---

### NB-WEB-photo-elevation-01

**normalized_id:** `NB-WEB-photo-elevation-01`
**source_filename:** `Photo to Elevation (or CAD).txt`
**raw_id:** `photo-to-elevation-or-cad--01`

**title:** Generate Rear Elevation — Minimal

**category:** Plans `[inferred]`
**subcategory:** Elevation Drawing `[inferred]`

**tags:** elevation, rear elevation, CAD, minimal, technical drawing

**original_prompt:**
> Generate rear elevation of the building.

**cleaned_prompt:**
> Generate a rear elevation of the building.

**short_summary:** Minimal prompt to generate a rear elevation drawing of a building from a photograph.

**use_case:** Quick elevation generation; baseline prompt for users who want a simple elevation output without style specifications.

**recommended_output_type:** Architectural elevation drawing

**matched_image_filenames:** `Photo to Elevation (or CAD) 2.png`

**match_confidence:** low-medium — matched by process of elimination. The image shows two building examples each with a photo and a corresponding elevation drawing (stacked in two rows), suggesting a general overview rather than a specific prompt example. Prompts 2 and 3 are more confidently matched to images 1 and 3.

**notes:**
- Also accompanied by a workflow note in the source file: users can ask ChatGPT to convert the output into an SVG or DWG file for use in AutoCAD or Illustrator.
- This is the shortest prompt in the entire website dataset — 6 words. It may serve as a minimal baseline or starter prompt.

**uncertainty_notes:**
- Raw record flagged `split_uncertainty: true` — prompt may be a stub or truncated version.
- Image may be a general overview for the topic rather than a specific example of this minimal prompt.
- Elevations in the image appear to be front or side views, not rear.

---

### NB-WEB-photo-elevation-02

**normalized_id:** `NB-WEB-photo-elevation-02`
**source_filename:** `Photo to Elevation (or CAD).txt`
**raw_id:** `photo-to-elevation-or-cad--02`

**title:** Generate Rear Elevation — Detailed Technical Style

**category:** Plans `[inferred]`
**subcategory:** Elevation Drawing `[inferred]`

**tags:** elevation, rear elevation, linework, technical, white background, no entourage, architectural documentation

**original_prompt:**
> Generate a rear elevation view of the building. Use clean, precise architectural linework with no annotations, no textures, and no landscape or entourage. The drawing should show accurate proportions, windows, doors, facade elements, and structural outlines as seen from the back of the building. Present the elevation on a white background in a minimal, technical style suitable for architectural documentation or concept diagrams.

**cleaned_prompt:**
> Generate a rear elevation view of the building. Use clean, precise architectural linework with no annotations, no textures, and no landscape or entourage. The drawing should show accurate proportions, windows, doors, facade elements, and structural outlines. Present on a white background in a minimal, technical style suitable for architectural documentation or concept diagrams.

**short_summary:** Generate a clean, precise rear elevation drawing with technical linework, no entourage or annotations, on a white background.

**use_case:** Creating architectural documentation drawings; producing clean elevations for presentation boards or concept submissions.

**recommended_output_type:** Architectural elevation — clean linework, white background

**matched_image_filenames:** `Photo to Elevation (or CAD) 1.png`

**match_confidence:** medium-high — image shows a contemporary civic building photo (labeled "Rendering/Photo") and a clean precise elevation drawing (labeled "Nano Banana") with no entourage, no textures, white background. Matches the specification well.

**notes:** Strong variant pair with NB-WEB-photo-elevation-01 — same output type (rear elevation), very different level of specification. These should be grouped as variants during curation.

**uncertainty_notes:**
- Elevation direction (rear) cannot be confirmed from the image — appears to be a front or side view.

---

### NB-WEB-photo-elevation-03

**normalized_id:** `NB-WEB-photo-elevation-03`
**source_filename:** `Photo to Elevation (or CAD).txt`
**raw_id:** `photo-to-elevation-or-cad--03`

**title:** Photo to Full Construction Document Set

**category:** Plans `[inferred]`
**subcategory:** Construction Documentation `[inferred]`

**tags:** construction document, CAD, elevations, sections, floor plan, dimensions, technical, orthographic, permit drawing

**original_prompt:**
> Turn an architecture photo into a technical architectural drawing in this style. Convert the building photo into a black-and-white architectural construction drawing with orthographic projections only. Produce clean, precise CAD-style linework showing accurate sections and elevations, including walls, floors, roof structure, foundations, and openings. Use consistent line weights, dashed lines for hidden elements, and standard architectural symbols. Add dimensions, level markers, section cuts, and material callouts where appropriate. No shading, no textures, no colors, no people, no landscape. White background. The result should look like a professional construction document or permit drawing sheet, highly accurate and technical.

**cleaned_prompt:**
> Convert a building photo into a black-and-white architectural construction drawing with orthographic projections only. Produce clean, precise CAD-style linework showing accurate sections and elevations, including walls, floors, roof structure, foundations, and openings. Use consistent line weights, dashed lines for hidden elements, and standard architectural symbols. Add dimensions, level markers, section cuts, and material callouts where appropriate. No shading, no textures, no colors, no people, no landscape. White background. The result should look like a professional construction document or permit drawing sheet.

**short_summary:** Convert a building photograph into a full set of technical construction drawings — elevations, sections, and floor plan — with dimensions and standard CAD conventions.

**use_case:** Generating construction document-style drawings from photographs; producing technical architectural drawings for documentation, analysis, or competition submissions.

**recommended_output_type:** Multi-sheet construction document (elevations + sections + plan, black and white)

**matched_image_filenames:** `Photo to Elevation (or CAD) 3.png`

**match_confidence:** high — image shows a contemporary building with arched facade (left) and a set of four technical drawings on the right: front elevation, side elevation, longitudinal section, and floor plan — all with dimension lines and level markers. Directly matches the prompt's request for a full construction document set.

**notes:**
- Original begins with "Turn an architecture photo into a technical architectural drawing in this style." — the phrase "in this style" implies a reference style image should accompany the input. No style reference is described in the text file.
- Cleaned prompt removes the ambiguous "in this style" opener.

**uncertainty_notes:**
- "In this style" phrase implies a reference image that is not documented in the source text — the portal may present a style reference image alongside the prompt.

---

### NB-WEB-photoplan-isometric-01

**normalized_id:** `NB-WEB-photoplan-isometric-01`
**source_filename:** `PhotoPlan to Isometric Diagram.txt`
**raw_id:** `photoplan-to-isometric-diagram--01`

**title:** Building Photo to Clean Axonometric Diagram

**category:** 3D `[inferred]`
**subcategory:** Axonometric / Isometric Diagram `[inferred]`

**tags:** axonometric, isometric, diagram, building isolation, white background, presentation, portfolio

**original_prompt:**
> Turn this building into a clean 3D axonometric illustration. Remove all background elements—keep only the main structure of the building. Add a minimal square base underneath the building to ground the composition. Use crisp lines, soft shadows, and subtle textures to emphasize form and depth. The overall style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**cleaned_prompt:**
> Turn this building into a clean 3D axonometric illustration. Remove all background elements — keep only the main structure of the building. Add a minimal square base underneath the building to ground the composition. Use crisp lines, soft shadows, and subtle textures to emphasize form and depth. The style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**short_summary:** Extract a building from its background and render it as a clean 3D axonometric diagram on a white base, suitable for presentations.

**use_case:** Creating isolated building diagrams for portfolios and presentations; generating clean 3D views from photos without complex modeling.

**recommended_output_type:** 3D axonometric illustration, white/minimal background

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 1.png`

**match_confidence:** high — image shows a colorful modular building (labeled "Photo") and a clean isometric illustration of the same building on a white background with a square base and subtle shadows (labeled "Nano Banana").

**notes:** Variant group candidate with NB-WEB-photoplan-isometric-03 and -04 (all produce isometric/axonometric outputs from different input types).

**uncertainty_notes:** null

---

### NB-WEB-photoplan-isometric-02

**normalized_id:** `NB-WEB-photoplan-isometric-02`
**source_filename:** `PhotoPlan to Isometric Diagram.txt`
**raw_id:** `photoplan-to-isometric-diagram--02`

**title:** Axonometric Program Diagram — Color-Coded Volumes

**category:** 3D `[inferred]`
**subcategory:** Program Diagram `[inferred]`

**tags:** program diagram, axonometric, color-coded, massing, academic, competition, conceptual, voids

**original_prompt:**
> Create an axonometric architectural program diagram using color-coded 3D blocks to represent spatial functions. Divide the building volume into stacked or interlocking bars, with each bar labeled by its program (e.g., "Retail", "Office", "Hotel", "Residential"). Overlay bold transparent typography directly inside each volume. Use bright, high-contrast colors for each function type. Show a second diagram next to the first, highlighting programmatic voids such as "Garden", "Culture", and "Passage", carved out of the same volume. Maintain clean linework, minimal black outlines, no shadows, and a white background. Style it in a conceptual, academic architecture diagram format, ideal for presentations or publications.

**cleaned_prompt:**
> Create an axonometric architectural program diagram using color-coded 3D blocks to represent spatial functions. Divide the building volume into stacked or interlocking bars, with each bar labeled by its program (e.g., "Retail", "Office", "Hotel", "Residential"). Overlay bold transparent typography directly inside each volume. Use bright, high-contrast colors for each function type. Show a second diagram next to the first, highlighting programmatic voids (e.g., "Garden", "Culture", "Passage") carved out of the same volume. Clean linework, minimal black outlines, no shadows, white background. Conceptual, academic architecture diagram style.

**short_summary:** Generate a color-coded 3D axonometric program diagram showing stacked functional volumes with labels, plus a second diagram showing carved voids.

**use_case:** Architectural concept presentations; communicating program distribution in a building; academic and competition boards showing spatial organization.

**recommended_output_type:** Conceptual axonometric program diagram (color-coded, white background)

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 2.png`

**match_confidence:** high — image shows a glass office tower (left) and an exploded/layered axonometric diagram with bright color-coded horizontal bands (right). The color-coded stacked volume structure directly matches the prompt.

**notes:** Image shows one diagram; the prompt requests two (solid + void version). The void diagram may not have been captured in the example image.

**uncertainty_notes:**
- The label overlay requirement is not clearly visible in the image.
- Only one diagram visible; prompt requests two.

---

### NB-WEB-photoplan-isometric-03

**normalized_id:** `NB-WEB-photoplan-isometric-03`
**source_filename:** `PhotoPlan to Isometric Diagram.txt`
**raw_id:** `photoplan-to-isometric-diagram--03`

**title:** Landscape Plan to Clean Axonometric Diagram

**category:** 3D `[inferred]`
**subcategory:** Axonometric / Isometric Diagram `[inferred]`

**tags:** axonometric, landscape plan, isometric, diagram, Barcelona, residential, white background, presentation

**original_prompt:**
> Turn this landscape plan for a residential community in Barcelona into a clean 3D axonometric diagram. Remove all surrounding elements—keep only the main structure of the building and landscape. Add a minimal square base underneath the building to ground the composition. Use thin lines, soft shadows, and subtle textures to emphasize form and depth. The overall style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**cleaned_prompt:**
> Turn this landscape plan into a clean 3D axonometric diagram. Remove all surrounding elements — keep only the main structure of the building and landscape. Add a minimal square base underneath the building to ground the composition. Use thin lines, soft shadows, and subtle textures to emphasize form and depth. The style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**short_summary:** Convert a landscape site plan into a clean axonometric diagram, isolating the building and landscape on a minimal white base.

**use_case:** Creating clean 3D diagrams from site plans for presentations; simplifying complex plans into readable axonometric views.

**recommended_output_type:** 3D axonometric diagram, white/minimal background

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 3.png`

**match_confidence:** medium — image shows a residential courtyard block site plan (left) and a clean isometric illustration of the same block with trees and greenery, isolated on a white background with a base (right). The structure matches the prompt well.

**notes:**
- Original references Barcelona specifically — cleaned prompt removes geographic reference for reusability.
- Variant group with NB-WEB-photoplan-isometric-01 and -04 — same output style, different input types.

**uncertainty_notes:**
- Barcelona context not confirmed in image — no geographic labels visible.

---

### NB-WEB-photoplan-isometric-04

**normalized_id:** `NB-WEB-photoplan-isometric-04`
**source_filename:** `PhotoPlan to Isometric Diagram.txt`
**raw_id:** `photoplan-to-isometric-diagram--04`

**title:** 2D Plan to Realistic-Textured 3D Isometric

**category:** 3D `[inferred]`
**subcategory:** Axonometric / Isometric Diagram `[inferred]`

**tags:** isometric, 3D, realistic textures, plan, facade materials, landscape, competition board

**original_prompt:**
> Convert the 2D architectural plan into a 3D isometric diagram with realistic textures. Extrude the building footprints into detailed structures, apply realistic facade materials like brick, concrete, wood, or glass. Add roofs, windows, and doors accurately based on the plan. Use soft natural lighting, shadows, and a clean white background to emphasize depth and clarity. Include textured landscape elements such as grass, pavement, and trees to represent the surrounding context. Present the entire model in a clean, angled isometric view, suitable for design presentation or competition boards.

**cleaned_prompt:**
> Convert a 2D architectural plan into a 3D isometric diagram with realistic textures. Extrude the building footprints into detailed structures, applying realistic facade materials (brick, concrete, wood, or glass). Add roofs, windows, and doors accurately based on the plan. Use soft natural lighting, shadows, and a clean white background. Include textured landscape elements — grass, pavement, and trees — to represent surrounding context. Present in a clean, angled isometric view suitable for design presentation or competition boards.

**short_summary:** Convert a 2D architectural or landscape plan into a realistic-textured 3D isometric model with facade materials, roofs, and landscape context.

**use_case:** Producing richly detailed isometric diagrams from plans; competition boards; design presentations requiring more material detail than a purely diagrammatic output.

**recommended_output_type:** Realistic-textured 3D isometric diagram

**matched_image_filenames:** `PhotoPlan to Isometric Diagram 4.png`

**match_confidence:** medium — image shows a landscape plan with dense tree canopy (left) and a photorealistic 3D isometric of a small building in a green landscape setting (right). The textured landscape and 3D structure match the prompt's intent, though the building is simpler than expected.

**notes:** More detailed than NB-WEB-photoplan-isometric-01 and -03 — adds facade materials and landscape texturing. Variant group candidate with those records.

**uncertainty_notes:**
- Facade material detail (brick, concrete, glass) not clearly visible on the small pavilion shown in the image.
- Match is by sequential elimination (no 5th image for prompt 5).

---

### NB-WEB-photoplan-isometric-05

**normalized_id:** `NB-WEB-photoplan-isometric-05`
**source_filename:** `PhotoPlan to Isometric Diagram.txt`
**raw_id:** `photoplan-to-isometric-diagram--05`

**title:** Floor Plan to Apartment Isometric Diagram

**category:** 3D `[inferred]`
**subcategory:** Axonometric / Isometric Diagram `[inferred]`

**tags:** isometric, apartment, floor plan, interior, diagram, white background, minimal

**original_prompt:**
> Create a 3D isometric diagram of my apartment based on the provided floor plan. Show walls, rooms, furniture, and major interior elements in a clean, diagrammatic style. White Background.

**cleaned_prompt:**
> Create a 3D isometric diagram of an apartment based on the provided floor plan. Show walls, rooms, furniture, and major interior elements in a clean, diagrammatic style. White background.

**short_summary:** Generate a clean isometric diagram of an apartment from a floor plan, showing rooms, walls, and furniture in a diagrammatic style.

**use_case:** Visualizing apartment layouts in 3D; creating portfolio-ready isometric diagrams from floor plans.

**recommended_output_type:** 3D isometric apartment diagram, white background

**matched_image_filenames:** none

**match_confidence:** none — no image file found. Only 4 images exist for this 5-prompt source file.

**notes:**
- Although no image was found in the official `source/website_images/` folder, the orphan image `From Plan to Bird's-eye and Perspective 5.png` shows a floor plan → 3D isometric apartment view — visually consistent with this prompt. This is a cross-file candidate pairing; not confirmed.
- Shortest prompt in this file — very minimal instructions.

**uncertainty_notes:**
- No image example available from the designated source folder.
- Possible orphan image match from a different topic folder; not assigned here.

---

### NB-WEB-plan-to-cad-01

**normalized_id:** `NB-WEB-plan-to-cad-01`
**source_filename:** `Plan to CAD.txt`
**raw_id:** `plan-to-cad--01`

**title:** Hand-Drawn Landscape Plan to CAD Linework

**category:** Plans `[inferred]`
**subcategory:** Landscape Plan — CAD Conversion `[inferred]`

**tags:** CAD, linework, landscape plan, hand-drawn, technical, clean, vector, tree symbols, Illustrator

**original_prompt:**
> Convert this hand-drawn landscape site plan into a precise technical CAD drawing style. Use single-layer thin lines throughout with clear, uniform line weights. Remove all sketch textures, shading, and hatching. Keep only clean vector-style outlines for paths, planting beds, lawns, curbs, ROW, and building footprints. For all trees, replace detailed sketch symbols with simple line circles of appropriate size to represent canopy outlines. Shrubs can be shown as smaller circles or ovals. The result should be professional, minimal, and ready for CAD or Illustrator editing, with accurate linework and no shading.

**cleaned_prompt:**
> Convert this hand-drawn landscape site plan into a precise technical CAD drawing style. Use single-layer thin lines with clear, uniform line weights. Remove all sketch textures, shading, and hatching. Keep only clean vector-style outlines for paths, planting beds, lawns, curbs, and building footprints. Replace all tree symbols with simple line circles representing canopy outlines; shrubs as smaller circles or ovals. The result should be professional, minimal, and ready for CAD or Illustrator editing.

**short_summary:** Convert a hand-drawn landscape plan into clean CAD-style linework with uniform line weights, simple plant symbols, and no shading.

**use_case:** Cleaning up hand-drawn landscape plans for digital production; preparing plans for import into AutoCAD or Illustrator; producing technical drawings from sketches.

**recommended_output_type:** Technical CAD-style landscape plan (clean linework, white background)

**matched_image_filenames:** `Plan to CAD.png`

**match_confidence:** high — image shows a hand-drawn landscape site plan (left, organic linework with varied textures and sketch shading) and a clean technical CAD-style version (right, uniform thin lines, simplified plant symbols as circles, no shading). Directly matches the prompt.

**notes:** null

**uncertainty_notes:** null

---

### NB-WEB-render-to-illustration-01

**normalized_id:** `NB-WEB-render-to-illustration-01`
**source_filename:** `Rendering to Illustration.txt`
**raw_id:** `rendering-to-illustration--01`

**title:** Rendering to Architectural Line Drawing

**category:** Illustrations `[inferred]`
**subcategory:** Architectural Line Drawing `[inferred]`

**tags:** illustration, line drawing, competition, linework, black and white, hatch, minimal, academic, silhouette

**original_prompt:**
> Create a minimalist architectural line-drawing rendering in a clean competition-style illustration. Render the building using thin, precise black or dark-gray linework only, with no color fills, no textures, and no photorealistic shading. Clearly express façade grids, structural rhythm, and floor articulation through consistent line weights. Use subtle line layering to indicate depth between foreground, midground, and background buildings. Depict the sky using horizontal hatch lines to create a calm atmospheric backdrop. Draw trees, landscape, and ground surfaces with lighter, softer outlines so they remain secondary to the architecture. Add minimal human figures and birds as simple contour silhouettes for scale. Keep the overall composition clean, balanced, and quiet, with a white background and a refined architectural drawing aesthetic suitable for competitions or academic presentations.

**cleaned_prompt:**
> Create a minimalist architectural line-drawing illustration in a clean competition style. Render the building using thin, precise black or dark-gray linework only — no color fills, no textures, no photorealistic shading. Express façade grids, structural rhythm, and floor articulation through consistent line weights. Use subtle line layering to indicate depth between foreground, midground, and background. Depict the sky with horizontal hatch lines. Draw trees, landscape, and ground with lighter, softer outlines secondary to the architecture. Add minimal human figures and birds as simple contour silhouettes for scale. White background, refined and quiet composition suitable for competitions or academic presentations.

**short_summary:** Transform an architectural rendering into a minimalist competition-style line drawing with hatch sky, linework-only facade, and silhouette entourage.

**use_case:** Competition submissions requiring a drawing aesthetic; academic presentations; portfolio pieces in an architectural illustration style.

**recommended_output_type:** Architectural line illustration (black/gray linework, white background)

**matched_image_filenames:** none

**match_confidence:** none — no image file found in source/website_images

**notes:** This is one of two records with no image source. The prompt is highly detailed and self-contained — no image example is needed to understand or use it.

**uncertainty_notes:**
- No visual example available.

---

### NB-WEB-retexture-01

**normalized_id:** `NB-WEB-retexture-01`
**source_filename:** `Retexture prompt.txt`
**raw_id:** `retexture-prompt--01`

**title:** Facade Retexture — Replace Building Material

**category:** Post-processing / Results usage `[inferred]`
**subcategory:** Facade Retexture `[inferred]`

**tags:** retexture, facade, material replacement, perspective, lighting, photo manipulation, two-image

**original_prompt:**
> Replace the building facade in the original photo with the facade texture shown in image 2. Maintain the same perspective and lighting. Match the new texture naturally onto the building, ensuring it blends realistically with the structure, shadows, and surrounding context.

**cleaned_prompt:**
> Replace the building facade in the original photo with the facade texture shown in image 2. Maintain the same perspective and lighting. Match the new texture naturally onto the building, ensuring it blends realistically with the structure, shadows, and surrounding context.

**short_summary:** Replace the facade material of a building in a photo with a reference texture from a second image, preserving perspective, lighting, and shadow.

**use_case:** Testing different facade materials on an existing building photo; design exploration for cladding options; presenting material alternatives to clients.

**recommended_output_type:** Photorealistic building photo with replaced facade material

**matched_image_filenames:** `retexture.png`

**match_confidence:** high — image shows a large institutional building with a white perforated mesh facade (left, the source building) and a close-up of a terracotta-colored vertical fin facade panel (right, the reference texture). Matches the two-image input structure of the prompt.

**notes:**
- Multi-image input prompt: requires two images (source building + target texture reference).
- The image shows the two inputs, not the final retextured output.
- Source file label "Prompt:" stripped from original — actual prompt text begins at "Replace the building facade..."

**uncertainty_notes:**
- No output result image available — only the two input images are shown.

---

### NB-WEB-section-3d-01

**normalized_id:** `NB-WEB-section-3d-01`
**source_filename:** `Section to 3D.txt`
**raw_id:** `section-to-3d--01`

**title:** Landscape Section to 3D Isometric Diagram

**category:** Sections `[inferred]`
**subcategory:** Section to 3D Isometric `[inferred]`

**tags:** section, isometric, 3D, landscape, elevation change, planting, hardscape, presentation

**original_prompt:**
> Convert the landscape section drawing into a 3D isometric diagram. Maintain the original spatial layout and design elements, but reinterpret them in three dimensions. Include elevation changes, plantings, paving, seating areas, and structural elements as layered isometric forms. Use soft textures for grass, trees, and hardscape surfaces. Represent vegetation with clean cutout trees and shrubs in plan-view or stylized 3D. Use clean white outlines and soft shadows to give depth. The style should be realistic texture, diagrammatic, and clear—suitable for a landscape architecture presentation.

**cleaned_prompt:**
> Convert a landscape section drawing into a 3D isometric diagram. Maintain the original spatial layout and design elements, reinterpreted in three dimensions. Include elevation changes, plantings, paving, seating areas, and structural elements as layered isometric forms. Use soft textures for grass, trees, and hardscape. Represent vegetation with clean cutout trees and shrubs. Use clean white outlines and soft shadows to give depth. Style: realistic texture, diagrammatic, and clear — suitable for a landscape architecture presentation.

**short_summary:** Convert a landscape section drawing into a 3D isometric diagram showing elevation changes, plantings, paving, and structural elements.

**use_case:** Transforming 2D section drawings into readable 3D diagrams for landscape architecture presentations; communicating cross-sectional design in three dimensions.

**recommended_output_type:** 3D isometric landscape diagram

**matched_image_filenames:** `Section to 3D.png`

**match_confidence:** high — image shows a landscape section drawing (left, 2D linework showing terrain profile, trees, building, and ground levels) and a 3D isometric view of the same scene (right, showing the building, trees, sloped terrain, and greenery in three dimensions). Directly matches the prompt.

**notes:** null

**uncertainty_notes:** null

---

### NB-WEB-trace-aerial-01

**normalized_id:** `NB-WEB-trace-aerial-01`
**source_filename:** `Trace Google Aerial Photo.txt`
**raw_id:** `trace-google-aerial-photo--01`

**title:** Trace Satellite Image to Urban Analysis Map

**category:** Urban Planning `[inferred]`
**subcategory:** Figure-Ground / Site Analysis Map `[inferred]`

**tags:** satellite, aerial, urban analysis, figure-ground, Nolli map, site analysis, buildings, roads, vegetation, flat graphic

**original_prompt:**
> Based on the provided satellite image, generate a stylized and accurate outline map. Represent buildings as solid dark or black shapes with clean edges, roads as thin white lines or paths, and green areas (parks, lawns, vegetation) as solid green color blocks. Maintain realistic scale and proportions, and preserve the layout and spatial relationships from the satellite image. The overall composition should be minimal, clean, and suitable for urban or architectural site analysis — top-down view, flat graphic style, high contrast, and presentation-ready.

**cleaned_prompt:**
> Based on the provided satellite image, generate a stylized and accurate outline map. Represent buildings as solid dark or black shapes with clean edges, roads as thin white lines or paths, and green areas (parks, lawns, vegetation) as solid green color blocks. Maintain realistic scale and proportions, preserving layout and spatial relationships from the satellite image. Top-down view, flat graphic style, high contrast, minimal and presentation-ready.

**short_summary:** Convert a satellite or aerial photo into a clean figure-ground site analysis map with black building footprints, white roads, and green vegetation.

**use_case:** Urban analysis and site mapping; producing Nolli-style or figure-ground maps from satellite imagery; site analysis diagrams for urban design presentations.

**recommended_output_type:** Flat graphic urban analysis map (top-down, high contrast)

**matched_image_filenames:** `Trace Google Aerial Photo.png`

**match_confidence:** medium — the image shows only the output map (a figure-ground style urban plan with building footprints, street network, and open space in a light graphic style). No satellite input image is shown. The output is consistent with the prompt's description.

**notes:** The image shows only the output — the satellite input is not included in the example. The output map style (flat, minimal, building footprints visible) is consistent with the prompt.

**uncertainty_notes:**
- No before/after pairing visible — only the output is shown.
- Cannot confirm the input was a satellite image based on the image alone.

---

### NB-WEB-model-rendering-01

**normalized_id:** `NB-WEB-model-rendering-01`
**source_filename:** `model to rendering prompts.txt`
**raw_id:** `model-to-rendering-prompts--01`

**title:** SketchUp Model to Photorealistic Urban Rendering

**category:** Renderings `[inferred]`
**subcategory:** Model to Exterior Render `[inferred]`

**tags:** SketchUp, model to render, photorealistic, urban, glass curtain wall, daylight, context, street-level

**original_prompt:**
> Turn this SketchUp model into a photorealistic architectural rendering. Preserve the original perspective and building proportions. Apply realistic facade materials—especially glass curtain walls for the tall buildings. Use natural daylight with soft shadows to enhance depth. Add subtle landscaping, street details, people, and environmental context to bring the scene to life. Clean, high-quality professional visualization style, suitable for urban design presentations. surrounding urban environment and green space are added to achieve a photo-realistic texture.

**cleaned_prompt:**
> Turn this 3D model into a photorealistic architectural rendering. Preserve the original perspective and building proportions. Apply realistic facade materials — especially glass curtain walls for tall buildings. Use natural daylight with soft shadows to enhance depth. Add subtle landscaping, street details, people, and environmental context. Clean, high-quality professional visualization style suitable for urban design presentations.

**short_summary:** Convert a SketchUp or 3D model into a photorealistic urban rendering with realistic materials, daylight, and street-level context.

**use_case:** Producing photorealistic renders from massing models or SketchUp files; urban design presentations; showing a 3D model with finishes and context.

**recommended_output_type:** Photorealistic architectural rendering (exterior, urban context)

**matched_image_filenames:** `model to rendering 1.png`

**match_confidence:** high — image shows a SketchUp-style urban model (left), a Nano Banana photorealistic render (center, labeled "Nano Banana"), and a ChatGPT render (right, labeled "ChatGPT") of the same urban block with glass buildings and street context. Directly matches the prompt.

**notes:**
- Final sentence in original ("surrounding urban environment and green space are added...") is grammatically inconsistent — appears to be a note fragment. Removed in cleaned prompt; preserved in original above.
- Image includes a ChatGPT comparison column — same format as sketch-to-image record 01.

**uncertainty_notes:** null

---

### NB-WEB-model-rendering-02

**normalized_id:** `NB-WEB-model-rendering-02`
**source_filename:** `model to rendering prompts.txt`
**raw_id:** `model-to-rendering-prompts--02`

**title:** Landscape 3D Model to Photorealistic Rendering

**category:** Renderings `[inferred]`
**subcategory:** Model to Landscape Render `[inferred]`

**tags:** landscape, model to render, photorealistic, concrete paving, planting, plaza, stairway, daylight

**original_prompt:**
> Convert this landscape design model into a photorealistic rendering. Maintain the original perspective and layout. Use light-textured concrete paving for all paths and stairs. Apply realistic planting materials with natural grasses, native shrubs, and mature trees. The stairway leads to an upper-level plaza with clean, minimal design. Include subtle shadows, soft natural daylight, and light human activity. Overall style is modern, calm, and professionally landscaped.

**cleaned_prompt:**
> Convert this landscape design model into a photorealistic rendering. Maintain the original perspective and layout. Use light-textured concrete paving for all paths and stairs. Apply realistic planting materials — natural grasses, native shrubs, and mature trees. Include subtle shadows, soft natural daylight, and light human activity. Overall style: modern, calm, and professionally landscaped.

**short_summary:** Convert a landscape design 3D model into a photorealistic render with concrete paving, planting, and human activity in a calm modern setting.

**use_case:** Producing photorealistic landscape renders from 3D models; landscape architecture project presentations; showing material and planting character from a model.

**recommended_output_type:** Photorealistic landscape rendering (exterior)

**matched_image_filenames:** `model to rendering 2.png`

**match_confidence:** high — image shows three views of the same landscape design: a SketchUp-style model (left) and two Nano Banana photorealistic renders (center and right, both labeled "Nano Banana") showing concrete paving, flowering cherry trees, seating, and a modern plaza. The renders match the material and style description in the prompt.

**notes:** Two Nano Banana output versions visible in the image — possibly from two separate prompt submissions or slight prompt variations. Both labeled "Nano Banana."

**uncertainty_notes:** null

---

### NB-WEB-sketch-to-image-01

**normalized_id:** `NB-WEB-sketch-to-image-01`
**source_filename:** `sketch to image prompts.txt`
**raw_id:** `sketch-to-image-prompts--01`

**title:** Sketch to Photorealistic 3D Render — Modern Building

**category:** Renderings `[inferred]`
**subcategory:** Sketch to Exterior Render `[inferred]`

**tags:** sketch to render, photorealistic, exterior, modern, daylight, MIR style, cinematic, reflective materials

**original_prompt:**
> Based on this architectural sketch, generate a realistic 3D rendering of a modern architecture building. Apply daylight conditions with natural shadows and reflective materials. The final image should resemble a professional visualization in the style of MIR renderings — cinematic, detailed, and photorealistic.

**cleaned_prompt:**
> Based on this architectural sketch, generate a realistic 3D rendering of a modern architecture building. Apply daylight conditions with natural shadows and reflective materials. The final image should be cinematic, detailed, and photorealistic — in the style of professional architectural visualization.

**short_summary:** Generate a photorealistic cinematic 3D render from an architectural sketch, with daylight, shadows, and reflective materials.

**use_case:** Turning design sketches into photorealistic renders for client presentations; early-stage design visualization.

**recommended_output_type:** Photorealistic 3D exterior render

**matched_image_filenames:** `sketch to image 1.png`

**match_confidence:** high — image (with "Sketch to Image" heading) shows: an architectural line sketch of a modern tower (left), a Nano Banana photorealistic render (center), and a ChatGPT render (right). The Nano Banana output is a high-quality cinematic render matching the prompt.

**notes:** Original references "MIR renderings" by name — a specific professional visualization studio. Cleaned prompt generalizes the style reference while preserving the intent.

**uncertainty_notes:** null

---

### NB-WEB-sketch-to-image-02

**normalized_id:** `NB-WEB-sketch-to-image-02`
**source_filename:** `sketch to image prompts.txt`
**raw_id:** `sketch-to-image-prompts--02`

**title:** Landscape Plan — Hand-Rendered Watercolor Style

**category:** Illustrations `[inferred]`
**subcategory:** Hand-Rendered Plan `[inferred]`

**tags:** landscape plan, watercolor, hand-rendered, marker, artistic, color, top-down

**original_prompt:**
> Color this black-and-white landscape plan in a hand-rendered style. Use soft watercolor textures combined with vivid marker strokes. Emphasize plant areas with layered green tones, hardscape with warm grays, and water features with translucent blue washes. Maintain a clean, architectural layout while showcasing a vibrant, artistic look.

**cleaned_prompt:**
> Color this black-and-white landscape plan in a hand-rendered style. Use soft watercolor textures combined with vivid marker strokes. Emphasize plant areas with layered green tones, hardscape with warm grays, and water features with translucent blue washes. Maintain a clean, architectural layout with a vibrant, artistic look.

**short_summary:** Apply a hand-rendered watercolor and marker style to a black-and-white landscape plan, with layered greens, warm grays, and translucent blue water.

**use_case:** Creating artistic landscape plan presentations; competition boards with hand-drawn aesthetic; visualizing a plan with color and texture without digital modeling.

**recommended_output_type:** Colored landscape plan (hand-rendered, watercolor/marker style)

**matched_image_filenames:** `sketch to image 2.png`

**match_confidence:** medium — image shows a small landscape site plan labeled "Hand Drawing" (left) and a Nano Banana rendered version (right) with green plant areas and colored zones. The output style appears more clean/digital than pure watercolor, but the coloring and zone differentiation is consistent with the prompt.

**notes:** Variant candidate with NB-WEB-sketch-to-image-03 — both address landscape plan transformation, different output aesthetics (artistic vs. clean professional).

**uncertainty_notes:**
- Image-to-prompt mapping for records 02 and 03 could be reversed (see trial paired records). Assignment is inferred from visual comparison.

---

### NB-WEB-sketch-to-image-03

**normalized_id:** `NB-WEB-sketch-to-image-03`
**source_filename:** `sketch to image prompts.txt`
**raw_id:** `sketch-to-image-prompts--03`

**title:** Hand-Drawn Landscape Plan to Clean Digital Plan

**category:** Plans `[inferred]`
**subcategory:** Landscape Plan — Digital Rendering `[inferred]`

**tags:** landscape plan, hand-drawn, digital, clean, top-down, plant symbols, paving, professional, portfolio

**original_prompt:**
> Convert this hand-drawn landscape design into a clean, professional top-down landscape architecture plan. Retain the original layout and spatial composition, but enhance it with accurate linework, consistent geometry, and digital textures. Apply realistic plant symbols, soft green lawn textures, top-view trees and shrubs, and clean paving patterns. Use a modern landscape graphics style with clear zone differentiation, muted tones, and professional color palette. Remove sketchy lines and noise — the final rendering should look polished and presentation-ready for a landscape architecture portfolio or competition board.

**cleaned_prompt:**
> Convert this hand-drawn landscape design into a clean, professional top-down landscape architecture plan. Retain the original layout and spatial composition, but enhance it with accurate linework, consistent geometry, and digital textures. Apply realistic plant symbols, soft green lawn textures, top-view trees and shrubs, and clean paving patterns. Use a modern landscape graphics style with clear zone differentiation, muted tones, and professional color palette. Remove sketchy lines and noise — polished and presentation-ready for portfolio or competition board.

**short_summary:** Convert a hand-drawn landscape plan into a clean, professional digital plan with accurate plant symbols, paving patterns, and a muted modern color palette.

**use_case:** Cleaning up hand sketches for professional presentations; producing portfolio-ready landscape plans from concept sketches.

**recommended_output_type:** Clean digital landscape plan (rendered, professional style)

**matched_image_filenames:** `sketch to image 4.png`

**match_confidence:** medium — image shows a large coastal masterplan in CAD/linework (left) and a photorealistic rendered top-down plan with rich greenery and texture (right, labeled "Nano Banana"). The rendered plan is polished and professional, consistent with the prompt.

**notes:** Variant candidate with NB-WEB-sketch-to-image-02. Also variant candidate with NB-WEB-plan-to-cad-01 (both clean up landscape plans — different target aesthetics).

**uncertainty_notes:**
- Image-to-prompt mapping for records 02 and 03 could be reversed.
- Left-side image in example looks more like a CAD drawing than a hand-drawn sketch.

---

### NB-WEB-sketch-to-image-04

**normalized_id:** `NB-WEB-sketch-to-image-04`
**source_filename:** `sketch to image prompts.txt`
**raw_id:** `sketch-to-image-prompts--04`

**title:** Sketch to Render — Modern House and Backyard

**category:** Renderings `[inferred]`
**subcategory:** Sketch to Exterior Render `[inferred]`

**tags:** residential, exterior, backyard, sketch to render, stucco, aluminum, California, plants, daylight

**original_prompt:**
> Render my sketch of a modern house and backyard. The facade uses smooth white stucco and dark aluminum panels. The backyard is landscaped with native California plants. Realistic materials, natural daylight, soft shadows, clean modern style.

**cleaned_prompt:**
> Render this sketch of a modern house and backyard. The facade uses smooth white stucco and dark aluminum panels. The backyard is landscaped with native plants. Realistic materials, natural daylight, soft shadows, clean modern style.

**short_summary:** Render a residential house and backyard sketch with white stucco facade, dark aluminum panels, and native landscape planting.

**use_case:** Residential design visualization; turning a hand sketch into a photorealistic exterior render for client presentations.

**recommended_output_type:** Photorealistic residential exterior render

**matched_image_filenames:** `sketch to image 3.png`

**match_confidence:** high — image shows a detailed pencil sketch of a two-storey modern house with garden path (labeled "Sketch") and a photorealistic Nano Banana render of the same house with light-toned walls, dark-frame windows, stone paving, and lush planting (labeled "Nano Banana"). Directly matches the prompt.

**notes:** Original references "California plants" specifically — cleaned prompt generalizes to "native plants."

**uncertainty_notes:** null

---

### NB-WEB-sketch-to-image-05

**normalized_id:** `NB-WEB-sketch-to-image-05`
**source_filename:** `sketch to image prompts.txt`
**raw_id:** `sketch-to-image-prompts--05`

**title:** Interior Visualization — Minimalist Living Room with Wood Slat Ceiling

**category:** Renderings `[inferred]`
**subcategory:** Interior Render `[inferred]`

**tags:** interior, living room, minimalist, high ceiling, wood slat ceiling, natural light, contemporary furniture, architectural visualization

**original_prompt:**
> A modern minimalist living room with a high ceiling in perspective view. White walls, clean lines, and soft natural light. The space features sleek contemporary furniture, large windows, and a Wood slat ceiling ceiling. Calm, airy atmosphere with neutral tones and subtle textures. Architectural visualization style.

**cleaned_prompt:**
> A modern minimalist living room with a high ceiling in perspective view. White walls, clean lines, and soft natural light. The space features sleek contemporary furniture, large windows, and a wood slat ceiling. Calm, airy atmosphere with neutral tones and subtle textures. Architectural visualization style.

**short_summary:** Generate a photorealistic interior render of a minimalist living room with a high ceiling, wood slat ceiling, large windows, and neutral tones.

**use_case:** Interior design visualization; producing a photorealistic render of a space concept without a reference photo input.

**recommended_output_type:** Photorealistic interior architectural render

**matched_image_filenames:** `sketch to image 5.png`

**match_confidence:** high — image shows a sketch of a double-height living room (left) and a Nano Banana photorealistic render (right) with white walls, wood slat ceiling, large glazed windows, contemporary furniture, and warm natural light. Directly matches the prompt.

**notes:**
- Original contains "Wood slat ceiling ceiling" (word duplication). Corrected to "wood slat ceiling" in cleaned prompt. Original preserved above.
- The prompt text does not reference an input image (unlike prompts 1–4 in this file). However, the image example shows a sketch as the input. May function as either text-to-image or image-to-image.

**uncertainty_notes:**
- Prompt phrasing ("A modern minimalist living room...") suggests text-to-image use, but image example shows sketch input. Mode of use is ambiguous.

---

## Variant groups (for curation)

The following groups of records share close structural similarity and should be reviewed for variant grouping during the curation phase:

| Group | Records | Shared pattern |
|---|---|---|
| Season change | NB-WEB-change-season-01, -02 | Same input, different season output |
| Plan to bird's-eye / perspective | NB-WEB-plan-birdeye-01, -02 | Same input, different viewpoint |
| Elevation variants | NB-WEB-photo-elevation-01, -02, -03 | Same output type (elevation/CAD), increasing detail |
| Axonometric / isometric diagram | NB-WEB-photoplan-isometric-01, -03, -04, -05 | Same output style, different input types |
| Landscape plan transformation | NB-WEB-sketch-to-image-02, -03, NB-WEB-plan-to-cad-01 | All clean up or render landscape plans |
| Sketch to exterior render | NB-WEB-sketch-to-image-01, -04, NB-WEB-model-rendering-01 | All produce photorealistic exterior renders |
| Model to render | NB-WEB-model-rendering-01, -02 | Both convert 3D models to photorealistic renders |
