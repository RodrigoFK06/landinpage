# Blueprint: Expanding the Landing Page

## Overview

The goal is to expand the existing visually impressive hero section into a full-fledged, high-converting landing page. The design will be futuristic, clean, and interactive, guiding the user through a compelling narrative from introduction to conversion.

## Core Technologies

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animation**: GSAP (for scroll-triggered and complex timeline animations) & Framer Motion (for component entrance and state-based animations)
- **3D Graphics**: Three.js
- **Icons**: lucide-react

## Project Structure

The project will be organized into modular components to ensure clean code and maintainability.

```
/src
|-- /app
|   |-- page.tsx         # Main landing page component
|   |-- layout.tsx       # Root layout
|   |-- globals.css      # Global styles
|-- /components
|   |-- Hero.tsx             # The existing hero section (refactored)
|   |-- Benefits.tsx         # "What we do differently" section
|   |-- Methodology.tsx      # "How we work" section
|   |-- Services.tsx         # "Our Services" section
|   |-- Testimonials.tsx     # "Success Stories / Clients" section
|   |-- CTA.tsx              # Final Call to Action section
|   |-- AnimatedText.tsx     # Reusable component for text animations
|-- /lib
    |-- hooks.ts         # Custom hooks (e.g., for GSAP)
```

## Feature Implementation Plan

### 1. Hero Section (Refactor)
- **Action**: Move the existing hero section logic from `page.tsx` into its own `src/components/Hero.tsx` component.
- **Features**:
  - Three.js `Icosahedron` with a starfield background.
  - Mouse-interactive lighting.
  - Framer Motion animations for a staggered entrance of the headline, sub-headline, and CTA buttons.

### 2. Benefits Section (`Benefits.tsx`)
- **Purpose**: Showcase key value propositions.
- **Features**:
  - A grid of animated cards.
  - Each card will feature an icon from `lucide-react`, a title, and a short description.
  - **Animation**:
    - Cards will animate into view (fade in and slide up) as the user scrolls, triggered by GSAP's `ScrollTrigger`.
    - A subtle "glow" or "lift" effect on hover using Framer Motion.

### 3. Methodology Section (`Methodology.tsx`)
- **Purpose**: Explain the working process in clear steps.
- **Features**:
  - A sequentially displayed list of steps (e.g., "1. Discovery", "2. Design", "3. Development", "4. Deployment").
  - **Animation**:
    - Use GSAP `timeline` coordinated with `ScrollTrigger` to animate each step in sequence as the user scrolls down. Each step will have a line drawing animation connecting it to the next, creating a visual flow.

### 4. Services Section (`Services.tsx`)
- **Purpose**: Detail the specific services offered.
- **Features**:
  - A clean layout of service cards.
  - Each card will have a title, description, and a call-to-action or "learn more" link.
  - **Animation**:
    - Cards will have a gentle parallax effect on scroll, creating a sense of depth.
    - Staggered entrance animation using Framer Motion as the section comes into view.

### 5. Testimonials Section (`Testimonials.tsx`)
- **Purpose**: Build trust with social proof.
- **Features**:
  - A carousel or grid of testimonial cards.
  - Each card will feature a quote, customer name, and company.
  - **Animation**:
    - Animate the entrance of testimonials using a `clip-path` effect for a modern reveal.
    - The carousel (if implemented) will be draggable.

### 6. Call to Action (CTA) Section (`CTA.tsx`)
- **Purpose**: Drive user conversion.
- **Features**:
  - A high-contrast, visually distinct section.
  - A prominent headline and a clear call-to-action button.
  - **Animation**:
    - The button will have an eye-catching hover effect (e.g., a GSAP-powered glow or magnetic effect).
    - Subtle, floating Three.js particles in the background to add a touch of magic without being distracting.
  - **Future Integration**: This section is the ideal place to add a form and connect it to a backend service like Supabase for lead capture.

### Styling & UX

- **Responsiveness**: All components will be fully responsive, tested on mobile, tablet, and desktop viewport sizes.
- **Color Palette**: Stick to the established dark background with yellow/orange/lavender accents.
- **Typography**: Use a clean, modern font hierarchy to ensure readability.
- **Lazy Loading**: While not critical for this phase, components with heavy 3D assets could be lazy-loaded using `next/dynamic` to improve initial page load times.
