# CTA Strategy - Bright Smile Dental Clinic

**Target:** 3+ Call-to-Action placements across landing page  
**Primary Action:** "Book Appointment" → Modal  
**Secondary Route:** Contact page for inquiries

---

## CTA Placement Map

### CTA #1: Header "Book Appointment"
**Location:** Top-right of sticky header  
**Copy:** "Book Appointment"  
**Style:** `cta-button` (Primary Radiant Blue)  
**Action:** Opens BookingModal  
**Responsive:** 
- Desktop: Visible button in header
- Mobile: Part of mobile nav menu or sticky CTA

**Context:** First impression, always visible

---

### CTA #2: Hero Section Primary CTA
**Location:** Below hero headline, centered  
**Copy:** "Book Your Free Consultation"  
**Size:** Large (px-8 py-4)  
**Style:** `cta-button` (Primary Radiant Blue)  
**Secondary Copy:** "Questions? Contact Sarah" → Links to `/contact` page  
**Action:** Opens BookingModal  

**Hero Flow:**
```
Headline: "Transform Your Smile with Professional Whitening"
Sub-headline: "Achieve 8+ shades brighter in just one session"
[Hero Image]
[Primary CTA Button: "Book Your Free Consultation"]
[Secondary Link: "Questions? Contact Sarah →"]
[Secondary Link: "Learn How It Works ↓"]
```

**Conversion Optimization:**
- Primary button draws attention
- Secondary link provides alternative for hesitant users
- "Learn How It Works" scroll anchor builds engagement

---

### CTA #3: Feature Cards (Optional Call-Out)
**Location:** Bottom-right of Features section  
**Copy:** "Ready? Book Now" or "Schedule Whitening →"  
**Style:** `cta-glass` (Glass effect with Radiant Blue text)  
**Size:** Small/Medium  
**Action:** Opens BookingModal  

**Strategy:** 
- Not required on every card, but available as escape hatch
- Appears after user learns about features
- Creates second conversion opportunity

---

### CTA #4: Before/After Carousel Overlay
**Location:** Bottom overlay on carousel  
**Copy:** "Schedule Your Transformation"  
**Style:** `cta-button` with slight transparency overlay  
**Size:** Medium  
**Action:** Opens BookingModal  

**Strategy:**
- Capitalizes on visual proof of results
- Emotional trigger: "I want this transformation"
- Visible on each slide or as persistent bottom CTA

---

### CTA #5: Testimonials Section
**Location:** Below testimonial grid, centered  
**Copy:** "Join Hundreds of Smiling Customers - Book Now"  
**Style:** `cta-button` (Primary Radiant Blue)  
**Size:** Medium  
**Action:** Opens BookingModal  

**Strategy:**
- Reinforces social proof
- Combines FOMO + authority
- Bridges testimonials to action

---

### CTA #6: Pricing Cards (Tier-Specific)
**Location:** Bottom of each pricing card  

**Signature Card (Highlighted):**
- **Copy:** "Book Now" or "Claim This Deal"
- **Style:** `cta-button` (Primary Radiant Blue, larger)
- **Size:** Large (full card width or near)
- **Emphasis:** Badge "Most Popular"
- **Action:** Opens BookingModal with tier pre-selected

**Essential & Elite Cards:**
- **Copy:** "Choose Essential" / "Choose Elite"
- **Style:** Secondary button (border or subtle background)
- **Size:** Medium
- **Action:** Opens BookingModal with respective tier selected

**Pricing CTA Flow:**
```
Signature Card (Center, Lifted)
┌─────────────────┐
│ Signature       │
│ $499            │
│ ⭐ Most Popular │
│ [Features]      │
│ [Large CTA]     │ ← Prominent booking button
└─────────────────┘

Essential Card    Elite Card
┌──────────┐    ┌──────────┐
│ Essential│    │ Elite    │
│ $[Price] │    │ $[Price] │
│ [Features]    │ [Features]
│ [CTA]    │    │ [CTA]    │
└──────────┘    └──────────┘
```

---

### CTA #7: Final CTA Section (Pre-Footer)
**Location:** Full-width banner, before footer  
**Copy:** 
- Headline: "Ready to Brighten Your Smile?"
- Sub: "Schedule your free consultation today"
- Button: "Book Your Appointment Now"

**Style:** 
- Background: Clinic Blue (#F1F5F9) or gradient
- Button: `cta-button` (Primary Radiant Blue)
- Size: Large, eye-catching

**Action:** Opens BookingModal  

**Design:**
```
┌────────────────────────────────────────┐
│                                        │
│  Ready to Brighten Your Smile?         │
│                                        │
│  Schedule your free consultation today │
│                                        │
│     [Large CTA Button]                 │
│                                        │
└────────────────────────────────────────┘
```

---

### CTA #8: Footer Links
**Location:** Footer contact section  
**Copy:** 
- "Call us: [Phone #]" (tel link)
- "Email us: [Email]" (mailto link)
- "Contact Form →" (links to `/contact`)

**Style:** Secondary links (text color + underline)  
**Action:** Phone call / email / contact page  

**Footer CTA Placement:**
```
FOOTER
├─ About Section
├─ Quick Links
├─ Hours
└─ Contact (PRIMARY FOOTER CTA)
   ├─ [Phone Link]
   ├─ [Email Link]
   ├─ [Address]
   └─ [Contact Form Button]
```

---

## Modal: BookingModal Component

### Modal Structure

**Trigger:** All booking-related CTAs (except footer links)

**Content:**
```
┌─────────────────────────────────────┐
│ Schedule Your Free Consultation  [X] │
├─────────────────────────────────────┤
│                                     │
│  Name: [Text Input]                 │
│  Email: [Email Input]               │
│  Phone: [Tel Input]                 │
│  Preferred Date: [Date Picker]      │
│  Time Preference: [Select]          │
│  Message: [Textarea] (optional)     │
│                                     │
│  [Confirm Appointment] [Cancel]     │
│                                     │
└─────────────────────────────────────┘
```

### Modal Behavior

- **Open:** Smooth fade-in with backdrop
- **Close:** Click X, click outside (optional), or success state
- **Form Validation:** Real-time feedback on required fields
- **Success State:** 
  - "Thank you! We'll contact you soon."
  - Auto-close after 2-3 seconds
  - Alternative: Show booking confirmation

### Form Accessibility

- All inputs properly labeled
- Error messages clear and helpful
- Focus management (trap focus inside modal)
- Keyboard navigation (Tab, Shift+Tab, Escape to close)

### Optional: Tier Pre-Selection

If pricing cards trigger modal, pass selected tier:
```jsx
// From PricingCard
<button onClick={() => openModal({ tier: 'signature' })}>
  Book Now
</button>

// Modal reflects selection
<input type="hidden" name="tier" value="signature" />
```

---

## Contact Page Route: `/contact`

### Secondary CTA Target

**When users click:**
- "Questions? Contact Sarah" (from hero)
- "Contact Form →" (from footer)
- "Need more info?" (optional secondary link)

### Contact Form

**Purpose:** Detailed inquiries, not immediate booking

**Fields:**
- Full Name
- Email
- Phone
- Subject (dropdown)
- Message (textarea)
- Subscribe to updates (checkbox)

**Subjects:**
- "Pricing Inquiry"
- "Technical Question"
- "General Feedback"
- "Special Request"

**Differences from Booking Modal:**
- Longer form (subject, detailed message)
- No date picker
- More conversational tone
- Could include FAQ section

---

## CTA Copy Variations

### High-Intent Copy (Primary CTAs)
- "Book Your Appointment Now"
- "Schedule Your Consultation"
- "Claim Your Brighter Smile"
- "Start Your Whitening Journey"

### Value-Focused Copy
- "Book Your Free Consultation"
- "See Your Transformation"
- "Join 500+ Happy Customers"

### Urgency Copy (Optional for testing)
- "Book Today - Limited Slots"
- "Claim Your Appointment"
- "Reserve Your Slot Now"

### Secondary/Contact Copy
- "Questions? Contact Sarah"
- "Have Questions? Reach Out"
- "Need Guidance? Contact Us"

---

## CTA Button Styling

### Primary Button (Most CTAs)
```jsx
<button className="cta-button">
  Book Your Appointment
</button>
```

**Styles Applied:**
- Background: `bg-primary` (#0052CC)
- Text: `text-primary-foreground` (white)
- Padding: `py-3 px-8`
- Border Radius: `rounded-lg` (12px)
- Font Weight: `font-semibold`
- Hover: Opacity reduction, shadow increase
- Focus: Ring outline
- Active: Scale down (0.98)

### Secondary Button (Alternative CTAs)
```jsx
<button className="cta-glass">
  Learn More
</button>
```

**Styles Applied:**
- Background: Glass effect with transparency
- Border: Subtle white border
- Text: Primary color
- Backdrop: Blur effect
- Hover: Opacity increase

### Tertiary Button (Footer/Small CTAs)
```jsx
<a href="/contact" className="text-primary hover:underline">
  Contact Form →
</a>
```

**Styles Applied:**
- Text color only
- Underline on hover
- Minimal styling (text link)

---

## Conversion Funnel

### Awareness → Consideration → Conversion

```
AWARENESS
├─ Hero Section
│  ├─ Main Headline
│  └─ CTA #1 (Book Now)
│
CONSIDERATION
├─ Features Section
│  ├─ Proof of technology
│  └─ CTA #2 (Optional: Book Now)
│
├─ Before/After Carousel
│  ├─ Visual proof
│  └─ CTA #3 (Schedule Transformation)
│
├─ Testimonials
│  ├─ Social proof
│  └─ CTA #4 (Join Customers)
│
DECISION
├─ Pricing Section
│  ├─ Clear value proposition
│  └─ CTA #5 (Tier-specific booking)
│
├─ FAQ Section
│  ├─ Objection handling
│  └─ Builds trust
│
CONVERSION
├─ Final CTA Section
│  └─ CTA #6 (Book Now)
│
└─ Modal: Capture contact info
   └─ Thank you message
```

---

## Analytics & Tracking

### CTA Events to Track

- `click_cta_header` - Header booking button
- `click_cta_hero_primary` - Hero main CTA
- `click_cta_hero_secondary` - Hero "Contact Sarah"
- `click_cta_features` - Features section CTA
- `click_cta_before_after` - Carousel CTA
- `click_cta_testimonials` - Testimonial section CTA
- `click_cta_pricing_[tier]` - Tier-specific CTA
- `click_cta_final` - Final CTA section
- `modal_open` - Modal opened
- `modal_submit` - Form submitted
- `contact_page_view` - Contact page visited
- `contact_form_submit` - Contact form submitted

### Conversion Goals

1. **Primary Goal:** Modal submission (booking)
2. **Secondary Goal:** Contact page visit (awareness)
3. **Engagement Goals:** 
   - Carousel interaction
   - FAQ accordion opens
   - Section scroll-to-view

---

## Mobile CTA Strategy

### Mobile-Specific Optimizations

**Sticky CTA Button:**
- Fixed button at bottom on mobile
- Copy: "Book Now" (short, fits small screen)
- Always visible during scroll
- Prevents accidental clicks (high enough from edge)

**Mobile Nav CTA:**
- "Book Appointment" as first menu item (mobile nav)
- Distinguishes from other nav links (color/style)

**Touch-Friendly Sizes:**
- Button minimum 44x44px
- Proper spacing around CTAs
- No overlapping elements

**Mobile CTA Placement:**
```
Mobile Viewport
┌──────────────────┐
│  Header          │
│  [Menu] [CTA]    │ ← Sticky header CTA
├──────────────────┤
│                  │
│  Hero Section    │
│                  │
│  [Hero Image]    │
│  [CTA Button]    │
│                  │
├──────────────────┤
│  Features (1col) │
│  [Feature Card]  │
│  [CTA Link]      │
├──────────────────┤
│  ...             │
│  ...             │
├──────────────────┤
│  [Sticky CTA] ←  │ Floating button
└──────────────────┘
```

---

## A/B Testing Opportunities

### Test Variations

1. **CTA Copy:**
   - "Book Appointment" vs. "Schedule Consultation"
   - "Book Now" vs. "Get Started"

2. **CTA Color:**
   - Primary blue vs. accent color
   - Contrast testing

3. **CTA Placement:**
   - Hero position (top vs. below image)
   - Floating vs. static

4. **Modal Trigger:**
   - Immediate modal vs. intermediate page
   - With/without form pre-fill

5. **Copy Tone:**
   - Formal ("Schedule Appointment")
   - Casual ("Book Your Spot")
   - Urgent ("Claim Your Consultation")

---

## CTA Success Metrics

### KPIs to Monitor

- **Click-Through Rate (CTR):** % of visitors who click CTA
- **Modal Open Rate:** % who open booking modal
- **Form Completion Rate:** % who complete booking form
- **Conversion Rate:** % who submit booking
- **Contact Page Visits:** % who visit contact page
- **Average Time to CTA:** When do users typically convert?
- **CTA Performance by Section:** Which placement converts best?

### Performance Targets

- Hero CTA CTR: > 15%
- Modal Completion: > 70%
- Overall Conversion Rate: > 3%
- Contact Page Bounce: < 40%

---

**CTA Strategy Version:** 1.0  
**Last Updated:** February 22, 2026  
**Status:** Ready for Implementation
