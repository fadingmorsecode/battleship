export default class Ship {
  constructor(name) {
    this.name = name;
    this.length = null;
    this.hits = 0;
    this.sunk = false;
    this.coordinates = [];

    (() => {
      switch (this.name) {
        case 'Destroyer':
          this.length = 2;
          break;
        case 'Submarine':
          this.length = 3;
          break;
        case 'Cruiser':
          this.length = 3;
          break;
        case 'Battleship':
          this.length = 4;
          break;
        case 'Carrier':
          this.length = 5;
          break;
        default:
          throw Error('no valid name or length present');
      }
    })();
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
    this.coordinates.push(...newCoords);
  }
}
