import type { Album, Artist, Playlist, SearchResults, Song } from "@/types/music";

/**
 * Sample catalogue. Audio paths point at public/audio — when a file is absent the
 * player falls back to synthesising the track from its two frequencies, so the app
 * ships without any copyrighted media.
 */
export const songs: Song[] = [
  { id: "song-1", title: "Midnight Drive", artistId: "artist-1", artist: "Aural", albumId: "album-1", album: "After Dark", genre: "Electronic", year: 2026, duration: 11, audioSrc: "/audio/song-1.mp3", f1: 220, f2: 330, c1: "#171020", c2: "#9b5cff" },
  { id: "song-2", title: "Neon Skies", artistId: "artist-2", artist: "Nova Lane", albumId: "album-2", album: "City Lights", genre: "Synthwave", year: 2026, duration: 10, audioSrc: "/audio/song-2.mp3", f1: 261.63, f2: 392, c1: "#0d1720", c2: "#38bdf8" },
  { id: "song-3", title: "After Glow", artistId: "artist-3", artist: "Mira Vale", albumId: "album-1", album: "After Dark", genre: "Pop", year: 2026, duration: 9, audioSrc: "/audio/song-3.mp3", f1: 196, f2: 293.66, c1: "#20140f", c2: "#fb7185" },
  { id: "song-4", title: "Velvet Night", artistId: "artist-1", artist: "Aural", albumId: "album-3", album: "Velvet Night", genre: "R&B", year: 2026, duration: 12, audioSrc: "/audio/song-4.mp3", f1: 174.61, f2: 261.63, c1: "#111b16", c2: "#34d399" },
  { id: "song-5", title: "City Lights", artistId: "artist-2", artist: "Nova Lane", albumId: "album-2", album: "City Lights", genre: "Electronic", year: 2025, duration: 10, audioSrc: "/audio/song-5.mp3", f1: 246.94, f2: 369.99, c1: "#1b1320", c2: "#f472b6" },
  { id: "song-6", title: "Slow Burn", artistId: "artist-3", artist: "Mira Vale", albumId: "album-4", album: "Slow Burn", genre: "Indie", year: 2025, duration: 13, audioSrc: "/audio/song-6.mp3", f1: 146.83, f2: 220, c1: "#141414", c2: "#f59e0b" },
  { id: "song-7", title: "Orbit Heart", artistId: "artist-4", artist: "Kairo", albumId: "album-5", album: "Orbit Heart", genre: "Alternative", year: 2026, duration: 9, audioSrc: "/audio/song-7.mp3", f1: 329.63, f2: 493.88, c1: "#101521", c2: "#818cf8" },
  { id: "song-8", title: "Golden Hour", artistId: "artist-4", artist: "Kairo", albumId: "album-6", album: "Golden Hour", genre: "Ambient", year: 2025, duration: 14, audioSrc: "/audio/song-8.mp3", f1: 277.18, f2: 415.3, c1: "#18120e", c2: "#fbbf24" }
];

export const albums: Album[] = [
  { id: "album-1", title: "After Dark", artistId: "artist-1", artist: "Aural", year: 2026, description: "The record the night was written for.", songIds: ["song-1", "song-3"], c1: "#171020", c2: "#9b5cff" },
  { id: "album-2", title: "City Lights", artistId: "artist-2", artist: "Nova Lane", year: 2026, description: "Motorway synths and long exposures.", songIds: ["song-2", "song-5"], c1: "#0d1720", c2: "#38bdf8" },
  { id: "album-3", title: "Velvet Night", artistId: "artist-1", artist: "Aural", year: 2026, description: "Low tempo, high ceiling.", songIds: ["song-4"], c1: "#111b16", c2: "#34d399" },
  { id: "album-4", title: "Slow Burn", artistId: "artist-3", artist: "Mira Vale", year: 2025, description: "Guitars left to smoulder.", songIds: ["song-6"], c1: "#141414", c2: "#f59e0b" },
  { id: "album-5", title: "Orbit Heart", artistId: "artist-4", artist: "Kairo", year: 2026, description: "Wide, weightless and a little homesick.", songIds: ["song-7"], c1: "#101521", c2: "#818cf8" },
  { id: "album-6", title: "Golden Hour", artistId: "artist-4", artist: "Kairo", year: 2025, description: "The soft landing after a long night.", songIds: ["song-8"], c1: "#18120e", c2: "#fbbf24" }
];

export const artists: Artist[] = [
  { id: "artist-1", name: "Aural", bio: "House project built around late drives and longer nights.", genres: ["Electronic", "R&B"], c1: "#171020", c2: "#9b5cff" },
  { id: "artist-2", name: "Nova Lane", bio: "Synthwave duo writing for motorways and rain.", genres: ["Synthwave", "Electronic"], c1: "#0d1720", c2: "#38bdf8" },
  { id: "artist-3", name: "Mira Vale", bio: "Songwriter working between pop structure and indie texture.", genres: ["Pop", "Indie"], c1: "#20140f", c2: "#fb7185" },
  { id: "artist-4", name: "Kairo", bio: "Ambient producer with a habit of ending albums at sunrise.", genres: ["Alternative", "Ambient"], c1: "#101521", c2: "#818cf8" }
];

export const playlists: Playlist[] = [
  { id: "last-train-home", name: "Last train home", description: "Slow tempo, long shadows.", songIds: ["song-1", "song-4", "song-6", "song-8"], c1: "#1a1030", c2: "#8b7df6" },
  { id: "neon-commute", name: "Neon commute", description: "Bright synths for moving.", songIds: ["song-2", "song-5", "song-7"], c1: "#0b1a26", c2: "#38bdf8" },
  { id: "after-hours", name: "After hours", description: "When the room empties out.", songIds: ["song-3", "song-4", "song-8", "song-1"], c1: "#25131c", c2: "#f472b6" },
  { id: "sunrise-fade", name: "Sunrise fade", description: "The soft landing.", songIds: ["song-8", "song-6", "song-3"], c1: "#221808", c2: "#fbbf24" }
];

export const genres: string[] = ["All", ...Array.from(new Set(songs.map((song) => song.genre)))];

export const getSongById = (id: string): Song | undefined => songs.find((song) => song.id === id);
export const getAlbumById = (id: string): Album | undefined => albums.find((album) => album.id === id);
export const getArtistById = (id: string): Artist | undefined => artists.find((artist) => artist.id === id);
export const getPlaylistById = (id: string): Playlist | undefined => playlists.find((list) => list.id === id);

/** Resolves a list of ids to songs, dropping anything that no longer exists. */
export const getSongs = (ids: string[]): Song[] => ids.map(getSongById).filter((song): song is Song => Boolean(song));

export const getAlbumSongs = (albumId: string): Song[] => songs.filter((song) => song.albumId === albumId);
export const getArtistSongs = (artistId: string): Song[] => songs.filter((song) => song.artistId === artistId);
export const getArtistAlbums = (artistId: string): Album[] => albums.filter((album) => album.artistId === artistId);

/** Artists who share at least one genre with the given artist. */
export const getRelatedArtists = (artistId: string): Artist[] => {
  const artist = getArtistById(artistId);
  if (!artist) return [];
  return artists.filter((other) => other.id !== artistId && other.genres.some((genre) => artist.genres.includes(genre)));
};

const matches = (value: string, query: string) => value.toLowerCase().includes(query);

/** One search pass across every entity type. */
export function searchCatalogue(rawQuery: string): SearchResults {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return { songs: [], albums: [], artists: [], playlists: [] };

  return {
    songs: songs.filter((song) => [song.title, song.artist, song.album, song.genre].some((value) => matches(value, query))),
    albums: albums.filter((album) => [album.title, album.artist].some((value) => matches(value, query))),
    artists: artists.filter((artist) => [artist.name, ...artist.genres].some((value) => matches(value, query))),
    playlists: playlists.filter((list) => [list.name, list.description].some((value) => matches(value, query)))
  };
}
