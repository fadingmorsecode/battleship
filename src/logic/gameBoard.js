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

  isOccupied(desiredCoords) {
    const allCoords = [];
    this.placedShips.forEach((ship) => {
      allCoords.push(...ship.coordinates);
    });
    return desiredCoords.some((item) => allCoords.includes(item));
  }

  isDiagonal(loc) {
    // const xPos = [];
    // const yPos = [];
    // // loc.forEach((coord) => {
    // //   xPos.push(coord.charAt(0));
    // //   yPos.push(coord.charAt(1));
    // // });
    // // const xResult = xPos.every((x) => x === xPos[0]);
    // // const yResult = yPos.every((y) => y === yPos[0]);
    // // if (xResult === false || yResult === false) {
    // //   return true;
    // // }
    // // return false;
  }

  //   && this.isDiagonal(loc) === false

  placeShip(ship, loc) {
    if (this.isOccupied(loc) === false) {
      ship.updateCoordinates(loc);
      this.placedShips.push(ship);
    }
  }
}

// TO WORK ON NEXT. OVERHANG & HORIZONTAL + VERTICAL PLACEMENT (LEGALITY)
// START X POSITION, END X POSITION.
// START Y POSITION, END Y POSITION.
// OVERHANG PROBABLY HAS SOMETHING TO DO WITH LENGTH OF SHIP AND WHETHER OR NOT THE COORDS LIKE
// SHIP HAS 4 SPOTS BUT ONLY 3 COORDINATES PRESENT. SO OVERHANGING.

// ALSO CHECK TO MAKE SURE PLACEMENT CHECKS FOR EXACT LENGTH OF SHIP!!! IF 4, NEEDS 4 COORDS.
