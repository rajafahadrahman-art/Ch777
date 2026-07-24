# CH777 Game Website

Production-ready informational website for **https://ch777game.com.pk**.

## Tech Stack

- Next.js App Router
- TypeScript
- Lightweight global CSS (no heavy UI libraries)
- Next.js Metadata API, sitemap, and robots

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Deploy with default Next.js settings.
4. Point the domain `ch777game.com.pk` to the Vercel project.

## Expected Images

Place these WebP files in `/public/images/`:

- `ch777-logo.webp`
- `ch777-home-banner.webp`
- `ch777-home-feature.webp`
- `ch777-download-banner.webp`
- `ch777-download-feature.webp`
- `ch777-login-banner.webp`
- `ch777-login-feature.webp`
- `ch777-reviews-banner.webp`

## Main Routes

| Page | Route |
|---|---|
| Home | `/` |
| Download | `/ch777-download` |
| Login | `/ch777-login` |
| Deposit Guide | `/deposit-guide` |
| Withdrawal Guide | `/withdrawal-guide` |
| About Us | `/about-us` |
| Contact Us | `/contact-us` |
| Privacy Policy | `/privacy-policy` |
| Disclaimer | `/disclaimer` |
| Terms and Conditions | `/terms-and-conditions` |
| Responsible Gaming | `/responsible-gaming` |

## Notes

- Header Download button uses: `https://www.hc777.me/?id=385283176`
- Homepage hero buttons link internally to `/ch777-download` and `/ch777-login`
- Legal pages use `noindex, nofollow` via Next.js metadata
- Review section is UI/content only (no fake Review/AggregateRating schema)
