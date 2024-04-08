import createPlayer from './createPlayer';
import createBoard from './createBoard';

export default function startGame() {
  const playerOneName = 'PlayerOne';
  const computerName = 'CPU';
  const playerOne = createPlayer(playerOneName);
  const computer = createPlayer(computerName);
  const playerOneBoard = createBoard(playerOneName);
  const computerBoard = createBoard(computerName);
  // work on placeAllShips for computer
  // commit
  // make it call the placeAllShips func for player
  // make it call the placeAllShips func for computer
  // commit
}
