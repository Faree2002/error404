'use client'

import React, { useState } from 'react';
import AlmacenMadera from '../models/buildings/AlmacenMadera';
import AlmacenPiedra from '../models/buildings/AlmacenPiedra';
import Aserradero from '../models/buildings/Aserradero';
import Cantera from '../models/buildings/Cantera';
import Building from '../models/buildings/Building';

function Game() {
  const [imageVisible, setImageVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const initialMoney = 1000; // Dinero inicial del jugador
  

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTiendaClick = () => {
    setImageVisible(!imageVisible);
  };

  const handleBuildingClick = (building: string) => {
    console.log(`Building ${building} was clicked.`);
  };

  return (
    <div className="bg-Grey flex items-left relative">
      {/* Botón del menú hamburguesa */}
      <div className="absolute top-4 left-4">
        <button
          className="text-black hover:text-amber-300 focus:outline-none"
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
        <div className="absolute left-15 top-6 left-10 z-10">
          <div className="bg-amber-400 rounded-lg shadow-md py-2 px-4">
            <button
              className="block top-0 text-left text-Black hover:text-amber-300 focus:outline-none py-2"
              onClick={handleTiendaClick}
            >
              Tienda
            </button>
          </div>
        </div>
      )}

      {/* Contenedor del fondo e imágenes */}
      <div className="absolute left-10 top-20">
        {/* Imágenes */}
        {imageVisible && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <img
              src="/images/We - House.png"
              alt="Casa"
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleBuildingClick('house')}
            />
            <img
              src="/images/We - Lumber Camp.png"
              alt="Campamento de Madera"
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleBuildingClick('lumberCamp')}
            />
            <img
              src="/images/We - Mining Camp.png"
              alt="Campamento de Madera"
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleBuildingClick('miningCamp')}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
