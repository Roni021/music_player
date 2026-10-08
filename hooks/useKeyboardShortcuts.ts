"use client";

import { useEffect } from "react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

const isTyping = (target: EventTarget | null): boolean => {
  const element = target as HTMLElement | null;
  if (!element) return false;
  const tag = element.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || element.isContentEditable;
};

/**
 * Space play/pause · ←/→ seek · M mute · L like · N next · P previous · Esc close panels.
 * Shortcuts never fire while the user is typing.
 */
export function useKeyboardShortcuts(): void {
  const player = useMusicPlayer();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        player.closeQueuePanel();
        player.setExpanded(false);
        return;
      }
      if (isTyping(event.target) || event.metaKey || event.ctrlKey || event.altKey) return;

      switch (event.key.toLowerCase()) {
        case " ":
          event.preventDefault();
          player.togglePlay();
          break;
        case "arrowleft":
          event.preventDefault();
          player.seekBy(-5);
          break;
        case "arrowright":
          event.preventDefault();
          player.seekBy(5);
          break;
        case "m":
          player.toggleMute();
          break;
        case "l":
          if (player.currentSong) player.toggleLike(player.currentSong.id);
          break;
        case "n":
          player.next();
          break;
        case "p":
          player.previous();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [player]);
}
