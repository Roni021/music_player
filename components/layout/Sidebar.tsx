"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock3, Heart, Home, ListMusic, Music2, Play, Search, Settings, Library } from "lucide-react";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { songs } from "@/data/music";

interface Props {
  onNavigate: () => void;
}

const GROUPS = [
  {
    label: "Discover",
    items: [
      { href: "/", label: "Home", icon: Home },
      { href: "/search", label: "Search", icon: Search }
    ]
  },
  {
    label: "Your music",
    items: [
      { href: "/library", label: "Library", icon: Library },
      { href: "/liked", label: "Liked songs", icon: Heart },
      { href: "/library#recent", label: "Recently played", icon: Clock3 },
      { href: "/playlist/last-train-home", label: "Playlists", icon: ListMusic }
    ]
  },
  {
    label: "System",
    items: [{ href: "/settings", label: "Settings", icon: Settings }]
  }
];

export function Sidebar({ onNavigate }: Props) {
  const pathname = usePathname();
  const { playCollection, likedIds } = useMusicPlayer();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]));

  return (
    <aside className="sidebar" id="sidebar" aria-label="Main navigation">
      <Link className="brand" href="/" onClick={onNavigate}>
        <span className="brand-mark">
          <Music2 size={19} />
        </span>
        <span>
          Midnight
          <br />
          Melodies<small>LISTENING ROOM</small>
        </span>
      </Link>

      <nav className="nav">
        {GROUPS.map((group) => (
          <div className="nav-group" key={group.label}>
            <div className="nav-label">{group.label}</div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={onNavigate}
                >
                  <Icon size={17} />
                  {item.label}
                  {item.href === "/liked" && likedIds.length > 0 && <span className="nav-count">{likedIds.length}</span>}
                  {item.href === "/library" && <span className="nav-count">{songs.length}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-card">
        <h3>Tonight&rsquo;s set</h3>
        <p className="tiny muted">Eight short synth studies, generated in your browser. No streaming, no account.</p>
        <button
          type="button"
          className="btn subtle"
          style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
          onClick={() => {
            playCollection(songs, { label: "every track" });
            onNavigate();
          }}
        >
          <Play size={16} />
          Play all
        </button>
      </div>
    </aside>
  );
}
