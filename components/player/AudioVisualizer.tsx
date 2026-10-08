"use client";

import { useEffect, useRef } from "react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { prefersReducedMotion } from "@/lib/format";

interface Props {
  bars?: number;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Frequency bars driven by the AnalyserNode. Falls back to a sine wave when the
 * Web Audio graph is unavailable, and renders a static baseline when the user
 * asks for reduced motion or playback is paused.
 */
export function AudioVisualizer({ bars = 16, width = 124, height = 52, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { analyserRef, isPlaying } = useMusicPlayer();
  const playingRef = useRef(isPlaying);
  playingRef.current = isPlaying;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    if (prefersReducedMotion()) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let frame = 0;
    let phase = 0;
    const data = new Uint8Array(bars * 2);

    const draw = () => {
      frame = requestAnimationFrame(draw);
      context.clearRect(0, 0, canvas.width, canvas.height);
      const playing = playingRef.current;
      if (!playing && phase <= 0) return;
      phase = playing ? phase + 0.14 : Math.max(0, phase - 0.06);

      const analyser = analyserRef.current;
      if (analyser) analyser.getByteFrequencyData(data);

      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#8b7df6";
      const barWidth = canvas.width / bars;

      for (let i = 0; i < bars; i += 1) {
        const level = analyser && data[i] ? data[i] / 255 : (0.35 + 0.35 * Math.sin(phase + i * 0.6)) * (playing ? 1 : 0.2);
        const barHeight = Math.max(2, level * canvas.height * (playing ? 1 : 0.3));
        context.fillStyle = accent;
        context.globalAlpha = 0.35 + level * 0.65;
        context.beginPath();
        if (typeof context.roundRect === "function") {
          context.roundRect(i * barWidth + 1, canvas.height - barHeight, barWidth - 3, barHeight, 2);
        } else {
          context.rect(i * barWidth + 1, canvas.height - barHeight, barWidth - 3, barHeight);
        }
        context.fill();
      }
      context.globalAlpha = 1;
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [analyserRef, bars]);

  return <canvas ref={canvasRef} className={className} width={width} height={height} aria-hidden="true" />;
}
