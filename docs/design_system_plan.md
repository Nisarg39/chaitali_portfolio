# WizardZ Design System & Implementation Plan

Based on the provided UI reference image, here is the extracted design system and the plan to replicate it in the Next.js project.

## 1. Color Palette

*   **Primary Background:** White (`#FFFFFF`)
*   **Surface Dark (Cards/Buttons/Footer):** Almost Black (`#191A23`)
*   **Surface Light (Sections):** Light Gray (`#F3F3F3`)
*   **Accent/Brand:** Lime Green (`#B9FF66`)
*   **Text Primary:** Almost Black (`#191A23`)
*   **Text Inverse:** White (`#FFFFFF`)
*   **Borders:** Almost Black (`#191A23`)

## 2. Typography

*   **Font Family:** Modern Sans-Serif (e.g., `Space Grotesk` or `Inter`). The reference uses a slightly geometric, very legible font.
*   **Headings:** Bold, large font sizes for hero sections and section titles.
*   **Body Text:** Regular weight, high legibility.

## 3. UI Components

*   **Buttons:**
    *   *Primary:* Solid dark background (`#191A23`), white text, rounded corners.
    *   *Outline:* Transparent background, solid dark border, dark text, rounded corners.
*   **Cards (Neo-brutalist / Clean style):**
    *   Large border radius (e.g., `rounded-3xl` or `rounded-[40px]`).
    *   *Light Card:* White background, solid 1px dark border, dark text.
    *   *Dark Card:* Dark background (`#191A23`), white text.
    *   *Highlight Card:* Light gray background, no border.
*   **Tags & Highlights:**
    *   Lime green background with dark text, often used to highlight section headers or tags.
*   **Illustrations:**
    *   Bold black outlines with lime green and white fills.

## 4. Layout & Spacing

*   **Container:** Max-width (e.g., `max-w-7xl`), centered.
*   **Grid Systems:**
    *   2-column grid for Services (e.g., `grid-cols-1 md:grid-cols-2`).
    *   3-column layout for the Case Study section.
*   **Spacing:** Generous whitespace between sections (`py-24`).

---

## Configuration & Implementation Plan

### Phase 1: Tailwind & Global Setup
1.  **Fonts:** Import `Space Grotesk` from `next/font/google` in `layout.tsx` and apply it globally.
2.  **Tailwind Configuration:** Since Next.js 15 uses Tailwind CSS v4, we will configure the colors, border radius, and font families in `src/app/globals.css` using CSS variables and the `@theme` directive.
    *   `--color-brand: #B9FF66`
    *   `--color-dark: #191A23`
    *   `--color-light: #F3F3F3`

### Phase 2: Core Components
1.  **Button Component:** Create a reusable `Button` component with variants (`primary`, `outline`).
2.  **Card Components:** Create `ServiceCard` and `CaseStudyCard` components supporting light/dark variants.
3.  **Highlight Tag:** Create a component for the lime green text background highlights.

### Phase 3: Page Assembly
1.  **Navbar:** Logo, links, and an "outline" button.
2.  **Hero Section:** Two columns (text + primary button on left, illustration on right).
3.  **Logo Carousel:** A horizontal flex row of client logos.
4.  **Services Section:** Section header with highlight, followed by a 2x2 grid of cards.
5.  **CTA Section:** Light gray background container with text and a dark button.
6.  **Case Study Section:** Dark container with a 3-column layout separated by borders/lines.

