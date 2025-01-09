import React from 'react';

function Home() {
  return (
    <main className="text-center py-20 bg-black text-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-white" >Welcome to My Portfolio</h1>
      <p className="text-lg mb-8 text-gray-300">
        A showcase of creativity, skills, and professional work.
      </p>
      <a
        href="/portfolio"
        className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-orange-600 transition"
      >
        Explore My Work
      </a>
    </main>
  );
}

export default Home;