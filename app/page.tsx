import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import {
  CTABox,
  HighlightCard,
  InfoBox,
  NoticeBox,
  TipBox,
  WarningBox,
} from "@/components/home/ContentBoxes";
import JsonLd from "@/components/JsonLd";
import { IMAGES } from "@/lib/constants";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
  webPageSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const META_TITLE = "Download CH777 Game App in Pakistan 2026 Guide";
const META_DESCRIPTION =
  "Explore CH777 Game app features, popular games, safety tips, payment guidance, rewards, and useful tips and information for Pakistani users.";

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  path: "/",
});

const breadcrumbs = [{ name: "Home", href: "/" }];

const faqs = [
  {
    question: "What is CH777 Game?",
    answer:
      "It is a mobile-focused platform that may provide card games, slots, live tables, crash games, wallet tools, and promotional features through one account.",
  },
  {
    question: "Can CH 777 game be used on an Android phone?",
    answer:
      "Android access may be available through an APK file or supported browser. Device compatibility depends on the Android version, free storage, and current application requirements.",
  },
  {
    question: "Can iPhone users access the platform?",
    answer:
      "Browser access may be available through Safari or another supported browser. A direct iOS application should not be assumed unless it is clearly provided by the current platform.",
  },
  {
    question: "Are JazzCash and Easypaisa available?",
    answer:
      "They may appear as payment options for Pakistani users, but availability can change. Check the active methods displayed inside the wallet before sending money.",
  },
  {
    question: "Can users earn guaranteed income from the app?",
    answer:
      "No. Real-money gaming involves uncertain results, and users can lose deposited funds. Claims of guaranteed daily income should not be trusted.",
  },
  {
    question: "Why might a payment remain pending?",
    answer:
      "A transaction may be delayed because of incorrect details, verification checks, payment-channel issues, maintenance, or account conditions. Keep the transaction reference until the status is resolved.",
  },
  {
    question: "Can bonus funds be withdrawn immediately?",
    answer:
      "Usually, promotions come with conditions. These may include deposit, turnover, game, verification, or expiry requirements.",
  },
  {
    question: "Is CH777Game.com.pk the official operator?",
    answer:
      "No. This is an independent guide website that publishes information about platform access, games, payments, and account procedures.",
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
            name: META_TITLE,
            description: META_DESCRIPTION,
            path: "/",
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
        ]}
      />

      <Breadcrumb items={breadcrumbs} />

      <article className="home-article">
        <section className="hero">
          <div className="container">
            <div className="hero-panel animate-in">
              <div className="hero-copy">
                <p className="eyebrow">Pakistan 2026 Guide</p>
                <h1>Complete CH777 Game App Guide for Pakistani Users in 2026</h1>
                <p>
                  CH777 Game is a mobile gaming platform that brings card games,
                  slots, live tables, crash-style titles, fish games,
                  promotions, and account tools into one place. It is mainly
                  aimed at Android users, although browser access is also
                  available for people using an iPhone, iPad, laptop or desktop
                  computer.
                </p>
                <div className="btn-group">
                  <Link className="btn btn-download-guide" href="/ch777-download">
                    <span aria-hidden="true">⬇</span> View Installation Guide
                  </Link>
                  <Link className="btn btn-account-guide" href="/ch777-login">
                    <span aria-hidden="true">🔑</span> Open Account Guide
                  </Link>
                </div>
              </div>
              <div className="hero-media animate-in-delay">
                <Image
                  className="banner-desktop"
                  src={IMAGES.homeBanner.src}
                  alt={IMAGES.homeBanner.alt}
                  title={IMAGES.homeBanner.title}
                  width={IMAGES.homeBanner.width}
                  height={IMAGES.homeBanner.height}
                  priority
                  sizes="(max-width: 980px) 100vw, 520px"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <Image
                  className="banner-mobile"
                  src={IMAGES.homeMobileBanner.src}
                  alt={IMAGES.homeMobileBanner.alt}
                  title={IMAGES.homeMobileBanner.title}
                  width={IMAGES.homeMobileBanner.width}
                  height={IMAGES.homeMobileBanner.height}
                  priority
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="container home-section-inner prose">
            <p>
              People in Pakistan often search for clear information before
              creating an account. They want to know which games are available,
              how the wallet works, whether local payment options can be used,
              what bonuses may be offered, and what checks should be completed
              before adding money. This page covers those general questions
              without mixing them with detailed installation or account-access
              instructions.
            </p>
            <NoticeBox title="Independent Website Notice">
              <p>
                CH777Game.com.pk is an independent guide website. It publishes
                general information about platform access, games, payments, and
                account procedures. It is not the official operator.
              </p>
            </NoticeBox>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div className="prose home-section-inner">
              <h2>What Is CH777 Game?</h2>
              <p>
                CH 777 Game is an account-based mobile platform where registered
                users may be able to access several gaming categories from one
                dashboard. Instead of installing a separate application for every
                card game, slot, or live table, users can browse the available
                sections through one account.
              </p>
              <p>
                The home screen may contain shortcuts for games, wallet activity,
                promotions, profile settings, customer assistance, transaction
                history, and other account tools. The exact layout can differ
                between versions, but the main purpose remains the same: giving
                mobile users one place to manage their gaming activity.
              </p>
              <p>
                The platform is not limited to one type of title. Depending on
                the current version, users may find card tables, slot machines,
                live games, crash games, sports-related sections, fish-shooting
                titles, and short arcade-style options.
              </p>
            </div>
            <div className="feature-media">
              <Image
                src={IMAGES.homeFeature.src}
                alt={IMAGES.homeFeature.alt}
                title={IMAGES.homeFeature.title}
                width={IMAGES.homeFeature.width}
                height={IMAGES.homeFeature.height}
                sizes="(max-width: 1120px) 100vw, 520px"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        <section className="section section-green">
          <div className="container">
            <div className="section-head">
              <h2>Why This Game Is Trending in Pakistan</h2>
              <p>
                The growing interest in game comes from several changes in how
                people use mobile phones in Pakistan. Affordable Android devices,
                wider internet coverage, social sharing, and mobile wallet usage
                have made app-based platforms easier to discover.
              </p>
            </div>
            <div className="card-grid-3">
              <HighlightCard title="Android Phones Are Widely Used" icon="📱">
                <p>
                  Many Pakistani users rely on Android phones as their main
                  device for browsing, watching videos, using payment apps, and
                  playing games. An Android-focused platform can reach people who
                  do not regularly use a laptop or desktop computer.
                </p>
                <p>
                  Users can open the platform from home, while travelling, or
                  during free time, provided they have a suitable device and
                  stable connection.
                </p>
              </HighlightCard>
              <HighlightCard
                title="Several Game Categories Are Available in One Place"
                icon="♠"
              >
                <p>
                  A platform with card games, live tables, slots, and quick-play
                  titles saves users from moving between several applications.
                  Someone interested in Teen Patti may also explore Andar Bahar,
                  Dragon Tiger, roulette, slots, or crash games through the same
                  account.
                </p>
                <p>
                  This variety is one reason the app attracts search interest.
                  People often prefer having a broader selection instead of
                  downloading a different app for every category.
                </p>
              </HighlightCard>
              <HighlightCard title="Familiar Games Attract Local Players" icon="♦">
                <p>
                  Teen Patti, Andar Bahar, Dragon Tiger, and slot-style games are
                  already familiar to many players across South Asia. Users may
                  understand the basic idea of these games before opening the
                  platform, although each table or title can still have its own
                  rules.
                </p>
                <p>
                  Familiarity makes it easier for new users to browse the game
                  lobby, but it does not make outcomes predictable.
                </p>
              </HighlightCard>
              <HighlightCard title="Mobile Wallet Interest Is Growing" icon="₨">
                <p>
                  JazzCash and Easypaisa are widely recognised payment services
                  in Pakistan. Users frequently search for gaming platforms that
                  may support local wallets or bank-based options.
                </p>
                <p>
                  Payment availability should always be confirmed inside the
                  account. A payment method mentioned on another website, old
                  screenshot, or social-media post may no longer be active.
                </p>
              </HighlightCard>
              <HighlightCard title="Referral Links Increase Visibility" icon="↗">
                <p>
                  Gaming apps are often shared through WhatsApp, Facebook,
                  Telegram, YouTube, and private referral links. When many people
                  share the same app name, searches can rise quickly.
                </p>
                <p>
                  However, social popularity does not prove that every shared
                  link is genuine. Users should check the domain carefully before
                  entering account or payment information.
                </p>
              </HighlightCard>
              <HighlightCard
                title="Promotional Offers Create Search Interest"
                icon="%"
              >
                <p>
                  Welcome rewards, deposit promotions, referral rewards, daily
                  check-ins, and limited campaigns can bring attention to the
                  platform. Large bonus figures may look attractive, but users
                  should read the conditions before accepting an offer.
                </p>
                <p>
                  A headline amount may be the maximum possible reward rather
                  than the amount every account receives.
                </p>
              </HighlightCard>
            </div>
          </div>
        </section>

        <section className="section section-cream">
          <div className="container">
            <div className="section-head">
              <h2>Main Features of Ch777 App</h2>
              <p>
                The available features may change, but the following areas are
                commonly expected in the Ch777 Game app.
              </p>
            </div>
            <div className="card-grid-3">
              <HighlightCard title="Mobile Dashboard" icon="▣">
                <p>
                  The main dashboard may bring games, wallet information,
                  promotions, account settings, and service options together.
                  Clear menu icons help users move between these areas without
                  leaving the application.
                </p>
              </HighlightCard>
              <HighlightCard title="Game Categories" icon="◎">
                <p>
                  Users may be able to filter titles by category, provider,
                  popularity, or recent activity. Some versions may also include
                  favourite-game and recently played sections.
                </p>
              </HighlightCard>
              <HighlightCard title="Account Profile" icon="👤">
                <p>
                  The profile area may contain the registered mobile number,
                  nickname, password settings, payment details, verification
                  status, and account history.
                </p>
                <p>
                  Users should keep their information accurate, especially when
                  the same details are required for payment verification.
                </p>
              </HighlightCard>
              <HighlightCard title="Wallet Section" icon="💳">
                <p>
                  The wallet may show the available balance, promotional balance,
                  deposits, cash-out requests, and transaction records. Users
                  should understand the difference between deposited funds and
                  bonus funds because they may have different conditions.
                </p>
              </HighlightCard>
              <HighlightCard title="Promotional Centre" icon="🎁">
                <p>
                  The promotion area may include welcome offers, referral
                  campaigns, daily rewards, cashback, event bonuses, or
                  game-specific deals.
                </p>
                <p>
                  Every promotion should be checked separately. Conditions can
                  differ even when two offers appear on the same page.
                </p>
              </HighlightCard>
              <HighlightCard title="Customer Assistance" icon="💬">
                <p>
                  An in-app service or help section may be available for
                  account-related questions. Users should never provide a full
                  password, one-time code, or payment-app PIN to anyone claiming
                  to provide support.
                </p>
              </HighlightCard>
            </div>
          </div>
        </section>

        <section className="section section-yellow">
          <div className="container">
            <div className="section-head">
              <h2>Available Game Categories</h2>
              <p>
                The exact library can change, but these are some categories users
                may come across.
              </p>
            </div>
            <div className="card-grid-3">
              <HighlightCard title="Teen Patti" icon="🃏">
                <p>
                  Teen Patti is a three-card game that is widely recognised in
                  Pakistan and neighbouring countries. Tables may have different
                  entry amounts, limits, and formats.
                </p>
                <p>
                  Users should read the table rules before joining because the
                  betting pattern can vary.
                </p>
              </HighlightCard>
              <HighlightCard title="Andar Bahar" icon="A">
                <p>
                  Andar Bahar uses a central card and two sides. Cards are dealt
                  until a matching value appears on one side.
                </p>
                <p>
                  The format looks straightforward, but the result cannot be
                  known beforehand.
                </p>
              </HighlightCard>
              <HighlightCard title="Dragon Tiger" icon="⚔">
                <p>
                  Dragon Tiger compares two card positions. The higher card
                  normally wins, although side options may also be shown.
                </p>
                <p>
                  Users should check how ties and special results are handled
                  before placing an entry.
                </p>
              </HighlightCard>
              <HighlightCard title="Slot Games" icon="777">
                <p>
                  Slots may include classic reels, fruit themes, adventure
                  titles, free-spin rounds, bonus symbols, and jackpot-style
                  displays.
                </p>
                <p>
                  Each slot can have different paylines, symbols, and feature
                  rules. A result from one game does not indicate what will
                  happen in another.
                </p>
              </HighlightCard>
              <HighlightCard title="Live Casino Tables" icon="▶">
                <p>
                  Live sections may show tables hosted through video streaming.
                  Depending on the current library, users may find roulette,
                  baccarat, card tables, or other dealer-based games.
                </p>
                <p>
                  A stable internet connection is important because delayed video
                  or controls may affect the experience.
                </p>
              </HighlightCard>
              <HighlightCard title="Crash-Style Games" icon="↑">
                <p>
                  Crash games use a rising multiplier that can stop without
                  warning. The quick pace can lead to rushed decisions,
                  especially when several rounds are played close together.
                </p>
                <p>
                  Users should decide their spending limit before joining rather
                  than changing it after a loss.
                </p>
              </HighlightCard>
              <HighlightCard title="Fish-Shooting" icon="🎣">
                <p>
                  Fish games combine aiming controls with different targets and
                  reward values. Weapon costs, target values, and game speed may
                  vary.
                </p>
                <p>
                  These games can look casual, but wallet deductions may still
                  apply.
                </p>
              </HighlightCard>
              <HighlightCard title="Sports and Prediction Sections" icon="⚽">
                <p>
                  Some versions may include sports-related or prediction-based
                  categories. Availability depends on the current platform setup
                  and region.
                </p>
                <p>
                  Users should check the rules, settlement process, and entry
                  conditions before using these sections.
                </p>
              </HighlightCard>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container home-section-inner prose">
            <h2>How the Platform Works</h2>
            <p>
              A user normally creates an account, opens the game lobby, selects a
              title, and uses the available wallet balance to join. Promotions
              may appear separately from the cash balance.
            </p>
            <InfoBox title="Platform Information">
              <p>Before opening any paid game, check:</p>
              <ul className="checklist">
                <li>The entry or betting amount</li>
                <li>The game rules</li>
                <li>The available wallet balance</li>
                <li>Bonus restrictions</li>
                <li>Internet quality</li>
                <li>Account verification status</li>
                <li>Your personal spending limit</li>
                <li>Cash-out conditions</li>
              </ul>
            </InfoBox>
            <p>
              Do not assume that every game works in the same way. A card table,
              live game, and slot title can use completely different controls and
              result systems.
            </p>
            <p>
              The app may also show notifications for bonuses, account activity,
              or payment updates. Read each message carefully rather than
              pressing a button without understanding what it does.
            </p>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="container home-section-inner prose">
            <h2>How to Access Ch 777 Game App</h2>
            <h3>Download Ch777 Game on Android Devices</h3>
            <p>
              Android is likely to be the main option because the platform is
              commonly distributed through an APK file. Users may need to allow
              installation from the browser or file manager used to open the
              file.
            </p>
            <TipBox title="Android Access Note">
              <p>
                Detailed installation information belongs on the separate{" "}
                <Link href="/ch777-download">ch777 game download</Link> page.
                Keeping those instructions away from the homepage prevents
                overlap between the general guide and the dedicated installation
                page.
              </p>
            </TipBox>
            <h3>iPhone and iPad</h3>
            <p>
              A direct iOS application may not always be offered. Some users may
              be able to open the platform in Safari or another supported
              browser.
            </p>
            <p>
              The available method should be checked through the current platform
              page rather than relying on an old guide.
            </p>
            <h3>Laptop and Desktop</h3>
            <p>
              PC users may be able to access a browser version. An Android
              emulator is another possible option, but emulator performance
              depends on computer memory, storage, graphics support, and software
              compatibility.
            </p>
            <p>
              Browser access is usually easier for users who do not want to
              install extra software.
            </p>
          </div>
        </section>

        <section className="section section-green">
          <div className="container home-section-inner prose">
            <h2>Account Registration and Login Overview</h2>
            <p>
              New users may be asked to provide a mobile number, password,
              verification code, or referral information. Existing users normally
              return through the account-access screen.
            </p>
            <p>
              The mobile number entered during registration should be active
              because it may be used for verification, password recovery, or
              transaction confirmation.
            </p>
            <p>
              Users should create a password that is difficult to guess and not
              used on another website. Avoid passwords based only on a name,
              phone number, or date of birth.
            </p>
            <WarningBox title="Account-Security Tip">
              <p>
                The dedicated{" "}
                <Link href="/ch777-login">ch777 game login</Link> page covers
                registration, account access, forgotten passwords, OTP issues,
                mobile-number formatting, and common errors. These detailed
                instructions are kept on their own page so the homepage remains
                focused on the broader platform.
              </p>
            </WarningBox>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <CTABox
              title="Continue With the Right Guide"
              text="Use these pages for installation, account access, deposits, and cash-out overviews without repeating full step lists here."
            >
              <Link className="btn btn-download-guide" href="/ch777-download">
                <span aria-hidden="true">⬇</span> View Installation Guide
              </Link>
              <Link className="btn btn-account-guide" href="/ch777-login">
                <span aria-hidden="true">🔑</span> Open Account Guide
              </Link>
              <Link className="btn btn-deposit" href="/deposit-guide">
                <span aria-hidden="true">＋</span> Read Deposit Guide
              </Link>
              <Link className="btn btn-withdrawal" href="/withdrawal-guide">
                <span aria-hidden="true">⇄</span> Read Withdrawal Guide
              </Link>
            </CTABox>
          </div>
        </section>

        <section className="section section-cream">
          <div className="container home-section-inner prose">
            <h2>How to Earn in CH777 Game</h2>
            <p>
              Real games can result in gains or losses. There is no fixed method
              that guarantees profit, and the platform should not be considered a
              salary source, business plan, or replacement for regular work.
            </p>
            <p>
              Users who decide to participate should understand the rules before
              spending money.
            </p>
            <h3>Learn the Game Before Using a Balance</h3>
            <p>
              Open the game instructions and check how entries, results,
              multipliers, and rewards work. A title that looks familiar may
              still use different rules from another version.
            </p>
            <p>
              Starting without understanding the controls can lead to avoidable
              mistakes.
            </p>
            <h3>Begin With a Small Amount</h3>
            <p>
              Use an amount that will not affect household spending. Money needed
              for rent, food, education, bills, transport, or emergencies should
              not be added to a gaming wallet.
            </p>
            <p>
              A small starting limit also gives users time to understand the
              wallet and payment process.
            </p>
            <h3>Choose Games Carefully</h3>
            <p>
              Fast games may produce quick results, but they can also encourage
              repeated decisions without enough time to think. Slower play does
              not guarantee better results, yet it may help a user stay within a
              planned limit.
            </p>
            <h3>Check Promotions Before Accepting Them</h3>
            <p>
              A bonus may increase the displayed balance, but it may also come
              with conditions such as:
            </p>
            <ul>
              <li>A minimum deposit</li>
              <li>Turnover requirements</li>
              <li>Eligible game restrictions</li>
              <li>Expiry dates</li>
              <li>Maximum cash-out limits</li>
              <li>Identity checks</li>
              <li>One offer per device or account</li>
            </ul>
            <NoticeBox title="Bonus Conditions">
              <p>
                Do not assume that a bonus balance can be withdrawn immediately.
              </p>
            </NoticeBox>
            <h3>Set a Stop Point</h3>
            <p>
              Decide the maximum amount you are prepared to lose before starting.
              It is also useful to decide when to stop after a positive result.
            </p>
            <p>
              Trying to recover every loss by adding more money can increase the
              amount at risk.
            </p>
            <h3>Keep Payment Details Accurate</h3>
            <p>
              The name, mobile wallet number, bank information, and account
              details should match where required. Incorrect information may
              cause a payment request to remain pending or be rejected.
            </p>
            <h3>Ignore Guaranteed-Winning Claims</h3>
            <p>
              No agent, signal group, modified app, secret code, or automated
              system can promise a fixed result. Messages offering guaranteed
              daily income or special access should be treated with care.
            </p>
          </div>
        </section>

        <section className="section section-green">
          <div className="container home-section-inner prose">
            <h2>Deposit and Payment Overview</h2>
            <p>
              The wallet section may offer one or more payment channels. Possible
              examples for Pakistani users include mobile wallets or bank
              transfers, but current availability must be checked inside the
              account.
            </p>
            <InfoBox title="Payment Reminder">
              <p>Before sending money:</p>
              <ul className="checklist">
                <li>Confirm the payment details shown in the platform.</li>
                <li>Check the minimum and maximum limits.</li>
                <li>Review possible fees.</li>
                <li>Read any bonus conditions.</li>
                <li>Save the transaction reference.</li>
                <li>
                  Confirm that the wallet number or account belongs to the
                  displayed payment channel.
                </li>
                <li>Wait for confirmation before repeating the payment.</li>
              </ul>
            </InfoBox>
            <WarningBox title="Unofficial Payment Warning">
              <p>
                Do not send money to a number received through an unofficial
                message or comment. A copied payment screen can look convincing
                even when it is not connected to the correct account.
              </p>
            </WarningBox>
            <p>
              The deposit guide on this website contains the full sequence,
              common payment problems, and tips for keeping transaction records.
            </p>
          </div>
        </section>

        <section className="section section-yellow">
          <div className="container home-section-inner prose">
            <h2>Cash-Out Overview</h2>
            <p>
              A cash-out request may require the user to select a payment method,
              enter an amount, confirm account details, and wait for processing.
            </p>
            <p>Possible checks include:</p>
            <ul>
              <li>Minimum request amount</li>
              <li>Account verification</li>
              <li>Matching wallet details</li>
              <li>Bonus turnover</li>
              <li>Pending payments</li>
              <li>Daily limits</li>
              <li>Processing notices</li>
              <li>Service charges</li>
            </ul>
            <p>
              A pending request does not always mean it has failed. Delays may
              happen because of account checks, incorrect details,
              payment-channel issues, or platform maintenance.
            </p>
            <p>
              Users should keep the request reference and avoid submitting
              repeated requests unless the first one is clearly cancelled.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container home-section-inner prose">
            <h2>Is CH777 Game Online Safe?</h2>
            <p>
              No independent guide can guarantee that an online gaming platform
              is completely safe. Safety depends on the file source, website
              address, account protection, payment details, application
              permissions, and the way a user handles personal information.
            </p>
            <p>
              Before installing the app, confirm that the file comes from the
              intended source. APK files shared through unknown websites,
              social-media comments, or private messages may be changed.
            </p>
            <p>
              Check the permissions requested during installation. A gaming app
              may require network or storage access, but requests for unrelated
              access should be reviewed carefully.
            </p>
            <WarningBox title="Safety Precautions">
              <p>Users should follow these precautions:</p>
              <ul className="checklist">
                <li>Use a unique password.</li>
                <li>Never share an OTP or recovery code.</li>
                <li>Confirm the website address before entering details.</li>
                <li>Avoid public Wi-Fi during payments.</li>
                <li>Scan an APK file when possible.</li>
                <li>Keep the phone operating system updated.</li>
                <li>Review wallet records regularly.</li>
                <li>Log out from shared devices.</li>
                <li>Do not give another person remote control of the phone.</li>
                <li>Keep payment references until a transaction is complete.</li>
              </ul>
            </WarningBox>
            <p>
              Users should also review the rules that apply in their location and
              make sure they meet the platform’s age requirements.
            </p>
          </div>
        </section>

        <section className="section section-ivory">
          <div className="container">
            <div className="section-head">
              <h2>Bonuses and Rewards</h2>
              <p>The platform may display several types of promotional offers.</p>
            </div>
            <div className="card-grid-3">
              <HighlightCard title="Welcome Offers" icon="★">
                <p>
                  A new account may receive an introductory promotion after
                  registration or the first qualifying payment. The displayed
                  amount may depend on the deposit size or campaign rules.
                </p>
              </HighlightCard>
              <HighlightCard title="Daily Check-In Rewards" icon="📅">
                <p>
                  Some accounts may receive a small reward for opening the app on
                  consecutive days. Missing a day may reset the sequence.
                </p>
              </HighlightCard>
              <HighlightCard title="Referral Promotions" icon="🔗">
                <p>
                  A user may receive a reward after inviting someone through a
                  referral link. The invited account may need to complete
                  specific steps before the reward becomes available.
                </p>
              </HighlightCard>
              <HighlightCard title="Deposit Promotions" icon="+">
                <p>
                  An offer may add a percentage or fixed amount to a qualifying
                  payment. The added amount may remain restricted until the
                  required conditions are completed.
                </p>
              </HighlightCard>
              <HighlightCard title="Cashback or Event Rewards" icon="↺">
                <p>
                  Cashback and limited events may apply only to selected games,
                  dates, or account groups.
                </p>
              </HighlightCard>
            </div>
            <div className="container home-section-inner" style={{ padding: 0, marginTop: "1.25rem" }}>
              <NoticeBox title="Bonus Conditions">
                <p>
                  Read every offer before joining. A promotional headline does
                  not show all the conditions.
                </p>
              </NoticeBox>
            </div>
          </div>
        </section>

        <section className="section section-cream">
          <div className="container">
            <div className="section-head">
              <h2>Player Reviews and Common Feedback</h2>
              <p>
                User experiences can differ according to the phone, internet
                connection, application version, account status, and payment
                channel. Instead of presenting invented ratings, it is more
                useful to look at the areas users commonly discuss.
              </p>
            </div>
            <div className="banner-media">
              <Image
                src={IMAGES.reviewsBanner.src}
                alt={IMAGES.reviewsBanner.alt}
                title={IMAGES.reviewsBanner.title}
                width={IMAGES.reviewsBanner.width}
                height={IMAGES.reviewsBanner.height}
                sizes="(max-width: 1120px) 100vw, 1120px"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <h3>Common User Feedback</h3>
            <div className="card-grid-3">
              <HighlightCard title="Navigation" icon="☰">
                <p>
                  Users usually prefer clear category icons and easy access to
                  wallet history. A crowded menu can make it difficult to find
                  account settings or payment records.
                </p>
              </HighlightCard>
              <HighlightCard title="App Performance" icon="⚡">
                <p>
                  Loading speed depends on device memory, storage space, server
                  conditions, and internet quality. Closing unused background
                  apps may help on older phones.
                </p>
              </HighlightCard>
              <HighlightCard title="Account Access" icon="🔐">
                <p>
                  Incorrect mobile-number formatting, forgotten passwords, and
                  delayed verification codes are common account concerns. Keeping
                  registration details in a secure place can prevent repeated
                  errors.
                </p>
              </HighlightCard>
              <HighlightCard title="Payment Expectations" icon="⏱">
                <p>
                  Users expect clear confirmation after adding funds or
                  requesting a cash-out. Saving transaction references is
                  important because payment times may vary.
                </p>
              </HighlightCard>
              <HighlightCard title="Bonus Conditions" icon="ℹ">
                <p>
                  Some users focus only on the displayed reward and miss the
                  turnover or expiry rules. Reading the terms first can prevent
                  confusion later.
                </p>
              </HighlightCard>
            </div>
            <p className="review-note">
              This feedback section describes common topics rather than claiming
              that every user has the same experience.
            </p>
          </div>
        </section>

        <section className="section section-green">
          <div className="container">
            <div className="section-head">
              <h2>Benefits and Limitations</h2>
            </div>
            <div className="card-grid-3">
              <HighlightCard title="Possible Benefits" icon="+">
                <p>The Ch777 Game app provide:</p>
                <ul>
                  <li>Mobile access through one account</li>
                  <li>Several gaming categories</li>
                  <li>Wallet and transaction records</li>
                  <li>Promotional sections</li>
                  <li>Profile and account tools</li>
                  <li>Browser access where available</li>
                  <li>Local payment options when supported</li>
                </ul>
              </HighlightCard>
              <HighlightCard title="Possible Limitations" icon="–">
                <p>Users may also face:</p>
                <ul>
                  <li>Manual APK installation</li>
                  <li>Compatibility problems on older devices</li>
                  <li>Storage requirements</li>
                  <li>Changing game availability</li>
                  <li>Bonus restrictions</li>
                  <li>Payment delays</li>
                  <li>Account verification requirements</li>
                  <li>Financial losses</li>
                </ul>
              </HighlightCard>
              <HighlightCard title="Guide Website Limits" icon="ⓘ">
                <p>
                  Third-party guide websites cannot manage platform accounts or
                  payment decisions. This website can explain common steps, but
                  it cannot approve a transaction, reset an account, or change
                  platform rules.
                </p>
              </HighlightCard>
            </div>
          </div>
        </section>

        <section className="section section-yellow">
          <div className="container">
            <div className="section-head">
              <h2>Tips for New Users</h2>
              <p>Use these points before creating or funding an account:</p>
            </div>
            <div className="card-grid-3">
              {[
                "Confirm the website address.",
                "Read the game rules before joining.",
                "Set a fixed budget.",
                "Start with a small amount.",
                "Keep account details private.",
                "Check the payment information twice.",
                "Save every transaction reference.",
                "Read promotion conditions.",
                "Do not chase losses.",
                "Stop using the platform when spending is no longer controlled.",
                "Avoid borrowed money.",
                "Do not believe guaranteed-income messages.",
              ].map((tip) => (
                <HighlightCard key={tip} title="New User Tip" icon="✓">
                  <p>{tip}</p>
                </HighlightCard>
              ))}
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <TipBox title="Responsible Gaming Note">
                <p>
                  Set clear spending and time limits. Treat gaming as
                  entertainment, not as a source of guaranteed income.
                </p>
              </TipBox>
            </div>
          </div>
        </section>

        <Faq
          title="Frequently Asked Questions"
          intro="Answers taken from the approved homepage guide."
          items={faqs}
        />

        <section className="section section-ivory">
          <div className="container home-section-inner prose">
            <h2>Final Thoughts</h2>
            <p>
              CH777 App brings several mobile gaming categories, wallet features
              and promotional sections into one platform. Its growing visibility
              in Pakistan is linked to Android usage, familiar games, social
              sharing, and interest in local payment channels.
            </p>
            <p>
              Before using real money, users should understand the game rules,
              payment limits, bonus conditions, and account requirements. They
              should also confirm every website address and avoid files shared
              through unknown sources.
            </p>
            <p>
              Detailed installation and account-access instructions are available
              through the internal guides linked above. Keeping those topics on
              separate pages helps visitors find the right information without
              repeating the same content across the website.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
