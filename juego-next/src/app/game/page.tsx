// pages/game.tsx

import React from 'react';

function Game() {
    return (
      <div className="bg-grassGreen min-h-screen flex items-center justify-center">
        <div className="relative h-64 w-64">
            <img src="/images/WE - House.png" alt="House" className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-4 left-4">
        <button className="bg-amber-400 hover:bg-amber-300 text-white font-bold drop-shadow-[0_1.2px_1.5px_rgba(0,0,0,0.8)] py-2 px-4 border border-amber-400 rounded-full" style={{ textShadow: '0.5px 0.5px black, -0.5px -0.5px black, 0.5px -0.5px black, -0.5px 0.5px black' }}>
            Tienda
        </button>
        </div>
      </div>
    );
}

export default Game;

