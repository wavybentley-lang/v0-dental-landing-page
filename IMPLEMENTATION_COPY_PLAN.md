# Hero Section & Copywriting Overhaul Implementation Plan

This plan outlines the redesign of the Hero Section to focus on high-impact visual results and persuasive, benefit-driven copy.

## User Review Required

> [!IMPORTANT]
> - **Primary Color Update**: Base: #FFFFFF (Pure White) and Accents: #0F172A (Deep Navy) and #D4AF37 (Subtle Champagne Gold).
> - **Typography Shift**: Headings: sophisticated Serif (Playfair Display) to convey premium quality; Body: clean Sans-Serif (Geist).
> - **Hero Copy Selection**: "The Confidence of a Brighter Smile, Delivered in One Visit." (Option A).

## Proposed Changes

### Styles & Design System

#### [MODIFY] [globals.css](file:///c:/Users/wave/OneDrive/Документы/website%20lessons/repos/v0-dental-landing-page/app/globals.css)
- Revise CSS variables for the "Clean Luxury" aesthetic:
  - `--background`: #FFFFFF
  - `--foreground`: #0F172A
  - `--primary`: #D4AF37
  - `--secondary`: #0F172A
- Add font weights and styles for premium typography.

### Components

#### [MODIFY] [HeroSection.tsx](file:///c:/Users/wave/OneDrive/Документы/website%20lessons/repos/v0-dental-landing-page/components/HeroSection.tsx)
- **Layout**: Implement a 60/40 "Golden Ratio" split layout.
- **Copy**:
  - Headline: "The Confidence of a Brighter Smile, Delivered in One Visit."
  - Subheadline: "Achieve up to 8 shades of whiter teeth with our advanced cold-light technology. 100% enamel-safe with zero sensitivity—guaranteed."
  - Primary CTA: "Claim Your New Patient Special"
- **Trust Bar**: Add a social proof row below the CTA featuring:
  - "4.9/5 stars from 200+ local patients."
  - Trust Icons: "FDA Approved," "BPA-Free Materials," "Lead Clinician Supervised."
- **Visuals**: High-resolution "lifestyle" image on the right.
- **Responsive**: Ensure the Hero image stacks below the copy on mobile.

---

## Verification Plan

### Automated Tests
- `npm run lint` - verify no linting errors after style changes.
- Browser test: Verify visual layout and responsiveness across desktop and mobile.

### Manual Verification
- Review the "Clean Luxury" look & feel (Check hex codes #FFFFFF, #0F172A, #D4AF37).
- Verify the "Social Proof" Trust Bar row content and iconography.
- Confirm the Serif font (headings) and Sans-Serif font (body) are applied correctly.
