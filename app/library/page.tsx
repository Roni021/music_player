"use client";

import { Play, Shuffle } from "lucide-react";
import { AlbumCard } from "@/components/music/AlbumCard";
import { ArtistCard } from "@/components/music/ArtistCard";
import { MusicCard } from "@/components/music/MusicCard";
import { PlaylistCard } from "@/components/music/PlaylistCard";
import { SongRow } from "@/components/music/SongRow";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { albums, artists, getAlbumSongs, getSongs, playlists, songs } from "@/data/music";
import { formatTotal } from "@/lib/format";

export default function LibraryPage() {
  const player = useMusicPlayer();
  const recent = getSongs(player.recentIds);
  const liked = getSongs(player.likedIds);

  const stats = [
    { label: "Tracks", value: songs.length },
    { label: "Albums", value: albums.length },
    { label: "Artists", value: artists.length },
    { label: "Liked", value: liked.length },
    { label: "Runtime", value: formatTotal(songs.reduce((total, song) => total + song.duration, 0)) }
  ];

  return (
    <>
      <div className="page-head">
        <h1>Your library</h1>
        <p>Everything in the Midnight Melodies catalogue, plus what this browser has saved.</p>
      </div>

      <section className="section">
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-reveal id="recent">
        <div className="section-head">
          <div>
            <h2>Recently played</h2>
            <p className="muted">The last twelve tracks from this browser</p>
          </div>
          {recent.length > 0 && (
            <button type="button" className="link-btn" onClick={player.clearHistory}>
              Clear history
            </button>
          )}
        </div>
        {recent.length ? (
          <div className="grid">
            {recent.slice(0, 6).map((song, index) => (
              <MusicCard key={song.id} song={song} context={recent} delay={index * 45} />
            ))}
          </div>
        ) : (
          <div className="track-list">
            <div className="empty">
              <h3>No history yet</h3>
              <p>Play something and it will appear here.</p>
            </div>
          </div>
        )}
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Saved songs</h2>
            <p className="muted">{liked.length} liked</p>
          </div>
          {liked.length > 0 && (
            <button type="button" className="link-btn" onClick={() => player.playCollection(liked, { label: "your liked songs" })}>
              Play all
            </button>
          )}
        </div>
        {liked.length ? (
          <div className="track-list">
            {liked.map((song, index) => (
              <SongRow key={song.id} song={song} position={index + 1} context={liked} />
            ))}
          </div>
        ) : (
          <div className="track-list">
            <div className="empty">
              <h3>Nothing saved yet</h3>
              <p>Tap the heart on any track to keep it in your library.</p>
            </div>
          </div>
        )}
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Albums</h2>
          </div>
        </div>
        <div className="grid">
          {albums.map((album, index) => (
            <AlbumCard key={album.id} album={album} trackCount={getAlbumSongs(album.id).length} delay={index * 45} />
          ))}
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Artists</h2>
          </div>
        </div>
        <div className="grid">
          {artists.map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} delay={index * 45} />
          ))}
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Playlists</h2>
          </div>
        </div>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={playlist.id} playlist={playlist} delay={index * 60} />
          ))}
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>All tracks</h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="btn subtle" onClick={() => player.playCollection(songs, { label: "the library" })}>
              <Play size={16} />
              Play all
            </button>
            <button
              type="button"
              className="btn subtle"
              onClick={() => player.playCollection(songs, { shuffled: true, label: "the library" })}
            >
              <Shuffle size={16} />
              Shuffle
            </button>
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
          {songs.map((song, index) => (
            <SongRow key={song.id} song={song} position={index + 1} context={songs} />
          ))}
        </div>
      </section>
    </>
  );
}
