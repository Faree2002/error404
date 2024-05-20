import Building from './Building';

class Aserradero extends Building {
  name: string;
  cost: number;
  capacity: number;
  description: string;
    woodProductionRate: number; // Add this line to define the property
    wood: number;
    lastCollectionTime: number;
    constructor(positionX: number, positionY: number) {
      super(positionX, positionY); // Costo: 150, capacidad: 1000
      this.name = "Aserradero"; // Establecer el nombre del aserradero
      this.cost = 150; // Establece el costo
      this.capacity = 1000; // Establece la capacidad
      this.description = "Genera 240 por hora";
      this.woodProductionRate = 4; // Producción de madera por minuto
      this.wood = 0; // Inicialmente el aserradero no tiene madera recolectada
      this.lastCollectionTime = 0;
      // Otros atributos específicos del aserradero
    }
  
    // Métodos específicos del aserradero
    collectWood() {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - this.lastCollectionTime) / 1000; // Tiempo transcurrido en segundos
  
      // Calcular la cantidad de madera recolectada durante el tiempo transcurrido
      const woodCollected = Math.floor((elapsedTime / 60) * this.woodProductionRate); // 1 minuto = 60 segundos
  
      // Actualizar el tiempo de la última recolección de madera
      this.lastCollectionTime = currentTime;
  
      // Actualizar la cantidad total de madera recolectada
      this.wood += woodCollected;
  
      // Devolver la cantidad de madera recolectada
      return woodCollected;
    }
  }
  export default Aserradero;