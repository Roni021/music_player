"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface AudioStatus {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  isLoading: boolean;
  /** Set when neither the file nor the fallback could be played. */
  error: string | null;
}

interface Options {
  onEnded: () => void;
}

/**
 * Owns the single HTMLAudioElement: event wiring, cleanup, and a fallback source
 * used when the requested file is missing from public/audio.
 */
export function useAudioPlayer({ onEnded }: Options) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fallbackRef = useRef<string | null>(null);
  const usedFallbackRef = useRef(false);
  const shouldPlayRef = useRef(false);
  const endedRef = useRef(onEnded);
  endedRef.current = onEnded;

  const [status, setStatus] = useState<AudioStatus>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.8,
    muted: false,
    isLoading: false,
    error: null
  });

  const getAudio = useCallback((): HTMLAudioElement => {
    if (!audioRef.current) {
      const element = new Audio();
      element.preload = "auto";
      audioRef.current = element;
    }
    return audioRef.current;
  }, []);

  useEffect(() => {
    const audio = getAudio();

    const onTime = () => setStatus((s) => ({ ...s, currentTime: audio.currentTime }));
    const onMeta = () =>
      setStatus((s) => ({ ...s, duration: Number.isFinite(audio.duration) ? audio.duration : s.duration, isLoading: false }));
    const onPlay = () => setStatus((s) => ({ ...s, isPlaying: true, error: null }));
    const onPause = () => setStatus((s) => ({ ...s, isPlaying: false }));
    const onWaiting = () => setStatus((s) => ({ ...s, isLoading: true }));
    const onCanPlay = () => setStatus((s) => ({ ...s, isLoading: false }));
    const onVolume = () => setStatus((s) => ({ ...s, volume: audio.volume, muted: audio.muted }));
    const onFinished = () => endedRef.current();

    const onError = () => {
      // The catalogue ships without audio files, so a missing file is expected:
      // swap in the synthesised fallback rather than surfacing an error.
      if (fallbackRef.current && !usedFallbackRef.current) {
        usedFallbackRef.current = true;
        audio.src = fallbackRef.current;
        audio.load();
        if (shouldPlayRef.current) void audio.play().catch(() => undefined);
        return;
      }
      setStatus((s) => ({ ...s, isLoading: false, isPlaying: false, error: "This track could not be played." }));
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("volumechange", onVolume);
    audio.addEventListener("ended", onFinished);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("volumechange", onVolume);
      audio.removeEventListener("ended", onFinished);
      audio.removeEventListener("error", onError);
      audio.pause();
    };
  }, [getAudio]);

  const load = useCallback(
    (src: string, fallback: string, autoPlay: boolean, knownDuration: number) => {
      const audio = getAudio();
      fallbackRef.current = fallback;
      usedFallbackRef.current = false;
      shouldPlayRef.current = autoPlay;
      audio.src = src;
      audio.currentTime = 0;
      audio.load();
      setStatus((s) => ({ ...s, currentTime: 0, duration: knownDuration, isLoading: true, error: null }));
      if (autoPlay) void audio.play().catch(() => undefined);
    },
    [getAudio]
  );

  const play = useCallback(() => {
    shouldPlayRef.current = true;
    void getAudio().play().catch(() => undefined);
  }, [getAudio]);

  const pause = useCallback(() => {
    shouldPlayRef.current = false;
    getAudio().pause();
  }, [getAudio]);

  const toggle = useCallback(() => {
    const audio = getAudio();
    if (audio.paused) play();
    else pause();
  }, [getAudio, pause, play]);

  const seekTo = useCallback(
    (seconds: number) => {
      const audio = getAudio();
      const total = Number.isFinite(audio.duration) ? audio.duration : 0;
      audio.currentTime = Math.min(Math.max(0, seconds), total || seconds);
      setStatus((s) => ({ ...s, currentTime: audio.currentTime }));
    },
    [getAudio]
  );

  const setVolume = useCallback(
    (value: number) => {
      const audio = getAudio();
      audio.volume = value;
      audio.muted = false;
    },
    [getAudio]
  );

  const toggleMute = useCallback(() => {
    const audio = getAudio();
    audio.muted = !audio.muted;
  }, [getAudio]);

  return { audioRef, getAudio, status, load, play, pause, toggle, seekTo, setVolume, toggleMute };
}
