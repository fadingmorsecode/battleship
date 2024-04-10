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

// computer attacks should toggle cell class

function attackCell(cell, user) {
  if (user === 'player') {
    const cellCoordinate = cell.getAttribute('coordinate');
    if (!userBoardArr[1].allGuesses.includes(cellCoordinate)) {
      const attack = userObjArr[0].attack(cellCoordinate, userBoardArr[1]);
      if (attack === true) {
        // if attack hits, should mark cell in red.
        toggleHit(cell);
      } else {
        // if attack misses, should mark cell in grey.
        toggleMiss(cell);
      }
      // toggle the turn then
      toggleTurn();
      userObjArr[1].computerAttack(userBoardArr[0]);
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
