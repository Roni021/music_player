"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ListPlus, Play, Shuffle } from "lucide-react";
import { SongRow } from "@/components/music/SongRow";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { getAlbumById, getAlbumSongs } from "@/data/music";
import { albumArtwork, gradient } from "@/lib/artwork";
import { formatTotal } from "@/lib/format";

export default function AlbumPage() {
  const { id } = useParams<{ id: string }>();
  const player = useMusicPlayer();
  const album = getAlbumById(id);

  if (!album) notFound();

  const tracks = getAlbumSongs(album.id);
  const runtime = tracks.reduce((total, song) => total + song.duration, 0);

  return (
    <>
      <section className="collection-head" style={{ ["--collection-grad" as string]: gradient(album) }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={albumArtwork(album)} alt={`Cover art for ${album.title}`} />
        <div>
          <p className="tiny" style={{ color: "rgba(255,255,255,.75)" }}>
            Album
          </p>
          <h1>{album.title}</h1>
          <p>{album.description}</p>
          <div className="collection-meta">
            <Link href={`/artist/${album.artistId}`}>{album.artist}</Link>
            <span className="dot" />
            <span>{album.year}</span>
            <span className="dot" />
            <span>
              {tracks.length} track{tracks.length === 1 ? "" : "s"}
            </span>
            <span className="dot" />
            <span>{formatTotal(runtime)}</span>
          </div>
          <div className="collection-actions">
            <button type="button" className="btn" onClick={() => player.playCollection(tracks, { label: album.title })}>
              <Play size={16} />
              Play album
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => player.playCollection(tracks, { shuffled: true, label: album.title })}
            >
              <Shuffle size={16} />
              Shuffle
            </button>
            <button type="button" className="btn ghost" onClick={() => tracks.forEach((song) => player.addToQueue(song))}>
              <ListPlus size={16} />
              Queue album
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
              <h3>This album is empty</h3>
              <p>No tracks have been published for it yet.</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
