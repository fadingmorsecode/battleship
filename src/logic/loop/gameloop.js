import createPlayer from './createPlayer';
import createBoard from './createBoard';
import placeAllShips from './placeAllShips';

export default function startGame() {
  const playerOneName = 'PlayerOne';
  const computerName = 'CPU';
  const playerOne = createPlayer(playerOneName);
  const computer = createPlayer(computerName);
  const playerOneBoard = createBoard(playerOneName);
  const computerBoard = createBoard(computerName);
  placeAllShips(playerOneBoard);
  placeAllShips(computerBoard);
}
