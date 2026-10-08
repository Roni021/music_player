/** Skeleton shown while a route segment streams in. */
export default function Loading() {
  return (
    <section aria-busy="true" aria-label="Loading Midnight Melodies">
      <div className="skeleton" style={{ height: 320, borderRadius: "var(--r-xl)", marginTop: 12 }} />
      <div className="section">
        <div className="skeleton" style={{ height: 26, width: 220, marginBottom: 18 }} />
        <div className="grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="skeleton-card" key={index}>
              <div className="skeleton sk-art" />
              <div className="skeleton sk-line" />
              <div className="skeleton sk-line short" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
