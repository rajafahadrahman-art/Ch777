import Link from "next/link";

export type InternalLinkItem = {
  href: string;
  label: string;
  description: string;
};

type InternalLinksProps = {
  title?: string;
  intro?: string;
  links: InternalLinkItem[];
};

export default function InternalLinks({
  title = "Helpful Guides",
  intro = "Continue with the guides most users need next.",
  links,
}: InternalLinksProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Explore More</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="internal-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
              <span>{link.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
