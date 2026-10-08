# Midnight Melodies

A premium, cinematic music player built with **Next.js (App Router)**, **React** and
**TypeScript**. Browse albums, artists and playlists, queue tracks, like what you love,
and listen — with no account, no server and no tracking.

Rebuilt from a single-file HTML prototype: the content, catalogue and player behaviour
are preserved, and the architecture, design, interactions and accessibility are new.

---

## Features

**Player**
- Play, pause, previous, next, seek, volume, mute
- Shuffle and a three-state repeat (off → queue → one track)
- Queue with add, remove and clear
- Autoplay into the next track, recently played history
- Media Session metadata, so lock-screen and hardware keys show the track
- Persistent across navigation — the player never reloads between pages

**Surfaces**
- Mini player fixed to the bottom on every page
- Full-screen player with large artwork, full transport, volume and visualiser
- Queue drawer, toast notifications, confirmation modal
- Audio visualiser driven by an `AnalyserNode`, with a graceful fallback

**Pages**
- Home, Search, Library, Liked songs, Settings
- Dynamic routes for `/album/[id]`, `/artist/[id]` and `/playlist/[id]`
- Custom 404 and route-level skeleton loading

**Everything else**
- Real search across songs, artists, albums and playlists, with suggestions, keyboard
  navigation, match highlighting, a clear button and genre filters
- Dark, light and system themes with no flash on first paint
- Liked songs, history, volume, shuffle, repeat and the last played track persisted
- Keyboard shortcuts, visible focus states, ARIA labelling, reduced-motion support
- Responsive layouts designed for 1920 / 1440 / 1024 / 768 / 480 / 375

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| UI | React 19 |
| Styling | `app/globals.css` design tokens + Tailwind CSS utilities |
| Icons | lucide-react |
| Audio | HTML5 Audio API + Web Audio `AnalyserNode` |
| State | React Context (`MusicPlayerContext`, `ThemeContext`) |
| Persistence | `localStorage` via `useLocalStorage` |

No state library, no animation library, no UI kit.

---

## Folder structure

```
midnight-melodies/
├── app/
│   ├── layout.tsx              # metadata, providers, theme bootstrap script
│   ├── page.tsx                # home
│   ├── globals.css             # tokens, layout, components, responsive rules
│   ├── loading.tsx             # skeleton shown while a route streams
│   ├── not-found.tsx           # custom 404
│   ├── search/page.tsx
│   ├── library/page.tsx
│   ├── liked/page.tsx
│   ├── settings/page.tsx
│   ├── playlist/[id]/page.tsx
│   ├── album/[id]/page.tsx
│   └── artist/[id]/page.tsx
├── components/
│   ├── layout/                 # Sidebar, Header, MainLayout
│   ├── music/                  # MusicCard, SongRow, AlbumCard, ArtistCard, PlaylistCard
│   ├── player/                 # MusicPlayer, MiniPlayer, NowPlaying, Queue, AudioVisualizer
│   ├── navigation/             # MobileNavigation
│   └── ui/                     # Button, Modal, Toast, Slider
├── context/                    # MusicPlayerContext, ThemeContext
├── hooks/                      # useAudioPlayer, useLocalStorage, useKeyboardShortcuts
├── lib/                        # artwork.ts, tone.ts, format.ts
├── data/music.ts               # songs, albums, artists, playlists + lookups
├── types/music.ts              # shared interfaces
├── public/{images,audio}/
└── config files
```

---

## Installation

```bash
npm install
npm run dev     # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

Also available: `npm run lint` and `npm run typecheck`. Node 18.18 or newer is required.

---

## How to add songs

1. Drop the file into `public/audio/` (for example `song-9.mp3`).
2. Add an entry to `songs` in `data/music.ts`:

```ts
{
  id: "song-9",
  title: "New Track",
  artistId: "artist-1",
  artist: "Aural",
  albumId: "album-1",
  album: "After Dark",
  genre: "Electronic",
  year: 2026,
  duration: 214,
  audioSrc: "/audio/song-9.mp3",
  f1: 220, f2: 330,          // fallback synthesis + artwork seed
  c1: "#171020", c2: "#9b5cff"
}
```

3. Add the id to the album's `songIds` if it belongs to one.

`artistId` and `albumId` must match existing entries, otherwise the links on the row will
lead to the 404 page.

## How to add images

Artwork is generated as inline SVG in `lib/artwork.ts`, so nothing is required. To use
real files, put them in `public/images/`, add a `cover?: string` field to the relevant
interface in `types/music.ts`, set it in `data/music.ts`, and render `song.cover ??
songArtwork(song)` in the components.

## How to create playlists

Add an entry to `playlists` in `data/music.ts`:

```ts
{
  id: "small-hours",
  name: "Small hours",
  description: "For the quiet part of the night.",
  songIds: ["song-4", "song-8"],
  c1: "#141026", c2: "#8b7df6"
}
```

The `id` becomes the URL: `/playlist/small-hours`. It appears automatically on Home, in
the Library and in search.

---

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `Space` | Play / pause |
| `←` | Seek backward five seconds |
| `→` | Seek forward five seconds |
| `N` | Next track |
| `P` | Previous track |
| `M` | Mute / unmute |
| `L` | Like the current track |
| `Esc` | Close the queue or the full player |

Shortcuts are suppressed while you are typing in an input, textarea or select.

---

## Troubleshooting

**No sound.** Browsers block audio until you interact with the page — press play once.
If a file is missing from `public/audio`, the player synthesises the track instead, which
is expected with the sample catalogue.

**A track plays as a tone rather than music.** That is the fallback. Add a real file at
the path in `audioSrc`.

**The visualiser is flat.** It needs the Web Audio API and a running `AudioContext`. It
also stays still when your system is set to reduced motion.

**Theme flashes on load.** Make sure the inline script in `app/layout.tsx` is intact —
it sets `data-theme` before React hydrates.

**Preferences do not persist.** Private browsing and blocked storage both disable
`localStorage`; the app falls back to in-memory state for the session.

**`npm run dev` fails on install.** Delete `node_modules` and `package-lock.json`, then
run `npm install` again on Node 18.18+.

---

Midnight Melodies ships with no copyrighted audio. The sample tracks are generated in the
browser from a pair of frequencies per song.
