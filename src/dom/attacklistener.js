import { getTurn } from '../logic/loop/turns';
import triggerPlayerAttack from '../logic/loop/attackloop';

export default function loadAttackListener() {
  document.addEventListener('click', (e) => {
    if (
      e.target.hasAttribute('boardname') &&
      e.target.getAttribute('boardname') === 'cpu' &&
      getTurn() === 'player'
    ) {
      triggerPlayerAttack(e.target, 'player');
    }
  });
}
