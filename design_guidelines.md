# Design Guidelines - Gráfica América Modern Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern creative agency websites and portfolio platforms like Behance, Awwwards-featured print studios, and contemporary B2B service providers. The design emphasizes visual storytelling through portfolio work while maintaining professional credibility.

**Core Principles:**
- Visual-first: Showcase print quality and craftsmanship prominently
- Professional trust: Establish 28+ years of expertise and reliability
- Modern sophistication: Clean, contemporary aesthetic that respects the craft
- Accessibility: Clear navigation and information hierarchy

## Color Palette

**Primary Brand Colors:**
- Deep Navy: 220 25% 15% (professionalism, trust, authority)
- Vibrant Cyan: 195 85% 45% (modern, creative, standout accent)

**Supporting Colors:**
- Warm Gray: 30 8% 92% (backgrounds, subtle sections)
- Cool Gray: 220 10% 50% (secondary text, borders)
- Pure White: 0 0% 100% (primary backgrounds)
- Rich Charcoal: 220 15% 20% (headings, emphasis)

**Accent (Use Sparingly):**
- Electric Blue: 205 90% 55% (CTAs, highlights)

## Typography

**Font Families:**
- Headers: Inter (700, 800) - Modern, geometric, professional
- Body: Inter (400, 500, 600) - Excellent readability, versatile
- Accent: Space Grotesk (600) - For special emphasis

**Scale:**
- Hero Headline: text-6xl lg:text-7xl font-bold
- Section Headers: text-4xl lg:text-5xl font-bold
- Subsections: text-2xl lg:text-3xl font-semibold
- Body Large: text-lg lg:text-xl
- Body: text-base
- Small: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-12 md:py-20 lg:py-24
- Container gaps: gap-6, gap-8, gap-12

**Container Strategy:**
- Full-width sections with inner max-w-7xl
- Content sections: max-w-6xl
- Text content: max-w-4xl

## Component Library

### Navigation
- Sticky header with blur backdrop
- Logo left, navigation center, CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Links: Hover underline animation with Electric Blue

### Hero Section
- Full-viewport height (min-h-screen) image slider
- Large typography overlay with company name and tagline
- Gradient overlay for text contrast (from navy to transparent)
- Dual CTAs: Primary "Solicitar Orçamento" + Secondary "Ver Portfólio"
- Subtle scroll indicator

### About Section
- Two-column layout (60/40 split): Text left, feature image right
- Timeline visualization showing "Desde 1995"
- Key stats cards: Years of experience, clients served, projects completed
- Company values in grid format

### Portfolio Gallery
- Masonry grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Hover effect: Subtle scale up + overlay with project details
- Modal lightbox for full-size viewing
- Filter categories: All, Business Cards, Brochures, Packaging, Banners

### Services Section
- Icon cards in 3-column grid
- Each card: Icon top, title, description, "Saiba Mais" link
- Subtle hover elevation effect
- Icons from Heroicons

### Contact Section
- Split layout: Form left (60%), Info right (40%)
- Info includes: Address map, phone with click-to-call, email, business hours
- Form fields: Name, Email, Phone, Service Interest (dropdown), Message
- Primary CTA button: "Enviar Mensagem"

### Footer
- Three-column layout: Company info, Quick links, Social/Contact
- Newsletter signup section above footer
- Copyright and credentials at bottom

## Images

**Hero Section:**
- Large, high-quality image showing printing press in action or finished premium print products
- Alternative images for slider: Modern office space, team working on designs, detailed close-up of print quality

**About Section:**
- Photo of the facility or team working
- Alternative: Historical timeline visualization with milestone images

**Portfolio Gallery:**
- Showcase actual completed work: business cards, brochures, packaging, signage
- High-resolution, professionally photographed examples
- Variety of industries and print styles

**Services Section:**
- Optional: Small illustrative images for each service type

## Interactions

**Minimal Animations:**
- Fade-in on scroll for sections (subtle, once only)
- Smooth scroll for anchor links
- Hover states: Scale (1.05), opacity changes, underlines
- NO continuous/looping animations
- NO parallax effects (keep it professional)

## Responsive Behavior

- Desktop (lg): Multi-column grids, full features
- Tablet (md): 2-column layouts, adjusted spacing
- Mobile: Single column, stacked elements, touch-friendly buttons (min-height: 44px)

This design delivers modern sophistication while honoring the craftsmanship and 28-year legacy of Gráfica América.