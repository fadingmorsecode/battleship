import Ship from '../ships';
import { letters } from '../gameBoard';

const lettersArr = Array.from(letters);

const ShipObj = [
  new Ship('Carrier'),
  new Ship('Destroyer'),
  new Ship('Battleship'),
  new Ship('Submarine'),
  new Ship('Cruiser'),
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomCoords(ship) {
  const coords = [];
  let firstX;
  let firstY;
  let secondX;
  let secondY;
  // randomly choose between horizontal and vertical;
  const rotation = getRandomInt(2);
  if (rotation === 0) {
    // horizontal
    const firstXIndex = getRandomInt(11);
    firstX = lettersArr[firstXIndex];
    secondX = firstX;
    firstY = getRandomInt(11) + 1;
    secondY = firstY + ship.length - 1;
    coords.push(`${firstX}${firstY}`);
    coords.push(`${secondX}${secondY}`);
    return coords;
  }
  // vertical
  const firstXIndex = getRandomInt(11);
  firstX = lettersArr[firstXIndex];
  const secondXIndex = firstXIndex + ship.length - 1;
  secondX = lettersArr[secondXIndex];
  firstY = getRandomInt(11) + 1;
  secondY = firstY;
  coords.push(`${firstX}${firstY}`);
  coords.push(`${secondX}${secondY}`);
  return coords;
}

function tryPlacingShip(board, ship) {
  // trys to place on board. if it isn't successful it should generate a new placement
  function tryPlacement() {
    const result = board.placeShip(ship, generateRandomCoords(ship), board);
    if (result === true) {
      return;
    }
    tryPlacement();
  }
  tryPlacement();
}

export default function randomlyPlaceCompShips(board) {
  ShipObj.forEach((ship) => {
    tryPlacingShip(board, ship);
  });
  console.log(board);
}
