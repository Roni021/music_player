"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "subtle";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const classes: Record<Variant, string> = {
  primary: "btn",
  ghost: "btn ghost",
  subtle: "btn subtle"
};

/** Shared button with the three visual weights used across the app. */
export function Button({ variant = "primary", className, children, ...rest }: Props) {
  return (
    <button type="button" className={[classes[variant], className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}
