import Gameboard from './gameBoard';

export default class Ship {
  constructor(name) {
    this.name = name;
    this.length = null;
    this.hits = 0;
    this.sunk = false;
    this.coordinates = [];
    this.owner = null;

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

  getDomCells() {
    const sunkCells = [];
    const allCoords = Gameboard.getAllCells(this.coordinates, this.length);
    let divs;
    if (this.owner.name === 'cpu') {
      divs = document.querySelectorAll('[boardName="cpu"]');
    } else if (this.owner.name === 'player') {
      divs = document.querySelectorAll('[boardName="player"]');
    }
    divs.forEach((div) => {
      allCoords.forEach((coord) => {
        if (
          div.hasAttribute('coordinate') &&
          div.getAttribute('coordinate') === coord
        ) {
          sunkCells.push(div);
        }
      });
    });
    return sunkCells;
  }

  toggleSunkClass() {
    const cells = this.getDomCells();
    cells.forEach((cell) => {
      cell.classList.add('sunk');
    });
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
      this.toggleSunkClass();
    }
  }

  hit() {
    this.hits += 1;
    this.isSunk();
  }

  updateCoordinates(newCoords) {
    this.coordinates.push(...newCoords);
  }

  addOwner(board) {
    this.owner = board;
  }
}
