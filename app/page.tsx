"use client";

import Link from "next/link";
import { ListPlus, Play } from "lucide-react";
import { AlbumCard } from "@/components/music/AlbumCard";
import { ArtistCard } from "@/components/music/ArtistCard";
import { MusicCard } from "@/components/music/MusicCard";
import { PlaylistCard } from "@/components/music/PlaylistCard";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { albums, artists, getAlbumSongs, getSongById, getSongs, playlists, songs } from "@/data/music";
import { songArtwork } from "@/lib/artwork";

const FEATURED_ID = "song-1";

export default function HomePage() {
  const player = useMusicPlayer();
  const featured = getSongById(FEATURED_ID) ?? songs[0];
  const recent = getSongs(player.recentIds).slice(0, 6);

  return (
    <>
      <section className="hero" aria-label="Featured release">
        <div className="hero-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={songArtwork(featured)} alt={`Album art for ${featured.title}`} />
        </div>
        <div className="hero-copy">
          <span className="hero-tag">
            <span className="eq" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            Featured tonight on Midnight Melodies
          </span>
          <h1>
            <span className="word">Midnight</span> <span className="word">Drive</span>
          </h1>
          <div className="hero-meta">
            <Link href={`/artist/${featured.artistId}`}>{featured.artist}</Link>
            <span className="dot" />
            <Link href={`/album/${featured.albumId}`}>{featured.album}</Link>
            <span className="dot" />
            <span>{featured.genre}</span>
          </div>
          <p>Late-night synths, soft neon and a cinematic pulse. Press play and let the city blur past the window.</p>
          <div className="actions">
            <button type="button" className="btn" onClick={() => player.playSong(featured, songs)}>
              <Play size={17} />
              Play now
            </button>
            <button type="button" className="btn ghost" onClick={() => player.addToQueue(featured)}>
              <ListPlus size={17} />
              Add to queue
            </button>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Recently played</h2>
            <p className="muted">Picks up where you left off</p>
          </div>
          {recent.length > 0 && (
            <button type="button" className="link-btn" onClick={player.clearHistory}>
              Clear history
            </button>
          )}
        </div>
        {recent.length ? (
          <div className="grid">
            {recent.map((song, index) => (
              <MusicCard key={song.id} song={song} context={recent} delay={index * 45} />
            ))}
          </div>
        ) : (
          <div className="track-list">
            <div className="empty">
              <h3>Your history is empty</h3>
              <p>Play anything and Midnight Melodies will keep the last twelve tracks here.</p>
            </div>
          </div>
        )}
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Trending tonight</h2>
            <p className="muted">What listeners are looping right now</p>
          </div>
        </div>
        <div className="grid">
          {songs.slice(0, 6).map((song, index) => (
            <MusicCard key={song.id} song={song} context={songs} delay={index * 45} />
          ))}
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Recommended for you</h2>
            <p className="muted">Based on the moods you keep coming back to</p>
          </div>
        </div>
        <div className="grid">
          {[...songs].reverse().slice(0, 6).map((song, index) => (
            <MusicCard key={song.id} song={song} context={songs} delay={index * 45} />
          ))}
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Popular albums</h2>
          </div>
          <Link className="link-btn" href="/library">
            See the library
          </Link>
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
            <h2>Popular artists</h2>
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
            <h2>Playlists for the hour</h2>
            <p className="muted">Four sets built around a time of night</p>
          </div>
        </div>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <PlaylistCard key={playlist.id} playlist={playlist} delay={index * 60} />
          ))}
        </div>
      </section>
    </>
  );
}
