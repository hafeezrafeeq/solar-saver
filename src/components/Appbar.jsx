import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Appbar({ showMenu = true, showButton = true , innerClass="", outerClass="" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`px-6 py-4 flex items-center justify-between relative ${outerClass}`}>
      {/* Logo */}
      <div className="lg:w-28 md:w-26 sm:w-24 w-20">
        <img
          src="https://solarsaver.vercel.app/assets/logo-CeUqb7XY.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
    
        <ul className={`md:flex flex gap-5 flex-wrap lg:gap-14 md:gap-5 text-stone-50 justify-center font-normal ${innerClass}`}>
          <li className="hover:text-yellow-500 cursor-pointer">Pricing</li>
          <li className="hover:text-yellow-500 cursor-pointer">About</li>
          <li className="hover:text-yellow-500 cursor-pointer">Tools</li>
          <li className="hover:text-yellow-500 cursor-pointer">How it Works</li>
          <li className="hover:text-yellow-500 cursor-pointer">Testimonials</li>
          <li className="hover:text-yellow-500 cursor-pointer">FAQ</li>
        </ul>

      

      {/* Desktop Button */}
      {showButton && (
        <div className="hidden md:block">
          <button className="bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-stone-50 hover:text-yellow-500 transition duration-200">
            Calculate Solar
          </button>
        </div>
      )}


      {showMenu && (
        <div
          className="md:hidden z-10 text-stone-50 text-8xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      )}

 
      {menuOpen && showMenu && (
        <div className="absolute top-full left-0 text-stone-50 hover:text-stone-50 w-full bg-[rgba(255, 255, 255, 0.07)] backdrop-blur-lg p-6 rounded-xl shadow-md flex flex-col items-center py-4 md:hidden space-y-4 z-10">
          <a className="hover:text-amber-500">Pricing</a>
          <a className="hover:text-amber-500">About</a>
          <a className="hover:text-amber-500">Tools</a>
          <a className="hover:text-amber-500">How it Work</a>
          <a className="hover:text-amber-500">Testimonials</a>
          <a className="hover:text-amber-500">FAQ</a>

          {showButton && (
            <button className="bg-amber-600 text-white px-5 py-2 rounded-lg duration-1000 hover:bg-stone-50 hover:text-amber-500 transition">
              Get Started
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Appbar;
