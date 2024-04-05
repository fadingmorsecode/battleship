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

  getAllCells(coords, length) {
    const allCells = [];
    const start = coords[0];
    const end = coords[1];
    const startX = start.charAt(0);
    const startY = parseInt(start.substring(1), 10);
    const endX = end.charAt(0);
    const endY = parseInt(end.substring(1), 10);
    const baseCoordAmount = 2;
    if (startX === endX && startY !== endY) {
      // horizontal condition
      const distance = this.interveningNums(endY, startY);
      const combined = baseCoordAmount + distance;
      if (combined === length) {
        // start coords
        allCells.push(start);
        // intervening coords
        let y = startY;
        for (let i = 0; i < distance; i += 1) {
          y += 1;
          allCells.push(`${startX}${y}`);
        }
        // end coords
        allCells.push(end);
        return allCells;
      }
    } else if (startX !== endX && startY === endY) {
      // vertical condition
      const startIndex = letters.indexOf(startX);
      const endIndex = letters.indexOf(endX);
      const distance = this.interveningNums(endIndex, startIndex);
      const combined = baseCoordAmount + distance;
      if (combined === length) {
        // start coords
        allCells.push(start);
        // intervening coords
        let interveningIndex = letters.indexOf(startX);
        for (let i = 0; i < distance; i += 1) {
          interveningIndex += 1;
          allCells.push(`${letters[interveningIndex]}${startY}`);
        }
        // end coords
        allCells.push(end);
        return allCells;
      }
    }
    return false;
  }

  getShips() {
    const everyShipCell = [];
    this.placedShips.forEach((ship) => {
      const shipCoords = ship.coordinates;
      const allCells = this.getAllCells(shipCoords, ship.length);
      everyShipCell.push(allCells);
    });
    return everyShipCell;
  }

  isOccupied(desiredCoords, desiredLength) {
    const everyCellArr = this.getShips();
    // return false if no ships are placed
    if (everyCellArr.length === 0) {
      return false;
    }
    // get all cells of desired ship's coordinates
    const allDesired = this.getAllCells(desiredCoords, desiredLength);
    // flattens everyShipCell array and checks if desired coords exist
    return allDesired.some((item) => everyCellArr.flat().includes(item));
  }

  interveningNums(num1, num2) {
    return Math.abs(num1 - num2) - 1;
  }

  isLegal(coords, length) {
    const result = this.getAllCells(coords, length);
    if (result !== false) {
      return true;
    }
    return false;
  }

  placeShip(ship, loc) {
    // check if occupied and if placement is legal
    if (
      this.isOccupied(loc, ship.length) === false &&
      this.isLegal(loc, ship.length) !== false
    ) {
      // ship coordinates are updated on ship object
      ship.updateCoordinates(loc);
      // push ship coordinates to placedShips array
      this.placedShips.push(ship);
    }
  }

  receiveAttack(location) {
    const shipsArr = this.getShips();
    return shipsArr.flat().includes(location);
  }
}
