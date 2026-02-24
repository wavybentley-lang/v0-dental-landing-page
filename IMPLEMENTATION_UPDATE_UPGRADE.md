# IMPLEMENTATION PLAN: World Class Upgrade

This document outlines the steps to elevate the Bright Smile Dental Clinic site from premium to world class. The focus is on visual depth, orchestrated motion, and tactical interactivity.

## CORE OBJECTIVES
1. **Consolidate Theme**: Finalize the "Elegant Nautical" (Gold & Navy) transition across all components.
2. **Orchestrated Motion**: Integrate `framer-motion` for fluid, staggered reveals.
3. **Fluid Scrolling**: Implement refined smooth scrolling (e.g., Lenis) for a luxurious feel.
4. **Subtle Depth**: Add premium textures (grain/noise) and sophisticated gradients.

---

## PROGRESS CHECKLIST

### Phase 1: Foundation & Dependencies
- [ ] Install `framer-motion` & `clsx` / `tailwind-merge` (if not present)
- [ ] Add `.noise-overlay` and premium gradients to `globals.css`
- [ ] Finalize Gold (`#C9A96E`) and Navy (`#1B2B4B`) variables in `:root`

### Phase 2: Orchestrated Animations (Framer Motion)
- [ ] **Hero Section**: Implement staggered text reveal and floating badges
- [ ] **Features Section**: Add layout-shift and reveal-on-scroll animations
- [ ] **Navigation**: Refine sticky transitions and hover states

### Phase 3: Fluid Scrolling & Subtle Transitions
- [ ] Implement Lenis (or similar) for momentum-based smooth scrolling
- [ ] Refine all hover transitions to be "subtle" (600ms+ timing with ease-out)
- [ ] Refine `ui/button.tsx` with elegant, slow-fade hover states

### Phase 4: Component Polish
- [ ] **Before/After**: Update slider to use Gold/Navy theme with an elegant, simple handle
- [ ] **Experts Section**: Implement tiered, subtle reveal for profiles
- [ ] **Trust Bar**: Add gentle, staggered fade-in for badges

### Phase 5: Verification & Audit
- [ ] Verify GPU-acceleration for all animations
- [ ] Audit responsive behavior on mobile/tablet
- [ ] Final visual pass for theme consistency (No "Radiant Blue" remaining)

---

## TECHNICAL SPECIFICATIONS

### Framer Motion Standards
- Use `initial`, `animate`, and `whileInView` for reveals.
- Prefers `spring` transitions for tactile feel, `tween` for opacity fades.
- Respect `prefers-reduced-motion` settings.

### Visual Depth
```css
/* Example Grain Overlay */
.noise-overlay::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.05;
  pointer-events: none;
  z-index: 9999;
}
```

---

**Target Status:** World Class 🚀
**Last Updated:** February 24, 2026
