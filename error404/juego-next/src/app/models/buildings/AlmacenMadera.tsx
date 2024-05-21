import React from 'react';

interface AlmacenMaderaProps {
  positionX: number;
  positionY: number;
}

const AlmacenMadera: React.FC<AlmacenMaderaProps> = ({ positionX, positionY }) => {
  return (
    <div>
      {/* Representación del Almacen de Madera */}
      <p>Almacen de Madera - Posición: ({positionX}, {positionY})</p>
    </div>
  );
};

export default AlmacenMadera;