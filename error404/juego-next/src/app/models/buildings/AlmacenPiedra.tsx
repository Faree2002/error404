import Building from './Building';

class AlmacenPiedra extends Building {
  capacity: number;
    constructor(positionX: number, positionY: number) {
      super("Almacén de Piedra", 300, "Capacidad: 1500", positionX, positionY); // Costo: 300, capacidad: 1500
      this.capacity = 1500; // Establece la capacidad
      // Otros atributos específicos del almacen de piedra
    }
  
    // Métodos específicos del almacen de piedra
  }
  export default AlmacenPiedra;