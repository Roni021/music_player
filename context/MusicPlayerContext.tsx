"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode
} from "react";
import { getSongById, songs as catalogue } from "@/data/music";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { songArtwork } from "@/lib/artwork";
import { synthesise } from "@/lib/tone";
import type { RepeatMode, Song, ToastMessage } from "@/types/music";

interface MusicPlayerApi {
  currentSong: Song | null;
  queue: Song[];
  queueIndex: number;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  shuffle: boolean;
  repeat: RepeatMode;
  likedIds: string[];
  recentIds: string[];
  isExpanded: boolean;
  isQueueOpen: boolean;
  toasts: ToastMessage[];
  analyserRef: MutableRefObject<AnalyserNode | null>;
  playSong: (song: Song, context?: Song[]) => void;
  playCollection: (list: Song[], options?: { shuffled?: boolean; label?: string }) => void;
  togglePlay: () => void;
  next: () => void;
  previous: () => void;
  seek: (seconds: number) => void;
  seekBy: (delta: number) => void;
  setVolume: (value: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (index: number) => void;
  clearQueue: () => void;
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
  setExpanded: (value: boolean) => void;
  toggleQueuePanel: () => void;
  closeQueuePanel: () => void;
  notify: (message: string, tone?: ToastMessage["tone"]) => void;
  dismissToast: (id: number) => void;
  clearHistory: () => void;
  resetStoredData: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerApi | null>(null);
let toastSeed = 0;

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [queue, setQueue] = useState<Song[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isExpanded, setExpanded] = useState(false);
  const [isQueueOpen, setQueueOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const [likedIds, setLikedIds] = useLocalStorage<string[]>("mm:liked", []);
  const [recentIds, setRecentIds] = useLocalStorage<string[]>("mm:recent", []);
  const [storedVolume, setStoredVolume, volumeReady] = useLocalStorage<number>("mm:volume", 0.8);
  const [shuffle, setShuffle] = useLocalStorage<boolean>("mm:shuffle", false);
  const [repeat, setRepeat] = useLocalStorage<RepeatMode>("mm:repeat", "all");
  const [lastSongId, setLastSongId, lastReady] = useLocalStorage<string | null>("mm:last-song", null);

  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const stateRef = useRef({ queue, queueIndex, shuffle, repeat });
  stateRef.current = { queue, queueIndex, shuffle, repeat };

  const dismissToast = useCallback((id: number) => setToasts((list) => list.filter((toast) => toast.id !== id)), []);

  const notify = useCallback(
    (message: string, tone: ToastMessage["tone"] = "default") => {
      toastSeed += 1;
      const toast: ToastMessage = { id: toastSeed, message, tone };
      setToasts((list) => [...list.slice(-2), toast]);
      window.setTimeout(() => dismissToast(toast.id), 2800);
    },
    [dismissToast]
  );

  const handleEnded = useCallback(() => {
    // Defined before the player so the hook can call it; the body reads fresh state.
    endedHandlerRef.current();
  }, []);

  const player = useAudioPlayer({ onEnded: handleEnded });
  const { load, play, pause, toggle, seekTo, status } = player;

  /** Connects the element to an analyser once, so the visualiser has real data. */
  const ensureAnalyser = useCallback(() => {
    if (audioContextRef.current) return;
    try {
      const Ctor =
        window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return;
      const context = new Ctor();
      const source = context.createMediaElementSource(player.getAudio());
      const analyser = context.createAnalyser();
      analyser.fftSize = 64;
      analyser.smoothingTimeConstant = 0.78;
      source.connect(analyser);
      analyser.connect(context.destination);
      audioContextRef.current = context;
      analyserRef.current = analyser;
    } catch {
      audioContextRef.current = null;
      analyserRef.current = null;
    }
  }, [player]);

  const startSong = useCallback(
    (song: Song, autoPlay: boolean) => {
      setCurrentSong(song);
      setLastSongId(song.id);
      load(song.audioSrc, synthesise(song), autoPlay, song.duration);

      if (!autoPlay) return;
      ensureAnalyser();
      void audioContextRef.current?.resume();
      setRecentIds((list) => [song.id, ...list.filter((id) => id !== song.id)].slice(0, 12));

      if ("mediaSession" in navigator) {
        try {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: song.title,
            artist: song.artist,
            album: song.album,
            artwork: [{ src: songArtwork(song), sizes: "600x600", type: "image/svg+xml" }]
          });
        } catch {
          /* unsupported browser */
        }
      }
    },
    [ensureAnalyser, load, setLastSongId, setRecentIds]
  );

  const playAt = useCallback(
    (index: number) => {
      const list = stateRef.current.queue;
      const song = list[index];
      if (!song) return;
      setQueueIndex(index);
      startSong(song, true);
    },
    [startSong]
  );

  const next = useCallback(() => {
    const { queue: list, queueIndex: index, shuffle: isShuffle, repeat: mode } = stateRef.current;
    if (!list.length) return;
    if (mode === "one") {
      seekTo(0);
      play();
      return;
    }
    if (isShuffle) {
      playAt(list.length === 1 ? 0 : Math.floor(Math.random() * list.length));
      return;
    }
    const nextIndex = index + 1;
    if (nextIndex >= list.length) {
      if (mode === "all") playAt(0);
      else pause();
      return;
    }
    playAt(nextIndex);
  }, [pause, play, playAt, seekTo]);

  const endedHandlerRef = useRef<() => void>(() => undefined);
  endedHandlerRef.current = next;

  const previous = useCallback(() => {
    const { queue: list, queueIndex: index } = stateRef.current;
    if (!list.length) return;
    if (status.currentTime > 3) {
      seekTo(0);
      return;
    }
    playAt((index - 1 + list.length) % list.length);
  }, [playAt, seekTo, status.currentTime]);

  const playSong = useCallback(
    (song: Song, context?: Song[]) => {
      const list = context && context.length ? context : stateRef.current.queue.length ? stateRef.current.queue : catalogue;
      const index = Math.max(0, list.findIndex((item) => item.id === song.id));
      setQueue(list);
      setQueueIndex(index);
      startSong(list[index] ?? song, true);
    },
    [startSong]
  );

  const playCollection = useCallback(
    (list: Song[], options?: { shuffled?: boolean; label?: string }) => {
      if (!list.length) {
        notify("There is nothing to play here yet.", "error");
        return;
      }
      const ordered = options?.shuffled ? [...list].sort(() => Math.random() - 0.5) : [...list];
      setQueue(ordered);
      setQueueIndex(0);
      startSong(ordered[0], true);
      if (options?.label) notify(options.shuffled ? `Shuffling ${options.label}` : `Playing ${options.label}`);
    },
    [notify, startSong]
  );

  const togglePlay = useCallback(() => {
    if (!currentSong) {
      playCollection(catalogue);
      return;
    }
    ensureAnalyser();
    void audioContextRef.current?.resume();
    toggle();
  }, [currentSong, ensureAnalyser, playCollection, toggle]);

  const addToQueue = useCallback(
    (song: Song) => {
      setQueue((list) => {
        if (!list.length) return [song];
        return [...list.filter((item) => item.id !== song.id), song];
      });
      notify(`${song.title} added to the queue`);
    },
    [notify]
  );

  const removeFromQueue = useCallback((index: number) => {
    setQueue((list) => list.filter((_, i) => i !== index));
    setQueueIndex((current) => (index < current ? current - 1 : current));
  }, []);

  const clearQueue = useCallback(() => {
    setQueue(currentSong ? [currentSong] : []);
    setQueueIndex(0);
  }, [currentSong]);

  const toggleLike = useCallback(
    (id: string) => {
      const song = getSongById(id);
      setLikedIds((list) => {
        const liked = !list.includes(id);
        notify(liked ? `Liked ${song?.title ?? "track"}` : `Removed ${song?.title ?? "track"}`);
        return liked ? [...list, id] : list.filter((item) => item !== id);
      });
    },
    [notify, setLikedIds]
  );

  const isLiked = useCallback((id: string) => likedIds.includes(id), [likedIds]);

  const setVolume = useCallback(
    (value: number) => {
      player.setVolume(value);
      setStoredVolume(value);
    },
    [player, setStoredVolume]
  );

  const toggleShuffle = useCallback(() => {
    setShuffle((value) => {
      notify(!value ? "Shuffle on" : "Shuffle off");
      return !value;
    });
  }, [notify, setShuffle]);

  const cycleRepeat = useCallback(() => {
    setRepeat((mode) => {
      const order: RepeatMode[] = ["off", "all", "one"];
      const nextMode = order[(order.indexOf(mode) + 1) % order.length];
      notify(nextMode === "off" ? "Repeat off" : nextMode === "all" ? "Repeating the queue" : "Repeating this track");
      return nextMode;
    });
  }, [notify, setRepeat]);

  const clearHistory = useCallback(() => {
    setRecentIds([]);
    notify("Listening history cleared");
  }, [notify, setRecentIds]);

  const resetStoredData = useCallback(() => {
    setLikedIds([]);
    setRecentIds([]);
    setStoredVolume(0.8);
    setShuffle(false);
    setRepeat("all");
    setLastSongId(null);
    notify("Saved data cleared");
  }, [notify, setLastSongId, setLikedIds, setRecentIds, setRepeat, setShuffle, setStoredVolume]);

  /* Restore volume and the last played track once storage has been read. */
  useEffect(() => {
    if (volumeReady) player.setVolume(storedVolume);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volumeReady]);

  useEffect(() => {
    if (!lastReady || currentSong) return;
    const song = (lastSongId && getSongById(lastSongId)) || catalogue[0];
    setQueue(catalogue);
    setQueueIndex(catalogue.findIndex((item) => item.id === song.id));
    setCurrentSong(song);
    load(song.audioSrc, synthesise(song), false, song.duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastReady]);

  useEffect(() => {
    document.body.classList.toggle("is-playing", status.isPlaying);
  }, [status.isPlaying]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isExpanded);
    return () => document.body.classList.remove("no-scroll");
  }, [isExpanded]);

  const value = useMemo<MusicPlayerApi>(
    () => ({
      currentSong,
      queue,
      queueIndex,
      isPlaying: status.isPlaying,
      isLoading: status.isLoading,
      error: status.error,
      currentTime: status.currentTime,
      duration: status.duration || currentSong?.duration || 0,
      volume: status.volume,
      muted: status.muted,
      shuffle,
      repeat,
      likedIds,
      recentIds,
      isExpanded,
      isQueueOpen,
      toasts,
      analyserRef,
      playSong,
      playCollection,
      togglePlay,
      next,
      previous,
      seek: seekTo,
      seekBy: (delta: number) => seekTo(status.currentTime + delta),
      setVolume,
      toggleMute: player.toggleMute,
      toggleShuffle,
      cycleRepeat,
      addToQueue,
      removeFromQueue,
      clearQueue,
      toggleLike,
      isLiked,
      setExpanded,
      toggleQueuePanel: () => setQueueOpen((open) => !open),
      closeQueuePanel: () => setQueueOpen(false),
      notify,
      dismissToast,
      clearHistory,
      resetStoredData
    }),
    [
      currentSong, queue, queueIndex, status, shuffle, repeat, likedIds, recentIds, isExpanded, isQueueOpen,
      toasts, playSong, playCollection, togglePlay, next, previous, seekTo, setVolume, player.toggleMute,
      toggleShuffle, cycleRepeat, addToQueue, removeFromQueue, clearQueue, toggleLike, isLiked, notify,
      dismissToast, clearHistory, resetStoredData
    ]
  );

  return <MusicPlayerContext.Provider value={value}>{children}</MusicPlayerContext.Provider>;
}

export function useMusicPlayer(): MusicPlayerApi {
  const context = useContext(MusicPlayerContext);
  if (!context) throw new Error("useMusicPlayer must be used inside <MusicPlayerProvider>");
  return context;
}
