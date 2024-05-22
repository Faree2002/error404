import Building from './Building';

class AlmacenMadera extends Building {
  capacity: number;
    constructor(positionX: number, positionY: number) {
      super("Almacén de Madera", 300, "Capacidad: 1500", positionX, positionY); // Costo: 300, capacidad: 1500
      this.capacity = 1500; // Establece la capacidad
      // Otros atributos específicos del almacen de madera
    }
  
    // Métodos específicos del almacen de madera
  }
  export default AlmacenMadera;