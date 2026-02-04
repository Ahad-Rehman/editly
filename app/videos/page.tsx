"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import VideoGallery from "../components/VideoGallery";

type VideoItem = {
  title: string;
  videoUrl: string;
  duration?: string;
  provider?: "file" | "vimeo";
  vimeoId?: string;
};

const STORAGE_KEY = "portfolio.customVideos";

const baseVideos: VideoItem[] = [
  { title: "Wedding Teaser", videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video1.mp4", duration: "2:30" },
  { title: "George&Gordon Wedding", videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video2.mp4", duration: "1:45" },
  { title: "Katelyn & Andrew's Wedding", videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video3.mp4", duration: "3:15" },
];

export default function VideosPage() {
  const [customVideos, setCustomVideos] = useState<VideoItem[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as VideoItem[];
        if (Array.isArray(parsed)) {
          setCustomVideos(parsed);
        }
      }
    } catch {
      setCustomVideos([]);
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customVideos));
  }, [customVideos, hasLoaded]);

  const allVideos = useMemo(() => [...baseVideos, ...customVideos], [customVideos]);
  const handleDeleteVideo = (index: number) => {
    const customIndex = index - baseVideos.length;
    if (customIndex < 0) {
      setError("Default videos cannot be deleted.");
      setSuccess(null);
      return;
    }
    setCustomVideos((prev) => prev.filter((_, i) => i !== customIndex));
    setSuccess("Video deleted.");
    setError(null);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (username.trim() === "admin" && password === "admin123") {
      setIsAuthed(true);
      setUsername("");
      setPassword("");
      setSuccess("Signed in successfully.");
      return;
    }

    setError("Invalid credentials. Please try again.");
  };

  const handleAddVideo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmed = videoUrl.trim();
    if (!trimmed) {
      setError("Please enter a video URL.");
      return;
    }

    try {
      const url = new URL(trimmed);
      const hostname = url.hostname.replace("www.", "");
      const vimeoMatch = url.href.match(/vimeo\.com\/(?:video\/)?(\d+)/i);

      const customTitle = videoTitle.trim();

      if (hostname.includes("vimeo.com") && vimeoMatch?.[1]) {
        const vimeoId = vimeoMatch[1];
        const title = customTitle || `Vimeo video ${vimeoId}`;
        setCustomVideos((prev) => [...prev, { title, videoUrl: url.toString(), provider: "vimeo", vimeoId }]);
        setVideoUrl("");
        setVideoTitle("");
        setSuccess("Vimeo video added to gallery.");
        return;
      }

      const title = customTitle || `Video from ${hostname}`;
      setCustomVideos((prev) => [...prev, { title, videoUrl: url.toString(), provider: "file" }]);
      setVideoUrl("");
      setVideoTitle("");
      setSuccess("Video added to gallery.");
    } catch {
      setError("Please enter a valid URL (including https://).");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <header className="section-container pt-20 pb-12 relative">
        <div className="absolute -top-10 -left-10 opacity-10 pointer-events-none">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="100" fill="#9ae600" />
          </svg>
        </div>

        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-gray-400 hover:text-white">← Back</Link>
            <button
              className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-2 rounded-full transition-all hover:scale-105"
            >
              Contact Us
            </button>        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Videos — <span className="gradient-text">Showreel & Projects</span></h1>
          <p className="text-gray-400 max-w-3xl mx-auto">Browse a curated collection of highlights, client work and experimental edits. Click any clip to open a fullscreen preview and controls.</p>
        </div>
      </header>

      <main className="section-container pb-24">
        <section className="mb-12 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Admin Panel</h2>
              <p className="text-gray-400 text-sm">Sign in as admin to add a new video URL to the gallery.</p>
            </div>

            {!isAuthed ? (
              <form onSubmit={handleLogin} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="px-4 py-3 rounded-full bg-black border border-gray-800 text-white outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="px-4 py-3 rounded-full bg-black border border-gray-800 text-white outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  Sign In
                </button>
              </form>
            ) : (
              <form onSubmit={handleAddVideo} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="Video title (optional)"
                  className="px-4 py-3 rounded-full bg-black border border-gray-800 text-white outline-none focus:ring-2 focus:ring-primary/40 min-w-[220px]"
                />
                <input
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://example.com/video.mp4 or https://vimeo.com/123456"
                  className="px-4 py-3 rounded-full bg-black border border-gray-800 text-white outline-none focus:ring-2 focus:ring-primary/40 min-w-[260px]"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  Add Video
                </button>
              </form>
            )}
          </div>

          {(error || success) && (
            <div className="mt-4 text-sm">
              {error && <span className="text-red-400">{error}</span>}
              {!error && success && <span className="text-green-400">{success}</span>}
            </div>
          )}
        </section>

        <VideoGallery videos={allVideos} isAdmin={isAuthed} onDelete={handleDeleteVideo} />
      </main>
    </div>
  );
}
