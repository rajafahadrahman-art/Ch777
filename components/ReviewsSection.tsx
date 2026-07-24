import Image from "next/image";
import { IMAGES } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Ayesha K.",
    city: "Lahore",
    text: "The download and setup notes were easy to follow. I liked that the steps were short and clear for Android users.",
  },
  {
    name: "Hamza R.",
    city: "Karachi",
    text: "Helpful login walkthrough. The tips about saving details carefully and checking connection issues saved me time.",
  },
  {
    name: "Sana M.",
    city: "Islamabad",
    text: "Deposit and withdrawal pages explained the flow without clutter. Useful if you want a simple overview before you start.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Community Feedback</p>
          <h2>What Users Share About Their Experience</h2>
          <p>
            These notes reflect common feedback themes from readers who use our
            guides. They are presented as general testimonials for context, not
            as verified product ratings.
          </p>
        </div>

        <div className="banner-media animate-in">
          <Image
            src={IMAGES.reviewsBanner.src}
            alt={IMAGES.reviewsBanner.alt}
            title={IMAGES.reviewsBanner.title}
            width={IMAGES.reviewsBanner.width}
            height={IMAGES.reviewsBanner.height}
            sizes="(max-width: 1120px) 100vw, 1120px"
          />
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="meta">
                <strong>{review.name}</strong>
                <span>{review.city}</span>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
        <p className="review-note">
          Note: Individual experiences can vary. Always follow official in-app
          prompts and local regulations when using any gaming platform.
        </p>
      </div>
    </section>
  );
}
