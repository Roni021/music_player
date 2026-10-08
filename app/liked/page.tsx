"use client";

import Link from "next/link";
import { ListPlus, Play, Shuffle } from "lucide-react";
import { SongRow } from "@/components/music/SongRow";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { getSongs } from "@/data/music";
import { formatTotal } from "@/lib/format";

export default function LikedPage() {
  const player = useMusicPlayer();
  const liked = getSongs(player.likedIds);
  const runtime = liked.reduce((total, song) => total + song.duration, 0);

  return (
    <>
      <div className="page-head">
        <h1>Liked songs</h1>
        <p>Saved in this browser, ready whenever you come back.</p>
      </div>

      {liked.length === 0 ? (
        <section className="section">
          <div className="track-list">
            <div className="empty">
              <h3>No liked songs yet</h3>
              <p>Tap the heart on any track and it will be waiting here.</p>
              <Link className="btn subtle" href="/library" style={{ marginTop: 16 }}>
                Browse the library
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="section">
            <div className="section-head">
              <div>
                <p className="muted">
                  {liked.length} track{liked.length === 1 ? "" : "s"} · {formatTotal(runtime)}
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button type="button" className="btn" onClick={() => player.playCollection(liked, { label: "your liked songs" })}>
                  <Play size={16} />
                  Play all
                </button>
                <button
                  type="button"
                  className="btn subtle"
                  onClick={() => player.playCollection(liked, { shuffled: true, label: "your liked songs" })}
                >
                  <Shuffle size={16} />
                  Shuffle
                </button>
                <button
                  type="button"
                  className="btn subtle"
                  onClick={() => {
                    liked.forEach((song) => player.addToQueue(song));
                  }}
                >
                  <ListPlus size={16} />
                  Add all to queue
                </button>
              </div>
            </div>
          </section>

          <section className="section" data-reveal>
            <div className="track-list">
              <div className="track-head with-remove">
                <span>#</span>
                <span />
                <span>Title</span>
                <span className="col-album">Album</span>
                <span className="col-genre">Genre</span>
                <span />
                <span className="dur">Time</span>
                <span />
              </div>
              {liked.map((song, index) => (
                <SongRow
                  key={song.id}
                  song={song}
                  position={index + 1}
                  context={liked}
                  removeLabel="Remove from liked"
                  onRemove={() => player.toggleLike(song.id)}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
