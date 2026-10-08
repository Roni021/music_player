"use client";

import { MiniPlayer } from "@/components/player/MiniPlayer";
import { NowPlaying } from "@/components/player/NowPlaying";
import { Queue } from "@/components/player/Queue";
import { ToastStack } from "@/components/ui/Toast";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";

/** Composes the persistent player surfaces and registers the global shortcuts. */
export function MusicPlayer() {
  const { error } = useMusicPlayer();
  useKeyboardShortcuts();

  return (
    <>
      <NowPlaying />
      <Queue />
      <MiniPlayer />
      <ToastStack />
      {error && (
        <p className="sr-only" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
