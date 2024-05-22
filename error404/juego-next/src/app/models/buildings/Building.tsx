class Building {
  name: string;
  cost: number;
  description: string;
  positionX: number;
  positionY: number;
  knightCost?: number; // Optional property
  archerCost?: number; // Optional property
  constructor(name: string, cost: number, description: string, positionX: number, positionY: number) {
      this.name = name;
      this.cost = cost;
      this.description = description;
      this.positionX = positionX;
      this.positionY = positionY;
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