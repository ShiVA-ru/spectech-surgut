---
name: Спецтехника Сургут
description: Plain light catalog for a local equipment-rental business card, with one blue accent and the phone always in reach.
colors:
  signal-blue: "#0000ff"
  call-glow: "#add8e6"
  call-deep: "#00008b"
  page-grey: "#f6f7f8"
  card-white: "#ffffff"
  ink: "#333333"
  ink-black: "#000000"
  muted-slate: "#6b7280"
  hairline: "#e5e7eb"
typography:
  display:
    fontFamily: "Roboto, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Roboto, sans-serif"
    fontSize: "24px"
    fontWeight: 700
  title:
    fontFamily: "Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 700
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.2
  label:
    fontFamily: "Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  card: "8px"
  media: "20px"
  full: "50%"
spacing:
  xs: "5px"
  sm: "10px"
  md: "20px"
components:
  equipment-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "10px"
  advantage-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "15px"
  call-button:
    backgroundColor: "{colors.call-deep}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.full}"
    size: "70px"
---

# Design System: Спецтехника Сургут

## Overview

**Creative North Star: "The Clean Catalog"**

A light, orderly catalog on a pale grey page: a photographed hero, a row of short advantages, and a grid of equipment cards. The system is plain and sturdy. Surfaces are white, text is dark grey, and the only color is a single blue used for icons and link hover. There is no decoration; photographs of the machines carry the visual weight.

The site is a business card for a local rental firm, so density is low and everything is one column on a phone. The phone number is the primary action and is always reachable through a fixed round call button.

**Key Characteristics:**
- Light grey page, white cards, one blue accent.
- Photography-led: machine photos fill card tops and the hero.
- Flat at rest; a soft shadow appears only on hover.
- Single Roboto family, bold for headings, semibold for card text.
- Mobile-first single column that widens through auto-fit grids.

## Colors

A neutral grey-and-white field with one saturated blue.

### Primary
- **Signal Blue** (#0000ff): icon fill (`--primary-color`, currently the literal CSS keyword `blue`), link hover in the footer, border and hover fill of the simple call button.

### Secondary
- **Call Glow** (#add8e6) and **Call Deep** (#00008b): the two ends of the 135° gradient on the fixed pulsing call button, and the ripple ring color (Call Glow).

### Neutral
- **Page Grey** (#f6f7f8): page background.
- **Card White** (#ffffff): header, footer, cards (cards use 90% white).
- **Ink** (#333333): header title text; default body text is browser/Tailwind default.
- **Muted Slate** (#6b7280): card descriptions.
- **Hairline** (#e5e7eb): footer divider and the 1px border of cards.
- **Ink Black** (#000000): back-arrow icon on the header.

### Named Rules
**The One Blue Rule.** Blue is the only chromatic color. It marks interactive or iconic elements, never large surfaces.

## Typography

**Display / Body Font:** Roboto (with generic sans-serif fallback; declared on the page wrapper, no font files are loaded by the project).

**Character:** Neutral, legible, utilitarian sans in a few fixed pixel sizes.

### Hierarchy
- **Display** (700, 32px, 1.2): hero title "Аренда спецтехники", white over the photo.
- **Headline** (700, 24px): section and detail-page titles.
- **Title** (700, 20px): footer section titles and the header title.
- **Body** (600, 16px, 1.2): card titles and advantage labels.
- **Label** (400, 14px, 1.2): card descriptions and requisite rows.

## Layout

Centered Tailwind `container` with 20px side padding. Sections stack in one column; advantages use `repeat(auto-fit, minmax(150px, 1fr))` and equipment cards `minmax(250px, 1fr)`, both with a 20px gap. The page wrapper is a grid (header / content / footer) at least one dynamic viewport tall. The hero is a fixed 320px band with the text anchored bottom-left. The footer becomes three columns (contacts, divider, requisites) from 768px. Responsive hero images switch at 600px and 1200px.

## Elevation & Depth

Flat by default. Cards separate from the page by a thin border and the white-on-grey step. A `0 0 10px rgba(0,0,0,0.2)` glow appears on equipment-card hover. The fixed header and hero carry a faint `0 2px 4px rgba(0,0,0,0.1)`. The floating call button is the one lifted element (`0 8px 20px rgba(0,0,0,0.3)`).

### Named Rules
**The Hover-Only Shadow Rule.** Cards carry no shadow at rest; shadow is a response to pointer, not a decoration.

## Shapes

Gently rounded rectangles (8px) for cards, a larger 20px radius for the detail-page photo, and perfect circles for call buttons. Images are cropped with `object-fit: cover`; card photos are 235px tall edge to edge at the top of the card.

## Components

### Buttons
- **Call button (fixed):** 70px circle (60px under 768px) bottom-right, blue gradient, white handset icon that shakes, three expanding ripple rings, scale-up on hover.

### Cards / Containers
- **Equipment card:** white 90%, 1px Hairline border, 8px radius, 235px photo on top, 10px padded text block with 16px semibold title and 14px slate description; whole card is a link.
- **Advantage card:** same surface, 15px padding, 25px blue icon beside a semibold label.

### Navigation
- **Detail header:** fixed white bar, 50px tall, back arrow left, centered 20px bold title. Not shown on the home page.

### Footer
- Contacts (icon + underlined link, blue on hover) and requisites (definition list, bold terms) separated by a hairline divider.

## Do's and Don'ts

### Do:
- **Do** keep surfaces white on the Page Grey field and let photos provide the color.
- **Do** use Signal Blue only for icons, link hover, and call affordances.
- **Do** keep the call button reachable on every screen.
- **Do** reuse the 8px card radius, 20px gaps, and the Roboto size steps above.

### Don't:
- **Don't** add decoration, gradients, or large blue surfaces beyond the call button.
- **Don't** put shadows on cards at rest.
