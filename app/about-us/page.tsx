import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About CH777Game.com.pk",
  description:
    "Learn about CH777Game.com.pk, our purpose, content approach, and user-focused game guides.",
  path: "/about-us",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
];

export default function AboutUsPage() {
  return (
    <>
      <JsonLd
        id="about-schema"
        data={[
          webPageSchema({
            name: "About CH777Game.com.pk",
            description:
              "Learn about CH777Game.com.pk, our purpose, content approach, and user-focused game guides.",
            path: "/about-us",
            type: "AboutPage",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner animate-in">
            <p className="eyebrow" style={{ color: "#f3d27a" }}>
              Our Story
            </p>
            <h1>About CH777Game.com.pk</h1>
            <p>
              We publish practical, easy-to-read guides that help Pakistani
              users understand setup, access, and wallet-related topics with
              less confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Purpose of This Website</h2>
          <p>
            For a general overview of the platform, visit our{" "}
            <Link href="/">Ch777</Link> homepage guide.
          </p>
          <p>
            <strong>CH777Game.com.pk</strong> exists to organize useful
            information in one place. Instead of scattering tips across random
            posts, we keep the essentials structured across clear pages for
            download, login, deposits, and withdrawals.
          </p>
          <h2>Informational Mission</h2>
          <p>
            Our mission is educational. We explain common flows, highlight
            practical checks, and point readers to the next relevant guide. The
            site is not a substitute for official in-app instructions or local
            regulations.
          </p>
          <p>
            You can return to the complete{" "}
            <Link href="/">Ch777 Game</Link> overview for features, games,
            safety information, and general guidance.
          </p>
          <h2>User Support and Content Goals</h2>
          <ul>
            <li>Write in plain English with a mobile-first reading style</li>
            <li>Keep navigation simple and internally connected</li>
            <li>Update guidance when processes become clearer</li>
            <li>Maintain transparency on legal and responsible-use pages</li>
          </ul>
          <p>
            Looking for help right away? Start with{" "}
            <Link href="/ch777-download">Ch777 game download</Link>,{" "}
            <Link href="/ch777-login">Ch777 game login</Link>, or visit our{" "}
            <Link href="/contact-us">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
