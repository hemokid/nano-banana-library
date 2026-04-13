# Website Source Inventory

Inventory pass only — no file contents have been read.
Date: 2026-04-08

---

## Text files

**Location:** `source/website_text/`
**Total count:** 14

| # | Filename |
|---|---|
| 1 | `Change Rendering View.txt` |
| 2 | `Change Season or Atmosphere prompt.txt` |
| 3 | `From Plan to Bird's-eye and Perspective prompt.txt` |
| 4 | `Multi-elements to Rendering.txt` |
| 5 | `Photo to 3D Building Model prompt.txt` |
| 6 | `Photo to Elevation (or CAD).txt` |
| 7 | `PhotoPlan to Isometric Diagram.txt` |
| 8 | `Plan to CAD.txt` |
| 9 | `Rendering to Illustration.txt` |
| 10 | `Retexture prompt.txt` |
| 11 | `Section to 3D.txt` |
| 12 | `Trace Google Aerial Photo.txt` |
| 13 | `model to rendering prompts.txt` |
| 14 | `sketch to image prompts.txt` |

---

## Image files

**Location:** `source/website_images/`
**Total count:** 24

| # | Filename |
|---|---|
| 1 | `Change Season or Atmosphere.png` |
| 2 | `From Plan to Bird's-eye and Perspective 3.png` |
| 3 | `From Plan to Bird's-eye and Perspective 5.png` |
| 4 | `From Plan to Bird's-eye and Perspective.png` |
| 5 | `Multi-elements to Rendering.png` |
| 6 | `Photo to 3D Building Model.png` |
| 7 | `Photo to Elevation (or CAD) 1.png` |
| 8 | `Photo to Elevation (or CAD) 2.png` |
| 9 | `Photo to Elevation (or CAD) 3.png` |
| 10 | `PhotoPlan to Isometric Diagram 1.png` |
| 11 | `PhotoPlan to Isometric Diagram 2.png` |
| 12 | `PhotoPlan to Isometric Diagram 3.png` |
| 13 | `PhotoPlan to Isometric Diagram 4.png` |
| 14 | `Plan to CAD.png` |
| 15 | `Section to 3D.png` |
| 16 | `Trace Google Aerial Photo.png` |
| 17 | `model to rendering 1.png` |
| 18 | `model to rendering 2.png` |
| 19 | `retexture.png` |
| 20 | `sketch to image 1.png` |
| 21 | `sketch to image 2.png` |
| 22 | `sketch to image 3.png` |
| 23 | `sketch to image 4.png` |
| 24 | `sketch to image 5.png` |

---

## Filename matches between text files and image groups

The following text files have a clearly matching image or image group by name:

| Text file | Matching image(s) |
|---|---|
| `Change Season or Atmosphere prompt.txt` | `Change Season or Atmosphere.png` |
| `From Plan to Bird's-eye and Perspective prompt.txt` | `From Plan to Bird's-eye and Perspective.png`, `...3.png`, `...5.png` |
| `Multi-elements to Rendering.txt` | `Multi-elements to Rendering.png` |
| `Photo to 3D Building Model prompt.txt` | `Photo to 3D Building Model.png` |
| `Photo to Elevation (or CAD).txt` | `Photo to Elevation (or CAD) 1.png`, `...2.png`, `...3.png` |
| `PhotoPlan to Isometric Diagram.txt` | `PhotoPlan to Isometric Diagram 1.png`, `...2.png`, `...3.png`, `...4.png` |
| `Plan to CAD.txt` | `Plan to CAD.png` |
| `Section to 3D.txt` | `Section to 3D.png` |
| `Trace Google Aerial Photo.txt` | `Trace Google Aerial Photo.png` |
| `Retexture prompt.txt` | `retexture.png` (case difference only) |
| `model to rendering prompts.txt` | `model to rendering 1.png`, `model to rendering 2.png` |
| `sketch to image prompts.txt` | `sketch to image 1.png`, `...2.png`, `...3.png`, `...4.png`, `...5.png` |

**Unmatched text files (no image counterpart found):**
- `Change Rendering View.txt`
- `Rendering to Illustration.txt`

**Unmatched image files (no text counterpart found):**
- None — all images match at least one text file by name stem.

---

## Naming consistency assessment

The naming is **largely consistent and pairable**. The conventions are:

- Text files use a descriptive slug as the base name, sometimes with a suffix word (`prompt`, `prompts`) that is absent from the image filenames.
- Images use the same base slug with a numeric suffix (` 1`, ` 2`, ` 3`, etc.) to indicate multiple example images per prompt.
- Pairing rule: strip the words `prompt` and `prompts` from text filenames, then match on the base stem. Numeric suffixes on images indicate a one-to-many relationship (one text file → multiple images).
- Two exceptions to investigate during content analysis: `Change Rendering View.txt` and `Rendering to Illustration.txt` have no matching images — they may be image-free prompts, or their images may be named differently.
- Minor casing difference: `Retexture prompt.txt` vs. `retexture.png` — lowercase image name is a one-off inconsistency.

**Conclusion:** The naming is consistent enough for reliable automated pairing with simple normalization (strip suffix words, case-insensitive match, then assign all numerically suffixed images to the matching text file).
