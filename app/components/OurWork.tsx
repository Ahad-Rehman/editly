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

        {/* Plans Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute -left-16 -top-16 opacity-10" width="520" height="520" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="260" cy="260" r="200" fill="#9ae600" />
            </svg>
            <svg className="absolute -right-24 -bottom-24 opacity-8" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="420" height="420" rx="80" fill="#0b0b0b" />
            </svg>
          </div>

          <div className="text-center mb-10 relative">
            <h3 className="text-3xl md:text-4xl font-bold">Our Plans</h3>
            <p className="text-gray-400 max-w-3xl mx-auto mt-3">Flexible offerings designed around speed, collaboration and cinematic quality — pick a style, we'll handle the rest.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 left-6 bg-primary text-black font-bold px-3 py-1 rounded-lg text-sm">Popular</div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M3 7v10a2 2 0 002 2h14V5H5a2 2 0 00-2 2z" fill="#9ae600" />
                  <path d="M21 5h-6l-2-2H7v4" fill="#000" opacity="0.2" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-primary">Essential</div>
                  <div className="text-sm text-gray-400">Perfect for short-form content & promos</div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">Fast turnarounds and tight edits focused on social performance and clarity.</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-6">
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> 48-72 hour turnaround</li>
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> Basic color & audio polish</li>
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> 2 rounds of revisions</li>
              </ul>
              <a href="#contact" className="inline-block bg-transparent border-2 border-primary text-primary font-semibold px-6 mt-11 py-3 rounded-full hover:bg-primary hover:text-black transition">Select</a>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl text-center transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-6 bg-primary text-black font-bold px-3 py-1 rounded-lg text-sm">Best value</div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-3-6 3 1.5-8L3 8.5 9 8 12 2z" fill="#9ae600" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-primary">Professional</div>
                  <div className="text-sm text-gray-400">End-to-end editing with motion graphics & polish</div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">Comprehensive edits with motion design, color grading and mixing for brand-forward storytelling.</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-6">
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> 1 week delivery</li>
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> Motion graphics & titles</li>
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> Color grading & audio mixing</li>
              </ul>
              <a href="#contact" className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-full">Select</a>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#9ae600" />
                </svg>
                <div>
                  <div className="text-2xl font-bold text-primary">Studio</div>
                  <div className="text-sm text-gray-400">Tailored for brands, agencies & long-term partnerships</div>
                </div>
              </div>

              <p className="text-gray-400 mb-6">White-glove service with dedicated management, VFX pipelines, and priority delivery.</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-6">
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> Dedicated project manager</li>
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> Premium VFX & color pipeline</li>
                <li className="flex items-center justify-center gap-2"><svg width="10" height="10" viewBox="0 0 10 10" className="text-primary"><circle cx="5" cy="5" r="5" fill="#9ae600"/></svg> Priority support & revisions</li>
              </ul>
              <a href="#contact" className="inline-block bg-transparent border-2 border-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-black transition">Select</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
