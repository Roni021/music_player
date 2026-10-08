import type { Album, Artist, Playlist, Song } from "@/types/music";

interface ArtworkInput {
  title: string;
  c1: string;
  c2: string;
  /** Seeds the bar motif so every cover is different but stable. */
  seed: number;
  caption?: string;
}

const cache = new Map<string, string>();

const escape = (value: string) =>
  value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character] as string);

/** Builds cover art as an inline SVG data URI — no image files, no network. */
export function artwork({ title, c1, c2, seed, caption = "MIDNIGHT MELODIES" }: ArtworkInput): string {
  const key = `${title}-${c1}-${c2}-${seed}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const words = title.toUpperCase().split(" ");
  const line1 = words[0];
  const line2 = words.slice(1).join(" ");
  const size = (text: string) => Math.min(92, Math.floor(620 / Math.max(text.length, 1)) + 16);

  const bars = Array.from({ length: 14 }, (_, i) => {
    const height = 26 + ((seed * (i + 3)) % 96);
    return `<rect x="${64 + i * 26}" y="${318 - height}" width="9" height="${height}" rx="4" fill="#fff" opacity="${0.16 + (i % 4) * 0.07}"/>`;
  }).join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${c1}"/><stop offset="1" stop-color="${c2}" stop-opacity=".92"/></linearGradient>
<radialGradient id="r" cx=".78" cy=".18" r=".55"><stop stop-color="${c2}" stop-opacity=".55"/><stop offset="1" stop-color="${c2}" stop-opacity="0"/></radialGradient></defs>
<rect width="600" height="600" fill="url(#g)"/><rect width="600" height="600" fill="url(#r)"/>
<circle cx="120" cy="500" r="190" fill="#fff" opacity=".05"/>
${bars}
<text x="52" y="432" fill="#fff" font-family="Helvetica,Arial,sans-serif" font-weight="800" font-size="${size(line1)}" letter-spacing="-2">${escape(line1)}</text>
<text x="52" y="${432 + size(line1) * 0.92}" fill="#fff" font-family="Helvetica,Arial,sans-serif" font-weight="800" font-size="${size(line2 || line1)}" letter-spacing="-2" opacity=".92">${escape(line2)}</text>
<text x="54" y="566" fill="#fff" opacity=".55" font-family="Helvetica,Arial,sans-serif" font-size="15" letter-spacing="6">${escape(caption)}</text></svg>`;

  const uri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  cache.set(key, uri);
  return uri;
}

export const songArtwork = (song: Song) => artwork({ title: song.title, c1: song.c1, c2: song.c2, seed: song.f1 });
export const albumArtwork = (album: Album) => artwork({ title: album.title, c1: album.c1, c2: album.c2, seed: album.year });
export const playlistArtwork = (list: Playlist) => artwork({ title: list.name, c1: list.c1, c2: list.c2, seed: list.songIds.length * 37 });
export const artistArtwork = (artist: Artist) =>
  artwork({ title: artist.name, c1: artist.c1, c2: artist.c2, seed: artist.name.length * 53, caption: "MIDNIGHT MELODIES ARTIST" });

export const gradient = (source: { c1: string; c2: string }) => `linear-gradient(140deg, ${source.c1}, ${source.c2})`;
