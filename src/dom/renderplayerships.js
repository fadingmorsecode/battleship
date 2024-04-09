import Gameboard from '../logic/gameBoard';
import getDomCell from './getdomcell';

function addColor(cell) {
  const elementToColor = cell;
  elementToColor.style.backgroundColor = 'green';
}

export default function renderPlayerShips(board) {
  const boardObj = board;
  const { placedShips } = boardObj;

  placedShips.forEach((ship) => {
    const allCells = Gameboard.getAllCells(ship.coordinates, ship.length);
    allCells.forEach((cell) => {
      const domCell = getDomCell(cell, board.name);
      addColor(domCell);
    });
  });
}
