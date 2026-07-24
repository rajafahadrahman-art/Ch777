import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import InternalLinks from "@/components/InternalLinks";
import JsonLd from "@/components/JsonLd";
import ReviewsSection from "@/components/ReviewsSection";
import SiteImage from "@/components/SiteImage";
import { IMAGES } from "@/lib/constants";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CH777 Game App | Download & Login Guide",
  description:
    "Explore CH777 Game app, login help, download steps, reviews, and key guides for Pakistani users.",
  path: "/",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
];

const faqs = [
  {
    question: "What can I find on this website?",
    answer:
      "You can find practical guides for setup, account access, funding, and cash-out steps written for Pakistani users who want clear directions.",
  },
  {
    question: "Is this an official operator website?",
    answer:
      "No. CH777Game.com.pk is an informational resource that explains common flows and helps readers navigate key pages with less confusion.",
  },
  {
    question: "Where should I start if I am new?",
    answer:
      "Start with the overview on this page, then move to the download guide, followed by login help and payment walkthroughs when you need them.",
  },
  {
    question: "Does the site cover local payment options?",
    answer:
      "Yes. The deposit guide mentions commonly used Pakistan-friendly methods such as JazzCash, Easypaisa, and bank transfer style options when available in-app.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        id="home-schema"
        data={[
          organizationSchema(),
          websiteSchema(),
          webPageSchema({
            name: "CH777 Game App | Download & Login Guide",
            description:
              "Explore CH777 Game app, login help, download steps, reviews, and key guides for Pakistani users.",
            path: "/",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="hero">
        <div className="container">
          <div className="hero-panel animate-in">
            <div className="hero-copy">
              <p className="eyebrow">Pakistan-Focused Game Guides</p>
              <h1>CH777 Game App Help for Faster Setup</h1>
              <p>
                Discover how the platform works, where to begin, and which
                guides to open next. From first install to everyday account
                tips, this homepage keeps the journey simple for Pakistani
                users.
              </p>
              <div className="btn-group">
                <Link className="btn btn-gold" href="/ch777-download">
                  Download
                </Link>
                <Link className="btn btn-outline" href="/ch777-login">
                  Login
                </Link>
              </div>
            </div>
            <div className="hero-media animate-in-delay">
              <Image
                src={IMAGES.homeBanner.src}
                alt={IMAGES.homeBanner.alt}
                title={IMAGES.homeBanner.title}
                width={IMAGES.homeBanner.width}
                height={IMAGES.homeBanner.height}
                priority
                sizes="(max-width: 980px) 100vw, 520px"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-wrap">
          <div className="section-head">
            <p className="eyebrow">Introduction</p>
            <h2>A Clear Starting Point for Ch 777 Players</h2>
          </div>
          <div className="prose">
            <p>
              Looking for a calm, practical introduction to <strong>Ch777</strong>?
              This site explains the basics in plain English so you can move
              through setup without guesswork. Whether you are exploring the
              brand for the first time or returning for a refresher, the goal is
              the same: clear steps, useful context, and links that take you to
              the right guide.
            </p>
            <p>
              Many readers arrive with one of three needs—install help, account
              access, or payment guidance. Use this page to understand the
              overall experience, then jump into the detailed walkthroughs for{" "}
              <Link href="/ch777-download">Ch777 game download</Link> or{" "}
              <Link href="/ch777-login">Ch777 game login</Link> when you are
              ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <div className="section-head">
              <p className="eyebrow">Overview</p>
              <h2>What Is CH777 Game?</h2>
            </div>
            <div className="prose">
              <p>
                <strong>Ch 777 Game</strong> is a mobile-oriented entertainment
                platform that combines familiar casino-style categories with a
                compact app experience. Users typically look for smooth
                navigation, quick account entry, and support for local payment
                habits.
              </p>
              <p>
                On CH777Game.com.pk, we focus on informational guidance rather
                than hype. That means short explanations, realistic expectations,
                and practical next steps for people browsing from Pakistan.
              </p>
            </div>
          </div>
          <SiteImage {...IMAGES.homeFeature} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Highlights</p>
            <h2>Key Features Users Look For</h2>
            <p>
              These points summarize what many first-time visitors want to
              understand before they continue.
            </p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Mobile-First Layout</h3>
              <p>
                A compact interface designed for phones, with menus that keep
                core actions easy to find.
              </p>
            </article>
            <article className="card">
              <h3>Account Access Flow</h3>
              <p>
                Registration and sign-in options that help users return to their
                profile with fewer interruptions.
              </p>
            </article>
            <article className="card">
              <h3>Local Payment Context</h3>
              <p>
                Guidance around funding methods commonly used in Pakistan, plus
                tips for smoother transfers.
              </p>
            </article>
            <article className="card">
              <h3>Support Guides</h3>
              <p>
                Step pages for install, login, deposits, and withdrawals so you
                always know what to check next.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why Explore</p>
            <h2>Why Users Explore Ch777 Game Online</h2>
          </div>
          <div className="prose">
            <p>
              People usually explore <strong>Ch777 game online</strong>{" "}
              resources when they want a faster path from curiosity to a working
              setup. Guides help reduce trial-and-error, especially when someone
              is installing an APK for the first time or checking how wallet
              actions work.
            </p>
            <ul>
              <li>Clear install and permission reminders</li>
              <li>Simple account creation and recovery tips</li>
              <li>Funding and cash-out overviews in everyday language</li>
              <li>Internal links that connect related topics without clutter</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-wrap">
          <div className="section-head">
            <p className="eyebrow">App Snapshot</p>
            <h2>CH777 Game App Overview</h2>
          </div>
          <div className="prose">
            <p>
              The <strong>Ch777 Game app</strong> experience is built around
              quick browsing and short sessions. After setup, most users focus
              on finding categories they enjoy, managing wallet actions, and
              keeping login details secure.
            </p>
            <p>
              If you want the install path first, open the{" "}
              <Link href="/ch777-download">Ch777 Download</Link> page. If your
              account is already ready, the{" "}
              <Link href="/ch777-login">Ch777 Login</Link> guide covers access
              and recovery tips.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Gameplay</p>
            <h2>Popular Categories at a Glance</h2>
            <p>
              Exact catalogs can change, but most visitors look for these
              familiar entertainment groups.
            </p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Slots Style Games</h3>
              <p>
                Fast rounds and simple controls that suit short mobile sessions.
              </p>
            </article>
            <article className="card">
              <h3>Table Classics</h3>
              <p>
                Familiar card and table formats for players who prefer paced
                gameplay.
              </p>
            </article>
            <article className="card">
              <h3>Live Style Rooms</h3>
              <p>
                Interactive formats that focus on real-time presentation when
                available.
              </p>
            </article>
            <article className="card">
              <h3>Quick Play Picks</h3>
              <p>
                Short-session options that make browsing and testing titles easy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready for Download or Login Help?"
        text="Choose the path you need next. Use the install guide for first-time setup, or open the access guide if your account is already created."
        showExternalDownload
        secondaryHref="/ch777-login"
        secondaryLabel="Open Login Guide"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Benefits</p>
            <h2>Helpful Highlights for New Visitors</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Step Clarity</h3>
              <p>
                Each major action is broken into short, readable steps instead of
                long walls of text.
              </p>
            </article>
            <article className="card">
              <h3>Pakistan Context</h3>
              <p>
                Examples and tips reflect common local habits around mobile apps
                and payment methods.
              </p>
            </article>
            <article className="card">
              <h3>Connected Guides</h3>
              <p>
                From the{" "}
                <Link href="/">Ch777 game app</Link> overview to deposit and
                withdrawal pages, related topics stay linked.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <Faq
        title="Homepage FAQ"
        intro="Quick answers for readers who are still deciding where to go next."
        items={faqs}
      />

      <InternalLinks
        title="Continue With Core Guides"
        intro="Move from overview to action with these essential pages."
        links={[
          {
            href: "/ch777-download",
            label: "Ch777 game download",
            description: "APK and Android install steps",
          },
          {
            href: "/ch777-login",
            label: "Ch777 game login",
            description: "Register, sign in, and recovery tips",
          },
          {
            href: "/deposit-guide",
            label: "Deposit Guide",
            description: "Funding methods and smooth transfer tips",
          },
          {
            href: "/withdrawal-guide",
            label: "Withdrawal Guide",
            description: "Cash-out checks and process overview",
          },
        ]}
      />
    </>
  );
}
