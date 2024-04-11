import { changeStatusToFalse } from './gamestatus';

export default function endgame(user) {
  changeStatusToFalse();
  if (user === 'player') {
    console.log('player wins');
    // player wins action
  } else {
    console.log('computer wins');
    // computer wins action
  }
}
