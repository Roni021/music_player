"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Persisted state that is safe under server rendering: the initial render always
 * uses `initialValue`, and the stored value is read after hydration. The third
 * tuple member tells callers whether the stored value has arrived yet.
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((previous: T) => T)) => void, boolean] {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);
  const keyRef = useRef(key);
  keyRef.current = key;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(keyRef.current);
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      /* corrupt entry or storage disabled — fall back to the initial value */
    }
    setHydrated(true);
  }, []);

  const update = useCallback((next: T | ((previous: T) => T)) => {
    setValue((previous) => {
      const resolved = typeof next === "function" ? (next as (previous: T) => T)(previous) : next;
      try {
        window.localStorage.setItem(keyRef.current, JSON.stringify(resolved));
      } catch {
        /* quota or private mode — the value still lives in memory for this session */
      }
      return resolved;
    });
  }, []);

  return [value, update, hydrated];
}

/** Clears every Midnight Melodies key. Used by Settings. */
export function clearStoredData(prefix = "mm:"): void {
  try {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith(prefix))
      .forEach((key) => window.localStorage.removeItem(key));
  } catch {
    /* ignore */
  }
}
