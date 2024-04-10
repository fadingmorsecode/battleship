import createPlayer from './createPlayer';
import createBoard from './createBoard';
import placeAllShips from './placeAllShips';
import renderPlayerShips from '../../dom/renderplayerships';
import associateCells from '../../dom/associatecells';
import loadAttackListener from '../../dom/attacklistener';

export const userObjArr = [];
export const userBoardArr = [];

function addToObjArr(user) {
  userObjArr.push(user);
}

function addToBoardArr(board) {
  userBoardArr.push(board);
}

export default function startGame() {
  const playerOneName = 'player';
  const computerName = 'cpu';
  const playerOne = createPlayer(playerOneName);
  const computer = createPlayer(computerName);
  addToObjArr(playerOne);
  addToObjArr(computer);
  const playerOneBoard = createBoard(playerOneName);
  const computerBoard = createBoard(computerName);
  addToBoardArr(playerOneBoard);
  addToBoardArr(computerBoard);

  placeAllShips(playerOneBoard);
  placeAllShips(computerBoard);

  associateCells(playerOneBoard);
  associateCells(computerBoard);

  renderPlayerShips(playerOneBoard);
  loadAttackListener();
}
