import Gameboard from '../logic/classes/gameBoard';
import getDomCell from './getdomcell';

function afloat(cell) {
  const elementToColor = cell;
  elementToColor.classList.add('afloat');
}

export default function renderPlayerShips(board) {
  const boardObj = board;
  const { placedShips } = boardObj;

  placedShips.forEach((ship) => {
    const allCells = Gameboard.getAllCells(ship.coordinates, ship.length);
    allCells.forEach((cell) => {
      const domCell = getDomCell(cell, board.name);
      afloat(domCell);
    });
  });
}
