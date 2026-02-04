"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type GalleryVideo = {
  title: string;
  videoUrl: string;
  duration?: string;
  provider?: "file" | "vimeo";
  vimeoId?: string;
};

export default function VideoGallery({ videos }: { videos?: Array<GalleryVideo> }) {
  const defaultVideos = videos ?? [
    { title: "Wedding Teaser", videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video1.mp4", duration: "2:30" },
    { title: "George&Gordon Wedding", videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video2.mp4", duration: "1:45" },
    { title: "Katelyn & Andrew's Wedding", videoUrl: "https://github.com/Ahad-Rehman/editly/releases/download/v1.0.0/video3.mp4", duration: "3:15" },
  ];

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return defaultVideos.filter((v) => v.title.toLowerCase().includes(q));
  }, [query, defaultVideos]);

  return (
    <section className="py-12 lg:py-16 bg-black min-h-screen">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">Video Gallery</h2>
          </div>

          <div className="flex items-center gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search videos..." className="px-5 py-3 rounded-full bg-gray-900 border border-gray-800 text-white outline-none w-64 focus:ring-2 focus:ring-primary/40" />
            <div className="text-gray-400">Results: {list.length}</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((v, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video bg-black/10 cursor-pointer" onClick={() => setSelected(i)}>
                {v.provider === "vimeo" && v.vimeoId ? (
                  <iframe
                    className="w-full h-full object-cover pointer-events-none"
                    src={`https://player.vimeo.com/video/${v.vimeoId}?background=1&autoplay=1&muted=1&loop=1`}
                    title={v.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                ) : (
                  <video src={v.videoUrl} className="w-full h-full object-cover" muted loop playsInline />
                )}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black text-2xl shadow-lg transform group-hover:scale-105 transition-transform">▶</div>
                </div>
                {v.duration && (
                  <div className="absolute bottom-3 right-3 bg-black/70 text-sm px-3 py-1 rounded-full">{v.duration}</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-gradient-to-t from-gray-900/70 to-transparent">
                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                <div className="mt-2 text-sm text-gray-400">Click to open player</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-[5px]" onClick={() => setSelected(null)}>
          <div className="relative w-full h-full max-w-[calc(100vw-10px)] max-h-[calc(100vh-10px)] m-[5px] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 bg-black/80 rounded-t-xl">
              <Link href="/" className="bg-gray-800 px-4 py-2 rounded-full text-white">Back</Link>
              <h3 className="text-lg font-bold text-white absolute left-1/2 -translate-x-1/2">{list[selected].title}</h3>
              <button onClick={() => setSelected(null)} className="bg-gray-800 p-2 rounded-full text-white">✕</button>
            </div>

            <div className="flex-1 flex items-center justify-center bg-black rounded-b-xl overflow-hidden">
              {list[selected].provider === "vimeo" && list[selected].vimeoId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://player.vimeo.com/video/${list[selected].vimeoId}?autoplay=1&muted=0`}
                  title={list[selected].title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <video className="w-full h-full" src={list[selected].videoUrl} controls autoPlay playsInline style={{ objectFit: 'contain' }} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
