import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // وضعیت منو

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // تغییر وضعیت نمایش منو
  };

  return (
    <header className="bg-black text-white p-4 shadow-md">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-xl font-bold text-orange-500">My Portfolio</h1>
        
        {/* منوی دسکتاپ */}
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/portfolio" className="hover:text-yellow-300">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* منوی موبایل */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <i className="fas fa-bars"></i> {/* آیکن همبرگر */}
          </button>
        </div>
      </nav>

      {/* منوی موبایل (در حالت باز) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" className="hover:text-yellow-300" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-yellow-300" onClick={toggleMenu}>About</Link>
          <Link to="/portfolio" className="hover:text-yellow-300" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/contact" className="hover:text-yellow-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;