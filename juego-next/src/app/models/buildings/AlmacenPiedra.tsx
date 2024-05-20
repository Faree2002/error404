import Building from './Building';

class AlmacenPiedra extends Building {
  name: string;
  cost: number;
  capacity: number;
  description: string;
    constructor(positionX: number, positionY: number) {
      super(positionX, positionY); // Costo: 300, capacidad: 1500
      this.name = "Almacén de Piedra"; // Establecer el nombre del almacén de piedra
      this.cost = 300; // Establece el costo
      this.capacity = 1500; // Establece la capacidad
      this.description = "Capacidad: 1500";
      // Otros atributos específicos del almacen de piedra
    }
  
    // Métodos específicos del almacen de piedra
  }
  export default AlmacenPiedra;