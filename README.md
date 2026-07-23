# CH777 Game Website

Official project repository for **CH777Game.com.pk**.

This website is an informational guide for CH777 users, covering download, login, deposit, withdrawal, reviews, FAQs, and related guidance.

## Website Details

- **Domain:** https://ch777game.com.pk
- **External Download Link:** https://www.hc777.me/?id=385283176
- **Framework:** Next.js App Router
- **Deployment:** Vercel
- **Repository:** GitHub
- **Primary Audience:** Pakistan
- **Language:** English

## Main Routes

| Page | Route | Primary Search Intent |
|---|---|---|
| Home | `/` | CH777 Game overview |
| Download | `/ch777-download` | CH777 Download |
| Login | `/ch777-login` | CH777 Login |
| Deposit Guide | `/deposit-guide` | CH777 Deposit Guide |
| Withdrawal Guide | `/withdrawal-guide` | CH777 Withdrawal Guide |
| About Us | `/about-us` | About CH777Game.com.pk |
| Contact Us | `/contact-us` | Contact CH777Game.com.pk |
| Privacy Policy | `/privacy-policy` | Legal |
| Disclaimer | `/disclaimer` | Legal |
| Terms and Conditions | `/terms-and-conditions` | Legal |
| Responsible Gaming | `/responsible-gaming` | Legal |

## Indexing Rules

The following pages must remain indexable:

- Homepage
- Download page
- Login page
- Deposit Guide
- Withdrawal Guide
- About Us
- Contact Us

The following legal pages must use:

```html
<meta name="robots" content="noindex, nofollow">
```

Legal pages:

- Privacy Policy
- Disclaimer
- Terms and Conditions
- Responsible Gaming

Do not block these pages through `robots.txt`. Apply `noindex, nofollow` through page metadata.

## Color Palette

The website must use a bright, premium combination of light green, soft yellow, warm gold, ivory, and white.

```css
:root {
  --background: #FFFDF4;
  --surface: #FFFFFF;
  --light-green: #EAF8DF;
  --primary-green: #79B84A;
  --deep-green: #2F5F32;
  --soft-yellow: #FFF3A6;
  --warm-gold: #D6A62E;
  --light-gold: #F3D675;
  --text-primary: #243127;
  --text-muted: #667069;
  --border: #E4E7D2;
}
```

### Design Rules

- Keep the website bright, clean, lightweight, and premium.
- Use ivory or off-white as the main background.
- Use light green for alternate sections and feature cards.
- Use deep green for headings, navigation, and primary buttons.
- Use soft yellow for highlights and badges.
- Use warm gold sparingly for icons, borders, separators, and premium accents.
- Do not use blue, cyan, purple, neon green, or heavy black backgrounds.
- Keep most cards white with subtle green or golden borders.
- Use a deep green footer with ivory text and restrained gold accents.
- Avoid heavy animations and large JavaScript libraries.

## Image Files

Upload all image files in WebP format inside:

```text
/public/images/
```

Expected files:

```text
/public/images/ch777-logo.webp
/public/images/ch777-home-banner.webp
/public/images/ch777-home-feature.webp
/public/images/ch777-download-banner.webp
/public/images/ch777-download-feature.webp
/public/images/ch777-login-banner.webp
/public/images/ch777-login-feature.webp
/public/images/ch777-reviews-banner.webp
```

## Image SEO Attributes

| Image | Alt Text | Title |
|---|---|---|
| `ch777-logo.webp` | Ch777 Game | Ch 777 Game |
| `ch777-home-banner.webp` | Ch777 | Ch777 |
| `ch777-home-feature.webp` | Ch777 | Ch777 |
| `ch777-download-banner.webp` | Ch777 Download | Ch777 game download |
| `ch777-download-feature.webp` | Ch777 Download | Ch777 game download |
| `ch777-login-banner.webp` | Ch777 Login | Ch777 game login |
| `ch777-login-feature.webp` | Ch777 Login | Ch777 game login |
| `ch777-reviews-banner.webp` | Ch777 App | Ch777 game app |

### Image Handling

- Use the Next.js `Image` component.
- Keep images responsive.
- Do not stretch or distort images.
- Set accurate width and height values to reduce layout shift.
- Use `priority` for the homepage hero and main logo.
- Lazy-load below-the-fold images.
- Use `object-fit: cover` for banners where appropriate.
- Use `object-fit: contain` for the logo.
- Keep uploaded images in WebP format.

## Focus Keywords

### Homepage

- Ch777
- Ch 777
- Ch 777 Game
- Ch777 Game
- Ch777 Game app
- Ch777 app
- Ch777 game online

### Download Page

- Ch777 Download
- Ch777 game download
- ch777 game apk
- Ch777 apk

### Login Page

- Ch777 login
- Ch777 game login

### Deposit Guide

- Ch777 deposit
- Ch777 deposit guide
- Ch777 payment methods
- Ch777 app deposit

### Withdrawal Guide

- Ch777 withdrawal
- Ch777 withdrawal guide
- Ch777 withdrawal process
- Ch777 app withdrawal

## Keyword Usage Rules

- Keep the main focus keyword density below **0.80%** on every page.
- Do not stuff keywords.
- Use variations naturally.
- Use only one H1 per page.
- Keep each page focused on a separate search intent.
- Avoid keyword cannibalization.
- Use descriptive H2 and H3 headings.
- Write natural, human-readable English.

## Internal Linking

Use these anchors naturally:

- **Ch777 game download** → `/ch777-download`
- **Ch777 Download** → `/ch777-download`
- **Ch777 game login** → `/ch777-login`
- **Ch777 Login** → `/ch777-login`
- **Ch777 game app** → `/`

Do not overuse exact-match anchor text.

The homepage hero must contain:

- Download button linking to `/ch777-download`
- Login button linking to `/ch777-login`

The header must contain a prominent external Download button linking to:

```text
https://www.hc777.me/?id=385283176
```

External download links should use appropriate security attributes:

```html
target="_blank"
rel="noopener noreferrer sponsored"
```

## Homepage Requirements

The homepage must include:

1. Hero section
2. CH777 introduction
3. What is CH777 Game?
4. Key features
5. CH777 app overview
6. Game categories
7. Download and login CTA section
8. Deposit and withdrawal guide links
9. Benefits or highlights
10. Player reviews section
11. Reviews banner near the end
12. FAQ section
13. Final internal-link section

The reviews section is compulsory.

Use editable HTML review cards in addition to the reviews banner. Do not add fake `Review` or `AggregateRating` schema.

## Metadata Limits

- Meta title: under 60 characters
- Meta description: under 150 characters
- Add canonical URLs
- Add Open Graph metadata
- Add Twitter Card metadata
- Add unique metadata for every indexable page

## Recommended Metadata

### Homepage

- **Title:** CH777 Game App | Download & Login Guide
- **Description:** Explore CH777 Game app, login help, download steps, reviews, and key guides for Pakistani users.

### Download

- **Title:** CH777 Download APK | Android Guide
- **Description:** Get the CH777 download guide with APK steps, install help, Android tips, and access information.

### Login

- **Title:** CH777 Login Guide | Register & Access
- **Description:** Learn CH777 login and registration steps, account access tips, and quick user guidance.

### Deposit

- **Title:** CH777 Deposit Guide | Payment Steps
- **Description:** Read the CH777 deposit guide with payment methods, funding steps, and useful account tips.

### Withdrawal

- **Title:** CH777 Withdrawal Guide | Cash Out
- **Description:** Follow the CH777 withdrawal guide with account checks, steps, and common withdrawal tips.

## Structured Data

Implement valid JSON-LD where relevant.

### Homepage

- `Organization`
- `WebSite`
- `WebPage`
- `BreadcrumbList`
- `FAQPage`

### Download Page

- `WebPage`
- `BreadcrumbList`
- `FAQPage`
- `SoftwareApplication` only when all required information is accurate

### Login Page

- `WebPage`
- `BreadcrumbList`
- `FAQPage`

### Deposit and Withdrawal Pages

- `WebPage`
- `BreadcrumbList`
- `FAQPage`

### Other Pages

- About Us: `AboutPage`
- Contact Us: `ContactPage`

Do not add fake ratings, fabricated reviews, or misleading aggregate rating schema.

## Technical SEO

The project must include:

- `app/sitemap.ts`
- `app/robots.ts`
- Canonical URLs
- Breadcrumb navigation
- Semantic HTML
- Mobile-friendly navigation
- Accessible buttons and links
- Optimized images
- No broken internal links
- Proper heading hierarchy
- Good Core Web Vitals practices
- Reusable metadata helpers where useful

## Suggested Project Structure

```text
ch777game/
├── app/
│   ├── about-us/
│   │   └── page.tsx
│   ├── ch777-download/
│   │   └── page.tsx
│   ├── ch777-login/
│   │   └── page.tsx
│   ├── contact-us/
│   │   └── page.tsx
│   ├── deposit-guide/
│   │   └── page.tsx
│   ├── disclaimer/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── responsible-gaming/
│   │   └── page.tsx
│   ├── terms-and-conditions/
│   │   └── page.tsx
│   ├── withdrawal-guide/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Breadcrumbs.tsx
│   ├── CTASection.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── InternalLinks.tsx
│   ├── JsonLd.tsx
│   └── Reviews.tsx
├── public/
│   └── images/
├── next.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

## Deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Deploy the Next.js project.
4. Connect `ch777game.com.pk` in Vercel project settings.
5. Add the DNS records provided by Vercel.
6. Confirm HTTPS and canonical URLs.
7. Submit the sitemap to Google Search Console.

## Content and Compliance Notes

- Clearly present the website as an independent informational guide.
- Do not claim to be the official owner unless verified.
- Do not guarantee earnings, winnings, withdrawals, or bonuses.
- Do not invent player reviews.
- Include responsible gaming information.
- Avoid misleading urgency, fake counters, or fabricated trust badges.
- Keep all external download links clearly identified.

## Cursor Instructions

When using Cursor, instruct it to read this `README.md` before creating or editing website files.

Cursor must preserve:

- Routes
- Image filenames
- Image alt and title attributes
- Color palette
- Metadata limits
- Keyword density rule
- Indexing rules
- Internal links
- External download URL
- Reviews section
- Schema restrictions
