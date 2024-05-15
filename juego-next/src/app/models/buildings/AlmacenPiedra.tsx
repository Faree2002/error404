import Building from './Building'; // Import the Building class

class AlmacenPiedra extends Building {
    constructor(positionX: number, positionY: number) {
      super(positionX, positionY, 300, 1500); // Costo: 300, capacidad: 1500
      // Otros atributos específicos del almacen de piedra
    }
  
    // Métodos específicos del almacen de piedra
  }
  export default AlmacenPiedra;