/** Domain types for Midnight Melodies. */

export interface Song {
  id: string;
  title: string;
  artistId: string;
  artist: string;
  albumId: string;
  album: string;
  genre: string;
  year: number;
  /** Length in seconds. Used for layout before metadata loads. */
  duration: number;
  /** Optional audio file. When it is missing the player synthesises the track. */
  audioSrc: string;
  /** Carrier and harmony frequencies used for synthesis and for the generated artwork. */
  f1: number;
  f2: number;
  /** Artwork gradient stops. */
  c1: string;
  c2: string;
}

export interface Album {
  id: string;
  title: string;
  artistId: string;
  artist: string;
  year: number;
  description: string;
  songIds: string[];
  c1: string;
  c2: string;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  genres: string[];
  c1: string;
  c2: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  songIds: string[];
  c1: string;
  c2: string;
}

export type RepeatMode = "off" | "all" | "one";

export type ThemeMode = "dark" | "light" | "system";

export type ResolvedTheme = "dark" | "light";

export interface ToastMessage {
  id: number;
  message: string;
  tone: "default" | "success" | "error";
}

export interface SearchResults {
  songs: Song[];
  albums: Album[];
  artists: Artist[];
  playlists: Playlist[];
}
