"use client";

export default function About() {
  const skills = [
    { name: "Adobe Premiere Pro", level: 98 },
    { name: "DaVinci Resolve", level: 95 },
    { name: "After Effects", level: 92 },
    { name: "Final Cut Pro", level: 88 },
  ];

  const team = [
    {
      name: "Ahmar Khan",
      role: "Lead Editor",
      experience: "10+ Years",
    },
    {
      name: "Ahsan Khan",
      role: "Motion Designer",
      experience: "8+ Years",
    },
    {
      name: "Uzair Niazi",
      role: "Colorist",
      experience: "12+ Years",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Us</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We are a team of passionate video editors and motion designers dedicated to transforming raw footage into compelling visual stories. With over a decade of combined experience, we&apos;ve worked with brands across the globe.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our expertise spans across commercial advertising, documentaries, social media content, and corporate videos. We believe in the power of storytelling and use cutting-edge tools to bring every frame to perfection.
            </p>

            {/* Skills */}
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary-dark h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                Meet The Team
              </button>
              <button className="border-2 border-gray-700 hover:border-primary text-gray-300 hover:text-primary font-semibold px-6 py-3 rounded-full transition-all">
                Our Process
              </button>
            </div>
          </div>

          {/* Right side - Team cards */}
          <div className="space-y-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {member.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-dark/10 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-dark/10 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
