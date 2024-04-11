import { getTurn } from '../logic/loop/turns';
import triggerPlayerAttack from '../logic/loop/attackloop';
import { getGameStatus } from '../logic/loop/gamestatus';

export default function loadAttackListener() {
  document.addEventListener('click', (e) => {
    if (
      e.target.hasAttribute('boardname') &&
      e.target.getAttribute('boardname') === 'cpu' &&
      getTurn() === 'player' &&
      getGameStatus() === true
    ) {
      triggerPlayerAttack(e.target, 'player');
    }
  });
}
