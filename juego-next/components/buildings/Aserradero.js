class Aserradero extends Building {
    constructor(positionX, positionY) {
      super(positionX, positionY, 150, 1000); // Costo: 150, capacidad: 1000
      this.woodProductionRate = 4;
      // Otros atributos específicos del aserradero
    }
  
    // Métodos específicos del aserradero
    collectWood() {
      // Lógica para recolectar madera
    }
  }