import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import InternalLinks from "@/components/InternalLinks";
import JsonLd from "@/components/JsonLd";
import SiteImage from "@/components/SiteImage";
import { EXTERNAL_DOWNLOAD_URL, IMAGES } from "@/lib/constants";
import {
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CH777 Download APK | Android Guide",
  description:
    "Get the CH777 download guide with APK steps, install help, Android tips, and access information.",
  path: "/ch777-download",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/ch777-download" },
];

const faqs = [
  {
    question: "What is an APK file?",
    answer:
      "An APK is an Android package file used to install apps outside the standard store flow. Always download from a trusted source and review permissions before installing.",
  },
  {
    question: "Can I install it on iPhone?",
    answer:
      "This guide focuses on Android APK installation. iOS users should follow any official instructions shown for their device type.",
  },
  {
    question: "Why does Android ask about unknown sources?",
    answer:
      "Android protects devices by limiting installs from outside the Play Store. You may need to allow install permission for your browser or file manager temporarily.",
  },
  {
    question: "What should I do if the install fails?",
    answer:
      "Check storage space, confirm the file finished downloading, update your Android WebView/browser if needed, and retry after clearing a partial install.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        id="download-schema"
        data={[
          webPageSchema({
            name: "CH777 Download APK | Android Guide",
            description:
              "Get the CH777 download guide with APK steps, install help, Android tips, and access information.",
            path: "/ch777-download",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
          softwareApplicationSchema(),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner animate-in">
            <p className="eyebrow" style={{ color: "#f3d27a" }}>
              Android Setup
            </p>
            <h1>CH777 Download Guide for Android Users</h1>
            <p>
              Follow a clean path for the APK process, installation checks, and
              common fixes so your first setup feels straightforward.
            </p>
            <div className="btn-group" style={{ marginTop: "1.25rem" }}>
              <a
                className="btn btn-gold"
                href={EXTERNAL_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Download
              </a>
              <Link className="btn btn-outline" href="/ch777-login">
                Go to Login Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SiteImage {...IMAGES.downloadBanner} priority />
          <div className="prose">
            <h2>What Is CH777 Download?</h2>
            <p>
              <strong>Ch777 Download</strong> refers to getting the Android
              package and preparing your phone for installation. This page
              explains the process in practical language so you know what to
              expect before, during, and after setup.
            </p>
            <p>
              If you are comparing options or returning after a device change,
              treat this as your checklist for a stable{" "}
              <strong>Ch777 game download</strong> experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="prose">
            <h2>CH777 Game Download Overview</h2>
            <p>
              A complete <strong>ch777 game apk</strong> setup usually includes
              downloading the file, allowing a temporary install permission,
              completing installation, and opening the app to create or restore
              access.
            </p>
            <p>
              Keep your connection stable and avoid interrupting the file
              transfer. After install, you can continue with{" "}
              <Link href="/ch777-login">Ch777 Login</Link> guidance if you need
              help signing in.
            </p>
          </div>
          <SiteImage {...IMAGES.downloadFeature} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>CH777 APK Explained</h2>
            <p>
              Understanding the package type helps you install with fewer
              surprises.
            </p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Direct Android Package</h3>
              <p>
                The <strong>Ch777 apk</strong> is installed like other Android
                apps once your device allows the source.
              </p>
            </article>
            <article className="card">
              <h3>Permission Prompt</h3>
              <p>
                Your phone may ask for install permission from the browser or
                file manager. Enable it only for the trusted source you are
                using.
              </p>
            </article>
            <article className="card">
              <h3>Post-Install Check</h3>
              <p>
                After setup, open the app once, confirm it launches, then secure
                your login details.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Android Download Steps</h2>
          </div>
          <ol className="steps">
            <li>
              Open the official download action from the button on this page.
            </li>
            <li>Wait until the APK file finishes saving to your device.</li>
            <li>
              Tap the completed file from notifications or your Downloads
              folder.
            </li>
            <li>
              Allow install permission if Android requests it, then confirm
              installation.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            <h2>Installation Steps</h2>
            <ul>
              <li>Confirm enough free storage is available</li>
              <li>Close unused apps if your phone is running low on memory</li>
              <li>Install the package and wait for the success message</li>
              <li>Open the app and prepare your account details</li>
            </ul>
            <h2>Basic Requirements</h2>
            <ul>
              <li>Compatible Android device</li>
              <li>Stable mobile data or Wi-Fi</li>
              <li>Enough storage for the package and cache</li>
              <li>Updated browser or file manager</li>
            </ul>
          </div>
          <div className="prose">
            <h2>Common Issues and Fixes</h2>
            <ul>
              <li>
                <strong>Incomplete file:</strong> delete the partial download and
                try again.
              </li>
              <li>
                <strong>Blocked install:</strong> temporarily allow the correct
                install source.
              </li>
              <li>
                <strong>App won&apos;t open:</strong> restart the phone and
                reopen the icon.
              </li>
              <li>
                <strong>Old package conflict:</strong> uninstall a broken older
                version, then reinstall cleanly.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Download Ready? Continue to Account Access"
        text="Once installation is complete, use the login guide for registration, sign-in, and recovery tips."
        secondaryHref="/ch777-login"
        secondaryLabel="Open Ch777 Login"
      />

      <Faq
        title="Download FAQ"
        intro="Answers to the questions readers ask most during Android setup."
        items={faqs}
      />

      <InternalLinks
        links={[
          {
            href: "/ch777-login",
            label: "Ch777 game login",
            description: "Create or access your account",
          },
          {
            href: "/deposit-guide",
            label: "Deposit Guide",
            description: "Learn funding steps after setup",
          },
          {
            href: "/withdrawal-guide",
            label: "Withdrawal Guide",
            description: "Review cash-out preparation tips",
          },
        ]}
      />
    </>
  );
}
