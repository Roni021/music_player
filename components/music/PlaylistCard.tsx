import Link from "next/link";
import { gradient } from "@/lib/artwork";
import type { Playlist } from "@/types/music";

export function PlaylistCard({ playlist, delay = 0 }: { playlist: Playlist; delay?: number }) {
  return (
    <Link
      href={`/playlist/${playlist.id}`}
      className="playlist"
      aria-label={`Open the playlist ${playlist.name}`}
      style={{ ["--pl-grad" as string]: gradient(playlist), animationDelay: `${delay}ms` }}
    >
      <b>{playlist.name}</b>
      <span>
        {playlist.description} · {playlist.songIds.length} tracks
      </span>
    </Link>
  );
}
