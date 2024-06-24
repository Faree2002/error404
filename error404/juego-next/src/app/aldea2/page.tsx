'use client';

import React from 'react';

const Aldea = () => {
  return (
    <div className="bg-fondoAge min-h-screen flex flex-col items-center justify-center relative">
      <a href="/map" className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        🌍 Map
      </a>
      <img
        src="/images/WE - House.png"
        alt="House"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '175px',
          cursor: 'pointer',
        }}
      />
      <img
        src="/images/Cantera.png"
        alt="Cantera"
        style={{
            position: 'absolute',
            bottom: '25%',
            left: '25%',
            transform: 'translate(50%, 50%)',
            width: '220px',
            height: '175px',
        }}
      />
      <img
        src="/images/Aserradero.png"
        alt="Aserradero"
        style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateY(-50%)',
            width: '200px',
            height: '175px',
        }}
      />
      <img
        src="/images/Barracas.png"
        alt="Barracas"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          width: '200px',
          height: '175px',
        }}
      />
      <img
        src="/images/Almacén de Piedra.png"
        alt="Almacen de piedra"
        style={{
          position: 'absolute',
          top: '10%',
          right: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '175px',
        }}
      />
      <img
        src="/images/Almacén de Madera.png"
        alt="Almacen de madera"
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          transform: 'translate(50%, 50%)',
          width: '200px',
          height: '175px',
        }}
      />
    </div>
  );
};

export default Aldea;
