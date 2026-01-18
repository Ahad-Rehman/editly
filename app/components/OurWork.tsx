"use client";

export default function OurWork() {
  const services = [
    {
      icon: "🎬",
      title: "Video Editing",
      description: "Professional cutting, transitions, and storytelling that brings your footage to life",
      features: ["Color Grading", "Motion Graphics", "Audio Mixing"],
    },
    {
      icon: "✨",
      title: "Motion Graphics",
      description: "Eye-catching animations and visual effects that elevate your brand",
      features: ["2D/3D Animation", "Title Design", "VFX"],
    },
    {
      icon: "🎨",
      title: "Color Correction",
      description: "Cinematic color grading that sets the perfect mood and atmosphere",
      features: ["LUT Creation", "Skin Tones", "Creative Looks"],
    },
    {
      icon: "🎵",
      title: "Sound Design",
      description: "Crystal-clear audio mixing and sound effects for immersive experiences",
      features: ["Mixing", "Mastering", "Foley"],
    },
    {
      icon: "📱",
      title: "Social Media",
      description: "Optimized content for Instagram, TikTok, YouTube, and more",
      features: ["Vertical Video", "Captions", "Thumbnails"],
    },
    {
      icon: "🎯",
      title: "Commercial Ads",
      description: "High-impact advertising content that drives results and engagement",
      features: ["Brand Videos", "Product Demos", "TV Spots"],
    },
  ];

  return (
    <section id="work" className="py-24 bg-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-service video editing solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover effect decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Ready to bring your vision to life?</p>
          <button className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
