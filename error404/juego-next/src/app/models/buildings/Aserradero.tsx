import Building from './Building';

class Aserradero extends Building {
  capacity: number;
    woodProductionRate: number; // Add this line to define the property
    wood: number;
    lastCollectionTime: number;
    constructor(positionX: number, positionY: number) {
      super("Aserradero", 150, "Genera 1 de madera por segundo", positionX, positionY); // Costo: 150, capacidad: 1000
      this.capacity = 1000; // Establece la capacidad
      this.woodProductionRate = 4; // Producción de madera por minuto
      this.wood = 0; // Inicialmente el aserradero no tiene madera recolectada
      this.lastCollectionTime = Date.now();
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
  
      // Asegurarse de que la cantidad total de madera no exceda la capacidad
      this.wood = Math.min(this.capacity, this.wood + woodCollected);
  
      // Devolver la cantidad de madera recolectada
      return woodCollected;
    }
  }
  export default Aserradero;