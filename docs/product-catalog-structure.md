# Product Catalog Structure

Defines how the Nano Banana Prompt Library should be organized for users.
Based on: `data/normalized/website-batch-normalized-records.md` and `CLAUDE.md`.
Date: 2026-04-10

---

## 1. Main categories

These are the top-level navigation categories shown to users. Based on the CLAUDE.md core categories, mapped to the normalized dataset:

| Category | Records currently assigned | Notes |
|---|---|---|
| **Renderings** | NB-WEB-sketch-to-image-01, -04, -05; NB-WEB-plan-birdeye-02; NB-WEB-model-rendering-01, -02; NB-WEB-plan-birdeye-03 | Largest category — may benefit from subcategory filters |
| **3D** | NB-WEB-photoplan-isometric-01–05; NB-WEB-photo-3d-01; NB-WEB-plan-birdeye-01; NB-WEB-section-3d-01 | Includes axonometric, isometric, bird's-eye 3D |
| **Plans** | NB-WEB-photo-elevation-01, -02, -03; NB-WEB-plan-to-cad-01; NB-WEB-sketch-to-image-03 | Elevations, CAD drawings, plan rendering |
| **Sections** | NB-WEB-section-3d-01 | Currently one record; may grow from source/images |
| **Illustrations** | NB-WEB-render-to-illustration-01; NB-WEB-sketch-to-image-02 | Line drawings and artistic plan renderings |
| **Urban Planning** | NB-WEB-trace-aerial-01 | Currently one record; may grow from source/images |
| **Landscape** | NB-WEB-sketch-to-image-02, -03; NB-WEB-plan-to-cad-01; NB-WEB-section-3d-01 | Cross-cutting — landscape prompts appear across categories |
| **Post-processing / Results usage** | NB-WEB-change-season-01, -02; NB-WEB-retexture-01; NB-WEB-change-view-01 | Transformations applied to existing renderings |
| **Other tools and workflows** | NB-WEB-photo-3d-01 (tool refs); NB-WEB-multi-elements-01 | Multi-step or multi-tool workflows |

**Note on Landscape:** Landscape prompts appear across Renderings, Plans, 3D, and Sections. For MVP, landscape prompts are filed within their primary transformation category and also tagged `landscape` for filtering. A dedicated Landscape top-level category can be surfaced in a future iteration once more landscape-specific records are added from source/images.

---

## 2. Subcategories

Subcategories appear as secondary filters within each main category.

### Renderings
- Exterior Render — Sketch to Render
- Exterior Render — Model to Render
- Interior Render
- Eye-Level Perspective
- Seasonal / Atmospheric

### 3D
- Axonometric / Isometric Diagram
- Bird's-Eye / Aerial Render
- Program Diagram
- Photo to 3D Model

### Plans
- Elevation Drawing
- Construction Documentation
- Landscape Plan — CAD Conversion
- Landscape Plan — Digital Render

### Sections
- Section to 3D Isometric

### Illustrations
- Architectural Line Drawing
- Hand-Rendered Plan

### Urban Planning
- Site Analysis Map
- Figure-Ground / Aerial Trace

### Post-processing / Results usage
- Season / Atmosphere Change
- View / Camera Angle
- Facade Retexture

### Other tools and workflows
- Multi-Image Composition
- External 3D Tools

---

## 3. Variant tab groups

The following prompt families should be displayed in a single card with variant tabs. Each tab shows one prompt variant. The tab labels should be short and scannable.

### Variant group A — Elevation / CAD Drawing
**Card title:** "Photo to Elevation or CAD"
**Tabs:**
- `Minimal` → NB-WEB-photo-elevation-01 (6-word minimal prompt)
- `Detailed` → NB-WEB-photo-elevation-02 (precise linework, no entourage)
- `Full Construction Doc` → NB-WEB-photo-elevation-03 (sections, dimensions, callouts)

### Variant group B — Season Change
**Card title:** "Change Season or Atmosphere"
**Tabs:**
- `Winter` → NB-WEB-change-season-01
- `Autumn` → NB-WEB-change-season-02

### Variant group C — Axonometric / Isometric Diagram
**Card title:** "Plan or Photo to Isometric Diagram"
**Tabs:**
- `Clean Diagram` → NB-WEB-photoplan-isometric-01 (building photo → clean axonometric)
- `Program Diagram` → NB-WEB-photoplan-isometric-02 (color-coded volume diagram)
- `Landscape Plan` → NB-WEB-photoplan-isometric-03 (landscape plan → axonometric)
- `Realistic Texture` → NB-WEB-photoplan-isometric-04 (plan → textured isometric)
- `Apartment Floor Plan` → NB-WEB-photoplan-isometric-05 (floor plan → isometric, no image)

### Variant group D — Landscape Plan Transformation
**Card title:** "Landscape Plan Rendering"
**Tabs:**
- `Watercolor / Hand-Rendered` → NB-WEB-sketch-to-image-02
- `Clean Digital Plan` → NB-WEB-sketch-to-image-03
- `CAD Linework` → NB-WEB-plan-to-cad-01

### Variant group E — Sketch to Exterior Render
**Card title:** "Sketch to Photorealistic Render"
**Tabs:**
- `Modern Building` → NB-WEB-sketch-to-image-01 (tower, MIR style)
- `Residential House` → NB-WEB-sketch-to-image-04 (house and backyard)

### Variant group F — Model to Render
**Card title:** "3D Model to Photorealistic Render"
**Tabs:**
- `Urban / Building` → NB-WEB-model-rendering-01 (SketchUp urban model)
- `Landscape` → NB-WEB-model-rendering-02 (landscape design model)

### Variant group G — Plan to Bird's-Eye / Perspective
**Card title:** "From Plan to 3D View"
**Tabs:**
- `Bird's-Eye Aerial` → NB-WEB-plan-birdeye-01
- `Eye-Level Courtyard` → NB-WEB-plan-birdeye-02
- `Interior Perspective` → NB-WEB-plan-birdeye-03

**Note on variant group G:** NB-WEB-plan-birdeye-02 is a context-dependent follow-up prompt. Its tab should include a visible note: "Best used as a follow-up in the same session."

---

## 4. Fields on the prompt card (grid view)

The card grid shows many prompts at a glance. Cards must be scannable in 2–3 seconds.

| Field | Display |
|---|---|
| `title` | Card heading — bold, prominent |
| `short_summary` | 1–2 line description below title |
| `category` | Category pill/badge (top-left or top-right) |
| `before/after image` | Thumbnail — before image (or input reference) on left, after image (or Nano Banana output) on right |
| `variant count` | "3 variants" label if the card represents a variant group |
| `copy button` | One-click copy of `cleaned_prompt` — always visible on the card |

Fields NOT shown on card: full prompt text, tags, use case, source filename, raw_id, uncertainty notes.

---

## 5. Fields on the prompt detail view / panel

The detail view opens when a user clicks a card. It should show everything needed to understand and use the prompt.

| Field | Display |
|---|---|
| `title` | Large heading |
| `category` + `subcategory` | Breadcrumb or pill set |
| `tags` | Horizontal tag row for context |
| `short_summary` | Subtitle or lead sentence |
| `use_case` | "Best for:" section — 1–3 bullet points |
| `variant tabs` | If in a variant group, show tabs across the top |
| `before/after images` | Side-by-side or stacked, labeled "Input" and "Output" (or "Before" / "After") |
| `original_prompt` | Collapsible section — "View original source prompt" |
| `cleaned_prompt` | Main prompt display — full text, large, copyable |
| `copy button` | Prominent — "Copy prompt" — copies `cleaned_prompt` |
| `recommended_output_type` | Small label: "Output type: Photorealistic exterior render" |
| `notes` | Shown if present — e.g. template tokens, multi-image requirements, workflow tips |
| `uncertainty_notes` | Shown only if present — displayed as a soft warning: "Use with caution" |

Fields NOT shown in detail view: `raw_id`, `source_filename`, `match_confidence`, `normalized_id`. These are internal data model fields only.

---

## 6. Records requiring manual review before publishing

The following records have flags that require a human decision before they appear in the live library:

| Record | Flag | Issue |
|---|---|---|
| NB-WEB-change-season-02 | Content quality | Prompt is "To autumn" — two words. Decide: publish as a minimal variant, expand with a fuller cleaned prompt, or hold until a better source is found. |
| NB-WEB-plan-birdeye-02 | Context dependency | Begins with "Good," — context-dependent follow-up prompt. Add a visible warning or decide whether to exclude from standalone browsing. |
| NB-WEB-photo-elevation-01 | Content quality | 6-word minimal prompt. Decide: publish as a "minimal" variant, or hold pending a fuller version. |
| NB-WEB-photo-elevation-03 | Ambiguous input | "In this style" implies a reference style image that isn't documented. Verify what the portal presents alongside this prompt. |
| NB-WEB-multi-elements-01 | No output image | Only input elements visible in source image — no rendered output to show as the "after" example. |
| NB-WEB-photoplan-isometric-05 | No image | No image example exists for this record. Publish text-only or hold until an image is sourced. |
| NB-WEB-change-view-01 | No image + template | No image example; also contains a fill-in token `[desired angle]`. Decide: publish as a template card with the parameter list shown, or hold. |
| NB-WEB-render-to-illustration-01 | No image | No image example exists. The prompt is detailed and self-contained, but a visual example would significantly increase usability. |
| NB-WEB-trace-aerial-01 | No before visible | Image shows only the output map; no satellite input shown. Low-risk — consider publishing with a note. |

---

## 7. Recommended browsing structure for MVP

### Category view
- Top navigation bar or left sidebar with all main categories
- Each category shows a count: "Renderings (9)", "3D (8)", etc.
- Active category highlighted
- Optional: "All prompts" view (ungrouped)

### Prompt card grid
- 2–3 column responsive grid
- Variant groups appear as a single card (not multiple cards)
- Cards show: title, short_summary, category badge, before/after thumbnail, copy button
- Variant count label when applicable ("3 variants")
- Cards sorted by: category first, then alphabetical by title (MVP default)
- Future: sort by recency, popularity, or user favorites

### Prompt detail page or panel
- Opens as a right-side slide-over panel (keeps grid visible behind) OR a full detail page
- Panel recommended for MVP — faster to browse without losing context
- Contains all fields from section 5
- Variant tabs at the top of the panel — clicking a tab swaps prompt text and images in place

### Copyable prompt text
- `cleaned_prompt` is the default copy target
- One-click copy button — prominent, always visible
- Button state changes on click: "Copy prompt" → "Copied!" → resets after 2 seconds
- `original_prompt` available in a collapsible section below the main copy area
- Template prompts (containing `[tokens]`) display a soft note: "Replace [desired angle] before submitting"

### Image examples
- Before/after shown side by side on desktop, stacked on mobile
- Images are labeled: "Input" / "Output" (or "Before" / "After")
- If only one image is available (output only, or input only), show single image with label
- If no image is available, show a placeholder card with text: "No example image available"
- Images should be zoomable on click

### Variant tabs
- Shown when a card belongs to a variant group (see section 3)
- Tabs appear at the top of the detail panel
- Selecting a tab swaps: prompt text, before/after images, short_summary, use_case, and notes
- URL or panel state updates to reflect the active variant (for shareability)
- Tab labels are short (1–3 words): "Minimal", "Detailed", "Full Construction Doc"
- If a variant has no image, its tab shows the prompt text only with a "No example image" placeholder
- Context-dependent variants (e.g. follow-up prompts) show a visible inline warning beneath the prompt text

---

## MVP publishing checklist

Before launching the MVP, the following should be confirmed:

- [ ] All 29 records reviewed for category/subcategory accuracy
- [ ] 9 records flagged for manual review resolved (section 6)
- [ ] Variant groups validated — tab labels finalized
- [ ] Cleaned prompts proofread — no typographic errors remain
- [ ] All images present in the asset pipeline (27 of 29 records have images)
- [ ] 2 records without images: decision made (publish text-only or hold)
- [ ] Source/images batch 02–05 analyzed — additional records from 56 unprocessed screenshots merged
- [ ] Curated data layer (`data/curated/`) populated before UI is built
