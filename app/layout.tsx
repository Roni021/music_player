import type { Metadata, Viewport } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";
import { ThemeProvider, themeBootstrapScript } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Midnight Melodies",
    template: "%s · Midnight Melodies"
  },
  description:
    "Midnight Melodies — a premium, cinematic music player. Browse albums, artists and playlists, queue tracks and listen without an account.",
  applicationName: "Midnight Melodies",
  keywords: ["Midnight Melodies", "music player", "Next.js", "playlists", "albums"],
  authors: [{ name: "Midnight Melodies" }],
  openGraph: {
    title: "Midnight Melodies",
    description: "A premium, cinematic music player built with Next.js and TypeScript.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0b14",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Paints the stored theme before hydration so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body>
        <ThemeProvider>
          <MusicPlayerProvider>
            <MainLayout>{children}</MainLayout>
          </MusicPlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
