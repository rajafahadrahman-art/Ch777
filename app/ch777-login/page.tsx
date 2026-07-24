import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import InternalLinks from "@/components/InternalLinks";
import JsonLd from "@/components/JsonLd";
import SiteImage from "@/components/SiteImage";
import { EXTERNAL_DOWNLOAD_URL, IMAGES } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CH777 Login Guide | Register & Access",
  description:
    "Learn CH777 login and registration steps, account access tips, and quick user guidance.",
  path: "/ch777-login",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Login", href: "/ch777-login" },
];

const faqs = [
  {
    question: "Do I need to register before login?",
    answer:
      "Yes. New users should create an account first, then sign in with the same details whenever they return.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "Use the in-app recovery option linked from the sign-in screen. Keep access to the mobile number or email used during registration.",
  },
  {
    question: "Can I use the same account on a new phone?",
    answer:
      "Usually yes. Install the app on the new device and sign in with your existing credentials after setup.",
  },
  {
    question: "How can I keep my account safer?",
    answer:
      "Use a unique password, avoid public Wi-Fi for sensitive actions, and never share OTP codes or login details.",
  },
];

export default function LoginPage() {
  return (
    <>
      <JsonLd
        id="login-schema"
        data={[
          webPageSchema({
            name: "CH777 Login Guide | Register & Access",
            description:
              "Learn CH777 login and registration steps, account access tips, and quick user guidance.",
            path: "/ch777-login",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner animate-in">
            <p className="eyebrow" style={{ color: "#f3d27a" }}>
              Account Access
            </p>
            <h1>CH777 Login and Registration Help</h1>
            <p>
              Learn how to create an account, sign in smoothly, and recover
              access when details are misplaced.
            </p>
            <div className="btn-group" style={{ marginTop: "1.25rem" }}>
              <Link className="btn btn-gold" href="/ch777-download">
                Need the App First?
              </Link>
              <a
                className="btn btn-outline"
                href={EXTERNAL_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SiteImage {...IMAGES.loginBanner} priority />
          <div className="prose">
            <h2>What Is CH777 Login?</h2>
            <p>
              For a general overview of the platform, visit our{" "}
              <Link href="/">Ch777</Link> homepage guide.
            </p>
            <p>
              <strong>Ch777 login</strong> is the process of entering your
              registered details to open your account profile. A reliable sign-in
              flow matters because it protects your wallet actions and personal
              preferences.
            </p>
            <p>
              This page also covers registration basics so new users can complete{" "}
              <strong>Ch777 game login</strong> without skipping important
              checks.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div className="prose">
            <h2>How to Register</h2>
            <ol className="steps">
              <li>Open the installed app and choose the register option.</li>
              <li>
                Enter a valid mobile number or email and create a strong
                password.
              </li>
              <li>Confirm any verification code sent to you.</li>
              <li>Save your details in a secure place before continuing.</li>
            </ol>
          </div>
          <SiteImage {...IMAGES.loginFeature} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How to Login</h2>
          </div>
          <ol className="steps">
            <li>Launch the app and open the sign-in screen.</li>
            <li>Enter the same credentials used during registration.</li>
            <li>Submit and wait for the dashboard or home screen to load.</li>
            <li>
              If prompted, complete any extra verification step shown in-app.
            </li>
          </ol>
          <p style={{ marginTop: "1.25rem", color: "var(--text-muted)" }}>
            You can return to the complete{" "}
            <Link href="/">Ch777 Game</Link> overview for features, games,
            safety information, and general guidance.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card-grid">
            <article className="card">
              <h3>Account Access Tips</h3>
              <p>
                Keep one primary contact method active. Changing numbers or
                emails without updating account settings can slow recovery later.
              </p>
            </article>
            <article className="card">
              <h3>Forgotten Password Help</h3>
              <p>
                Use the reset link on the login screen, then follow the OTP or
                email steps carefully. Avoid repeated failed attempts in a short
                window.
              </p>
            </article>
            <article className="card">
              <h3>Security Tips</h3>
              <p>
                Do not reuse passwords from other apps, and never share screenshots
                that show full account credentials.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Signed In? Explore Funding Next"
        text="After a successful sign-in, review the deposit guide for payment examples commonly used in Pakistan."
        secondaryHref="/deposit-guide"
        secondaryLabel="Open Deposit Guide"
      />

      <Faq
        title="Login FAQ"
        intro="Short answers for registration, recovery, and safer account habits."
        items={faqs}
      />

      <InternalLinks
        links={[
          {
            href: "/ch777-download",
            label: "Ch777 game download",
            description: "Install guidance before first login",
          },
          {
            href: "/deposit-guide",
            label: "Deposit Guide",
            description: "Add funds after account access",
          },
          {
            href: "/withdrawal-guide",
            label: "Withdrawal Guide",
            description: "Prepare for cash-out requests",
          },
        ]}
      />
    </>
  );
}
