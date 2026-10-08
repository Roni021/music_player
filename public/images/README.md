# Images

Cover art and artist portraits are generated as inline SVG at runtime
(`lib/artwork.ts`), so no image files are required.

To use real artwork instead, add files here (for example `album-1.jpg`,
`artist-1.jpg`), add a `cover` field to the entities in `data/music.ts`, and render it in
place of the generated data URI.
