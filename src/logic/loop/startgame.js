import randomlyPlaceCompShips from './placeAllShips';
import { addToBoardArr, addToObjArr } from './storage';
import loadAttackListener from '../../dom/attacklistener';
import { changeStatusToTrue } from './gamestatus';
import getPlayerInputs from './dragships';
import { turnText } from './turns';
import changeInfoText from '../../dom/changeinfotext';
import loadDynamicText from '../../dom/loaddynamictext';
import Player from '../classes/player';
import Gameboard from '../classes/gameBoard';

export default async function startGame() {
  const playerOneName = 'player';
  const computerName = 'cpu';
  const playerOne = new Player(playerOneName);
  const computer = new Player(computerName);
  addToObjArr(playerOne);
  addToObjArr(computer);
  const playerOneBoard = new Gameboard(playerOneName);
  const computerBoard = new Gameboard(computerName);
  addToBoardArr(playerOneBoard);
  addToBoardArr(computerBoard);

  await getPlayerInputs(playerOneBoard);
  randomlyPlaceCompShips(computerBoard);
  changeStatusToTrue();
  loadAttackListener();
  loadDynamicText();
  changeInfoText(turnText());
}
