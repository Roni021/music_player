"use client";

import Link from "next/link";
import { Heart, ListPlus, Volume2, X } from "lucide-react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { songArtwork } from "@/lib/artwork";
import { formatTime } from "@/lib/format";
import type { Song } from "@/types/music";

interface Props {
  song: Song;
  position: number;
  context?: Song[];
  /** Hides the album, genre and duration columns (queue and dialog lists). */
  compact?: boolean;
  onRemove?: () => void;
  removeLabel?: string;
}

export function SongRow({ song, position, context, compact = false, onRemove, removeLabel = "Remove" }: Props) {
  const { playSong, currentSong, isPlaying, isLiked, toggleLike, addToQueue } = useMusicPlayer();
  const isCurrent = currentSong?.id === song.id;
  const liked = isLiked(song.id);

  return (
    <div
      className={`track${isCurrent ? " current" : ""}${compact ? " compact" : ""}${onRemove && !compact ? " with-remove" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={`Play ${song.title} by ${song.artist}`}
      onClick={() => playSong(song, context)}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        playSong(song, context);
      }}
    >
      <span className="num" aria-hidden="true">
        {isCurrent && isPlaying ? <Volume2 size={14} /> : position}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={songArtwork(song)} alt="" loading="lazy" />
      <div className="track-main">
        <b>{song.title}</b>
        <span>{song.artist}</span>
      </div>

      {!compact && (
        <>
          <span className="col col-album">
            <Link href={`/album/${song.albumId}`} onClick={(event) => event.stopPropagation()}>
              {song.album}
            </Link>
          </span>
          <span className="col col-genre">
            <span className="badge">{song.genre}</span>
          </span>
        </>
      )}

      <button
        type="button"
        className="ghost-btn"
        aria-pressed={liked}
        aria-label={`${liked ? "Unlike" : "Like"} ${song.title}`}
        onClick={(event) => {
          event.stopPropagation();
          toggleLike(song.id);
        }}
      >
        <Heart size={17} fill={liked ? "currentColor" : "none"} />
      </button>

      {!compact && <span className="dur">{formatTime(song.duration)}</span>}

      {onRemove ? (
        <button
          type="button"
          className="ghost-btn"
          aria-label={`${removeLabel} ${song.title}`}
          onClick={(event) => {
            event.stopPropagation();
            onRemove();
          }}
        >
          <X size={16} />
        </button>
      ) : compact ? (
        <button
          type="button"
          className="ghost-btn"
          aria-label={`Add ${song.title} to the queue`}
          onClick={(event) => {
            event.stopPropagation();
            addToQueue(song);
          }}
        >
          <ListPlus size={16} />
        </button>
      ) : null}
    </div>
  );
}
