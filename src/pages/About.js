import React from 'react';

function About() {
  return (
    <main className="py-20 px-8 bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-gray-900 to-orange-500 opacity-20 animate-gradient-flow"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl font-extrabold mb-6 animate-fade-in">
          About Me
        </h2>
        
        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-8 animate-slide-up">
          My name is Latifa Wakili. As an aspiring web developer, I have built a strong grasp of the core web technologies: HTML, CSS, JavaScript, React, Tailwind.css, and Next.js. With expertise in styling, interactivity, and content structuring, I am equipped to craft impressive and user-centric websites that captivate audiences. My web development skills position me to create engaging online experiences. I am a passionate developer focused on creating impactful solutions.
        </p>
        
        {/* Avatar Image */}
        <div className="relative group">
          <img
            src="/assets/Wakili-pic.jpg"
            alt="My Avatar"
            className="rounded-full mx-auto mb-6 border-4 border-orange-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
            <p className="text-orange-500 font-bold">Latifa Wakili</p>
          </div>
        </div>
        
        {/* Button */}
        <a
          href="/contact"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 hover:scale-105 transition transform animate-bounce-slow"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}

export default About;