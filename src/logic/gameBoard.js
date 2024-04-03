export default class Gameboard {
  constructor(name) {
    this.name = name;
    this.boardArr = [];
    this.placedShips = [];
    (() => {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      for (let i = 0; i < 10; i += 1) {
        for (let j = 1; j <= 10; j += 1) {
          this.boardArr.push(`${letters[i]}${j}`);
        }
      }
    })();
  }

  checkCoordinates(desiredCoords) {
    const allCoords = [];
    this.placedShips.forEach((ship) => {
      allCoords.push(...ship.coordinates);
    });
    return desiredCoords.some((item) => allCoords.includes(item));
  }

  placeShip(ship, loc) {
    if (this.checkCoordinates(loc) === false) {
      ship.updateCoordinates(loc);
      this.placedShips.push(ship);
    }
  }
}
