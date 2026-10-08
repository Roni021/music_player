"use client";

import { Pause, Play } from "lucide-react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { songArtwork } from "@/lib/artwork";
import type { Song } from "@/types/music";

interface Props {
  song: Song;
  /** The list this card belongs to, so playing it builds a sensible queue. */
  context?: Song[];
  delay?: number;
}

/** Square song tile. The whole card is the play target; the badge is the affordance. */
export function MusicCard({ song, context, delay = 0 }: Props) {
  const { playSong, currentSong, isPlaying, togglePlay } = useMusicPlayer();
  const isCurrent = currentSong?.id === song.id;

  const activate = () => {
    if (isCurrent) togglePlay();
    else playSong(song, context);
  };

  return (
    <article
      className={`music-card${isCurrent && isPlaying ? " playing" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={`${isCurrent && isPlaying ? "Pause" : "Play"} ${song.title} by ${song.artist}`}
      style={{ animationDelay: `${Math.min(delay, 360)}ms` }}
      onClick={activate}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        activate();
      }}
    >
      <div className="cover-wrap">
        {/* Artwork is generated SVG, so a plain img avoids a needless optimiser round-trip. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={songArtwork(song)} alt={`Cover art for ${song.title}`} loading="lazy" />
        <span className="cover-play" aria-hidden="true">
          {isCurrent && isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </span>
      </div>
      <b>{song.title}</b>
      <span>{song.artist}</span>
    </article>
  );
}
