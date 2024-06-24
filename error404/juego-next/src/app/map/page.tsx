'use client';
import React from 'react';

const Map = () => {
  const handleNavigateToAldea = (ruta: string) => {
    // Navega a la ruta especificada
    window.location.href = ruta;
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-fondomap bg-cover bg-no-repeat"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Aldea 1 (Arriba a la izquierda) */}
      <button
        onClick={() => handleNavigateToAldea('/aldea')}
        className="bg-Aldea1 border-none"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '200px', // Ajusta el tamaño según tus necesidades
          height: '175px', // Ajusta el tamaño según tus necesidades
        }}
      >
      </button>

      {/* Aldea 2 (Arriba a la derecha) */}
      <button
        onClick={() => handleNavigateToAldea('/aldea2')}
        className="bg-Aldea2 border-none"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px', // Ajusta el tamaño según tus necesidades
          height: '175px', // Ajusta el tamaño según tus necesidades
        }}
      >
      </button>

      {/* Aldea 3 (Abajo a la izquierda) */}
      <button
        onClick={() => handleNavigateToAldea('/aldea3')}
        className="bg-Aldea3 "
        style={{
          cursor: 'pointer',
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '200px', // Ajusta el tamaño según tus necesidades
          height: '175px', // Ajusta el tamaño según tus necesidades
        }}
      >
      </button>

      {/* Aldea 4 (Tu Aldea Principal, Abajo a la derecha) */}
      <button
        onClick={() => handleNavigateToAldea('/game')}
        className="bg-Aldea4 border-none"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          bottom: '10%',
          right: '25%',
          width: '200px', // Ajusta el tamaño según tus necesidades
          height: '175px', // Ajusta el tamaño según tus necesidades
        }}
      >
      </button>

      {/* Botón para volver a Aldea */}
      <button
        onClick={() => window.open('/game', '_self')}
        className="absolute bottom-2 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Village
      </button>
    </div>
  );
};

export default Map;
