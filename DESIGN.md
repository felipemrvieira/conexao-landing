---
name: Luminous Connection
colors:
  surface: '#fef7ff'
  surface-dim: '#dfd8df'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f1f9'
  surface-container: '#f3ecf3'
  surface-container-high: '#ede6ed'
  surface-container-highest: '#e7e0e8'
  on-surface: '#1d1b20'
  on-surface-variant: '#4a4550'
  inverse-surface: '#322f35'
  inverse-on-surface: '#f6eff6'
  outline: '#7b7581'
  outline-variant: '#ccc3d1'
  surface-tint: '#6e4f9b'
  primary: '#4b2c76'
  on-primary: '#ffffff'
  primary-container: '#63448f'
  on-primary-container: '#d8bcff'
  inverse-primary: '#d7baff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#6ff7f6'
  on-secondary-container: '#007070'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cda721'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d7baff'
  on-primary-fixed: '#280253'
  on-primary-fixed-variant: '#563781'
  secondary-fixed: '#6ff7f6'
  secondary-fixed-dim: '#4ddada'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#ffe087'
  tertiary-fixed-dim: '#ebc23e'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fef7ff'
  on-background: '#1d1b20'
  surface-variant: '#e7e0e8'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is built on the philosophy of "Professional Playfulness." It balances the high-trust requirements of an educational institution with the imaginative, vibrant world of early childhood. The target audience includes both parents seeking a safe, innovative environment and children who respond to visual storytelling.

The visual style is a hybrid of **Modern-Soft** and **Organic-Tactile**. It utilizes heavy whitespace to maintain a clean, professional "school" feel, while breaking the rigidity of traditional education through organic shapes like clouds, stars, and waves. The emotional response should be one of "Affectionate Security"—warm and inviting, yet technically modern and organized.

## Colors

The palette is derived from the core brand identity, leading with **Deep Amethyst (#63448F)** and **Vibrant Teal (#00B5B5)**. These colors provide the "Professional" anchor of the brand.

To infuse the "Playful" and "Warm" attributes, a secondary palette of soft pastels is used for background cards, secondary buttons, and illustrative accents. 
- **Primary Purple:** Used for typography, primary buttons, and navigational anchors.
- **Secondary Teal:** Used for interactive states, success messages, and call-to-action highlights.
- **Pastel Palette:** Light Yellow, Soft Orange, and Pale Blue are strictly for surface-level differentiation (e.g., categorizing school classes or event cards) and should never be used for primary text to ensure accessibility.
- **Background:** An off-white (#FCFCFA) is used instead of pure white to reduce eye strain and provide a softer, paper-like texture.

## Typography

This design system utilizes a dual-font strategy to balance character and readability. 

**Quicksand** is the display face. Its rounded terminals mirror the organic shapes of the UI, providing an immediate sense of friendliness. It is reserved for headlines and large title treatments.

**Plus Jakarta Sans** serves as the functional workhorse. While still modern and approachable, it offers better legibility at smaller scales for body copy and administrative details. 

- **Weight Usage:** Use Bold (700) for high-level hierarchy and Regular (400) for all instructional and descriptive text.
- **Color:** Headlines should primarily use the Primary Purple to maintain brand authority.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Content is contained within a 1280px central track on desktop to ensure readability, while background elements (organic shapes and clouds) are allowed to bleed to the edges of the viewport to create an immersive, limitless environment.

- **Rhythm:** An 8px base unit drives all spacing. 
- **Whitespace:** Emphasize "Breathing Room." Sections should have generous vertical padding (80px-120px on desktop) to prevent the playful elements from feeling cluttered.
- **Mobile Adaption:** On mobile, the 12-column grid collapses to a 4-column layout. Margin spacing reduces to 16px, and illustrative bleeds are simplified to maintain performance and focus.

## Elevation & Depth

Depth is achieved through **Ambient Tinted Shadows** rather than grey-scale shadows. This keeps the UI feeling light and integrated with the brand colors.

- **Soft Cards:** Surfaces use a very large blur radius (20px-40px) with a low-opacity shadow tinted with the primary purple (e.g., `rgba(99, 68, 143, 0.08)`).
- **Layering:** Organic shapes (clouds) often sit behind cards but above the background, sometimes partially overlapping images to create a "scrapbook" depth.
- **Interactive Depth:** Buttons should use a slight "press" effect (reducing shadow and scale) to mimic physical interaction, reinforcing the "Safe and Tactile" tone.

## Shapes

The shape language is strictly **Non-Linear**. Sharp corners are avoided entirely to support the "Safe" brand tone.

- **Standard Containers:** Use a minimum radius of 16px (rounded-lg).
- **Hero Containers:** Use a radius of 24px-32px (rounded-xl).
- **Organic Masks:** Realistic photos of children and school facilities should frequently be masked into organic circles or "blob" shapes.
- **Illustrative Elements:** Stars and clouds should be used as "stickers" that break the grid, often floating near the corners of cards or section headings.

## Components

### Buttons
Primary buttons are pill-shaped or heavily rounded (min 12px radius) using the Primary Purple. Labels are Semi-bold Quicksand. Secondary buttons use the Pastel palette with Teal text.

### Soft Cards
Cards use a White background with a 1px soft border in Pastel Purple. They feature a generous internal padding (32px) and are always paired with an ambient tinted shadow.

### Input Fields
Inputs are large (56px height) with a 16px border radius. The focus state uses a 2px Teal stroke and a soft Teal outer glow.

### Chips & Badges
Used for categorizing activities (e.g., "Art," "Music"). These are small, pill-shaped elements using high-contrast pastel backgrounds with dark versions of the same hue for text.

### Illustrative Wrappers
A unique component for this design system is the "Cloud Header"—a section transition where the top of a color block is shaped like a continuous cloud line rather than a straight horizontal divider.