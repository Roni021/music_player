import type {
  Album,
  Artist,
  Playlist,
  SearchResults,
  Song,
} from "@/types/music";

/**
 * Midnight Melodies
 * Bollywood + Bengali Romantic + Nostalgic Music Catalogue
 *
 * Audio files:
 * public/audio/
 *
 * Cover images:
 * public/images/
 */

/* ───────────────────────────────────────────────────────────
   SONGS
─────────────────────────────────────────────────────────── */

export const songs: Song[] = [
  /* ===================== BOLLYWOOD ===================== */

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

  /* ===================== BENGALI ===================== */

  {
    id: "song-6",
    title: "Bojhena Se Bojhena",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-6",
    album: "Bojhena Se Bojhena",
    genre: "Bengali",
    year: 2012,
    duration: 286,
    audioSrc: "/audio/bojhena-se-bojhena.mp3",
    // coverSrc: "/images/bojhena-se-bojhena.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#20141f",
    c2: "#ec4899",
  },

  {
    id: "song-7",
    title: "Tomake Chai",
    artistId: "artist-4",
    artist: "Arindom",
    albumId: "album-7",
    album: "Tomake Chai",
    genre: "Bengali",
    year: 2017,
    duration: 260,
    audioSrc: "/audio/tomake-chai.mp3",
    // coverSrc: "/images/tomake-chai.jpg",
    f1: 220,
    f2: 329.63,
    c1: "#171827",
    c2: "#60a5fa",
  },

  {
    id: "song-8",
    title: "Bhalobashar Morshum",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-8",
    album: "Bhalobashar Morshum",
    genre: "Bengali",
    year: 2022,
    duration: 278,
    audioSrc: "/audio/bhalobashar-morshum.mp3",
    // coverSrc: "/images/bhalobashar-morshum.jpg",
    f1: 246.94,
    f2: 369.99,
    c1: "#24131d",
    c2: "#f472b6",
  },

  {
    id: "song-9",
    title: "Tumi Jake Bhalobasho",
    artistId: "artist-5",
    artist: "Iman Chakraborty",
    albumId: "album-9",
    album: "Praktan",
    genre: "Bengali",
    year: 2016,
    duration: 286,
    audioSrc: "/audio/tumi-jake-bhalobasho.mp3",
    // coverSrc: "/images/tumi-jake-bhalobasho.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#1b1410",
    c2: "#f59e0b",
  },

  {
    id: "song-10",
    title: "Mon Majhi Re",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-10",
    album: "Boss",
    genre: "Bengali",
    year: 2013,
    duration: 278,
    audioSrc: "/audio/mon-majhi-re.mp3",
    // coverSrc: "/images/mon-majhi-re.jpg",
    f1: 220,
    f2: 329.63,
    c1: "#10201a",
    c2: "#34d399",
  },

  {
    id: "song-11",
    title: "Amake Amar Moto Thakte Dao",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-11",
    album: "Autograph",
    genre: "Bengali",
    year: 2010,
    duration: 285,
    audioSrc: "/audio/amake-amar-moto-thakte-dao.mp3",
    // coverSrc: "/images/amake-amar-moto-thakte-dao.jpg",
    f1: 174.61,
    f2: 261.63,
    c1: "#171717",
    c2: "#94a3b8",
  },

  {
    id: "song-12",
    title: "Ekbar Bol",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-12",
    album: "Ekbar Bol",
    genre: "Bengali",
    year: 2015,
    duration: 270,
    audioSrc: "/audio/ekbar-bol.mp3",
    // coverSrc: "/images/ekbar-bol.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#201827",
    c2: "#a78bfa",
  },

  {
    id: "song-13",
    title: "Parbona Ami Charte Toke",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-13",
    album: "Borbaad",
    genre: "Bengali",
    year: 2014,
    duration: 265,
    audioSrc: "/audio/parbona-ami-charte-toke.mp3",
    // coverSrc: "/images/parbona-ami-charte-toke.jpg",
    f1: 233.08,
    f2: 349.23,
    c1: "#21151c",
    c2: "#fb7185",
  },

  {
    id: "song-14",
    title: "Kolkata Song",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-14",
    album: "Kolkata Song",
    genre: "Bengali",
    year: 2013,
    duration: 250,
    audioSrc: "/audio/kolkata-song.mp3",
    // coverSrc: "/images/kolkata-song.jpg",
    f1: 220,
    f2: 329.63,
    c1: "#111827",
    c2: "#38bdf8",
  },

  {
    id: "song-15",
    title: "Boba Tunnel",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-15",
    album: "Boba Tunnel",
    genre: "Bengali",
    year: 2014,
    duration: 275,
    audioSrc: "/audio/boba-tunnel.mp3",
    // coverSrc: "/images/boba-tunnel.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#171717",
    c2: "#64748b",
  },

  {
    id: "song-16",
    title: "Benche Thakar Gaan",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-16",
    album: "Autograph",
    genre: "Bengali",
    year: 2010,
    duration: 292,
    audioSrc: "/audio/benche-thakar-gaan.mp3",
    // coverSrc: "/images/benche-thakar-gaan.jpg",
    f1: 164.81,
    f2: 246.94,
    c1: "#171717",
    c2: "#f59e0b",
  },

  {
    id: "song-17",
    title: "Aami Shei Manushta Aar Nei",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-17",
    album: "Aami Shei Manushta Aar Nei",
    genre: "Bengali",
    year: 2015,
    duration: 285,
    audioSrc: "/audio/aami-shei-manushta-aar-nei.mp3",
    // coverSrc: "/images/aami-shei-manushta-aar-nei.jpg",
    f1: 185,
    f2: 277.18,
    c1: "#18151b",
    c2: "#c084fc",
  },

  {
    id: "song-18",
    title: "E Tumi Kemon Tumi",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-18",
    album: "E Tumi Kemon Tumi",
    genre: "Bengali",
    year: 2013,
    duration: 280,
    audioSrc: "/audio/e-tumi-kemon-tumi.mp3",
    // coverSrc: "/images/e-tumi-kemon-tumi.jpg",
    f1: 220,
    f2: 330,
    c1: "#16121d",
    c2: "#e879f9",
  },

  {
    id: "song-19",
    title: "Chawl Raastaye",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-19",
    album: "Chawl Raastaye",
    genre: "Bengali",
    year: 2014,
    duration: 265,
    audioSrc: "/audio/chawl-raastaye.mp3",
    // coverSrc: "/images/chawl-raastaye.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#141414",
    c2: "#fb923c",
  },

  {
    id: "song-20",
    title: "Kichhu Chaini Ami",
    artistId: "artist-7",
    artist: "Rupam Islam",
    albumId: "album-20",
    album: "Kichhu Chaini Ami",
    genre: "Bengali Rock",
    year: 2010,
    duration: 290,
    audioSrc: "/audio/kichhu-chaini-ami.mp3",
    // coverSrc: "/images/kichhu-chaini-ami.jpg",
    f1: 146.83,
    f2: 220,
    c1: "#111111",
    c2: "#ef4444",
  },

  {
    id: "song-21",
    title: "Shey Je Boshe Achhe",
    artistId: "artist-8",
    artist: "Arnob",
    albumId: "album-21",
    album: "Shey Je Boshe Achhe",
    genre: "Bengali",
    year: 2005,
    duration: 280,
    audioSrc: "/audio/shey-je-boshe-achhe.mp3",
    // coverSrc: "/images/shey-je-boshe-achhe.jpg",
    f1: 174.61,
    f2: 261.63,
    c1: "#102018",
    c2: "#34d399",
  },

  {
    id: "song-22",
    title: "Hariye Giyechi",
    artistId: "artist-8",
    artist: "Arnob",
    albumId: "album-22",
    album: "Hariye Giyechi",
    genre: "Bengali",
    year: 2005,
    duration: 275,
    audioSrc: "/audio/hariye-giyechi.mp3",
    // coverSrc: "/images/hariye-giyechi.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#121827",
    c2: "#60a5fa",
  },

  {
    id: "song-23",
    title: "Tomar Jonno",
    artistId: "artist-8",
    artist: "Arnob",
    albumId: "album-23",
    album: "Tomar Jonno",
    genre: "Bengali",
    year: 2005,
    duration: 270,
    audioSrc: "/audio/tomar-jonno.mp3",
    // coverSrc: "/images/tomar-jonno.jpg",
    f1: 220,
    f2: 329.63,
    c1: "#1b1620",
    c2: "#c084fc",
  },

  {
    id: "song-24",
    title: "Chiltey Roud",
    artistId: "artist-8",
    artist: "Arnob",
    albumId: "album-24",
    album: "Chiltey Roud",
    genre: "Bengali",
    year: 2005,
    duration: 265,
    audioSrc: "/audio/chiltey-roud.mp3",
    // coverSrc: "/images/chiltey-roud.jpg",
    f1: 246.94,
    f2: 369.99,
    c1: "#20190f",
    c2: "#fbbf24",
  },

  {
    id: "song-25",
    title: "Ekla Cholo Re",
    artistId: "artist-9",
    artist: "Shreya Ghoshal",
    albumId: "album-25",
    album: "Ekla Cholo Re",
    genre: "Bengali",
    year: 2010,
    duration: 300,
    audioSrc: "/audio/ekla-cholo-re.mp3",
    // coverSrc: "/images/ekla-cholo-re.jpg",
    f1: 196,
    f2: 293.66,
    c1: "#21170f",
    c2: "#f59e0b",
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

  {
    id: "album-6",
    title: "Bojhena Bojhena",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 2012,
    description: "A soulful Bengali romantic classic.",
    songIds: ["song-6"],
    c1: "#20141f",
    c2: "#ec4899",
  },

  {
    id: "album-7",
    title: "Tomake Chai",
    artistId: "artist-4",
    artist: "Arindom",
    year: 2017,
    description: "Modern Bengali romantic melodies.",
    songIds: ["song-7"],
    c1: "#171827",
    c2: "#60a5fa",
  },

  {
    id: "album-8",
    title: "Bhalobashar Morshum",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 2022,
    description: "A modern Bengali romantic favourite.",
    songIds: ["song-8"],
    c1: "#24131d",
    c2: "#f472b6",
  },

  {
    id: "album-9",
    title: "Praktan",
    artistId: "artist-5",
    artist: "Iman Chakraborty",
    year: 2016,
    description: "Emotional Bengali melodies.",
    songIds: ["song-9"],
    c1: "#1b1410",
    c2: "#f59e0b",
  },

  {
    id: "album-10",
    title: "Boss",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 2013,
    description: "Popular Bengali romantic music.",
    songIds: ["song-10"],
    c1: "#10201a",
    c2: "#34d399",
  },

  {
    id: "album-11",
    title: "Autograph",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2010,
    description: "Iconic Bengali songs by Anupam Roy.",
    songIds: ["song-11"],
    c1: "#171717",
    c2: "#94a3b8",
  },

  {
    id: "album-12",
    title: "Ekbar Bol",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 2015,
    description: "A soulful Bengali romantic song.",
    songIds: ["song-12"],
    c1: "#201827",
    c2: "#a78bfa",
  },

  {
    id: "album-13",
    title: "Borbaad",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 2014,
    description: "A popular Bengali romantic soundtrack.",
    songIds: ["song-13"],
    c1: "#21151c",
    c2: "#fb7185",
  },

  {
    id: "album-14",
    title: "Kolkata Song",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2013,
    description: "A musical tribute to Kolkata.",
    songIds: ["song-14"],
    c1: "#111827",
    c2: "#38bdf8",
  },

  {
    id: "album-15",
    title: "Boba Tunnel",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2014,
    description: "A reflective Bengali composition.",
    songIds: ["song-15"],
    c1: "#171717",
    c2: "#64748b",
  },

  {
    id: "album-16",
    title: "Benche Thakar Gaan",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2010,
    description: "One of Anupam Roy's most memorable songs.",
    songIds: ["song-16"],
    c1: "#171717",
    c2: "#f59e0b",
  },

  {
    id: "album-17",
    title: "Aami Shei Manushta Aar Nei",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2015,
    description: "Emotional Bengali songwriting.",
    songIds: ["song-17"],
    c1: "#18151b",
    c2: "#c084fc",
  },

  {
    id: "album-18",
    title: "E Tumi Kemon Tumi",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2013,
    description: "A beautiful modern Bengali melody.",
    songIds: ["song-18"],
    c1: "#16121d",
    c2: "#e879f9",
  },

  {
    id: "album-19",
    title: "Chawl Raastaye",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 2014,
    description: "A contemporary Bengali favourite.",
    songIds: ["song-19"],
    c1: "#141414",
    c2: "#fb923c",
  },

  {
    id: "album-20",
    title: "Kichhu Chaini Ami",
    artistId: "artist-7",
    artist: "Rupam Islam",
    year: 2010,
    description: "Bengali rock with emotional depth.",
    songIds: ["song-20"],
    c1: "#111111",
    c2: "#ef4444",
  },

  {
    id: "album-21",
    title: "Shey Je Boshe Achhe",
    artistId: "artist-8",
    artist: "Arnob",
    year: 2005,
    description: "A timeless Bengali acoustic classic.",
    songIds: ["song-21"],
    c1: "#102018",
    c2: "#34d399",
  },

  {
    id: "album-22",
    title: "Hariye Giyechi",
    artistId: "artist-8",
    artist: "Arnob",
    year: 2005,
    description: "Nostalgic Bengali music.",
    songIds: ["song-22"],
    c1: "#121827",
    c2: "#60a5fa",
  },

  {
    id: "album-23",
    title: "Tomar Jonno",
    artistId: "artist-8",
    artist: "Arnob",
    year: 2005,
    description: "Soft and intimate Bengali melodies.",
    songIds: ["song-23"],
    c1: "#1b1620",
    c2: "#c084fc",
  },

  {
    id: "album-24",
    title: "Chiltey Roud",
    artistId: "artist-8",
    artist: "Arnob",
    year: 2005,
    description: "Warm acoustic Bengali music.",
    songIds: ["song-24"],
    c1: "#20190f",
    c2: "#fbbf24",
  },

  {
    id: "album-25",
    title: "Ekla Cholo Re",
    artistId: "artist-9",
    artist: "Shreya Ghoshal",
    year: 2010,
    description: "A soulful rendition of a timeless Bengali classic.",
    songIds: ["song-25"],
    c1: "#21170f",
    c2: "#f59e0b",
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

  {
    id: "artist-3",
    name: "Arijit Singh",
    bio: "One of India's most celebrated playback singers, known for soulful romantic melodies.",
    genres: ["Bengali", "Bollywood", "Romantic"],
    c1: "#20141f",
    c2: "#ec4899",
  },

  {
    id: "artist-4",
    name: "Arindom",
    bio: "Bengali singer and composer known for contemporary romantic music.",
    genres: ["Bengali", "Romantic"],
    c1: "#171827",
    c2: "#60a5fa",
  },

  {
    id: "artist-5",
    name: "Iman Chakraborty",
    bio: "Acclaimed Bengali singer known for powerful and emotional vocals.",
    genres: ["Bengali", "Folk", "Romantic"],
    c1: "#1b1410",
    c2: "#f59e0b",
  },

  {
    id: "artist-6",
    name: "Anupam Roy",
    bio: "Bengali singer-songwriter and composer known for contemporary and deeply emotional music.",
    genres: ["Bengali", "Indie", "Romantic"],
    c1: "#171717",
    c2: "#94a3b8",
  },

  {
    id: "artist-7",
    name: "Rupam Islam",
    bio: "Bengali singer-songwriter known for powerful rock and alternative music.",
    genres: ["Bengali Rock", "Rock"],
    c1: "#111111",
    c2: "#ef4444",
  },

  {
    id: "artist-8",
    name: "Arnob",
    bio: "Bangladeshi singer-songwriter known for intimate acoustic and alternative Bengali music.",
    genres: ["Bengali", "Acoustic", "Alternative"],
    c1: "#102018",
    c2: "#34d399",
  },

  {
    id: "artist-9",
    name: "Shreya Ghoshal",
    bio: "Indian playback singer celebrated for her versatile and expressive vocals.",
    genres: ["Bengali", "Bollywood", "Classical"],
    c1: "#21170f",
    c2: "#f59e0b",
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
    id: "bengali-romantic",
    name: "Bengali Romantic",
    description: "Modern Bengali love songs and soulful melodies.",
    songIds: [
      "song-6",
      "song-7",
      "song-8",
      "song-9",
      "song-10",
      "song-11",
      "song-12",
      "song-13",
    ],
    c1: "#20141f",
    c2: "#ec4899",
  },

  {
    id: "anupam-roy-essentials",
    name: "Anupam Roy Essentials",
    description: "A collection of memorable songs by Anupam Roy.",
    songIds: [
      "song-11",
      "song-14",
      "song-15",
      "song-16",
      "song-17",
      "song-18",
      "song-19",
    ],
    c1: "#171717",
    c2: "#94a3b8",
  },

  {
    id: "arnob-classics",
    name: "Arnob Classics",
    description: "Soft Bengali melodies for quiet nights.",
    songIds: [
      "song-21",
      "song-22",
      "song-23",
      "song-24",
    ],
    c1: "#102018",
    c2: "#34d399",
  },

  {
    id: "midnight-memories",
    name: "Midnight Memories",
    description: "Bollywood and Bengali melodies for late-night listening.",
    songIds: [
      "song-2",
      "song-6",
      "song-11",
      "song-16",
      "song-21",
      "song-23",
    ],
    c1: "#171020",
    c2: "#9b5cff",
  },

  {
    id: "bollywood-romance",
    name: "Bollywood Romance",
    description: "Nostalgic Bollywood love songs.",
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

  {
    id: "bengali-nostalgia",
    name: "Bengali Nostalgia",
    description: "Timeless Bengali songs from different generations.",
    songIds: [
      "song-11",
      "song-16",
      "song-20",
      "song-21",
      "song-22",
      "song-23",
      "song-24",
    ],
    c1: "#151827",
    c2: "#818cf8",
  },

  {
    id: "late-night-melodies",
    name: "Late Night Melodies",
    description: "Slow, emotional and atmospheric songs.",
    songIds: [
      "song-3",
      "song-5",
      "song-9",
      "song-11",
      "song-17",
      "song-22",
      "song-25",
    ],
    c1: "#111827",
    c2: "#c084fc",
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

export const getSongs = (
  ids: string[]
): Song[] =>
  ids
    .map(getSongById)
    .filter(
      (song): song is Song =>
        Boolean(song)
    );

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

/* ───────────────────────────────────────────────────────────
   RELATED ARTISTS
─────────────────────────────────────────────────────────── */

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
};