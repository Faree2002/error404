class Cantera extends Building {
    constructor(positionX, positionY) {
      super(positionX, positionY, 150, 1000); // Costo: 150, capacidad: 1000
      this.stoneProductionRate = 4;
      // Otros atributos específicos de la cantera
    }
  
    // Métodos específicos de la cantera
    collectStone() {
      // Lógica para recolectar piedra
    }
  }