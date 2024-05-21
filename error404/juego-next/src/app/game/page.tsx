'use client';

import React, { useState } from 'react';

function Game() {
  const initialMoney = 10000; // Cantidad inicial de dinero
  const [money, setMoney] = useState(initialMoney);
  const [showBuildings, setShowBuildings] = useState(false); // Estado para mostrar/ocultar las imágenes de los edificios
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa
  const [showBoughtBuildings, setShowBoughtBuildings] = useState(false); // Estado para mostrar/ocultar los edificios comprados
  const [boughtBuildings, setBoughtBuildings] = useState<{ name: string; cost: number; count: number }[]>([]);

  const buildingTypes: { name: string; cost: number }[] = [
    { name: 'House', cost: 1000 },
    { name: 'Lumber Camp', cost: 1500 },
    { name: 'Mining Camp', cost: 2000 },
    // Agrega más edificios según necesites
  ];

  const buildBuilding = (building: { name: string; cost: number }) => {
    if (money >= building.cost) {
      setMoney(money - building.cost);
      const existingBuilding = boughtBuildings.find(b => b.name === building.name);
      if (existingBuilding) {
        existingBuilding.count += 1;
        setBoughtBuildings([...boughtBuildings]);
      } else {
        setBoughtBuildings([...boughtBuildings, { ...building, count: 1 }]);
      }
    } else {
      alert('No tienes suficiente dinero para construir este edificio.');
    }
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleShowBuildings = () => {
    setShowBuildings(!showBuildings);
    if (showBoughtBuildings) setShowBoughtBuildings(false); // Cerrar inventario si tienda está abierta
  };

  const toggleShowBoughtBuildings = () => {
    setShowBoughtBuildings(!showBoughtBuildings);
    if (showBuildings) setShowBuildings(false); // Cerrar tienda si inventario está abierto
  };

  return (
    <div className="bg-grassGreen min-h-screen relative flex flex-col items-center justify-center">
      <p className="text-white font-bold absolute top-0 right-0 m-4">Dinero: ${money}</p>
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={toggleShowBuildings}
              className="bg-amber-400 hover:bg-amber-300 text-white font-bold drop-shadow-[0_1.2px_1.5px_rgba(0,0,0,0.8)] py-2 px-4 border border-amber-400 rounded-full"
              style={{ textShadow: '0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black, -0.5px 0.5px black' }}>
              Tienda
            </button>
            <button onClick={toggleShowBoughtBuildings}
              className="bg-amber-400 hover:bg-amber-300 text-white font-bold drop-shadow-[0_1.2px_1.5px_rgba(0,0,0,0.8)] py-2 px-4 border border-amber-400 rounded-full mt-2"
              style={{ textShadow: '0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black, -0.5px 0.5px black' }}>
              Inventario
            </button>
          </div>
          {/* Imágenes de los edificios */}
          {showBuildings && (
            <div className="flex flex-col mt-2">
              {buildingTypes.map((building, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="text-gray-800">{building.name} = ${building.cost}</p>
                  <div className="flex items-center justify-between w-full">
                    <img
                      src={`/images/${building.name}.png`}
                      alt={building.name}
                      className="w-1/2 cursor-pointer"
                      onClick={() => buildBuilding(building)}
                    />
                    {/* Botón para construir el edificio */}
                    <button onClick={() => buildBuilding(building)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-md">Construir</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {showBoughtBuildings && (
            <div className="flex flex-col mt-2">
              {boughtBuildings.map((building, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="text-gray-800">{building.name} = ${building.cost}</p>
                  <div className="relative">
                    <img
                      src={`/images/${building.name}.png`}
                      alt={building.name}
                      className="w-1/2"
                    />
                    {building.count > 1 && (
                      <span className="absolute bottom-0 right-0 bg-black text-white text-xs px-1 rounded-full">
                        x{building.count}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
