"use client";

import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer: "Our turnaround time varies depending on project complexity. Simple edits can be completed within 2-3 days, while more complex projects with motion graphics and color grading typically take 1-2 weeks. We always work with you to meet your deadlines.",
    },
    {
      question: "What video formats do you work with?",
      answer: "We work with all major video formats including MP4, MOV, AVI, ProRes, and RAW footage from cameras like RED, ARRI, and Sony. We can also work with footage from phones and drones.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes! We include up to 3 rounds of revisions in our standard packages to ensure you're completely satisfied with the final product. Additional revisions can be added if needed.",
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing is project-based and depends on factors like video length, complexity, and deadline. We offer competitive rates starting from $500 for basic edits. Contact us for a custom quote tailored to your specific needs.",
    },
    {
      question: "Can you work with raw footage I provide?",
      answer: "Absolutely! We specialize in transforming raw footage into polished final products. Just send us your files via Google Drive, Dropbox, or any file transfer service, and we'll handle the rest.",
    },
    {
      question: "Do you provide music and sound effects?",
      answer: "Yes, we have access to premium stock music libraries and can source the perfect soundtrack for your video. We also offer custom sound design and audio mixing services.",
    },
    {
      question: "What software do you use?",
      answer: "We use industry-standard software including Adobe Premiere Pro, DaVinci Resolve, After Effects, and Final Cut Pro. This ensures compatibility and the highest quality output.",
    },
    {
      question: "Can you help with YouTube optimization?",
      answer: "Yes! We can create custom thumbnails, add captions, optimize aspect ratios for different platforms, and ensure your videos are formatted perfectly for YouTube, Instagram, TikTok, and other social media.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our video editing services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 overflow-hidden transition-all duration-300 hover:border-primary/50"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold pr-8 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-dark/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              We&apos;re here to help! Reach out to our team for personalized answers.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-black font-semibold px-8 py-3 rounded-full transition-all hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
