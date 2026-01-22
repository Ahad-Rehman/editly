"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Our Videos", href: "#videos" },
    { name: "Our Work", href: "#work" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faqs" },
  ];

  const services = [
    "Video Editing",
    "Motion Graphics",
    "Color Grading",
    "Sound Design",
    "Social Media Content",
    "Commercial Ads",
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "YouTube", icon: "▶️", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-black border-t border-gray-900">
      {/* Main footer content */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">editly</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming visions into cinematic masterpieces, one frame at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">📧</span>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:hello@videoeditor.com" className="text-gray-300 hover:text-primary transition-colors">
                    hello@videoeditor.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">📞</span>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">⏰</span>
                <div>
                  <p className="text-gray-500 text-sm">Hours</p>
                  <p className="text-gray-300">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 text-center">
            <h4 className="text-2xl font-bold mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get editing tips, industry insights, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-black border border-gray-700 focus:border-primary outline-none transition-colors text-white"
              />
              <button className="bg-primary hover:bg-primary-dark text-black font-semibold px-8 py-3 rounded-full transition-all hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} editly. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
