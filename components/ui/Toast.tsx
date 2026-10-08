"use client";

import { AlertCircle, Check, Music2 } from "lucide-react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

/** Live region for transient confirmations. */
export function ToastStack() {
  const { toasts, dismissToast } = useMusicPlayer();

  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <button type="button" className="toast" key={toast.id} onClick={() => dismissToast(toast.id)}>
          {toast.tone === "error" ? <AlertCircle size={17} /> : toast.tone === "success" ? <Check size={17} /> : <Music2 size={17} />}
          <span>{toast.message}</span>
        </button>
      ))}
    </div>
  );
}
