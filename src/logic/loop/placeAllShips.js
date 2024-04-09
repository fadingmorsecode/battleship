import Ship from '../ships';

const playerShipLocs = [
  ['A5', 'E5'],
  ['C2', 'D2'],
  ['G1', 'G4'],
  ['G6', 'I6'],
  ['E8', 'E10'],
];

const computerShipLocs = [
  ['F8', 'J8'],
  ['H2', 'I2'],
  ['B7', 'B10'],
  ['F3', 'F5'],
  ['H5', 'J5'],
];

export default function placeAllShips(board, name) {
  const ShipObj = [
    new Ship('Carrier'),
    new Ship('Destroyer'),
    new Ship('Battleship'),
    new Ship('Submarine'),
    new Ship('Cruiser'),
  ];
  if (board.name === 'player') {
    for (let i = 0; i < ShipObj.length; i += 1) {
      board.placeShip(ShipObj[i], playerShipLocs[i]);
    }
  } else if (board.name === 'cpu') {
    for (let i = 0; i < ShipObj.length; i += 1) {
      board.placeShip(ShipObj[i], computerShipLocs[i]);
    }
  }
}
