'use client'

import React, { useState } from 'react';

function Game() {
  const [imageVisible, setImageVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTiendaClick = () => {
    setImageVisible(!imageVisible);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setSelectedPosition({ x, y });
  };

  return (
    <div className="bg-Grey min-h-screen flex items-center justify-center relative">
      {/* Botón del menú hamburguesa */}
      <div className="absolute top-4 left-4">
        <button
          className="text-amber-400 hover:text-amber-300 focus:outline-none"
          onClick={handleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {/* Menú desplegable */}
        {menuOpen && (
          <div className="absolute left-0 top-12 left-4 z-10">
            <div className="bg-amber-400 rounded-lg shadow-md py-2 px-4">
          <button
            className="block w-full text-left text-amber-400 hover:text-amber-300 focus:outline-none py-2"
            onClick={handleTiendaClick}
          >
            Tienda
          </button>
            </div>
          </div>
        )}
        {/* Imagen */}
      {imageVisible && (
        <div className={`absolute transition-all top-10 left-15 ${menuOpen ? 'w-50' : 'w-0'} overflow-hidden z-10`}>
          <img
            src="/images/WE - House.png"
            alt="House"
            className="w-full cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
      )}
    </div>
  );
}

export default Game;
