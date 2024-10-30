"use client"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-16">
          <div className="h-full grid grid-cols-2 md:grid-cols-12 items-center">
            <div className="col-span-1 md:col-span-3">
              <img 
                src="/Images/logo.png" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:col-span-9 md:grid md:grid-cols-5 md:gap-4 md:items-center">
              <a className="text-yellow-500 hover:text-yellow-600 text-center">HOME</a>
              <a className="text-slate-500 hover:text-slate-700 text-center">RESTURNT</a>
              <a className="text-slate-500 hover:text-slate-700 text-center">SERVICES</a>
              <a className="text-slate-500 hover:text-slate-700 text-center">CART</a>
              <p className="text-slate-500 hover:text-slate-700 text-center cursor-pointer">Sign In</p>
            </div>

            <div className="col-span-1 md:hidden justify-self-end">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-500 hover:text-slate-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
              <div className="grid grid-cols-1 gap-2 px-4 py-4">
                <a className="text-yellow-500 hover:text-yellow-600 py-2">HOME</a>
                <a className="text-slate-500 hover:text-slate-700 py-2">RESTURNT</a>
                <a className="text-slate-500 hover:text-slate-700 py-2">SERVICES</a>
                <a className="text-slate-500 hover:text-slate-700 py-2">CART</a>
                <p className="text-slate-500 hover:text-slate-700 py-2 cursor-pointer">Sign In</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;