import Gameboard from '../logic/gameBoard';
import { userObjArr } from '../logic/loop/gameloop';
import { userBoardArr } from '../logic/loop/gameloop';

import { getTurn } from '../logic/loop/turns';
import { toggleTurn } from '../logic/loop/turns';

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
}

// computer attacks should toggle cell class

function attackCell(cell, user) {
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
      toggleTurn();
      triggerCompAttack();
      toggleTurn();
    }
  }
}

export default function loadAttackListener() {
  document.addEventListener('click', (e) => {
    if (
      e.target.hasAttribute('boardname') &&
      e.target.getAttribute('boardname') === 'cpu' &&
      getTurn() === 'player'
    ) {
      attackCell(e.target, 'player');
    }
  });
}
