# IMPLEMENTATION PLAN: Visual Identity Redesign

This document outlines the steps to redesign the site's visual identity according to the new "Elegant Nautical" theme (Gold & Navy). The update focuses purely on styling, colors, and typography without changing site structure or functionality.

## TYPOGRAPHY SYSTEM
- **Headings (h1, h2, h3):** `Cormorant Garamond` (Weights: 300, 400, 600, 700)
- **Body & Interface:** `DM Sans` (Weights: 300, 400, 500)
- **h1 Style:** Larger, dramatic, letter-spacing increased, font-weight 300.
- **h2 Style:** Editorial feel, thin gold underline accent (`#C9A96E`).

## COLOR PALETTE
| Element | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm White** | `#FAFAF7` | Page Background |
| **Champagne Gold** | `#C9A96E` | Primary Accent, CTAs, Highlights, Pricing Borders |
| **Deep Navy** | `#1B2B4B` | Secondary, Nav/Footer Backgrounds, Button Text |
| **Soft Charcoal** | `#2D2D2D` | Main Body Text |
| **Pure White** | `#FFFFFF` | Card Backgrounds |

## ARCHITECTURE OF CHANGES

### 1. Foundation (Global CSS)
- [ ] Import Google Fonts via `@import` in `styles/globals.css`.
- [ ] Update Tailwind `@theme` variables:
    - `--font-serif`: 'Cormorant Garamond', serif
    - `--font-sans`: 'DM Sans', sans-serif
    - Replace current OKLCH variables with the new HEX values in `:root`.
- [ ] Implement base heading styles in `@layer base`.
- [ ] Add global transition rule: `0.2s ease`.

### 2. Navigation & Footer
- [ ] Set Nav background to Deep Navy (`#1B2B4B`).
- [ ] Set Nav links to White, with Gold (`#C9A96E`) on hover.
- [ ] Set Footer background to Deep Navy (`#1B2B4B`) with White text.

### 3. Components & Buttons
- [ ] **Buttons:** Gold background (`#C9A96E`), Navy text (`#1B2B4B`), rounded corners, custom hover state (darken gold).
- [ ] **Cards:** White background, apply "Subtle Warm Shadow".
- [ ] **Pricing Cards:** Change borders to Gold (`#C9A96E`).
- [ ] **Most Popular Badge:** Gold background with Navy text.
- [ ] **Section Labels:** Gold color, uppercase, wide letter-spacing.

### 4. Hero & Visual Polish
- [ ] Apply subtle gradient to Hero: `linear-gradient(to bottom, #FAFAF7, #F0EBE0)`.
- [ ] Add gold underline accent to all `h2` elements.

---

## PROGRESS CHECKLIST

### Phase 1: Global Foundation
- [ ] Import Cormorant Garamond & DM Sans
- [ ] Configure Tailwind Font Families
- [ ] Define Color Palette Variables
- [ ] Apply Global Transitions

### Phase 2: Page Layout & Typography
- [ ] Apply Warm White background to `body`
- [ ] Style `h1` (Dramatic, Lightweight)
- [ ] Style `h2` (Editorial with Gold Underline)
- [ ] Style Body Text (Soft Charcoal)

### Phase 3: Header & Footer
- [ ] Update Navbar (Navy Background / Hover Effects)
- [ ] Update Footer (Navy Background / White Text)

### Phase 4: Core Components
- [ ] Update CTA/Button Styles (Gold/Navy)
- [ ] Update Card Shadows & Backgrounds
- [ ] Update Section Labels (Gold/Spaced)

### Phase 5: Pricing Section Specifics
- [ ] Update Pricing Card Borders (Gold)
- [ ] Update "Most Popular" Badge
- [ ] Verify Pricing Typography Consistency

### Phase 6: Hero & Final Polish
- [ ] Implement Hero Background Gradient
- [ ] Verify Mobile Responsiveness of Typography
- [ ] Final Review against Design Specs
