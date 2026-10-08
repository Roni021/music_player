import Link from "next/link";
import { Disc3 } from "lucide-react";
import { albumArtwork } from "@/lib/artwork";
import type { Album } from "@/types/music";

export function AlbumCard({ album, trackCount, delay = 0 }: { album: Album; trackCount: number; delay?: number }) {
  return (
    <Link href={`/album/${album.id}`} className="music-card" aria-label={`Open the album ${album.title}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="cover-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={albumArtwork(album)} alt={`Cover art for ${album.title}`} loading="lazy" />
        <span className="cover-play" aria-hidden="true">
          <Disc3 size={16} />
        </span>
      </div>
      <b>{album.title}</b>
      <span>
        {album.artist} · {trackCount} track{trackCount === 1 ? "" : "s"}
      </span>
    </Link>
  );
}
