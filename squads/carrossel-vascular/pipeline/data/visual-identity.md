# Visual Identity — VascularCare Carousel (Revista Edition)

## Brand Assets

- **Logo (fundo claro):** `pipeline/data/assets/logo-light.png`
- **Logo (fundo escuro):** `pipeline/data/assets/logo-dark.png`
- **Logo DNA (fundo escuro):** `pipeline/data/assets/logo-dna.png`

## Typography

- **Primary font:** Montserrat (Google Fonts)
- **Cover display title:** "VASCULAR" — Montserrat ExtraBold 900, ~200px, uppercase, letter-spacing -2px
- **Slide headline:** Montserrat Bold 700, 58–72px
- **Body text:** Montserrat Regular/Medium 400–500, 34–38px
- **Header meta (date/vol):** Montserrat SemiBold 600, 24px, uppercase, letter-spacing 3px
- **Footer logo text:** use image asset (never recreate the logo in text)

## Color Palette

- **Primary terracotta:** `#A0522D` — headlines, accents, CTA text
- **Dark background:** `#111111` — cover slides and dark slides
- **White:** `#FFFFFF` — default slide background
- **Body text:** `#222222`
- **Supporting text:** `#444444`
- **Header/footer rule:** `#D8C8BC` (light) / `#333333` (dark)
- **Accent warm:** `linear-gradient(160deg, #fff7f2 0%, #f3e0d4 100%)` — accent slides

## Cover Slide Design

**IMPORTANT — Cover Variation Rule:**
Each carousel must use a DIFFERENT cover variant from the previous run. Check `_memory/memories.md` to see which variant was last used, then pick a different one. Record which variant you used after rendering.

There are 4 cover variants. Rotate through them to ensure visual variety across posts:

### Variant A — Magazine Dark (fundo escuro + foto)
- Full-bleed B&W photo background with dark gradient overlay (bottom 40%)
- "VASCULAR" in Montserrat 900 white ~180px at top — partially obscured by photo subject (magazine effect)
- Bottom area: large bold headline (white, ~72px) + italic supporting text (white, ~34px)
- Header: date left, "VOL. XX" right — white, uppercase, small
- "DR. MARCELO MANDELLI" label — white, small, right side
- When NO photo: solid #111111 background, same typography

### Variant B — Terracotta Split
- Top 55% of slide: solid terracotta (#A0522D) background
- Bottom 45%: white (#FFFFFF) background
- "VASCULAR" in Montserrat 900 white ~160px, centered in the top terracotta zone
- Headline in Montserrat Bold ~62px in #111111, placed in the white zone
- Supporting text in Montserrat Regular ~34px, #444444, in white zone
- Header: date + vol in white (top terracotta area), small uppercase
- Footer: logo-light.png + thin rule (in white zone)

### Variant C — Minimal White
- Pure white background (#FFFFFF)
- Thin terracotta accent bar (8px) spanning full width at ~30% from top
- "VASCULAR" in Montserrat 900 #111111 ~160px, above the bar
- Headline below the bar in Montserrat Bold ~62px terracotta (#A0522D)
- Supporting text in Montserrat Regular ~34px, #444444
- Header: date + vol in terracotta, uppercase small, at very top
- Footer: logo-light.png + thin rule

### Variant D — Dark Centered Statement
- Solid #111111 background throughout
- No split — centered layout with generous whitespace
- "VASCULAR" in Montserrat 900 white ~140px, vertically centered top-third
- Headline centered in Montserrat ExtraBold ~68px white, mid-slide
- Supporting text centered in Montserrat Regular ~32px, #AAAAAA, below headline
- Header: date + vol in #555555, small
- Footer: logo-dark.png + thin dark rule (#333333)

## Content Slide Design

- White background (default) or accent gradient
- Header: thin horizontal rule, date left, vol right — in terracotta/muted tones
- Headline: Montserrat Bold, terracotta (#A0522D)
- Body: Montserrat Regular, dark (#222222 / #444444)
- Footer: real logo image (logo-light.png on white, logo-dark.png on dark) + thin rule
- Generous whitespace — never fill the slide completely

## Dark Slide Design

- Background: #111111
- All text: white
- Headline: Montserrat ExtraBold, white
- Body: Montserrat Regular, #EEEEEE
- Footer: logo-dark.png
- Header rule: #333333

## Photos

- Store photos at: `pipeline/data/photos/`
- Subfolders: `dr-marcelo/`, `clinica/`, `procedimentos/`, `equipe/`
- Apply grayscale filter on all photos for editorial consistency
- Cover: use photo as full-bleed background with dark overlay
- Content slides with photo: float right or center with max 45% of slide height

## Layout Rules

- Dimensions: 1080×1440px (4:5 portrait, Instagram carousel)
- Padding: 64px top, 72px sides, 56px bottom
- Header height: ~80px
- Footer height: ~80px
- Content area: remaining ~1220px, centered vertically
- No overflow, no content clipping

## Slide Layouts

Each slide in the roteiro must declare a `layout:` field. Available layouts:

### `standard` (default)
Two-layer hierarchy: large bold `headline` in terracotta + `body-text` in dark grey below.
Use for: body content slides, introductions, explanations, CTA slides.

### `statement`
Single large centered text block (~72px), full vertical centering, no header/footer visual weight.
`headline` = bold terracotta statement. `supporting_text` = italic grey continuation (flows inline).
Use for: emotional bridges, key messages, quotes, narrative pivots.
Example: *"Cuidar da circulação não é apenas tratar sintomas — é devolver leveza para viver o seu dia com mais liberdade."*

### `checklist`
`headline` in terracotta bold at top, followed by a vertical list of ✓ items (44px checkmark in terracotta, 38px item text).
`items:` YAML array. Use `**bold**` inside items for inline keyword emphasis.
Use for: symptoms, criteria, differentiators, step lists.

### `photo_checklist`
Full-width grayscale photo (480px tall) at top. ✓ checklist below.
`items:` YAML array. Photo auto-assigned from the squad's photos pool.
Use for: procedure outcomes, result benefits, visual proof with takeaways.

### `two_section`
Two visual sections stacked with a divider rule:
- **Top:** `headline` (60px) + `items` checklist (✓ marks, 34px text)
- **Bottom:** two-column — `second_headline` + `second_items` bullet list on left; grayscale photo (360×360px) on right.
Use for: complex problem+solution slides, dual-purpose informational slides.
Requires: `headline`, `items`, `second_headline`, `second_items`.

### `cover`
Magazine-style full-bleed photo with "VASCULAR" display text. Always slide 1.
Always set `layout: cover` (or leave as tipo: cover with no layout field).

## Inline Formatting in Text Fields

- `**text**` → renders as `<strong>` (bold, slightly darker than body text)
- Available in: `supporting_text`, `items`, `second_items`
- Use sparingly — 1-3 bold phrases per slide maximum
