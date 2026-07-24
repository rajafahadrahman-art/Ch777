import Link from "next/link";
import { EXTERNAL_DOWNLOAD_URL } from "@/lib/constants";

type CtaBandProps = {
  title: string;
  text: string;
  showExternalDownload?: boolean;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBand({
  title,
  text,
  showExternalDownload = true,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band animate-in">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn-group" style={{ marginTop: "1.25rem" }}>
            {showExternalDownload ? (
              <a
                className="btn btn-gold"
                href={EXTERNAL_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link className="btn btn-outline" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
