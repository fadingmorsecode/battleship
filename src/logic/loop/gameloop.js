import createPlayer from './createPlayer';
import createBoard from './createBoard';
import placeAllShips from './placeAllShips';
import { addToBoardArr, addToObjArr } from './storage';
import loadAttackListener from '../../dom/attacklistener';
import { changeStatusToTrue } from './gamestatus';
import getPlayerInputs from './dragships';
import { turnText } from './turns';
import changeInfoText from './changeinfotext';

export default async function startGame() {
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

  await getPlayerInputs(playerOneBoard);
  placeAllShips(computerBoard);
  changeStatusToTrue();
  loadAttackListener();
  changeInfoText(turnText());
}
