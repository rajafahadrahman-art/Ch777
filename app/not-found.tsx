import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose" style={{ textAlign: "center" }}>
        <h1>Page Not Found</h1>
        <p>
          The page you requested is unavailable. Return home or open one of the
          main guides.
        </p>
        <div className="btn-group" style={{ justifyContent: "center" }}>
          <Link className="btn btn-primary" href="/">
            Go Home
          </Link>
          <Link className="btn btn-outline" href="/ch777-download">
            Download Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
