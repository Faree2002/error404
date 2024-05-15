class Building {
  positionX: number;
  positionY: number;
  cost: number;
  capacity: number;
    constructor(positionX: number, positionY: number, cost: number, capacity: number) {
      this.positionX = positionX;
      this.positionY = positionY;
      this.cost = cost;
      this.capacity = capacity;
      // Otros atributos comunes
    }
  
    // Métodos comunes
    build() {
      // Lógica para construir el edificio
    }
  
    upgrade() {
      // Lógica para mejorar el edificio
    }
  
    // Otros métodos comunes
  }

export default Building;
  