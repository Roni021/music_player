"use client";

import { useState } from "react";
import { Trash2, Volume2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Slider } from "@/components/ui/Slider";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { useTheme } from "@/context/ThemeContext";
import { clearStoredData } from "@/hooks/useLocalStorage";
import type { ThemeMode } from "@/types/music";

const MODES: { id: ThemeMode; label: string }[] = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "system", label: "System" }
];

const SHORTCUTS: [string, string][] = [
  ["Space", "Play or pause"],
  ["←  →", "Seek five seconds"],
  ["N", "Next track"],
  ["P", "Previous track"],
  ["M", "Mute or unmute"],
  ["L", "Like the current track"],
  ["Esc", "Close the queue or the full player"]
];

export default function SettingsPage() {
  const { mode, setMode } = useTheme();
  const player = useMusicPlayer();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <div className="page-head">
        <h1>Settings</h1>
        <p>Tune how Midnight Melodies behaves on this device. Every preference stays in this browser.</p>
      </div>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Appearance</h2>
          </div>
        </div>
        <div className="track-list">
          <div className="setting">
            <div className="txt">
              <b>Theme</b>
              <span>Dark, light, or follow your system setting</span>
            </div>
            <div className="segmented" role="group" aria-label="Theme mode">
              {MODES.map((item) => (
                <button key={item.id} type="button" aria-pressed={mode === item.id} onClick={() => setMode(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="setting">
            <div className="txt">
              <b>Reduced motion</b>
              <span>Animations follow your operating system preference automatically</span>
            </div>
            <span className="badge">Automatic</span>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Playback</h2>
          </div>
        </div>
        <div className="track-list">
          <div className="setting">
            <div className="txt">
              <b>Repeat</b>
              <span>Off, repeat the queue, or repeat one track</span>
            </div>
            <button type="button" className="btn subtle" onClick={player.cycleRepeat}>
              {player.repeat === "off" ? "Off" : player.repeat === "all" ? "Queue" : "One track"}
            </button>
          </div>
          <div className="setting">
            <div className="txt">
              <b>Shuffle</b>
              <span>Pick the next track at random</span>
            </div>
            <button
              type="button"
              className="switch"
              role="switch"
              aria-checked={player.shuffle}
              aria-label="Shuffle playback"
              onClick={player.toggleShuffle}
            />
          </div>
          <div className="setting">
            <div className="txt">
              <b>Volume</b>
              <span>Applies immediately and is remembered</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 180 }}>
              <Volume2 size={17} aria-hidden="true" />
              <Slider value={player.muted ? 0 : player.volume} max={1} step={0.01} label="Volume" onChange={player.setVolume} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Audio</h2>
          </div>
        </div>
        <div className="inline-note">
          <span>
            Tracks load from <code>/public/audio</code>. When a file is missing, Midnight Melodies synthesises the track from its
            two frequencies so playback never fails silently — drop real files in with matching names to hear them instead.
          </span>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Keyboard shortcuts</h2>
          </div>
        </div>
        <div className="track-list">
          {SHORTCUTS.map(([keys, description]) => (
            <div className="setting" key={keys}>
              <div className="txt">
                <b>{description}</b>
              </div>
              <kbd>{keys}</kbd>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>Stored data</h2>
          </div>
        </div>
        <div className="track-list">
          <div className="setting">
            <div className="txt">
              <b>Listening history</b>
              <span>{player.recentIds.length} tracks remembered</span>
            </div>
            <button type="button" className="btn subtle" onClick={player.clearHistory}>
              Clear history
            </button>
          </div>
          <div className="setting">
            <div className="txt">
              <b>Liked songs</b>
              <span>{player.likedIds.length} saved</span>
            </div>
            <span className="badge">Local only</span>
          </div>
          <div className="setting">
            <div className="txt">
              <b>Reset everything</b>
              <span>Clears likes, history, volume, shuffle, repeat and theme</span>
            </div>
            <button type="button" className="btn subtle" onClick={() => setConfirmOpen(true)}>
              <Trash2 size={16} />
              Reset
            </button>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <div>
            <h2>About Midnight Melodies</h2>
          </div>
        </div>
        <div className="inline-note">
          <span>
            Midnight Melodies is a demonstration player built with Next.js, TypeScript and the HTML5 Audio API. Cover art is
            generated as inline SVG, playback state lives in React context, and preferences are stored in this browser only —
            there is no account and no server to talk to.
          </span>
        </div>
      </section>

      <Modal open={confirmOpen} title="Reset saved data?" onClose={() => setConfirmOpen(false)}>
        <p className="muted" style={{ maxWidth: "52ch" }}>
          This clears liked songs, listening history, volume, shuffle, repeat and your theme choice from this browser. The
          catalogue itself is untouched.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn"
            onClick={() => {
              player.resetStoredData();
              clearStoredData();
              setConfirmOpen(false);
            }}
          >
            Reset everything
          </button>
          <button type="button" className="btn subtle" onClick={() => setConfirmOpen(false)}>
            Keep my data
          </button>
        </div>
      </Modal>
    </>
  );
}
