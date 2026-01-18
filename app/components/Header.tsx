"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            editly
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["videos", "work", "about", "reviews", "faqs"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-primary transition-colors capitalize"
              >
                {item === "videos" ? "Our Videos" : item === "work" ? "Our Work" : item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-2 rounded-full transition-all hover:scale-105"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
