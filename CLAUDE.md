# Project: Nano Banana Prompt Library for Architects

## Mission
Build and maintain an interactive web library of architecture-focused prompts for the NanoBanana model.

The product must help architects browse, understand, compare, and copy prompts efficiently.

## Product goals
- Organize prompts into clear categories and subcategories.
- Show each prompt as a reusable content asset.
- Display a concise summary for every prompt.
- Display before/after or reference imagery when available.
- Group similar prompts as prompt variants in tabs.
- Make the library easy to update continuously.
- Keep source data separate from presentation logic.

## Core categories
- 3D
- Urban Planning
- Landscape
- Renderings
- Plans
- Sections
- Illustrations
- Post-processing / Results usage
- Other tools and workflows

## Data model principles
Each prompt entry should include:
- id
- title
- category
- subcategory
- tags
- original_prompt
- cleaned_prompt
- short_summary
- use_case
- expected_input_type
- recommended_output_type
- variant_group_id
- variant_label
- source
- source_url
- related_images
- before_image
- after_image
- notes
- status

## Important workflow rules
- Do not build UI before normalizing the source data.
- Always separate ingestion, normalization, curation, and presentation.
- Prefer structured JSON or Markdown frontmatter for content records.
- When similar prompts exist, group them into one family with variants instead of duplicating cards.
- Preserve original wording in the source layer.
- Create cleaned and summarized versions in the normalized layer.
- Never delete source material unless explicitly instructed.
- Log assumptions when category assignment is uncertain.
- Ask for clarification only when ambiguity blocks progress.
- Otherwise make a best effort proposal.

## UX principles
- The library should feel premium, editorial, and highly visual.
- Prompt cards must prioritize readability and copyability.
- Before/after imagery should be adjacent to the prompt, not hidden.
- Variants should be shown in tabs when prompts are closely related.
- The interface should support future filtering, search, and favorites.
- Keep the UI clean and architect-friendly, not gimmicky.

## Engineering rules
- Explore first, then plan, then implement.
- For multi-file work, present a plan before editing.
- Keep changes modular and reversible.
- Prefer maintainable architecture over quick hacks.
- Create reusable components.
- Keep content in data files, not hardcoded into UI components.
- After implementation, verify with available tests, build output, and screenshots.

## Session management
- Use subagents for research and classification tasks when useful.
- Use checkpoints before risky refactors.
- Keep context focused on the current phase.

## Current external source
A local folder named `source/images` contains image assets.
Inside `source/website` there is a text file named `WEBSITE` containing a portal URL with additional prompts.

Use these sources to ingest and structure content.
