// pages/game.tsx

import React from 'react';

function game() {
  return (
    <div style={{ backgroundColor: 'green', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <img src="/images/WE - House.png" alt="House" style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </div>
    </div>
  );
}

export default game;
