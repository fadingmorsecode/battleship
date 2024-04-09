import Gameboard from '../logic/gameBoard';
import { userBoardArr } from '../logic/loop/gameloop';

function toggleMiss(cell) {
  cell.classList.add('miss');
}

function toggleHit(cell) {
  cell.classList.add('hit');
}

function attackCell(cell, user) {
  if (user === 'player') {
    const cellCoordinate = cell.getAttribute('coordinate');
    if (!userBoardArr[1].allGuesses.includes(cellCoordinate)) {
      const attack = userBoardArr[1].receiveAttack(cellCoordinate);
      console.log(userBoardArr[1]);
      // if attack hits, should mark cell in red.
      if (attack === true) {
        toggleHit(cell);
      } else {
        toggleMiss(cell);
      }
      // if attack misses, should mark cell in grey.
    }
  }
}

export default function loadAttackListener() {
  document.addEventListener('click', (e) => {
    if (
      e.target.hasAttribute('boardname') &&
      e.target.getAttribute('boardname') === 'cpu'
    ) {
      attackCell(e.target, 'player');
    }
  });
}
