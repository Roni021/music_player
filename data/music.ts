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


  {
    id: "song-26",
    title: "Moner Manush",
    artistId: "artist-10",
    artist: "Lalon / Various Artists",
    albumId: "album-26",
    album: "Moner Manush",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/moner-manush.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-27",
    title: "Amar Bhindeshi Tara",
    artistId: "artist-11",
    artist: "Chandril Bhattacharya / Chandra Bindu",
    albumId: "album-27",
    album: "Amar Bhindeshi Tara",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/amar-bhindeshi-tara.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-28",
    title: "Tumi Ashbe Bole",
    artistId: "artist-7",
    artist: "Rupam Islam",
    albumId: "album-28",
    album: "Tumi Ashbe Bole",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/tumi-ashbe-bole.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-29",
    title: "Ekhon Onek Raat",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-29",
    album: "Ekhon Onek Raat",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ekhon-onek-raat.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-30",
    title: "Pherari Mon",
    artistId: "artist-9",
    artist: "Shreya Ghoshal",
    albumId: "album-30",
    album: "Pherari Mon",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/pherari-mon.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-31",
    title: "Ami Tomar Kache",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-31",
    album: "Ami Tomar Kache",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ami-tomar-kache.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-32",
    title: "Abar Phire Ele",
    artistId: "artist-3",
    artist: "Arijit Singh",
    albumId: "album-32",
    album: "Abar Phire Ele",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/abar-phire-ele.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-33",
    title: "Jaani Dekha Hobe",
    artistId: "artist-7",
    artist: "Rupam Islam",
    albumId: "album-33",
    album: "Jaani Dekha Hobe",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/jaani-dekha-hobe.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-34",
    title: "Shei Tumi Keno Eto Ochena Hole",
    artistId: "artist-12",
    artist: "LRB",
    albumId: "album-34",
    album: "Shei Tumi Keno Eto Ochena Hole",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/shei-tumi-keno-eto-ochena-hole.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-35",
    title: "Neel Rong Chilo Bhishon Priyo",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-35",
    album: "Neel Rong Chilo Bhishon Priyo",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/neel-rong-chilo-bhishon-priyo.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-36",
    title: "Bhalo Theko",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-36",
    album: "Bhalo Theko",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/bhalo-theko.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-37",
    title: "Keno Emon Hoy",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-37",
    album: "Keno Emon Hoy",
    genre: "Bengali Sad",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/keno-emon-hoy.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-38",
    title: "Hasnuhana",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-38",
    album: "Hasnuhana",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/hasnuhana.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-39",
    title: "Ekla Ghor",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-39",
    album: "Ekla Ghor",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ekla-ghor.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-40",
    title: "Aro Ekbar",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-40",
    album: "Aro Ekbar",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/aro-ekbar.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-41",
    title: "Coffee Houser Shei Adda Ta",
    artistId: "artist-14",
    artist: "Manna Dey",
    albumId: "album-41",
    album: "Coffee Houser Shei Adda Ta",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/coffee-houser-shei-adda-ta.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-42",
    title: "Kotoi Rongo Dekhi Duniyay",
    artistId: "artist-14",
    artist: "Manna Dey",
    albumId: "album-42",
    album: "Kotoi Rongo Dekhi Duniyay",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/kotoi-rongo-dekhi-duniyay.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-43",
    title: "Jodi Kagoje Lekho Naam",
    artistId: "artist-14",
    artist: "Manna Dey",
    albumId: "album-43",
    album: "Jodi Kagoje Lekho Naam",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/jodi-kagoje-lekho-naam.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-44",
    title: "Ei Poth Jodi Na Shesh Hoy",
    artistId: "artist-15",
    artist: "Hemanta Mukherjee & Sandhya Mukherjee",
    albumId: "album-44",
    album: "Ei Poth Jodi Na Shesh Hoy",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ei-poth-jodi-na-shesh-hoy.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-45",
    title: "Aaj Dujonar Duti Poth",
    artistId: "artist-15",
    artist: "Hemanta Mukherjee & Sandhya Mukherjee",
    albumId: "album-45",
    album: "Aaj Dujonar Duti Poth",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/aaj-dujonar-duti-poth.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-46",
    title: "Ei Raat Tomar Amar",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    albumId: "album-46",
    album: "Ei Raat Tomar Amar",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ei-raat-tomar-amar.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-47",
    title: "Amay Proshno Kore Neel Dhrubatara",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    albumId: "album-47",
    album: "Amay Proshno Kore Neel Dhrubatara",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/amay-proshno-kore-neel-dhrubatara.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-48",
    title: "Ami Dur Hote Tomarei Dekhechi",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    albumId: "album-48",
    album: "Ami Dur Hote Tomarei Dekhechi",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ami-dur-hote-tomarei-dekhechi.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-49",
    title: "Mone Rekho",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    albumId: "album-49",
    album: "Mone Rekho",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/mone-rekho.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-50",
    title: "Tumi Robe Nirobe",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    albumId: "album-50",
    album: "Tumi Robe Nirobe",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/tumi-robe-nirobe.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-51",
    title: "Shono Go Dakhin Hawa",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    albumId: "album-51",
    album: "Shono Go Dakhin Hawa",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/shono-go-dakhin-hawa.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-52",
    title: "Ogo Bodhu Sundari",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    albumId: "album-52",
    album: "Ogo Bodhu Sundari",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ogo-bodhu-sundari.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-53",
    title: "Aaj Shob Kichhu Bhule Gechi",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    albumId: "album-53",
    album: "Aaj Shob Kichhu Bhule Gechi",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/aaj-shob-kichhu-bhule-gechi.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-54",
    title: "Sei Raate Raat Chhilo Purnima",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    albumId: "album-54",
    album: "Sei Raate Raat Chhilo Purnima",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/sei-raate-raat-chhilo-purnima.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-55",
    title: "Aaj Ei Dintake",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    albumId: "album-55",
    album: "Aaj Ei Dintake",
    genre: "Bengali Classic",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/aaj-ei-dintake.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-56",
    title: "Amaro Porano Jaha Chay",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-56",
    album: "Amaro Porano Jaha Chay",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/amaro-porano-jaha-chay.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-57",
    title: "Tomar Holo Shuru",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-57",
    album: "Tomar Holo Shuru",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/tomar-holo-shuru.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-58",
    title: "Tumi Robe Nirobe",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-58",
    album: "Tumi Robe Nirobe",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/tumi-robe-nirobe.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-59",
    title: "Majhe Majhe Tobo Dekha Pai",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-59",
    album: "Majhe Majhe Tobo Dekha Pai",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/majhe-majhe-tobo-dekha-pai.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-60",
    title: "Amar Hiyar Majhe",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-60",
    album: "Amar Hiyar Majhe",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/amar-hiyar-majhe.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-61",
    title: "Sokhi Bhabona Kahare Bole",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-61",
    album: "Sokhi Bhabona Kahare Bole",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/sokhi-bhabona-kahare-bole.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-62",
    title: "Ami Chini Go Chini",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-62",
    album: "Ami Chini Go Chini",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ami-chini-go-chini.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-63",
    title: "Bhalobashi Bhalobashi",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-63",
    album: "Bhalobashi Bhalobashi",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/bhalobashi-bhalobashi.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-64",
    title: "Jodi Tare Nai Chini Go",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-64",
    album: "Jodi Tare Nai Chini Go",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/jodi-tare-nai-chini-go.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-65",
    title: "Mone Ki Dwidha Rekhe Gele Chole",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-65",
    album: "Mone Ki Dwidha Rekhe Gele Chole",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/mone-ki-dwidha-rekhe-gele-chole.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-66",
    title: "Aguner Poroshmoni",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-66",
    album: "Aguner Poroshmoni",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/aguner-poroshmoni.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-67",
    title: "Purano Shei Diner Kotha",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-67",
    album: "Purano Shei Diner Kotha",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/purano-shei-diner-kotha.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-68",
    title: "Ekla Cholo Re",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-68",
    album: "Ekla Cholo Re",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ekla-cholo-re.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-69",
    title: "Amar Shonar Bangla",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-69",
    album: "Amar Shonar Bangla",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/amar-shonar-bangla.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-70",
    title: "Akash Bhora Surjo Tara",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-70",
    album: "Akash Bhora Surjo Tara",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/akash-bhora-surjo-tara.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-71",
    title: "Bhalobasha Tarpor",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-71",
    album: "Bhalobasha Tarpor",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/bhalobasha-tarpor.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-72",
    title: "Aami Aar Amar Guitar",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-72",
    album: "Aami Aar Amar Guitar",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/aami-aar-amar-guitar.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-73",
    title: "Bhoot Ar Bhobishyot",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-73",
    album: "Bhoot Ar Bhobishyot",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/bhoot-ar-bhobishyot.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-74",
    title: "Abar Bochhor Kuri Pore",
    artistId: "artist-19",
    artist: "Cactus",
    albumId: "album-74",
    album: "Abar Bochhor Kuri Pore",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/abar-bochhor-kuri-pore.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-75",
    title: "Halud Pakhi",
    artistId: "artist-19",
    artist: "Cactus",
    albumId: "album-75",
    album: "Halud Pakhi",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/halud-pakhi.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-76",
    title: "Chandrabindu",
    artistId: "artist-20",
    artist: "Chandra Bindu",
    albumId: "album-76",
    album: "Chandrabindu",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/chandrabindu.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-77",
    title: "Gaan Bhalobeshe Gaan",
    artistId: "artist-20",
    artist: "Chandra Bindu",
    albumId: "album-77",
    album: "Gaan Bhalobeshe Gaan",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/gaan-bhalobeshe-gaan.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-78",
    title: "Duniya Ta Choto Hote Hote",
    artistId: "artist-20",
    artist: "Chandra Bindu",
    albumId: "album-78",
    album: "Duniya Ta Choto Hote Hote",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/duniya-ta-choto-hote-hote.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-79",
    title: "Bhalo Achhi Bhalo Theko",
    artistId: "artist-19",
    artist: "Cactus",
    albumId: "album-79",
    album: "Bhalo Achhi Bhalo Theko",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/bhalo-achhi-bhalo-theko.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-80",
    title: "Noyon Tomare",
    artistId: "artist-13",
    artist: "Fossils",
    albumId: "album-80",
    album: "Noyon Tomare",
    genre: "Bengali Rock",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/noyon-tomare.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-81",
    title: "Keno Piriti Barailare Bondhu",
    artistId: "artist-21",
    artist: "Folk",
    albumId: "album-81",
    album: "Keno Piriti Barailare Bondhu",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/keno-piriti-barailare-bondhu.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-82",
    title: "Moner Manush",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-82",
    album: "Moner Manush",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/moner-manush.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-83",
    title: "Shob Loke Koy Lalon Ki Jaat",
    artistId: "artist-22",
    artist: "Lalon",
    albumId: "album-83",
    album: "Shob Loke Koy Lalon Ki Jaat",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/shob-loke-koy-lalon-ki-jaat.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-84",
    title: "Khachar Bhitor Ochin Pakhi",
    artistId: "artist-22",
    artist: "Lalon",
    albumId: "album-84",
    album: "Khachar Bhitor Ochin Pakhi",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/khachar-bhitor-ochin-pakhi.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-85",
    title: "Milone Hobe Koto Dine",
    artistId: "artist-22",
    artist: "Lalon",
    albumId: "album-85",
    album: "Milone Hobe Koto Dine",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/milone-hobe-koto-dine.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-86",
    title: "Dhonno Dhonno Boli Tare",
    artistId: "artist-21",
    artist: "Folk",
    albumId: "album-86",
    album: "Dhonno Dhonno Boli Tare",
    genre: "Bengali Folk",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/dhonno-dhonno-boli-tare.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-87",
    title: "Pagla Hawar Badol Dine",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-87",
    album: "Pagla Hawar Badol Dine",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/pagla-hawar-badol-dine.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-88",
    title: "Rangiye Diye Jao",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-88",
    album: "Rangiye Diye Jao",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/rangiye-diye-jao.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-89",
    title: "Gram Chhara Oi Ranga Matir Poth",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-89",
    album: "Gram Chhara Oi Ranga Matir Poth",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/gram-chhara-oi-ranga-matir-poth.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-90",
    title: "Pran Chay Chokkhu Na Chay",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    albumId: "album-90",
    album: "Pran Chay Chokkhu Na Chay",
    genre: "Rabindra Sangeet",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/pran-chay-chokkhu-na-chay.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-91",
    title: "Jao Pakhi",
    artistId: "artist-6",
    artist: "Anupam Roy",
    albumId: "album-91",
    album: "Jao Pakhi",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/jao-pakhi.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-92",
    title: "Kolkata Emoni Ekti Shohor",
    artistId: "artist-23",
    artist: "Various Artists",
    albumId: "album-92",
    album: "Kolkata Emoni Ekti Shohor",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/kolkata-emoni-ekti-shohor.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-93",
    title: "Ranjana Ami Ar Ashbo Na",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-93",
    album: "Ranjana Ami Ar Ashbo Na",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ranjana-ami-ar-ashbo-na.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-94",
    title: "2441139",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-94",
    album: "2441139",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/2441139.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-95",
    title: "Mary Ann",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-95",
    album: "Mary Ann",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/mary-ann.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-96",
    title: "Bela Bose",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-96",
    album: "Bela Bose",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/bela-bose.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "song-97",
    title: "Coffee Houser Shei Adda Ta",
    artistId: "artist-14",
    artist: "Manna Dey",
    albumId: "album-97",
    album: "Coffee Houser Shei Adda Ta",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/coffee-houser-shei-adda-ta.mp3",
    f1: 220,
    f2: 330,
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "song-98",
    title: "Ami Ashbo Phire",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-98",
    album: "Ami Ashbo Phire",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ami-ashbo-phire.mp3",
    f1: 220,
    f2: 330,
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "song-99",
    title: "Cholo Bodle Jai",
    artistId: "artist-12",
    artist: "LRB",
    albumId: "album-99",
    album: "Cholo Bodle Jai",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/cholo-bodle-jai.mp3",
    f1: 220,
    f2: 330,
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "song-100",
    title: "Ghum Ghum Ei Chokhe",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    albumId: "album-100",
    album: "Ghum Ghum Ei Chokhe",
    genre: "Bengali Movie",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/ghum-ghum-ei-chokhe.mp3",
    f1: 220,
    f2: 330,
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "song-101",
    title: "Nilanjana",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    albumId: "album-101",
    album: "Nilanjana",
    genre: "Bengali",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/nilanjana.mp3",
    f1: 220,
    f2: 330,
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "song-102",
    title: "Briddhashram",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    albumId: "album-102",
    album: "Briddhashram",
    genre: "Bengali",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/briddhashram.mp3",
    f1: 220,
    f2: 330,
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "song-103",
    title: "Keu Na Januk",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    albumId: "album-103",
    album: "Keu Na Januk",
    genre: "Bengali",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/keu-na-januk.mp3",
    f1: 220,
    f2: 330,
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "song-104",
    title: "Anjan",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-104",
    album: "Anjan",
    genre: "Bengali",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/anjan.mp3",
    f1: 220,
    f2: 330,
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "song-105",
    title: "Jibon Mane Je",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    albumId: "album-105",
    album: "Jibon Mane Je",
    genre: "Bengali",
    year: 0, // Add verified release year when available.
    duration: 0, // Audio metadata can provide the actual duration.
    audioSrc: "/audio/jibon-mane-je.mp3",
    f1: 220,
    f2: 330,
    c1: "#111111",
    c2: "#ef4444",
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


  {
    id: "album-26",
    title: "Moner Manush",
    artistId: "artist-10",
    artist: "Lalon / Various Artists",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-26"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-27",
    title: "Amar Bhindeshi Tara",
    artistId: "artist-11",
    artist: "Chandril Bhattacharya / Chandra Bindu",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-27"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-28",
    title: "Tumi Ashbe Bole",
    artistId: "artist-7",
    artist: "Rupam Islam",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-28"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-29",
    title: "Ekhon Onek Raat",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-29"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-30",
    title: "Pherari Mon",
    artistId: "artist-9",
    artist: "Shreya Ghoshal",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-30"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-31",
    title: "Ami Tomar Kache",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-31"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-32",
    title: "Abar Phire Ele",
    artistId: "artist-3",
    artist: "Arijit Singh",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-32"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-33",
    title: "Jaani Dekha Hobe",
    artistId: "artist-7",
    artist: "Rupam Islam",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-33"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-34",
    title: "Shei Tumi Keno Eto Ochena Hole",
    artistId: "artist-12",
    artist: "LRB",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-34"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-35",
    title: "Neel Rong Chilo Bhishon Priyo",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-35"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-36",
    title: "Bhalo Theko",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-36"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-37",
    title: "Keno Emon Hoy",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-37"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-38",
    title: "Hasnuhana",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-38"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-39",
    title: "Ekla Ghor",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-39"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-40",
    title: "Aro Ekbar",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-40"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-41",
    title: "Coffee Houser Shei Adda Ta",
    artistId: "artist-14",
    artist: "Manna Dey",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-41"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-42",
    title: "Kotoi Rongo Dekhi Duniyay",
    artistId: "artist-14",
    artist: "Manna Dey",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-42"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-43",
    title: "Jodi Kagoje Lekho Naam",
    artistId: "artist-14",
    artist: "Manna Dey",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-43"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-44",
    title: "Ei Poth Jodi Na Shesh Hoy",
    artistId: "artist-15",
    artist: "Hemanta Mukherjee & Sandhya Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-44"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-45",
    title: "Aaj Dujonar Duti Poth",
    artistId: "artist-15",
    artist: "Hemanta Mukherjee & Sandhya Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-45"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-46",
    title: "Ei Raat Tomar Amar",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-46"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-47",
    title: "Amay Proshno Kore Neel Dhrubatara",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-47"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-48",
    title: "Ami Dur Hote Tomarei Dekhechi",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-48"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-49",
    title: "Mone Rekho",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-49"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-50",
    title: "Tumi Robe Nirobe",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-50"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-51",
    title: "Shono Go Dakhin Hawa",
    artistId: "artist-16",
    artist: "Hemanta Mukherjee",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-51"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-52",
    title: "Ogo Bodhu Sundari",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-52"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-53",
    title: "Aaj Shob Kichhu Bhule Gechi",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-53"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-54",
    title: "Sei Raate Raat Chhilo Purnima",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-54"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-55",
    title: "Aaj Ei Dintake",
    artistId: "artist-17",
    artist: "Kishore Kumar",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-55"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-56",
    title: "Amaro Porano Jaha Chay",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-56"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-57",
    title: "Tomar Holo Shuru",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-57"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-58",
    title: "Tumi Robe Nirobe",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-58"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-59",
    title: "Majhe Majhe Tobo Dekha Pai",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-59"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-60",
    title: "Amar Hiyar Majhe",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-60"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-61",
    title: "Sokhi Bhabona Kahare Bole",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-61"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-62",
    title: "Ami Chini Go Chini",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-62"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-63",
    title: "Bhalobashi Bhalobashi",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-63"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-64",
    title: "Jodi Tare Nai Chini Go",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-64"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-65",
    title: "Mone Ki Dwidha Rekhe Gele Chole",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-65"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-66",
    title: "Aguner Poroshmoni",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-66"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-67",
    title: "Purano Shei Diner Kotha",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-67"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-68",
    title: "Ekla Cholo Re",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-68"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-69",
    title: "Amar Shonar Bangla",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-69"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-70",
    title: "Akash Bhora Surjo Tara",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-70"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-71",
    title: "Bhalobasha Tarpor",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-71"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-72",
    title: "Aami Aar Amar Guitar",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-72"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-73",
    title: "Bhoot Ar Bhobishyot",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-73"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-74",
    title: "Abar Bochhor Kuri Pore",
    artistId: "artist-19",
    artist: "Cactus",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-74"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-75",
    title: "Halud Pakhi",
    artistId: "artist-19",
    artist: "Cactus",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-75"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-76",
    title: "Chandrabindu",
    artistId: "artist-20",
    artist: "Chandra Bindu",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-76"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-77",
    title: "Gaan Bhalobeshe Gaan",
    artistId: "artist-20",
    artist: "Chandra Bindu",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-77"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-78",
    title: "Duniya Ta Choto Hote Hote",
    artistId: "artist-20",
    artist: "Chandra Bindu",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-78"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-79",
    title: "Bhalo Achhi Bhalo Theko",
    artistId: "artist-19",
    artist: "Cactus",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-79"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-80",
    title: "Noyon Tomare",
    artistId: "artist-13",
    artist: "Fossils",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-80"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-81",
    title: "Keno Piriti Barailare Bondhu",
    artistId: "artist-21",
    artist: "Folk",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-81"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-82",
    title: "Moner Manush",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-82"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-83",
    title: "Shob Loke Koy Lalon Ki Jaat",
    artistId: "artist-22",
    artist: "Lalon",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-83"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-84",
    title: "Khachar Bhitor Ochin Pakhi",
    artistId: "artist-22",
    artist: "Lalon",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-84"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-85",
    title: "Milone Hobe Koto Dine",
    artistId: "artist-22",
    artist: "Lalon",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-85"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-86",
    title: "Dhonno Dhonno Boli Tare",
    artistId: "artist-21",
    artist: "Folk",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-86"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-87",
    title: "Pagla Hawar Badol Dine",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-87"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-88",
    title: "Rangiye Diye Jao",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-88"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-89",
    title: "Gram Chhara Oi Ranga Matir Poth",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-89"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-90",
    title: "Pran Chay Chokkhu Na Chay",
    artistId: "artist-18",
    artist: "Rabindra Sangeet",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-90"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-91",
    title: "Jao Pakhi",
    artistId: "artist-6",
    artist: "Anupam Roy",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-91"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-92",
    title: "Kolkata Emoni Ekti Shohor",
    artistId: "artist-23",
    artist: "Various Artists",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-92"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-93",
    title: "Ranjana Ami Ar Ashbo Na",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-93"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-94",
    title: "2441139",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-94"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-95",
    title: "Mary Ann",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-95"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-96",
    title: "Bela Bose",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-96"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "album-97",
    title: "Coffee Houser Shei Adda Ta",
    artistId: "artist-14",
    artist: "Manna Dey",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-97"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "album-98",
    title: "Ami Ashbo Phire",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-98"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "album-99",
    title: "Cholo Bodle Jai",
    artistId: "artist-12",
    artist: "LRB",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-99"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "album-100",
    title: "Ghum Ghum Ei Chokhe",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-100"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "album-101",
    title: "Nilanjana",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-101"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "album-102",
    title: "Briddhashram",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-102"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "album-103",
    title: "Keu Na Januk",
    artistId: "artist-25",
    artist: "Nachiketa Chakraborty",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-103"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "album-104",
    title: "Anjan",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-104"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "album-105",
    title: "Jibon Mane Je",
    artistId: "artist-24",
    artist: "Anjan Dutt",
    year: 0,
    description: "Bengali catalogue entry. Update album details when verified.",
    songIds: ["song-105"],
    c1: "#111111",
    c2: "#ef4444",
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


  {
    id: "artist-10",
    name: "Lalon / Various Artists",
    bio: "Lalon / Various Artists — Bengali music catalogue artist.",
    genres: ["Bengali Folk"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "artist-11",
    name: "Chandril Bhattacharya / Chandra Bindu",
    bio: "Chandril Bhattacharya / Chandra Bindu — Bengali music catalogue artist.",
    genres: ["Bengali Sad"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "artist-12",
    name: "LRB",
    bio: "LRB — Bengali music catalogue artist.",
    genres: ["Bengali Movie", "Bengali Sad"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "artist-13",
    name: "Fossils",
    bio: "Fossils — Bengali music catalogue artist.",
    genres: ["Bengali Rock", "Bengali Sad"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "artist-14",
    name: "Manna Dey",
    bio: "Manna Dey — Bengali music catalogue artist.",
    genres: ["Bengali Classic", "Bengali Movie"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "artist-15",
    name: "Hemanta Mukherjee & Sandhya Mukherjee",
    bio: "Hemanta Mukherjee & Sandhya Mukherjee — Bengali music catalogue artist.",
    genres: ["Bengali Classic"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "artist-16",
    name: "Hemanta Mukherjee",
    bio: "Hemanta Mukherjee — Bengali music catalogue artist.",
    genres: ["Bengali Classic", "Rabindra Sangeet"],
    c1: "#18151b",
    c2: "#c084fc",
  },
  {
    id: "artist-17",
    name: "Kishore Kumar",
    bio: "Kishore Kumar — Bengali music catalogue artist.",
    genres: ["Bengali Classic"],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "artist-18",
    name: "Rabindra Sangeet",
    bio: "Rabindra Sangeet — Bengali music catalogue artist.",
    genres: ["Rabindra Sangeet"],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "artist-19",
    name: "Cactus",
    bio: "Cactus — Bengali music catalogue artist.",
    genres: ["Bengali Rock"],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "artist-20",
    name: "Chandra Bindu",
    bio: "Chandra Bindu — Bengali music catalogue artist.",
    genres: ["Bengali Rock"],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "artist-21",
    name: "Folk",
    bio: "Folk — Bengali music catalogue artist.",
    genres: ["Bengali Folk"],
    c1: "#111827",
    c2: "#a78bfa",
  },
  {
    id: "artist-22",
    name: "Lalon",
    bio: "Lalon — Bengali music catalogue artist.",
    genres: ["Bengali Folk"],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "artist-23",
    name: "Various Artists",
    bio: "Various Artists — Bengali music catalogue artist.",
    genres: ["Bengali Movie"],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "artist-24",
    name: "Anjan Dutt",
    bio: "Anjan Dutt — Bengali music catalogue artist.",
    genres: ["Bengali", "Bengali Movie"],
    c1: "#171717",
    c2: "#94a3b8",
  },
  {
    id: "artist-25",
    name: "Nachiketa Chakraborty",
    bio: "Nachiketa Chakraborty — Bengali music catalogue artist.",
    genres: ["Bengali", "Bengali Movie"],
    c1: "#18151b",
    c2: "#c084fc",
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


  {
    id: "bengali-sad",
    name: "Bengali Emotional / Sad",
    description: "Heartfelt Bengali songs for reflective nights.",
    songIds: [
      "song-27",
      "song-28",
      "song-29",
      "song-30",
      "song-31",
      "song-32",
      "song-33",
      "song-34",
      "song-35",
      "song-36",
      "song-37"
],
    c1: "#20141f",
    c2: "#ec4899",
  },
  {
    id: "bengali-classics",
    name: "Classic Bengali Melodies",
    description: "Timeless Bengali songs from legendary voices.",
    songIds: [
      "song-41",
      "song-42",
      "song-43",
      "song-44",
      "song-45",
      "song-46",
      "song-47",
      "song-48",
      "song-49",
      "song-51",
      "song-52",
      "song-53",
      "song-54",
      "song-55"
],
    c1: "#171827",
    c2: "#60a5fa",
  },
  {
    id: "rabindra-sangeet",
    name: "Rabindra Sangeet",
    description: "A collection of timeless Rabindra Sangeet.",
    songIds: [
      "song-50",
      "song-56",
      "song-57",
      "song-58",
      "song-59",
      "song-60",
      "song-61",
      "song-62",
      "song-63",
      "song-64",
      "song-65",
      "song-66",
      "song-67",
      "song-68",
      "song-69",
      "song-70",
      "song-87",
      "song-88",
      "song-89",
      "song-90"
],
    c1: "#102018",
    c2: "#34d399",
  },
  {
    id: "bengali-rock-band",
    name: "Bengali Rock / Band",
    description: "Memorable Bengali rock and band favourites.",
    songIds: [
      "song-38",
      "song-39",
      "song-40",
      "song-71",
      "song-72",
      "song-73",
      "song-74",
      "song-75",
      "song-76",
      "song-77",
      "song-78",
      "song-79",
      "song-80"
],
    c1: "#111111",
    c2: "#ef4444",
  },
  {
    id: "bengali-folk-baul",
    name: "Bengali Folk / Baul",
    description: "Folk and Baul songs rooted in Bengali tradition.",
    songIds: [
      "song-26",
      "song-81",
      "song-82",
      "song-83",
      "song-84",
      "song-85",
      "song-86"
],
    c1: "#20190f",
    c2: "#fbbf24",
  },
  {
    id: "bengali-movie-favourites",
    name: "Bengali Movie Favourites",
    description: "Favourite songs from Bengali cinema.",
    songIds: [
      "song-91",
      "song-92",
      "song-93",
      "song-94",
      "song-95",
      "song-96",
      "song-97",
      "song-98",
      "song-99",
      "song-100"
],
    c1: "#21170f",
    c2: "#f59e0b",
  },
  {
    id: "more-bengali-must-listen",
    name: "More Bengali Must-Listen",
    description: "More essential Bengali songs to explore.",
    songIds: [
      "song-101",
      "song-102",
      "song-103",
      "song-104",
      "song-105"
],
    c1: "#18151b",
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
