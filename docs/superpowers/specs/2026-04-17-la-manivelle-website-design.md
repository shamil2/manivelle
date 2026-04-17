# Design Spec: La Manivelle Website Redesign

**Date:** 2026-04-17
**Status:** Draft
**Topic:** Rebuilding lamanivelle.fr as a high-end artisanal hub.

## 1. Feature Summary
A production-grade, visually striking website for "La Manivelle," an artisanal cardboard furniture studio. The site must seamlessly integrate an e-commerce store (Shop), a portfolio-style gallery (Custom Commissions), and a booking system (Workshops), all while maintaining a deeply handcrafted, eco-responsible aesthetic.

## 2. Primary User Action
The primary action is **Engagement with the Craft**, split into three high-priority paths:
1. **Purchase** ready-made objects from the Shop.
2. **Inquire** about Bespoke/Custom furniture commissions.
3. **Book** a Cartonnage Workshop.

## 3. Design Direction
- **Tone:** Organic, tactile, and intentional. It should feel like stepping into a sun-drenched artist's studio in rural France.
- **Aesthetic Movement:** "Modern Artisanal."
- **Color Palette:**
  - `Surface`: #F9F9F5 (Warm Parchment)
  - `Primary`: #2D2D2A (Ink Black)
  - `Accent`: #D97757 (Terracotta)
  - `Subtle`: #DED6C9 (Cardboard/Kraft)
  - `Natural`: #788C5D (Moss Green)
- **Typography:**
  - **Display:** *Instrument Serif* (Italic) – for a sophisticated, editorial feel.
  - **Body:** *Geist* or *Outfit* – for clean, modern readability.

## 4. Layout Strategy
- **Cinematic Hero:** Large-scale video/stills of the workshop process (hands cutting cardboard, glue being applied, finished textures).
- **The Three Pillars (Bento Grid):** An asymmetric grid above the fold providing immediate entry points to Shop, Commissions, and Workshops.
- **Scrolling Narrative:** Interspersing product cards with "Ethos" sections that explain the eco-responsible process (circular economy, recycled cardboard).
- **Tactile Details:** Subtle cardboard-like textures, "raw" edges, and micro-interactions that feel heavy and physical rather than digital.

## 5. Key States
- **Default:** Clean, atmospheric, and high-contrast.
- **Loading:** Minimalist skeleton screens that mirror the bento-grid layout.
- **Empty (Shop):** A "Coming Soon" or "Crafting New Pieces" message with an email signup.
- **Error:** Warm, apologetic tones using the Terracotta accent for indicators.
- **Success (Booking/Purchase):** A tactile "Thank You" screen that feels like receiving a handwritten note.

## 6. Interaction Model
- **Magnetic Buttons:** For primary CTAs to add a premium feel.
- **Staggered Reveals:** Content fades and slides in as the user scrolls, mirroring the building process of a furniture piece.
- **Horizontal Hijack (Gallery):** For the custom commissions showcase to allow the user to "walk through" the collection.

## 7. Content Requirements
- **Workshop Details:** Dates, duration (3h to 20 sessions), prices, and availability.
- **Custom Commission Form:** A multi-step form that captures project ideas, dimensions, and preferred styles.
- **Product Descriptions:** Highlighting the artisanal nature and materials used for each shop item.

## 8. Open Questions
- Should the workshop booking system be built-in or integrated with an external service (like Calendly or a Wix-native tool)?
- What is the preferred payment gateway for the e-commerce store (Stripe, PayPal)?
- Do we have high-resolution videos for the hero background?

---
*Next Step: Implementation Plan via `writing-plans` skill.*
