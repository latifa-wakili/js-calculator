import React from 'react';

function Home() {
  return (
    <main className="relative text-center py-20 bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-black to-orange-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent animate-gradient-xy"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-6 text-white animate-fade-in">
          Welcome to <span className="text-orange-500">My Portfolio</span>
        </h1>
        <p className="text-lg mb-8 text-gray-300 animate-slide-up">
          A showcase of creativity, skills, and professional work.
        </p>
        <a
          href="/portfolio"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-orange-600 hover:scale-105 transition transform animate-bounce-slow"
        >
          Explore My Work
        </a>
      </div>
    </main>
  );
}

export default Home;