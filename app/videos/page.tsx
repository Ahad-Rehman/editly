import Link from "next/link";
import VideoGallery from "../components/VideoGallery";

export default function VideosPage() {
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
          <Link href="#contact" className="bg-primary text-black px-4 py-2 rounded-full text-sm font-semibold">Contact</Link>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Videos — <span className="gradient-text">Showreel & Projects</span></h1>
          <p className="text-gray-400 max-w-3xl mx-auto">Browse a curated collection of highlights, client work and experimental edits. Click any clip to open a fullscreen preview and controls.</p>
        </div>
      </header>

      <main className="section-container pb-24">
        <VideoGallery />
      </main>
    </div>
  );
}
