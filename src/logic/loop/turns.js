let turn = 'player';

export function getTurn() {
  return turn;
}

export function toggleTurn() {
  if (turn === 'player') {
    turn = 'computer';
  } else {
    turn = 'player';
  }
}
