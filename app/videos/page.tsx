import VideoGallery from "../components/VideoGallery";

export default function VideosPage() {
  return (
    // remove extra top padding; `VideoGallery` already has section spacing
    <div className="min-h-screen bg-black">
      <VideoGallery />
    </div>
  );
}
