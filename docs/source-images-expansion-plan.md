# Source/Images Expansion Plan

Basis: visual analysis of all 71 screenshots in `source/images/`
Previously analyzed: images 01–15 (`batch-01-image-records.md`)
Newly analyzed: images 16–71 (this session)
Date: 2026-04-11

---

## Summary counts

| Action | Count |
|---|---|
| **Proposed new cards** | **23** |
| **Proposed variants of existing card** | **6** |
| **Proposed additional examples for existing card** | **25** |
| **Unclear / manual review** | **4** |

**Total items classified: 58** (some images grouped as a single item when they form a coherent series)

---

## Section 1 — Proposed new cards

Items with no equivalent in the current 29-record MVP dataset.

---

### NEW-01 — Lifestyle Addition to Architecture

**Source images:**
- `צילום מסך 2026-04-08 123908.png` (Balcony Conversation)
- `צילום מסך 2026-04-08 123940.png` (Children in Garden)
- `צילום מסך 2026-04-08 124004.png` (Car Wash Morning)
- `צילום מסך 2026-04-08 124012.png` (Children in Carport)
- `צילום מסך 2026-04-08 124036.png` (Rainy Night Arrival)

**Proposed action:** new_card (variant group with 5 tabs)

**Related existing record:** none

**Proposed title:** Add Lifestyle Scene to Architecture Photo

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** Lifestyle / People Addition

**Reason:** These 5 images form a numbered Indonesian-language series (1–5) using an identical prompt structure: "Architectural lifestyle photography" applied to a real building reference photo to add human activity. Each variant adds a different scene type. No equivalent prompt exists in the website records. The transformation type — inserting a staged lifestyle vignette into an existing building photograph — is entirely distinct from any current card.

**Uncertainty notes:**
- Prompt text is partially legible only — screenshot resolution is insufficient for verbatim extraction. Full prompt text requires a higher-resolution source or manual transcription.
- Prompts are in Indonesian. English translation will be needed for the library.
- Category is inferred; no UI label visible.
- Variant relationship is inferred from visible numbered sequence and identical layout — not confirmed from the text itself.

---

### NEW-02 — Day to Night Interior Transformation

**Source images:**
- `צילום מסך 2026-04-08 124101.png`

**Proposed action:** new_card

**Related existing record:** Superficially adjacent to `NB-WEB-change-season-01` (seasonal atmosphere change), but that prompt targets exterior scenes and seasons. This prompt is specific to interior day-to-night lighting conversion.

**Proposed title:** Day to Night — Interior Lighting Transformation

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** Day / Night Conversion

**Reason:** Prompt reads: "Convert this interior daytime image into a realistic night view. Reduce natural daylight, introduce warm artificial lighting (ceiling lights, wall lights, lamps, and soft glow and reflections), enhance shadows and depth, and maintain realistic materials and textures for a cozy, photorealistic night interior." This is a distinct and complete prompt. The transformation type (interior lighting state change) is not covered by any website record.

**Uncertainty notes:**
- Prompt text may be partially cut off at the bottom of the screenshot; the visible portion is largely readable.
- Category assigned as Post-processing; could also fit Renderings (interior).

---

### NEW-03 — Image to Design / Presentation Board

**Source images:**
- `צילום מסך 2026-04-08 124110.png` (Interior photo → design board)
- `צילום מסך 2026-04-08 124152.png` (3D render → architectural concept sheet)
- `צילום מסך 2026-04-08 124235.png` (Bathroom render → design board)
- `צילום מסך 2026-04-08 124253.png` (Interior render → architectural process board)

**Proposed action:** new_card (variant group with 4 tabs)

**Related existing record:** None. `NB-WEB-multi-elements-01` composes multiple input images into a rendering — the output type here is the opposite: a structured presentation document, not a rendering.

**Proposed title:** Image to Architectural Presentation Board

**Proposed category:** Other tools and workflows

**Proposed subcategory:** Presentation / Documentation Output

**Reason:** All four images show the same workflow class: a single image (interior photo, 3D render, or bathroom render) is transformed into a multi-panel architectural presentation sheet with layout, elevations, material swatches, and design text. They share the same output type (documentation board) but differ in input type and presentation format. Four distinct variants are visible:
- Tab 1 `Interior Photo → Design Board` (image 124110)
- Tab 2 `Render → Concept Sheet` (image 124152)
- Tab 3 `Bathroom → Design Board` (image 124235)
- Tab 4 `Render → Process Board` (image 124253)

**Uncertainty notes:**
- Prompt text is partially legible or cut off in all four images. Verbatim extraction requires higher resolution.
- The 4-tab grouping is inferred from shared output type — the portal may treat these as separate cards.
- Image 124259 (Architectural concept sheet from exterior building photo) is also adjacent but classified separately as additional_example (see Section 3).

---

### NEW-04 — Image to Sketch / Line Drawing

**Source images:**
- `צילום מסך 2026-04-08 124248.png`

**Proposed action:** new_card

**Related existing record:** Inverse of `NB-WEB-render-to-illustration-01` (render → illustration), but this prompt converts a photorealistic interior rendering to a hand sketch / architectural line drawing. Similar output intent but potentially different prompt and input type.

**Proposed title:** Image to Sketch / Architectural Line Drawing

**Proposed category:** Illustrations

**Proposed subcategory:** Architectural Sketch Conversion

**Reason:** Titled "3. Image to Sketch" — converts a photorealistic interior bedroom rendering to a line sketch or architectural drawing. This reverse-direction workflow (photo/render → drawing) is not covered by any current card. `NB-WEB-render-to-illustration-01` targets a similar output but with a competition-style illustration framing.

**Uncertainty notes:**
- Prompt text visible but small; may be partially cut off.
- Potential overlap with `NB-WEB-render-to-illustration-01` — requires side-by-side prompt comparison before final decision. If the prompts are nearly identical, merge as a variant rather than a new card.

---

### NEW-05 — Furniture to Technical Documentation Sheet

**Source images:**
- `צילום מסך 2026-04-08 124306.png` (Furniture design → technical sheet)
- `צילום מסך 2026-04-08 124440.png` (Furniture photo → technical drawings with specs)

**Proposed action:** new_card (2 variants: Design Sheet, Technical Drawing)

**Related existing record:** None.

**Proposed title:** Furniture to Technical Documentation

**Proposed category:** Other tools and workflows

**Proposed subcategory:** Furniture / Product Documentation

**Reason:** Both images show a workflow where a rendered or photographed furniture piece is transformed into a technical specification document with drawings, dimensions, and material callouts. This is a highly specific output type not covered by any current record. The two images differ in input type (designed render vs. product photo) and output detail level.

**Uncertainty notes:**
- Prompt text partially legible in both images. May require higher resolution to extract verbatim.
- Category could also fit Sections or Plans if the architectural documentation angle is dominant.

---

### NEW-06 — Interior Reference to Photorealistic Render — Golden Hour

**Source images:**
- `צילום מסך 2026-04-08 124213.png`

**Proposed action:** new_card

**Related existing record:** Adjacent to `NB-WEB-sketch-to-image-05` (sketch to interior render), but this prompt explicitly targets an interior with a golden-hour lighting treatment rather than a sketch-to-render workflow. Input appears to be a reference image or rough render rather than a hand-drawn sketch.

**Proposed title:** Interior Reference to Photorealistic Render — Golden Hour

**Proposed category:** Renderings

**Proposed subcategory:** Interior Render

**Reason:** Titled in the batch as an untitled render (Record 14). Prompt: "Transform the interior into a photorealistic living room with golden hour lighting, featuring warm sunlight entering through the windows, natural materials, and a sophisticated atmosphere, maintaining the double-height ceiling." This is a distinct interior render prompt with a specific lighting brief. The double-height ceiling mention is a specific architectural qualifier.

**Uncertainty notes:**
- Prompt text may be cut off. Visible portion is largely readable.
- Could be reclassified as a variant of a broader "interior rendering" group if additional interior render prompts are extracted from the unlabeled series (124557–124710).

---

### NEW-07 — Image to Information / Furniture List

**Source images:**
- `צילום מסך 2026-04-08 124407.png`

**Proposed action:** new_card

**Related existing record:** None.

**Proposed title:** Image to Furniture and Materials Information List

**Proposed category:** Other tools and workflows

**Proposed subcategory:** Content Extraction / Data Output

**Reason:** Titled "03. Information List" — converts an interior design photograph into a structured list or spreadsheet of furniture items, materials, and specifications. This is a data-extraction output type, entirely unlike any rendering or drawing workflow in the current dataset.

**Uncertainty notes:**
- Prompt text partially legible. The precise extraction logic in the prompt is not fully readable.
- This is a niche workflow. Verify the prompt is specific enough to be useful as a standalone library card.

---

### NEW-08 — Building Renovation / Exterior Redesign

**Source images:**
- `צילום מסך 2026-04-08 124412.png`

**Proposed action:** new_card

**Related existing record:** `NB-WEB-retexture-01` replaces facade materials only. This card appears to involve a broader redesign or renovation of the building's exterior appearance — more than a material swap.

**Proposed title:** Exterior Building Renovation / Redesign

**Proposed category:** Renderings

**Proposed subcategory:** Exterior Render — Renovation

**Reason:** Titled "04. Renovation" — shows an architectural exterior before/after a renovation transformation. The output is a contemporary update to the existing building, which goes beyond the material retexture of `NB-WEB-retexture-01`.

**Uncertainty notes:**
- Prompt text partially legible. Unclear whether the brief is "replace materials" (which would make this a variant of retexture) or "redesign the facade form." Decision pending full prompt extraction.
- If prompt is primarily about material/style replacement, reclassify as variant_of_existing (`NB-WEB-retexture-01`).

---

### NEW-09 — Executive / Simplified Floor Plan Rendering

**Source images:**
- `צילום מסך 2026-04-08 124424.png`

**Proposed action:** new_card

**Related existing record:** None. The planView and photoplan-isometric groups produce 3D views and birds-eye renders. This card targets a simplified, executive-level presentation format integrating floor plan and render.

**Proposed title:** Interior to Executive Rendering

**Proposed category:** Plans

**Proposed subcategory:** Executive / Presentation Floor Plan

**Reason:** Titled "01. Executive Rendering" — converts an interior space photograph into a simplified combined presentation showing a floor plan overlay with a rendering. The output is executive-level (simplified, clean, presentation-ready) rather than fully photorealistic. No equivalent in current records.

**Uncertainty notes:**
- Prompt text partially legible. Category assignment is tentative — output could also fit under Renderings.
- If prompt is primarily about creating a rendered floor plan, may overlap with photoplan-isometric or planView groups. Requires full prompt comparison.

---

### NEW-10 — Object / Furniture Replacement

**Source images:**
- `צילום מסך 2026-04-08 124446.png`
- `צילום מסך 2026-04-08 124452.png` (carousel continuation, same prompt)

**Proposed action:** new_card

**Related existing record:** None. `NB-WEB-retexture-01` changes facade materials. This card specifically replaces objects (furniture, fixtures) within an existing interior rendering.

**Proposed title:** Object and Furniture Replacement in Interior

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** Object / Furniture Replacement

**Reason:** Titled "04. Object Replacement" — replaces furniture or objects within an existing interior space while maintaining the architectural shell, lighting, and materials. This is a specific editing workflow with no equivalent in current records.

**Uncertainty notes:**
- 124452 appears to be a carousel continuation of the same card (additional output views). Not a separate prompt.
- Prompt text partially legible.

---

### NEW-11 — Floor Plan to Section

**Source images:**
- `צילום מסך 2026-04-08 124503.png`

**Proposed action:** new_card

**Related existing record:** `NB-WEB-section-3d-01` converts a section drawing into a 3D isometric diagram — the opposite direction. This card converts a floor plan into a photorealistic section drawing.

**Proposed title:** Floor Plan to Photorealistic Section

**Proposed category:** Sections

**Proposed subcategory:** Plan to Section Conversion

**Reason:** Titled "05. Plan to Section" — prompt reads "Transform the floor plan into a photorealistic section, capturing the spatial depth, material textures, lighting, furniture, and accurate representation..." This is a cross-category transformation (plan → section drawing) not covered by any current record, and it targets the Sections category which currently has only one record.

**Uncertainty notes:**
- Prompt text partially legible; complete text may be cut off.
- Whether output is a technical section drawing or a photorealistic rendered section needs confirmation.

---

### NEW-12 — Change Interior Colors and Palette

**Source images:**
- `צילום מסך 2026-04-08 124525.png` (Change Colors)
- `צילום מסך 2026-04-08 125206.png` (New Decoration Styles)

**Proposed action:** new_card (2 variants)

**Related existing record:** None.

**Proposed title:** Change Interior Colors / Decoration Style

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** Interior Color / Style Transformation

**Reason:** 124525 ("02. Change Colors") changes interior furniture colors and accessories to a new palette while maintaining the same architectural shell. 125206 ("04. New Decoration Styles") adds decorative elements and changes furniture styling similarly. Both target the same transformation type: interior aesthetic restyling without structural change. No equivalent exists in current records.

**Uncertainty notes:**
- Prompt text partially legible in both images.
- Relationship between these two prompts is inferred from shared output type. The exact prompts may be different enough to warrant separate cards.

---

### NEW-13 — Change Exterior Landscaping

**Source images:**
- `צילום מסך 2026-04-08 124531.png`

**Proposed action:** new_card

**Related existing record:** None. `NB-WEB-retexture-01` changes the facade material; this changes the landscaping and garden surrounding the building.

**Proposed title:** Transform Exterior Landscaping

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** Landscaping Transformation

**Reason:** Titled "03. Change Landscaping" — prompt: "Transform the front garden into a photorealistic garden design with landscaping, plants, shrubs, water features, architectural elements, and natural..." This targets a specific and distinct editing task: replacing or upgrading the garden and landscape surrounding an existing architectural render.

**Uncertainty notes:**
- Prompt text cut off. Full brief not readable.
- Could also fit Landscape category. Final category depends on whether landscaping is the subject or the setting.

---

### NEW-14 — Interior Style Transformation Series

**Source images:**
- `צילום מסך 2026-04-08 124721.png` (Scandinavian)
- `צילום מסך 2026-04-08 124726.png` (Casual Design)
- `צילום מסך 2026-04-08 124731.png` (Tropical / "Boil Tropical")
- `צילום מסך 2026-04-08 124737.png` (Art Deco)
- `צילום מסך 2026-04-08 124743.png` (Bohemian Design)

**Proposed action:** new_card (variant group with 5 tabs)

**Related existing record:** None.

**Proposed title:** Interior Style Transformation

**Proposed category:** Renderings

**Proposed subcategory:** Interior Render — Style Application

**Reason:** These 5 images form a clearly labeled series ("Type1 | Scandinavian", "Type1 | Casual Design", etc.) where the same neutral interior space is restyled into five different interior design styles. Each card presents a thumbnail of the neutral input alongside a full-panel output in the target style, with a descriptive prompt. The output is a photorealistic interior render in a new style. No equivalent series exists in the current dataset. The variant group structure is explicit — they share the same input room and the same transformation type.

**Uncertainty notes:**
- The label "Type1" suggests this may be the first in a multi-type series (Type2, Type3, etc.) that was not captured in these screenshots. The remaining style types, if they exist, are not present in this image pool.
- Prompt text is descriptive (style descriptions), not verbatim prompt commands. Whether these are fill-in-token prompts (e.g. "[style name] interior...") or fully written-out prompts needs confirmation.
- Category could also be Post-processing if framed as "restyling an existing render."

---

### NEW-15 — Urban Clay Context Render

**Source images:**
- `צילום מסך 2026-04-08 125030.png`

**Proposed action:** new_card

**Related existing record:** `NB-WEB-trace-aerial-01` traces a satellite image into a stylized map. This card is distinct — it produces an isometric urban planning clay model visualization with massing context.

**Proposed title:** Urban Clay Context Render

**Proposed category:** Urban Planning

**Proposed subcategory:** Urban Massing / Context Model

**Reason:** Titled "2. Urban Clay Context Render" — shows an isometric clay-style urban massing model with simplified building volumes in a site context. This is a common urban design visualization technique (white-model / clay model rendering) not covered in any current record. The full urban planning numbered series (items 1–10 in this section, spanning images 125023–125112) is entirely new territory for the library.

**Uncertainty notes:**
- Prompt text partially legible at the panel size.
- This and the next several urban planning cards (NEW-16 to NEW-22) form a numbered sequence and may share structural elements in their prompts.

---

### NEW-16 — Urban Axonometric Analytical View

**Source images:**
- `צילום מסך 2026-04-08 125034.png`

**Proposed action:** new_card

**Related existing record:** `NB-WEB-photoplan-isometric-01` (building photo to clean axonometric) is related but is a building-level diagram. This card targets an urban-scale axonometric with color-coded analytical zones.

**Proposed title:** Urban Axonometric Analytical View

**Proposed category:** Urban Planning

**Proposed subcategory:** Urban Analysis / Site Diagram

**Reason:** Titled "3. Urban Axonometric Analytical View" — produces an isometric urban plan with color-coded zones for program, land use, or density analysis. The analytical color-coding and urban scale distinguish this from the building-level isometric diagrams in the existing photoplan-isometric group.

**Uncertainty notes:**
- Prompt text visible but small.

---

### NEW-17 — Urban Porosity Diagram

**Source images:**
- `צילום מסך 2026-04-08 125040.png`

**Proposed action:** new_card

**Related existing record:** None.

**Proposed title:** Urban Porosity / Pedestrian Permeability Diagram

**Proposed category:** Urban Planning

**Proposed subcategory:** Urban Analysis / Permeability

**Reason:** Titled "4. Urban Porosity Diagram" with subtitle "Visualizing Urban Porosity: Pedestrian Permeability." Prompt is the most fully legible of the urban series: "Visualize urban porosity using semi-transparent building masses. Highlight pedestrian permeability in soft red overlays. Streets remain neutral. Clean axonometric view. No perspective distortion." This is a specialized urban analysis visualization type with a complete, extractable prompt.

**Uncertainty notes:**
- Prompt appears to be fully legible — this is one of the highest-confidence new cards in the set.
- Category: Urban Planning is certain.

---

### NEW-18 — Section through Urban Corridor

**Source images:**
- `צילום מסך 2026-04-08 125045.png`

**Proposed action:** new_card

**Related existing record:** `NB-WEB-section-3d-01` is a building-level section converted to a 3D isometric. This card is a cross-sectional view at urban scale, showing multiple building profiles and street design together.

**Proposed title:** Section through Urban Corridor

**Proposed category:** Sections

**Proposed subcategory:** Urban Section — Street Scale

**Reason:** Titled "5. Section through Urban Corridor" — an illustrated architectural section at urban scale, showing building profiles, ground-level activity, and street section dimensions. The scale (city block, street profile) places this in a different category from the existing section-3d record.

**Uncertainty notes:**
- Prompt text partially legible.
- Dual-category: fits both Sections and Urban Planning. Filed under Sections with `urban-planning` tag recommended.

---

### NEW-19 — Exploded Axonometric View

**Source images:**
- `צילום מסך 2026-04-08 125050.png`

**Proposed action:** new_card

**Related existing record:** None. Photoplan-isometric group produces plan-view isometrics; this is an exploded diagram showing building systems and spatial layers.

**Proposed title:** Exploded Axonometric / Building Systems Diagram

**Proposed category:** 3D

**Proposed subcategory:** Exploded Diagram / Technical Visualization

**Reason:** Titled "6. Exploded Axonometric View" — an exploded isometric diagram separating structural, spatial, and systems layers of a building. This is a standard architectural diagramming technique used in competition presentations and design documentation. No equivalent exists in the current dataset.

**Uncertainty notes:**
- Prompt text partially legible.
- Could fit Urban Planning if the diagram is at urban scale, or 3D if building-scale. Based on the visible output (building components), 3D is the better primary category.

---

### NEW-20 — Urban Plaza Activation Scene

**Source images:**
- `צילום מסך 2026-04-08 125056.png`

**Proposed action:** new_card

**Related existing record:** None. `NB-WEB-model-rendering-01` (SketchUp model to exterior render) produces a photorealistic building render, but this card specifically targets an animated, people-populated urban public space.

**Proposed title:** Urban Plaza Activation Scene

**Proposed category:** Urban Planning

**Proposed subcategory:** Urban Activation / Public Space Rendering

**Reason:** Titled "7. Urban Plaza Activation Scene" — a photorealistic rendering of an urban plaza showing building facades, urban furniture, and pedestrian activity. The focus on human-scale street life and activated public space is distinct from any existing card.

**Uncertainty notes:**
- Prompt text partially legible.
- Adjacent to NEW-01 (Lifestyle Addition to Architecture) in spirit — both add people to architectural scenes — but this targets a full urban composition rather than a specific building photo.

---

### NEW-21 — Transit Oriented Development Context

**Source images:**
- `צילום מסך 2026-04-08 125101.png`

**Proposed action:** new_card

**Related existing record:** None.

**Proposed title:** Transit-Oriented Development Rendering

**Proposed category:** Urban Planning

**Proposed subcategory:** Urban Mobility / TOD Visualization

**Reason:** Titled "8. Transit Oriented Development Context" — prompt includes: "Create a photorealistic urban rendering near a metro or transit hub. Include station entrance, pedestrian flow, bicycles, urban furniture, and planted medians. Balanced daylight with crisp shadows and realistic pavement textures. The proposal should integrate seamlessly into the active mobility environment." This is among the most fully legible prompts in the urban series and addresses a specific urban design context (transit hub integration) not covered elsewhere.

**Uncertainty notes:**
- Prompt is substantially legible — reasonably high confidence.
- This is an urban-scale exterior rendering with a mobility focus. Could alternatively file under Renderings with an `urban-planning` tag.

---

### NEW-22 — Urban Sectional Illustration

**Source images:**
- `צילום מסך 2026-04-08 125112.png`

**Proposed action:** new_card

**Related existing record:** `NB-WEB-render-to-illustration-01` produces an illustration from a rendering; `NB-WEB-section-3d-01` converts a section to a 3D isometric. This card targets a hand-drawn or illustrated urban section as a standalone output.

**Proposed title:** Urban Sectional Illustration

**Proposed category:** Illustrations

**Proposed subcategory:** Urban Section — Illustrated

**Reason:** Titled "10. Urban Sectional Illustration" — an illustrated cross-section at the urban scale showing building types, street design, and pedestrian experience. The output is illustrative rather than photorealistic, and at urban rather than building scale. This closes the 10-item urban planning series and covers a unique combination of output type (illustration) and scale (urban).

**Uncertainty notes:**
- Prompt text partially legible.
- Dual-category: Illustrations and Urban Planning. Recommended primary: Illustrations with `urban-planning` and `sections` tags.

---

### NEW-23 — Adding People and Entourage to Rendering

**Source images:**
- `צילום מסך 2026-04-08 125146.png`

**Proposed action:** new_card

**Related existing record:** Adjacent to NEW-01 (Lifestyle Addition) and NEW-20 (Urban Plaza Activation), but this prompt targets the specific task of adding realistic human figures and fine-detail entourage to an existing photorealistic architectural rendering for scale.

**Proposed title:** Add People and Entourage to Architectural Rendering

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** Entourage / Scene Population

**Reason:** Titled "01. Adding People and Details" — prompt: "Add more realistic human figures, pedestrians, and fine-detailed elements to establish scale and add human activity to the photorealistic rendering." This is a targeted post-processing operation (adding entourage) applied to an already-rendered image, distinct from re-rendering from scratch.

**Uncertainty notes:**
- Prompt text partially legible.
- Boundary with NEW-01 (Indonesian lifestyle series) is conceptually adjacent but distinct: this prompt populates an existing render with generic entourage, while NEW-01 stages a specific lifestyle narrative in a reference photo.

---

## Section 2 — Proposed variants of existing cards

Items that should extend a card already in the MVP dataset.

---

### VAR-01 — Sketch to Render: Tower (Glass Facade, Vertical Greenery)

**Source images:**
- `צילום מסך 2026-04-08 124152.png`

**Proposed action:** variant_of_existing

**Related existing record:** `sketchExterior` variant group (NB-WEB-sketch-to-image-01, NB-WEB-sketch-to-image-04)

**Proposed title:** Tower — Glass Facade with Vertical Greenery

**Proposed category:** Renderings

**Proposed subcategory:** Exterior Render — Sketch to Render

**Reason:** Prompt: "Transform the sketch into an iconic and imposing photorealistic tower, with a high-end glass facade, lush vertical greenery, dramatic sunset lighting, and a strong urban-scale presence, maintaining the composition." Same structure and transformation type as the existing sketchExterior group. Subject (high-rise tower with vegetation) is distinct from existing tabs (modern building, residential house).

**Uncertainty notes:**
- Prompt text may be partially cut off.
- If the full prompt substantially overlaps with NB-WEB-sketch-to-image-01, demote to additional_example.

---

### VAR-02 — Sketch to Render: Modern Concrete House (Tropical Landscape)

**Source images:**
- `צילום מסך 2026-04-08 124158.png`

**Proposed action:** variant_of_existing

**Related existing record:** `sketchExterior` variant group

**Proposed title:** Concrete House — Tropical Landscaping, Late Afternoon

**Proposed category:** Renderings

**Proposed subcategory:** Exterior Render — Sketch to Render

**Reason:** Prompt: "Transform the sketch into a high-end modern photorealistic house, with clean concrete volumes, large glass surfaces, refined tropical landscaping, and late afternoon lighting, maintaining the composition. 4:5 format." Same pattern as sketchExterior group. The concrete volumes and tropical landscaping combination is distinct from existing tabs.

**Uncertainty notes:**
- Prompt appears substantially legible.
- 4:5 format mention is an output constraint that may be relevant to document.

---

### VAR-03 — Sketch to Render: Tropical Villa with Pool and Brise-Soleil

**Source images:**
- `צילום מסך 2026-04-08 124206.png`

**Proposed action:** variant_of_existing

**Related existing record:** `sketchExterior` variant group

**Proposed title:** Tropical Villa — Brise-Soleil, Pool, Garden Integration

**Proposed category:** Renderings

**Proposed subcategory:** Exterior Render — Sketch to Render

**Reason:** Prompt: "Transform the sketch into a contemporary tropical photorealistic house, with a glass facade, wooden brise-soleil, abundant vegetation, and soft natural lighting, maintaining double-height integration with the garden and pool. 4:5 format." Shares prompt structure with sketchExterior group. The brise-soleil and double-height pool integration are architecturally specific qualifiers worth preserving as a distinct variant.

**Uncertainty notes:**
- Prompt appears substantially legible.

---

### VAR-04 — Sketch to Render: House with Pool (Golden Hour)

**Source images:**
- `צילום מסך 2026-04-08 124221.png`

**Proposed action:** variant_of_existing

**Related existing record:** `sketchExterior` variant group

**Proposed title:** House with Pool — Golden Hour, Water Reflections

**Proposed category:** Renderings

**Proposed subcategory:** Exterior Render — Sketch to Render

**Reason:** Prompt: "Transform the sketch into a modern photorealistic house with a pool, featuring golden hour lighting, soft shadows, realistic vegetation, and natural water reflections, maintaining the same composition. 4:5 format." Same transform type. Pool with golden hour lighting and water reflections is distinct from existing tabs.

**Uncertainty notes:**
- Prompt substantially legible.
- Possible overlap with VAR-03 (also features a pool). Both are worth keeping as distinct prompts given the different lighting brief and composition qualifiers.

---

### VAR-05 — Sketch to Render: Exterior (Natural Setting)

**Source images:**
- `צילום מסך 2026-04-08 124539.png`

**Proposed action:** variant_of_existing

**Related existing record:** `sketchExterior` variant group

**Proposed title:** Exterior Render — Natural Setting, Lush Environment

**Proposed category:** Renderings

**Proposed subcategory:** Exterior Render — Sketch to Render

**Reason:** Titled "04. Sketch to Render" — prompt: "Transform this architectural sketch into a photorealistic 3D render in a natural setting with lush green environment, natural lighting..." Follows the same structural pattern as the existing sketchExterior group. The natural/green setting emphasis is a distinct variant option.

**Uncertainty notes:**
- Prompt text partially legible. Distinct from existing tabs but requires full comparison.

---

### VAR-06 — Create New Camera Angle from Existing Render

**Source images:**
- `צילום מסך 2026-04-08 124545.png`

**Proposed action:** variant_of_existing

**Related existing record:** `NB-WEB-change-view-01` (Change Rendering View)

**Proposed title:** Create New Aerial Angle — Photorealistic Aerial View

**Proposed category:** Post-processing / Results usage

**Proposed subcategory:** View / Camera Angle

**Reason:** Titled "05. Create New Angle" — prompt: "Transform the current view into a photorealistic aerial view of this architectural project..." This is a direct variant of `NB-WEB-change-view-01` (which generates a new perspective from a specified angle). The aerial/birds-eye framing is a distinct tab option that would enrich the change-view card and allow it to become a variant group.

**Uncertainty notes:**
- Prompt partially legible.
- Adding this variant would require converting `NB-WEB-change-view-01` from a standalone card to a variant group — a small structural change.

---

## Section 3 — Proposed additional examples for existing cards

Items where a screenshot provides an image example for an existing record, but does not introduce a new prompt.

---

### ADD-01 — Additional example: Image to Realistic Render (Interior)

**Source images:** `צילום מסך 2026-04-08 124120.png` (Record 08 — "Image to realistic render")

**Related existing record:** Closest match is `NB-WEB-model-rendering-01` or `NB-WEB-sketch-to-image-05` (interior); alternatively a future interior render new card.

**Proposed use:** Serve as a before/after example image for an interior rendering card.

**Uncertainty notes:** The exact prompt from this screenshot should be compared against existing records before assigning. If unique, reclassify as new_card.

---

### ADD-02 — Additional example: CAD Landscape Plan to Rendered Plan

**Source images:** `צילום מסך 2026-04-08 124137.png` (Record 09 — "CAD plan to Render plan")

**Related existing record:** `NB-WEB-plan-to-cad-01` (landscape plan to CAD linework) or `NB-WEB-sketch-to-image-03` (landscape plan to digital render)

**Proposed use:** Before/after image showing a CAD landscape plan rendered to photorealistic top-down view.

**Uncertainty notes:** Prompt from this screenshot goes in the render direction (CAD → rendered plan), while `NB-WEB-plan-to-cad-01` goes the other way (plan → CAD linework). If prompt is directionally different, consider a new card.

---

### ADD-03 — Additional example: CAD Floor Plan to 3D Isometric

**Source images:** `צילום מסך 2026-04-08 124241.png` ("CAD Plan to render Plan" — 2D floor plan → 3D isometric)

**Related existing record:** `NB-WEB-photoplan-isometric-04` (plan to textured isometric) or `NB-WEB-plan-birdeye-01` (plan to birds-eye aerial)

**Proposed use:** Additional before/after image example for the photoplan-isometric group.

**Uncertainty notes:** Prompt may differ from existing records — compare before assigning.

---

### ADD-04 — Additional example: Image to Architectural Concept Sheet (Exterior)

**Source images:** `צילום מסך 2026-04-08 124259.png` (church/cathedral exterior → architectural concept sheet)

**Related existing record:** Part of NEW-03 (Image to Design/Presentation Board). If NEW-03 is created, this is an additional example for that new card.

**Proposed use:** Additional input/output pair for the presentation board variant group.

**Uncertainty notes:** If NEW-03 is not created, this could be folded back into OTHER or manual_review.

---

### ADD-05 — Additional example: Floor Plan to 3D Render (Birds-Eye)

**Source images:** `צילום מסך 2026-04-08 124328.png` (Floor plan → isometric 3D birds-eye render)

**Related existing record:** `NB-WEB-plan-birdeye-01` (plan to birds-eye aerial) or `NB-WEB-photoplan-isometric-04`

**Proposed use:** Additional before/after example showing a floor plan rendered to a 3D perspective.

**Uncertainty notes:** The AutoRender AI branding visible in this image may indicate a different prompt source (AutoRender vs. NanoBanana). Verify context before using as an example image for a NanoBanana prompt card.

---

### ADD-06 — Additional example: Architectural Drawing to Photorealistic Render

**Source images:** `צילום מסך 2026-04-08 124335.png` (sketch/drawing → minimalist concrete house render)

**Related existing record:** `NB-WEB-sketch-to-image-01` or `sketchExterior` variant group

**Proposed use:** Additional input/output example for the sketchExterior group. The AutoRender AI prompt visible is very similar in structure to the existing NanoBanana sketch-to-image prompts.

**Uncertainty notes:** AutoRender AI branding present — this may be a third-party model's prompt. Verify whether the prompt or result is attributable to NanoBanana before including in the library.

---

### ADD-07 — Additional example: Photo to 3D Diagram (Building)

**Source images:** `צילום מסך 2026-04-08 124349.png` ("01. Diagram" — building photo → 3D isometric diagram)

**Related existing record:** `NB-WEB-photoplan-isometric-01` (building photo to clean axonometric)

**Proposed use:** Additional before/after example for the photoplan-isometric group.

**Uncertainty notes:** Prompt partially legible. Confirm the output is the same type as photoplan-isometric-01 before assigning.

---

### ADD-08 — Additional example: Photo to 3D Model Rendering

**Source images:** `צילום מסך 2026-04-08 124356.png` ("02. Model Rendering" — building photo → 3D isometric model)

**Related existing record:** `NB-WEB-photoplan-isometric-01` or `NB-WEB-photo-3d-01`

**Proposed use:** Additional before/after example.

**Uncertainty notes:** Same as ADD-07 — confirm output type.

---

### ADD-09 — Additional example: Technical Floor Plan to Humanized Isometric

**Source images:** `צילום מסך 2026-04-08 124418.png` ("05. Humanized Floor Plan" — technical plan → isometric with furniture and human figures)

**Related existing record:** `NB-WEB-photoplan-isometric-04` (plan to textured isometric) is the closest match, though the "humanized" framing (adding people for scale) may warrant a new tab in the isometric group.

**Proposed use:** Additional example for photoplan-isometric group, or new variant tab within that group.

**Uncertainty notes:** The addition of human figures for scale is a distinguishing brief element. If the prompt is substantially different, promote to variant_of_existing for the isometric group.

---

### ADD-10 — Additional example: 2D Interior Image to 3D Render

**Source images:** `צילום מסך 2026-04-08 124430.png` ("02. 2D to 3D Image")

**Related existing record:** `NB-WEB-model-rendering-01` or future interior render new card.

**Proposed use:** Additional before/after example for a model-rendering or interior render card.

**Uncertainty notes:** Prompt partially legible. May warrant a new card if the "2D image → 3D" framing is structurally distinct.

---

### ADD-11 — Additional example: Realistic Interior Render

**Source images:** `צילום מסך 2026-04-08 124514.png` ("01. Realistic Render" — interior → photorealistic render)

**Related existing record:** `NB-WEB-model-rendering-01` or NEW-06 (Interior Reference to Photorealistic Render).

**Proposed use:** Additional before/after example for an interior rendering card.

**Uncertainty notes:** Prompt partially legible. The living room subject with window light treatment is different from the double-height golden hour interior of NEW-06.

---

### ADD-12 — Additional examples: Unlabeled exterior and interior renders (block)

**Source images (10 images):**
- `צילום מסך 2026-04-08 124557.png` (bedroom interior transformation)
- `צילום מסך 2026-04-08 124605.png` (contemporary pool house exterior)
- `צילום מסך 2026-04-08 124613.png` (urban residential towers exterior)
- `צילום מסך 2026-04-08 124621.png` (bedroom with wooden ceiling)
- `צילום מסך 2026-04-08 124628.png` (contemporary kitchen interior)
- `צילום מסך 2026-04-08 124648.png` (modern courtyard exterior)
- `צילום מסך 2026-04-08 124654.png` (bedroom lounge space)
- `צילום מסך 2026-04-08 124700.png` (modern deck house exterior)
- `צילום מסך 2026-04-08 124705.png` (bedroom with garden integration)
- `צילום מסך 2026-04-08 124710.png` (pool lounge exterior)

**Related existing record:** Split across multiple categories:
- Interior images (124557, 124621, 124628, 124654, 124705) → examples for interior render cards
- Exterior images (124605, 124613, 124648, 124700, 124710) → examples for `sketchExterior`, `modelRender`, or exterior render cards

**Proposed use:** Before/after image examples for existing or proposed rendering cards. Each shows a reference photo (or rough render) transformed into a photorealistic rendering using a "Super realistic render of [description]" prompt structure.

**Uncertainty notes:**
- These 10 images are unlabeled — no numbered title or section heading visible. They appear to belong to a series or carousel without visible navigation context.
- Some prompts follow a "Super realistic render of a contemporary [building type]" pattern that may be a single template prompt applied to different subject inputs. If so, they may all be additional examples of one new template card rather than individual cards.
- Requires full prompt extraction to determine whether a new template card ("Super Realistic Render — Any Subject") is warranted, or whether these are additional examples for existing render cards.
- Kitchen (124628) has no interior render equivalent in current records — may warrant promotion to new_card if the prompt is distinct.

---

### ADD-13 — Additional example: Photorealistic Exterior Rendering (Urban Planning series item 1)

**Source images:** `צילום מסך 2026-04-08 125023.png` ("1. Photorealistic Exterior Rendering")

**Related existing record:** `NB-WEB-sketch-to-image-01` or `NB-WEB-model-rendering-01`

**Proposed use:** Additional exterior rendering example. The urban planning series opens with a general photorealistic exterior render — this item serves as contextual framing rather than a distinct new workflow.

**Uncertainty notes:** May be a new card if the prompt is specifically oriented toward urban-context rendering (building within site/neighborhood context) rather than isolated building render.

---

### ADD-14 — Additional example: High-Rise Skyline Context

**Source images:** `צילום מסך 2026-04-08 125106.png` ("9. High Rise Skyline Context")

**Related existing record:** `NB-WEB-model-rendering-01` (urban/building render) or NEW-21 (TOD rendering)

**Proposed use:** Additional example for a model-rendering or urban-exterior render card.

**Uncertainty notes:** If the prompt specifically addresses the challenge of integrating a building into an existing skyline context (not just rendering one building), it may warrant a new card.

---

### ADD-15 — Additional example: Moodboard / Reference Images to Interior Render

**Source images:** `צילום מסך 2026-04-08 125154.png` ("02. Moodboard for the Project")

**Related existing record:** `NB-WEB-multi-elements-01` (multiple reference images → composed interior rendering)

**Proposed use:** Additional before/after example for `NB-WEB-multi-elements-01`.

**Uncertainty notes:** Prompt reads "Create a design board for the project based on established colour schemes, furniture styles, material selections, finishes..." — this may be closer to NEW-03 (image to presentation board) than to multi-elements-01. Review prompt direction carefully.

---

### ADD-16 — Additional example: 3D Model View to Photorealistic Image

**Source images:** `צילום מסך 2026-04-08 125159.png` ("03. Image for 3D View")

**Related existing record:** `NB-WEB-model-rendering-01` or `NB-WEB-model-rendering-02`

**Proposed use:** Additional before/after example showing a 3D model view (kitchen space) converted to a photorealistic rendered image.

**Uncertainty notes:** Prompt: "Transform this 3D design view in a 2D photorealistic image with accurate textures, lighting, materials, objects, plants, and all the elements required." This is a clean extraction prompt for a 3D model. Reasonably legible.

---

## Section 4 — Unclear / manual review

Items where the content is ambiguous, content type is uncertain, or the screenshot does not show enough information to classify.

---

### UNCLEAR-01 — AutoRender AI Section Header

**Source images:** `צילום מסך 2026-04-08 124321.png`

**Issue:** This is a section title card ("PROMPTS FOR 3D RENDERING WITH AUTORENDER AI") rather than a prompt card. It contains a readable prompt embedded in a black overlay panel, but the prompt appears to be an example shown alongside the AutoRender AI branding, not a standalone NanoBanana prompt.

**Prompt text visible:** "Use the exact same settings as the base reference. Do NOT change the building design, proportions, structure, or camera angle. Transform this into a high-end photorealistic render with detailed exterior materials, lighting quality of visible natural stone/concrete facade, modern luminosity, soft realistic shadows, slightly golden-tone for a cozy and inviting atmosphere, ensure presentation-look. Add subtle interior warm lighting glow behind the glass. Keep the same framing and perspective..."

**Decision required:** Determine whether this prompt is:
1. A NanoBanana prompt being shown in an AutoRender AI context, or
2. A prompt specifically written for AutoRender AI (a different tool)
If (1), extract and create a new card ("Photorealistic Render — Keep Settings and Perspective"). If (2), exclude from the library.

---

### UNCLEAR-02 — Floor Plan Refinement

**Source images:** `צילום מסך 2026-04-08 124342.png`

**Issue:** Shows a floor plan with a prompt panel, but the output type is unclear from the screenshot. The image shows an architectural floor plan input and what appears to be a prompt for refining or annotating that plan. The output may be: (a) a refined version of the same floor plan, (b) a 3D view, or (c) an annotated plan.

**Decision required:** Examine at higher resolution or locate the original source to determine the intended output. If the output is a rendered floor plan, merge with the photoplan-isometric group. If the output is a technical refinement (e.g. cleaned-up CAD), consider a new Plans card.

---

### UNCLEAR-03 — Object Replacement Carousel Continuation

**Source images:**
- `צילום מסך 2026-04-08 124452.png`
- `צילום מסך 2026-04-08 124458.png`

**Issue:** These two images appear to be carousel navigation views (additional output examples) of the same Object Replacement prompt (NEW-10 / 124446), not separate prompts. The content is a continuation of the same card at a different slide position.

**Decision required:** Confirm these are carousel slides, not separate cards. If confirmed, use the best-quality image from 124446–124458 as the example image for NEW-10 and discard the rest as duplicates.

---

## Notes on prompt text completeness

Across all 56 newly analyzed images, prompt text is partially legible in the majority of screenshots due to font size and screenshot resolution. The following categories of prompts are the most fully extractable (legible enough to use without further processing):

| Image | Legibility |
|---|---|
| 125040 — Urban Porosity Diagram | High — prompt essentially complete |
| 125101 — Transit Oriented Development | High — substantial portion readable |
| 124321 — AutoRender AI header | High — but attribution question (UNCLEAR-01) |
| 124335 — Architectural Drawing to Render | Medium-high |
| 124328 — Floor Plan to 3D Render | Medium-high |

All others range from medium (key phrases legible, some cut-off) to low (main idea visible, verbatim text incomplete). A higher-resolution source (original portal access or raw video capture) would be needed for full verbatim extraction from Indonesian prompts (images 01–05) and the AutoRender AI series (images 124328–124342).
