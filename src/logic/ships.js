export default class Ship {
  constructor(name) {
    this.name = name;
    this.length = this.getLength();
    this.hits = 0;
    this.sunk = false;
    this.coordinates = [];
  }

  getLength() {
    switch (this.name) {
      case 'Destroyer':
        return 2;
      case 'Submarine':
        return 3;
      case 'Cruiser':
        return 3;
      case 'Battleship':
        return 4;
      case 'Carrier':
        return 5;
      default:
        throw Error('no valid name or length present');
    }
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }

  hit() {
    this.hits += 1;
    this.isSunk();
  }

  updateCoordinates(newCoords) {
    this.coordinates.push(newCoords[0], newCoords[1]);
  }
}
