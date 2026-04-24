# Gallery Redesign Spec

## Overview
Redesign the gallery page to handle 20+ items with a masonry grid layout and pagination navigation.

## Status
- **Draft**: Awaiting implementation
- **Version**: 1.0

## Requirements

### Layout
- **Masonry grid** using CSS columns (3 columns on desktop, 2 on tablet, 1 on mobile)
- True varying heights - items flow naturally in columns
- Each item displays: image, title (Pièce_XX), and description
- Maintain "Modern Artisanal" brand aesthetic (parchment tones, Instrument Serif, editorial spacing)

### Navigation
- **Pagination buttons**: "← Précédent" / "Suivant →"
- Page indicator: "Page X sur Y"
- 9 items per page

### Content Integration
- Source: CMS collection `Gallery Images` (content/gallery/*.md)
- Fields: title, image, description, alt
- Fine-tuned with brand labels (Pièce_01, Pièce_02, etc.)

## Implementation Plan

### Files to Modify

1. **app/gallery/gallery-view.tsx**
   - Convert to client component with pagination state
   - Replace fixed asymmetric layout with masonry grid
   - Add pagination controls

2. **app/gallery/page.tsx**
   - Pass total count to enable pagination
   - Already uses ISR (revalidate = 60)

### Component Structure

```
GalleryPage
├── Header (title, subtitle - unchanged)
├── MasonryGrid
│   └── GalleryItem[] (paginated)
├── PaginationControls
│   ├── Previous button
│   ├── Page indicator
│   └── Next button
└── CTA section (unchanged)
```

### CSS Approach
- Use CSS `columns` for true masonry (maintains DOM order)
- `column-count: 3` desktop, `column-count: 2` tablet, `column-count: 1` mobile
- `break-inside: avoid` on items
- Preserve hover effects and card texture overlays

### Animation
- Keep stagger animations for items
- Animate pagination transitions

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| CSS columns vs JS masonry | Lighter, no layout shift, better performance |
| 9 items per page | 3×3 grid works well visually |
| Client-side pagination | Simple, maintains scroll position |
| Keep brand labels | Fine-tuned, consistent with other pages |