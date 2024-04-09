import createPlayer from './createPlayer';
import createBoard from './createBoard';
import placeAllShips from './placeAllShips';
import renderPlayerShips from '../../dom/renderplayerships';
import associateCells from '../../dom/associatecells';

export default function startGame() {
  const playerOneName = 'player';
  const computerName = 'cpu';
  const playerOne = createPlayer(playerOneName);
  const computer = createPlayer(computerName);
  const playerOneBoard = createBoard(playerOneName);
  const computerBoard = createBoard(computerName);
  placeAllShips(playerOneBoard);
  placeAllShips(computerBoard);
  associateCells(playerOneBoard);
  renderPlayerShips(playerOneBoard);
}
