import Gameboard from '../logic/gameBoard';

// associative array

export const associatedPlayerCells = [];
export const associatedComputerCells = [];

function associateWithAttribute(cell, user, ship) {
  const element = document.querySelector(
    `[coordinate=${cell}][boardName=${user}]`,
  );
  const elementObj = {};
  elementObj.cell = cell;
  elementObj.boardName = user;
  elementObj.ship = ship;

  if (user === 'player') {
    associatedPlayerCells.push(elementObj);
  } else {
    associatedComputerCells.push(elementObj);
  }
}

export default function associateCells(board) {
  const boardName = board.name;
  const boardObj = board;
  const { placedShips } = boardObj;

  placedShips.forEach((ship) => {
    const allCells = Gameboard.getAllCells(ship.coordinates, ship.length);
    allCells.forEach((cell) => {
      associateWithAttribute(cell, boardName, ship);
    });
  });
}
