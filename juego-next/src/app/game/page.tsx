'use client'

import React, { useState } from 'react';
import AlmacenMadera from '../models/buildings/AlmacenMadera';
import AlmacenPiedra from '../models/buildings/AlmacenPiedra';
import Aserradero from '../models/buildings/Aserradero';
import Cantera from '../models/buildings/Cantera';
import Building from '../models/buildings/Building';

function Game() {
  const initialMoney = 1000; // Cantidad inicial de dinero
  const [money, setMoney] = useState(initialMoney);
  const [selectedBuilding, setSelectedBuilding] = useState<{ name: string; cost: number } | null>(null); // Edificio seleccionado
  const [showBuildings, setShowBuildings] = useState(false); // Estado para mostrar/ocultar las imágenes de los edificios
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa

  const buildBuilding = (buildingCost: number) => {
    if (money >= buildingCost) {
      setMoney(money - buildingCost);
      // Lógica para construir el edificio...
    } else {
      alert('No tienes suficiente dinero para construir este edificio.');
    }
  };

  const buildingTypes: { name: string; cost: number }[] = [
    { name: 'We - House', cost: 1000 },
    { name: 'We - Lumber Camp', cost: 1500 },
    { name: 'We - Mining Camp', cost: 2000 },
    // Agrega más edificios según necesites
  ];

  const handleBuildingClick = (building: { name: string; cost: number }) => {
    setSelectedBuilding(building);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-grassGreen min-h-screen relative flex flex-col items-center justify-center">
      <p className="text-white font-bold absolute top-0 left-0 m-4">Dinero: ${money}</p>
      {/* Botón del menú hamburguesa */}
      <div className="absolute top-4 left-4">
        <button
          className="text-white hover:text-gray-300 focus:outline-none"
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
        <div className="absolute top-12 left-4 bg-white p-2 border border-gray-300 rounded-md shadow-md">
          {/* Botón para mostrar/ocultar las imágenes */}
          <button onClick={() => setShowBuildings(!showBuildings)} className="bg-amber-400 hover:bg-amber-300 text-white font-bold drop-shadow-[0_1.2px_1.5px_rgba(0,0,0,0.8)] py-2 px-4 border border-amber-400 rounded-full" style={{ textShadow: '0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black, -0.5px 0.5px black' }}>
            Tienda
          </button>
          {/* Imágenes de los edificios */}
          {showBuildings && (
            <div className="flex flex-col mt-2">
              {buildingTypes.map((building, index) => (
                <img
                  key={index}
                  src={`/images/${building.name}.png`}
                  alt={building.name}
                  className="w-1/2 cursor-pointer"
                  onClick={() => handleBuildingClick(building)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
