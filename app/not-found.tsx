import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head" style={{ paddingTop: 40 }}>
      <p className="error-code">404</p>
      <h1>We could not find that page</h1>
      <p>The link may be out of date, or the track, album or artist may have been removed from the catalogue.</p>
      <Link className="btn" href="/" style={{ marginTop: 20 }}>
        Back to Midnight Melodies
      </Link>
    </section>
  );
}
