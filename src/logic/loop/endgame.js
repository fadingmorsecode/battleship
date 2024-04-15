import changeInfoText from './changeinfotext';
import { changeStatusToFalse } from './gamestatus';

export default function endGame(user) {
  changeStatusToFalse();
  if (user === 'player') {
    changeInfoText('You win!');
  } else {
    changeInfoText('You lose!');
  }
}
