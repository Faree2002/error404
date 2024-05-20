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

  return (
    <div className="bg-grassGreen min-h-screen relative flex flex-col items-center justify-center">
      <p className="text-white font-bold absolute top-0 left-0 m-4">Dinero: ${money}</p>
      <div className="relative h-64 w-64">
        <img src="/images/WE - House.png" alt="House" className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-4 left-4">
        <button onClick={() => setShowBuildings(!showBuildings)} className="bg-amber-400 hover:bg-amber-300 text-white font-bold drop-shadow-[0_1.2px_1.5px_rgba(0,0,0,0.8)] py-2 px-4 border border-amber-400 rounded-full" style={{ textShadow: '0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black, -0.5px 0.5px black' }}>
          Tienda
        </button>
        {showBuildings && (
          <div className="absolute bottom-14 left-4 bg-white p-2 border border-gray-300 rounded-md shadow-md w-80">
            <h3 className="text-gray-800 font-semibold mb-2">Edificios disponibles:</h3>
            <ul>
              {buildingTypes.map((building, index) => (
                <li key={index} className="text-gray-800 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">{building.name}</span>
                      <span className="ml-4">${building.cost}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm">{building.description}</p>
                    <button onClick={() => buildBuilding(building.cost)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-md">Construir</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;