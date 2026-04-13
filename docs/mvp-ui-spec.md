# MVP UI Specification — Nano Banana Prompt Library

Based on: `docs/product-catalog-structure.md`, `data/normalized/website-batch-normalized-records.md`, `CLAUDE.md`
Date: 2026-04-10

---

## Overview

The MVP is a single-page web application with three core views:
1. **Category view** — entry point, category navigation
2. **Card grid view** — browsable prompt cards within a category
3. **Detail panel** — slide-over panel showing full prompt, images, and variants

No login, no user accounts, no favorites in MVP. Read-only content library.

---

## 1. Main screens / views

| View | URL pattern | Description |
|---|---|---|
| Home / All Prompts | `/` | Full card grid, all categories, no filter active |
| Category view | `/?category=renderings` | Card grid filtered to one category |
| Detail panel | `/?category=renderings&prompt=NB-WEB-sketch-to-image-01` | Grid stays visible; panel slides in from right |

The grid never navigates away. The detail panel opens and closes on top of it. URL updates to reflect the open prompt and active variant tab, enabling direct linking and browser back/forward navigation.

---

## 2. Category page layout

### Header (fixed, full width)
- Logo / wordmark: **Nano Banana** — left aligned, small
- Tagline: "Architecture Prompt Library" — below wordmark, muted
- No top navigation bar beyond the wordmark

### Category sidebar (fixed, left, ~220px wide)
- Vertical list of all main categories
- Each item: category name + record count in muted text (e.g. "Renderings 9")
- Active category: bold label + left accent bar in brand color
- "All" option at the top — shows the full grid
- Categories listed in this order (matching CLAUDE.md):
  1. All
  2. 3D
  3. Urban Planning
  4. Landscape *(hidden in MVP if fewer than 3 records; prompts surface under other categories)*
  5. Renderings
  6. Plans
  7. Sections
  8. Illustrations
  9. Post-processing / Results
  10. Other tools and workflows

### Main content area (right of sidebar, scrollable)
- Category heading: large, bold — e.g. "Renderings"
- Subcategory pills (optional, shown only if subcategories exist): horizontal scrollable row of filter pills below the heading — e.g. "Exterior Render" | "Interior Render" | "Seasonal"
- Card grid: see section 3

### No footer in MVP.

---

## 3. Prompt card layout

Cards live in a responsive 2–3 column grid (2 columns on 1024px–1400px, 3 columns on 1400px+, 1 column on mobile).

### Card dimensions
- Fixed aspect ratio: ~4:5 portrait
- White background, 1px light gray border, 8px border radius
- Subtle box shadow on hover

### Card anatomy (top to bottom)

**A. Image area** (top ~55% of card)
- Two images side by side inside the card image area
- Left: input/before image (smaller, ~40% of image area width) — labeled "Input" in a small pill overlay at bottom-left
- Right: output/after image (larger, ~60% of image area width) — labeled "Output" in a small pill overlay at bottom-left
- If only one image exists: single image fills the full image area, labeled "Output"
- If no image: gray placeholder area with centered text "No example image"
- Images use `object-fit: cover`, no border between them — a 1px white divider line only
- On hover over the card: images slightly zoom in (scale 1.02, 200ms ease)

**B. Category badge** (overlaid on image, top-left corner)
- Small pill: category name in white text on dark semi-transparent background
- E.g. "Renderings", "3D", "Plans"

**C. Variant badge** (overlaid on image, top-right corner, only if variants exist)
- Small pill: "3 variants" in muted text on light background

**D. Content area** (bottom ~45% of card, white)
- Padding: 16px
- **Title** — 15px, semibold, dark, max 2 lines, ellipsis truncated
- **Short summary** — 13px, muted gray, max 2 lines, ellipsis truncated
- **Copy button** — bottom of content area, full width, 36px height
  - Label: "Copy prompt"
  - Style: filled, brand color (dark) — stands out clearly
  - On click: copies `cleaned_prompt` to clipboard; label changes to "Copied!" for 1.5s then resets
  - Always visible — does not require opening the detail panel

### Card states
- **Default:** white background, light border
- **Hover:** border color darkens, shadow increases, images scale slightly, cursor pointer
- **Active/selected** (detail panel open for this card): left border becomes a 3px brand color accent

Cards with `uncertainty_notes` or flagged for manual review: no visual distinction in the grid — internal flags only.

---

## 4. Prompt detail panel layout

Slides in from the right. Width: 480px on desktop. On mobile: full screen overlay.
The grid remains visible and dimmed behind the panel on desktop.
A close button (×) top-right dismisses the panel.

### Panel anatomy (top to bottom)

**A. Panel header** (sticky within panel)
- Category breadcrumb: "3D › Axonometric / Isometric Diagram" — small, muted
- Title: large (22px), bold, dark
- Close button (×): top-right

**B. Variant tabs** (shown only when the prompt belongs to a variant group)
- Horizontal tab row below the header
- Each tab: short label (1–3 words) — e.g. "Minimal", "Detailed", "Full Construction Doc"
- Active tab: bold label + bottom border in brand color
- Clicking a tab updates in place: prompt text, images, summary, use case, notes — no page reload
- If the active variant has no image: image area shows placeholder
- If the active variant is context-dependent: inline warning shown beneath the tabs (see section 5)

**C. Image examples** (below tabs or header)
- Two-panel before/after (see section 7 for detail)
- If no images: placeholder with note "No example image available for this prompt"

**D. Summary and use case**
- `short_summary`: 14px, regular, dark — 1–3 sentences
- "Best for:" label (small, muted caps) followed by `use_case` — 1–3 bullet points, 13px

**E. Prompt text block** (main panel content)
- Section label: "Prompt" in small muted caps
- Prompt text: `cleaned_prompt` — displayed in a monospace or serif font at 14px, dark, with generous line height (1.7)
- Light gray background block with 16px padding and 6px border radius
- **Copy button** inside the block, top-right corner: "Copy" (icon + label) — same behavior as card copy button
- Below the block, in small muted text: "Original source prompt" as a collapsible toggle
  - Expands to show `original_prompt` in the same block style
  - Collapsed by default

**F. Metadata row** (below prompt block)
- Tags: horizontal row of light gray tag pills — e.g. "exterior", "sketch", "daylight", "residential"
- Output type: "Output: Photorealistic exterior render" — 12px, muted

**G. Notes** (shown only if present)
- Displayed in a soft yellow/amber info box: 13px, left border accent
- For template prompts: "Contains a fill-in parameter: replace [desired angle] before submitting"
- For multi-image prompts: "Requires multiple input images"
- For context-dependent prompts: "Best used as a follow-up in the same chat session"

**H. No-image notice** (shown only if `match_confidence: none`)
- Displayed below notes, muted italic: "No example image is available for this prompt."

---

## 5. Variant tab behavior

- Variant tabs appear only in the detail panel — not on cards in the grid
- The grid card represents the entire variant group as a single entry
- Tabs are ordered as defined in `docs/product-catalog-structure.md` section 3
- The default active tab is always the first tab in the group
- Switching tabs:
  - Swaps: prompt text, images, short_summary, use_case, notes, output_type
  - Does NOT change: title, category breadcrumb, tags (shared across variants)
  - URL query string updates: `&variant=detailed` — enables direct linking to a specific variant
- If a tab's variant has `uncertainty_notes`:
  - An inline amber warning appears below the tab row (not a blocking alert)
  - Text: "Use with caution — [reason]" in 12px muted italic
- Context-dependent variants (e.g. NB-WEB-plan-birdeye-02):
  - Show a persistent blue info note: "This prompt works best as a follow-up in the same session, after generating the bird's-eye view."
- Tab with no image: image area shows placeholder. Tab label remains visible and clickable.

---

## 6. Copyable prompt text

### Rules
- The primary copy target is always `cleaned_prompt` — never `original_prompt`
- Copy triggers from two locations: the card copy button and the panel copy button
- Both use the same clipboard write behavior

### Card copy button
- Full-width, bottom of card content area
- Label: "Copy prompt" | State after click: "Copied!" (1.5s) | Reset: "Copy prompt"
- Does not open the detail panel

### Panel copy button
- Inside the prompt text block, top-right corner
- Icon: clipboard icon + "Copy" label
- Same state behavior as card button
- For variant groups: copies the currently active variant's `cleaned_prompt`

### Template prompts
- Prompts containing `[token]` placeholders display an inline note directly above the prompt text block:
  - "This prompt contains a placeholder. Replace [desired angle] with your chosen value before copying."
- The copy button still works — copies the template text including the placeholder

### Original prompt
- Accessible via "View original source prompt" collapsible toggle below the main block
- Never shown by default — architects need the clean version immediately
- Original is preserved for transparency and traceability

---

## 7. Image examples

### In the card grid
- Compact side-by-side: input (small, ~40%) | output (large, ~60%)
- No labels on the card — space is too small
- Clicking anywhere on the image area opens the detail panel

### In the detail panel
- Full-width two-panel layout
- Left panel: input/before image — label "Input" in a small dark pill at bottom-left
- Right panel: output/after (Nano Banana result) — label "Output (Nano Banana)" at bottom-left
- If only one image: single image fills the full width, labeled "Output"
- If no before/after split is known: single image with no label
- Clicking an image opens a lightbox (full-screen overlay, click outside to close)
- Image captions (if visible in source): shown below the image pair in 11px muted italic
- Aspect ratio: images maintain their natural ratio within a max height of 320px in the panel

### No-image state
- Gray placeholder rectangle at the correct aspect ratio
- Centered text: "No example image"
- 12px muted color, no icon

---

## 8. Metadata visibility

### Visible on the card (grid view)
| Field | Shown |
|---|---|
| `title` | Yes |
| `short_summary` | Yes (2 lines max) |
| `category` | Yes (badge) |
| `variant count` | Yes (badge, if applicable) |
| Before/after images | Yes (compact) |
| Copy button | Yes |

### Visible in the detail panel (default, no interaction required)
| Field | Shown |
|---|---|
| `title` | Yes |
| `category` + `subcategory` | Yes (breadcrumb) |
| `short_summary` | Yes |
| `use_case` | Yes |
| `tags` | Yes |
| `cleaned_prompt` | Yes (main content) |
| `recommended_output_type` | Yes (small label) |
| `notes` | Yes (if present) |
| Variant tabs | Yes (if in a variant group) |
| Before/after images | Yes |

### Visible only on interaction (collapsed by default)
| Field | Interaction required |
|---|---|
| `original_prompt` | Click "View original source prompt" toggle |
| `uncertainty_notes` | Shown as amber warning only when present — no interaction needed, but only appears when flagged |

### Never shown to users
| Field | Reason |
|---|---|
| `normalized_id` | Internal ID |
| `raw_id` | Internal ID |
| `source_filename` | Internal provenance |
| `match_confidence` | Internal quality flag |

---

## 9. Visual direction

### Principle: premium, editorial, architect-oriented, fast to scan

**Typography**
- Headings: a clean geometric sans-serif (e.g. Inter, Neue Haas Grotesk, or similar)
- Prompt text: a monospace font (e.g. JetBrains Mono, IBM Plex Mono) or a refined serif (e.g. Freight Text) — monospace is preferred for its code-adjacent legibility and neutrality
- Body / labels: same geometric sans as headings, lighter weight
- No decorative or script typefaces

**Color palette**
- Background: off-white — `#F8F7F5` (warm white, not pure white) — feels like premium paper
- Cards: `#FFFFFF` with `1px #E5E3DF` border
- Primary text: `#1A1A1A` (near black)
- Muted text: `#8A8780`
- Category badges: dark charcoal `#2C2C2A` with white text
- Brand accent: a single accent color used for: active sidebar item, copy button, variant tab underline, card hover border
  - Recommended: a warm dark tone — `#1F3D2E` (deep architectural green) or `#1C2B3A` (slate blue) — to be confirmed in implementation
- Copy button: brand accent fill with white text
- Tag pills: `#F0EEE9` background, `#6B6966` text
- Amber info box: `#FFF8E7` background, `#B8860B` left border

**Spacing**
- Grid gap: 24px
- Card padding: 16px
- Panel padding: 24px
- Generous white space — resist the urge to pack information

**Imagery treatment**
- Images are the primary visual element — they should never be cropped awkwardly
- No image filters or overlays that alter the visual character of the example renders
- Placeholder state uses a neutral gray — `#E8E6E1` — no icons or illustrations

**Motion**
- Card hover: image scale 1.02, border darkens — 150ms ease
- Panel slide-in: 250ms ease-out from right
- Tab switch: prompt text cross-fades — 150ms
- Copy button: label swap — instant, no animation needed

**Tone**
- No marketing copy anywhere in the interface
- No emoji, no exclamation marks
- Labels are functional: "Copy prompt", "Input", "Output", "3 variants"
- The interface recedes — the prompts and images are the product

---

## MVP scope boundary

**In scope for MVP:**
- Static content rendered from `data/curated/` JSON
- Category sidebar + card grid + detail panel
- Variant tabs
- Clipboard copy
- Lightbox image zoom
- Direct linking to a prompt or variant via URL

**Out of scope for MVP:**
- Search
- Favorites / bookmarks
- User accounts
- Filtering by tags
- Prompt submission or editing
- Comments or ratings
- Dark mode
- Mobile-optimized layout (responsive basics only — no dedicated mobile design)
