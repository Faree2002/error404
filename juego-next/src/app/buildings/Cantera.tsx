class Cantera extends Building {
    stoneProductionRate: number; // Add this line to define the property
    stone: number;
    lastCollectionTime: number;
    constructor(positionX: number, positionY: number) {
      super(positionX, positionY, 150, 1000); // Costo: 150, capacidad: 1000
      this.stoneProductionRate = 4; // Producción de piedra por minuto
      this.stone = 0; // Inicialmente la cantera no tiene piedra recolectada
      this.lastCollectionTime = 0;
      // Otros atributos específicos de la cantera
    }
  
    // Métodos específicos de la cantera
    collectStone() {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - this.lastCollectionTime) / 1000; // Tiempo transcurrido en segundos
  
      // Calcular la cantidad de piedra recolectada durante el tiempo transcurrido
      const stoneCollected = Math.floor((elapsedTime / 60) * this.stoneProductionRate); // 1 minuto = 60 segundos
  
      // Actualizar el tiempo de la última recolección de piedra
      this.lastCollectionTime = currentTime;
  
      // Actualizar la cantidad total de piedra recolectada
      this.stone += stoneCollected;
  
      // Devolver la cantidad de piedra recolectada
      return stoneCollected;
    }
  }
  export default Cantera;