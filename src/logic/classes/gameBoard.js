export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default class Gameboard {
  constructor(name) {
    this.name = name;
    this.boardArr = [];
    this.placedShips = [];
    this.missedShots = [];
    this.hitShots = [];
    this.allGuesses = [];
    (() => {
      for (let i = 0; i < 10; i += 1) {
        for (let j = 1; j <= 10; j += 1) {
          this.boardArr.push(`${letters[i]}${j}`);
        }
      }
    })();
  }

  static interveningNums(num1, num2) {
    return Math.abs(num1 - num2) - 1;
  }

  static getAllCells(coords, length) {
    const allCells = [];
    const start = coords[0];
    const end = coords[1];
    const startX = start.charAt(0);
    const startY = parseInt(start.substring(1), 10);
    const endX = end.charAt(0);
    const endY = parseInt(end.substring(1), 10);
    const baseCoordAmount = 2;
    if (startX === endX && startY !== endY && endY < 11) {
      // horizontal condition
      const distance = Gameboard.interveningNums(endY, startY);
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
    } else if (startX !== endX && startY === endY && startY < 11 && endY < 11) {
      // vertical condition
      const startIndex = letters.indexOf(startX);
      const endIndex = letters.indexOf(endX);
      const distance = Gameboard.interveningNums(endIndex, startIndex);
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
      const allCells = Gameboard.getAllCells(shipCoords, ship.length);
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
    const allDesired = Gameboard.getAllCells(desiredCoords, desiredLength);
    // flattens everyShipCell array and checks if desired coords exist
    return allDesired.some((item) => everyCellArr.flat().includes(item));
  }

  static isLegal(coords, length) {
    const result = Gameboard.getAllCells(coords, length);
    if (result !== false) {
      return true;
    }
    return false;
  }

  placeShip(ship, loc, board) {
    if (Gameboard.isLegal(loc, ship.length) !== false) {
      // move is legal, check if occupied.
      if (this.isOccupied(loc, ship.length) === false) {
        // not occupied, update ships coords and place ship
        ship.updateCoordinates(loc);
        this.placedShips.push(ship);
        ship.addOwner(board);
        return true;
      }
    }
    return false;
  }

  getShipFromCoordinate(coord) {
    const shipsArr = this.placedShips;
    let result;
    shipsArr.forEach((ship) => {
      const allShipCells = Gameboard.getAllCells(ship.coordinates, ship.length);
      if (allShipCells.includes(coord)) {
        result = ship;
      }
    });
    return result;
  }

  receiveAttack(location) {
    const shipsArr = this.getShips();
    if (shipsArr.flat().includes(location) === true) {
      const ship = this.getShipFromCoordinate(location);
      ship.hit();
      // keep track of hits
      this.hitShots.push(location);
      this.allGuesses.push(location);
      return true;
    }
    // keep track of missed shots
    this.missedShots.push(location);
    this.allGuesses.push(location);
    return false;
  }

  allSunk() {
    const shipsArr = this.placedShips;
    const sunkArr = [];
    shipsArr.forEach((ship) => {
      sunkArr.push(ship.sunk);
    });
    return sunkArr.every((val) => val === true);
  }
}
