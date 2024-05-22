import Building from './Building';

class Barracas extends Building {
  capacity: number;
    unities: number;
    unitiesProductionRate : number;
    lastProductionTime: number;
    knightCost: number;
    archerCost: number;
    constructor(positionX: number, positionY: number) {
      super("Barracas", 100, "Entrena unidades", positionX, positionY); // Costo: 100
      this.capacity = 10; // Establece la capacidad
      this.unitiesProductionRate = 6; // Producción de unidades por minuto
      this.unities = 0; // Inicialmente no hay unidades
      this.lastProductionTime = Date.now();
      this.knightCost = 10; // Costo de entrenamiento por Caballero
      this.archerCost = 20; // Costo de entrenamiento por Arquera
      // Otros atributos específicos de Barracas
    }
  
    // Métodos específicos de Barracas
    trainUnities() {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - this.lastProductionTime) / 1000; // Tiempo transcurrido en segundos
    
        // Calcular la cantidad de unidades entrenadas durante el tiempo transcurrido
        const unitiesTrained = Math.floor((elapsedTime / 60) * this.unitiesProductionRate); // 1 minuto = 60 segundos
    
        // Actualizar el tiempo del último entrenamiento
        this.lastProductionTime = currentTime;
    
        // Asegurarse de que la cantidad total de unidades no exceda la capacidad
        this.unities = Math.min(this.capacity, this.unities + unitiesTrained);
    
        // Devolver la cantidad de unidades entrenadas
        return unitiesTrained;
    }
  }
  export default Barracas;