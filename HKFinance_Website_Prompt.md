# HK Finance — Full Website Development Prompt

---

## 🎯 Project Overview

Build a **modern, professional, component-based website** for **HK Finance** — a business compliance and taxation firm headquartered in Surat, Gujarat. The site must feel premium, trustworthy, and conversion-focused. All India online services available.

**Website:** hkfinancegroup.co
**Instagram:** @hkfinancegroup
**Phone:** 7600049383, 9662634363, 8799160981, 8866003245, 9727179830
**Head Office:** 447, 4th Floor, AR Mall, Mota Varachha, Surat – 394101, Gujarat
**Branches:** Ahmedabad · Vadodara · Ankleshwar

---

## 🎨 Design System

### Color Palette (Pure White + Emerald)

```css
:root {
  /* Brand */
  --color-primary:       #21592D;   /* Brand green — logo, icons, links, accents */
  --color-primary-light: #EBF5EE;   /* Light green — hover states, badges, chips */

  /* Text */
  --color-text-dark:     #1A1A1A;   /* Headings, strong body text */
  --color-text-muted:    #555555;   /* Body copy, descriptions, sub-labels */

  /* Backgrounds */
  --color-bg-page:       #F7F7F5;   /* Page / section alternating background */
  --color-bg-white:      #FFFFFF;   /* Cards, modals, main sections */

  /* Border */
  --color-border:        #E0E0DC;   /* Dividers, card borders, input borders */

  /* CTA */
  --color-gold:          #C9960C;   /* ALL call-to-action buttons only */
  --color-gold-hover:    #A87A08;   /* Gold button hover state */

  /* Utility */
  --color-black:         #1F2520;   /* Footer background, dark overlays */
  --color-gray-mid:      #757A76;   /* Placeholder text, icon fills */
  --color-gray-light:    #C1C2C1;   /* Skeleton, subtle borders */
}
```

### Typography

```css
:root {
  --font-sans: 'Inter', 'DM Sans', sans-serif;   /* All UI text */
  --font-display: 'Sora', 'Outfit', sans-serif;  /* Hero headlines only */

  --text-xs:   12px;
  --text-sm:   14px;
  --text-base: 16px;
  --text-lg:   18px;
  --text-xl:   22px;
  --text-2xl:  28px;
  --text-3xl:  36px;
  --text-4xl:  48px;

  --weight-regular: 400;
  --weight-medium:  500;
  --weight-bold:    600;
}
```

### Spacing & Radius

```css
:root {
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  --radius-sm:  6px;
  --radius-md:  10px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-pill: 999px;
}
```

### Shadows

```css
:root {
  --shadow-card: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  --shadow-hover: 0 4px 24px rgba(33,89,45,0.12);
  --shadow-nav:   0 1px 0 var(--color-border);
}
```

---

## 🧩 Component Library

Define every element below as a **reusable component** with props/variables.

---

### COMPONENT: Button

```
Props: label, variant (primary | gold | outline | ghost), size (sm | md | lg), icon?, href?

primary  → bg: #21592D, text: white, hover: darken 8%
gold     → bg: #C9960C, text: #000000, hover: #A87A08
outline  → border: #21592D, text: #21592D, bg: transparent, hover: #EBF5EE
ghost    → no border, text: #555555, hover: text #21592D
```

### COMPONENT: Badge / Chip

```
Props: label, color (green | gold | gray | white)

green → bg: #EBF5EE, text: #21592D, border: none
gold  → bg: #FBF0D5, text: #7A4D00
gray  → bg: #F0F0EF, text: #555555
```

### COMPONENT: ServiceCard

```
Props: icon (SVG/emoji), title, description, href

Style: white card, border: 0.5px #E0E0DC, radius: --radius-lg
Hover: border-color #21592D, shadow: --shadow-hover, slight translateY(-2px)
CTA: small ghost link "Learn more →" in green
```

### COMPONENT: SectionHeader

```
Props: eyebrow (small uppercase label), title, subtitle, align (left | center)

eyebrow → font-size: 12px, color: #21592D, letter-spacing: 0.1em, uppercase
title   → font-family: display, size: 32–40px, color: #1A1A1A
subtitle → size: 16px, color: #555555, max-width: 560px
```

### COMPONENT: StatCard

```
Props: number, suffix?, label

number → font-size: 36px, font-weight: 600, color: #21592D
label  → font-size: 13px, color: #757A76
```

### COMPONENT: TestimonialCard

```
Props: quote, name, city, rating (1–5)

Style: white card, subtle green left-border (3px solid #21592D)
Stars: gold #C9960C
```

### COMPONENT: AccordionItem

```
Props: question, answer, defaultOpen?

Trigger: bold question, green chevron icon
Panel: smooth height transition, body text muted
```

### COMPONENT: FormInput

```
Props: label, type, placeholder, required?, helpText?

Style: white bg, border: 1px #E0E0DC, radius: --radius-md
Focus: border-color #21592D, box-shadow 0 0 0 3px #EBF5EE
Error: border-color red, helper text red
```

### COMPONENT: NavLink

```
Props: label, href, hasDropdown?, isActive?

Default: color #555555
Hover: color #21592D
Active: color #21592D, bottom underline 2px solid #21592D
```

### COMPONENT: BranchCard

```
Props: city, address, phone?, mapLink?

Style: white card, city name in green heading
Icon: location pin in green
```

---

## 📄 Pages & Sections

---

## PAGE: Home (`/`)

---

### SECTION 1 — Navbar / Header

**Type:** Sticky, white background, shadow on scroll

**Left:**
- HK Finance logo (SVG — green diamond with HK arrows)
- Brand name "HK Finance" in dark text next to logo

**Center Navigation links:**
- Home
- Services (mega-dropdown — see below)
- About Us
- Branches
- Contact

**Right:**
- Phone number with phone icon (clickable `tel:`)
- Button: `Book Free Consultation` [gold variant]

**Mega Dropdown — Services:**
Organized in 2 columns, 6 categories:
1. Registration (Pvt Ltd, LLP, Partnership, NGO, Trust, OPC, Society, Startup India, Nidhi, MSME, EPF, Shop & Establishment, Darpan, IEC, PSARA, 12A & 80G, Wordmark)
2. Taxation — GST (Return filing, Virtual GST, Input Tax Credit, E-invoice, Notice solving)
3. Taxation — Income Tax (ITR filing, TDS return, PF return, All ITR forms, Scrutiny)
4. Accounting (Bookkeeping, Monthly accounting, GST reconciliation, BRS, Debtor-creditor, Expense, Stock/inventory, Auditing, Outsource)
5. Business Certifications (RERA, NSIC, PESO, Hallmark, ISO, BIS, ZED, CMMI, CE, Make in India, APEDA, TEXPROCIL, GI, FPO, Spice Board, BEE, NSDC, Rubber Board, IJCEPA)
6. Government Licenses & Others (Drug, Liquor, Ayush, Factory, Trade, Gumasta, FSSAI, AGMARK, MSTC, WPC, SAFTA, RCMC, PTEC, ICEGATE, SEPC, GJEPC, RNI, CDSCO, AD Code, GSP, TEC, SPICe+, GMP, ISBN, ISSN, DUNS, GI, ISI, Tobacco, Petrol Pump, Network, FIEO, Medical Device, Professional Tax)
7. Property Rights (Trademark, Copyright, Patent, Design)
8. Revenue Services (Affidavit, Agreement, Gift Deed, Sale Deed, Marriage Certificate, Consent Letter, Power of Attorney, Legal Notice, PAN, Passport)

**Mobile:** Hamburger menu → full-screen slide-in drawer with accordion grouped by category

---

### SECTION 2 — Hero

**Layout:** Split — Left: text content, Right: illustration or abstract geometric shape with green gradient

**Left content:**
- Badge chip: `"All India Online Services Available"` [green variant]
- Headline (H1): `"Your One Stop Solution for Business Compliance"` [display font, 44–52px]
- Sub-headline: `"From GST filing to company registration, we handle all your business compliance needs so you can focus on growing your business."` [muted, 17px]
- CTA row:
  - `Explore Services` [primary green button]
  - `Book Free Call` [gold button]
- Trust bar below CTAs: `5000+ Clients · 80+ Services · 3 Branches · All India Online`

**Right content:**
- Abstract SVG illustration: geometric layered shapes using green + cream + white
- OR: Professional photo of business consultation (if image supplied)
- Floating stat cards overlaid: e.g. `"GST Filing ✓"`, `"ITR Done ✓"` in white mini-cards

**Background:** White `#FFFFFF`

---

### SECTION 3 — Stats Strip

**Layout:** 4-column horizontal strip, full-width
**Background:** `#21592D` (dark green)

Stats:
- `5000+` Clients Served
- `80+` Services Offered
- `3` Branch Locations
- `10+` Years Experience

Each stat: large white number, muted green sub-label

---

### SECTION 4 — Services Overview

**Background:** `#F7F7F5`
**Header component:** eyebrow: `"What We Do"`, title: `"Complete Business Solutions Under One Roof"`, centered

**Layout:** 3-column grid of ServiceCards (6 cards visible, "View All Services" button below)

Cards:
1. 📋 GST & Taxation — Return filing, notices, ITC, e-invoicing
2. 🏢 Company Registration — Pvt Ltd, LLP, OPC, Partnership, NGO
3. 📊 Accounting — Bookkeeping, reconciliation, auditing
4. 🏅 Business Certifications — ISO, MSME, ZED, CMMI, CE Mark
5. 📜 Legal & Revenue — Affidavit, deeds, agreements, PAN, passport
6. 🏛️ Government Licenses — FSSAI, Drug, Trade, Factory, Ayush

Below grid: `View All 80+ Services →` [outline button, centered]

---

### SECTION 5 — Why Choose Us

**Background:** `#FFFFFF`
**Layout:** Left: SectionHeader + feature list | Right: decorative visual / illustration

**Features list (icon + title + 1-line desc):**
- ✅ Professional & Experienced Team — CA, CS, Advocates on staff
- ⚡ Quick Processing — Fast turnaround on all filings and registrations
- 💰 Transparent & Affordable Pricing — No hidden charges
- 🌐 All India Online Services — Serve clients from any state
- 🛡️ End-to-End Support — We handle everything start to finish
- 📞 Expert Consultation — Free initial consultation available
- 🔒 100% Compliance — Always up to date with latest regulations

---

### SECTION 6 — How It Works

**Background:** `#F7F7F5`
**Header:** eyebrow: `"Process"`, title: `"Get Compliant in 3 Simple Steps"`
**Layout:** 3-step horizontal timeline with connector line

Steps:
1. 🗓️ **Book Consultation** — Call or fill the form. Our expert contacts you within 24 hrs.
2. 📄 **Share Documents** — Submit required docs via WhatsApp or email.
3. ✅ **We Handle the Rest** — Filing, registration, or documentation done for you.

---

### SECTION 7 — Popular Services (Tabs)

**Background:** `#FFFFFF`
**Header:** eyebrow: `"Most Requested"`, title: `"Popular Services"`

**Tab bar:** GST · Income Tax · Registration · Licenses · Accounting

Each tab shows a 2-column list of services with green checkmark icons and a "Get Started" link per item.

---

### SECTION 8 — Testimonials

**Background:** `#F7F7F5`
**Header:** eyebrow: `"Client Stories"`, title: `"Trusted by Businesses Across India"`
**Layout:** 3-column grid of TestimonialCards (or auto-scrolling carousel on mobile)

Include 3–5 placeholder testimonials from Surat, Ahmedabad, Vadodara businesses.

---

### SECTION 9 — Branches

**Background:** `#FFFFFF`
**Header:** eyebrow: `"Our Locations"`, title: `"We're Close to You"`
**Layout:** 3 BranchCards in a row

Branch 1 — Surat (Head Office)
- 447, 4th Floor, AR Mall, Mota Varachha, Surat – 394101

Branch 2 — Ahmedabad

Branch 3 — Vadodara

Branch 4 — Ankleshwar

Below cards: embedded Google Maps or map placeholder

---

### SECTION 10 — CTA Banner

**Background:** `#21592D` (full-width green)
**Layout:** Centered text + 2 buttons

Content:
- Title: `"Ready to Get Your Business Compliant?"` [white, display font]
- Sub: `"Connect with our experts today — free first consultation."` [light green]
- Button 1: `Book Free Consultation` [gold]
- Button 2: `Call: 7600049383` [white outline]

---

### SECTION 11 — FAQ

**Background:** `#F7F7F5`
**Header:** eyebrow: `"FAQ"`, title: `"Common Questions"`
**Layout:** Single column accordion (max 8 questions)

Sample questions:
- What documents are needed for GST registration?
- How long does company registration take?
- Do you serve clients outside Gujarat?
- What is the cost for ITR filing?
- Can I get a virtual GST address through you?
- Do you offer ongoing accounting support?
- What is the difference between LLP and Pvt Ltd?
- How do I get started?

---

### SECTION 12 — Contact / Footer

#### Contact Bar (above footer)

**Background:** `#1F2520`
**Layout:** 3-column grid

Column 1 — Phone
- Icon + `Call Us`
- All 5 numbers listed, clickable

Column 2 — Email / WhatsApp
- Icon + WhatsApp link

Column 3 — Address
- Icon + Head office address

#### Footer

**Background:** `#1F2520`
**Layout:** 4-column grid

Column 1 — Brand
- Logo + tagline: `"Your Trusted Partner for Business, Tax & Legal Solutions"`
- Social: Instagram @hkfinancegroup
- Website: hkfinancegroup.co

Column 2 — Quick Links
- Home, About Us, Services, Branches, Contact, Privacy Policy

Column 3 — Services
- GST Filing, ITR Filing, Company Registration, MSME Registration, Trademark, FSSAI License, ISO Certification, Accounting

Column 4 — Contact
- Address (Surat HO)
- Phone numbers
- All India Online badge

**Bottom bar:**
- `© 2025 HK Finance Group. All rights reserved.`
- `Designed with ♥ in Surat`

---

## PAGE: Services (`/services`)

**Hero:** Green bg, white headline — `"80+ Business Compliance Services"`, sub + search bar to filter services

**Layout:** Left sidebar with category filter tabs | Right: filtered ServiceCards grid

**Categories (sidebar):**
- All Services
- Registration
- GST & Taxation
- Income Tax
- Accounting
- Business Certifications
- Government Licenses
- Property Rights
- Revenue Services

Each card: icon, service name, 1-line description, `Enquire →` button

---

## PAGE: About Us (`/about`)

**Hero:** Split layout — left text, right team photo placeholder
- Headline: `"Your Trusted Partner Since Day One"`
- Sub: Mission statement

**Section: Our Story** — 2-column text block with timeline

**Section: Our Team** — Cards for CA, CS, Advocate roles (no personal names needed unless provided)

**Section: Why HK Finance** — Same 7-point list as homepage Section 5

**Section: Branches Map** — Reuse branch component

---

## PAGE: Contact (`/contact`)

**Hero:** Small green hero, title `"Get In Touch"`

**Layout:** 2-column
- Left: Contact form
  - Name (text)
  - Phone (tel)
  - Email (email)
  - City (text)
  - Service Required (select — dropdown with all categories)
  - Message (textarea)
  - Submit: `Send Enquiry` [gold button]

- Right:
  - Phone numbers (all 5, clickable)
  - WhatsApp quick link button
  - Address card per branch
  - Business hours (Mon–Sat, 10am–7pm)

**Below form:** Embedded Google Map (Surat HO)

---

## PAGE: Individual Service (`/services/[slug]`)

**Template — reuse for all 80+ services:**

- Hero: Service name + breadcrumb (Home > Services > Category > Service)
- Section: What is [Service]?
- Section: Who needs it?
- Section: Documents Required (checklist)
- Section: Process Steps (timeline component)
- Section: Why choose HK Finance for this?
- Sidebar (sticky): Quick enquiry form + phone numbers
- Bottom: Related Services (3 ServiceCards)

---

## ⚙️ Technical Requirements

### Stack
- **Framework:** Next.js 14+ (App Router) OR React + Vite
- **Styling:** Tailwind CSS v3 with custom theme extending the color variables above
- **Icons:** Lucide React or Heroicons (outline)
- **Fonts:** Google Fonts — Inter (body) + Sora (display)
- **Animations:** Framer Motion for scroll reveals, hover transitions, tab switches
- **Forms:** React Hook Form + Zod validation
- **SEO:** next/head meta tags, OG images, sitemap.xml, robots.txt

### Tailwind Config Extensions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary:       '#21592D',
        'primary-light': '#EBF5EE',
        gold:          '#C9960C',
        'gold-hover':  '#A87A08',
        dark:          '#1F2520',
        'text-dark':   '#1A1A1A',
        'text-muted':  '#555555',
        'bg-page':     '#F7F7F5',
        border:        '#E0E0DC',
        'gray-mid':    '#757A76',
        'gray-light':  '#C1C2C1',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '16px',
        xl:   '24px',
        pill: '999px',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        hover: '0 4px 24px rgba(33,89,45,0.12)',
      },
    },
  },
}
```

### Component File Structure

```
/components
  /ui
    Button.jsx
    Badge.jsx
    FormInput.jsx
    AccordionItem.jsx
    NavLink.jsx
  /sections
    Navbar.jsx
    HeroSection.jsx
    StatsStrip.jsx
    ServicesGrid.jsx
    WhyChooseUs.jsx
    HowItWorks.jsx
    ServicesTabs.jsx
    Testimonials.jsx
    Branches.jsx
    CTABanner.jsx
    FAQSection.jsx
    ContactBar.jsx
    Footer.jsx
  /cards
    ServiceCard.jsx
    TestimonialCard.jsx
    BranchCard.jsx
    StatCard.jsx
/pages (or /app)
  index.jsx         → Home
  services/index.jsx → Services listing
  services/[slug].jsx → Individual service
  about.jsx
  contact.jsx
/data
  services.js       → All 80+ services with slug, category, description
  testimonials.js
  faqs.js
  branches.js
/styles
  globals.css       → CSS variables + base styles
```

### Performance Requirements
- Lighthouse score ≥ 90 on all categories
- Images: next/image with WebP + lazy loading
- Fonts: preload Inter + Sora via `<link rel="preload">`
- No layout shift (CLS < 0.1)
- Mobile-first responsive (breakpoints: sm 640, md 768, lg 1024, xl 1280)

### SEO & Meta (per page)

```jsx
// Home
title: "HK Finance | Business Compliance, GST, ITR, Company Registration — Surat"
description: "HK Finance offers GST filing, ITR, company registration, MSME, ISO, FSSAI, trademark and 80+ compliance services. All India online. Offices in Surat, Ahmedabad, Vadodara."
keywords: "GST registration Surat, ITR filing Gujarat, company registration Surat, MSME registration, HK Finance"
```

---

## 🎨 Design Rules (Strictly Follow)

1. **Gold buttons only for CTAs** — never use green as a button for primary actions
2. **Green for trust signals** — checkmarks, icons, underlines, borders
3. **No gradients on body sections** — only white or `#F7F7F5` alternating backgrounds
4. **Green gradient allowed only** — on hero right panel and CTA banner
5. **All cards:** white background, `0.5px solid #E0E0DC` border, `--radius-lg` corners
6. **Section alternation:** White → Off-white → White → Off-white (never two same in a row)
7. **Hover states:** cards lift with `--shadow-hover`, border turns green
8. **Typography hierarchy:** Display font (Sora) only for hero H1 and section H2 titles. Everything else Inter.
9. **No decorative emoji in production** — use proper SVG icons or Lucide icons
10. **Mobile CTA:** Floating WhatsApp button (bottom-right, green, always visible)

---

## 📱 Mobile Specifics

- Sticky bottom bar on mobile: `[Call Now]` [gold] + `[WhatsApp]` [green]
- Hamburger nav: slide-in drawer from right, accordion categories
- Hero: stack vertically (text above, visual below)
- Stats strip: 2×2 grid instead of 4-column
- Service cards: single column scroll
- Footer: stacked single column

---

*End of prompt. Use all company data, color tokens, component specs, and page structure above to build the complete HK Finance website.*
