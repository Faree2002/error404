// pages/game.tsx

import React from 'react';

function Game() {
    return (
      <div className="bg-grassGreen min-h-screen flex items-center justify-center">
        <div className="relative h-64 w-64">
            <img src="/images/WE - House.png" alt="House" className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    );
}

export default Game;

