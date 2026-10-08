import type {
  Album,
  Artist,
  Playlist,
  SearchResults,
  Song,
} from "@/types/music";

/**
 * Midnight Melodies
 * Bollywood / Romantic / Nostalgic music catalogue.
 *
 * Audio files should be placed inside:
 * public/audio/
 *
 * Cover images should be placed inside:
 * public/images/
 */

export const songs: Song[] = [
  {
    id: "song-1",
    title: "Afeemi",
    artistId: "artist-1",
    artist: "Jubin Nautiyal",
    albumId: "album-1",
    album: "Meri Pyaari Bindu",
    genre: "Bollywood",
    year: 2017,
    duration: 220,
    audioSrc: "/audio/afeemi.mp3",
    // coverSrc: "/images/afeemi.jpg",
    f1: 220,
    f2: 330,
    c1: "#24131d",
    c2: "#e8799a",
  },

  {
    id: "song-2",
    title: "Ajab Si",
    artistId: "artist-2",
    artist: "KK",
    albumId: "album-2",
    album: "Om Shanti Om",
    genre: "Romantic",
    year: 2007,
    duration: 247,
    audioSrc: "/audio/ajab-si.mp3",
    // coverSrc: "/images/ajab-si.jpg",
    f1: 261.63,
    f2: 392,
    c1: "#151827",
    c2: "#818cf8",
  },

  {
    id: "song-3",
    title: "Zara Sa",
    artistId: "artist-2",
    artist: "KK",
    albumId: "album-3",
    album: "Jannat",
    genre: "Romantic",
    year: 2008,
    duration: 305,
    audioSrc: "/audio/zara-sa.mp3",
    // coverSrc: "/images/zara-sa.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#1c1420",
    c2: "#c084fc",
  },

  {
    id: "song-4",
    title: "Khuda Jaane",
    artistId: "artist-2",
    artist: "KK",
    albumId: "album-4",
    album: "Bachna Ae Haseeno",
    genre: "Romantic",
    year: 2008,
    duration: 309,
    audioSrc: "/audio/khuda-jaane.mp3",
    // coverSrc: "/images/khuda-jaane.jpg",
    f1: 174.61,
    f2: 261.63,
    c1: "#111b16",
    c2: "#34d399",
  },

  {
    id: "song-5",
    title: "Tu Hi Meri Shab Hai",
    artistId: "artist-2",
    artist: "KK",
    albumId: "album-5",
    album: "Gangster",
    genre: "Romantic",
    year: 2006,
    duration: 368,
    audioSrc: "/audio/tu-hi-meri-shab-hai.mp3",
    // coverSrc: "/images/tu-hi-meri-shab-hai.jpg",
    f1: 246.94,
    f2: 369.99,
    c1: "#17121f",
    c2: "#a78bfa",
  },
];

/* ───────────────────────────────────────────────────────────
   ALBUMS
─────────────────────────────────────────────────────────── */

export const albums: Album[] = [
  {
    id: "album-1",
    title: "Meri Pyaari Bindu",
    artistId: "artist-1",
    artist: "Jubin Nautiyal",
    year: 2017,
    description: "A nostalgic Bollywood romantic soundtrack.",
    songIds: ["song-1"],
    c1: "#24131d",
    c2: "#e8799a",
  },

  {
    id: "album-2",
    title: "Om Shanti Om",
    artistId: "artist-2",
    artist: "KK",
    year: 2007,
    description: "A timeless Bollywood romantic classic.",
    songIds: ["song-2"],
    c1: "#151827",
    c2: "#818cf8",
  },

  {
    id: "album-3",
    title: "Jannat",
    artistId: "artist-2",
    artist: "KK",
    year: 2008,
    description: "One of KK's most memorable romantic soundtracks.",
    songIds: ["song-3"],
    c1: "#1c1420",
    c2: "#c084fc",
  },

  {
    id: "album-4",
    title: "Bachna Ae Haseeno",
    artistId: "artist-2",
    artist: "KK",
    year: 2008,
    description: "A beloved romantic Bollywood soundtrack.",
    songIds: ["song-4"],
    c1: "#111b16",
    c2: "#34d399",
  },

  {
    id: "album-5",
    title: "Gangster",
    artistId: "artist-2",
    artist: "KK",
    year: 2006,
    description: "An iconic soundtrack featuring KK's unforgettable voice.",
    songIds: ["song-5"],
    c1: "#17121f",
    c2: "#a78bfa",
  },
];

/* ───────────────────────────────────────────────────────────
   ARTISTS
─────────────────────────────────────────────────────────── */

export const artists: Artist[] = [
  {
    id: "artist-1",
    name: "Jubin Nautiyal",
    bio: "Indian playback singer known for romantic and soulful Bollywood songs.",
    genres: ["Bollywood", "Romantic"],
    c1: "#24131d",
    c2: "#e8799a",
  },

  {
    id: "artist-2",
    name: "KK",
    bio: "One of India's most beloved playback singers, remembered for his soulful and timeless songs.",
    genres: ["Bollywood", "Romantic", "Nostalgic"],
    c1: "#151827",
    c2: "#818cf8",
  },
];

/* ───────────────────────────────────────────────────────────
   PLAYLISTS
─────────────────────────────────────────────────────────── */

export const playlists: Playlist[] = [
  {
    id: "kk-romantic-classics",
    name: "KK Romantic Classics",
    description: "Five unforgettable romantic songs for a nostalgic night.",
    songIds: [
      "song-2",
      "song-3",
      "song-4",
      "song-5",
    ],
    c1: "#17121f",
    c2: "#a78bfa",
  },

  {
    id: "midnight-memories",
    name: "Midnight Memories",
    description: "Soft melodies for late-night listening.",
    songIds: [
      "song-1",
      "song-3",
      "song-4",
      "song-5",
    ],
    c1: "#171020",
    c2: "#9b5cff",
  },

  {
    id: "bollywood-romance",
    name: "Bollywood Romance",
    description: "A collection of nostalgic Bollywood love songs.",
    songIds: [
      "song-1",
      "song-2",
      "song-3",
      "song-4",
      "song-5",
    ],
    c1: "#24131d",
    c2: "#e8799a",
  },
];

/* ───────────────────────────────────────────────────────────
   GENRES
─────────────────────────────────────────────────────────── */

export const genres: string[] = [
  "All",
  ...Array.from(
    new Set(songs.map((song) => song.genre))
  ),
];

/* ───────────────────────────────────────────────────────────
   SONG HELPERS
─────────────────────────────────────────────────────────── */

export const getSongById = (
  id: string
): Song | undefined =>
  songs.find((song) => song.id === id);

export const getAlbumById = (
  id: string
): Album | undefined =>
  albums.find((album) => album.id === id);

export const getArtistById = (
  id: string
): Artist | undefined =>
  artists.find((artist) => artist.id === id);

export const getPlaylistById = (
  id: string
): Playlist | undefined =>
  playlists.find((playlist) => playlist.id === id);

/**
 * Resolves a list of IDs to songs.
 * Missing songs are automatically removed.
 */
export const getSongs = (
  ids: string[]
): Song[] =>
  ids
    .map(getSongById)
    .filter(
      (song): song is Song =>
        Boolean(song)
    );

/* ───────────────────────────────────────────────────────────
   ALBUM / ARTIST HELPERS
─────────────────────────────────────────────────────────── */

export const getAlbumSongs = (
  albumId: string
): Song[] =>
  songs.filter(
    (song) => song.albumId === albumId
  );

export const getArtistSongs = (
  artistId: string
): Song[] =>
  songs.filter(
    (song) => song.artistId === artistId
  );

export const getArtistAlbums = (
  artistId: string
): Album[] =>
  albums.filter(
    (album) => album.artistId === artistId
  );

/**
 * Artists who share at least one genre
 * with the given artist.
 */
export const getRelatedArtists = (
  artistId: string
): Artist[] => {
  const artist = getArtistById(artistId);

  if (!artist) return [];

  return artists.filter(
    (other) =>
      other.id !== artistId &&
      other.genres.some((genre) =>
        artist.genres.includes(genre)
      )
  );
};

/* ───────────────────────────────────────────────────────────
   SEARCH
─────────────────────────────────────────────────────────── */

const matches = (
  value: string,
  query: string
): boolean =>
  value.toLowerCase().includes(query);

/**
 * Search across:
 * songs
 * albums
 * artists
 * playlists
 */
export function searchCatalogue(
  rawQuery: string
): SearchResults {
  const query = rawQuery
    .trim()
    .toLowerCase();

  if (!query) {
    return {
      songs: [],
      albums: [],
      artists: [],
      playlists: [],
    };
  }

  return {
    songs: songs.filter((song) =>
      [
        song.title,
        song.artist,
        song.album,
        song.genre,
      ].some((value) =>
        matches(value, query)
      )
    ),

    albums: albums.filter((album) =>
      [
        album.title,
        album.artist,
      ].some((value) =>
        matches(value, query)
      )
    ),

    artists: artists.filter((artist) =>
      [
        artist.name,
        ...artist.genres,
      ].some((value) =>
        matches(value, query)
      )
    ),

    playlists: playlists.filter((playlist) =>
      [
        playlist.name,
        playlist.description,
      ].some((value) =>
        matches(value, query)
      )
    ),
  };
}