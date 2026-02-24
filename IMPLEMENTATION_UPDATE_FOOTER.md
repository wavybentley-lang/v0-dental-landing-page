# IMPLEMENTATION PLAN - Trust Infrastructure & Contact Systems

This document outlines the plan for building out the trust infrastructure and contact systems for the website, including header updates, a new provider section, and a footer overhaul.

## 1. Navigation & Header Updates
- **Objective**: Add a high-visibility Top Bar for immediate contact and trust signalling.
- **Tasks**:
    - [ ] Create a `TopBar` sub-component within `Header.tsx` (or a separate file if needed).
    - [ ] Add clickable phone number (`tel:+15550001234`) with a phone icon.
    - [ ] Display business hours: "Mon-Fri: 8am - 6pm, Sat: 9am - 4pm".
    - [ ] Implement mobile-responsive design:
        - [ ] On mobile, highlight a "Call Now" icon/button in the top bar.
        - [ ] Ensure the top bar is sticky or integrated seamlessly with the main navbar.
- **Styling**: Use `bg-navy-dark` or a contrasting `bg-gold` for the top bar to make it pop.

## 2. Provider & Trust Section (New Component)
- **Objective**: Establish authority and trust through medical expertise.
- **Component**: `ExpertsSection.tsx`
- **Tasks**:
    - [ ] Create a new component `components/ExpertsSection.tsx`.
    - [ ] Design "Meet Our Experts" layout below the Hero or Services.
    - [ ] Add expert profiles (e.g., Dr. Jane Smith, Lead Clinician):
        - [ ] Placeholder headshots (using `generate_image` or high-quality UI placeholders).
        - [ ] Name and Role.
        - [ ] **Credentials Block**: Board certifications, years of experience (15+), specialized training.
    - [ ] **Trust Bar**:
        - [ ] Display 4-5 badges/icons: "Board Certified", "HIPAA Compliant", "5-Star Rated", "15+ Years Experience".
        - [ ] Use subtle animations or hover effects for the badges.
- **Styling**: Medical-grade aesthetic, high whitespace, "trustworthy" teals and blues.

## 3. Footer Overhaul
- **Objective**: Replace all placeholders with functional data and interactive elements.
- **Tasks**:
    - [ ] Update `components/Footer.tsx` with live clinical data.
    - [ ] **Column 1 (Contact)**: 
        - [ ] Physical address: "123 Dental Ave, Suite 100, San Francisco, CA 94102".
        - [ ] Add a "Get Directions" link (Google Maps external link).
    - [ ] **Column 2 (Quick Links)**:
        - [ ] Link to all main service sections.
        - [ ] Add "Privacy Policy" and "Terms of Service" clearly.
    - [ ] **Column 3 (Hours)**:
        - [ ] Detailed full weekly schedule (Mon-Sun).
    - [ ] **Column 4 (Map)**:
        - [ ] Embed a functional Google Maps iframe or a stylized map component centered on the clinic location.
- **Styling**: Ensure contrast is high and links are easily tappable on mobile.

## 4. Technical Specs & Aesthetic
- **Technical**:
    - [ ] All phone links must use `tel:` protocol.
    - [ ] Ensure the "Book Now" CTA is visible or nearby trust signals.
    - [ ] Accessible heading hierarchy (H2 for "Meet Our Experts").
- **Aesthetic**:
    - [ ] Use `DESIGN_TOKENS.md` colors (Navy, Gold, Teal).
    - [ ] High whitespace to evoke a "clean/clinical" feel.
    - [ ] Clear sans-serif typography (Inter/Roboto).

## Implementation Checklist

### Phase 1: Header & Top Bar
- [x] Implement `TopBar` in `Header.tsx`
- [x] Add Phone & Hours
- [x] Mobile "Call Now" optimization
- [x] Verify sticky behavior

### Phase 2: Experts & Trust Section
- [x] Create `ExpertsSection.tsx`
- [x] Add Provider data and Credentials
- [x] Implement Trust Bar badges
- [x] Integrate into `app/page.tsx`
- [x] Styling and animations

### Phase 3: Footer Overhaul
- [x] Update Address & "Get Directions"
- [x] Refine Quick Links
- [x] Add full Hours schedule
- [x] Embed Google Maps
- [x] Final visual polish (Visibility fixed)

### Phase 4: Final Review
- [x] Mobile responsiveness check
- [x] Link verification (`tel:`, maps, etc.)
- [ ] SEO check (Semantic HTML)
- [x] Performance check (Visibility optimized)
