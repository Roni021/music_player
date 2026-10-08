"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { ListMusic, Menu, Moon, Search, Sun, X } from "lucide-react";
import { searchCatalogue } from "@/data/music";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { useTheme } from "@/context/ThemeContext";
import { songArtwork } from "@/lib/artwork";
import type { Song } from "@/types/music";

interface Props {
  stuck: boolean;
  onToggleMenu: () => void;
  menuOpen: boolean;
}

/** Highlights the matched span without dropping the rest of the label. */
function Highlight({ text, query }: { text: string; query: string }) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (!query || index < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <mark>{text.slice(index, index + query.length)}</mark>
      {text.slice(index + query.length)}
    </>
  );
}

/** Sticky header: global search with suggestions, theme switch and queue toggle. */
export function Header({ stuck, onToggleMenu, menuOpen }: Props) {
  const router = useRouter();
  const { theme, toggle } = useTheme();
  const { playSong, toggleQueuePanel, isQueueOpen } = useMusicPlayer();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions: Song[] = query.trim() ? searchCatalogue(query).songs.slice(0, 5) : [];

  useEffect(() => {
    const onClickAway = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  const submit = (value: string) => {
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(value)}`);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const picked = suggestions[active];
      if (open && picked) {
        playSong(picked);
        setOpen(false);
      } else if (query.trim()) {
        submit(query);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <header className={`topbar${stuck ? " stuck" : ""}`}>
      <button
        type="button"
        className="icon-button hamburger"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="sidebar"
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="searchbox" ref={boxRef}>
        <Search size={17} aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          role="combobox"
          aria-expanded={open && suggestions.length > 0}
          aria-controls="search-suggestions"
          aria-autocomplete="list"
          aria-label="Search songs, artists, albums and playlists"
          placeholder="Search songs, artists, albums…"
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        {query && (
          <button
            type="button"
            className="ghost-btn"
            aria-label="Clear search"
            style={{ position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)" }}
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <X size={15} />
          </button>
        )}

        {open && suggestions.length > 0 && (
          <div className="suggestions" id="search-suggestions" role="listbox" aria-label="Search suggestions">
            {suggestions.map((song, index) => (
              <button
                key={song.id}
                type="button"
                role="option"
                aria-selected={index === active}
                className="suggestion"
                onMouseEnter={() => setActive(index)}
                onClick={() => {
                  playSong(song);
                  setOpen(false);
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={songArtwork(song)} alt="" />
                <span>
                  <b>
                    <Highlight text={song.title} query={query} />
                  </b>
                  <small>
                    <Highlight text={song.artist} query={query} /> · {song.album}
                  </small>
                </span>
              </button>
            ))}
            <button type="button" className="suggestion" onClick={() => submit(query)}>
              <span>
                <b>See all results for “{query}”</b>
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="icon-button"
          data-tip="Switch theme"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={toggle}
        >
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button
          type="button"
          className="icon-button"
          data-tip="Queue"
          aria-label="Open queue"
          aria-expanded={isQueueOpen}
          onClick={toggleQueuePanel}
        >
          <ListMusic size={18} />
        </button>
        <button type="button" className="icon-button" aria-label="Open navigation" onClick={onToggleMenu} style={{ display: "none" }}>
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
