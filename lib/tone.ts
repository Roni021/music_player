import type { Song } from "@/types/music";

const cache = new Map<string, string>();

/**
 * Renders a track to a WAV object URL in memory. Used when the matching file in
 * public/audio is absent, so the player always has something to play.
 */
export function synthesise(song: Song): string {
  const cached = cache.get(song.id);
  if (cached) return cached;

  const sampleRate = 22050;
  const frames = Math.floor(sampleRate * song.duration);
  const buffer = new ArrayBuffer(44 + frames * 2);
  const view = new DataView(buffer);
  const ascii = (offset: number, text: string) => {
    for (let i = 0; i < text.length; i += 1) view.setUint8(offset + i, text.charCodeAt(i));
  };

  ascii(0, "RIFF");
  view.setUint32(4, 36 + frames * 2, true);
  ascii(8, "WAVE");
  ascii(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  ascii(36, "data");
  view.setUint32(40, frames * 2, true);

  const TAU = Math.PI * 2;
  for (let i = 0; i < frames; i += 1) {
    const t = i / sampleRate;
    const envelope = Math.min(1, t / 0.25, (song.duration - t) / 0.6);
    const tremolo = 0.86 + 0.14 * Math.sin(TAU * 0.6 * t);
    const beat = t % 0.5;
    const kick = Math.sin(TAU * 52 * beat) * Math.exp(-beat * 26) * 0.3;
    const pad =
      0.6 * Math.sin(TAU * song.f1 * t) +
      0.26 * Math.sin(TAU * song.f2 * t) +
      0.14 * Math.sin(TAU * (song.f1 / 2) * t + 0.4);
    const sample = 0.2 * envelope * tremolo * (pad + kick);
    view.setInt16(44 + i * 2, Math.max(-1, Math.min(1, sample)) * 32767, true);
  }

  const url = URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
  cache.set(song.id, url);
  return url;
}
