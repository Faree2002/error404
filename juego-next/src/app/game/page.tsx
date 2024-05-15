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
  const initialMoney = 1000; // Cantidad inicial de dinero
  const [money, setMoney] = useState(initialMoney);
  const [showBuildings, setShowBuildings] = useState(false); // Estado para mostrar/ocultar los edificios

  const buildBuilding = (buildingCost: number) => {
    if (money >= buildingCost) {
      setMoney(money - buildingCost);
      // Lógica para construir el edificio...
    } else {
      alert('No tienes suficiente dinero para construir este edificio.');
    }
  };

  const buildingTypes = [
    new AlmacenMadera(0, 0),
    new AlmacenPiedra(0, 0),
    new Aserradero(0, 0),
    new Cantera(0, 0),
    // Agrega más edificios según necesites
  ];

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
            <button
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleBuildingClick('house')}
            >
              <img
                src="/images/We - House.png"
                alt="Casa"
                className="w-full h-full"
              />
            </button>
            <button
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleBuildingClick('lumberCamp')}
            >
              <img
                src="/images/We - Lumber Camp.png"
                alt="Campamento de Madera"
                className="w-full h-full"
              />
            </button>
            <button
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleBuildingClick('miningCamp')}
            >
              <img
                src="/images/We - Mining Camp.png"
                alt="Campamento de Madera"
                className="w-full h-full"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
