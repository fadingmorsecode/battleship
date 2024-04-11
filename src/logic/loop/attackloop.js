import { userBoardArr, userObjArr } from './storage';
import { toggleTurn } from './turns';
import endGame from './endgame';
import checkSunk from './checkSunk';

function toggleMiss(cell) {
  cell.classList.add('miss');
}

function toggleHit(cell) {
  cell.classList.add('hit');
}

function getAttackedDiv(coord) {
  const playerDivs = document.querySelectorAll('[boardName="player"]');
  let result;
  playerDivs.forEach((div) => {
    if (
      div.hasAttribute('coordinate') &&
      div.getAttribute('coordinate') === coord
    ) {
      result = div;
    }
  });
  return result;
}

function triggerCompAttack() {
  const compAttack = userObjArr[1].computerAttack(userBoardArr[0]);
  const attackedDiv = getAttackedDiv(compAttack.coordinate);
  if (compAttack.successful === true) {
    toggleHit(attackedDiv);
  } else if (compAttack.successful !== true) {
    toggleMiss(attackedDiv);
  }
  const allSunkPlayerBoard = checkSunk(userBoardArr[0]);
  if (allSunkPlayerBoard === true) {
    endGame('computer');
  }
}

export default function triggerPlayerAttack(cell, user) {
  if (user === 'player') {
    const cellCoordinate = cell.getAttribute('coordinate');
    if (!userBoardArr[1].allGuesses.includes(cellCoordinate)) {
      const playerAttack = userObjArr[0].attack(
        cellCoordinate,
        userBoardArr[1],
      );
      if (playerAttack === true) {
        toggleHit(cell);
      } else {
        toggleMiss(cell);
      }
      const allSunkCompBoard = checkSunk(userBoardArr[1]);
      if (allSunkCompBoard === true) {
        endGame('player');
      }
      toggleTurn();
      triggerCompAttack();
      toggleTurn();
    }
  }
}
