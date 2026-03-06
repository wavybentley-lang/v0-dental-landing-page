# IMPLEMENT_MOBILE_BY_BOLT.md - Mobile Optimization Plan

This implementation plan focuses strictly on enhancing the mobile user experience for the dental landing page, ensuring high performance, readability, and conversion-driven design on small screens.

## 🎯 Objectives
- Optimize navigation and header for accessibility.
- Refine hero section for immediate impact on mobile.
- Enhance media presentation and loading performance.
- Improve pricing and form interactions for touch devices.

---

## 🛠️ Proposed Changes

### 1. Navigation & Header
- **[x] Hamburger Menu:** Convert current desktop navigation (6+ links) into a premium mobile hamburger menu to reduce clutter.
- **[x] Sticky Header:** Keep the header fixed at the top with a "Book Appointment" button and clear phone number link always accessible.
- **[x] Tap Targets:** Ensure all interactive elements (links, buttons) have a minimum height of 44px for easy thumb-tapping.

### 2. Hero Section
- **[x] Font Sizing:** Reduce the main headline ("The Smile You've Always Wanted...") to 28-32px (down from desktop 48-56px).
- **[x] Button Spacing:** Stack the main CTA and patient avatars vertically with 16-24px gaps for better breathing room.
- **[x] Urgency Banner:** Make the "Only 3 appointment slots left" message more prominent with higher contrast or slightly larger text on mobile.

### 3. Images & Media
- **[ ] Before/After Comparisons:** Stack before and after images vertically instead of side-by-side to maintain detail on narrow screens.
- **[ ] Lazy Loading:** Implement native `loading="lazy"` or a library for all section images to speed up initial page load.
- **[ ] Video Thumbnails:** Replace auto-embedding video testimonials with static poster images and centered play buttons to save bandwidth.

### 4. Pricing Section
- **[ ] Swipeable Cards:** Convert the three-tier pricing layout into a horizontal swipeable carousel for mobile users.
- **[ ] Highlight Recommended:** Ensure the "Signature" tier is visually distinct and prominent as the recommended choice in the mobile view.
- **[ ] Accordion Tables:** If feature tables are present, collapse them into expandable accordions to prevent horizontal scrolling.

### 5. Typography & Spacing
- **[ ] Line Height:** Increase body text line-height to 150% (1.5) for improved readability.
- **[ ] Section Padding:** standardise vertical padding between sections to 40-60px to avoid a cramped feel.
- **[ ] Fluid Typography:** Use CSS `clamp()` or `vw` units for smooth scaling across different mobile device widths.

### 6. Forms & CTAs
- **[ ] Larger Inputs:** Ensure all form input fields are at least 48px tall.
- **[ ] Single Column Layout:** Stack all form fields (name, email, phone) vertically in a single column.
- **[ ] Floating Labels:** Implement floating labels to save vertical space while keeping context visible.
- **[ ] Bottom CTA Bar:** Add a fixed-position bottom bar with a single "Book Appointment" button on key conversion pages.

### 7. Performance & Technical
- **[ ] Image Optimization:** Ensure all images are compressed (aim for <200KB) and served in modern formats like WebP.
- **[ ] Motion Reduction:** Minimize or remove heavy animations on mobile to ensure smooth scrolling and faster interaction.
- **[ ] Critical CSS:** Inline critical above-the-fold CSS to optimize the Largest Contentful Paint (LCP) for mobile users.

---

## ✅ Verification Checklist

- [ ] Header remains sticky and usable on scroll.
- [ ] Hamburger menu opens/closes smoothly with no layout shift.
- [ ] Before/After images are clearly visible when stacked.
- [ ] Pricing carousel swipes smoothly on touch devices.
- [ ] All buttons meet the 44px minimum tap target requirement.
- [ ] Form is easy to fill out with one hand.
- [ ] Page speed score for mobile is >90 (Lighthouse).

> [!IMPORTANT]
> This plan is strictly for mobile optimizations. No desktop-specific logic or general site architecture should be altered outside of these responsive enhancements.
