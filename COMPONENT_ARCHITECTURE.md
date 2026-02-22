# Component Architecture - Bright Smile Dental Clinic

**Visual Overview of Component Structure & Dependencies**

---

## Page Hierarchy

```
app/layout.tsx (Root Layout)
├── Fonts: Geist, Geist Mono
├── SEO Metadata
├── Analytics
└── <children>
    │
    ├── app/page.tsx (Landing Page)
    │   ├── <Header />
    │   ├── <HeroSection />
    │   ├── <FeaturesSection />
    │   │   └── <FeatureCard /> × 3
    │   ├── <BeforeAfterCarousel />
    │   │   └── <BeforeAfterImage /> × N
    │   ├── <TestimonialSection />
    │   │   └── <TestimonialCard /> × 3
    │   ├── <PricingSection />
    │   │   └── <PricingCard /> × 3
    │   ├── <FAQSection />
    │   ├── <CTASection />
    │   ├── <Footer />
    │   └── <BookingModal /> (Portal)
    │
    └── app/contact/page.tsx (Contact Page)
        ├── <Header />
        ├── <ContactForm />
        └── <Footer />

hooks/
└── useModal.ts (Modal state management)
```

---

## Component Specifications

### 1. Header Component

**File:** `components/Header.tsx`  
**Lines:** ~150  
**Props:** None (uses context for modal state)

**Features:**
- Logo placeholder (left)
- Navigation menu (center/responsive)
- CTA button (right)
- Sticky behavior on scroll
- Mobile hamburger menu toggle

**Structure:**
```jsx
<header className="sticky top-0 z-50">
  <Container>
    <Flexbox justify-between items-center>
      <Logo />
      <Nav /> {/* Desktop only, md:block */}
      <CTAButton onClick={openModal} />
    </Flexbox>
  </Container>
</header>
```

**Dependencies:**
- `useModal` hook
- Lucide Icons (Menu, X)
- shadcn/Button

**Responsive:**
- Desktop: Full nav visible
- Mobile: Hamburger menu (click toggles MobileNav)

---

### 2. MobileNav Component

**File:** `components/MobileNav.tsx`  
**Lines:** ~120  
**Props:** `{ isOpen: boolean; onClose: () => void }`

**Features:**
- Vertical menu layout
- Visible only on mobile (md:hidden)
- Close button (X)
- Navigation links
- CTA button at bottom

**Structure:**
```jsx
<nav className={`md:hidden fixed top-0 left-0 ...`}>
  <Container>
    <div className="flex flex-col gap-4">
      <CloseButton />
      {navLinks.map(link => <Link />)}
      <CTAButton />
    </div>
  </Container>
</nav>
```

**Dependencies:**
- `useModal` hook
- Lucide Icons
- shadcn/Button

---

### 3. HeroSection Component

**File:** `components/HeroSection.tsx`  
**Lines:** ~120  
**Props:** None

**Features:**
- Full-width hero with image/gradient
- Animated headline (fade-in + slide-up)
- Sub-headline
- Hero image (scale-in animation)
- Primary CTA button
- Secondary link ("Contact Sarah")
- Scroll indicator ("Learn How It Works ↓")

**Structure:**
```jsx
<section className="w-full min-h-screen flex items-center">
  <Container>
    <Grid cols-1 lg:cols-2 gap-8>
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Headline</h1>
        <p className="text-muted-foreground">Sub-headline</p>
        <Flexbox gap-4>
          <CTAButton onClick={openModal}>Book</CTAButton>
          <SecondaryLink href="/contact">Contact Sarah</SecondaryLink>
        </Flexbox>
      </div>
      <Image className="animate-scale-in" />
    </Grid>
  </Container>
</section>
```

**Animations:**
- Headline: fade-in (600ms)
- Image: scale-in (500ms)
- Scroll indicator: floating animation

**Dependencies:**
- `useModal` hook
- Next.js Image component
- Tailwind animation classes

---

### 4. FeaturesSection Component

**File:** `components/FeaturesSection.tsx`  
**Lines:** ~150  
**Props:** None

**Features:**
- 3-column grid (responsive)
- Section heading
- Grid of FeatureCard components
- Staggered animation on scroll
- Optional bottom CTA

**Structure:**
```jsx
<section className="py-12 md:py-16 lg:py-20 bg-secondary">
  <Container>
    <h2 className="text-3xl text-center mb-12">Features</h2>
    <Grid cols-1 md:cols-2 lg:cols-3 gap-6>
      {features.map((feature, i) => (
        <FeatureCard 
          key={i}
          {...feature}
          delay={i * 100} // Stagger delay
        />
      ))}
    </Grid>
    <Flexbox justify-center mt-12>
      <SecondaryLink>Ready? Book Now →</SecondaryLink>
    </Flexbox>
  </Container>
</section>
```

**Data Structure:**
```ts
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}
```

**Dependencies:**
- FeatureCard component
- Tailwind grid classes
- Animation utilities

---

### 5. FeatureCard Component

**File:** `components/FeatureCard.tsx`  
**Lines:** ~100  
**Props:** `{ icon: ReactNode; title: string; description: string; delay: number }`

**Features:**
- Glass effect background
- Icon with hover effect
- Title and description text
- Hover lift effect
- Optional staggered animation

**Structure:**
```jsx
<div 
  className="glass-effect p-6 rounded-lg animate-scroll-reveal"
  style={{ animationDelay: `${delay}ms` }}
>
  <div className="mb-4 transform group-hover:scale-110 transition-transform">
    {icon}
  </div>
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-muted-foreground">{description}</p>
</div>
```

**Styling:**
- Glass effect with backdrop blur
- Icon scaling on hover
- Subtle shadow increase

**Dependencies:**
- Tailwind glass-effect class
- Lucide icons (passed as prop)

---

### 6. BeforeAfterCarousel Component

**File:** `components/BeforeAfterCarousel.tsx`  
**Lines:** ~200  
**Props:** None

**Features:**
- Image carousel (swipeable on mobile)
- Navigation arrows (desktop)
- Dot indicators
- Overlay CTA button
- Smooth transitions

**Structure:**
```jsx
<section className="py-12">
  <Container>
    <h2>Real Results</h2>
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="flex gap-4">
          {images.map((img, i) => (
            <BeforeAfterImage
              key={i}
              before={img.before}
              after={img.after}
              visible={i === activeIndex}
            />
          ))}
        </div>
      </div>
      <NavArrows />
      <Indicators />
      <OverlayCTA />
    </div>
  </Container>
</section>
```

**State:**
- `activeIndex` - Current slide
- `direction` - Animation direction

**Interactions:**
- Arrow click: Navigate slides
- Dot click: Jump to slide
- Swipe (mobile): Navigate slides
- Auto-advance (optional)

**Dependencies:**
- BeforeAfterImage component
- Lucide Icons (ChevronLeft, ChevronRight)

---

### 7. BeforeAfterImage Component

**File:** `components/BeforeAfterImage.tsx`  
**Lines:** ~100  
**Props:** `{ before: string; after: string; visible: boolean }`

**Features:**
- Side-by-side before/after
- Smooth fade between images
- Hover zoom effect
- Image lazy loading

**Structure:**
```jsx
<div className="relative w-full h-96 group">
  <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
    <Image
      src={before}
      alt="Before whitening"
      className="w-full h-full object-cover"
    />
    <Image
      src={after}
      alt="After whitening"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
</div>
```

**Animations:**
- Fade in (600ms) when visible
- Zoom on hover

**Dependencies:**
- Next.js Image component
- Tailwind animations

---

### 8. TestimonialSection Component

**File:** `components/TestimonialSection.tsx`  
**Lines:** ~150  
**Props:** None

**Features:**
- 3-column grid (responsive)
- Section heading "What Our Customers Say"
- Grid of TestimonialCard components
- Bottom CTA button
- Staggered animation on scroll

**Structure:**
```jsx
<section className="py-12 bg-background">
  <Container>
    <h2 className="text-center mb-12">What Our Customers Say</h2>
    <Grid cols-1 md:cols-2 lg:cols-3 gap-6>
      {testimonials.map((t, i) => (
        <TestimonialCard 
          key={i}
          {...t}
          delay={i * 100}
        />
      ))}
    </Grid>
    <Flexbox justify-center mt-12>
      <CTAButton onClick={openModal}>
        Join Hundreds of Smiling Customers
      </CTAButton>
    </Flexbox>
  </Container>
</section>
```

**Data Structure:**
```ts
interface Testimonial {
  name: string;
  profession: string;
  image: string;
  quote: string;
  rating: number;
}
```

**Dependencies:**
- TestimonialCard component
- useModal hook

---

### 9. TestimonialCard Component

**File:** `components/TestimonialCard.tsx`  
**Lines:** ~120  
**Props:** `{ name: string; profession: string; image: string; quote: string; rating: number; delay: number }`

**Features:**
- Glass effect card
- Circular avatar image
- Customer name & profession
- Star rating (1-5)
- Quote text
- Staggered animation

**Structure:**
```jsx
<div 
  className="glass-effect p-6 rounded-lg flex flex-col animate-scroll-reveal"
  style={{ animationDelay: `${delay}ms` }}
>
  <StarRating rating={rating} />
  <p className="mb-4 text-foreground italic">"{quote}"</p>
  <Flexbox items-center gap-4 mt-auto>
    <Image 
      src={image}
      alt={name}
      className="w-12 h-12 rounded-full"
    />
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-muted-foreground">{profession}</p>
    </div>
  </Flexbox>
</div>
```

**Components:**
- StarRating (custom or shadcn)

**Dependencies:**
- Lucide Icons (Star)

---

### 10. PricingSection Component

**File:** `components/PricingSection.tsx`  
**Lines:** ~150  
**Props:** None

**Features:**
- 3-column grid (responsive)
- Section heading "Pricing"
- Signature card highlighted (lifted, larger)
- Grid of PricingCard components
- Staggered fade-in animation

**Structure:**
```jsx
<section className="py-12 bg-secondary">
  <Container>
    <h2 className="text-center mb-12">Transparent Pricing</h2>
    <Grid cols-1 md:cols-3 gap-6>
      {pricingTiers.map((tier, i) => (
        <PricingCard
          key={i}
          {...tier}
          featured={tier.id === 'signature'}
          delay={i * 100}
        />
      ))}
    </Grid>
  </Container>
</section>
```

**Data Structure:**
```ts
interface PricingTier {
  id: 'essential' | 'signature' | 'elite';
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
}
```

**Signature Tier Styling:**
- `lg:scale-105` (1.05x scale)
- `shadow-lg` (stronger shadow)
- Higher z-index for visual prominence

**Dependencies:**
- PricingCard component
- useModal hook

---

### 11. PricingCard Component

**File:** `components/PricingCard.tsx`  
**Lines:** ~140  
**Props:** `{ id: string; name: string; price: number; description: string; features: string[]; cta: string; featured: boolean; delay: number }`

**Features:**
- Glass effect card
- Tier name and price
- Feature list (checkmarks)
- CTA button (tier-specific behavior)
- "Most Popular" badge (for Signature)
- Optional featured styling

**Structure:**
```jsx
<div 
  className={`glass-effect p-6 rounded-lg flex flex-col animate-scroll-reveal ${
    featured ? 'lg:scale-105 shadow-lg' : ''
  }`}
  style={{ animationDelay: `${delay}ms` }}
>
  {featured && <Badge>Most Popular</Badge>}
  <h3 className="text-2xl font-bold mb-2">{name}</h3>
  <p className="text-muted-foreground mb-4">{description}</p>
  <div className="mb-6">
    <span className="text-4xl font-bold">${price}</span>
    <span className="text-muted-foreground">/session</span>
  </div>
  <ul className="mb-6 space-y-2">
    {features.map((feature, i) => (
      <li key={i} className="flex items-center gap-2">
        <Check className="w-5 h-5 text-primary" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
  <CTAButton 
    onClick={() => openModal({ tier: id })}
    className={featured ? 'bg-primary' : ''}
  >
    {cta}
  </CTAButton>
</div>
```

**Props:**
- `featured`: Boolean for visual highlighting
- `delay`: Stagger animation delay

**Dependencies:**
- Lucide Icons (Check)
- useModal hook

---

### 12. FAQSection Component

**File:** `components/FAQSection.tsx`  
**Lines:** ~130  
**Props:** None

**Features:**
- Accordion component (shadcn/ui)
- Section heading
- 4 FAQ items (expandable)
- Smooth open/close animation
- Icon rotation on expand

**Structure:**
```jsx
<section className="py-12 bg-background">
  <Container>
    <h2 className="text-center mb-12">Frequently Asked Questions</h2>
    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Container>
</section>
```

**Data Structure:**
```ts
const faqs = [
  {
    question: "Is teeth whitening safe?",
    answer: "..."
  },
  // ... 3 more FAQs
];
```

**Dependencies:**
- shadcn/ui Accordion
- Lucide Icons (ChevronDown)

---

### 13. CTASection Component

**File:** `components/CTASection.tsx`  
**Lines:** ~100  
**Props:** None

**Features:**
- Full-width banner
- Centered headline
- Sub-headline
- Large primary CTA button
- Background color/gradient
- Subtle animation on scroll

**Structure:**
```jsx
<section className="py-16 bg-secondary">
  <Container>
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Brighten Your Smile?
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        Schedule your free consultation today
      </p>
      <CTAButton onClick={openModal} size="lg">
        Book Your Appointment Now
      </CTAButton>
    </div>
  </Container>
</section>
```

**Animations:**
- Fade-in on scroll
- Optional pulse effect on button

**Dependencies:**
- useModal hook

---

### 14. BookingModal Component

**File:** `components/BookingModal.tsx`  
**Lines:** ~200  
**Props:** `{ isOpen: boolean; onClose: () => void; tier?: string }`

**Features:**
- Modal dialog (headless UI or custom)
- Form with validation
- Success state
- Close button (X icon)
- Backdrop click to close
- Smooth fade-in/out animation

**Form Fields:**
- Name (required, text)
- Email (required, email)
- Phone (required, tel)
- Preferred Date (required, date)
- Time Preference (optional, select)
- Message (optional, textarea)

**Structure:**
```jsx
<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Schedule Your Free Consultation</DialogTitle>
      <DialogClose />
    </DialogHeader>
    
    {!submitted ? (
      <form onSubmit={handleSubmit}>
        <FormField name="name" label="Full Name" />
        <FormField name="email" label="Email" type="email" />
        <FormField name="phone" label="Phone" type="tel" />
        <FormField name="date" label="Preferred Date" type="date" />
        <FormField name="time" label="Time Preference" as="select" />
        <FormField name="message" label="Message" as="textarea" />
        
        <Flexbox gap-4 justify-end>
          <Button onClick={onClose} variant="ghost">Cancel</Button>
          <Button type="submit" className="cta-button">
            Confirm Appointment
          </Button>
        </Flexbox>
      </form>
    ) : (
      <div className="text-center">
        <p className="text-lg font-semibold">
          Thank you! We'll contact you soon.
        </p>
      </div>
    )}
  </DialogContent>
</Dialog>
```

**State:**
- `isOpen` - Modal visibility
- `formData` - Form field values
- `submitted` - Submission status
- `errors` - Validation errors

**Features:**
- Form validation (real-time feedback)
- Success message (auto-close after 2-3s)
- Keyboard navigation (Tab, Escape)
- Focus trap inside modal

**Dependencies:**
- Headless UI Dialog or shadcn/Dialog
- React Hook Form (optional)
- Lucide Icons (X)

---

### 15. ContactForm Component

**File:** `components/ContactForm.tsx`  
**Lines:** ~180  
**Props:** None

**Features:**
- Full contact form
- Form validation
- Subject dropdown
- Optional email subscription checkbox
- Success message
- Error handling

**Structure:**
```jsx
<form onSubmit={handleSubmit} className="space-y-4">
  <FormField name="name" label="Full Name" required />
  <FormField name="email" label="Email" type="email" required />
  <FormField name="phone" label="Phone" type="tel" />
  <FormField 
    name="subject" 
    label="Subject" 
    as="select"
    options={subjectOptions}
  />
  <FormField 
    name="message" 
    label="Message" 
    as="textarea"
    required
  />
  <Checkbox name="subscribe" label="Subscribe to email updates" />
  
  <Button type="submit" className="cta-button">
    Send Message
  </Button>
</form>
```

**Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Subject (required, dropdown)
- Message (required, textarea)
- Subscribe checkbox (optional)

**Subjects:**
- "Pricing Inquiry"
- "Technical Question"
- "General Feedback"
- "Special Request"

**Dependencies:**
- Form components
- React Hook Form (optional)

---

### 16. Footer Component

**File:** `components/Footer.tsx`  
**Lines:** ~180  
**Props:** None

**Features:**
- 4-column layout (responsive)
- About section with social icons
- Quick links
- Business hours
- Contact information
- Copyright
- Back-to-top button
- Link hover animations

**Structure:**
```jsx
<footer className="bg-foreground text-background py-12">
  <Container>
    <Grid cols-1 md:cols-2 lg:cols-4 gap-8 mb-8>
      <Section title="About">
        <Logo />
        <SocialIcons />
      </Section>
      <Section title="Quick Links">
        <NavLinks />
      </Section>
      <Section title="Hours">
        <Hours />
      </Section>
      <Section title="Contact">
        <ContactInfo />
      </Section>
    </Grid>
    
    <Divider />
    
    <Flexbox justify-between items-center>
      <Copyright />
      <Flexbox gap-4>
        <Link>Privacy Policy</Link>
        <Link>Terms of Service</Link>
        <BackToTopButton />
      </Flexbox>
    </Flexbox>
  </Container>
</footer>
```

**Back-to-Top Button:**
- Smooth scroll to top
- Visible after scroll threshold
- Icon: ChevronUp

**Dependencies:**
- Lucide Icons (Facebook, Instagram, Twitter, etc.)
- Next.js Link component

---

## State Management

### useModal Hook

**File:** `hooks/useModal.ts`  
**Purpose:** Centralized modal state for booking

**Implementation:**
```ts
import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState<string | null>(null);
  
  const openModal = (options?: { tier?: string }) => {
    if (options?.tier) setTier(options.tier);
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
    setTier(null);
  };
  
  return { isOpen, openModal, closeModal, tier };
}
```

**Usage:**
```jsx
const { isOpen, openModal, closeModal, tier } = useModal();

// Trigger modal
<button onClick={() => openModal({ tier: 'signature' })}>
  Book Now
</button>

// Render modal
<BookingModal 
  isOpen={isOpen} 
  onClose={closeModal}
  tier={tier}
/>
```

---

## Context/Shared State (Optional)

### ModalContext (Alternative to useModal hook)

```ts
// contexts/ModalContext.tsx
export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState<string | null>(null);
  
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, tier, setTier }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}
```

**Note:** Since no complex state management is needed, a simple hook is preferred.

---

## Responsive Grid Behavior

### Features Section
```
Mobile (< 640px):
┌─────────────┐
│ Feature 1   │
├─────────────┤
│ Feature 2   │
├─────────────┤
│ Feature 3   │
└─────────────┘

Tablet (640px - 1024px):
┌──────────┬──────────┐
│Feature 1 │ Feature 2│
├──────────┴──────────┤
│     Feature 3       │
└─────────────────────┘

Desktop (> 1024px):
┌────────┬────────┬────────┐
│Feature1│Feature2│Feature3│
└────────┴────────┴────────┘
```

### Pricing Section
```
Mobile (< 640px):
┌─────────────┐
│ Essential   │
├─────────────┤
│ Signature   │ (scaled up)
├─────────────┤
│ Elite       │
└─────────────┘

Tablet (640px - 1024px):
┌──────────┐
│Essential │
├──────────┤
│Signature │ (larger, centered)
├──────────┤
│Elite     │
└──────────┘

Desktop (> 1024px):
┌────────┬──────────┬────────┐
│Essential│Signature│Elite   │
│         |(scaled) │        │
└────────┴──────────┴────────┘
```

---

## Animation Timing

### Global Animation Delays

```
Staggered Elements (cards, items):
- Item 0: 0ms
- Item 1: 100ms
- Item 2: 200ms
- Item N: N × 100ms

Scroll Reveals:
- Base animation: 800ms
- Stagger offset: 100ms per item

Button Hover:
- Duration: 200ms
- Easing: ease-out

Modal/Dialog:
- Open: fade-in 300ms
- Close: fade-out 200ms
```

---

## File Organization Best Practices

### Component Folder Structure

```
components/
├── Header.tsx                     (150 lines max)
├── MobileNav.tsx                  (120 lines max)
├── HeroSection.tsx                (120 lines max)
├── FeaturesSection.tsx            (150 lines max)
├── FeatureCard.tsx                (100 lines max)
├── BeforeAfterCarousel.tsx        (200 lines max)
├── BeforeAfterImage.tsx           (100 lines max)
├── TestimonialSection.tsx         (150 lines max)
├── TestimonialCard.tsx            (120 lines max)
├── PricingSection.tsx             (150 lines max)
├── PricingCard.tsx                (140 lines max)
├── FAQSection.tsx                 (130 lines max)
├── CTASection.tsx                 (100 lines max)
├── BookingModal.tsx               (200 lines max)
├── ContactForm.tsx                (180 lines max)
└── Footer.tsx                     (180 lines max)

hooks/
└── useModal.ts                    (30-40 lines)

app/
├── layout.tsx                     (Modified: SEO + fonts)
├── page.tsx                       (Landing page, imports components)
├── globals.css                    (Design tokens + animations) ✅
└── contact/
    └── page.tsx                   (Contact page, imports ContactForm)

tailwind.config.ts                 (Theme configuration) ✅
```

---

## Data Flow & Props

### Top-Level Props Flow

```
app/page.tsx
├─ Header
│  └─ receives: useModal hook
│
├─ HeroSection
│  └─ receives: useModal hook
│
├─ FeaturesSection
│  ├─ receives: feature data array
│  └─ renders: FeatureCard[] with stagger delay
│
├─ BeforeAfterCarousel
│  └─ renders: BeforeAfterImage[] with state
│
├─ TestimonialSection
│  ├─ receives: testimonial data array
│  └─ renders: TestimonialCard[] with stagger delay
│
├─ PricingSection
│  ├─ receives: pricing tier data array
│  └─ renders: PricingCard[] with featured flag
│
├─ FAQSection
│  ├─ receives: FAQ data array
│  └─ renders: Accordion items
│
├─ CTASection
│  └─ receives: useModal hook
│
├─ Footer
│  └─ renders: static footer content
│
└─ BookingModal (Portal)
   └─ receives: isOpen, onClose, tier from useModal
```

---

## Component Size Summary

| Component | Lines | Complexity | Dependencies |
|-----------|-------|---|---|
| Header | 150 | Medium | useModal, Lucide, Button |
| MobileNav | 120 | Low | useModal, Lucide, Button |
| HeroSection | 120 | Low | useModal, Image |
| FeaturesSection | 150 | Medium | FeatureCard |
| FeatureCard | 100 | Low | Tailwind, Lucide |
| BeforeAfterCarousel | 200 | High | BeforeAfterImage, state |
| BeforeAfterImage | 100 | Low | Image, Tailwind |
| TestimonialSection | 150 | Medium | TestimonialCard |
| TestimonialCard | 120 | Low | Image, Lucide |
| PricingSection | 150 | Medium | PricingCard |
| PricingCard | 140 | Medium | useModal, Lucide |
| FAQSection | 130 | Low | shadcn Accordion |
| CTASection | 100 | Low | useModal |
| BookingModal | 200 | High | Dialog, form state |
| ContactForm | 180 | High | form handling |
| Footer | 180 | Medium | Lucide, Links |

**Total:** ~2,000 lines (well-distributed, maintainable)

---

**Component Architecture Ready for Implementation! 🚀**

Follow this structure during development and refer back for component specifications.
