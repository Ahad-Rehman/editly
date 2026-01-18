"use client";

import { useState } from "react";

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Emily Thompson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      rating: 5,
      text: "Absolutely phenomenal work! The team transformed our raw footage into a stunning brand story that exceeded all expectations. Their attention to detail and creative vision is unmatched.",
      image: "ET",
    },
    {
      name: "David Martinez",
      role: "Content Creator",
      company: "YouTube Channel",
      rating: 5,
      text: "Working with this team has been a game-changer for my channel. The editing quality is cinema-level, and they always deliver on time. My engagement has increased by 300%!",
      image: "DM",
    },
    {
      name: "Lisa Anderson",
      role: "Event Manager",
      company: "Premier Events Co.",
      rating: 5,
      text: "They captured the essence of our event perfectly. The highlight reel brought tears to our clients' eyes. Professional, creative, and incredibly talented.",
      image: "LA",
    },
    {
      name: "James Wilson",
      role: "Brand Manager",
      company: "FreshBrew Coffee",
      rating: 5,
      text: "The commercial they created for us went viral! Their understanding of storytelling and brand identity is exceptional. Best investment we've made in marketing.",
      image: "JW",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear what our clients have to say
          </p>
        </div>

        {/* Main review card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-6xl text-primary/20">&ldquo;</div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed">
                {reviews[activeReview].text}
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-xl font-bold text-black">
                  {reviews[activeReview].image}
                </div>
                <div>
                  <div className="font-bold text-lg">{reviews[activeReview].name}</div>
                  <div className="text-gray-400 text-sm">
                    {reviews[activeReview].role} at {reviews[activeReview].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {reviews.map((review, index) => (
            <button
              key={index}
              onClick={() => setActiveReview(index)}
              className={`p-4 rounded-xl transition-all ${
                activeReview === index
                  ? "bg-primary text-black scale-110"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-bold">
                {review.image}
              </div>
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-gray-400">5-Star Reviews</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-gray-400">Repeat Clients</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-gray-400">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
