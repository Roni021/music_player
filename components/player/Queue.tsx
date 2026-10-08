"use client";

import { ListX, X } from "lucide-react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { SongRow } from "@/components/music/SongRow";

/** Drawer listing what plays next, with per-row removal. */
export function Queue() {
  const { queue, queueIndex, isQueueOpen, closeQueuePanel, removeFromQueue, clearQueue } = useMusicPlayer();
  const upcoming = queue.slice(queueIndex + 1);

  return (
    <aside className={`queue${isQueueOpen ? " open" : ""}`} aria-label="Play queue" aria-hidden={!isQueueOpen}>
      <div className="queue-head">
        <div>
          <h3>Queue</h3>
          <p className="tiny muted">
            {upcoming.length} track{upcoming.length === 1 ? "" : "s"} after this one
          </p>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button type="button" className="ghost-btn" aria-label="Clear the queue" onClick={clearQueue}>
            <ListX size={17} />
          </button>
          <button type="button" className="ghost-btn" aria-label="Close queue" onClick={closeQueuePanel}>
            <X size={17} />
          </button>
        </div>
      </div>

      {upcoming.length ? (
        <div>
          {upcoming.map((song, index) => (
            <SongRow
              key={`${song.id}-${index}`}
              song={song}
              position={index + 1}
              context={queue}
              compact
              removeLabel="Remove from queue"
              onRemove={() => removeFromQueue(queueIndex + 1 + index)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>Nothing queued</h3>
          <p>Play an album or a playlist to line up more tracks.</p>
        </div>
      )}
    </aside>
  );
}
