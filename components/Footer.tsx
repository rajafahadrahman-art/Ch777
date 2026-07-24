import Image from "next/image";
import Link from "next/link";
import {
  IMAGES,
  LEGAL_LINKS,
  NAV_LINKS,
  SITE_BRAND,
  SITE_NAME,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Image
              src={IMAGES.logo.src}
              alt={IMAGES.logo.alt}
              title={IMAGES.logo.title}
              width={92}
              height={92}
            />
            <span>{SITE_BRAND}</span>
          </div>
          <p>
            {SITE_NAME} shares clear, practical guides for Pakistani users who
            want help with access, setup, account tips, and everyday platform
            questions.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {year} {SITE_NAME}. All rights reserved.
        </span>
        <span>Informational website for Pakistani users.</span>
      </div>
    </footer>
  );
}
