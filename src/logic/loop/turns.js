let turn = 'player';
let turns = 0;

export function getTurn() {
  return turn;
}

export function turnText() {
  if (turns === 0) {
    return 'Attack your enemy';
  }
  if (turn === 'player') {
    return 'Your turn to attack';
  }
  if (turn === 'computer') {
    return 'Enemy is attacking';
  }
}

export function toggleTurn() {
  turns += 1;
  if (turn === 'player') {
    turn = 'computer';
  } else {
    turn = 'player';
  }
}
