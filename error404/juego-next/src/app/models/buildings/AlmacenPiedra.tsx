// AlmacenPiedra.tsx
import React from 'react';

interface AlmacenPiedraProps {
  positionX: number;
  positionY: number;
}

const AlmacenPiedra: React.FC<AlmacenPiedraProps> = ({ positionX, positionY }) => {
  return (
    <div>
      {/* Representación del Almacen de Piedra */}
      <p>Almacen de Piedra - Posición: ({positionX}, {positionY})</p>
    </div>
  );
};

export default AlmacenPiedra;