import Gameboard from '../logic/gameBoard';

function associateWithAttribute(cell, user, ship) {
  const element = document.querySelector(
    `[coordinate=${cell}][boardName=${user}]`,
  );
  element.setAttribute('ship', ship.name);
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
