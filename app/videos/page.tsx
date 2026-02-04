"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import VideoGallery from "../components/VideoGallery";
import { supabase, supabaseConfigured } from "../lib/supabaseClient";

type VideoItem = {
  id?: string;
  title: string;
  videoUrl: string;
  duration?: string;
  provider?: "file" | "vimeo";
  vimeoId?: string;
};

type VideoRow = {
  id: string;
  title: string;
  video_url: string;
  provider: string | null;
  vimeo_id: string | null;
};

const baseVideos: VideoItem[] = [];

export default function VideosPage() {
  const [customVideos, setCustomVideos] = useState<VideoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME ?? "admin";
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "admin1234";

  useEffect(() => {
    if (!supabaseConfigured) {
      setError("Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    const loadVideos = async () => {
      setIsLoading(true);
      setError(null);
      const { data, error: loadError } = await supabase
        .from("videos")
        .select("id,title,video_url,provider,vimeo_id")
        .order("created_at", { ascending: false });

      if (loadError) {
        setError(loadError.message);
        setIsLoading(false);
        return;
      }

      const mapped: VideoItem[] = (data ?? []).map((row: VideoRow) => ({
        id: row.id,
        title: row.title,
        videoUrl: row.video_url,
        provider: row.provider === "vimeo" ? "vimeo" : row.provider === "file" ? "file" : undefined,
        vimeoId: row.vimeo_id ?? undefined,
      }));

      setCustomVideos(mapped);
      setIsLoading(false);
    };

    loadVideos();
  }, []);

  const allVideos = useMemo(() => [...baseVideos, ...customVideos], [customVideos]);
  const handleDeleteVideo = async (video: VideoItem) => {
    if (!video.id) {
      setError("Unable to delete this video.");
      return;
    }

    const { error: deleteError } = await supabase.from("videos").delete().eq("id", video.id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setCustomVideos((prev) => prev.filter((item) => item.id !== video.id));
    setSuccess("Video deleted.");
    setError(null);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (username.trim() === adminUsername && password === adminPassword) {
      setIsAuthed(true);
      setUsername("");
      setPassword("");
      setSuccess("Signed in successfully.");
      return;
    }

    setError("Invalid credentials. Please try again.");
  };

  const handleAddVideo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!supabaseConfigured) {
      setError("Supabase is not configured. Please check your environment variables.");
      return;
    }

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

      let payload: { title: string; video_url: string; provider?: string; vimeo_id?: string } = {
        title: customTitle || `Video from ${hostname}`,
        video_url: url.toString(),
        provider: "file",
      };

      if (hostname.includes("vimeo.com") && vimeoMatch?.[1]) {
        const vimeoId = vimeoMatch[1];
        payload = {
          title: customTitle || `Vimeo video ${vimeoId}`,
          video_url: url.toString(),
          provider: "vimeo",
          vimeo_id: vimeoId,
        };
      }

      const { data, error: insertError } = await supabase
        .from("videos")
        .insert(payload)
        .select("id,title,video_url,provider,vimeo_id")
        .single();

      if (insertError) {
        setError(insertError.message);
        return;
      }

      if (data) {
        const newVideo: VideoItem = {
          id: data.id,
          title: data.title,
          videoUrl: data.video_url,
          provider: data.provider ?? undefined,
          vimeoId: data.vimeo_id ?? undefined,
        };
        setCustomVideos((prev) => [newVideo, ...prev]);
      }

      setVideoUrl("");
      setVideoTitle("");
      setSuccess(payload.provider === "vimeo" ? "Vimeo video added to gallery." : "Video added to gallery.");
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

        {isLoading && (
          <div className="mb-6 text-sm text-gray-400">Loading videos...</div>
        )}

        <VideoGallery videos={allVideos} isAdmin={isAuthed} onDelete={handleDeleteVideo} />
      </main>
    </div>
  );
}
