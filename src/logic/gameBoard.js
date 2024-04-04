const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default class Gameboard {
  constructor(name) {
    this.name = name;
    this.boardArr = [];
    this.placedShips = [];
    (() => {
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

  interveningNums(num1, num2) {
    return Math.abs(num1 - num2) - 1;
  }

  isLegal(coords, length) {
    const start = coords[0];
    const end = coords[1];
    const startX = start.charAt(0);
    const startY = start.charAt(1);
    const endX = end.charAt(0);
    const endY = end.charAt(1);

    const baseCoordAmount = 2;

    if (startX === endX && startY !== endY) {
      // horizontal condition
      const distance = this.interveningNums(endY, startY);
      if (baseCoordAmount + distance === length) {
        return true;
      }
    } else if (startX !== endX && startY === endY) {
      // vertical condition
      const startIndex = letters.indexOf(startX);
      const endIndex = letters.indexOf(endX);
      const distance = this.interveningNums(endIndex, startIndex);
      if (baseCoordAmount + distance === length) {
        return true;
      }
    }
    return false;
  }

  placeShip(ship, loc) {
    // check if occupied and if placement is legal
    console.log(this.isLegal(loc, ship.length));
    if (
      this.isOccupied(loc) === false &&
      this.isLegal(loc, ship.length) !== false
    ) {
      // ship coordinates are updated on ship object
      ship.updateCoordinates(loc);
      // push ship coordinates to placedShips array
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
