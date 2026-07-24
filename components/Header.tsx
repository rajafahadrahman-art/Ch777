"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  EXTERNAL_DOWNLOAD_URL,
  IMAGES,
  NAV_LINKS,
  SITE_BRAND,
} from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            src={IMAGES.logo.src}
            alt={IMAGES.logo.alt}
            title={IMAGES.logo.title}
            width={84}
            height={84}
            priority
          />
          <span>{SITE_BRAND}</span>
        </Link>

        <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-gold"
            href={EXTERNAL_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
