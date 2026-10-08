"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Heart,
  ListMusic,
  Pause,
  Play,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX
} from "lucide-react";
import { AudioVisualizer } from "@/components/player/AudioVisualizer";
import { Slider } from "@/components/ui/Slider";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { gradient, songArtwork } from "@/lib/artwork";
import { formatTime } from "@/lib/format";

/** Immersive expanded player. Opens over the app and returns focus on close. */
export function NowPlaying() {
  const player = useMusicPlayer();
  const [closing, setClosing] = useState(false);
  const song = player.currentSong;

  useEffect(() => {
    if (player.isExpanded) setClosing(false);
  }, [player.isExpanded]);

  if (!player.isExpanded || !song) return null;

  const close = () => {
    setClosing(true);
    window.setTimeout(() => player.setExpanded(false), 280);
  };

  const liked = player.isLiked(song.id);

  return (
    <section
      className={`now-playing${closing ? " closing" : ""}`}
      aria-label={`Now playing ${song.title}`}
      style={{ ["--np-grad" as string]: gradient(song) }}
    >
      <div className="np-top">
        <button type="button" className="icon-button" aria-label="Close the full player" onClick={close}>
          <ChevronDown size={20} />
        </button>
        <span>PLAYING FROM YOUR QUEUE</span>
        <button type="button" className="icon-button" aria-label="Open queue" onClick={player.toggleQueuePanel}>
          <ListMusic size={18} />
        </button>
      </div>

      <div className="np-stage">
        <div className="np-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={songArtwork(song)} alt={`Cover art for ${song.title}`} />
        </div>

        <div className="np-panel">
          <div>
            <h1>{song.title}</h1>
            <div className="np-sub">
              <Link href={`/artist/${song.artistId}`} onClick={close}>
                {song.artist}
              </Link>
              <span className="dot" />
              <Link href={`/album/${song.albumId}`} onClick={close}>
                {song.album}
              </Link>
              <span className="dot" />
              <span>{song.year}</span>
            </div>
          </div>

          <div className="timeline">
            <span className="time">{formatTime(player.currentTime)}</span>
            <Slider value={player.currentTime} max={player.duration || song.duration} label="Seek" onChange={player.seek} />
            <span className="time">{formatTime(player.duration || song.duration)}</span>
          </div>

          <div className="np-controls">
            <button
              type="button"
              className="control"
              style={{ position: "relative" }}
              aria-label="Shuffle"
              aria-pressed={player.shuffle}
              onClick={player.toggleShuffle}
            >
              <Shuffle size={18} />
            </button>
            <button type="button" className="control" aria-label="Previous track" onClick={player.previous}>
              <SkipBack size={20} />
            </button>
            <button
              type="button"
              className="control play"
              aria-label={player.isPlaying ? "Pause" : "Play"}
              onClick={player.togglePlay}
            >
              {player.isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button type="button" className="control" aria-label="Next track" onClick={player.next}>
              <SkipForward size={20} />
            </button>
            <button
              type="button"
              className="control"
              style={{ position: "relative" }}
              aria-label={`Repeat: ${player.repeat}`}
              aria-pressed={player.repeat !== "off"}
              onClick={player.cycleRepeat}
            >
              {player.repeat === "one" ? <Repeat1 size={18} /> : <Repeat size={18} />}
            </button>
          </div>

          <div className="np-extra">
            <button
              type="button"
              className="ghost-btn"
              aria-pressed={liked}
              aria-label={`${liked ? "Unlike" : "Like"} ${song.title}`}
              onClick={() => player.toggleLike(song.id)}
            >
              <Heart size={19} fill={liked ? "currentColor" : "none"} />
            </button>
            <div className="np-volume">
              <button
                type="button"
                className="ghost-btn"
                aria-label={player.muted ? "Unmute" : "Mute"}
                onClick={player.toggleMute}
              >
                {player.muted || player.volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <Slider value={player.muted ? 0 : player.volume} max={1} step={0.01} label="Volume" onChange={player.setVolume} />
            </div>
            <AudioVisualizer width={160} height={44} bars={20} />
          </div>
        </div>
      </div>

      <div className="tiny muted" style={{ textAlign: "center" }}>
        Space play · ← → seek · N next · P previous · M mute · L like · Esc close
      </div>
    </section>
  );
}
