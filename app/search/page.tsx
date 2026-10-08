"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon, X } from "lucide-react";
import { AlbumCard } from "@/components/music/AlbumCard";
import { ArtistCard } from "@/components/music/ArtistCard";
import { PlaylistCard } from "@/components/music/PlaylistCard";
import { SongRow } from "@/components/music/SongRow";
import { genres, getAlbumSongs, searchCatalogue, songs } from "@/data/music";

function SearchView() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [genre, setGenre] = useState("All");

  const results = useMemo(() => {
    const found = query.trim() ? searchCatalogue(query) : { songs, albums: [], artists: [], playlists: [] };
    return {
      ...found,
      songs: found.songs.filter((song) => genre === "All" || song.genre === genre)
    };
  }, [query, genre]);

  const total = results.songs.length + results.albums.length + results.artists.length + results.playlists.length;

  return (
    <>
      <div className="page-head">
        <h1>Search</h1>
        <p>Look for a song, an artist, an album, a playlist or a mood. Results update as you type.</p>
      </div>

      <div className="searchbox section" style={{ maxWidth: "none" }}>
        <SearchIcon size={17} aria-hidden="true" />
        <input
          type="search"
          value={query}
          autoFocus
          aria-label="Search the catalogue"
          placeholder="What do you want to play?"
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button
            type="button"
            className="ghost-btn"
            aria-label="Clear search"
            style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)" }}
            onClick={() => setQuery("")}
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="section" style={{ marginTop: 18 }}>
        <div className="chips" role="group" aria-label="Filter songs by genre">
          {genres.map((name) => (
            <button key={name} type="button" className="chip" aria-pressed={genre === name} onClick={() => setGenre(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>

      {total === 0 ? (
        <div className="section">
          <div className="track-list">
            <div className="empty">
              <h3>Nothing matches “{query}”</h3>
              <p>Check the spelling, or try an artist, album or genre instead.</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {results.songs.length > 0 && (
            <section className="section" data-reveal>
              <div className="section-head">
                <div>
                  <h2>Songs</h2>
                  <p className="muted">{results.songs.length} found</p>
                </div>
              </div>
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
                {results.songs.map((song, index) => (
                  <SongRow key={song.id} song={song} position={index + 1} context={results.songs} />
                ))}
              </div>
            </section>
          )}

          {results.albums.length > 0 && (
            <section className="section" data-reveal>
              <div className="section-head">
                <div>
                  <h2>Albums</h2>
                </div>
              </div>
              <div className="grid">
                {results.albums.map((album, index) => (
                  <AlbumCard key={album.id} album={album} trackCount={getAlbumSongs(album.id).length} delay={index * 45} />
                ))}
              </div>
            </section>
          )}

          {results.artists.length > 0 && (
            <section className="section" data-reveal>
              <div className="section-head">
                <div>
                  <h2>Artists</h2>
                </div>
              </div>
              <div className="grid">
                {results.artists.map((artist, index) => (
                  <ArtistCard key={artist.id} artist={artist} delay={index * 45} />
                ))}
              </div>
            </section>
          )}

          {results.playlists.length > 0 && (
            <section className="section" data-reveal>
              <div className="section-head">
                <div>
                  <h2>Playlists</h2>
                </div>
              </div>
              <div className="playlist-grid">
                {results.playlists.map((playlist, index) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} delay={index * 60} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="skeleton" style={{ height: 260, marginTop: 24 }} />}>
      <SearchView />
    </Suspense>
  );
}
