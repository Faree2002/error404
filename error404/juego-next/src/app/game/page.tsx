'use client'

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import AlmacenMadera from '../models/buildings/AlmacenMadera';
import AlmacenPiedra from '../models/buildings/AlmacenPiedra';
import Aserradero from '../models/buildings/Aserradero';
import Cantera from '../models/buildings/Cantera';
import Barracas from '../models/buildings/Barracas';
import Building from '../models/buildings/Building';

function Game() {
  const initialMoney = 1000; // Cantidad inicial de dinero
  const [money, setMoney] = useState(initialMoney);
  const [wood, setWood] = useState(0); // Cantidad inicial de madera
  const [stone, setStone] = useState(0); // Cantidad inicial de piedra
  const [knights, setKnights] = useState(0); // Cantidad inicial de caballeros
  const [archers, setArchers] = useState(0); // Cantidad inicial de arqueras
  const [showBuildings, setShowBuildings] = useState(false); // Estado para mostrar/ocultar los edificios
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null); // Edificio seleccionado para construir
  const [buildingPosition, setBuildingPosition] = useState<{ x: number, y: number } | null>(null); // Posición del edificio en movimiento
  const [builtBuildings, setBuiltBuildings] = useState<{ building: Building, x: number, y: number }[]>([]); // Lista de edificios construidos
  const [selectedBuildingForDeletion, setSelectedBuildingForDeletion] = useState<{ building: Building, x: number, y: number } | null>(null); // Edificio seleccionado para eliminar
  const [showDeletionMenu, setShowDeletionMenu] = useState<{ x: number, y: number } | null>(null); // Posición del menú de eliminación
  const [trainKnights, setTrainKnights] = useState(0); // Cantidad de caballeros a entrenar
  const [trainArchers, setTrainArchers] = useState(0); // Cantidad de arqueras a entrenar

  const [collectingWood, setCollectingWood] = useState(false); // Estado para recolección automática de madera
  const [collectingStone, setCollectingStone] = useState(false); // Estado para recolección automática de piedra

  const buildBuilding = (building: Building) => {
    if (money >= building.cost) {
      setMoney(money - building.cost);
      setSelectedBuilding(building); // Selecciona el edificio para construir
      setShowBuildings(false); // Oculta la tienda

      {/*
      if (building instanceof AlmacenMadera) {
        setWood(wood + 100); // Agrega madera al contador (por ejemplo)
      } else if (building instanceof AlmacenPiedra) {
        setStone(stone + 100); // Agrega piedra al contador (por ejemplo)
      }
*/}
    } else {
      alert('No tienes suficiente dinero para construir este edificio.');
    }
  };

  const startResourceCollection = (resource: 'wood' | 'stone') => {
    if (resource === 'wood') {
      setCollectingWood(true);
    } else if (resource === 'stone') {
      setCollectingStone(true);
    }
  };

  const stopResourceCollection = (resource: 'wood' | 'stone') => {
    if (resource === 'wood') {
      setCollectingWood(false);
    } else if (resource === 'stone') {
      setCollectingStone(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (selectedBuilding) {
      setBuildingPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseClick = (e: React.MouseEvent) => {
    if (selectedBuilding && buildingPosition) {
      // Agregar el edificio a la lista de edificios construidos
      setBuiltBuildings([...builtBuildings, { building: selectedBuilding, x: buildingPosition.x, y: buildingPosition.y }]);

      // Iniciar recolección automática del recurso si es un aserradero o una cantera
      if (selectedBuilding instanceof Aserradero) {
        startResourceCollection('wood');
      } else if (selectedBuilding instanceof Cantera) {
        startResourceCollection('stone');
      }

      setSelectedBuilding(null);
      setBuildingPosition(null);
    } else {
      handleHideDeletionMenu(); // Llama a la función para restablecer los valores de trainKnights y trainArchers
    }
  };


  const handleBuildingClick = (building: { building: Building, x: number, y: number }, e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic se propague al manejador de clic global
    setSelectedBuildingForDeletion(building);
    setShowDeletionMenu({ x: e.clientX, y: e.clientY });
  };

  const handleDeleteBuilding = () => {
    if (selectedBuildingForDeletion) {
      // Verificar si el edificio seleccionado es un aserradero o una cantera
      if (selectedBuildingForDeletion.building instanceof Aserradero) {
        stopResourceCollection('wood');
      } else if (selectedBuildingForDeletion.building instanceof Cantera) {
        stopResourceCollection('stone');
      }

      const updatedBuildings = builtBuildings.filter(b => b !== selectedBuildingForDeletion);
      setBuiltBuildings(updatedBuildings);
      setMoney(money + selectedBuildingForDeletion.building.cost);

      {/*
      if (selectedBuildingForDeletion.building instanceof AlmacenMadera) {
        setWood(wood - 100); // Resta madera del contador (por ejemplo)
      } else if (selectedBuildingForDeletion.building instanceof AlmacenPiedra) {
        setStone(stone - 100); // Resta piedra del contador (por ejemplo)
      }
*/}

      setSelectedBuildingForDeletion(null);
      setShowDeletionMenu(null);
    }
  };

  useEffect(() => {
    // Recolectar madera automáticamente cada segundo
    let woodInterval: NodeJS.Timeout;
    if (collectingWood) {
      woodInterval = setInterval(() => {
        setWood(prevWood => prevWood + 1); // Ajusta la cantidad de madera recolectada según sea necesario
      }, 1000);
    }
    return () => clearInterval(woodInterval);
  }, [collectingWood]);

  useEffect(() => {
    // Recolectar piedra automáticamente cada segundo
    let stoneInterval: NodeJS.Timeout;
    if (collectingStone) {
      stoneInterval = setInterval(() => {
        setStone(prevStone => prevStone + 1); // Ajusta la cantidad de piedra recolectada según sea necesario
      }, 1000);
    }
    return () => clearInterval(stoneInterval);
  }, [collectingStone]);

  const handleTrainTroops = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic se propague al manejador de clic global
    if (selectedBuildingForDeletion && selectedBuildingForDeletion.building && selectedBuildingForDeletion.building.archerCost !== undefined && selectedBuildingForDeletion.building.knightCost !== undefined) {
      const knightCost = selectedBuildingForDeletion.building.knightCost * trainKnights;
      const archerCost = selectedBuildingForDeletion.building.archerCost * trainArchers;
      const totalCost = knightCost + archerCost;
      if (money >= totalCost) {
        setMoney(money - totalCost);
        setKnights(knights + trainKnights);
        setArchers(archers + trainArchers);
        setTrainKnights(0);
        setTrainArchers(0);
      } else {
        alert('No tienes suficiente dinero para entrenar estas tropas.');
      }
    }
  };

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic se propague al manejador de clic global
  };

  const handleHideDeletionMenu = () => {
    setShowDeletionMenu(null);
    setTrainKnights(0);
    setTrainArchers(0);
  };

  const buildingTypes = [
    new AlmacenMadera(0, 0),
    new AlmacenPiedra(0, 0),
    new Aserradero(0, 0),
    new Cantera(0, 0),
    new Barracas(0, 0),
    // Agrega más edificios según necesites
  ];

  const renderDeletionMenu = () => {
    if (selectedBuildingForDeletion && showDeletionMenu) {
      const isBarracas = selectedBuildingForDeletion.building.name === "Barracas";

      return (
        <div
          className="absolute bg-white border border-gray-300 rounded-md shadow-md p-2"
          style={{ left: `${showDeletionMenu.x}px`, top: `${showDeletionMenu.y}px` }}
        >
          {isBarracas && (
            <div>
              <div className="text-gray-800 font-semibold mb-2">Tropas:</div>
              <div className="text-gray-800 flex justify-between items-center mb-1">
                <span>Caballeros</span>
                <span>${selectedBuildingForDeletion.building.knightCost}</span>
              </div>
              <div className="text-gray-800 flex justify-between items-center mb-1">
                <span>Arqueras</span>
                <span>${selectedBuildingForDeletion.building.archerCost}</span>
              </div>
              <div className="text-gray-800 flex justify-between items-center mb-1">
                <label className="mr-2">Caballeros:</label>
                <input
                  type="number"
                  value={trainKnights}
                  onChange={(e) => setTrainKnights(parseInt(e.target.value))}
                  className="border rounded-md p-1 w-16"
                  min="0"
                  onClick={handleInputClick}
                />
              </div>
              <div className="text-gray-800 flex justify-between items-center mb-1">
                <label className="mr-2">Arqueras:</label>
                <input
                  type="number"
                  value={trainArchers}
                  onChange={(e) => setTrainArchers(parseInt(e.target.value))}
                  className="border rounded-md p-1 w-16"
                  min="0"
                  onClick={handleInputClick}
                />
              </div>
              <button
                onClick={handleTrainTroops}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-md mt-2"
              >
                Entrenar
              </button>
            </div>
          )}
          <button
            onClick={handleDeleteBuilding}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md mt-2"
          >
            Eliminar
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-fondoAge min-h-screen relative flex flex-col items-center justify-center" onMouseMove={handleMouseMove} onClick={handleMouseClick}>
      {/* Botón Chat */}
      <button
        onClick={() => window.open('/chat')}
        className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Chat
      </button>
      <p className="text-white font-bold absolute top-0 left-0 m-4">Dinero: ${money}</p>
      <p className="text-white font-bold absolute top-0 left-0 mt-8 ml-4">Madera: {wood}</p>
      <p className="text-white font-bold absolute top-0 left-0 mt-12 ml-4">Piedra: {stone}</p>
      <p className="text-white font-bold absolute top-0 left-0 mt-16 ml-4">Caballeros: {knights}</p>
      <p className="text-white font-bold absolute top-0 left-0 mt-20 ml-4">Arqueras: {archers}</p>
      <div className="relative h-64 w-64">
        <img src="/images/WE - House.png" alt="House" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-4 left-4">
        <button onClick={() => setShowBuildings(!showBuildings)} className="bg-amber-400 hover:bg-amber-300 text-white font-bold drop-shadow-[0_1.2px_1.5px_rgba(0,0,0,0.8)] py-2 px-4 border border-amber-400 rounded-full" style={{ textShadow: '0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black, -0.5px 0.5px black' }}>
          Tienda
        </button>
        {showBuildings && (
          <div className="absolute bottom-14 left-4 z-10 bg-white p-2 border border-gray-300 rounded-md shadow-md w-64">
            <h3 className="text-gray-800 font-semibold mb-2">Edificios disponibles:</h3>
            <ul>
              {buildingTypes.map((building, index) => (
                <li key={index} className="text-gray-800 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">{building.name}</span>
                      <span className="ml-4">${building.cost}</span>
                      <p className="text-sm">{building.description}</p>
                    </div>
                    <button onClick={() => buildBuilding(building)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-md mt-2">Construir</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {builtBuildings.map((built, index) => (
        <img
          key={index}
          src={`/images/${built.building.name}.png`}
          alt={built.building.name}
          className="absolute cursor-pointer z-0"
          style={{
            left: `${built.x}px`,
            top: `${built.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
          onClick={(e) => handleBuildingClick(built, e)}
        />
      ))}
      {selectedBuilding && buildingPosition && (
        <img
          src={`/images/${selectedBuilding.name}.png`}
          alt={selectedBuilding.name}
          className="absolute pointer-events-none z-0"
          style={{
            left: `${buildingPosition.x}px`,
            top: `${buildingPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {showDeletionMenu && renderDeletionMenu()}
    </div>
  );
}

export default Game;