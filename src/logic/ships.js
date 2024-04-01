export default class Ship {
  constructor(name) {
    this.name = name;
    this.length = this.getLength();
    this.hits = 0;
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

  hit() {
    this.hits += 1;
  }
}
