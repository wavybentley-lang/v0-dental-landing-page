# IMPLEMENTATION PLAN: Booking System and Calendar Integration

This document outlines the strategy for implementing a comprehensive, real-time appointment booking and management system for the Bright Smile Clinic.

## FEATURE SCOPE

### 1. Interactive Booking Interface
- Upgrade the current `BookingModal` to a multi-step booking flow.
- Step 1: Service/Treatment selection.
- Step 2: Date & Time selection (Calendar View).
- Step 3: Contact Information & Details.
- Step 4: Confirmation/Review.

### 2. Calendar & Availability
- **Component:** Use `react-day-picker` (already in dependencies) styled for our Gold/Navy theme.
- **Slot Logic:** Calculate available time slots based on service duration and existing bookings.
- **Waitlist:** If a date is fully booked, offer a "Join Waiting List" option.

### 3. Form Validation & Treatment Packages
- **Validation:** Use `zod` and `react-hook-form` (already in dependencies).
- **Packages:** Allow selection of "Signature", "Elite", or "Express" packages with dynamic pricing/duration updates.

### 4. Admin Dashboard
- **Route:** Implement `/admin/dashboard`.
- **Functionality:**
    - Visual calendar of all appointments.
    - List view with search/filter (by status, patient name, or service).
    - Ability to cancel or reschedule appointments.
    - Waiting list management.

### 5. Backend & Notifications (Simulated)
- **Data Persistence:** Use a local JSON-based storage or simple state-based persistence for demo purposes.
- **Emails:** Integrate a notification system (mocked or via service like Resend/SendGrid) for booking confirmations.

---

## PROGRESS CHECKLIST

### Phase 1: Service & Package Selection
- [x] Define Treatment Packages data structure
- [x] Build Service Selection component in the booking flow
- [x] Implement dynamic pricing/duration display

### Phase 2: Calendar Integration
- [x] Implement `react-day-picker` integration in `BookingModal`
- [x] Style Calendar to match Gold & Navy visual identity
- [x] Logic for generating available time slots (e.g., 9 AM - 5 PM)
- [x] Logic for identifying "Fully Booked" days

### Phase 3: Form Engineering
- [x] Create Zod schema for booking validation
- [x] Implement `react-hook-form` in the contact step
- [x] Add error handling and user feedback for invalid entries

### Phase 4: Waitlist Functionality
- [ ] Detect "Fully Booked" state in the UI
- [ ] Create "Join Waitlist" form and submission logic
- [ ] Store waitlist entries separately from confirmed bookings

### Phase 5: Admin Dashboard Base
- [ ] Create `/admin` protected route (mocked auth)
- [ ] Implement Appointment Overview Table
- [ ] Build Admin Calendar View (Master Schedule)

### Phase 6: Confirmation & Notifications
- [ ] Create Success/Confirmation state after booking
- [ ] Implement mock e-mail notification trigger
- [ ] Add "Add to Google Calendar" button for users

### Phase 7: Final Polish
- [ ] Test end-to-end booking flow
- [ ] Verify Admin Dashboard responsiveness
- [ ] Final visual alignment with the new design system
