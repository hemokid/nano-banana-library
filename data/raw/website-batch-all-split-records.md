# Website Batch — All Split Records

Split per rules in `docs/website-text-splitting-rules.md`.
Date: 2026-04-09
Analyst: Claude (automated)

---

## Batch summary

**Total source text files processed:** 14
**Total split prompt records created:** 29

**Source files containing multiple prompts:**
- `sketch to image prompts.txt` — 5 prompts
- `Change Season or Atmosphere prompt.txt` — 2 prompts
- `From Plan to Bird's-eye and Perspective prompt.txt` — 3 prompts
- `Photo to Elevation (or CAD).txt` — 3 prompts
- `PhotoPlan to Isometric Diagram.txt` — 5 prompts
- `model to rendering prompts.txt` — 2 prompts

**Source files mixing prompts with non-prompt content:**
- `Photo to 3D Building Model prompt.txt` — contains tool URLs (hexa3d.io, meshy.ai)
- `Change Rendering View.txt` — contains a bracketed parameter list appended after the prompt
- `Photo to Elevation (or CAD).txt` — contains a workflow note about ChatGPT + SVG/DWG export after prompt 1
- `Change Season or Atmosphere prompt.txt` — contains a non-prompt "Other elements you can use" list after prompt 2

---

## Source file: `Change Rendering View.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_label:** `Prompt:` (label prefix on line 1 — stripped from prompt_text)
**source_notes:** Bracketed parameter list appended after the main prompt text listing valid values for `[desired angle]`
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `change-rendering-view--01`

**source_filename:** `Change Rendering View.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Change Rendering View` (from filename; not present as a heading in the text file)

**prompt_text:**
> Change the angle of view of this architectural rendering. Generate a new perspective from [desired angle], keeping the original materials, lighting, and style consistent. Maintain correct proportions and architectural detailing. The scene should feel cohesive and realistic, with shadows, textures, and environment matching the new camera angle.

**non_prompt_content:**
- **type:** `source_label` — `Prompt:` (prefix on line 1, stripped from prompt_text)
- **type:** `source_notes` — Parameter options listed after the prompt for `[desired angle]`:
  - `Eye-level / street view`
  - `Bird's-eye / aerial`
  - `Oblique / 45-degree`
  - `Front elevation / side view / corner perspective`
  - `Specific direction (e.g., "from southwest corner facing northeast")`

**split_uncertainty:** `false`

**analyst_notes:** `The prompt contains a placeholder token [desired angle] — this is a fill-in parameter, not literal text to submit. The parameter options list following the prompt explains what values are valid for that token. These options are usage notes, not part of the prompt itself. The prompt is a template with one variable; the options list is instructional documentation for the user.`

---

## Source file: `Change Season or Atmosphere prompt.txt`

**total_prompts_in_source:** 2
**intro_text:** null
**source_notes:** `Other elements you can use:` list (lines 9–15) follows prompt 2 — non-prompt content
**tool_references:** null

---

### Record 1 of 2

**raw_id:** `change-season-or-atmosphere-prompt--01`

**source_filename:** `Change Season or Atmosphere prompt.txt`

**source_record_index:** `1 of 2`

**visible_title_or_topic:** `Change Season or Atmosphere` (from filename; not present as a heading in the text)

**prompt_text:**
> Transform this architectural scene into a cozy winter setting. Cover the ground, roof, and trees with a layer of snow. Add soft falling snowflakes in the atmosphere. Turn on the interior lights and give them a warm, golden glow to create a strong contrast between the cold, snowy exterior and the inviting warmth inside. Use soft winter daylight with a slightly overcast sky, visible breath-like mist, and subtle shadows. The final image should feel serene, atmospheric, and visually balanced between cold and warmth.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit label `Prompt 1:` at line 1.

**analyst_notes:** `Full descriptive prompt for a winter scene transformation. Subject: exterior architectural scene → winter/snow mood.`

---

### Record 2 of 2

**raw_id:** `change-season-or-atmosphere-prompt--02`

**source_filename:** `Change Season or Atmosphere prompt.txt`

**source_record_index:** `2 of 2`

**visible_title_or_topic:** `null`

**prompt_text:**
> To autumn

**non_prompt_content:**
- **type:** `source_notes` — `Other elements you can use:` supplementary list following the prompt:
  - `Snow on ground, roof, and surrounding surfaces`
  - `Frosted or slightly foggy glass from the indoor warmth`
  - `Warm yellow/orange interior lights visible through windows`
  - `Soft ambient winter light (bluish tones, overcast)`
  - `Optional: footprints, smoke from chimney, or lit path lights`

**split_uncertainty:** `true` — The text of prompt 2 is extremely short ("To autumn") — just two words. It is unclear whether this is a complete standalone prompt, a variant shorthand intended to be used with prompt 1 as context, or a label for a longer prompt that was not included in the text file. The `source_notes` list that follows references snow/winter elements, suggesting the notes may belong to prompt 1, not prompt 2.

**analyst_notes:** `"To autumn" is two words. Its brevity is anomalous compared to all other prompts in this collection. It may be: (a) a shorthand variant of prompt 1 for a different season, (b) a fragment of a longer prompt not captured in the source file, or (c) a stub placeholder. The "Other elements you can use" list following it references snow and winter elements — content that logically belongs with prompt 1. This structural inconsistency is flagged. During normalization, treat "To autumn" as a minimal prompt variant for season change; do not expand or rewrite it. The source_notes list should be associated with prompt 1 in the normalized layer.`

---

## Source file: `From Plan to Bird's-eye and Perspective prompt.txt`

**total_prompts_in_source:** 3
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 3

**raw_id:** `from-plan-to-birds-eye-and-perspective-prompt--01`

**source_filename:** `From Plan to Bird's-eye and Perspective prompt.txt`

**source_record_index:** `1 of 3`

**visible_title_or_topic:** `From Plan to Bird's-eye and Perspective` (from filename)

**prompt_text:**
> Turn this landscape plan for a residential community in Barcelona into a 3D bird's-eye view architectural rendering. Emphasize the aerial perspective with realistic depth, scale, and spatial hierarchy. The buildings feature red tile roofs typical of Barcelona architecture. Surround the site with detailed urban context—gridded streets, mid-rise Mediterranean-style buildings, and plazas. Add photorealistic textures, soft natural daylight, tree canopies, paving, and street elements. The rendering should feel like a high-resolution aerial photo but in clean 3D visualization style, suitable for urban design presentation.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit label `Prompt 1` at line 1.

**analyst_notes:** `Subject: 2D landscape plan → 3D bird's-eye rendering. Site context is specific: Barcelona, Mediterranean architecture, red tile roofs. Geographically and architecturally specific — may be less universally reusable than other prompts.`

---

### Record 2 of 3

**raw_id:** `from-plan-to-birds-eye-and-perspective-prompt--02`

**source_filename:** `From Plan to Bird's-eye and Perspective prompt.txt`

**source_record_index:** `2 of 3`

**visible_title_or_topic:** `null`

**prompt_text:**
> Good, Create a eye level perspective view from the courtyard, looking toward the building, with the landscape design area in the foreground.

**non_prompt_content:** null

**split_uncertainty:** `true` — Prompt 2 begins with "Good," — a conversational affirmation suggesting it is a follow-up message in a chat session, not a standalone prompt. It may only function as a continuation of prompt 1 in the same chat context.

**analyst_notes:** `The word "Good," at the start indicates this is a conversational continuation prompt, likely sent after prompt 1 produced a result. It may not work correctly without the prior chat context. During normalization, flag as a "follow-up / context-dependent prompt." Subject: courtyard eye-level perspective view.`

---

### Record 3 of 3

**raw_id:** `from-plan-to-birds-eye-and-perspective-prompt--03`

**source_filename:** `From Plan to Bird's-eye and Perspective prompt.txt`

**source_record_index:** `3 of 3`

**visible_title_or_topic:** `null`

**prompt_text:**
> Create a 3D interior rendering of my apartment based on the provided floor plan. Use the camera angle indicated by the red arrow for perspective. The design style should be Modern Scandinavian, featuring natural materials, clean lines, white walls, warm wood accents, and minimalist decor. Furnish the space with realistic IKEA furniture—including sofas, dining set, storage units, and lighting fixtures. Add soft textiles, cozy lighting, and green plants to complete the look. The image should be composed in 11x17 landscape ratio, with natural daylight and soft shadows to enhance realism. Maintain accurate spatial proportions from the floor plan.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit label `Prompt 3:` at line 9.

**analyst_notes:** `This prompt is an interior rendering from a floor plan, thematically different from prompts 1 and 2 (which are exterior/bird's-eye views of a landscape plan). Its grouping in this file under "From Plan to Bird's-eye and Perspective" appears inconsistent — it is an interior perspective, not bird's-eye. Flag during normalization for possible recategorization. Specific details: IKEA furniture by name, 11x17 landscape ratio, red arrow camera indicator in the plan.`

---

## Source file: `Multi-elements to Rendering.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `multi-elements-to-rendering--01`

**source_filename:** `Multi-elements to Rendering.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Multi-elements to Rendering` (from filename)

**prompt_text:**
> Place all the elements from the provided images into the living room shown in the last image. Arrange them harmoniously within the space, matching lighting, perspective, and scale. Ensure each object blends naturally with the environment. The final composition should feel balanced, realistic, and aesthetically pleasing — like a professionally styled interior scene.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Multi-image input prompt — requires multiple reference images (elements + a base room image). The prompt references "the last image" implying a specific ordering of inputs. This is an interior composition/staging prompt.`

---

## Source file: `Photo to 3D Building Model prompt.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** `Generate a downloadable 3D model from an image using an image-to-3D website:`
**tool_references:**
- `https://gen.hexa3d.io/`
- `https://www.meshy.ai/`

---

### Record 1 of 1

**raw_id:** `photo-to-3d-building-model-prompt--01`

**source_filename:** `Photo to 3D Building Model prompt.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Photo to 3D Building Model` (from filename)

**prompt_text:**
> Based on this architectural photograph, generate a high-fidelity 3D building model in the style of "3d print building model." Key Requirements: Aim for a realistic look, preserving the main structure and texture details of the building, but stylized for a game. Emphasize realistic lighting and shadow effects. Use a 45-degree top-down perspective to showcase the building's three-dimensionality. Materials should be clearly defined, such as reflective glass and metallic surfaces. It should look like a high-quality 3D render suitable for a game engine. White background.

**non_prompt_content:**
- **type:** `source_notes` — `Generate a downloadable 3D model from an image using an image-to-3D website:`
- **type:** `tool_references` —
  - `https://gen.hexa3d.io/`
  - `https://www.meshy.ai/`

**split_uncertainty:** `false`

**analyst_notes:** `Source file contains two typographic errors preserved verbatim: "inthe" and "thebuilding" (both missing spaces). Tool URLs reference Hexa3D and Meshy — external image-to-3D conversion services, not AI image generation tools. These represent a different workflow step (actual 3D model export) and should be stored as related_tools in the normalized layer.`

---

## Source file: `Photo to Elevation (or CAD).txt`

**total_prompts_in_source:** 3
**intro_text:** null
**source_notes:** Workflow note after prompt 1 about ChatGPT SVG/DWG export
**tool_references:** null (ChatGPT is referenced by name but no URL provided)

---

### Record 1 of 3

**raw_id:** `photo-to-elevation-or-cad--01`

**source_filename:** `Photo to Elevation (or CAD).txt`

**source_record_index:** `1 of 3`

**visible_title_or_topic:** `Photo to Elevation (or CAD)` (from filename)

**prompt_text:**
> Generate rear elevation of the building.

**non_prompt_content:**
- **type:** `source_notes` — `You can ask ChatGPT to generate svg or dwg file for you further. Therefore, you can open the file with AutoCAD or Adobe Illustrator.`

**split_uncertainty:** `true` — Prompt 1 is extremely short (6 words). It may be a minimal working prompt, a title/stub, or a truncated version of a longer prompt. The note that follows it is a workflow tip, not part of the prompt.

**analyst_notes:** `"Generate rear elevation of the building." is the shortest prompt in the entire dataset — 6 words. It may function as a minimal prompt or may be intentionally brief for users who want a simple baseline. The ChatGPT workflow note after it describes a secondary step: using ChatGPT to convert the image output into a vector file. This is a multi-tool workflow note, not part of the Nano Banana prompt.`

---

### Record 2 of 3

**raw_id:** `photo-to-elevation-or-cad--02`

**source_filename:** `Photo to Elevation (or CAD).txt`

**source_record_index:** `2 of 3`

**visible_title_or_topic:** `null`

**prompt_text:**
> Generate a rear elevation view of the building. Use clean, precise architectural linework with no annotations, no textures, and no landscape or entourage. The drawing should show accurate proportions, windows, doors, facade elements, and structural outlines as seen from the back of the building. Present the elevation on a white background in a minimal, technical style suitable for architectural documentation or concept diagrams.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `2.` at line start.

**analyst_notes:** `Extended version of prompt 1 — same subject (rear elevation) with detailed specifications for linework, annotations, and style. Prompts 1 and 2 are strong variant candidates: same output type, very different levels of detail. Flag for variant grouping during normalization.`

---

### Record 3 of 3

**raw_id:** `photo-to-elevation-or-cad--03`

**source_filename:** `Photo to Elevation (or CAD).txt`

**source_record_index:** `3 of 3`

**visible_title_or_topic:** `null`

**prompt_text:**
> Turn an architecture photo into a technical architectural drawing in this style. Convert the building photo into a black-and-white architectural construction drawing with orthographic projections only. Produce clean, precise CAD-style linework showing accurate sections and elevations, including walls, floors, roof structure, foundations, and openings. Use consistent line weights, dashed lines for hidden elements, and standard architectural symbols. Add dimensions, level markers, section cuts, and material callouts where appropriate. No shading, no textures, no colors, no people, no landscape. White background. The result should look like a professional construction document or permit drawing sheet, highly accurate and technical.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `3.` at line start.

**analyst_notes:** `Broader scope than prompts 1 and 2 — this targets full construction documents with sections, dimensions, and callouts, not just a single elevation. Different output type despite sharing the elevation/CAD subject. Begins with "Turn an architecture photo into a technical architectural drawing in this style." — the phrase "in this style" implies a reference style image should be provided as input alongside the photo, though none is described in the text. Flag this during normalization.`

---

## Source file: `PhotoPlan to Isometric Diagram.txt`

**total_prompts_in_source:** 5
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 5

**raw_id:** `photoplan-to-isometric-diagram--01`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**source_record_index:** `1 of 5`

**visible_title_or_topic:** `PhotoPlan to Isometric Diagram` (from filename)

**prompt_text:**
> Turn this building into a clean 3D axonometric illustration. Remove all background elements—keep only the main structure of the building. Add a minimal square base underneath the building to ground the composition. Use crisp lines, soft shadows, and subtle textures to emphasize form and depth. The overall style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `1.` at line start.

**analyst_notes:** `Input: a photo or image of a building. Output: clean axonometric 3D illustration on a white/minimal background. Subject: single building isolation and diagrammatic rendering.`

---

### Record 2 of 5

**raw_id:** `photoplan-to-isometric-diagram--02`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**source_record_index:** `2 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Create an axonometric architectural program diagram using color-coded 3D blocks to represent spatial functions. Divide the building volume into stacked or interlocking bars, with each bar labeled by its program (e.g., "Retail", "Office", "Hotel", "Residential"). Overlay bold transparent typography directly inside each volume. Use bright, high-contrast colors for each function type. Show a second diagram next to the first, highlighting programmatic voids such as "Garden", "Culture", and "Passage", carved out of the same volume. Maintain clean linework, minimal black outlines, no shadows, and a white background. Style it in a conceptual, academic architecture diagram format, ideal for presentations or publications.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `2.` at line start.

**analyst_notes:** `Conceptual program diagram — more abstract/diagrammatic than record 1. Requests two diagrams in one output (solid + voided version). Uses example program labels in parentheses. Academic/competition presentation style.`

---

### Record 3 of 5

**raw_id:** `photoplan-to-isometric-diagram--03`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**source_record_index:** `3 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Turn this landscape plan for a residential community in Barcelona into a clean 3D axonometric diagram. Remove all surrounding elements—keep only the main structure of the building and landscape. Add a minimal square base underneath the building to ground the composition. Use thin lines, soft shadows, and subtle textures to emphasize form and depth. The overall style should be clean, architectural, and diagrammatic, suitable for presentation or portfolio use.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `3.` at line start.

**analyst_notes:** `Nearly identical structure to record 1, but input is a landscape plan (not a building photo) and site context is Barcelona. Strong variant candidate with record 1 — same output type and style, different input type. Also cross-references the same "Barcelona residential community" mentioned in From Plan to Bird's-eye prompt 1 — may be from the same project example.`

---

### Record 4 of 5

**raw_id:** `photoplan-to-isometric-diagram--04`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**source_record_index:** `4 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Convert the 2D architectural plan into a 3D isometric diagram with realistic textures. Extrude the building footprints into detailed structures, apply realistic facade materials like brick, concrete, wood, or glass. Add roofs, windows, and doors accurately based on the plan. Use soft natural lighting, shadows, and a clean white background to emphasize depth and clarity. Include textured landscape elements such as grass, pavement, and trees to represent the surrounding context. Present the entire model in a clean, angled isometric view, suitable for design presentation or competition boards.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `4.` at line start.

**analyst_notes:** `More detailed and textured than records 1 and 3 — adds realistic facade materials, landscape, and structural detail. Input is a 2D architectural plan. Output is a realistic-textured 3D isometric. Variant candidate with records 1 and 3.`

---

### Record 5 of 5

**raw_id:** `photoplan-to-isometric-diagram--05`

**source_filename:** `PhotoPlan to Isometric Diagram.txt`

**source_record_index:** `5 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Create a 3D isometric diagram of my apartment based on the provided floor plan. Show walls, rooms, furniture, and major interior elements in a clean, diagrammatic style. White Background.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `5.` at line start.

**analyst_notes:** `Shortest prompt in this file. Interior apartment scale, not building or masterplan scale. Very minimal instructions — clean diagrammatic style only. Variant candidate with records 1, 3, 4 (all isometric from plan), but at apartment/interior scale.`

---

## Source file: `Plan to CAD.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `plan-to-cad--01`

**source_filename:** `Plan to CAD.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Plan to CAD` (from filename)

**prompt_text:**
> Convert this hand-drawn landscape site plan into a precise technical CAD drawing style. Use single-layer thin lines throughout with clear, uniform line weights. Remove all sketch textures, shading, and hatching. Keep only clean vector-style outlines for paths, planting beds, lawns, curbs, ROW, and building footprints. For all trees, replace detailed sketch symbols with simple line circles of appropriate size to represent canopy outlines. Shrubs can be shown as smaller circles or ovals. The result should be professional, minimal, and ready for CAD or Illustrator editing, with accurate linework and no shading.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Input: hand-drawn landscape site plan. Output: clean CAD-style linework. Specific CAD conventions described: single-layer, uniform line weights, circle symbols for trees. Mentions Illustrator as an alternative output target. Related to photo-to-elevation prompts in output type but different input (hand-drawn plan vs. photo).`

---

## Source file: `Rendering to Illustration.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `rendering-to-illustration--01`

**source_filename:** `Rendering to Illustration.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Rendering to Illustration` (from filename)

**prompt_text:**
> Create a minimalist architectural line-drawing rendering in a clean competition-style illustration. Render the building using thin, precise black or dark-gray linework only, with no color fills, no textures, and no photorealistic shading. Clearly express façade grids, structural rhythm, and floor articulation through consistent line weights. Use subtle line layering to indicate depth between foreground, midground, and background buildings. Depict the sky using horizontal hatch lines to create a calm atmospheric backdrop. Draw trees, landscape, and ground surfaces with lighter, softer outlines so they remain secondary to the architecture. Add minimal human figures and birds as simple contour silhouettes for scale. Keep the overall composition clean, balanced, and quiet, with a white background and a refined architectural drawing aesthetic suitable for competitions or academic presentations.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Input: a rendering or building image. Output: architectural line-drawing illustration in competition style. Detailed description of line weights, entourage style, and sky treatment. No matched image file was found for this prompt in source/website_images — noted in source inventory docs.`

---

## Source file: `Retexture prompt.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_label:** `Prompt:` (label prefix, stripped from prompt_text)
**source_notes:** null
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `retexture-prompt--01`

**source_filename:** `Retexture prompt.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Retexture` (from filename)

**prompt_text:**
> Replace the building facade in the original photo with the facade texture shown in image 2. Maintain the same perspective and lighting. Match the new texture naturally onto the building, ensuring it blends realistically with the structure, shadows, and surrounding context.

**non_prompt_content:**
- **type:** `source_label` — `Prompt:` (prefix stripped from prompt_text)

**split_uncertainty:** `false`

**analyst_notes:** `Multi-image input prompt — requires two images: the original building photo and a reference texture image ("image 2"). The prompt relies on a specific two-image input convention. Short and direct.`

---

## Source file: `Section to 3D.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `section-to-3d--01`

**source_filename:** `Section to 3D.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Section to 3D` (from filename)

**prompt_text:**
> Convert the landscape section drawing into a 3D isometric diagram. Maintain the original spatial layout and design elements, but reinterpret them in three dimensions. Include elevation changes, plantings, paving, seating areas, and structural elements as layered isometric forms. Use soft textures for grass, trees, and hardscape surfaces. Represent vegetation with clean cutout trees and shrubs in plan-view or stylized 3D. Use clean white outlines and soft shadows to give depth. The style should be realistic texture, diagrammatic, and clear—suitable for a landscape architecture presentation.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Input: a landscape section drawing. Output: 3D isometric diagram. Landscape-specific prompt — references plantings, paving, seating areas, and elevation changes. Variant candidate with PhotoPlan to Isometric Diagram records (same 3D isometric output style, different input type: section vs. plan).`

---

## Source file: `Trace Google Aerial Photo.txt`

**total_prompts_in_source:** 1
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 1

**raw_id:** `trace-google-aerial-photo--01`

**source_filename:** `Trace Google Aerial Photo.txt`

**source_record_index:** `1 of 1`

**visible_title_or_topic:** `Trace Google Aerial Photo` (from filename)

**prompt_text:**
> Based on the provided satellite image, generate a stylized and accurate outline map. Represent buildings as solid dark or black shapes with clean edges, roads as thin white lines or paths, and green areas (parks, lawns, vegetation) as solid green color blocks. Maintain realistic scale and proportions, and preserve the layout and spatial relationships from the satellite image. The overall composition should be minimal, clean, and suitable for urban or architectural site analysis — top-down view, flat graphic style, high contrast, and presentation-ready.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Input: satellite/aerial image. Output: stylized urban analysis map. Flat graphic style — not a 3D or photorealistic output. Specific visual conventions: black building footprints, white roads, solid green vegetation. Urban planning / site analysis use case.`

---

## Source file: `model to rendering prompts.txt`

**total_prompts_in_source:** 2
**intro_text:** null
**source_notes:** null
**tool_references:** null

---

### Record 1 of 2

**raw_id:** `model-to-rendering-prompts--01`

**source_filename:** `model to rendering prompts.txt`

**source_record_index:** `1 of 2`

**visible_title_or_topic:** `Model to Rendering` (from filename)

**prompt_text:**
> Turn this SketchUp model into a photorealistic architectural rendering. Preserve the original perspective and building proportions. Apply realistic facade materials—especially glass curtain walls for the tall buildings. Use natural daylight with soft shadows to enhance depth. Add subtle landscaping, street details, people, and environmental context to bring the scene to life. Clean, high-quality professional visualization style, suitable for urban design presentations. surrounding urban environment and green space are added to achieve a photo-realistic texture.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `1.` at line start.

**analyst_notes:** `Input: SketchUp model. Output: photorealistic rendering. Explicitly references SketchUp by name — the only prompt in the dataset to name a specific 3D modelling tool as the input source. The final sentence "surrounding urban environment and green space are added to achieve a photo-realistic texture." is grammatically inconsistent with the rest — appears to be a note or continuation fragment rather than an instruction. Preserved verbatim.`

---

### Record 2 of 2

**raw_id:** `model-to-rendering-prompts--02`

**source_filename:** `model to rendering prompts.txt`

**source_record_index:** `2 of 2`

**visible_title_or_topic:** `null`

**prompt_text:**
> Convert this landscape design model into a photorealistic rendering. Maintain the original perspective and layout. Use light-textured concrete paving for all paths and stairs. Apply realistic planting materials with natural grasses, native shrubs, and mature trees. The stairway leads to an upper-level plaza with clean, minimal design. Include subtle shadows, soft natural daylight, and light human activity. Overall style is modern, calm, and professionally landscaped.

**non_prompt_content:** null

**split_uncertainty:** `false` — boundary is explicit number `2.` at line start.

**analyst_notes:** `Input: a landscape design model. Output: photorealistic rendering. Landscape/exterior focus, different from record 1 which is urban/architectural. Specific elements: concrete paving, stairway to upper-level plaza. Variant candidate with record 1 — both are model-to-photorealistic-render, different subjects (urban building vs. landscape). `

---

## Source file: `sketch to image prompts.txt`

**total_prompts_in_source:** 5
*(Full records already documented in `data/raw/website-trial-split-records.md`. Reproduced here for completeness.)*

---

### Record 1 of 5

**raw_id:** `sketch-to-image-prompts--01`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `1 of 5`

**visible_title_or_topic:** `Sketch to Image`

**prompt_text:**
> Based on this architectural sketch, generate a realistic 3D rendering of a modern architecture building. Apply daylight conditions with natural shadows and reflective materials. The final image should resemble a professional visualization in the style of MIR renderings — cinematic, detailed, and photorealistic.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Subject: modern building exterior. References MIR renderings by name.`

---

### Record 2 of 5

**raw_id:** `sketch-to-image-prompts--02`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `2 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Color this black-and-white landscape plan in a hand-rendered style. Use soft watercolor textures combined with vivid marker strokes. Emphasize plant areas with layered green tones, hardscape with warm grays, and water features with translucent blue washes. Maintain a clean, architectural layout while showcasing a vibrant, artistic look.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Landscape plan coloring prompt. Output: hand-rendered artistic style. Variant candidate with record 3 (both are landscape plans, different output styles).`

---

### Record 3 of 5

**raw_id:** `sketch-to-image-prompts--03`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `3 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Convert this hand-drawn landscape design into a clean, professional top-down landscape architecture plan. Retain the original layout and spatial composition, but enhance it with accurate linework, consistent geometry, and digital textures. Apply realistic plant symbols, soft green lawn textures, top-view trees and shrubs, and clean paving patterns. Use a modern landscape graphics style with clear zone differentiation, muted tones, and professional color palette. Remove sketchy lines and noise — the final rendering should look polished and presentation-ready for a landscape architecture portfolio or competition board.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Landscape plan cleaning/digitizing prompt. Variant candidate with record 2.`

---

### Record 4 of 5

**raw_id:** `sketch-to-image-prompts--04`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `4 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> Render my sketch of a modern house and backyard. The facade uses smooth white stucco and dark aluminum panels. The backyard is landscaped with native California plants. Realistic materials, natural daylight, soft shadows, clean modern style.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Modern residential exterior. California-specific material reference. Shortest prompt in this file.`

---

### Record 5 of 5

**raw_id:** `sketch-to-image-prompts--05`

**source_filename:** `sketch to image prompts.txt`

**source_record_index:** `5 of 5`

**visible_title_or_topic:** `null`

**prompt_text:**
> A modern minimalist living room with a high ceiling in perspective view. White walls, clean lines, and soft natural light. The space features sleek contemporary furniture, large windows, and a Wood slat ceiling ceiling. Calm, airy atmosphere with neutral tones and subtle textures. Architectural visualization style.

**non_prompt_content:** null

**split_uncertainty:** `false`

**analyst_notes:** `Interior prompt. "Wood slat ceiling ceiling" — word duplication preserved verbatim. May be text-to-image (no input image referenced in text).`

---

## Flagged records summary

| raw_id | Flag | Reason |
|---|---|---|
| `change-season-or-atmosphere-prompt--02` | `split_uncertainty: true` | Prompt text is only "To autumn" — possibly a shorthand variant, stub, or context-dependent follow-up |
| `from-plan-to-birds-eye-and-perspective-prompt--02` | `split_uncertainty: true` | Begins with "Good," — conversational continuation prompt, context-dependent |
| `photo-to-elevation-or-cad--01` | `split_uncertainty: true` | Only 6 words — possibly a minimal working prompt or truncated text |
| `photo-to-elevation-or-cad--03` | analyst note | "in this style" implies a reference image input that is not described |
| `from-plan-to-birds-eye-and-perspective-prompt--03` | analyst note | Interior rendering prompt grouped in an exterior/bird's-eye file — possible miscategorization |
| `model-to-rendering-prompts--01` | analyst note | Final sentence is grammatically inconsistent — possible note fragment, preserved verbatim |
