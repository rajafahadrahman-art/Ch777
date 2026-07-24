export const SITE_URL = "https://ch777game.com.pk";
export const SITE_NAME = "CH777Game.com.pk";
export const SITE_BRAND = "CH777 Game";
export const EXTERNAL_DOWNLOAD_URL = "https://www.hc777.me/?id=385283176";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/ch777-download", label: "Download" },
  { href: "/ch777-login", label: "Login" },
  { href: "/deposit-guide", label: "Deposit Guide" },
  { href: "/withdrawal-guide", label: "Withdrawal Guide" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/responsible-gaming", label: "Responsible Gaming" },
] as const;

export const IMAGES = {
  logo: {
    src: "/images/ch777-logo.webp",
    alt: "Ch777 Game",
    title: "Ch 777 Game",
    width: 1254,
    height: 1254,
  },
  homeBanner: {
    src: "/images/ch777-home-banner.webp",
    alt: "Ch777",
    title: "Ch777",
    width: 1916,
    height: 821,
  },
  homeFeature: {
    src: "/images/ch777-home-feature.webp",
    alt: "Ch777",
    title: "Ch777",
    width: 2001,
    height: 786,
  },
  downloadBanner: {
    src: "/images/ch777-download-banner.webp",
    alt: "Ch777 Download",
    title: "Ch777 game download",
    width: 2001,
    height: 786,
  },
  downloadFeature: {
    src: "/images/ch777-download-feature.webp",
    alt: "Ch777 Download",
    title: "Ch777 game download",
    width: 2001,
    height: 786,
  },
  loginBanner: {
    src: "/images/ch777-login-banner.webp",
    alt: "Ch777 Login",
    title: "Ch777 game login",
    width: 2001,
    height: 786,
  },
  loginFeature: {
    src: "/images/ch777-login-feature.webp",
    alt: "Ch777 Login",
    title: "Ch777 game login",
    width: 2001,
    height: 786,
  },
  reviewsBanner: {
    src: "/images/ch777-reviews-banner.webp",
    alt: "Ch777 App",
    title: "Ch777 game app",
    width: 2001,
    height: 786,
  },
} as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};
