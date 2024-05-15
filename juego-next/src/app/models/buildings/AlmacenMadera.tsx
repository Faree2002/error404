import Building from './Building';

class AlmacenMadera extends Building {
  name: string;
  cost: number;
  capacity: number;
  description: string;
    constructor(positionX: number, positionY: number) {
      super(positionX, positionY); // Costo: 300, capacidad: 1500
      this.name = "Almacén de Madera"; // Establecer el nombre del almacén de madera
      this.cost = 300; // Establece el costo
      this.capacity = 1500; // Establece la capacidad
      this.description = "Almacena madera.";
      // Otros atributos específicos del almacen de madera
    }
  
    // Métodos específicos del almacen de madera
  }
  export default AlmacenMadera;