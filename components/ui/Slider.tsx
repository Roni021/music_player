"use client";

import type { ChangeEvent } from "react";

interface Props {
  value: number;
  max: number;
  min?: number;
  step?: number;
  label: string;
  className?: string;
  onChange: (value: number) => void;
}

/**
 * Range input with a filled track. Keyboard support comes free from the native
 * element, so arrow keys and Home/End work as expected.
 */
export function Slider({ value, max, min = 0, step = 0.1, label, className, onChange }: Props) {
  const span = max - min || 1;
  const percent = ((value - min) / span) * 100;

  return (
    <input
      type="range"
      className={["range", className].filter(Boolean).join(" ")}
      min={min}
      max={max}
      step={step}
      value={Number.isFinite(value) ? value : 0}
      aria-label={label}
      aria-valuetext={`${Math.round(percent)} percent`}
      style={{ ["--pct" as string]: `${percent}%` }}
      onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value))}
    />
  );
}
