export default class Gameboard {
  constructor(name) {
    this.name = name;
    this.boardArr = [];
    this.placedShips = [];
    (() => {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= 10; j++) {
          this.boardArr.push(`${letters[i]}${j}`);
        }
      }
    })();
  }

  placeShip(ship, loc) {
    ship.updateCoordinates(loc);
    this.placedShips.push(ship);
  }
}
