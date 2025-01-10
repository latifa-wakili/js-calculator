import React from 'react';

function About() {
  return (
    <main className="py-20 px-8 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
        My name is Latifa Wakili. As an aspiring web developer, I have built a strong grasp of the core web technologies: HTML, CSS, JavaScript, React , Tailwind.css and Next.js. With expertise in styling, interactivity, and content structuring, I am equipped to craft impressive and user-centric websites that captivate audiences. My web development skills position me to create engaging online experiences.
          I am a passionate developer focused on creating impactful solutions.
        </p>
        <img
          src="/assets/Wakili-pic.jpg"
          alt="My Avatar"
          className="rounded-full mx-auto mb-6 border-4 border-orange-500 shadow-lg"
        />
        <a
          href="/contact"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}

export default About;