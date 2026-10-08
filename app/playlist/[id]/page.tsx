"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ListPlus, Play, Shuffle } from "lucide-react";
import { PlaylistCard } from "@/components/music/PlaylistCard";
import { SongRow } from "@/components/music/SongRow";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { getPlaylistById, getSongs, playlists } from "@/data/music";
import { gradient, playlistArtwork } from "@/lib/artwork";
import { formatTotal } from "@/lib/format";

export default function PlaylistPage() {
  const { id } = useParams<{ id: string }>();
  const player = useMusicPlayer();
  const playlist = getPlaylistById(id);

  if (!playlist) notFound();

  const tracks = getSongs(playlist.songIds);
  const runtime = tracks.reduce((total, song) => total + song.duration, 0);
  const others = playlists.filter((item) => item.id !== playlist.id);

  return (
    <>
      <section className="collection-head" style={{ ["--collection-grad" as string]: gradient(playlist) }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={playlistArtwork(playlist)} alt={`Cover art for ${playlist.name}`} />
        <div>
          <p className="tiny" style={{ color: "rgba(255,255,255,.75)" }}>
            Playlist
          </p>
          <h1>{playlist.name}</h1>
          <p>{playlist.description}</p>
          <div className="collection-meta">
            <span>
              {tracks.length} track{tracks.length === 1 ? "" : "s"}
            </span>
            <span className="dot" />
            <span>{formatTotal(runtime)}</span>
            <span className="dot" />
            <span>Curated by Midnight Melodies</span>
          </div>
          <div className="collection-actions">
            <button type="button" className="btn" onClick={() => player.playCollection(tracks, { label: playlist.name })}>
              <Play size={16} />
              Play all
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => player.playCollection(tracks, { shuffled: true, label: playlist.name })}
            >
              <Shuffle size={16} />
              Shuffle
            </button>
            <button type="button" className="btn ghost" onClick={() => tracks.forEach((song) => player.addToQueue(song))}>
              <ListPlus size={16} />
              Add to queue
            </button>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        {tracks.length ? (
          <div className="track-list">
            <div className="track-head">
              <span>#</span>
              <span />
              <span>Title</span>
              <span className="col-album">Album</span>
              <span className="col-genre">Genre</span>
              <span />
              <span className="dur">Time</span>
            </div>
            {tracks.map((song, index) => (
              <SongRow key={song.id} song={song} position={index + 1} context={tracks} />
            ))}
          </div>
        ) : (
          <div className="track-list">
            <div className="empty">
              <h3>This playlist is empty</h3>
              <p>
                Add tracks to it in <code>data/music.ts</code>, or{" "}
                <Link href="/library" style={{ color: "var(--accent)" }}>
                  browse the library
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>More playlists</h2>
          </div>
        </div>
        <div className="playlist-grid">
          {others.map((item, index) => (
            <PlaylistCard key={item.id} playlist={item} delay={index * 60} />
          ))}
        </div>
      </section>
    </>
  );
}
