"use client";

import { notFound, useParams } from "next/navigation";
import { Play, Shuffle } from "lucide-react";
import { AlbumCard } from "@/components/music/AlbumCard";
import { ArtistCard } from "@/components/music/ArtistCard";
import { SongRow } from "@/components/music/SongRow";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { getAlbumSongs, getArtistAlbums, getArtistById, getArtistSongs, getRelatedArtists } from "@/data/music";
import { artistArtwork, gradient } from "@/lib/artwork";

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();
  const player = useMusicPlayer();
  const artist = getArtistById(id);

  if (!artist) notFound();

  const tracks = getArtistSongs(artist.id);
  const artistAlbums = getArtistAlbums(artist.id);
  const related = getRelatedArtists(artist.id);

  return (
    <>
      <section className="collection-head" style={{ ["--collection-grad" as string]: gradient(artist) }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="round" src={artistArtwork(artist)} alt={`Portrait for ${artist.name}`} />
        <div>
          <p className="tiny" style={{ color: "rgba(255,255,255,.75)" }}>
            Artist
          </p>
          <h1>{artist.name}</h1>
          <p>{artist.bio}</p>
          <div className="collection-meta">
            <span>{artist.genres.join(" · ")}</span>
            <span className="dot" />
            <span>
              {tracks.length} track{tracks.length === 1 ? "" : "s"}
            </span>
            <span className="dot" />
            <span>
              {artistAlbums.length} album{artistAlbums.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="collection-actions">
            <button type="button" className="btn" onClick={() => player.playCollection(tracks, { label: artist.name })}>
              <Play size={16} />
              Play
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => player.playCollection(tracks, { shuffled: true, label: artist.name })}
            >
              <Shuffle size={16} />
              Shuffle
            </button>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Popular songs</h2>
          </div>
        </div>
        {tracks.length ? (
          <div className="track-list">
            {tracks.map((song, index) => (
              <SongRow key={song.id} song={song} position={index + 1} context={tracks} />
            ))}
          </div>
        ) : (
          <div className="track-list">
            <div className="empty">
              <h3>No songs yet</h3>
              <p>This artist has not released anything in the catalogue.</p>
            </div>
          </div>
        )}
      </section>

      {artistAlbums.length > 0 && (
        <section className="section" data-reveal>
          <div className="section-head">
            <div>
              <h2>Albums</h2>
            </div>
          </div>
          <div className="grid">
            {artistAlbums.map((album, index) => (
              <AlbumCard key={album.id} album={album} trackCount={getAlbumSongs(album.id).length} delay={index * 45} />
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section" data-reveal>
          <div className="section-head">
            <div>
              <h2>Related artists</h2>
              <p className="muted">Sharing a genre with {artist.name}</p>
            </div>
          </div>
          <div className="grid">
            {related.map((item, index) => (
              <ArtistCard key={item.id} artist={item} delay={index * 45} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
