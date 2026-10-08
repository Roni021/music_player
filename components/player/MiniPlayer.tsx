"use client";

import {
  ChevronUp,
  Heart,
  ListMusic,
  Loader2,
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
import { songArtwork } from "@/lib/artwork";
import { formatTime } from "@/lib/format";

/** Persistent transport bar. On small screens the artwork area expands the full player. */
export function MiniPlayer() {
  const player = useMusicPlayer();
  const song = player.currentSong;
  if (!song) return null;

  const total = player.duration || song.duration;
  const liked = player.isLiked(song.id);

  return (
    <div className="player" role="region" aria-label="Player">
      <div className="now">
        <button
          type="button"
          className="now-art"
          aria-label="Open the full player"
          onClick={() => player.setExpanded(true)}
          style={{ background: "none", padding: 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={songArtwork(song)} alt="" />
        </button>
        <button
          type="button"
          className="now-info"
          aria-label={`Open the full player for ${song.title}`}
          onClick={() => player.setExpanded(true)}
          style={{ textAlign: "left" }}
        >
          <b>{song.title}</b>
          <span>{song.artist}</span>
        </button>
        <button
          type="button"
          className="ghost-btn"
          data-tip="Like"
          aria-pressed={liked}
          aria-label={`${liked ? "Unlike" : "Like"} ${song.title}`}
          onClick={() => player.toggleLike(song.id)}
        >
          <Heart size={17} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="player-center">
        <div className="controls">
          <button
            type="button"
            className="control optional"
            style={{ position: "relative" }}
            data-tip="Shuffle"
            aria-label="Shuffle"
            aria-pressed={player.shuffle}
            onClick={player.toggleShuffle}
          >
            <Shuffle size={17} />
          </button>
          <button type="button" className="control" aria-label="Previous track" onClick={player.previous}>
            <SkipBack size={18} />
          </button>
          <button
            type="button"
            className="control play"
            aria-label={player.isPlaying ? "Pause" : "Play"}
            onClick={player.togglePlay}
          >
            {player.isLoading ? <Loader2 size={18} className="spin" /> : player.isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button type="button" className="control" aria-label="Next track" onClick={player.next}>
            <SkipForward size={18} />
          </button>
          <button
            type="button"
            className="control optional"
            style={{ position: "relative" }}
            data-tip="Repeat"
            aria-label={`Repeat: ${player.repeat}`}
            aria-pressed={player.repeat !== "off"}
            onClick={player.cycleRepeat}
          >
            {player.repeat === "one" ? <Repeat1 size={17} /> : <Repeat size={17} />}
          </button>
        </div>

        <div className="timeline">
          <span className="time">{formatTime(player.currentTime)}</span>
          <Slider value={player.currentTime} max={total} label="Seek" onChange={player.seek} />
          <span className="time">{formatTime(total)}</span>
        </div>
      </div>

      <div className="player-right">
        <AudioVisualizer />
        <button
          type="button"
          className="control"
          style={{ position: "relative" }}
          data-tip="Queue"
          aria-label="Open queue"
          aria-expanded={player.isQueueOpen}
          onClick={player.toggleQueuePanel}
        >
          <ListMusic size={17} />
        </button>
        <button
          type="button"
          className="control"
          data-tip={player.muted ? "Unmute" : "Mute"}
          aria-label={player.muted ? "Unmute" : "Mute"}
          onClick={player.toggleMute}
        >
          {player.muted || player.volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
        <Slider
          className="volume"
          value={player.muted ? 0 : player.volume}
          max={1}
          step={0.01}
          label="Volume"
          onChange={player.setVolume}
        />
        <button type="button" className="control" data-tip="Full player" aria-label="Open the full player" onClick={() => player.setExpanded(true)}>
          <ChevronUp size={18} />
        </button>
      </div>
    </div>
  );
}
