import Link from "next/link";
import { artistArtwork } from "@/lib/artwork";
import type { Artist } from "@/types/music";

export function ArtistCard({ artist, delay = 0 }: { artist: Artist; delay?: number }) {
  return (
    <Link href={`/artist/${artist.id}`} className="music-card artist-card" aria-label={`Open ${artist.name}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="cover-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={artistArtwork(artist)} alt={`Portrait for ${artist.name}`} loading="lazy" />
      </div>
      <b>{artist.name}</b>
      <span>{artist.genres.join(" · ")}</span>
    </Link>
  );
}
